import viewCallbacks from 'can-view-callbacks';
import Masonry from "masonry-layout";
import ImageLoaded from 'imagesloaded';
import domEvents from "can-util/dom/events/events";
import debounce from "lodash/debounce";

/**
 * initialize Masonry grid plugin
 */
viewCallbacks.attr('masonry-wall',function(el, attrData){
  var masonry, scope;
  scope = attrData.scope;
  masonry = new Masonry(el, scope.peek('masonryOptions'));
  scope.set('masonry', masonry);
});

/**
 * reload Masonry for inserted/removed items on/from the grid
 */
viewCallbacks.attr('masonry-brick', function(el, attrData) {

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
