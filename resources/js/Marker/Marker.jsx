import L from 'leaflet';

const mountain = new L.Icon({
    iconUrl: 'https://img.icons8.com/?size=200&id=sQ90qWr6WjKH&format=png',
    iconRetinaUrl: 'https://img.icons8.com/?size=200&id=sQ90qWr6WjKH&format=png',
    iconSize: new L.Point(50, 50),
});

const markerIcon = new L.Icon({
    iconUrl: '/marker.png',
    iconRetinaUrl: '/marker.png',
    iconSize: new L.Point(50, 50),
});

const volcano = new L.Icon({
    iconUrl: 'https://img.icons8.com/?size=128&id=WBGXXRL30VKg&format=png',
    iconRetinaUrl: 'https://img.icons8.com/?size=128&id=WBGXXRL30VKg&format=png',
    iconSize: new L.Point(50, 50),
});

const home = new L.Icon({
    iconUrl: '/home.png',
    iconRetinaUrl: '/home.png',
    iconSize: new L.Point(60, 60),
});

export { mountain, volcano, markerIcon, home };