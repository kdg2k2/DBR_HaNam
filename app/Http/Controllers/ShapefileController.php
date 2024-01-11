<?php

namespace App\Http\Controllers;

use App\dbr;
use App\History_BU;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\UpShapFile;
use App\User;
use Chumper\Zipper\Facades\Zipper;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;
use Shapefile\Shapefile;
use Shapefile\ShapefileException;
use Shapefile\ShapefileReader;

class ShapefileController extends Controller
{
    public function getDanhSach(Request $request)
    {
        $type = '';
        if ($request->type) {
            $type = $request->type;
            $data = UpShapFile::whereNotNull($type)->orderBy('ngaytao', 'desc')->get();
        } else {
            $data = UpShapFile::orderBy('ngaytao', 'desc')->get();
        }

        return view('admin/shp/danhsach', [
            'data' => $data,
            'type' => $type,
        ]);
    }

    public function getUpload()
    {
        return view('admin/shp/create');
    }

    public function postUpload(Request $request)
    {
        ini_set('memory_limit', '-1');
        set_time_limit(1200);
        $files = $request->file('file');
        $fileName = pathinfo($files[0]->getClientOriginalName(), PATHINFO_FILENAME);
        $arr_check = [$fileName . ".dbf", $fileName . ".prj", $fileName . ".shp", $fileName . ".shx"];
        foreach ($files as $f) {
            if (($key = array_search($f->getClientOriginalName(), $arr_check)) !== false) {
                unset($arr_check[$key]);
            }
        }

        if (count($arr_check) == 0) {
            foreach ($files as $f) {
                $f->storeAs('Shapefile/' . $fileName, $f->getClientOriginalName());
            }
            $new = new UpShapFile();
            $new->ten = $fileName;
            $new->ngaytao = Date('Y-m-d H:i:s');
            $new->path = "Shapefile/" . $fileName;
            $new->id_user = Auth::user()->id;
            $new->save();

            $path = UpShapFile::findOrFail($new->id)->path;
            $name = explode('/', $path)[1] . ".shp";

            try {
                $Shapefile = new ShapefileReader(storage_path('app/' . $path . '/' . $name));
                $Shapefile->setCurrentRecord(1)->fetchRecord()->getWKT();
                $data_shp = $Shapefile->setCurrentRecord(1);
                $data_tt = $data_shp->fetchRecord()->getDataArray();
                $tot = $Shapefile->getTotRecords();
            } catch (ShapefileException $e) {
                return redirect("admin/shp/create")->with('err', $e->getMessage());
            }

            //lưu kiểu shp file
            if ($request->type == 'churung') {
                $new->churung = $data_tt['MACHUR'];
            } else if ($request->type == 'huyen') {
                $new->huyen = $data_tt['MAHUYEN'];
            } else if ($request->type == 'xa') {
                $new->xa = $data_tt['MAXA'];
            }
            $new->save();

            //check đủ trường dữ liệu
            $arr_check_fields = ['TT', 'MATINH', 'MAHUYEN', 'MAXA', 'XA', 'TK', 'KHOANH', 'LO', 'THUAD', 'TOBANDO', 'DDANH', 'DTICH', 'DIENTICHCH', 'NGGOCR', 'LDLR', 'MALDLR', 'SLDLR', 'NAMTR', 'CAPTUOI', 'KTAN', 'NGGOCRT', 'THANHRUNG', 'MGO', 'MTN', 'MGOLO', 'MTNLO', 'LAPDIA', 'MALR3', 'MDSD', 'MAMDSD', 'DTUONG', 'CHURUNG', 'MACHUR', 'TRCHAP', 'QUYENSD', 'THOIHANSD', 'KHOAN', 'NQH', 'NGUOINK', 'NGUOITRCH', 'MANGNK', 'MANGTRCH', 'NGSINH', 'KD', 'VD', 'CAPKD', 'CAPVD', 'LOCU', 'VITRITHUA', 'TINH', 'HUYEN'];
            $fields = $Shapefile->getFields();

            foreach ($fields as $key => $value) {
                if (($f = array_search($key, $arr_check_fields)) !== false) {
                    unset($arr_check_fields[$f]);
                }
            }

            if (!count($arr_check_fields) == 0) {
                if (File::exists(storage_path('app/' . $new->path))) {
                    File::deleteDirectory(storage_path('app/' . $new->path));
                }
                $new->delete();
                return redirect("admin/shp/create")->with('err', 'Shapefile thiếu trường ' . implode(', ', $arr_check_fields));
            }

            //check hệ tọa độ
            $prjPath = storage_path('app/' . $path . '/' . pathinfo($name, PATHINFO_FILENAME) . '.prj');
            $prjContent = file_get_contents($prjPath);
            if (!strpos($prjContent, 'GEOGCS["GCS_WGS_1984"') == false) {
                if (File::exists(storage_path('app/' . $new->path))) {
                    File::deleteDirectory(storage_path('app/' . $new->path));
                }
                $new->delete();
                return redirect("admin/shp/create")->with('err', 'Shapefile không đúng hệ tọa độ WGS84 (EPSG:4326)');
            }

            //check điều kiện loại shp
            for ($i = 1; $i < $tot; $i++) {
                try {
                    $data_shp_check = $Shapefile->setCurrentRecord($i);
                    $data_tt_check = $data_shp_check->fetchRecord()->getDataArray();
                    $data = UpShapFile::findOrFail($new->id);

                    if ($data_tt_check['MATINH'] != 35) {
                        if (File::exists(storage_path('app/' . $data->path))) {
                            File::deleteDirectory(storage_path('app/' . $data->path));
                        }
                        $data->delete();
                        return redirect("admin/shp/create")->with('err', 'Mã tỉnh trong shape file không đúng (Mã tỉnh hành chính của Hà Nam là 35');
                    }
                } catch (ShapefileException $e) {
                    switch ($e->getErrorType()) {
                        case Shapefile::ERR_GEOM_RING_AREA_TOO_SMALL:
                            break;
                        default:
                            exit("Error Type: " . $e->getErrorType()
                                . "\nMessage: " . $e->getMessage()
                                . "\nDetails: " . $e->getDetails());
                            break;
                    }
                }
            }

            return redirect('/admin/shp')->with('success', 'Upload shapefile thành công');
        } else {
            return redirect("admin/shp/create")->with('err', 'Upload file không đúng');
        }
    }

