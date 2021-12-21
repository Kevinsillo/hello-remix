console.log(
`%c

Portfolio (2021) by Kevin Illanas
Twitter: https://twitter.com/Quebinaso
Linkedin: https://www.linkedin.com/in/kevinillanas/

`,'background-color:orange;color:#171717;font-weight:bold'
)

// Animación del splash
$('.logo-text').fadeIn(1000, function() {
  $('.splash').delay(1500).fadeOut(1000)
})

// Deshabilita el modo depuración
document.oncontextmenu = function(){return false}
document.onkeydown=function (e){
  var currKey=0,evt=e||window.event;
  currKey=evt.keyCode||evt.which||evt.charCode;
  if (currKey == 123) {
    window.event.cancelBubble = true;
    window.event.returnValue = false;
  }
  if (e.ctrlKey && e.shiftKey && currKey == 73) {
    window.event.cancelBubble = true;
    window.event.returnValue = false;
  }
}