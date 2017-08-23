import QUnit from 'steal-qunit';
import plugin from './done-masonry';

QUnit.module('done-masonry');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the done-masonry plugin');
});
