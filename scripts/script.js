window.addEventListener('load', function () {
   $('.logo-text').fadeIn(1000, function() {
     $('.splash').delay(1500).fadeOut(1000)
   })
});

var data = JSON.parse(data)
data[0].gallery.forEach(function(i, item) {
  console.log(i.image)
  var html = '<div class="image" style="background-image: url('+i.image+')"><span>'+i.text+'</span></div>'
  var cards = document.getElementById('cards')
  var div = document.createElement('div')
  div.setAttribute('class','card-item')
  div.innerHTML = html;
  cards.appendChild(div)
})