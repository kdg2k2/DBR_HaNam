<!DOCTYPE html>
<html lang="en">

<head>
    @include('admin.partials.head')
</head>

<body>
    @include('admin.partials.loader')

    <div id="pcoded" class="pcoded">
        <div class="pcoded-overlay-box"></div>
        <div class="pcoded-container navbar-wrapper">
            @include('admin.partials.header')
            @include('admin.partials.sidebar')

            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">

                        <div class="page-header card">
                            <div class="row align-items-end">
                                <div class="col-lg-8">
                                    <div class="page-header-title">
                                        <i class="feather icon-server bg-c-blue"></i>
                                        <div class="d-inline">
                                            <h5>Cập nhật</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="page-header-breadcrumb">
                                        <ul class=" breadcrumb breadcrumb-title">
                                            <ul class=" breadcrumb breadcrumb-title">
                                                <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                                                <li class="breadcrumb-item"><a href="/admin/dvmtr">DVMTR</a></li>
                                                <li class="breadcrumb-item"><a href="#!">Cập nhật</a></li>
                                            </ul>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pcoded-inner-content">
                            <div class="main-body">
                                <div class="page-wrapper">
                                    <div class="page-body">

                                        <div class="card">
                                            <div class="card-block">
                                                <div class="card-block">

                                                    @if ($message = Session::get('success'))
                                                        <div class="alert alert-success mb-3">
                                                            <p>{{ $message }}</p>
                                                        </div>
                                                    @endif

                                                    <div class="text-right">
                                                        <a href="/admin/dvmtr" class="btn btn-info">Danh sách</a>
                                                    </div>
                                                    <form action="/admin/dvmtr/update/{{ $data->id }}" method="post" class="post-form row" enctype="multipart/form-data">
                                                        @csrf
                                                        <div class="form-group col-2">
                                                            <label>matinh</label>
                                                            <input type="text" name="matinh" class="form-control" value="{{$data->matinh}}" required>
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>tinh</label>
                                                            <input type="text" name="tinh" class="form-control" value="{{$data->tinh}}" required>
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>mahuyen</label>
                                                            <input type="text" name="mahuyen" class="form-control" value="{{$data->mahuyen}}" required>
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>huyen</label>
                                                            <input type="text" name="huyen" class="form-control" value="{{$data->huyen}}" required>
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>maxa</label>
                                                            <input type="text" name="maxa" class="form-control" value="{{$data->maxa}}" required>
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>xa</label>
                                                            <input type="text" name="xa" class="form-control" value="{{$data->xa}}" required>
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>tk</label>
                                                            <input type="text" name="tk" class="form-control" value="{{$data->tk}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>khoanh</label>
                                                            <input type="text" name="khoanh" class="form-control" value="{{$data->khoanh}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>lo</label>
                                                            <input type="text" name="lo" class="form-control" value="{{$data->lo}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>lo_tk</label>
                                                            <input type="text" name="lo_tk" class="form-control" value="{{$data->lo_tk}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>thuad</label>
                                                            <input type="text" name="thuad" class="form-control" value="{{$data->thuad}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>tobando</label>
                                                            <input type="text" name="tobando" class="form-control" value="{{$data->tobando}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>ddanh</label>
                                                            <input type="text" name="ddanh" class="form-control" value="{{$data->ddanh}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>dtich</label>
                                                            <input type="text" name="dtich" class="form-control" value="{{$data->dtich}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>nggocr</label>
                                                            <input type="text" name="nggocr" class="form-control" value="{{$data->nggocr}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>ldlr</label>
                                                            <input type="text" name="ldlr" class="form-control" value="{{$data->ldlr}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>maldlr</label>
                                                            <input type="text" name="maldlr" class="form-control" value="{{$data->maldlr}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>sldlr</label>
                                                            <input type="text" name="sldlr" class="form-control" value="{{$data->sldlr}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>namtr</label>
                                                            <input type="text" name="namtr" class="form-control" value="{{$data->namtr}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>thanhrung</label>
                                                            <input type="text" name="thanhrung" class="form-control" value="{{$data->thanhrung}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>mgo</label>
                                                            <input type="text" name="mgo" class="form-control" value="{{$data->mgo}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>mtn</label>
                                                            <input type="text" name="mtn" class="form-control" value="{{$data->mtn}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>lapdia</label>
                                                            <input type="text" name="lapdia" class="form-control" value="{{$data->lapdia}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>malr3</label>
                                                            <input type="text" name="malr3" class="form-control" value="{{$data->malr3}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>mdsd</label>
                                                            <input type="text" name="mdsd" class="form-control" value="{{$data->mdsd}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>mamdsd</label>
                                                            <input type="text" name="mamdsd" class="form-control" value="{{$data->mamdsd}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>dtuong</label>
                                                            <input type="text" name="dtuong" class="form-control" value="{{$data->dtuong}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>churung</label>
                                                            <input type="text" name="churung" class="form-control" value="{{$data->churung}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>machur</label>
                                                            <input type="text" name="machur" class="form-control" value="{{$data->machur}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>nqh</label>
                                                            <input type="text" name="nqh" class="form-control" value="{{$data->nqh}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>nguoink</label>
                                                            <input type="text" name="nguoink" class="form-control" value="{{$data->nguoink}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>dtuongnk</label>
                                                            <input type="text" name="dtuongnk" class="form-control" value="{{$data->dtuongnk}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>mangnk</label>
                                                            <input type="text" name="mangnk" class="form-control" value="{{$data->mangnk}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>nguoitrch</label>
                                                            <input type="text" name="nguoitrch" class="form-control" value="{{$data->nguoitrch}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>mangtrch</label>
                                                            <input type="text" name="mangtrch" class="form-control" value="{{$data->mangtrch}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>vungchitra</label>
                                                            <input type="text" name="vungchitra" class="form-control" value="{{$data->vungchitra}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>chitra</label>
                                                            <input type="text" name="chitra" class="form-control" value="{{$data->chitra}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>khuvuc</label>
                                                            <input type="text" name="khuvuc" class="form-control" value="{{$data->khuvuc}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>dtichct</label>
                                                            <input type="text" name="dtichct" class="form-control" value="{{$data->dtichct}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>k0</label>
                                                            <input type="text" name="k0" class="form-control" value="{{$data->k0}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>k1</label>
                                                            <input type="text" name="k1" class="form-control" value="{{$data->k1}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>k2</label>
                                                            <input type="text" name="k2" class="form-control" value="{{$data->k2}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>k3</label>
                                                            <input type="text" name="k3" class="form-control" value="{{$data->k3}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>k4</label>
                                                            <input type="text" name="k4" class="form-control" value="{{$data->k4}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>dgia</label>
                                                            <input type="text" name="dgia" class="form-control" value="{{$data->dgia}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>thanhtien</label>
                                                            <input type="text" name="thanhtien" class="form-control" value="{{$data->thanhtien}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>mucct</label>
                                                            <input type="text" name="mucct" class="form-control" value="{{$data->mucct}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>maluuvuc</label>
                                                            <input type="text" name="maluuvuc" class="form-control" value="{{$data->maluuvuc}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>nguonvon</label>
                                                            <input type="text" name="nguonvon" class="form-control" value="{{$data->nguonvon}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>biendong</label>
                                                            <input type="text" name="biendong" class="form-control" value="{{$data->biendong}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>cql</label>
                                                            <input type="text" name="cql" class="form-control" value="{{$data->cql}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>nhomho</label>
                                                            <input type="text" name="nhomho" class="form-control" value="{{$data->nhomho}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>ntruong</label>
                                                            <input type="text" name="ntruong" class="form-control" value="{{$data->ntruong}}">
                                                        </div>
                                                        <div class="form-group col-2">
                                                            <label>cmt</label>
                                                            <input type="text" name="cmt" class="form-control" value="{{$data->cmt}}">
                                                        </div>                                                    

                                                        <div class="text-right d-block w-100">
                                                            <button class="btn btn-success waves-effect waves-light" type="submit">Cập nhật</button>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="styleSelector"></div>
                    </div>
                </div>
            </div>
        </div>

        @include('admin.partials.footer')
</body>

</html>