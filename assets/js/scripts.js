$(document).ready(function() {
    $('#button-addon2').on('click', function () {
      if($('#checkboxTerminos').prop('checked') == true && $('#inputEmail').val() != ''){
        alert('¡Felicitaciones! Pronto escucharás de nosotros');
        limpiar();
      }else if($('#checkboxTerminos').prop('checked') == true && $('#inputEmail').val() == ''){
        alert('Parece que nos faltó algo...');
      }else if($('#checkboxTerminos').prop('checked') == false && $('#inputEmail').val() != ''){
        alert('Parece que nos faltó algo...');
      }
    });
  });

  function limpiar(){
    $('#inputEmail').val('');
    $('#checkboxTerminos').prop('checked', false);
  }