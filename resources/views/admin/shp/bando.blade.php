<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
</head>
<body>
    <div id="map" style="height: 100vh;"></div>

    <script>
        var geoJson = @json($geom);
        var coor = @json($centerCoordinate);

        var map = L.map('map').setView([(coor[1]+coor[3])/2, (coor[0]+coor[2])/2], 14);
    
        L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']}).addTo(map);

        geoJson.forEach(element => {
            L.geoJSON(element).addTo(map);
        });
    </script>
    
</body>
</html>