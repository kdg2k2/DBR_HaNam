var map = L.map("map").setView([20.531930566909896, 105.92131932923573], 11);
var basemaps = {
    "Giao thông": L.tileLayer(
        "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
        {
            maxZoom: 20,
            subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }
    ),
    "Vệ tinh tích hợp": L.tileLayer(
        "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
        {
            maxZoom: 20,
            subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }
    ),
    "Vệ tinh": L.tileLayer(
        "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
        {
            maxZoom: 20,
            subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }
    ),
    "Địa hình": L.tileLayer(
        "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
        {
            maxZoom: 20,
            subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }
    ),
};

L.control.layers(basemaps).addTo(map);
basemaps["Vệ tinh"].addTo(map);

// Tạo các nút bên phải trên cùng
var topRightButtons = L.control({ position: "topright" });
topRightButtons.onAdd = (map) => {
    var container = L.DomUtil.create("div", "leaflet-bar leaflet-control");
    // Thêm nút Home
    var barsButton = L.DomUtil.create(
        "a",
        "leaflet-control-button  mt-1",
        container
    );
    barsButton.href = "#";
    barsButton.title = "Home";
    barsButton.innerHTML = '<i class="fa-solid fa-house"></i>';
    L.DomEvent.on(barsButton, "click", () => {
        window.location.href = "/";
    });
    // Thêm nút Reload
    var barsButton = L.DomUtil.create(
        "a",
        "leaflet-control-button  mt-1",
        container
    );
    barsButton.href = "#";
    barsButton.title = "Reload";
    barsButton.innerHTML = '<i class="fa fa-solid fa-clock-rotate-left"></i>';
    L.DomEvent.on(barsButton, "click", () => {
        window.location.reload();
    });
    // Thêm nút Bars (Open Menu)
    var barsButton = L.DomUtil.create(
        "a",
        "leaflet-control-button  mt-1",
        container
    );
    barsButton.href = "#";
    barsButton.title = "Open Menu";
    barsButton.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
    L.DomEvent.on(barsButton, "click", () => {
        OpenMenu();
    });
    return container;
};
// Thêm nút bên phải trên cùng vào bản đồ
topRightButtons.addTo(map);

function OpenMenu() {
    if ($("#menu-map").hasClass("open")) {
        $("#menu-map").removeClass("open");
    } else {
        $("#menu-map").addClass("open");
    }
}

$("#close-menu-map").click(function () {
    $("#menu-map").removeClass("open");
});

//Nhom lop loai ban do
map.overlaysRG = L.layerGroup([]).addTo(map);
map.overlaysDBR = L.layerGroup([]).addTo(map);
map.overlaysFireMap = L.layerGroup([]).addTo(map);
map.overlaysPoint = L.layerGroup([]).addTo(map);

//Tham so lop ban do ranh gioi hanh chinh
var layerCurrent = null;
var WMS_RANHGIOI_URL = "http://localhost:8080/geoserver/rghc_vn_2023/wms";
var WS_RANHGIOI = "ws_ranhgioi";
var WMS_OPACITY_DEFAULT = 1;
var WMS_DBR = "http://localhost:8080/geoserver/HaNam/wms";

//Tham so lop ban do WMS
var currentLayer = null;
var currentFillter = null;
var currentWmsUrl = null;
var currentMapType = null;
var currentLevel = "matinh";
var currentCode = 35;
var listFirePoint = null;

$(document).ready(function () {
    $('select').val('');
    $('input[type="checkbox"]').prop('checked', false);

    var matinh = "35";
    //LayDanhSachHuyen
    $.ajax({
        method: "GET",
        url: "district/" + matinh,
    }).done(function (data) {
        $("#district").html(data);
    });
    //Load RGHC Tinh
    nameLayer = "rghc_vn_2023:rghc_tinh";
    sqlFilter = "MATINH=" + matinh;

    fnShowMapRG(nameLayer, sqlFilter);
    //set tham so cho lop ban do wms
    if (currentMapType) {
        currentProvinceSelect = matinh;
        cleanViewTNR()
        checkedWMSLayer(currentMapType, "matinh", matinh);
    }

});

