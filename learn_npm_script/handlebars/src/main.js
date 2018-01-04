import $ from 'jquery';
// webpack 一切皆可打包
import template from '../template/user.hbs';

const user = {
  name: '旅梦',
  age: 18,
  photo: 'https://avatars2.githubusercontent.com/u/29810747?s=460&v=4'
}

$(function() {
  let item = $(template(user));
  item.appendTo($('#root'));
  console.log('ready');
})