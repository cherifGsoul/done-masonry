import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './mansonry-layout.less';
import view from './mansonry-layout.stache';
/*import viewCallbacks from 'can-view-callbacks';
import Masonry from "masonry-layout";
*/

export const ViewModel = DefineMap.extend({
  masonry: {
    type: "*"
  }
});

export default Component.extend({
  tag: 'masonry-layout',
  ViewModel,
  view,
  leakScope: true
});