/*
    Hien thi WMS
*/
function fnShowMapRG(layerName, strFilter) {
    if (layerName == undefined) {
        alert("Không tìm thấy lớp bản đồ");
    } else {
        layerCurrent = layerName;
        map.overlaysRG.clearLayers();
        var wmsL = getLayerWMS(WMS_RANHGIOI_URL, layerName, strFilter, "rghc");
        map.overlaysRG.addLayer(wmsL);
        // Zoom fitBounds
        var jsonURL = getFeatureJsonUrl(
            WMS_RANHGIOI_URL,
            layerCurrent,
            strFilter,
            10000
        );

        $.getJSON(jsonURL, function (data_json) {
            var selectStyle = {
                color: "#ffff86",
                opacity: 1,
                fillColor: "#fff7bc",
                fillOpacity: 0.1,
                //dashArray: '3',
                weight: 2,
            };
            var geoMaps = L.geoJson(data_json, { style: selectStyle });
            map.overlaysRG.addLayer(geoMaps);

            // Zoom to Feature
            var latlngs = [];
            for (var i in data_json.features[0].geometry.coordinates) {
                var coord = data_json.features[0].geometry.coordinates[i];
                for (var j in coord) {
                    var points = coord[j];
                    for (var k in points) {
                        latlngs.push(L.GeoJSON.coordsToLatLng(points[k]));
                    }
                }
            }
            map.fitBounds(latlngs);
        });
    }
}

function checkedWMSLayer(mapType, regionLevel, regionCode) {
    listWMS = [
        {
            Type: 0,
            root_url: "http://localhost:8080/geoserver/HaNam/wms?",
            name_layer: "HaNam:hanam_dbr",
            style: "DBR_HaNam",
        },
        {
            Type: 1,
            root_url: "http://localhost:8080/geoserver/HaNam/wms?",
            name_layer: "HaNam:hanam_dbr",
            style: "capchay_hanam",
        },
    ];
    if (mapType != null) {
        dataWMS = listWMS[mapType];

        var wmsL = getLayerWMS(
            dataWMS.root_url,
            dataWMS.name_layer,
            `${regionLevel}=${regionCode}`,
            dataWMS.style
        );
        wmsL.setZIndex(100); 
        map.overlaysDBR.addLayer(wmsL);
        currentLayer = dataWMS.name_layer;
        currentFillter = `${regionLevel}=${regionCode}`;
        currentWmsUrl = dataWMS.root_url;
    }
}

function getFeatureJsonUrl(_wmsURL, _layerName, _strFilter, _maxFeature) {
    params = {
        service: "WFS",
        request: "GetFeature",
        typeName: _layerName,
        maxFeatures: _maxFeature,
        outputFormat: "application/json",
        srsName: "EPSG:4326",
        cql_filter: _strFilter,
    };
    var parameters = L.Util.extend(params);
    return _wmsURL + L.Util.getParamString(parameters);
}

function getLayerWMS(_wmsURL, _layerName, _strFilter, _strStyle) {
    if (_strFilter != null) {
        return L.tileLayer.wms(_wmsURL, {
            layers: _layerName,
            cql_filter: _strFilter,
            styles: _strStyle,
            opacity: WMS_OPACITY_DEFAULT,
            transparent: true,
            srs: "EPSG:4326",
            format: "image/png",
            style: _strStyle,
        });
    } else {
        // Áp dụng cho ranh giới: quốc gia, khu vực
        return L.tileLayer.wms(_wmsURL, {
            layers: _layerName,
            styles: _strStyle,
            opacity: WMS_OPACITY_DEFAULT,
            transparent: true,
            format: "image/png",
        });
    }
}

function getFeatureInfoUrl(_latlng, _layerName, _wmsURL, _cqlFillter) {
    var point = map.latLngToContainerPoint(_latlng, map.getZoom()),
        size = map.getSize(),
        params = {
            request: "GetFeatureInfo",
            service: "WMS",
            srs: "EPSG:4326",
            //styles: 'grass',
            transparent: true,
            version: "1.1.1",
            format: "image/png",
            bbox: map.getBounds().toBBoxString(),
            height: size.y,
            width: size.x,
            cql_filter: _cqlFillter,
            layers: _layerName,
            query_layers: _layerName,
            info_format: "application/json",
        };
    params[params.version === "1.3.0" ? "i" : "x"] = Math.round(point.x);
    params[params.version === "1.3.0" ? "j" : "y"] = Math.round(point.y);

    var test = _wmsURL + L.Util.getParamString(params, _wmsURL, true);
    return _wmsURL + L.Util.getParamString(params, _wmsURL, true);
}

