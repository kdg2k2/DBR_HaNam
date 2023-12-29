$(document).ready(() => {
    // toạ độ Phủ Lý Hà Nam 20.531930566909896, 105.92131932923573
    var map = L.map("map").setView(
        [20.531930566909896, 105.92131932923573],
        11
    );

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

    // Thêm lớp ranh giới
    var rgLayer = L.tileLayer
        .wms("https://bando.ifee.edu.vn:8453/geoserver/ws_ranhgioi/wms", {
            layers: "ws_ranhgioi:rg_vn_tinh",
            format: "image/png",
            transparent: true,
            opacity: 1,
            zIndex: 9999,
            cql_filter: "MATINH=35",
        })
        .addTo(map);

    // Thêm lớp dbr
    // http://localhost:8080/geoserver/HaNam/wms?service=WMS&version=1.1.0&request=GetMap&layers=HaNam%3Ahanam_dbr&bbox=105.768798828125%2C20.374835968017578%2C106.02253723144531%2C20.629398345947266&width=765&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers
    var dbrLayer = L.tileLayer
        .wms("http://localhost:8080/geoserver/HaNam/wms", {
            layers: "HaNam:hanam_dbr",
            format: "image/png",
            transparent: true,
            opacity: 1,
            zIndex: 9999,
        })
        .addTo(map);

    // Tạo các nút bên phải trên cùng
    var topRightButtons = L.control({ position: "topright" });
    topRightButtons.onAdd = function (map) {
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
        L.DomEvent.on(barsButton, "click", function () {
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
        L.DomEvent.on(barsButton, "click", function () {
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
        L.DomEvent.on(barsButton, "click", function () {
            OpenMenu();
        });
        return container;
    };
    // Thêm nút bên phải trên cùng vào bản đồ
    topRightButtons.addTo(map);
});

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

function cleanViewTNR(modeClean) {
    switch (modeClean) {
        case 100:
            $("#bandoDBR").attr("checked", false);
            $("#bandoCapChay").attr("checked", false);
            $("#district").html("");
            $("#commune").html("");
        case 101:
            $("#district").html("");
            $("#commune").html("");
            break;
        case 102:
            $("#commune").html("");
            break;
        default:
    }

    $("#xaHuyen").html("");
    $("#tkKhoanhLo").html("");
    $("#chuRung").html("");
    $("#trangThaiRung").html("");
    $("#loaiCayNamtrg").html("");
    $("#dtich").html("");
    $("#truLuong").html("");
    $("#mtn").html("");
    $("#malr3").html("");
    $("#lapDia").html("");
    $("#mamdsd").html("");
    $("#nhietDo").html("");
    $("#doAm").html("");
    $("#mua").html("");
    $("#chisoP").html("");

    map.overlaysDBR.clearLayers();
}
