<!DOCTYPE html>
<html lang="en">

<head>
    @include('admin.partials.head')

    <style>
        .image-container img {
            width: 300px;
            max-height: 200px;
        }
    </style>
</head>

<body>
    @include('admin.partials.loader')

    <div id="pcoded" class="pcoded">
        <div class="pcoded-overlay-box"></div>
        <div class="pcoded-container navbar-wrapper">
            @include('admin.partials.header')
            @include('admin.partials.sidebar')

            <div class="modal fade bd-example-modal-lg" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Hướng dẫn</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                        <ul>
                            <li>- File đầu vào phải đủ các định dạng (.dbf .prj .shp .shx)</li>
                            <li>- Đúng hệ tọa độ WGS84 (EPSG:4326)</li>
                            <li>- Các trường thuộc tính phải có bao gồm: [
                                1. tt, 
                                2. matinh, 
                                3. tinh, 
                                4. mahuyen, 
                                5. huyen, 
                                6. maxa, 
                                7. xa, 
                                8. tk, 
                                9. khoanh, 
                                10. lo, 
                                11. lo_tk, 
                                12. thuad, 
                                13. tobando, 
                                14. ddanh, 
                                15. dtich, 
                                16. nggocr, 
                                17. ldlr, 
                                18. maldlr, 
                                19. sldlr, 
                                20. namtr, 
                                21. thanhrung, 
                                22. mgo, 
                                23. mtn, 
                                24. lapdia, 
                                25. malr3, 
                                26. mdsd, 
                                27. mamdsd, 
                                28. dtuong, 
                                29. churung, 
                                30. machur, 
                                31. nqh, 
                                32. nguoink, 
                                33. dtuongnk, 
                                34. mangnk, 
                                35. nguoitrch, 
                                36. mangtrch, 
                                37. vungchitra, 
                                38. chitra, 
                                39. khuvuc, 
                                40. dtichct, 
                                41. k0, 
                                42. k1, 
                                43. k2, 
                                44. k3, 
                                45. k4, 
                                46. dgia, 
                                47. thanhtien, 
                                48. mucct, 
                                49. maluuvuc, 
                                50. nguonvon, 
                                51. biendong, 
                                52. cql, 
                                53. nhomho, 
                                54. ntruong, 
                                55. cmt
                                ]
                            </li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    </div>
                </div>
                </div>
            </div>

            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">

                        <div class="page-header card">
                            <div class="row align-items-end">
                                <div class="col-lg-8">
                                    <div class="page-header-title">
                                        <i class="feather icon-server bg-c-blue"></i>
                                        <div class="d-inline">
                                            <h5>Thêm mới</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="page-header-breadcrumb">
                                        <ul class=" breadcrumb breadcrumb-title">
                                            <ul class=" breadcrumb breadcrumb-title">
                                                <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                                                <li class="breadcrumb-item"><a href="/admin/shp">Shapefile</a></li>
                                                <li class="breadcrumb-item"><a href="#!">Thêm mới</a></li>
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

                                                    @if ($message = Session::get('err'))
                                                        <div class="alert alert-danger mb-3">
                                                            <p>{{ $message }}</p>
                                                        </div>
                                                    @endif

                                                    <div class="text-right mb-3">
                                                        <button type="submit" class="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter">
                                                            Hướng dẫn
                                                        </button>
                                                    </div>

                                                    <form action="/admin/shp/store" method="post" class="post-form"
                                                        enctype="multipart/form-data">
                                                        @csrf

                                                        <div class="form-group row">
                                                            <label class="col-sm-2 col-form-label">Loại shapefile</label>
                                                            <div class="col-sm-10">
                                                                <select name="type" class="form-control form-control-inverse js-example-basic-single" required>
                                                                    <option value="">[Chọn loại shapefile]</option>
                                                                    <option value="churung">Chủ Rừng</option>
                                                                    <option value="huyen">Huyện</option>
                                                                    <option value="xa">Xã</option>
                                                                </select>
                                                            </div>
                                                            <div class="image-container mx-auto mt-2"></div>
                                                            <span class="text-danger">@error('file')
                                                                {{ $message }}
                                                                @enderror</span>
                                                        </div>

                                                        <div class="form-group row">
                                                            <label class="col-sm-2 col-form-label">Chọn shapefile</label>
                                                            <div class="col-sm-10">
                                                                <input type="file" class="form-control input-image-show" name="file[]" multiple required>
                                                            </div>
                                                            <div class="image-container mx-auto mt-2"></div>
                                                            <span class="text-danger">@error('file')
                                                                {{ $message }}
                                                                @enderror</span>
                                                        </div>

                                                        <div class="form-group d-flex d-flex justify-content-between ">
                                                            <button class="btn btn-success waves-effect waves-light" type="submit">Thêm mới</button>
                                                            <a href="/admin/shp" class="btn btn-info">Danh sách</a>
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
        <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
        <script>
            $(document).ready(function() {
                $('.js-example-basic-single').select2();
            });
        </script>
</body>

</html>