//cria mapa
const map = L.map("mapid").setView([-25.5350337, -49.1556336], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "./public/imagens/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [24, 68],
  popupAnchor: [170, 2],
});
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minheight: 240,
}).setContent(
  'Moro Aqui<a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/imagens/arrow-white.svg"></a>'
);
//cria

L.marker([-25.5350337, -49.1556336], { icon: icon })
  .addTo(map)
  .bindPopup(popup);

/*image gallery*/
function selectImage(event) {
  var button = event.currentTarget;

  console.log(button.children);

  // remover todas as classes ativas .active

  var buttons = document.querySelectorAll(".images button");

  //pegue todos os seletores html com o argumento

  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // selecionar a imagem clicada

  var image = button.children[0];

  // salva dentro da var a imagem clicada

  var imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar o container de imagen grande

  imageContainer.src = image.src;

  // atualizar a classe active pata este botão

  button.classList.add("active");
}