function cleanViewTNR() {
    map.overlaysDBR.clearLayers();
}

$("#district").change(function () {
    var mahuyen = $(this).val();

    $.ajax({
        method: "GET",
        url: "commune/" + mahuyen,
    }).done(function (data) {
        $("#commune").html(data);
    });

    //Load RGHC Huyen
    nameLayer = "rghc_vn_2023:rg_vn_huyen";
    sqlFilter = "MAHUYEN=" + mahuyen;

    fnShowMapRG(nameLayer, sqlFilter);

    currentLevel = "mahuyen";
    currentCode = mahuyen;
    //set tham so cho lop ban do wms
    cleanViewTNR()
    checkedWMSLayer(currentMapType, "mahuyen", mahuyen);
});

$("#commune").change(function () {
    var maxa = $(this).val();
    cleanViewTNR();
    //Load RGHC Xa
    nameLayer = "rghc_vn_2023:rg_vn_xa";
    sqlFilter = "MAXA=" + maxa;
    fnShowMapRG(nameLayer, sqlFilter);
    currentLevel = "maxa";
    currentCode = maxa;
    cleanViewTNR()
    checkedWMSLayer(currentMapType, "maxa", maxa);
});

$("#bandoDBR").change(function (event) {
    if (event.currentTarget.checked) {
        $("#bandoCapChay").prop("checked", false);
        $("#fireWarningImg").css("visibility", "hidden");
        currentMapType = 0;
        checkedWMSLayer(currentMapType, currentLevel, currentCode);
    } else {
        cleanViewTNR();
        currentMapType=null;
    }
});

$("#bandoCapChay").change(function (event) {
    if (event.currentTarget.checked) {
        $("#bandoDBR").prop("checked", false);
        $("#fireWarningImg").css("visibility", "visible");
        currentMapType = 1;
        checkedWMSLayer(currentMapType, currentLevel, currentCode);
    } else {
        cleanViewTNR();
        currentMapType=null;
        $("#fireWarningImg").css("visibility", "hidden");
    }
});

