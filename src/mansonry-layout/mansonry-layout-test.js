import QUnit from 'steal-qunit';
import { ViewModel } from './mansonry-layout';

// ViewModel unit tests
QUnit.module('done-masonry/mansonry-layout');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the masonry-layout component');
});
