import L from 'leaflet';

const mountain = new L.Icon({
    iconUrl: 'https://img.icons8.com/?size=200&id=sQ90qWr6WjKH&format=png',
    iconRetinaUrl: 'https://img.icons8.com/?size=200&id=sQ90qWr6WjKH&format=png',
    iconSize: new L.Point(50, 50),
});

const markerIcon = new L.Icon({
    iconUrl: '/marker.png',
    iconRetinaUrl: '/marker.png',
    iconSize: new L.Point(40, 40),
});

const volcano = new L.Icon({
    iconUrl: '/berapi.gif',
    iconRetinaUrl: '/berapi.gif',
    iconSize: new L.Point(70, 70),
});

const home = new L.Icon({
    iconUrl: '/home.png',
    iconRetinaUrl: '/home.png',
    iconSize: new L.Point(50, 50),
});

export { mountain, volcano, markerIcon, home };