const mapContainer = "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}";
const map_window_container = "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}";
const projectsLocations = document.getElementById("map_container_div").dataset.json;
const projectIconSrc = document.getElementById("project_pin").dataset.src;
const officeLogoSrc = document.getElementById("map_ineratec_logo").dataset.src;
const officeLogoShadowSrc = document.getElementById("map_ineratec_logo").dataset.shadow;
const config = document.getElementById("map_container_div").dataset.config;


const mainOficeIcon = L.icon({
  iconUrl: officeLogoSrc,
  shadowUrl: officeLogoShadowSrc,
  iconSize:     [36, 16],
  shadowSize: [56, 50],
  iconAnchor:   [46, 40],
  shadowAnchor: [56, 50],
  popupAnchor:  [201, -12],
});

const projectIcon = L.icon({
  iconUrl: projectIconSrc,
  iconSize:     [36, 36],
  iconAnchor:   [18, 36],
  popupAnchor:  [201, -12],
});

// this popup content will be changed dinamiclly in drupal
const oficePopupContent = () => {
  const configData = JSON.parse(config);
  return `<div class="office-popup-content-container">
      <h6 class="font-PtSansBold leading-[20px] mb-[4px]">INERATEC GmbH <br> Innovative Chemical Reactor Technologie</h6>
      <div class="leading-[28px]">
        <span>${configData.address}</span>
        <span>${configData.telefon}</span>
      </div>  
  </div>
`
}

function getProjectPopupContent (project) {
  return `
    <div class="project-popup-content-container">
        <h6 class="font-PtSansBold">${project.title}</h6>
       <button>
            <a href="/node/${project.nid}">Read More</a>
        </button>
    </div>
  `;
}

let zoomLevel = 6;
const map = L.map('map', {
  scrollWheelZoom: false,
  touchZoom: false,
}).setView([49.02453806760097, 8.348987321399818], zoomLevel);

// basic map settings
L.tileLayer(mapContainer, {
  maxZoom: 19,
  minZoom: 3,
  subdomains:['mt0','mt1','mt2','mt3'],
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.zoomControl.remove(); // remove default zoom-control to add custom position

// zoom-control atribute
L.control.zoom({
  position: 'bottomright'
}).addTo(map);

getProjectsCoordinates();
async function getProjectsCoordinates () {
  let projectsGeoCoordinates = [];
  const coords = await JSON.parse(projectsLocations);
  projectsGeoCoordinates = coords;
  projectsGeoCoordinates.forEach(proj => {
    L.marker([proj.lang, proj.long], {icon: projectIcon}).addTo(map)
      .bindPopup(getProjectPopupContent(proj));
  })
}

const mainMarker = L.marker([49.02453806760097, 8.348987321399818], {icon: mainOficeIcon}).addTo(map);
mainMarker.bindPopup(oficePopupContent());


function drawPoligon (...poligons) {
  poligons.forEach(poligonCoords => {
    const polygon = L.polygon(poligonCoords, {
      color: "#FF6C3D",
      weight: 2,
      fillOpacity: .60
    })
      .addTo(map);
  });
};
drawPoligon(...poligonsArray);

const map_window = new L.map('map_window', {
  scrollWheelZoom: false,
  touchZoom: false,
  dragging: false,
}).setView([49.02453806760097, 8.348987321399818], 1);

L.tileLayer(map_window_container, {
  subdomains:['mt0','mt1','mt2','mt3'],
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map_window);
map_window.zoomControl.remove();

