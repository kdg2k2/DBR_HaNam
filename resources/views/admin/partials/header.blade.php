<nav class="navbar header-navbar pcoded-header">
    <div class="navbar-wrapper">
        <div class="navbar-logo">
            <a href="/" class="d-flex align-items-center">
                <img class="img-fluid mr-2" src="{{ asset('/img/logo/kdg_logo.jpg') }}" alt="Logo" style="width: 50px; border: solid #fff 0.1px">
                <h4>CBCR Hà Nam</h4>
            </a>
            <a class="mobile-menu" id="mobile-collapse" href="#!">
                <i class="feather icon-menu icon-toggle-right"></i>
            </a>
            <a class="mobile-options waves-effect waves-light" href="/logout">
                <i class="feather icon-log-out" style="font-size: 15px;"></i>
            </a>
        </div>
        <div class="navbar-container container-fluid">
            <ul class="nav-right">
                <li class="user-profile header-notification">
                    <div class="flex" title="Đăng xuất">
                        <span for="logout">Tên user</span>
                        <a href="/logout" id="logout">
                            <i class="feather icon-log-out" style="font-size: 15px;"></i>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>