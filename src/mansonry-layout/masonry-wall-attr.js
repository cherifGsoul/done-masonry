import viewCallbacks from 'can-view-callbacks';
import Masonry from "masonry-layout";

viewCallbacks.attr('masonry-wall',function(el){
  new Masonry(el, {
    itemSelector: '.grid-item',
    columnWidth: 200
  });
});