    public function getDownload($id)
    {
        $info = UpShapFile::findOrFail($id);
        $path = $info->path;
        $name = explode('/', $path)[1];
        $zip = glob(storage_path('app/' . $path));
        Zipper::make(public_path("Download/" . $name . ".zip"))->folder($name)->add($zip)->close();
        return response()->download(public_path("Download/" . $name . ".zip"));
    }

    public function getXoa($id)
    {
        $data = UpShapFile::findOrFail($id);
        if (File::exists(storage_path('app/' . $data->path))) {
            File::deleteDirectory(storage_path('app/' . $data->path));
        }
        $data->delete();

        return redirect("admin/shp")->with('success', "Xóa shapefile thành công");
    }

    public function getSuDung($id)
    {
        ini_set('memory_limit', '-1');
        set_time_limit(600);
        $path = UpShapFile::findOrFail($id)->path;
        $name = explode('/', $path)[1] . ".shp";

        try {
            $Shapefile = new ShapefileReader(storage_path('app/' . $path . '/' . $name));
            $tot = $Shapefile->getTotRecords();
            $Shapefile->setCurrentRecord(1)->fetchRecord()->getWKT();
        } catch (ShapefileException $e) {
            return redirect("admin/shp")->with('err', $e->getMessage());
        }

        /* Backup */
        if (dbr::count() > 0) {
            $max_backup_id = History_BU::max('backup_id');
            if ($max_backup_id == null) {
                $max_backup_id = 1;
            } else {
                $max_backup_id = $max_backup_id + 1;
            }
            DB::table('data_backup')->insertUsing(
                [
                    'gid', 'tt', 'id', 'matinh', 'mahuyen', 'maxa', 'xa', 'tk', 'khoanh', 'lo', 'thuad', 'tobando', 'ddanh', 'dtich', 'dientichch', 'nggocr', 'ldlr', 'maldlr', 'sldlr', 'namtr', 'captuoi', 'ktan', 'nggocrt', 'thanhrung', 'mgo', 'mtn', 'mgolo', 'mtnlo', 'lapdia', 'malr3', 'mdsd', 'mamdsd', 'dtuong', 'churung', 'machur', 'trchap', 'quyensd', 'thoihansd', 'khoan', 'nqh', 'nguoink', 'nguoitrch', 'mangnk', 'mangtrch', 'ngsinh', 'kd', 'vd', 'capkd', 'capvd', 'locu', 'vitrithua', 'tinh', 'huyen', 'geom'
                ],
                function ($query) {
                    $query
                        ->select([
                            'gid', 'tt', 'id', 'matinh', 'mahuyen', 'maxa', 'xa', 'tk', 'khoanh', 'lo', 'thuad', 'tobando', 'ddanh', 'dtich', 'dientichch', 'nggocr', 'ldlr', 'maldlr', 'sldlr', 'namtr', 'captuoi', 'ktan', 'nggocrt', 'thanhrung', 'mgo', 'mtn', 'mgolo', 'mtnlo', 'lapdia', 'malr3', 'mdsd', 'mamdsd', 'dtuong', 'churung', 'machur', 'trchap', 'quyensd', 'thoihansd', 'khoan', 'nqh', 'nguoink', 'nguoitrch', 'mangnk', 'mangtrch', 'ngsinh', 'kd', 'vd', 'capkd', 'capvd', 'locu', 'vitrithua', 'tinh', 'huyen', 'geom'
                        ])
                        ->from('hanam_dbr');
                }
            );
            DB::table('data_backup')->where('backup_id', 0)->update(['backup_id' => $max_backup_id]);

            $new_backup = new History_BU();
            $new_backup->backup_id = $max_backup_id;
            $new_backup->save();
        }

        $type = UpShapFile::findOrFail($id);
        if ($type->huyen != null) {
            dbr::where('mahuyen', $type->huyen)->delete();
        } else if ($type->xa != null) {
            dbr::where('maxa', $type->xa)->delete();
        } else if ($type->churung) {
            dbr::where('machur', $type->churung)->delete();
        } else {
            dbr::truncate();
        }

        $arr_new_id = array();

        for ($i = 1; $i <= $tot; $i++) {
            $max_gid = dbr::max('gid');
            $new_id = $max_gid + 1;
            try {
                $data_shp = $Shapefile->setCurrentRecord($i);
                $data_tt = $data_shp->fetchRecord()->getDataArray();
                $new = new dbr();
                $new->gid = $new_id;
                $new->id = $new_id;
                $new->tt = $data_tt['TT'];
                $new->matinh = $data_tt['MATINH'];
                $new->mahuyen = $data_tt['MAHUYEN'];
                $new->maxa = $data_tt['MAXA'];
                $new->xa = $data_tt['XA'];
                $new->tk = $data_tt['TK'];
                $new->khoanh = $data_tt['KHOANH'];
                $new->lo = $data_tt['LO'];
                $new->thuad = $data_tt['THUAD'];
                $new->tobando = $data_tt['TOBANDO'];
                $new->ddanh = $data_tt['DDANH'];
                $new->dtich = $data_tt['DTICH'];
                $new->dientichch = $data_tt['DIENTICHCH'];
                $new->nggocr = $data_tt['NGGOCR'];
                $new->ldlr = $data_tt['LDLR'];
                $new->maldlr = $data_tt['MALDLR'];
                $new->sldlr = $data_tt['SLDLR'];
                $new->namtr = $data_tt['NAMTR'];
                $new->captuoi = $data_tt['CAPTUOI'];
                $new->ktan = $data_tt['KTAN'];
                $new->nggocrt = $data_tt['NGGOCRT'];
                $new->thanhrung = $data_tt['THANHRUNG'];
                $new->mgo = $data_tt['MGO'];
                $new->mtn = $data_tt['MTN'];
                $new->mgolo = $data_tt['MGOLO'];
                $new->mtnlo = $data_tt['MTNLO'];
                $new->lapdia = $data_tt['LAPDIA'];
                $new->malr3 = $data_tt['MALR3'];
                $new->mdsd = $data_tt['MDSD'];
                $new->mamdsd = $data_tt['MAMDSD'];
                $new->dtuong = $data_tt['DTUONG'];
                $new->churung = $data_tt['CHURUNG'];
                $new->machur = $data_tt['MACHUR'];
                $new->trchap = $data_tt['TRCHAP'];
                $new->quyensd = $data_tt['QUYENSD'];
                $new->thoihansd = $data_tt['THOIHANSD'];
                $new->khoan = $data_tt['KHOAN'];
                $new->nqh = $data_tt['NQH'];
                $new->nguoink = $data_tt['NGUOINK'];
                $new->nguoitrch = $data_tt['NGUOITRCH'];
                $new->mangnk = $data_tt['MANGNK'];
                $new->mangtrch = $data_tt['MANGTRCH'];
                $new->ngsinh = $data_tt['NGSINH'];
                $new->kd = $data_tt['KD'];
                $new->vd = $data_tt['VD'];
                $new->capkd = $data_tt['CAPKD'];
                $new->capvd = $data_tt['CAPVD'];
                $new->locu = $data_tt['LOCU'];
                $new->vitrithua = $data_tt['VITRITHUA'];
                $new->tinh = $data_tt['TINH'];
                $new->huyen = $data_tt['HUYEN'];
                $new->save();
            } catch (ShapefileException $e) {
                switch ($e->getErrorType()) {
                    case Shapefile::ERR_GEOM_RING_AREA_TOO_SMALL:
                        break;
                    default:
                        exit("Error Type: " . $e->getErrorType()
                            . "\nMessage: " . $e->getMessage()
                            . "\nDetails: " . $e->getDetails());
                        break;
                }
            }
            array_push($arr_new_id, $new_id);
        }


        $vt = 0;
        for ($j = 1; $j <= $tot; $j++) {
            try {
                $data_shp = $Shapefile->setCurrentRecord($j);
                $polygon = $data_shp->fetchRecord()->getWKT();
                if (isset($arr_new_id[$vt])) {
                    $s_id = $arr_new_id[$vt];
                    $up_geom = dbr::where('id', $s_id)->first();
                    if (isset($up_geom)) {
                        $polygon = str_replace("MULTIPOLYGON(((", "POLYGON((", $polygon);
                        $polygon = str_replace(")))", "))", $polygon);
                        $polygon = str_replace(")), ((", "<>", $polygon);
                        $polygon = str_replace("POLYGON((", "MULTIPOLYGON(((", $polygon);
                        $polygon = str_replace("))", ")))", $polygon);
                        $polygon = str_replace("<>", ")), ((", $polygon);
                        $up_geom->geom = 'SRID=4326;' . $polygon;

                        $up_geom->save();
                    }
                }
            } catch (ShapefileException $e) {
                switch ($e->getErrorType()) {
                    case Shapefile::ERR_GEOM_RING_AREA_TOO_SMALL:
                        break;
                    default:
                        exit("Error Type: " . $e->getErrorType()
                            . "\nMessage: " . $e->getMessage()
                            . "\nDetails: " . $e->getDetails());
                        break;
                }
            }
            $vt++;
        }

        $data = UpShapFile::findOrFail($id);
        try {
            $admin_email = trim(User::where('role', 'admin')->first()->email);

            $subject = 'Sử dụng SHP file ' . $data->ten . ' (upload bởi ' . User::findOrFail($data->id_user)->name . ' ' . $data->ngaytao . ')';
            Mail::send('sendMail.shp_admin', ['type' => 1], function ($mess) use ($subject, $admin_email) {
                $mess->to($admin_email);
                $mess->from('xmg-dichvu@ifee.edu.vn', 'Hệ thống giám sát rừng tỉnh Hà Nam');
                $mess->subject($subject);
            });
        } catch (Exception $e) {
            return redirect("admin/shp")->with('err', $e->getMessage());
        }

        UpShapFile::where('status', 3)->where('id', '<>', $id)->update(['status' => 2]);

        $data->status = 3;
        $data->save();

        $weatherController = new WeatherController();
        $weatherController->getIndex();
        $weatherController->updateDBR();

        return redirect("admin/shp")->with('success', 'Sử dụng shapefile thành công');
    }

