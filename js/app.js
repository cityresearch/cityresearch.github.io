var map;

function main() {

  var options = {
    center: [-42.27730877423707, 172.63916015625],
    zoom: 6, 
    zoomControl: false,  // dont add the zoom overlay (it is added by default)
    loaderControl: false //dont show tiles loader
  };

  cartodb.createVis('map', 'http://cityresearch.cartodb.com/api/v2/viz/5c39067a-b3aa-11e4-a01f-0e9d821ea90d/viz.json', options)
    .done(function(vis, layers) {
      // there are two layers, base layer and points layer
      var sublayer = layers[1].getSubLayer(0);
      sublayer.set({ 'interactivity': ['cartodb_id', 'name_to_display', 'description'] });

      // Set the custom infowindow template defined on the html
      sublayer.infowindow.set('template', $('#infowindow_template').html());

      // add the tooltip show when hover on the point
      vis.addOverlay({
        type: 'tooltip',
        position: 'top|center',
        template: '<p>{{name_to_display}}</p>'
      });

      vis.addOverlay({
        type: 'infobox',
        template: '<h3>{{name_to_display}}</h3><p>{{description}}</p>',
        width: 200,
        position: 'bottom|right'
      });

    });

}

window.onload = main;
