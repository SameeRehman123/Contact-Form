$(function(){
  $('form div input, textarea').focusout(function(){

    var val = $(this).val();

    if(val === "") {
      $(this).removeClass('has-value');
    }

    else{
      $(this).addClass('has-value');
    }

  });
});