/*
    Lấy thông tin lớp bản đồ
*/
map.on("click", function (e) {
    if ($("#bandoDBR").is(":checked") || $("#bandoCapChay").is(":checked")) {
        infoURL = getFeatureInfoUrl(
            e.latlng,
            currentLayer,
            currentWmsUrl,
            currentFillter
        );
        $.getJSON(infoURL, function (data) {
            if (data) {
                var info = data.features[0].properties;

                $("#fireWarningImg").attr(
                    "src",
                    "map/images/fireWarningIcon/level" + info.capchay + ".png"
                );

                var popup = L.popup()
                    .setLatLng(e.latlng)
                    .setContent(`
                        <table class='table'>
                            <thead style='font-size: 14px'>
                                <tr>
                                    <th class="col-4" style="font-size: 13px; border-bottom: 2px solid #333; color:#000; background:none; padding:0; border-top:none">Thuộc tính</th>
                                    <th class="col-8" style="font-size: 13px; border-bottom: 2px solid #333; color:#000; background:none; padding:0; border-top:none">Thông tin</th>
                                </tr>
                            </thead>
                            <tbody id='popup_content' style='font-size: 12px'> 
                                <tr>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Huyện/ Xã</td>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;"> ${info.huyen}/ ${info.xa}</td>
                                </tr> 
                                <tr>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Tiểu khu/ Khoảnh/ Lô</td>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;"> ${info.tk}/ ${info.khoanh}/ ${info.lo}</td>
                                </tr> 
                                <tr>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Chủ rừng</td>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">${info.churung != undefined ? info.churung : ''}</td>
                                </tr> 
                                 
                                <tr>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Trạng thái rừng</td>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">${info.ldlr != undefined ? getLDLR(info.ldlr) : ''}</td>
                                </tr> 
                                <tr>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Loài cây/Cấp tuổi/Năm trồng</td>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">${info.sldlr}/${info.namtr}/${info.captuoi}</td>
                                </tr> 
                                <tr>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Diện tích</td>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">${info.dtich != undefined ? info.dtich : ''} ha</td>
                                </tr>
                                <tr>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Trữ lượng</td>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">${info.mgolo != undefined ? info.mgolo : ''} m3</td>
                                </tr>
                                <tr>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Ba loại rừng</td>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">${info.malr3 != undefined ? get3LR(info.malr3) : ''}</td>
                                </tr> 
                                <tr>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Lập địa</td>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">${info.lapdia != undefined ? getLapDia(info.lapdia) : ''}</td>
                                </tr>
                                <tr>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Mục đích sử dụng</td>
                                    <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">${info.mamdsd != undefined ? getMDST(info.mamdsd) : ''}</td>
                                </tr> 
                            </tbody>
                        </table>
                    `)
                .openOn(map);

                $.ajax({
                    method: "GET",
                    url: "ajax/getWeather/" + info.maxa,
                }).done(function (dt) {
                    var weather = dt[0];
                    $('#popup_content').append(`
                        <tr>
                            <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Nhiệt độ</td>
                            <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">${weather.nhietdo}°C</td>
                        </tr> 
                        <tr>
                            <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Độ ẩm</td>
                            <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">${weather.doam}%</td>
                        </tr> 
                        <tr>
                            <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Lượng mưa</td>
                            <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">${weather.luongmua}mm</td>
                        </tr> 
                        <tr>
                            <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">Chỉ số P</td>
                            <td style="background: none; color: #000; font-size: 12px; border-bottom: 1px solid #cfcfcf; padding: 8px;">${weather.csp}</td>
                        </tr> 
                    `)
                });
            } else {
                cleanViewTNR();
            }
        });
    }
});

//Lay thong tin ban do
function getLDLR(maLRLR) {
    var ldlrString = "";
    for (var i = 0; i < LDLR_MA_TRANG_THAI.length; i++) {
        if (maLRLR.toLowerCase() == LDLR_MA_TRANG_THAI[i]) {
            ldlrString = LDLR_TEN_TRANG_THAI[i];
            return ldlrString;
        }
    }
    return ldlrString;
}

function get3LR(maLR3) {
    var string3LR = "";
    switch (maLR3) {
        case 1:
            string3LR = "Rừng phòng hộ";
            break;
        case 2:
            string3LR = "Rừng đặc dụng";
            break;
        case 3:
            string3LR = "Rừng sản xuất";
            break;
    }
    return string3LR;
}

function getLapDia(maLapDia) {
    var stringLapDia = "";
    switch (maLapDia) {
        case 1:
            stringLapDia = "Núi đất";
            break;
        case 2:
            stringLapDia = "Núi đá";
            break;
        case 3:
            stringLapDia = "Đất ngập mặn";
            break;
        case 4:
            stringLapDia = "Đất ngập phèn";
            break;
        case 5:
            stringLapDia = "Đất ngập ngọt";
            break;
        case 6:
            stringLapDia = "Bãi cát";
            break;
    }
    return stringLapDia;
}

function getMDST(maMDSD) {
    var mdsdString = MDSD_MA_MUC_DICH[maMDSD - 1];
    return mdsdString;
}

