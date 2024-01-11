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
                                            <h5>Quản lý DVMTR</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="page-header-breadcrumb">
                                        <ul class=" breadcrumb breadcrumb-title">
                                            <li class="breadcrumb-item">
                                                <a href="#"><i class="feather icon-home"></i></a>
                                            </li>
                                            <li class="breadcrumb-item"><a href="#!">DVMTR</a>
                                            </li>
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
                                            <div class="btn-create">
                                                <a class="btn btn-sm btn-success" href="shp/create"><i
                                                        class="fa fa-file" aria-hidden="true"></i> Thêm Mới</a>
                                            </div>

                                            @if ($message = Session::get('success'))
                                            <div class="alert alert-success m-2">
                                                <p>{{ $message }}</p>
                                            </div>
                                            @endif
                                            @if ($message = Session::get('err'))
                                            <div class="alert alert-danger m-2">
                                                <p>{{ $message }}</p>
                                            </div>
                                            @endif

                                            <div class="card-block" style="overflow: auto">
                                                <table class="table display">
                                                    <thead>
                                                        <tr>
                                                            <th>Tỉnh</th>
                                                            <th>Huyện</th>
                                                            <th>Xã</th>
                                                            <th>TK/Khoảnh/Lô</th>
                                                            <th>Chủ rừng</th>
                                                            <th>Diện tích</th>
                                                            <th>Diện tích CT</th>
                                                            <th>Hành động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        @foreach ($data as $item)
                                                        <tr>
                                                            <td style="text-align: center">{{$item->tinh}}</td>
                                                            <td style="text-align: center">{{$item->huyen}}</td>
                                                            <td style="text-align: center">{{$item->xa}}</td>
                                                            <td style="text-align: center">{{$item->tk}}/{{$item->khoanh}}/{{$item->lo}}</td>
                                                            <td style="text-align: center">{{$item->churung}}</td>
                                                            <td style="text-align: center">{{$item->dtich}}</td>
                                                            <td style="text-align: center">{{$item->dtichct}}</td>
                                                            <td style="text-align: center">
                                                                <button onclick="window.location.href='/admin/dvmtr/edit/{{$item->id}}'" class="btn btn-warning btn-sm"><i class="fa fa-sync"></i> Sửa</button>
                                                                <button href="#!" data-toggle="modal"
                                                                    data-href="/admin/dvmtr/destroy/{{ $item->id }}"
                                                                    data-target="#delete-item-model" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i> Xoá</button>
                                                            </td> 
                                                        </tr>
                                                        @endforeach
                                                    </tbody>
                                                </table>

                                                <div style="display: flex; justify-content: end;">
                                                    {{$data->appends(request()->query())}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="delete-item-model" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Thông báo</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Xác nhận xóa hay không?</p>
                                </div>
                                <form id="delete-item-form" class="text-right mr-3" method="POST">
                                    @csrf
                                    <button id="btn-delete-item" type="submit" class="btn btn-danger">Xoá bỏ</button>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                                </form>
                                <div class="modal-footer">
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
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            $('#delete-item-model').on('show.bs.modal', function (e) {
                $(this).find('#delete-item-form').attr('action', $(e.relatedTarget).data('href'));
            });
        });
    </script>
</body>

</html>