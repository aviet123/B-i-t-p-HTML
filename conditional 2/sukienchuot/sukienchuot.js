let imgOj = null;

 function init() {
     imgOj = document.getElementById('img1');
     imgOj.style.position = 'relative';
     imgOj.style.left = '0px';
     imgOj.style.bottom = '0px';

 }
 function moveright() {
     imgOj.style.left = parseInt(imgOj.style.left) + 10 + 'px';

 }
 window.onload = init;