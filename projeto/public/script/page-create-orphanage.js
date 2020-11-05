
//cria mapa

 const map = L.map('mapid').setView([-25.5350337, -49.1556336], 13);

 

//create and add tilelayer

L.tileLayer(

       'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

 

//create icon

  const icon = L.icon({

    iconUrl: "./public/imagens/map-marker.svg",

    iconSize :[58,68],

    iconAnchor : [24,68],

   })

let marker;


 

//create and add marker

map.on('click', function(event){

    const lat = event.latlng.lat;

    const lng = event.latlng.lng;

 

 

document.querySelector('[name=lat]').value=lat;

document.querySelector('[name=lng]').value=lng;

 

 

// remove icon

  marker && map.removeLayer(marker)

 

// add icon layer

  marker =L.marker([lat, lng], {icon})

   .addTo(map) 

 

})

 

// adicionar o campo de fotos

 

function addPhotoField(){

console.log("funciona")

 

}

 

 