'use strict';
//container_left is the element that holds the value of the ultra rare word count statistic in the chart shown before each wordtwist game.
var container_left = document.getElementById("container_left").children[0].children[2].children[0].children[4].children[1].innerText;
// var cbox = document.getElementsByClassName('cbox')[0].children[0].children[2].children[0].children[4].children[1].innerText;
console.log('This is the container_left: ', container_left);
if(container_left < 140) {
  window.location.reload();
  console.log('This container_left is less than: ', container_left);
} else {
  console.log('This container_left is more than: ', container_left);
}
