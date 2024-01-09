<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bản Đồ</title>
    <link rel="icon" href="{{ asset('/img/logo/kdg_logo.jpg') }}" sizes="192x192" />

    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster/dist/MarkerCluster.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster/dist/MarkerCluster.Default.css" />
    <link rel="stylesheet" href="{{ asset('/map/css/map.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">

    <style>
        .leaflet-popup-content{
            min-width: 280px !important;
        }
    </style>
</head>

<body>
    <div id="map"></div>
    <img style="height: 18vh; bottom: 0; position: absolute; z-index: 2; margin-bottom: 20px ; margin-left: 10px; visibility: hidden; right: 0;" src="{{ asset('/map/images/fireWarningIcon/alarm.png') }}" id="fireWarningImg">

    <div id="menu-map" class="menu-map">
        <div class="close-menu-map">
            <button id="close-menu-map" type="button"><i class="fa fa-times"></i></button>
        </div>
        <div class="container-fluid">
            <div class="col-xl-12">
                <h5 style="margin-bottom: 10px; margin-top: 10px"><i class="fa fa-location-arrow">
                    </i> Tỉnh</h5>
                <select class="form-control-normal js-example-basic form-control" id="tinh">
                    <option value="" disabled selected>35 - Hà Nam</option>
                </select>

                <h5 style="margin-bottom: 10px; margin-top: 10px"><i class="fa fa-location-arrow">
                    </i> Huyện</h5>
                <select class="form-control-normal js-example-basic form-control" id="district">
                    <option value="" disabled selected>[Chọn Huyện]</option>
                </select>

                <h5 style="margin-bottom: 10px; margin-top: 10px"><i class="fa fa-location-arrow">
                    </i> Xã</h5>
                <select class="form-control-normal js-example-basic form-control" id="commune">
                    <option value="" disabled selected>[Chọn Xã]</option>
                </select>

                <h5 class="bangdieukhien" style="margin-top: 20px;"><i class="fa fa-duotone fa-layer-group"></i> LỚP BẢN
                    ĐỒ TÀI NGUYÊN RỪNG</h5>
                <div style="margin-left: 18px; display: grid;">
                    <div class="form-check form-check-inline">
                        <input type="checkbox" class="form-check-input" id="bandoDBR">
                        <label class="form-check-label" style="font-weight: normal;" for="bandoDBR">Hiện trạng rừng</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="checkbox" class="form-check-input" id="bandoCapChay">
                        <label class="form-check-label" style="font-weight: normal;" for="bandoCapChay"> Cấp cháy</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="checkbox" class="form-check-input" id="diemChay">
                        <label class="form-check-label" style="font-weight: normal;" for="diemChay">Điểm nguy cơ cháy rừng</label>
                    </div>
                </div>

                <div id="fireFilter" hidden>
                    <h5 class="bangdieukhien" style="margin-top: 20px;"><i class="fa fa-solid fa-clock-rotate-left"></i> LỊCH SỬ ĐIỂM CHÁY</h5>
                <div style="margin-left: 18px;">
                    <div class="form-check form-check-inline">
                        <input type="checkbox" class="form-check-input" id="24h">
                        <label class="form-check-label" style="font-weight: normal;">24h qua</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="checkbox" class="form-check-input" id="history">
                        <label class="form-check-label" style="font-weight: normal;">Lịch sử theo thời
                            gian</label>
                    </div>
                    <div class="row hidden" id="selectDate">
                        <div class="col-md-6">
                            <label>Từ ngày</label><br>
                            <input class="form-control" type="date" name="startDate" id="startDate"
                                onchange="loadData();" value="" />
                        </div>
                        <div class="col-md-6">
                            <label>Đến ngày</label><br>
                            <input class="form-control" type="date" name="endDate" id="endDate" onchange="loadData();"
                                value="" />
                        </div>
                    </div>
                </div>
                </div>
                <br>
            </div>
        </div>
    </div>

    <script src=" https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js "></script>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.5.3/leaflet.markercluster.js"></script>
    <script src="{{ asset('/map/js/map.js') }}"></script>
    <script src="{{ asset('/js/app.js') }}"></script>
</body>

</html>