import DefineMap from 'can-define/map/map';

export const ViewModel = DefineMap.extend('MasonryVM', {
  masonry: {
    type: "*",
    value: null
  },
  columnWidth: {
    type: "*",
    value: null
  },
  itemSelector: {
    type: "*",
    value: null
  },
  percentPosition: {
    type: "boolean",
    value: null
  }
});