    public function getBando($id)
    {
        ini_set('memory_limit', '-1');
        set_time_limit(600);

        $data = UpShapFile::findOrFail($id);
        $path = storage_path('app') . '/' . $data->path;
        if (file_exists($path)) {
            $name = explode('/', $data->path)[1] . ".shp";
            try {
                $Shapefile = new ShapefileReader(storage_path('app/' . $data->path . '/' . $name));
                $tot = $Shapefile->getTotRecords();

                $geom = [];
                for ($i = 1; $i <= $tot; $i++) {
                    $geoJson = $Shapefile->setCurrentRecord($i)->fetchRecord()->getGeoJSON();
                    $g = json_decode($geoJson, true);
                    array_push($geom, $g);
                }

                $centerCoordinate = [0, 0, 0, 0];
                foreach ($geom as $d) {
                    $bboxCoordinates = $d['bbox'];
                    $centerCoordinate[0] += $bboxCoordinates[0];
                    $centerCoordinate[1] += $bboxCoordinates[1];
                    $centerCoordinate[2] += $bboxCoordinates[2];
                    $centerCoordinate[3] += $bboxCoordinates[3];
                }

                $numberOfBbox = count($geom);
                $centerCoordinate[0] /= $numberOfBbox;
                $centerCoordinate[1] /= $numberOfBbox;
                $centerCoordinate[2] /= $numberOfBbox;
                $centerCoordinate[3] /= $numberOfBbox;

                return view('admin.shp.bando', [
                    'geom' => $geom,
                    'centerCoordinate' => $centerCoordinate,
                ]);
            } catch (ShapefileException $e) {
                return redirect("admin/shp")->with('fail', $e->getMessage());
            }
        } else {
            return redirect("admin/shp")->with('fail', 'Không tìm thấy tệp tin');
        }
    }
}
