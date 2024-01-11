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
                                                <li class="breadcrumb-item"><a href="/admin/me/edit">Tài khoản</a></li>
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

                                                    <form action="/admin/me/update" method="post" class="post-form"
                                                        enctype="multipart/form-data">
                                                        @csrf
                                                        <div class="form-group row">
                                                            <label class="col-sm-2 col-form-label">Họ tên</label>
                                                            <div class="col-sm-10">
                                                                <input type="text" class="form-control" required
                                                                    name="username" value="{{ $user->username }}">
                                                            </div>
                                                            <span class="text-danger">@error('username')
                                                                {{ $message }}
                                                                @enderror</span>
                                                        </div>

                                                        <div class="form-group row">
                                                            <label class="col-sm-2 col-form-label">Email</label>
                                                            <div class="col-sm-10">
                                                                <input type="email" class="form-control" required
                                                                    name="email" value="{{ $user->email }}">
                                                            </div>
                                                            <span class="text-danger">@error('email')
                                                                {{ $message }}
                                                                @enderror</span>
                                                        </div>

                                                        <div class="form-group row">
                                                            <label class="col-sm-2 col-form-label">Mật khẩu</label>
                                                            <div class="col-sm-10">
                                                                <input type="password" class="form-control" placeholder="Điền mật khẩu mới nếu cần"
                                                                    name="password">
                                                            </div>
                                                            <span class="text-danger">@error('password')
                                                                {{ $message }}
                                                                @enderror</span>
                                                        </div>

                                                        <div class="form-group row">
                                                            <label class="col-sm-2 col-form-label">Phân Quyền</label>
                                                            <div class="col-sm-10">
                                                                <select name="role" required id="role"
                                                                    class="form-control form-control-inverse js-example-basic-single">
                                                                    <option value="{{$user->role}}" selected>
                                                                        @if($user->role == 1) Admin @endif
                                                                        @if($user->role == 415) Hạt Quế Phong @endif
                                                                        @if($user->role == 416) Hạt Quỳ Châu @endif
                                                                        @if($user->role == 417) Hạt Kỳ Sơn @endif
                                                                        @if($user->role == 418) Hạt Tương Dương @endif
                                                                        @if($user->role == 420) Hạt Quỳ Hợp @endif
                                                                        @if($user->role == 422) Hạt Con Cuông @endif
                                                                        @if($user->role == 9001) Ban QLRPH Kỳ Sơn @endif
                                                                        @if($user->role == 9002) VQG Pù Mát @endif
                                                                        @if($user->role == 9003) Ban QLRPH Tương Dương @endif
                                                                        @if($user->role == 9004) Khu BTTN Pù Hoạt @endif
                                                                        @if($user->role == 9005) Khu BTTN Pù Huống @endif
                                                                        @if($user->role == 9006) Ban QLRPH Quỳ Châu @endif
                                                                        @if($user->role == 9007) Ban QLRPH Con Cuông @endif
                                                                        @if($user->role == 9010) Công ty TNHH MTV Lâm Nghiệp Con Cuông @endif
                                                                        @if($user->role == 9011) CTYTNHHMTVLN Tương Dương @endif
                                                                        @if($user->role == 9016) Lâm Trường Quỳ Hợp @endif
                                                                        @if($user->role == 9017) Lâm trường Quế Phong @endif
                                                                        @if($user->role == 9018) Công ty TH @endif
                                                                        @if($user->role == 9024) Tổng đội TNXP 10 @endif
                                                                        @if($user->role == 9025) Làng TN lập nghiệp Tương Dương @endif
                                                                        @if($user->role == 9026) Tổng đội TNXP 8 @endif
                                                                        @if($user->role == 9027) CTTNHH Thanh Thành Đạt @endif
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            <span class="text-danger">@error('role')
                                                                {{ $message }}
                                                                @enderror</span>
                                                        </div>

                                                        <div class="form-group text-right">
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