
  $(function() {
    $( "#tabs" ).tabs();
  });


$(document).ready(function() {
    $('#checkbox1').change(function() {
        $('#div1').toggle();
    });
});

$(document).ready(function() {
    $('#checkbox2').change(function() {
        $('#div2').toggle();
    });
});

$(document).ready(function() {
    $('#checkbox3').change(function() {
        $('#div3').toggle();
    });
});

$(document).ready(function() {
    $('#checkbox4').change(function() {
        $('#div4').toggle();
    });
});

$(document).ready(function() {
    $('#checkbox5').change(function() {
        $('#div5').toggle();
    });
});

$(document).ready(function() {
    $('#checkbox6').change(function() {
        $('#div6').toggle();
    });
});



$(document).ready(function(){
  $("#flip4").click(function(){
    $("#panel4").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#flip1").click(function(){
    $("#panel1").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#flip2").click(function(){
    $("#panel2").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#flip3").click(function(){
    $("#panel3").slideToggle("slow");
  });
});

$(document).ready(function() {
    $('.nav li.dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });
});
