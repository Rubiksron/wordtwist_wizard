'use strict';
//cbox is the element that holds the value of the ultra rare word count statistic in the chart shown before each game.
var cbox = document.getElementsByClassName('cbox')[0].children[0].children[2].children[0].children[4].children[1].innerText;
console.log('This is the cbox: ', cbox);
if(cbox < 160) {
  window.location.reload();
  console.log('This cbox is less than: ', cbox);
} else {
  console.log('This cbox is more than: ', cbox);
  alert('SHAZZAM, your game is ready!!');
}
