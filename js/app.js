var map;

function main() {

  var options = {
    center: [38.200, -85.771],
    zoom: 11, 
    zoomControl: false,  // dont add the zoom overlay (it is added by default)
    loaderControl: false //dont show tiles loader
  };

  cartodb.createVis('map', 'http://cityresearch.cartodb.com/api/v2/viz/5c39067a-b3aa-11e4-a01f-0e9d821ea90d/viz.json', options)
        .done(function(vis, layers) {
      // there are two layers, base layer and points layer
     
 

      // add the tooltip show when hover on the point
      vis.addOverlay({
        type: 'tooltip',
        position: 'top|center',
        template: '<p>{{name_to_display}}</p>'
      });

     

    });

}

window.onload = main;
