import Incidente from './incidentes';

var rechazado = '#d50000';
var aceptado = '#64dd17';
var enviado = '#757575';
var proceso = '#ffd600';

var incidencia = [
    {
        id: 0,
        incidente: 'Micro Basural',
        direccion: 'Diego Portales 806',
        estado: aceptado,
        imagen: '',
        icon: 'trash'
    },
    {
        id: 1,
        incidente: 'Mobiliario Urbano en Mal Estado',
        direccion: 'Arturo Prat 725',
        estado: proceso,
        imagen: '',
        icon: 'chair'
    }
];

module.exports = incidencia;