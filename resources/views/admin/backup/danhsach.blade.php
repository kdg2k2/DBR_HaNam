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
                                            <h5>Quản lý Backup</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="page-header-breadcrumb">
                                        <ul class=" breadcrumb breadcrumb-title">
                                            <li class="breadcrumb-item">
                                                <a href="#"><i class="feather icon-home"></i></a>
                                            </li>
                                            <li class="breadcrumb-item"><a href="#!">Backup</a>
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
                                                <a class="btn btn-sm btn-success" href="backup/create"><i
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

                                            <div class="card-block">
                                                <table class="table display data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Thời gian tạo</th>
                                                                <th>Hành động</th>    
                                                            
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        @foreach ($data as $item)
                                                        <tr>
                                                            <td style="text-align: center">{{$item->created_at}}</td>
                                                            <td style="text-align: center">
                                                                <a href="#!" data-toggle="modal"
                                                                data-href="/admin/backup/restore/{{$item->id}}"
                                                                    data-target="#restore-item-model"
                                                                    class="btn btn-warning btn-sm"><i class="fa fa-sync"></i> Khôi Phục</a>
                                                                <a href="#!" data-toggle="modal"
                                                                    data-id="{{ $item->id }}"
                                                                    data-target="#delete-item-model"
                                                                    class="btn btn-danger btn-sm"><i class="fa fa-trash"></i> Xoá</a>
                                                            </td> 
                                                            
                                                        </tr>
                                                        @endforeach
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="restore-item-model" tabindex="-1" role="dialog"
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
                                    <p>Xác nhận khôi phục backup này ?</p>
                                </div>
                                <div class="modal-footer">
                                    <a id="btn-restore-item" class="btn btn-warning btn-restore">Sử dụng</a>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
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
                                <div class="modal-footer">
                                    <button id="btn-delete-item" type="button" class="btn btn-danger">Xoá bỏ</button>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form name="delete-item-form" method="POST">
                        @csrf
                    </form>

                    <div id="styleSelector"></div>
                </div>
            </div>
        </div>
    </div>

    @include('admin.partials.footer')
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var id;
            var deleteForm = document.forms['delete-item-form'];

            //lấy id để xóa
            $('#delete-item-model').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                id = button.data('id');
            })

            //xóa id
            var btn_delete_item = document.getElementById('btn-delete-item')
            btn_delete_item.onclick = function () {
                deleteForm.action = "/admin/backup/destroy/" + id;
                deleteForm.submit();
            }

            $('#restore-item-model').on('show.bs.modal', function (e) {
            $(this).find('.btn-restore').attr('href', $(e.relatedTarget).data('href'));
        });
        });
    </script>
</body>

</html>