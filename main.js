let submitOpinion = document.getElementById('submitOpinion');

let bloqueDeTexto = document.getElementById('bloqueDeTexto');

submitOpinion.addEventListener('click', () => {

  if (bloqueDeTexto.value) {
    var params = {
      message: bloqueDeTexto.value,
    };

    emailjs
      .send('service_mpd8qqx', 'template_piv9vqk', params)
      .then(function () {
        Swal.fire(
          'Su consulta fue enviada con éxito, será respondida a la brevedad!'
        );
      });
    submitOpinion.remove();
    
  } else {
    Swal.fire('No pudimos enviar su consulta');
  }
});

