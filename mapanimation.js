mapboxgl.accessToken = 'pk.eyJ1IjoiamVzc2lqYWRlOTQiLCJhIjoiY2w4eDd0czByMDN4cDN4b3d3eGcwc29mNiJ9.wJE0CCCmYkNLOc2C4JLfVQ';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jessijade94/cl8yoj5iy000b15tc4wow1jzh',
    center: [-84.766849, 43.597646],
    zoom: 7,
  });

const busStops = [
  [-85.605469, 44.759090],
  [-85.509890, 43.869549],
  [-85.668083, 42.963360],
  [-84.55538, 42.733771],
  [-83.690021, 43.016169],
  [-83.04664, 42.331551],
];

var marker = new mapboxgl.Marker()
  .setLngLat([-85.605469, 44.759090])
  .addTo(map);

let counter = 0;
function move() {
  setTimeout(() =>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
};

