import Component from 'can-component';
import ViewModel from "./viewmodel";
import view from './done-masonry.stache';

export default Component.extend({
  tag: 'done-masonry',
  ViewModel,
  view,
  leakScope: true
});