//Bảng tra mã loại đất loại rừng
var LDLR_TEN_TRANG_THAI = [
    "1 - Rừng gỗ tự nhiên núi đất LRTX giàu nguyên sinh",
    "2 - Rừng gỗ tự nhiên núi đất LRTX TB nguyên sinh",
    "3 - Rừng gỗ tự nhiên núi đất LRRL giàu nguyên sinh",
    "4 - Rừng gỗ tự nhiên núi đất LRRL TB nguyên sinh",
    "5 - Rừng gỗ tự nhiên núi đất LK giàu nguyên sinh",
    "6 - Rừng gỗ tự nhiên núi đất LK TB nguyên sinh",
    "7 - Rừng gỗ tự nhiên núi đất LRLK giàu nguyên sinh",
    "8 - Rừng gỗ tự nhiên núi đất LRLK TB nguyên sinh",
    "9 - Rừng gỗ tự nhiên núi đá LRTX giàu nguyên sinh",
    "10 - Rừng gỗ tự nhiên núi đá LRTX TB nguyên sinh",
    "11 - Rừng gỗ tự nhiên ngập mặn nguyên sinh",
    "12 - Rừng gỗ tự nhiên ngập phèn nguyên sinh",
    "13 - Rừng gỗ tự nhiên ngập ngọt nguyên sinh",
    "14 - Rừng gỗ tự nhiên núi đất LRTX giàu",
    "15 - Rừng gỗ tự nhiên núi đất LRTX TB",
    "16 - Rừng gỗ tự nhiên núi đất LRTX nghèo",
    "17 - Rừng gỗ tự nhiên núi đất LRTX nghèo kiệt",
    "18 - Rừng gỗ tự nhiên núi đất LRTX phục hồi",
    "19 - Rừng gỗ tự nhiên núi đất LRRL giàu",
    "20 - Rừng gỗ tự nhiên núi đất LRRL TB",
    "21 - Rừng gỗ tự nhiên núi đất LRRL nghèo",
    "22 - Rừng gỗ tự nhiên núi đất LRRL nghèo kiệt",
    "23 - Rừng gỗ tự nhiên núi đất LRRL phục hồi",
    "24 - Rừng gỗ tự nhiên núi đất LK giàu",
    "25 - Rừng gỗ tự nhiên núi đất LK TB",
    "26 - Rừng gỗ tự nhiên núi đất LK nghèo",
    "27 - Rừng gỗ tự nhiên núi đất LK nghèo kiệt",
    "28 - Rừng gỗ tự nhiên núi đất LK phục hồi",
    "29 - Rừng gỗ tự nhiên núi đất LRLK giàu",
    "30 - Rừng gỗ tự nhiên núi đất LRLK TB",
    "31 - Rừng gỗ tự nhiên núi đất LRLK nghèo",
    "32 - Rừng gỗ tự nhiên núi đất LRLK nghèo kiệt",
    "33 - Rừng gỗ tự nhiên núi đất LRLK phục hồi",
    "34 - Rừng gỗ tự nhiên núi đá LRTX giàu",
    "35 - Rừng gỗ tự nhiên núi đá LRTX TB",
    "36 - Rừng gỗ tự nhiên núi đá LRTX nghèo",
    "37 - Rừng gỗ tự nhiên núi đá LRTX nghèo kiệt",
    "38 - Rừng gỗ tự nhiên núi đá LRTX phục hồi",
    "39 - Rừng gỗ tự nhiên ngập mặn giàu",
    "40 - Rừng gỗ tự nhiên ngập mặn trung bình",
    "41 - Rừng gỗ tự nhiên ngập mặn nghèo",
    "42 - Rừng gỗ tự nhiên ngập mặn phục hồi",
    "43 - Rừng gỗ tự nhiên ngập phèn giàu",
    "44 - Rừng gỗ tự nhiên ngập phèn trung bình",
    "45 - Rừng gỗ tự nhiên ngập phèn nghèo",
    "46 - Rừng gỗ tự nhiên ngập phèn phục hồi",
    "47 - Rừng gỗ tự nhiên ngập ngọt",
    "48 - Rừng tre/luồng tự nhiên núi đất",
    "49 - Rừng nứa tự nhiên núi đất",
    "50 - Rừng vầu tự nhiên núi đất",
    "51 - Rừng lồ ô tự nhiên núi đất",
    "52 - Rừng tre nứa khác tự nhiên núi đất",
    "53 - Rừng tre nứa tự nhiên núi đá",
    "54 - Rừng hỗn giao G-TN tự nhiên núi đất ",
    "55 - Rừng hỗn giao TN-G tự nhiên núi đất ",
    "56 - Rừng hỗn giao tự nhiên núi đá",
    "57 - Rừng cau dừa tự nhiên núi đất",
    "58 - Rừng cau dừa tự nhiên núi đá",
    "59 - Rừng cau dừa tự nhiên ngập nước ngọt",
    "60 - Rừng gỗ trồng núi đất",
    "61 - Rừng gỗ trồng núi đá",
    "62 - Rừng gỗ trồng ngập mặn",
    "63 - Rừng gỗ trồng ngập phèn",
    "64 - Rừng gỗ trồng đất cát",
    "65 - Rừng tre nứa trồng núi đất",
    "66 - Rừng tre nứa trồng núi đá",
    "67 - Rừng cau dừa trồng cạn",
    "68 - Rừng cau dừa trồng ngập nước",
    "69 - Rừng cau dừa trồng đất cát",
    "70 - Rừng trồng khác núi đất",
    "71 - Rừng trồng khác núi đá",
    "72 - Đất đã trồng trên núi đất",
    "73 - Đất đã trồng trên núi đá",
    "74 - Đất đã trồng trên đất ngập mặn",
    "75 - Đất đã trồng trên đất ngập phèn",
    "76 - Đất đã trồng trên đất ngập ngọt",
    "77 - Đất đã trồng trên bãi cát",
    "78 - Đất có cây gỗ tái sinh núi đất",
    "79 - Đất có cây gỗ tái sinh núi đá",
    "80 - Đất có cây gỗ tái sinh ngập mặn",
    "81 - Đất có cây tái sinh ngập nước phèn",
    "82 - Đất trống núi đất",
    "83 - Đất trống núi đá",
    "84 - Đất trống ngập mặn",
    "85 - Đất trống ngập nước phèn",
    "86 - Bãi cát",
    "87 - Bãi cát có cây rải rác",
    "88 - Đất nông nghiệp núi đất",
    "89 - Đất nông nghiệp núi đá",
    "90 - Đất nông nghiệp ngập mặn",
    "91 - Đất nông nghiệp ngập nước ngọt",
    "92 - Mặt nước ",
    "93 - Đất khác",
];

