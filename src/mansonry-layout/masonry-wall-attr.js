import viewCallbacks from 'can-view-callbacks';
import Masonry from "masonry-layout";
import ImageLoaded from 'imagesloaded';
import domEvents from "can-util/dom/events/events";

viewCallbacks.attr('masonry-wall',function(el, attrData){
  var masonry;
  var scope;
  scope = attrData.scope;
  masonry = new Masonry(el, {
    itemSelector: '.grid-item',
    columnWidth: ".grid-sizer",
    percentPosition: true,
    transitionDuration: '0.8s'
  });
  scope.set('masonry', masonry);
});


viewCallbacks.attr('masonry-brick', function(el, attrData){

  var scope = attrData.scope;
  var masonry;

  var reloadMasonry = function() {
    masonry = scope.get('masonry');
    masonry.reloadItems();
    masonry.layout();
  };
  
  new ImageLoaded(el, reloadMasonry);

  domEvents.addEventListener.call(el,"inserted", reloadMasonry);

  domEvents.addEventListener.call(el,"removed", reloadMasonry);
});