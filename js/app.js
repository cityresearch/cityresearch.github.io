var map;

function main() {

  var options = {
    center: [38.2500, -85.7667],
    zoom: 10, 
    zoomControl: false,  // dont add the zoom overlay (it is added by default)
    loaderControl: false //dont show tiles loader
  };

  cartodb.createVis('map', 'http://cityresearch.cartodb.com/api/v2/viz/5c39067a-b3aa-11e4-a01f-0e9d821ea90d/viz.json', options)


