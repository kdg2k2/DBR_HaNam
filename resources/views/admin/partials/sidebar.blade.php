<nav class="pcoded-navbar">
    <div class="nav-list">
        <div class="pcoded-inner-navbar main-menu">

            <div class="pcoded-navigation-label">Quản lý bản đồ</div>
            <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid"
                subitem-border="false">
                <li class="{{ Str::contains(Request::url(), '/admin/dvmtr') ? 'active' : '' }}">
                    <a href="/admin/dvmtr" class="waves-effect waves-dark {{ Str::contains(Request::url(), '/admin/dvmtr') ? 'active' : '' }}">
                        <span class="pcoded-micon">
                            <i class="fa fa-map" aria-hidden="true"></i>
                        </span>
                        <span class="pcoded-mtext">Hiện Trạng Rừng</span>
                    </a>
                </li>
                <li class="{{ Str::contains(Request::url(), '/admin/shp') ? 'active' : '' }}">
                    <a href="/admin/shp" class="waves-effect waves-dark {{ Str::contains(Request::url(), '/admin/shp') ? 'active' : '' }}">
                        <span class="pcoded-micon">
                            <i class="fa fa-file" aria-hidden="true"></i>
                        </span>
                        <span class="pcoded-mtext">Shapefile Hiện Trạng Rừng</span>
                    </a>
                </li>
                <li class="{{ Str::contains(Request::url(), '/admin/backup') ? 'active' : '' }}">
                    <a href="/admin/backup" class="waves-effect waves-dark {{ Str::contains(Request::url(), '/admin/backup') ? 'active' : '' }}">
                        <span class="pcoded-micon">
                            <i class="fa fa-refresh" aria-hidden="true"></i>
                        </span>
                        <span class="pcoded-mtext">Backup Bản đồ</span>
                    </a>
                </li>
            </ul>

            <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid"
                subitem-border="false">
                <li class="{{ Str::contains(Request::url(), '/admin/me') ? 'active' : '' }}">
                    <a href="/admin/me/edit" class="waves-effect waves-dark {{ Str::contains(Request::url(), '/admin/me') ? 'active' : '' }}">
                        <span class="pcoded-micon">
                            <i class="fa fa-group"></i>
                        </span>
                        <span class="pcoded-mtext">Thông tin tài khoản</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
