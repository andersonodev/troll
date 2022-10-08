let contadorHover = 0
var c = 0
$('#change').click(function () {
  if (c == 1) {
    acerto()
  }
  $('#change').html('Sim')
  $('#move').show()
  c = 1
})

$('#move').hover(function () {
  change()
})

function acerto() {
  alert('Te Amo!! Obrigado por aceitar por vontade própria')
}

function change() {
  var i = Math.floor(Math.random() * 1000) + 1
  var j = Math.floor(Math.random() * 500) + 1
  $('#move').css({ top: j + 'px', left: i + 'px' })

  contadorHover++

  if (contadorHover > 28 && contadorHover < 30) {
    alert('Aperta logo em sim!! SUA BOBINHA')
  }
}