var LDLR_MA_TRANG_THAI = [
    "txg1",
    "txb1",
    "rlg1",
    "rlb1",
    "lkg1",
    "lkb1",
    "rkg1",
    "rkb1",
    "txdg1",
    "txdb1",
    "rnm1",
    "rnp1",
    "rnp1",
    "txg",
    "txb",
    "txn",
    "txk",
    "txp",
    "rlg",
    "rlb",
    "rln",
    "rlk",
    "rlp",
    "lkg",
    "lkb",
    "lkn",
    "lkk",
    "lkp",
    "rkg",
    "rkb",
    "rkn",
    "rkk",
    "rkp",
    "txdg",
    "txdb",
    "txdn",
    "txdk",
    "txdp",
    "rnmg",
    "rnmb",
    "rnmn",
    "rnmp",
    "rnpg",
    "rnpb",
    "rnpn",
    "rnpp",
    "rnn",
    "tlu",
    "nua",
    "vau",
    "loo",
    "tnk",
    "tnd",
    "hg1",
    "hg2",
    "hgd",
    "cd",
    "cdd",
    "cdn",
    "rtg",
    "rtgd",
    "rtm",
    "rtp",
    "rtc",
    "rttn",
    "rttnd",
    "rtcd",
    "rtcdn",
    "rtcdc",
    "rtk",
    "rtkd",
    "dtr",
    "dtrd",
    "dtrm",
    "dtrp",
    "dtrn",
    "dtrc",
    "dt2",
    "dt2d",
    "dt2m",
    "dt2p",
    "dt1",
    "dt1d",
    "dt1m",
    "dt1p",
    "bc1",
    "bc2",
    "nn",
    "nnd",
    "nnm",
    "nnp",
    "mn",
    "dkh",
];

//Bảng tra chức năng rừng
var MDSD_MA_MUC_DICH = [
    "1 - Phòng hộ đầu nguồn",
    "2 - Phòng hộ chắn sóng",
    "3 - Phòng hộ chắn cát",
    "4 - Phòng hộ môi sinh",
    "5 - Vườn quốc gia",
    "6 - Bảo tồn thiên nhiên",
    "7 - Nghiên cứu khoa học",
    "8 - Rừng lịch sử VHCQ",
    "9 - Gỗ lớn",
    "10 - Gỗ nhỏ",
    "11 - Tre nứa",
    "12 - Mục đích sản xuất khác",
];
