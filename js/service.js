$(document).ready(function(){
  //This is for the type of business type selection checkbox selection
//for residential
var dirS = document.getElementById('fifty');

$('#residential').click(function() {
    if ($('#residential').is(':checked')) {
            $('#homeselect').show();
            $('label.ColorSel').removeClass('ColorSel'); 
            $(this).parent().addClass('ColorSel');
//            $('#entireDisplay').show();
            $('#homeselect1, #colist').hide();
            $('#commPackage').hide();
    }else {
          $('.mailService').hide();
    }
});

//for business
$('#business').click(function() {
    if ($('#business').is(':checked')) {
         $('label.ColorSel').removeClass('ColorSel'); 
         $(this).parent().addClass('ColorSel');
         $('#commPackage').show();
         $('#colist').show();
         $('.mailService').hide();
         $('#homeselect,#homeselect1,.tradeDiv').hide();
//         Payment();
      }else {
        $('#commPackage').hide();
        $('#colist').hide();
        $('.mailService').hide('checked', false);
        $('#homeselect,#homeselect1,.tradeDiv').hide();
      }
  });

//for industial
$('#industial').click(function() {
        if($('#industial').is(':checked')) {
            $('label.ColorSel').removeClass('ColorSel'); 
            $(this).parent().addClass('ColorSel');
          $('#colist').show();
          $('.comCButton').show();
          //$('#cpButtons').hide('checked', false);
          //$('#entireDisplay1').show();
          $('#entireDisplay').hide('checked', false);
          $('#resiPackage').hide();
          $('#commPackage').show();
          $('#residential').attr('checked', false);
          $('#business').attr('checked', false);
          $('#educational').attr('checked', false);
          $('#religious').attr('checked', false);
          $('#homeselect ').hide('checked', false);
          $('#homeselect1 ').hide('checked', false);
          $('.mailService').hide('checked', false);
    } else {
          $('#residential').attr('checked', false);
          $('#business').attr('checked', false);
          $('#educational').attr('checked', false);
          $('#religious').attr('checked', false);
          $('#homeselect ').hide('checked', false);
          $('#homeselect1 ').hide('checked', false);
          $('.mailService').hide('checked', false);
          //$('#cpButtons').hide('checked', false); 
    }
});
//for eductional
$('#educational').click(function() {  
        if ($('#educational').is(':checked')) {
          $('label.ColorSel').removeClass('ColorSel'); 
          $(this).parent().addClass('ColorSel');
          $('#colist').show();
          $('.comCButton').show();
          //$('#entireDisplay1').show();
          $('#entireDisplay').hide('checked', false);
          $('#resiPackage').hide();
          $('#commPackage').show();
          //$('#cpButtons').hide('checked', false);
          $('#residential').attr('checked', false);
          $('#business').attr('checked', false);
          $('#industial').attr('checked', false);
          $('#religious').attr('checked', false);
          $('#homeselect ').hide('checked', false);
          $('#homeselect1 ').hide('checked', false);
          $('.mailService').hide('checked', false);
    } else {
          $('#residential').attr('checked', false);
          $('#business').attr('checked', false);
          $('#industial').attr('checked', false);
          $('#religious').attr('checked', false);
          $('#homeselect,.mailService').hide('checked', false);
          //$('#cpButtons').show('checked', false); 
    }
});
//for religious and Multi-Family
$('#religious, #muilti').click(function() {
        if ($('#religious, #muilti').is(':checked')) {
          $('label.ColorSel').removeClass('ColorSel'); 
          $(this).parent().addClass('ColorSel');
          $('#colist').show();
          $('.comCButton').show();
          //$('#entireDisplay1').show();
          $('#entireDisplay').hide('checked', false);
          $('#resiPackage').hide();
          $('#commPackage').show();
          $('#residential').attr('checked', false);
          $('#business').attr('checked', false);
          $('#industial').attr('checked', false);
          $('#educational').attr('checked', false);
          //$('#cpButtons').hide('checked', false);
          $('#homeselect ').hide('checked', false);
          $('#homeselect1 ').hide('checked', false);
          $('.mailService').hide('checked', false);
    } else {
          $('#residential').attr('checked', false);
          $('#business').attr('checked', false);
          $('#industial').attr('checked', false);
          $('#educational').attr('checked', false);
          //$('#cpButtons').hide('checked', false);
          $('#homeselect, .mailService').hide('checked', false); 
    }
}); 


            $( ":checkbox" ).click(showRadio );
            $( "select" ).change( showRadio );

            //commerical not evenly cooling and heating 
            $( ":checkbox" ).click(Commericalnce);//refer to function Commericalnce()
            $( ":checkbox" ).click(CommericalHeat);//refer to function CommericalHeat()

            //work History
            $( ":checkbox" ).click(workHist);//refer to function workHist() (caller id page)

            //residential package radio button show hidden div
              $('#package').click(function() {
                    if ($('#package').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#packageSel').show();
                        $('#questSpilt').show();
                        $('#spiSystemSel').hide();
                        $('#entireDisplay').hide();
                        $('#spilt').attr('checked', false);
                        $('#evpgo').attr('checked', false);
                        $('#gomal').attr('checked', false);
                        $('#misplit').attr('checked', false);
                    } else {
                       $('#spilt').attr('checked', false);
                       $('#evpgo').attr('checked', false);
                       $('#gomal').attr('checked', false);
                       $('#misplit').attr('checked', false);
                      
                    }
                });
              //residential spilt radio button show hidden div
              $('#spilt').click(function() {
                    if ($('#spilt').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#packageSel ').hide();
                        $('#spiSystemSel').show();
                        $('#questSpilt').hide();
                        $('#filtHide').show();
                        $('#iduHide').show();
                        $('#hgeHide').show();
                        $('#package').attr('checked', false);
                        $('#evpgo').attr('checked', false);
                        $('#gomal').attr('checked', false);
                        $('#misplit').attr('checked', false);
                        
                    } else {
                       $('#package').attr('checked', false);
                       $('#evpgo').attr('checked', false);
                       $('#gomal').attr('checked', false);
                       $('#misplit').attr('checked', false);
                       
                    }
                });
              //evaporative spilt radio button show hidden div
              $('#evpgo').click(function() {
                    if ($('#evpgo').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.egmsDiv ,.uaaeDiv').show();
                        $('#packageSel,.geoDiv').hide();
                        $('#spiSystemSel,.ParkSpecial').hide();
                        $('#questSpilt').hide();
                        $('#filtHide').show();
                        $('#iduHide').show();
                        $('#hgeHide').show();
                        $('#package').attr('checked', false);
                        $('#spilt').attr('checked', false);
                        $('#gomal').attr('checked', false);
                        $('#misplit').attr('checked', false);
                    } else {
                       $('#package').attr('checked', false);
                       $('#spilt').attr('checked', false);
                       $('#gomal').attr('checked', false);
                       $('#misplit').attr('checked', false);
                    }
                });
                
                $("input[name = uaae]").click(function(){
                    if($(this).is(':checked')) {
                        $('.ParkSpecial').show();
                    }else{
                        $('.ParkSpecial').hide();
                    }
                   
                });
               
              //Geothermal spilt radio button show hidden div
              $('#gomal').click(function() {
                    if ($('#gomal').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.egmsDiv, .geoDiv').show();
                        $('#packageSel,.uaaeDiv,.miniDiv ').hide();
                        $('#spiSystemSel,.ParkSpecial').hide();
                        $('#questSpilt').hide();
                        $('#filtHide').hide();
                        $('#iduHide').hide();
                        $('#hgeHide').hide();
                        $('#package').attr('checked', false);
                        $('#spilt').attr('checked', false);
                        $('#evpgo').attr('checked', false);
                        $('#misplit').attr('checked', false);
                    } else {
                       $('#package').attr('checked', false);
                       $('#spilt').attr('checked', false);
                       $('#evpgo').attr('checked', false);
                       $('#misplit').attr('checked', false);
                    }
                });
                
                //geothermal hidden div question
                $("input[name = geo]").click(function(){
                    if($(this).is(':checked')) {
                        $('.ParkSpecial').show();
                    }else{
                        $('.ParkSpecial').hide();
                    }
                   
                });
              //Mini spilt radio button show hidden div
              $('#misplit').click(function() {
                    if ($('#misplit').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('.ParkSpecial').show();
                        $('.egmsDiv,.miniDiv').show();
                        $('#packageSel,.geoDiv,.uaaeDiv,.ParkSpecial').hide();
//                        $('#spiSystemSel').show();
                        $('#questSpilt').hide();
                        $('#filtHide').show();
                        $('#iduHide').show();
                        $('#hgeHide').show();
                        $('#package').attr('checked', false);
                        $('#spilt').attr('checked', false);
                        $('#evpgo').attr('checked', false);
                        $('#gomal').attr('checked', false);
                    } else {
                       $('#package').attr('checked', false);//package
                       $('#spilt').attr('checked', false);//split system
                       $('#evpgo').attr('checked', false);//evaporative
                       $('#gomal').attr('checked', false);//geothermal
                    }
                });
               //I don't Know radio button show hidden div
              $('#idk').click(function() {
                    if ($('#idk').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ParkSpecial').show();
                        $('.egmsDiv,.geoDiv,.uaaeDiv,.miniDiv').hide();
                        $('#packageSel').hide();
                        $('#spiSystemSel').hide();
                        $('#questSpilt').hide();
                        $('#filtHide').hide();
                        $('#iduHide').hide();
                        $('#hgeHide').show();
                        $('#package').attr('checked', false);//package
                        $('#spilt').attr('checked', false);//split system
                        $('#evpgo').attr('checked', false);//evaporative
                        $('#gomal').attr('checked', false);//geothermal
                        $('#misplit').attr('checked', false);//minispilt
                    } else {
                       $('#package').attr('checked', false);//package
                       $('#spilt').attr('checked', false);//split system
                       $('#evpgo').attr('checked', false);//evaporative
                       $('#gomal').attr('checked', false);//geothermal
                       $('#misplit').attr('checked', false);//minispilt
                    }
                });
            
              //commercial package radio button to show hidden
              $('#cpackage').click(function() {
                    if ($('#cpackage').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#cpackageSel').show();
                        $('#chwaterHide').hide();
                        $('#entireDisplay').hide('checked', false);
                        $('#comSplitRadio').hide('checked', false);
                        $('#cspilt').attr('checked', false);
                        $('#cgomal').attr('checked', false);
                        $('#cmispli').attr('checked', false);
                        $('#cevpgo').attr('checked', false);
                        $('#chwater').attr('checked', false);
                        $('#steam').attr('checked', false);
                     } else {
                       $('#cspilt').attr('checked', false);
                       $('#cgomal').attr('checked', false);
                       $('#cmispli').attr('checked', false);
                       $('#cevpgo').attr('checked', false);
                       $('#chwater').attr('checked', false);
                       $('#htwater').attr('checked', false);
                       $('#steam').attr('checked', false);
                    }
                });
              //commercial split system radio button to show hidden
              $('#cspilt').click(function() {
                    if ($('#cspilt').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#cpackageSel').hide('checked', false);
                        $('#chwaterHide').hide('checked', false);
                        $('#entireDisplay').show();
                        $('#comSplitRadio').show();
                        $('#chwaterHide').hide();
                        $('#cpackage').attr('checked', false);
                        $('#cgomal').attr('checked', false);
                        $('#cmispli').attr('checked', false);
                        $('#cevpgo').attr('checked', false);
                        $('#chwater').attr('checked', false);
                        $('#steam').attr('checked', false);
                        $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                        $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type
                        $('input[name= chwater1]').prop('checked', false);//Chilled water
                     } else {
                       $('#cpackage').attr('checked', false);
                       $('#cgomal').attr('checked', false);
                       $('#cmispli').attr('checked', false);
                       $('#cevpgo').attr('checked', false);
                       $('#chwater').attr('checked', false);
                       $('#htwater').attr('checked', false);
                       $('#steam').attr('checked', false);
                       $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                       $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type
                       $('input[name= chwater1]').prop('checked', false);//Chilled water
                    }
                });
              //commercial Geothermal radio button 
              $('#cgomal').click(function() {
                    if ($('#cgomal').is(':checked')) {
                         $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ParkSpecial').show();//Special Parking Div
                        $('#chwaterHide').hide('checked', false);
                        $('#cpackageSel').hide('checked', false);
                        $('#entireDisplay').hide('checked', false);
                        $('#comSplitRadio').hide('checked', false);
                        $('#cpackage').attr('checked', false);
                        $('#cspilt').attr('checked', false);
                        $('#cmispli').attr('checked', false);
                        $('#cevpgo').attr('checked', false);
                        $('#chwater').attr('checked', false);
                        $('#htwater').attr('checked', false);
                        $('#steam').attr('checked', false);
                        $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                        $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type
                        $('input[name= chwater1]').prop('checked', false);//Chilled water
                     } else {
                       $('#cpackage').attr('checked', false);
                       $('#cspilt').attr('checked', false);
                       $('#cmispli').attr('checked', false);
                       $('#cevpgo').attr('checked', false);
                       $('#chwater').attr('checked', false);
                       $('#htwater').attr('checked', false);
                       $('#steam').attr('checked', false);
                       $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                       $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type
                       $('input[name= chwater1]').prop('checked', false);//Chilled water

                    }
                });
              //commercial mini split radio button to show hidden
              $('#cmispli').click(function() {
                    if ($('#cmispli').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ParkSpecial').show();//Special Parking Div
                        $('#chwaterHide').hide('checked', false);
                        $('#cpackageSel').hide('checked', false);
                        $('#entireDisplay').hide('checked', false);
                        $('#comSplitRadio').hide('checked', false);
                        $('#cpackage').attr('checked', false);
                        $('#cspilt').attr('checked', false);
                        $('#cgomal').attr('checked', false);
                        $('#cevpgo').attr('checked', false);
                        $('#chwater').attr('checked', false);
                        $('#htwater').attr('checked', false);
                        $('#steam').attr('checked', false);
                        $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                        $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type
                        $('input[name= chwater1]').prop('checked', false);//Chilled water
                     } else {
                       $('#cpackage').attr('checked', false);
                       $('#cspilt').attr('checked', false);
                       $('#cgomal').attr('checked', false);
                       $('#cevpgo').attr('checked', false);
                       $('#chwater').attr('checked', false);
                       $('#htwater').attr('checked', false);
                       $('#steam').attr('checked', false);
                       $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                       $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type
                       $('input[name= chwater1]').prop('checked', false);//Chilled water
                    }
                });
              //commercial Evaporative radio button to show hidden
              $('#cevpgo').click(function() {
                    if ($('#cevpgo').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ParkSpecial').show();//Special Parking Div
                        $('#chwaterHide').hide('checked', false);
                        $('#cpackageSel').hide('checked', false);
                        $('#entireDisplay').hide('checked', false);
                        $('#comSplitRadio').hide('checked', false);
                        $('#cpackage').attr('checked', false);
                        $('#cspilt').attr('checked', false);
                        $('#cgomal').attr('checked', false);
                        $('#cmispli').attr('checked', false);
                        $('#chwater').attr('checked', false);
                        $('#htwater').attr('checked', false);
                        $('#steam').attr('checked', false);
                        $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                        $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type
                        $('input[name= chwater1]').prop('checked', false);//Chilled water
                     } else {
                       $('#cpackage').attr('checked', false);
                       $('#cspilt').attr('checked', false);
                       $('#cgomal').attr('checked', false);
                       $('#cmispli').attr('checked', false);
                       $('#chwater').attr('checked', false);
                       $('#htwater').attr('checked', false);
                       $('#steam').attr('checked', false);
                       $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                       $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type
                       $('input[name= chwater1]').prop('checked', false);//Chilled water
                       
                    }
                });
              //commercial Chilled Water radio button to show hidden
              $('#chwater').click(function() {
                    if ($('#chwater').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#chwaterHide').show();
                        $('.ParkSpecial').hide();//Special Parking Div
                        $('#cpackageSel').hide('checked', false);
                        $('#entireDisplay').hide('checked', false);
                        $('#comSplitRadio').hide('checked', false);
                        $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                        $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type  
                        $('#cpackage').attr('checked', false);
                        $('#cspilt').attr('checked', false);
                        $('#cgomal').attr('checked', false);
                        $('#cmispli').attr('checked', false);
                        $('#cevpgo').attr('checked', false);
                        $('#htwater').attr('checked', false);
                        $('#steam').attr('checked', false);
                     } else {
                       $('#cpackage').attr('checked', false);
                       $('#cspilt').attr('checked', false);
                       $('#cgomal').attr('checked', false);
                       $('#cmispli').attr('checked', false);
                       $('#cevpgo').attr('checked', false);
                       $('#htwater').attr('checked', false);
                       $('#steam').attr('checked', false);
                       $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                       $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type
                    }
                });

              //chilled Water hidden div radio button
              // Chiller
              $('#chwat1').click(function() {
                    if ($('#chwat1').is(':checked')) {
                         $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ParkSpecial').show();
                    } else {
                       $('#chwat2').prop('checked', false);
                    }
                }); 
              //Air Handler
              $('#chwat2').click(function() {
                    if ($('#chwat2').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ParkSpecial').show();
                        $('#chwat1').prop('checked', false);
                    } else {
                       $('#chwat1').prop('checked', false);
                    }
                }); 
              //commercial Hot Water radio button to show hidden
              $('#htwater').click(function() {
                    if ($('#htwater').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ParkSpecial').show();//Special Parking Div
                        $('#chwaterHide').hide('checked', false);
                        $('#cpackageSel').hide('checked', false);
                        $('#entireDisplay').hide('checked', false);
                        $('#comSplitRadio').hide('checked', false);
                        $('#cpackage').attr('checked', false);
                        $('#cspilt').attr('checked', false);
                        $('#cgomal').attr('checked', false);
                        $('#cmispli').attr('checked', false);
                        $('#cevpgo').attr('checked', false);
                        $('#chwater').attr('checked', false);
                        $('#steam').attr('checked', false);
                        $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                        $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type
                        $('input[name= chwater1]').prop('checked', false);//Chilled water
                     } else {
                       $('#chwaterHide').hide('checked', false);
                       $('#cpackageSel').hide('checked', false);
                       $('#entireDisplay').hide('checked', false);
                       $('#comSplitRadio').hide('checked', false);
                       $('#cpackage').attr('checked', false);
                       $('#cspilt').attr('checked', false);
                       $('#cgomal').attr('checked', false);
                       $('#cmispli').attr('checked', false);
                       $('#cevpgo').attr('checked', false);
                       $('#chwater').attr('checked', false);
                       $('#steam').attr('checked', false);
                       $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                       $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type
                       $('input[name= chwater1]').prop('checked', false);//Chilled water

                    }
                });
              //commercial steam radio button to show hidden
              $('#steam').click(function() {
                    if ($('#steam').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ParkSpecial').show();//Special Parking Div
                        $('#chwaterHide').hide('checked', false);
                        $('#cpackageSel').hide('checked', false);
                        $('#entireDisplay').hide('checked', false);
                        $('#comSplitRadio').hide('checked', false);
                        $('#cpackage').attr('checked', false);
                        $('#cspilt').attr('checked', false);
                        $('#cgomal').attr('checked', false);
                        $('#cmispli').attr('checked', false);
                        $('#cevpgo').attr('checked', false);
                        $('#chwater').attr('checked', false);
                        $('#htwater').attr('checked', false);
                        $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                        $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type
                        $('input[name= chwater1]').prop('checked', false);//Chilled water
                     } else {
                       $('#cpackage').attr('checked', false);
                       $('#cspilt').attr('checked', false);
                       $('#cgomal').attr('checked', false);
                       $('#cmispli').attr('checked', false);
                       $('#cevpgo').attr('checked', false);
                       $('#chwater').attr('checked', false);
                       $('#htwater').attr('checked', false);
                       $('#packHeatC, #packGasC, #packElectricC').prop('checked', false);//Package Heat Type
                       $('#cospiheat, #cospigasr,#cospielectric').prop('checked', false);//Commerical Heat Type
                       $('input[name= chwater1]').prop('checked', false);//Chilled water
                    }
                });
              
              //Unit Location(ground radio button)
              $('#ground').click(function() {
                    if ($('#ground').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.grounSho').hide('checked', false);//ground
                        $('.ladderSho').hide('checked', false);//roof hidden div
                        $('#roofr').attr('checked', false);//roof
                        $('#locWall').attr('checked', false);//wall
                        $('.ParkSpecial, #unitDirect, .ensureDiv').show();//Special Parking Div
                        $('#IssueDiv').show();// Schedule Page next question
                    } else {
                       $('#roofr').attr('checked', false);//roof
                       $('.ladderSho').false('checked', false);//roof hidden div
                       $('#locWall').attr('checked', false);//wall
                       $('.ParkSpecial, #unitDirect,.ensureDiv').show();//Special Parking Div
                       $('#IssueDiv').hide();// Schedule Page next question
                    }
                });
              //Unit location(roof radio button)
              $('#roofr').click(function() {
                    if ($('#roofr').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.grounSho').show(); 
                        $('.ParkSpecial,.ensureDiv').hide();
                        $('#ground').attr('checked', false);//ground
                        $('#locWall').attr('checked', false);//wall
                        $('#IssueDiv').hide();// Schedule Page next question""
                    } else {
                       $('#ground').attr('checked', false);//ground
                       $('#locWall').attr('checked', false);//wall
                    }
                });
              //Unit Location (roof radio button)
              $('#locWall').click(function() {
                    if ($('#locWall').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.grounSho').hide('checked', false);//roof hidden div
                        $('#ground').attr('checked', false);//ground
                        $('#roofr').attr('checked', false);//roof
                        $('.ParkSpecial, .ensureDiv').show();//Special Parking Div
                        $('#IssueDiv').show();// Schedule Page next question
                    } else {
                       $('#ground').attr('checked', false);//ground
                       $('#roofr').attr('checked', false);//roof
                       $('.ParkSpecial, .ensureDiv').show();//Special Parking Div
                       $('#IssueDiv').hide();// Schedule Page next question

                    }
                });

              //Unit Location(ladder)it will display hidden div with ladder sizes
              $('#supLad').click(function() {
                    if ($('#supLad').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ladderSho').show();
                        $('.ParkSpecial, .ensureDiv').hide();//Special Parking Div
                        $('#IssueDiv').hide();// Schedule Page next question""
                        $('#perRoof').attr('checked', false);
                    } else {
                       $('#perRoof').attr('checked', false);
                    }
                });
              //Unit Location(Roof Access)
              $('#perRoof').click(function() {
                    if ($('#perRoof').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ladderSho').hide();
                        $('.ParkSpecial, .ensureDiv').show();//Special Parking Div
                        $('#IssueDiv').show();// Schedule Page next question""
                        $('#supLad').attr('checked', false);
                    } else {
                       $('#supLad').attr('checked', false);
                    }
                });
              //commerical package radio button for roof radio button
              ///roof
              $('#croofr').click(function() {
                    if ($('#croofr').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.cgrounSho').show(); 
                        $('.ParkSpecial').hide();
                        $('#cground').attr('checked', false);//ground
                        $('#clocWall').attr('checked', false);//wall
                    } else {
                       $('#cground').attr('checked', false);//ground
                       $('#clocWall').attr('checked', false);//wall
                    }
                });
              //ground
              $('#cground').click(function() {
                    if ($('#cground').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.cgrounSho').hide();//hide Roof Access div
                        $('.cladderSho').hide();//hide Estimate Ladder Needed div
                        $('#croofr').attr('checked', false);//roof
                        $('#clocWall').attr('checked', false);//wall
                        $('input[name=cy0]').prop('checked',false);//uncheck radio button Estimate Ladder Needed radio button selection 16ft, 24ft, 30ft
                        $('input[name=cy20]').prop('checked',false);//uncheck radio button Estimate Ladder Needed radio button selection Permanente Roof Access and ladder
                    } else {
                       $('#croofr').attr('checked', false);//roof
                       $('#clocWall').attr('checked', false);//wall
                    }
                });
              //wall
              $('#clocWall').click(function() {
                    if ($('#clocWall').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.cgrounSho').hide();//hide Roof Access div
                        $('.cladderSho').hide();//hide Estimate Ladder Needed div
                        $('#croofr').attr('checked', false);//roof
                        $('#cground').attr('checked', false);//ground
                        $('input[name=cy0]').prop('checked',false);//uncheck radio button Estimate Ladder Needed radio button selection 16ft, 24ft, 30ft
                        $('input[name=cy20]').prop('checked',false);//uncheck radio button Estimate Ladder Needed radio button selection Permanente Roof Access and ladder
                    } else {
                       $('#croofr').attr('checked', false);//roof
                       $('#cground').attr('checked', false);//ground
                    }
                });

              //ladder
              $('#csupLad').click(function() {
                    if ($('#csupLad').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.cladderSho').show();
                        $('.ParkSpecial').hide();//Special Parking
                        $('#cperRoof').attr('checked', false);
                    } else {
                       $('#cperRoof').attr('checked', false);
                    }
                });
              //Roof question will show when ladder is click
              $('#cperRoof').click(function() {
                    if ($('#cperRoof').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.cladderSho').hide();
                        $('.ParkSpecial').show();//Special Parking
                        $('#csupLad').attr('checked', false);
                        $('input[name=cy0]').prop('checked',false);//uncheck radio button Estimate Ladder Needed radio button selection 16ft, 24ft, 30ft
                    } else {
                       $('#csupLad').attr('checked', false);
                    }
                });

              //Question:Is your heat, gas or electric? for Package radio button
              //gas
              $('#gasr').click(function() {
                    if ($('#gasr').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#elegas11r').show();
                        $(".pselPack").hide(); 
                        $('#electricr').attr('checked', false);
                        $('#gaseldr').hide();
                        $('#heatr').attr('checked', false);
                        $('#dualr').attr('checked', false);
                        $('#hydr').attr('checked', false);
                        $('#iflor').attr('checked', false);
                        $('#wood').attr('checked', false);
                    } else {
                       $('#electricr').attr('checked', false);
                       $('#gaseldr').hide();
                       $('#heatr').attr('checked', false);
                       $('#dualr').attr('checked', false);
                       $('#hydr').attr('checked', false);
                       $('#iflor').attr('checked', false);
                       $('#wood').attr('checked', false);
                       
                    }
                });
              //electric
              $('#electricr').click(function() {
                    if ($('#electricr').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#gaseldr').show();
                        $('#elegas11r').hide();
                        $('.pselPack').show();
                        $('#heatr').attr('checked', false);
                        $('#gasr').attr('checked', false);
                        $('#dualr').attr('checked', false);
                        $('#hydr').attr('checked', false);
                        $('#iflor').attr('checked', false);
                        $('#wood').attr('checked', false);
                    } else {
                       $('#elegas11r').hide();
                       $('#heatr').attr('checked', false);
                       $('#gasr').attr('checked', false);
                       $('#dualr').attr('checked', false);
                       $('#hydr').attr('checked', false);
                       $('#iflor').attr('checked', false);
                       $('#wood').attr('checked', false);
                    }
                });
              //heat
              $('#heatr').click(function() {
                    if ($('#heatr').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#gaseldr').hide();
                        $('#elegas11r').hide();
                        $('.pselPack').show();
                        $('#gasr').attr('checked', false);
                        $('#dualr').attr('checked', false);
                        $('#hydr').attr('checked', false);
                        $('#iflor').attr('checked', false);
                        $('#wood').attr('checked', false);
                    } else {
                        $('#elegas11r').hide();
                        $('#gaseldr').hide();
                        $('#gasr').attr('checked', false);
                        $('#dualr').attr('checked', false);
                        $('#hydr').attr('checked', false);
                        $('#iflor').attr('checked', false);
                        $('#wood').attr('checked', false);
                    }
                });

              //dual
              $('#dualr').click(function() {
                    if ($('#dualr').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#gaseldr').hide();
                        $('#elegas11r').hide(); 
                        $('.pselPack').show();
                        $('#gasr').attr('checked', false);
                        $('#heatr').attr('checked', false);
                        $('#hydr').attr('checked', false);
                        $('#iflor').attr('checked', false);
                        $('#wood').attr('checked', false);
                    } else {
                        $('#elegas11r').hide();
                        $('#gaseldr').hide();
                        $('#gasr').attr('checked', false);
                        $('#heatr').attr('checked', false);
                        $('#hydr').attr('checked', false);
                        $('#iflor').attr('checked', false);
                        $('#wood').attr('checked', false);
                    }
                });

              //Hydronic
              $('#hydr').click(function() {
                    if ($('#hydr').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#gaseldr').hide();
                        $('#elegas11r').hide();
                        $('.pselPack').show();
                        $('#gasr').attr('checked', false);
                        $('#heatr').attr('checked', false);
                        $('#dualr').attr('checked', false);
                        $('#iflor').attr('checked', false);
                        $('#wood').attr('checked', false);
                    } else {
                        $('#elegas11r').hide();
                        $('#gaseldr').hide();
                        $('#gasr').attr('checked', false);
                        $('#heatr').attr('checked', false);
                        $('#dualr').attr('checked', false);
                        $('#iflor').attr('checked', false);
                        $('#wood').attr('checked', false);
                    }
                });

              //In Floor Radiant
              $('#iflor').click(function() {
                    if ($('#iflor').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#gaseldr').hide();
                        $('#elegas11r').hide();
                        $('.pselPack').show();
                        $('#gasr').attr('checked', false);
                        $('#heatr').attr('checked', false);
                        $('#dualr').attr('checked', false);
                        $('#hydr').attr('checked', false);
                        $('#wood').attr('checked', false);
                    } else {
                        $('#elegas11r').hide();
                        $('#gaseldr').hide();
                        $('#gasr').attr('checked', false);
                        $('#heatr').attr('checked', false);
                        $('#dualr').attr('checked', false);
                        $('#hydr').attr('checked', false);
                        $('#wood').attr('checked', false);
                    }
                });
              //Wood
              $('#wood').click(function() {
                    if ($('#wood').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#gaseldr').hide();
                        $('#elegas11r').hide();
                        $('.pselPack').show();
                        $('#gasr').attr('checked', false);
                        $('#heatr').attr('checked', false);
                        $('#dualr').attr('checked', false);
                        $('#hydr').attr('checked', false);
                        $('#iflor').attr('checked', false);
                    } else {
                        $('#elegas11r').hide();
                        $('#gaseldr').hide();
                        $('#gasr').attr('checked', false);
                        $('#heatr').attr('checked', false);
                        $('#dualr').attr('checked', false);
                        $('#hydr').attr('checked', false);
                        $('#iflor').attr('checked', false);
                    }
                });
            //ddl for unit location  (package-- Residential)
             $('#ty10th').click(function() {
                    if ($('#ty10th').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#ty10Hide').show();
                      } else {
                        $('#ty10Hide').hide();
                    }
                });

             //Residential: Cooling
              $('#cooling').click(function() {
                    if ($('#cooling').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.cpButtons1').show();
                        //$('#cpButtons').show();
                        $('.icooling, .hvacCond').show();
                        $('.iheating').hide('checked', false);
                        $('.iheating1').hide('checked', false);
                        $('.shoConcern').text("Not Cooling");
                        $('#heating').attr('checked', false);// Heating
                        $('#heatCool').attr('checked', false);//Heat and Cool
                        $('#noise').attr('checked', false);//Noise
                        $('#smell1').attr('checked', false);//Smell
                        $('#dgo').attr('checked', false);//Detector Going Off 
                        $('#acHeating').attr('checked', false);//AC Heating 
                        $('#plumbing').attr('checked', false);//Plumbing
                        $('#electri').attr('checked', false);//Electrical
                        $('#GarDoor').attr('checked', false);//Garage Door
                        $('#pestControl').attr('checked', false);//Pest Control
                        $('#lawnCare').attr('checked', false);//Lawn Care
                        $('#poolService').attr('checked', false);//Pool Service
                    } else {
                        $('#heating').attr('checked', false);//Heating
                        $('#heatCool').attr('checked', false);//Heat and Cool
                        $('#ucpText').hide('checked', false);//Hidden Text
                        $('#noise').attr('checked', false);//Noise
                        $('#smell1').attr('checked', false);//Smell
                        $('#dgo').attr('checked', false);//Detector Going Off 
                        $('#acHeating').attr('checked', false);//AC Heating 
                        $('#plumbing').attr('checked', false);//Plumbing
                        $('#electri').attr('checked', false);//Electrical
                        $('#GarDoor').attr('checked', false);//Garage Door
                        $('#pestControl').attr('checked', false);//Pest Control
                        $('#lawnCare').attr('checked', false);//Lawn Care
                        $('#poolService').attr('checked', false);//Pool Service
                    }
                });
              //Residential: Heating
              $('#heating').click(function() {
                    if ($('#heating').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.cpButtons1').show();
                        $('#cpButtons').show();
                        $('.icooling').hide('checked', false);
                        $('.iheating, .hvacCond').show();
                        $('.iheating1').hide('checked', false);
                        $('.icooling1').hide('checked', false);
                        $('#cooling').attr('checked', false);//Cooling
                        $('#heatCool').attr('checked', false);//Heat and Cooling
                        $('#noise').attr('checked', false);//Noise
                        $('#smell1').attr('checked', false);//Smell
                        $('#dgo').attr('checked', false);//Detector Going Off
                        $('#acHeating').attr('checked', false);//AC Heating
                        $('#plumbing').attr('checked', false);//Plumbing 
                        $('#electri').attr('checked', false);//Electrical 
                        $('#GarDoor').attr('checked', false);//Garage Door
                        $('#pestControl').attr('checked', false);//Pest Control
                        $('#lawnCare').attr('checked', false);//Lawn Care
                        $('#poolService').attr('checked', false);//Pool Service
                    } else {
                        $('#cooling').attr('checked', false);//Cooling
                        $('#heatCool').attr('checked', false);//Heat and Cooling
                        $('#noise').attr('checked', false);//Noise
                        $('#smell1').attr('checked', false);//Smell
                        $('#dgo').attr('checked', false);//Detector Going Off 
                        $('#acHeating').attr('checked', false);//AC Heating 
                        $('#plumbing').attr('checked', false);//Plumbing
                        $('#electri').attr('checked', false);//Electrical
                        $('#GarDoor').attr('checked', false);//Garage Door
                        $('#pestControl').attr('checked', false);//Pest Control
                        $('#lawnCare').attr('checked', false);//Lawn Care
                        $('#poolService').attr('checked', false);//Pool Service
                    }
                });
              //Residential: Heating and Cooling
              $('#heatCool').click(function() {
                    if ($('#heatCool').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.icooling').show();
                        $('.iheating').show();
                        $('.iheating1').show();
                        $('.icooling1').show();
                        $('.cpButtons1').show();
                        $('#cpButtons').show();
                        $('#cooling').attr('checked', false).removeClass('ColorSel');//Cooling
                        $('#heating').attr('checked', false).removeClass('ColorSel');//Heat
                        $('#ucpText').hide('checked', false);//hidden Textbox
                        $('#leakWater').attr('checked', false);//Leaking Water
                        $('#noise').attr('checked', false);//Noise
                        $('#smell1').attr('checked', false);//Smell
                        $('#dgo').attr('checked', false);//Detector Going Off
                        $('#acHeating').attr('checked', false);//AC Heating 
                        $('#plumbing').attr('checked', false);//Plumbing
                        $('#electri').attr('checked', false);//Electrical 
                        $('#GarDoor').attr('checked', false);//Garage Door
                        $('#pestControl').attr('checked', false);//Pest Control
                        $('#lawnCare').attr('checked', false);//Lawn Care
                        $('#poolService').attr('checked', false);//Pool Service
                    } else {
                        $('#cooling').attr('checked', false).removeClass('ColorSel');//Cooling
                        $('#heating').attr('checked', false).removeClass('ColorSel');//Heat
                        $('#ucpText').hide('checked', false);//Hidden Textbox
                        $('#leakWater').attr('checked', false);//Leaking Water
                        $('#noise').attr('checked', false);//Noise
                        $('#smell1').attr('checked', false);//Smell
                        $('#dgo').attr('checked', false);//Detector Going Off 
                        $('#acHeating').attr('checked', false);//AC Heating 
                        $('#plumbing').attr('checked', false);//Plumbing
                        $('#electri').attr('checked', false);//Electrical
                        $('#GarDoor').attr('checked', false);//Garage Door
                        $('#pestControl').attr('checked', false);//Pest Control
                        $('#lawnCare').attr('checked', false);//Lawn Care
                        $('#poolService').attr('checked', false);//Pool Service
                    }
                });
                //Water Leak hide the question Special Parking below
                $('#leakWater').click(function() {
                    if ($('#leakWater').is(':checked')) {
                       $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.icooling, .hvacCond').hide();
                        $('.iheating').hide();
                        $('.iheating1').hide();
                        $('.icooling1').hide();
                        $('.ParkSpecial').show();
                        $('#cpButtons').hide();
                        $('#cooling').attr('checked', false);//cooling
                        $('#heatCool').attr('checked', false);//Heat and Cooling
                        $('#heating').attr('checked', false);//Heating
                    } else {
                        $('#cooling').attr('checked', false);//cooling
                        $('#heatCool').attr('checked', false);//Heat and Cooling
                        $('#heating').attr('checked', false);//Heating
                    }
                });
                //Noise hide the question Special Parking below
                $('#noise').click(function() {
                    if ($('#noise').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.icooling').hide();
                        $('.iheating').hide();
                        $('.iheating1').hide();
                        $('.icooling1').hide();
                        $('.ParkSpecial').show();
                        $('#cpButtons').hide();
                        $('#cooling').attr('checked', false);//cooling
                        $('#heatCool').attr('checked', false);//Heat and Cooling
                        $('#heating').attr('checked', false);//Heating
                    } else {
                        $('#cooling').attr('checked', false);//cooling
                        $('#heatCool').attr('checked', false);//Heat and Cooling
                        $('#heating').attr('checked', false);//Heating
                    }
                });
                //Smell hide the question Special Parking below
                $('#smell1').click(function() {
                    if ($('#smell1').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.icooling').hide();
                        $('.iheating').hide();
                        $('.iheating1').hide();
                        $('.icooling1').hide();
                        $('.ParkSpecial').show();
                        $('#cpButtons').hide();
                        $('#cooling').attr('checked', false);//cooling
                        $('#heatCool').attr('checked', false);//Heat and Cooling
                        $('#heating').attr('checked', false);//Heating
                    } else {
                        $('.icooling').hide();
                        $('.iheating').hide();
                        $('.iheating1').hide();
                        $('.icooling1').hide();
                        $('.cpButtons1').show();
                        $('#cpButtons').hide();
                        $('#cooling').attr('checked', false);//cooling
                        $('#heatCool').attr('checked', false);//Heat and Cooling
                        $('#heating').attr('checked', false);//Heating
                    }
                });//Detector Going Off hide the question Special Parking below
                $('#dgo').click(function() {
                    if ($('#dgo').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.icooling').hide();
                        $('.iheating').hide();
                        $('.iheating1').hide();
                        $('.icooling1').hide();
                        $('.ParkSpecial').show();
                        $('#cpButtons').hide();
                        $('#cooling').attr('checked', false);//cooling
                        $('#heatCool').attr('checked', false);//Heat and Cooling
                        $('#heating').attr('checked', false);//Heating
                    } else {
                        $('#cooling').attr('checked', false);//cooling
                        $('#heatCool').attr('checked', false);//Heat and Cooling
                        $('#heating').attr('checked', false);//Heating
                    }
                });
                //AC Heating hide the question Special Parking below
                $('#acHeating,#plumbing,#electri,#GarDoor,#pestControl,#lawnCare,#poolService ').click(function() {
                    if ($('#acHeating,#plumbing,#electri,#GarDoor,#pestControl,#lawnCare,#poolService').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ParkSpecial').hide();
                        $('#cpButtons').hide();
                        $('#questSpilt').hide();
                        $('#questSpilt1').hide();
                        $('#packageSel').hide();
                        $('#spiSystemSel').hide();
                        $('.icooling').hide();
                        $('.iheating').hide();
                        $('.iheating1').hide();
                        $('.icooling1').hide();
                        $('#cooling').attr('checked', false);//cooling
                        $('#heatCool').attr('checked', false);//Heat and Cooling
                        $('#heating').attr('checked', false);//Heating
                    } else {
                        $('.ParkSpecial').hide();
                        $('#questSpilt').hide();
                        $('#questSpilt').hide();
                        $('#questSpilt1').hide();
                        $('#spiSystemSel').hide();
                        $('#cooling').attr('checked', false);//cooling
                        $('#heatCool').attr('checked', false);//Heat and Cooling
                        $('#heating').attr('checked', false);//Heating
                    }
                });

            
            //(Commerical) if cooling is click it show this hidden div copCooling
            //within in the function method for the heating  attributes with auto uncheck radio
             $('#cocooling').click(function() {
                    if ($('#cocooling').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('.copCooling').show();
                        $('#cheatbut').hide();
                        $('#nceCom').hide();
                        $('.cpButtons2').show();
                        $('.cpButtons1').show();
                        $('#coheating').attr('checked', false);
                        $('#coheatCool').attr('checked', false);
                        $('input[name=cpih]').removeAttr('checked');//uncheck heating issue(Commerical)
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                    } else {
                        $('#coheating').attr('checked', false);
                        $('#coheatCool').attr('checked', false);
                        $('input[name=cpih]').removeAttr('checked');//uncheck heating issue(Commerical)
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                    }
                });
             //(Commerical) if heating is click it will hide and show heating option when click
             $('#coheating').click(function() {
                    if ($('#coheating').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('.copCooling').hide();
                        $('#cheatbut').show();
                        $('.cpButtons2').show();
                        $('.cpButtons1').show();
                        $('#cnceRooms').hide();
                        $('#cocooling').attr('checked', false);
                        $('#coheatCool').attr('checked', false);
                        $('input[name=cpic]').removeAttr('checked');//uncheck cooling(Commerical)
                        $('input[name=cpi0c]').removeAttr('checked');//uncheck not cooling(Commerical)
                    } else {
                        $('#cocooling').attr('checked', false);
                        $('#coheatCool').attr('checked', false);
                        $('input[name=cpic]').removeAttr('checked');//uncheck cooling(Commerical)
                        $('input[name=cpi0c]').removeAttr('checked');//uncheck not cooling(Commerical)
                    }
              });

        //(Commerical Heating) room not heating start
             //(Commerical) if cooling and heat is click it will hide and show heating option when click
             $('#coheatCool').click(function() {
                    if ($('#coheatCool').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('.copCooling').show();
                        $('#cheatbut').show();
                        $('.cpButtons2').show();
                        $('.cpButtons1').show();
                        $('#cocooling').attr('checked', false);
                        $('#coheating').attr('checked', false);
                    } else {
                        $('#cocooling').attr('checked', false);
                        $('#coheating').attr('checked', false);
                    }
                });
             //(Commerical) if not heating evenly is click with display room selection
              $('#cohnhe').click(function() {
                    if ($('#cohnhe').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#nceCom').show();
                        $('.cpihSelectH').hide();
                        $('.cpButtons2').show();
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        
                    } else {
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        
                    }
                });
              //(Commerical) if not heating is click it will hide the not heating evenly hidden divs
              $('#cohnh').click(function() {
                    if ($('#cohnh').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('.cpButtons2').hide();
                        $('.ctsaHeat').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                        
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                        
                    }
                });
              //(Commerical) click low heating radio button it will hide the not heating evenly hidden divs
              $('#cohloh').click(function() {
                    if ($('#cohloh').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('.ctsaHeat').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                       
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        
                    }
                });
              //(Commerical) click noise radio button it will hide the not heating evenly hidden divs
              $('#cohon').click(function() {
                    if ($('#cohon').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('.ctsaHeat').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                    }
                });
              //(Commerical) click smell radio button it will hide the not heating evenly hidden divs
              $('#cohs').click(function() {
                    if ($('#cohs').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('.ctsaHeat').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                      } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                    }
                });

              //(Commerical) click Vibration radio button  it will hide the not heating evenly hidden divs
              $('#cohv').click(function() {
                    if ($('#cohv').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('.ctsaHeat').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                    }
                });
              //(Commerical) click Tripping Beaker radio button  it will hide the not heating evenly hidden divs
              $('#cohtb').click(function() {
                    if ($('#cohtb').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('.ctsaHeat').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                    }
                });
            //(Commerical) click Freezing Up radio button  it will hide the not heating evenly hidden divs
              $('#cohfreu').click(function() {
                    if ($('#cohfreu').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('.ctsaHeat').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohwl').attr('checked', false);//water leak
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                    }
                });

            //(Commerical) click Water Leak radio button  it will hide the not heating evenly hidden divs
              $('#cohwl').click(function() {
                    if ($('#cohwl').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#nceCom').hide();
                        $('.cpihSelectH').show();
                        $('.ctsaHeat').show();
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                    } else {
                        $('#cohnhe').attr('checked', false);//not heating evenly
                        $('#cohnh').attr('checked', false);//not heating
                        $('#cohloh').attr('checked', false);//low heating
                        $('#cohon').attr('checked', false);//noise
                        $('#cohs').attr('checked', false);//smell
                        $('#cohv').attr('checked', false);//vibration
                        $('#cohtb').attr('checked', false);//tripping beaker
                        $('#cohfreu').attr('checked', false);//freezing up
                        $('input[name=rsnhe]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#rsnhName").empty();
                    }
                });
            //(Commerical Heating) room not heating end

        //(Commerical Cooling)Option to display and hide hidden div start 

            //(Commerical) if not cooling evenly is click with display room selection div
             $('#conce').click(function() {
                    if ($('#conce').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#cnceRooms').show();
                        $('#nceCom').hide();
                        $('.hideOption').hide();
                        $('#conc').attr('checked', false);//not cooling
                        $('#coloc').attr('checked', false);//low cooling
                        $('#coon').attr('checked', false);//noise
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leaked 
                    } else {
                        $('#conc').attr('checked', false);//not cooling
                        $('#coloc').attr('checked', false);//low cooling
                        $('#coon').attr('checked', false);//noise 
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leaked
                    }
                });
             //(Commerical) if not cooling is click with hide room selection div
             $('#conc').click(function() {
                    if ($('#conc').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#cnceRooms').hide();
                        $('#nceCom').hide();
                        $('.hideOption').show();
                        $('.thMessDiv').show();
                        $('#conce').attr('checked', false);//not cooling
                        $('#coloc').attr('checked', false);//low cooling
                        $('#coon').attr('checked', false);//noise
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leak
                        $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#cpiName").empty(); 
                    } else {
                        $('#conce').attr('checked', false);//not cooling
                        $('#coloc').attr('checked', false);//low cooling
                        $('#coon').attr('checked', false);//noise
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leak
                        $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#cpiName").empty(); 
                    }
                });
             //(Commerical) if Low Cooling is click with hide room selection 
             $('#coloc').click(function() {
                    if ($('#coloc').is(':checked')) {
                         $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#cnceRooms').hide();
                        $('#nceCom').hide();
                        $('.thMessDiv').show();
                        $('.hideOption').show();
                        $('#conce').attr('checked', false);//not cooling 
                        $('#conc').attr('checked', false);//not cooling evently
                        $('#coon').attr('checked', false);//noise
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leak
                        $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#cpiName").empty();
                    } else {
                        $('#conce').attr('checked', false);//not cooling
                        $('#conc').attr('checked', false);//not cooling evently
                        $('#coon').attr('checked', false);//noise
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leak
                        $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#cpiName").empty();
                    }
                });
             //(Commerical) if noise is click with hide room selection 
             $('#coon').click(function() {
                    if ($('#coon').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#cnceRooms').hide();
                        $('#nceCom').hide();
                        $('.hideOption').show()
                        $('.thMessDiv').show();;
                        $('#conce').attr('checked', false);//not cooling 
                        $('#conc').attr('checked', false);//not cooling evently
                        $('#coloc').attr('checked', false);//not cooling evently
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leak
                        $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#cpiName").empty();//span
                    } else {
                        $('#conce').attr('checked', false);//not cooling
                        $('#conc').attr('checked', false);//not cooling evently
                        $('#coloc').attr('checked', false);//not cooling evently
                        $('#cos').attr('checked', false);//smell
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leak
                        $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#cpiName").empty();//span
                    }
                });
             //(Commerical) if Smell is click with hide room selection 
             $('#cos').click(function() {
                    if ($('#cos').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#cnceRooms').hide();
                        $('#nceCom').hide();
                        $('.hideOption').show();
                        $('.thMessDiv').show();
                        $('#conce').attr('checked', false);//not cooling 
                        $('#conc').attr('checked', false);//not cooling evently
                        $('#coloc').attr('checked', false);//not cooling evently
                        $('#coon').attr('checked', false);//noise
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leak
                        $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#cpiName").empty();//span
                    } else {
                        $('#conce').attr('checked', false);//not cooling
                        $('#conc').attr('checked', false);//not cooling evently
                        $('#coloc').attr('checked', false);//not cooling evently
                        $('#coon').attr('checked', false);//noise
                        $('#cov').attr('checked', false);//Vibration
                        $('#cotb').attr('checked', false);//Tripping Beaker
                        $('#cofreu').attr('checked', false);//freezing up
                        $('#cowl').attr('checked', false);//water leak
                        $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                        $("#cpiName").empty();//span
                        
                    }
                });

                //(Commerical) if Vibration is click with hide room selection 
                 $('#cov').click(function() {
                        if ($('#cov').is(':checked')) {
                            $('label.ColorSel').removeClass('ColorSel'); 
                            $(this).parent().addClass('ColorSel');
                            $('#cnceRooms').hide();
                            $('#nceCom').hide();
                            $('.hideOption').show();
                            $('.thMessDiv').show();
                            $('#conce').attr('checked', false);//not cooling 
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cotb').attr('checked', false);//Tripping Beaker
                            $('#cofreu').attr('checked', false);//freezing up
                            $('#cowl').attr('checked', false);//water leak
                            $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                            $("#cpiName").empty();//span
                        } else {
                            $('#conce').attr('checked', false);//not cooling
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cotb').attr('checked', false);//Tripping Beaker
                            $('#cofreu').attr('checked', false);//freezing up
                            $('#cowl').attr('checked', false);//water leak
                            $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                            $("#cpiName").empty();//span
                        }
                    });
                
                //(Commerical) if Tripping Beaker is click with hide room selection 
                 $('#cotb').click(function() {
                        if ($('#cotb').is(':checked')) {
                            $('label.ColorSel').removeClass('ColorSel'); 
                            $(this).parent().addClass('ColorSel');
                            $('#cnceRooms').hide();
                            $('#nceCom').hide();
                            $('.hideOption').show();
                            $('.thMessDiv').show();
                            $('#conce').attr('checked', false);//not cooling 
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cov').attr('checked', false);//Vibration
                            $('#cofreu').attr('checked', false);//freezing up
                            $('#cowl').attr('checked', false);//water leak
                            $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                            $("#cpiName").empty();//span
                        } else {
                            $('#conce').attr('checked', false);//not cooling
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cov').attr('checked', false);//Vibration
                            $('#cofreu').attr('checked', false);//freezing up
                            $('#cowl').attr('checked', false);//water leak
                            $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                            $("#cpiName").empty();//span 
                        }
                    });

                //(Commerical) if freezing up is click with hide room selection 
                 $('#cofreu').click(function() {
                        if ($('#cofreu').is(':checked')) {
                             $('label.ColorSel').removeClass('ColorSel'); 
                            $(this).parent().addClass('ColorSel'); 
                            $('#cnceRooms').hide();
                            $('#nceCom').hide();
                            $('.hideOption').show();
                            $('.thMessDiv').show();
                            $('#conce').attr('checked', false);//not cooling 
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cov').attr('checked', false);//Vibration
                            $('#cotb').attr('checked', false);//Tripping Beaker
                            $('#cowl').attr('checked', false);//water leak
                            $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                            $("#cpiName").empty();//span
                        } else {
                            $('#conce').attr('checked', false);//not cooling
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cov').attr('checked', false);//Vibration
                            $('#cotb').attr('checked', false);//Tripping Beaker
                            $('#cowl').attr('checked', false);//water leak
                            $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                            $("#cpiName").empty();//span
                        }
                    });
                //(Commerical) if water leak is click with hide room selection 
                 $('#cowl').click(function() {
                        if ($('#cowl').is(':checked')) {
                             $('label.ColorSel').removeClass('ColorSel'); 
                             $(this).parent().addClass('ColorSel'); 
                            $('#cnceRooms').hide();
                            $('#nceCom').hide();
                            $('.hideOption').show();
                            $('.thMessDiv').show();
                            $('#conce').attr('checked', false);//not cooling 
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cov').attr('checked', false);//Vibration
                            $('#cotb').attr('checked', false);//Tripping Beaker
                            $('#cofreu').attr('checked', false);//freezing up
                            $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                            $("#cpiName").empty();//span
                        } else {
                            $('#conce').attr('checked', false);//not cooling
                            $('#conc').attr('checked', false);//not cooling evently
                            $('#coloc').attr('checked', false);//not cooling evently
                            $('#coon').attr('checked', false);//noise
                            $('#cos').attr('checked', false);//smell
                            $('#cov').attr('checked', false);//Vibration
                            $('#cotb').attr('checked', false);//Tripping Beaker
                            $('#cofreu').attr('checked', false);//freezing up
                            $('input[name=cpi0c]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                            $("#cpiName").empty();//span
                        }
                    });

                //(Commerical Cooling)Option to display and hide hidden div end


                //(Residental Cooling)Option to display and hide hidden div start
                    //not cooling evening
                      $('#nce').click(function() {
                            if ($('#nce').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.icooling1').show();
                                $('.UnitServes').hide();
                                // $('#hideSelectoin').hide();
                                $('#hideNotes').hide();
                                $('.zonSy').hide();
                                // $('#cResIOther').hide();
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                            } else {
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                            }
                      });
                //not cooling radio button if click it will hidden (.icooling1)
                    $('#nc').click(function() {
                            if ($('#nc').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
                                $('.UnitServes').hide();
                                $('.zonSy').show();
//                                $('#zonSy1').show();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();
                                
                            }
                        });
                        // for question"What temperature do you have on the thermostat ? if is check No"
                        $('#zoNo').click(function() {
                            if ($('#zoNo').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                               $('.zonSye').show();
                               //$('.UnitServes').hide();
                               $('#entireDisplay').hide();
                               $('#zonSy').hide('checked', false);
                               $('#zoYes').attr('checked', false);//yes  
                               $("#therm, #therm1").val("");
                            } else {
                               $('#zoYes').attr('checked', false);//yes 
                               $("#therm, #therm1").val("");
                            }
                        });
                        // for question"What temperature do you have on the thermostat ? if is check yes"
                        $('#zoYes').click(function() {
                            if ($('#zoYes').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.zonSye').hide();
                                $('#zonSy').show();
                                $('#zoNo').attr('checked', false);//no 
//                                $('.UnitServes').show();
                                $('#entireDisplay').show();
                                $("#setT, #setA").val("");
                            } else {
                                $('#zoNo').attr('checked', false);//no 
                                //$('.UnitServes').hide();
                                $('#entireDisplay').hide();
                                $("#setT, #setA").val("");
                            }
                        });
              
                    //Not Cooling Well radio button if click it will hidden (.icooling1)
                    $('#lc').click(function() {
                            if ($('#lc').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
//                                $('#zonSy1').hide();
                                $('.zonSy').show();
                                $("#setT, #setA").val("");
                                $('.UnitServes').hide();
                              // $('#cResIOther').hide();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty(); 
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();
                                
                            }
                        });
                    //noise radio button if click it will hidden (.icooling1)
                    $('#nio').click(function() {
                            if ($('#nio').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.zonSye').hide();
                                $('.icooling1').hide();
                                $('#cpButtons1').show();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
                                $('#entireDisplay').show();
//                                $(".UnitServes").show();
//                                $('#zonSy1').show();
                                //$('.zonSy').hide();
                                $("#setT, #setA").val("");
                                //$('.UnitServes').show();
                                $('.zonSy, .zonSy').hide();
                                // $('#cResIOther').hide();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();
                                
                            }
                        });
                    //smell radio button if click it will hidden (.icooling1)
                    $('#smell').click(function() {
                            if ($('#smell').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
                                $('#entireDisplay').show();
//                                $(".UnitServes").show();
                                $('.zonSye, .zonSy').hide();
//                                $('#zonSy1').show();
                                $('.zonSy').hide();
                                $("#setT, #setA").val("");
                                $('.zonSy').hide('checked', false);
                                //$('.UnitServes').show();
                                // $('#cResIOther').hide();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#vibe').attr('checked', false);//noise
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();
                            }
                        });

                    //vibration radio button if click it will hidden (.icooling1)
                    $('#vibe').click(function() {
                            if ($('#vibe').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
                                $("#setT, #setA").val("");
                                $(".UnitServes").show();
                                $('.zonSye, .zonSy').hide();
                                $('#entireDisplay').show();
                                //$('.UnitServes').show();
//                                $('#zonSy1').show();
			        $('.zonSy').hide();
                                // $('#cResIOther').hide();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();
                                
                            }
                        });
                    //tripping breaker radio button if click it will hidden (.icooling1)
                    $('#tb').click(function() {
                            if ($('#tb').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
                                $('#hideNotes').show();
				$("#setT, #setA").val("");
                                $(".UnitServes").show();
                                $('.zonSye, .zonSy').hide();
                                $('#entireDisplay').show();
                                //$('.UnitServes').show();
//                                $('#zonSy1').show();
				$('.zonSy').hide();
                                // $('#cResIOther').hide();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//vibration
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//vibration
                                $('#freu').attr('checked', false);//freezing up
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();
                                
                            }
                        });
                    //freezing up radio button if click it will hidden (.icooling1)
                    $('#freu').click(function() {
                            if ($('#freu').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
			        $("#setT, #setA").val("");
                                $(".UnitServes").show();
                                $('.zonSye, .zonSy').hide();
                                $('#entireDisplay').show();
                               
                                //$('.UnitServes').show();
//                                $('#zonSy1').show();
			        $('.zonSy').hide();
                                // $('#cResIOther').hide();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//vibration
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();
                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not coolingnoh
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//vibration
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#watleak').attr('checked', false);//tripping breaker
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();
                            }
                        });
                    //water leak radio button if click it will hidden (.icooling1)
                    $('#watleak').click(function() {
                            if ($('#watleak').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.icooling1').hide();
                                $('#hideSelectoin').show();
                                $('#hideNotes').show();
				$("#setT, #setA").val("");
                                $(".UnitServes").show();
                                $('.zonSye, .zonSy').hide();
                                //$('.UnitServes').show();
//                                $('#zonSy1').show();
				$('.zonSy').hide();
                                // $('#cResIOther').hide();
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smellnoh
                                $('#vibe').attr('checked', false);//vibration
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();

                            } else {
                                $('#nce').attr('checked', false);//not cooling evenly
                                $('#nc').attr('checked', false);//not cooling
                                $('#lc').attr('checked', false);//low cooling
                                $('#nio').attr('checked', false);//noise
                                $('#smell').attr('checked', false);//smell
                                $('#vibe').attr('checked', false);//vibration
                                $('#tb').attr('checked', false);//tripping breaker
                                $('#freu').attr('checked', false);//freezing up
                                $('input[name=cpi1]').removeAttr('checked');//uncheck not cooling evenly uncheckbox(Residential)
                                $("#moorCooling").empty();

                            }
                        });
                //(Residental Cooling)Option to display and hide hidden div end

                //(Residental Heating)Option to display and hide hidden div start
                    //not heating evenly
                    $('#nhe').click(function() {
                            if ($('#nhe').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.iheating1').show();
                                $('#rheatissue').hide();
                                $('#rheatissue1').hide();
                                $('#IssDDL').hide();
                                $('.UnitServes').show();
                                $('#nh').attr('checked', false);//not heating
                                $('#lh').attr('checked', false);//low heat
                                $('#noh').attr('checked', false);//noise
                                $('#sh').attr('checked', false);//smell
                                $('#vh').attr('checked', false);//vibration
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#wlh').attr('checked', false);//water leak
                            } else {
                                 $('#nh').attr('checked', false);//not heating
                                 $('#lh').attr('checked', false);//low heat
                                 $('#noh').attr('checked', false);//noise
                                 $('#sh').attr('checked', false);//smell
                                 $('#vh').attr('checked', false);//vibration
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('#wlh').attr('checked', false);//water leak
                                        
                            }
                        });
                    //not heating(residental)
                    $('#nh').click(function() {
                            if ($('#nh').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#IssDDL').show();
                                //$('.UnitServes').hide();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#lh').attr('checked', false);//low heat
                                $('#noh').attr('checked', false);//noise
                                $('#sh').attr('checked', false);//smell
                                $('#vh').attr('checked', false);//vibration
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#wlh').attr('checked', false);//water leak
                                $('#fzh').attr('checked', false);//Freezing Up
                                $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                $("#heatEName").empty();
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#lh').attr('checked', false);//low heat
                                 $('#noh').attr('checked', false);//noise
                                 $('#sh').attr('checked', false);//smell
                                 $('#vh').attr('checked', false);//vibration
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('#wlh').attr('checked', false);//water leak
                                 $('#fzh').attr('checked', false);//Freezing Up
                                 $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                 $("#heatEName").empty();
                            }
                    });
                    //low heating heating(residental)
                    $('#lh').click(function() {
                            if ($('#lh').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#IssDDL').show();
                               // $('.UnitServes').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#nh').attr('checked', false);//not heating 
                                $('#noh').attr('checked', false);//noise
                                $('#sh').attr('checked', false);//smell
                                $('#vh').attr('checked', false);//vibration
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#wlh').attr('checked', false);//water leak
                                $('#fzh').attr('checked', false);//Freezing Up
                                $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                $("#heatEName").empty();
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#nh').attr('checked', false);//not heating 
                                 $('#noh').attr('checked', false);//noise
                                 $('#sh').attr('checked', false);//smell
                                 $('#vh').attr('checked', false);//vibration
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('#wlh').attr('checked', false);//water leak
                                 $('#fzh').attr('checked', false);//Freezing Up 
                                 $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                 $("#heatEName").empty();
                            }
                    });
                    // noise-- heating(residental)
                    $('#noh').click(function() {
                            if ($('#noh').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#IssDDL').show();
                                //$('.UnitServes').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#nh').attr('checked', false);//not heating 
                                $('#lh').attr('checked', false);//low heat
                                $('#sh').attr('checked', false);//smell
                                $('#vh').attr('checked', false);//vibration
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#wlh').attr('checked', false);//water leak
                                $('#fzh').attr('checked', false);//Freezing Up
                                $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                $("#heatEName").empty();
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#nh').attr('checked', false);//not heating
                                 $('#lh').attr('checked', false);//low heat
                                 $('#sh').attr('checked', false);//smell
                                 $('#vh').attr('checked', false);//vibration
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('#wlh').attr('checked', false);//water leak
                                 $('#fzh').attr('checked', false);//Freezing Up
                                 $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                $("#heatEName").empty();
                            }
                    });
                    // smell-- heating(residental)
                    $('#sh').click(function() {
                            if ($('#sh').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#IssDDL').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#nh').attr('checked', false);//not heating 
                                $('#lh').attr('checked', false);//low heat
                                $('#noh').attr('checked', false);//noise
                                $('#vh').attr('checked', false);//vibration
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#wlh').attr('checked', false);//water leak
                                $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                $("#heatEName").empty();
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#nh').attr('checked', false);//not heating
                                 $('#lh').attr('checked', false);//low heat
                                 $('#noh').attr('checked', false);//noise
                                 $('#vh').attr('checked', false);//vibration
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('#wlh').attr('checked', false);//water leak
                                 $('#fzh').attr('checked', false);//Freezing Up
                                 $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                $("#heatEName").empty();
                            }
                    });
                    // vibration-- heating(residental)
                    $('#vh').click(function() {
                            if ($('#vh').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#IssDDL').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#nh').attr('checked', false);//not heating 
                                $('#lh').attr('checked', false);//low heat
                                $('#noh').attr('checked', false);//noise
                                $('#sh').attr('checked', false);//smell
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#wlh').attr('checked', false);//water leak
                                $('#fzh').attr('checked', false);//Freezing Up
                                $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                $("#heatEName").empty();
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#nh').attr('checked', false);//not heating
                                 $('#lh').attr('checked', false);//low heat
                                 $('#noh').attr('checked', false);//noise
                                 $('#sh').attr('checked', false);//smell
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('#wlh').attr('checked', false);//water leak
                                 $('#fzh').attr('checked', false);//Freezing Up
                                 $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                 $("#heatEName").empty();
                            }
                    });
                    // tripping breaker-- heating(residental)
                    $('#cotbh').click(function() {
                            if ($('#cotbh').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#IssDDL').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#nh').attr('checked', false);//not heating 
                                $('#lh').attr('checked', false);//low heat
                                $('#noh').attr('checked', false);//noise
                                $('#sh').attr('checked', false);//smell
                                $('#vh').attr('checked', false);//vibration
                                $('#wlh').attr('checked', false);//water leak
                                $('#fzh').attr('checked', false);//Freezing Up
                                $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                $("#heatEName").empty();
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#nh').attr('checked', false);//not heating
                                 $('#lh').attr('checked', false);//low heat
                                 $('#noh').attr('checked', false);//noise
                                 $('#sh').attr('checked', false);//smell
                                 $('#vh').attr('checked', false);//vibration
                                 $('#wlh').attr('checked', false);//water leak
                                 $('#fzh').attr('checked', false);//Freezing Up
                                 $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                 $("#heatEName").empty();
                            }
                    });
                    // water leak-- heating(residental)
                    $('#wlh').click(function() {
                            if ($('#wlh').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#IssDDL').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#nh').attr('checked', false);//not heating 
                                $('#lh').attr('checked', false);//low heat
                                $('#noh').attr('checked', false);//noise
                                $('#sh').attr('checked', false);//smell
                                $('#vh').attr('checked', false);//vibration
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#fzh').attr('checked', false);//Freezing Up
                                $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                $("#heatEName").empty()
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#nh').attr('checked', false);//not heating
                                 $('#lh').attr('checked', false);//low heat
                                 $('#noh').attr('checked', false);//noise
                                 $('#sh').attr('checked', false);//smell
                                 $('#vh').attr('checked', false);//vibration
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('#fzh').attr('checked', false);//Freezing Up
                                 $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                 $("#heatEName").empty()
                            }
                    });
                    // Freezing Up-- heating(residental)
                    $('#fzh').click(function() {
                            if ($('#fzh').is(':checked')) {
                                $('label.ColorSel').removeClass('ColorSel'); 
                                $(this).parent().addClass('ColorSel');
                                $('.iheating1').hide();
                                $('#rheatissue').show();
                                $('#rheatissue1').show();
                                $('#IssDDL').show();
                                $('#nhe').attr('checked', false);//not heating evenly
                                $('#nh').attr('checked', false);//not heating 
                                $('#lh').attr('checked', false);//low heat
                                $('#noh').attr('checked', false);//noise
                                $('#sh').attr('checked', false);//smell
                                $('#vh').attr('checked', false);//vibration
                                $('#cotbh').attr('checked', false);//tripping breaker
                                $('#wlh').attr('checked', false);//Water Leak
                                $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                $("#heatEName").empty()
                            } else {
                                 $('#nhe').attr('checked', false);//not heating evenly
                                 $('#nh').attr('checked', false);//not heating
                                 $('#lh').attr('checked', false);//low heat
                                 $('#noh').attr('checked', false);//noise
                                 $('#sh').attr('checked', false);//smell
                                 $('#vh').attr('checked', false);//vibration
                                 $('#cotbh').attr('checked', false);//tripping breaker
                                 $('input[name=cpip]').removeAttr('checked');//uncheck not heating evenging checkbox(Residential)
                                 $("#heatEName").empty();
                            }
                    });

                  //(Residental Heating)Option to display and hide hidden div end'
                  // $('#mp1').click(function() {
                  //       $('#bzip, #bbuiling, #bstreet').val('');//clear textbox value;
                  //  });


                  //(Residental) Question "Number of Systems in Home" radio button option 1, 2 , 3 , 4(start)
//                  $('#rsysem1, #rsysem2, #rsysem3, #rsysem4').click(function() {
//                        $('#unitTyD').show();
//                        $('#agenum').val('');
//                        $('#addsystems').hide();
//                   });

                    $('input[name=nosy]').click(function() {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#unitTyD').show();
                        $('#agenum').val('');
                        $('#addsystems').hide();
                   });


                   //(Business) Question "Number of Systems in Home" radio button option 1, 2 , 3 , 4(start)
                  $('input[name= nosy1]').click(function() {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.coIYS').show();
                        $('#agenum1').val(''); 
                        $('#addsystems1').hide();
                   });

                  //(Residental) Question "Number of Systems in Home" radio button option 1, 2 , 3 , 4 (end)

                //(Residental)Unit Served radio button to show and hide div cfFloor
                //if entire radio is click will hide  id = "entireDisplay"
                $('#centire').click(function() {
                    if ($('#centire').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#entireDisplay').hide();
                        $('#unitTyD').show();
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                        $('input[name=nosy]').removeAttr('checked');//uncheck Number of System radio button options(Residential)
                    } else {
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    }
                });

                //first floor
                $('#cfFloor').click(function() {
                    if ($('#cfFloor').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#entireDisplay').show();
                        $('#unitTyD').show();
                        $('#centire').attr('checked', false);//Entire House
                        $('#csFloor').attr('checked', false);//second floor
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                        
                    } else {
                        $('#centire').attr('checked', false);//Entire House
                        $('#csFloor').attr('checked', false);//second floor
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                        
                    }
                });
                //second floor(residential)
                $('#csFloor').click(function() {
                    if ($('#csFloor').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
//                        $('#entireDisplay').show();
                        $('#unitTyD').show();
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    } else {
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    }
                });
                //third floor(residential)
                $('#ctFloor').click(function() {
                    if ($('#ctFloor').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
//                        $('#entireDisplay').show();
                        $('#unitTyD').show();
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    } else {
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    }
                });
                //bedroom(residential)
                $('#cbedroom').click(function() {
                    if ($('#cbedroom').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#entireDisplay').show();
                        //$('#unitTyD').show();
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor residential
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    } else {
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor residential
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cLivingRom').attr('checked', false);//third floor residential
                    }
                });
                //living Room(residential)
                $('#cLivingRom').click(function() {
                    if ($('#cLivingRom').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel');
                        $('#entireDisplay').show();
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor residential
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                    } else {
                        $('#centire').attr('checked', false);//Entire House
                        $('#cfFloor').attr('checked', false);//first floor residential
                        $('#csFloor').attr('checked', false);//second floor residential
                        $('#ctFloor').attr('checked', false);//third floor residential
                        $('#cbedroom').attr('checked', false);//bedroom residential
                    }
                });

                //Question: "Number of System in Home"(start)
                //1
                // $('#rsysem1').click(function() {
                //     if ($('#rsysem1').is(':checked')) {
                //         $('#rsysem2').attr('checked', false);//2
                //         $('#rsysem3').attr('checked', false);//3
                //         $('#rsysem4').attr('checked', false);//4
                //     } else {
                //        $('#rsysem2').attr('checked', false);//2
                //         $('#rsysem3').attr('checked', false);//3
                //         $('#rsysem4').attr('checked', false);//4
                //     }
                // });

                //2
                // $('#rsysem2').click(function() {
                //     if ($('#rsysem2').is(':checked')) {
                //         $('#rsysem1').attr('checked', false);//1
                //         $('#rsysem3').attr('checked', false);//3
                //         $('#rsysem4').attr('checked', false);//4
                //     } else {
                //        $('#rsysem1').attr('checked', false);//1
                //         $('#rsysem3').attr('checked', false);//3
                //         $('#rsysem4').attr('checked', false);//4
                //     }
                // });

                //3
                // $('#rsysem3').click(function() {
                //     if ($('#rsysem3').is(':checked')) {
                //         $('#rsysem1').attr('checked', false);//1
                //         $('#rsysem2').attr('checked', false);//2
                //         $('#rsysem4').attr('checked', false);//4
                //     } else {
                //        $('#rsysem1').attr('checked', false);//1
                //         $('#rsysem2').attr('checked', false);//2
                //         $('#rsysem4').attr('checked', false);//4
                //     }
                // });
                //4
                // $('#rsysem4').click(function() {
                //     if ($('#rsysem4').is(':checked')) {
                //         $('#rsysem1').attr('checked', false);//1
                //         $('#rsysem2').attr('checked', false);//2
                //         $('#rsysem3').attr('checked', false);//3
                //     } else {
                //         $('#rsysem1').attr('checked', false);//1
                //         $('#rsysem2').attr('checked', false);//2
                //         $('#rsysem3').attr('checked', false);//3
                //     }
                // });
                //Question: "Number of System in Home"(end)
                
                $('#hpyes').click(function() {
                    if ($('#hpyes').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#yeshp').show();
                        $('#nohp').hide();
                        $('#hpno').attr('checked', false);//no
                    } else {
                        $('#hpno').attr('checked', false);//no
                        
                    }
                });
                $('#hpno').click(function() {
                    if ($('#hpno').is(':checked')) {
                         $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#yeshp').hide();
                        $('#nohp').show();
                        $('#hpyes').attr('checked', false);//yes
                    } else {
                        $('#hpyes').attr('checked', false);//yes
                        
                    }
                });
                //gas radio button for spilt system if click will display hidden div guestion
                $('#gasrspi').click(function() {
                    if ($('#gasrspi').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#gasSpBut').show();
                        $('#splitHeatbutton').hide();
                        $('#heatrspi').attr('checked', false);//heat spilt system
                        $('#electricrspi').attr('checked', false);//electric  spilt system
                        $('#dual').attr('checked', false);//electric and heating spilt system
                    } else {
                        $('#heatrspi').attr('checked', false);//heat spilt system
                        $('#electricrspi').attr('checked', false);//electric  spilt system
                        $('#dual').attr('checked', false);//electric and heating spilt system
                        
                    }
                });
                //Dual radio button for spilt system if click will display hidden div guestion
                $('#dual').click(function() {
                    if ($('#dual').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#gasSpBut').show();
                        $('#splitHeatbutton').hide();
                        $('#heatrspi').attr('checked', false);//heat spilt system
                        $('#electricrspi').attr('checked', false);//electric  spilt system
                        $('#gasrspi').attr('checked', false);//electric and heating spilt system
                    } else {
                        $('#heatrspi').attr('checked', false);//heat spilt system
                        $('#electricrspi').attr('checked', false);//electric  spilt system
                        $('#gasrspi').attr('checked', false);//electric and heating spilt system
                    }
                });
                //Residential Split System electric and heat radio button for spilt system if click will display hidden div guestion
                $('#heatrspi').click(function() {
                    if ($('#heatrspi').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#splitHeatbutton').show();
                        $('#gasSpBut').hide();
                        $('#gasrspi').attr('checked', false);//electric and heating spilt system
                        $('#electricrspi').attr('checked', false);//electric spilt system
                        $('#dual').attr('checked', false);//electric and heating spilt system
                    } else {
                        $('#gasrspi').attr('checked', false);//electric and heating spilt system
                        $('#electricrspi').attr('checked', false);//electric  spilt system
                        $('#dual').attr('checked', false);//electric and heating spilt system
                    }
                });
                $('#electricrspi').click(function() {
                    if ($('#electricrspi').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#splitHeatbutton').show();
                        $('#gasSpBut').hide();
                        $('#gasrspi').attr('checked', false);//gas spilt system
                        $('#heatrspi').attr('checked', false);//heat spilt system
                        $('#dual').attr('checked', false);//electric and heating spilt system
                    } else {
                        $('#gasrspi').attr('checked', false);//gas spilt system
                        $('#heatrspi').attr('checked', false);//heat spilt system
                        $('#dual').attr('checked', false);//electric and heating spilt system
                    }
                });
                //electric and heat radio button for spilt system if click will display hidden div guestion
                $('#heleyes').click(function() {
                    if ($('#heleyes').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#yeshep').show();
                        $('#nohep').hide();
                        $('#heleno').attr('checked', false);//electric and heating spilt system
                        $("#htou,#htou1").val('');//clear textbox for System Age textbox 
                        $("#hine,#hine1").val('');//clear textbox for System Age textbox
                    } else {
                        $('#heleno').attr('checked', false);//electric and heating spilt system
                        $("#htou,#htou1").val('');//clear textbox for System Age textbox
                        $("#hine,#hine1").val('');//clear textbox for System Age textbox
                    }
                });
                //no to show question 
                $('#heleno').click(function() {
                    if ($('#heleno').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#yeshep').hide();
                        $('#nohep').show();
                        $('#heleyes').attr('checked', false);//electric and heating spilt system
                    } else {
                        $('#heleyes').attr('checked', false);//electric and heating spilt system
                    }
                });

                //roof access for split system
                $('#roofilt').click(function() {
                    if ($('#roofilt').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#outdSplit').show();
                        $('#grouilt,#wallilt, #wallidk').attr('checked', false);//ground
                        // $('#wallilt').attr('checked', false);//wall
                        // $('#wallidk').attr('checked', false);//I don't Know
                    } else {
                        $('#grouilt,#wallilt, #wallidk').attr('checked', false);//ground
                        //  $('#grouilt').attr('checked', false);//ground
                        //  $('#wallilt').attr('checked', false);// wall 
                        //$('#wallidk').attr('checked', false);//I don't Know
                    }
                });
                //ground access for split system
                $('#grouilt').click(function() {
                    if ($('#grouilt').is(':checked')) { 
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#outdSplit').hide('checked',false);
                        $('#rooHeight').hide();
                        $('.iduDiv').show();
                        $('#roofilt').attr('checked', false);//roof
                        $('#wallilt').attr('checked', false);//wall
                        $('#wallidk').attr('checked', false);//I don't Know
                    } else {
                        $('#roofilt').attr('checked', false);//roof
                        $('#wallilt').attr('checked', false);//wall
                        $('#wallidk').attr('checked', false);//I don't Know
                    }
                });
                //Wall access for split system
                $('#wallilt').click(function() {
                    if ($('#wallilt').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#outdSplit').hide('checked',false);
                        $('#rooHeight').show();
                        $('#roofilt').attr('checked', false);//roof
                        $('#grouilt').attr('checked', false);//ground
                        $('#wallidk').attr('checked', false);//I don't Know
                    } else {
                        $('#roofilt').attr('checked', false);//roof
                        $('#grouilt').attr('checked', false);//ground
                        $('#wallidk').attr('checked', false);//I don't Know
                    }
                });
                //I don't know for split system
                $('#wallidk').click(function() {
                    if ($('#wallidk').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#outdSplit').hide('checked',false);
                        $('#rooHeight').hide('checked',false);
                        $('#roofilt').attr('checked', false);//roof
                        $('#grouilt').attr('checked', false);//ground
                        $('#wallilt').attr('checked', false);//wall
                    } else {
                        $('#roofilt').attr('checked', false);//roof
                        $('#grouilt').attr('checked', false);//ground
                        $('#wallilt').attr('checked', false);//wall
                    }
                });
                //ladder access size for split system
                $('#lSpilt').click(function() {
                    if ($('#lSpilt').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#AccessLad').show();
                        $('#prfSpilt').attr('checked', false);//Permit Roof Access 
                        $('#rooHeight').hide('checked', false);
                    } else {
                        $('#prfSpilt').attr('checked', false);
                    }
                });

                //ladder access size for split system
                $('#prfSpilt').click(function() {
                    if ($('#prfSpilt').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#AccessLad').hide('checked', false);
                        $('#lSpilt').attr('checked', false);
                        $('#rooHeight').show();
                    } else {
                        $('#lSpilt').attr('checked', false);
                        $('#AccessLad').hide('checked', false);
                    }
                });

                //Indoor radio button start for split unit
                //attic radio button display hidden div
                $('#iduatti').click(function() {
                    if ($('#iduatti').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('input[name= ggh]').prop('checked', false);//uncheck garage radio button selection (Residential) 
                        $('#inatticDiv').show();
                        $('.ParkSpecial,.ensureDiv').hide();
                        $('#garageHide').hide('checked', false);
                        $('#iduclos').attr('checked', false);//closet
                        $('#idugara').attr('checked', false);//garage
                        $('#idubase').attr('checked', false);//basement
                        $('#iducs').attr('checked', false);//crawl space
                        $('#Idki').attr('checked', false);//I don't know
                    } else {
                        $('#iduclos').attr('checked', false);//closet
                        $('#idugara').attr('checked', false);//garage
                        $('#idubase').attr('checked', false);//basement
                        $('#iducs').attr('checked', false);//crawl space
                        $('#Idki').attr('checked', false);//I don't know
                    }
                });
                //Attic Radio button Selection
                $('#ticvia,#ticpds,#ticsw,#ticdoo').click(function() {
                    if ($('#ticvia,#ticpds,#ticsw,#ticdoo').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ParkSpecial, .ensureDiv').show();
                        $('#iduclos,#idubase,#iducs').prop('checked', false);//uncheck Closet, Basement, & Crawl Space radio button selection (Residential) 
                    } else {
                        $('.ParkSpecial').show();
                        $('#iduclos,#idubase,#iducs').prop('checked', false);//uncheck Closet, Basement, & Crawl Space radio button selection (Residential) 
                    }
                });
                //closet
                $('#iduclos').click(function() {
                    if ($('#iduclos').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('input[name= ggh]').prop('checked', false);//uncheck garage radio button selection (Residential) 
                        $('input[name= atul]').prop('checked', false);//uncheck attic radio button selection (Residential) 
                        $('#siz1').prop('checked', false);
                        $('.ParkSpecial, .ensureDiv').show();
                        $('#inatticDiv').hide('checked', false);
                        $('#garageHide').hide('checked', false);
                        $('#iduatti').attr('checked', false);//attic
                        $('#idugara').attr('checked', false);//garage
                        $('#idubase').attr('checked', false);//basement
                        $('#iducs').attr('checked', false);//crawl space
                        $('#Idki').attr('checked', false);//I don't know
                    } else {
                        $('#inatticDiv').hide('checked', false);
                        $('#garageHide').hide('checked', false);
                        $('#iduatti').attr('checked', false);//attic
                        $('#idugara').attr('checked', false);//garage
                        $('#idubase').attr('checked', false);//basement
                        $('#iducs').attr('checked', false);//crawl space
                        $('#Idki').attr('checked', false);//I don't know
                    }
                });
                //Garage
                $('#idugara').click(function() {
                    if ($('#idugara').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#garageHide').show();
                        $('.ParkSpecial, .ensureDiv').hide();
                        $('input[name= atul]').prop('checked', false);//uncheck attic radio button selection (Residential) 
                        $('#inatticDiv').hide('checked', false);
                        $('#iduatti').attr('checked', false);//attic
                        $('#iduclos').attr('checked', false);//closet
                        $('#idubase').attr('checked', false);//basement
                        $('#iducs').attr('checked', false);//crawl space
                        $('#Idki').attr('checked', false);//I don't know
                    } else {
                        $('#garageHide').hide('checked', false);
                        $('#inatticDiv').hide('checked', false);
                        $('#iduatti').attr('checked', false);//attic
                        $('#iduclos').attr('checked', false);//closet
                        $('#idubase').attr('checked', false);//basement
                        $('#iducs').attr('checked', false);//crawl space
                        $('#Idki').attr('checked', false);//I don't know
                    }
                });

                //Garage  Radio button Selection
                $('#slrs1,#slrs2').click(function() {
                    if ($('#slrs1,#slrs2').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ParkSpecial').show();
                        $('.ensureDiv').show();
                        $('#iduclos,#idubase,#iducs').prop('checked', false);//uncheck Closet, Basement, & Crawl Space radio button selection (Residential) 
                    } else {
                       $('#iduclos,#idubase,#iducs').prop('checked', false);//uncheck Closet, Basement, & Crawl Space radio button selection (Residential) 
                    }
                });
                //Basement
                $('#idubase').click(function() {
                    if ($('#idubase').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('input[name= ggh]').prop('checked', false);//uncheck garage radio button selection (Residential) 
                        $('input[name= atul]').prop('checked', false);//uncheck attic radio button selection (Residential) 
                        $('.ParkSpecial, .ensureDiv').show();
                        $('#inatticDiv').hide('checked', false);
                        $('#garageHide').hide('checked', false);
                        $('#iduatti').attr('checked', false);//attic
                        $('#iduclos').attr('checked', false);//closet
                        $('#idugara').attr('checked', false);//garage
                        $('#iducs').attr('checked', false);//crawl space
                        $('#Idki').attr('checked', false);//I don't know
                    } else {
                        $('#inatticDiv').hide('checked', false);
                        $('#garageHide').hide('checked', false);
                        $('#iduatti').attr('checked', false);//attic
                        $('#iduclos').attr('checked', false);//closet
                        $('#idugara').attr('checked', false);//garage
                        $('#iducs').attr('checked', false);//crawl space
                        $('#Idki').attr('checked', false);//I don't know
                    }
                });
                //Crawl Space
                $('#iducs').click(function() {
                    if ($('#iducs').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.ParkSpecial, .ensureDiv').show();
                        $('input[name= ggh]').prop('checked', false);//uncheck garage radio button selection (Residential) 
                        $('input[name= atul]').prop('checked', false);//uncheck attic radio button selection (Residential) 
                        $('#inatticDiv').hide('checked', false);
                        $('#garageHide').hide('checked', false);
                        $('#iduatti').attr('checked', false);//attic
                        $('#iduclos').attr('checked', false);//closet
                        $('#idugara').attr('checked', false);//garage
                        $('#idubase').attr('checked', false);//basement
                    } else {
                        $('#inatticDiv').hide('checked', false);
                        $('#garageHide').hide('checked', false);
                        $('#iduatti').attr('checked', false);//attic
                        $('#iduclos').attr('checked', false);//closet
                        $('#idugara').attr('checked', false);//garage
                        $('#idubase').attr('checked', false);//basement
                    }
                });
                //I don't know
                $('#Idki').click(function() {
                    if ($('#Idki').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#inatticDiv').hide('checked', false);
                        $('#garageHide').hide('checked', false);
                        $('#iduatti').attr('checked', false);//attic
                        $('#iduclos').attr('checked', false);//closet
                        $('#idugara').attr('checked', false);//garage
                        $('#idubase').attr('checked', false);//basement
                        $('#iducs').attr('checked', false);//crawl space
                    } else {
                        $('#inatticDiv').hide('checked', false);
                        $('#garageHide').hide('checked', false);
                        $('#iduatti').attr('checked', false);//attic
                        $('#iduclos').attr('checked', false);//closet
                        $('#idugara').attr('checked', false);//garage
                        $('#idubase').attr('checked', false);//basement
                        $('#iducs').attr('checked', false);//crawl space
                    }
                });

                 //Indoor radio button start for end unit
                //commerical spilt system Heat
                $('#cospiheat').click(function() {
                    if ($('#cospiheat').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#spihhe').hide();
                        $('#spnpC').hide();
                        $('.cospigasr1').hide();
                        $('#heelComOption').show();
                        $('#cospigasr').attr('checked', false);//gas(Commerical)
                        $('#cospielectric').attr('checked', false);//electric(Commerical)
                    } else {
                        $('#cospigasr').attr('checked', false);//gas(Commerical)
                        $('#cospielectric').attr('checked', false);//electric(Commerical)
                    }
                });
                //commerical spilt system Gas
                $('#cospigasr').click(function() {
                    if ($('#cospigasr').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#spihhe').show();
                        $('.cospigasr1').hide();
                        $('#spheeleCom').hide();
                        $('#heelComOption').hide();
                        $('#cospiheat').attr('checked', false);//Heat (Commerical)
                        $('#cospielectric').attr('checked', false);//electric(Commerical)
                    } else {
                        $('#cospiheat').attr('checked', false);//Heat (Commerical)
                        $('#cospielectric').attr('checked', false);//electric(Commerical)
                    }
                });

                //commerical spilt system electric
                $('#cospielectric').click(function() {
                    if ($('#cospielectric').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#spihhe').hide(); 
                        $('#spnpC').hide();
                        $('#heelComOption').show();
                        $('.cospigasr1').hide();
                        $('#cospiheat').attr('checked', false);//Heat (Commerical)
                        $('#cospigasr').attr('checked', false);//electric(Commerical)
                    } else {
                        $('#cospiheat').attr('checked', false);//Heat (Commerical)
                        $('#cospigasr').attr('checked', false);//electric(Commerical)
                    }
                });
                //commerical spilt system Gas
                //Natural and Propane
                $('#cospropane, #cosnatural').click(function() {
                    if ($('#cospropane, #cosnatural').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                       $('.cospigasr1').show();
                    } else {
                        $('.cospigasr1').hide();
                    }
                });

                //commerical spilt system Roof
                $('#spiroofrcp').click(function() {
                    if ($('#spiroofrcp').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#cospiacro').show();
                        $('#spigroundcp').attr('checked', false);
                        $('#spilocWallcp').attr('checked', false);
                    } else {
                        $('#spigroundcp').attr('checked', false);
                        $('#spilocWallcp').attr('checked', false);
                    }
                });
                //commerical spilt system ground
                $('#spigroundcp').click(function() {
                    if ($('#spigroundcp').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#cospiacro').hide();
                        $('#spiroofrcp').attr('checked', false);//roof
                        $('#spilocWallcp').attr('checked', false);//wall
                    } else {
                        $('#spiroofrcp').attr('checked', false);//roof
                        $('#spilocWallcp').attr('checked', false);//wall
                    }
                });
                //commerical spilt system wall
                $('#spilocWallcp').click(function() {
                    if ($('#spilocWallcp').is(':checked')) {
                         $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#cospiacro').hide();
                        $('#spiroofrcp').attr('checked', false);//roof
                        $('#spigroundcp').attr('checked', false);//ground
                    } else {
                        $('#spiroofrcp').attr('checked', false);//roof
                        $('#spigroundcp').attr('checked', false);//ground
                    }
                });
                //commerical Roof ladder
                $('#cspisupLad').click(function() {
                    if ($('#cspisupLad').is(':checked')) {
                        $('#spiLadder').show();
                        $('#cspiperRoo').attr('checked', false);//Permanete roof
                    } else {
                        $('#cspiperRoo').attr('checked', false);//Permanete roof
                    }
                });
                //commerical Roof ladder
                $('#cspiperRoo').click(function() {
                    if ($('#cspiperRoo').is(':checked')) {
                        $('#spiLadder').hide();
                        $('#cspisupLad').attr('checked', false);//Ladder Roof
                    } else {
                        $('#cspisupLad').attr('checked', false);//Ladder Roof
                    }
                });
                //commerical "Question:Is indoor and outdoor unit approximate same age"
                $('#noComsp').click(function() {
                    if ($('#noComsp').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#spnoC').show();
                        $('#spyesC').hide();
                        $('#yesComsp').attr('checked', false);//yes
                    } else {
                        $('#yesComsp').attr('checked', false);//yes
                    }
                });
                //commerical "Question:Is indoor and outdoor unit approximate same age"
                $('#yesComsp').click(function() {
                    if ($('#yesComsp').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#spnoC').hide();
                        $('#spyesC').show();
                        $('#noComsp').attr('checked', false);//yes
                    } else {
                        $('#noComsp').attr('checked', false);//yes
                    }
                });
                $('#yesCHEsp').click(function() {
                    if ($('#yesCHEsp').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#CHEyessp').show();
                        $('#spheeleCom').hide();
                        $('#noCHEsp').attr('checked', false);//no
                    } else {
                        $('#noCHEsp').attr('checked', false);//no
                    }
                });
                $('#noCHEsp').click(function() {
                    if ($('#noCHEsp').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#CHEyessp').hide();
                        $('#spheeleCom').show();
                        $('#yesCHEsp').attr('checked', false);
                    } else {
                        $('#yesCHEsp').attr('checked', false);
                    }
                });
                //commerical heat roof  spilt union
                $('#spiroofheel').click(function() {
                    if ($('#spiroofheel').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#roHeel').show();
                        $('.i10Messdiv').hide();//hide Indoor Unit Location
                        $('#spigroundheel').attr('checked', false);//ground
                        $('#spilocWallheel').attr('checked', false);//wall
                    } else {
                        $('#spigroundheel').attr('checked', false);//ground
                        $('#spilocWallheel').attr('checked', false);//wall
                    }
                });
                //commerical heat ground  spilt union
                $('#spigroundheel').click(function() {
                    if ($('#spigroundheel').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#roHeel').hide();
                        $('#suHeel').hide();
                        $('.i10Messdiv').show();//hide Indoor Unit Location
                        $('#spiroofheel').attr('checked', false);//roof
                        $('#spilocWallheel').attr('checked', false);//wall
                        $('#heelpiperRoof').prop('checked', false);//disable roof hidden div Permit Roof Access
                        $('#heelspisupLad').prop('checked', false);//disable roof hidden div Ladder
                        $('#siz1').prop('checked', false);//ladder size 16ft
                        $('#siz2').prop('checked', false);//ladder size 24ft
                        $('#siz3').prop('checked', false);//ladder size 30ft
                    } else {
                        $('#spiroofheel').attr('checked', false);//roof
                        $('#spilocWallheel').attr('checked', false);//wall
                        $('#heelpiperRoof').prop('checked', false);//disable roof hidden div Permit Roof Access
                        $('#heelspisupLad').prop('checked', false);//disable roof hidden div Ladder
                        $('#siz1').prop('checked', false);//ladder size 16ft
                        $('#siz2').prop('checked', false);//ladder size 24ft
                        $('#siz3').prop('checked', false);//ladder size 30ft
                    }
                });
                //commerical heat wall  spilt union
                $('#spilocWallheel').click(function() {
                    if ($('#spilocWallheel').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#roHeel').hide();
                        $('#suHeel').hide();
                        $('.i10Messdiv').show();//hide Indoor Unit Location
                        $('#spiroofheel').attr('checked', false);//roof
                        $('#spigroundheel').attr('checked', false);//ground
                        $('#heelpiperRoof').prop('checked', false);//disable roof hidden div Permit Roof Access
                        $('#heelspisupLad').prop('checked', false);//disable roof hidden div Ladder
                        $('#siz1').prop('checked', false);//ladder size 16ft
                        $('#siz2').prop('checked', false);//ladder size 24ft
                        $('#siz3').prop('checked', false);//ladder size 30ft
                    } else {
                        $('#spiroofheel').attr('checked', false);//roof
                        $('#spigroundheel').attr('checked', false);//ground
                        $('#heelpiperRoof').prop('checked', false);//disable roof hidden div Permit Roof Access
                        $('#heelspisupLad').prop('checked', false);//disable roof hidden div Ladder
                        $('#siz1').prop('checked', false);//ladder size 16ft
                        $('#siz2').prop('checked', false);//ladder size 24ft
                        $('#siz3').prop('checked', false);//ladder size 30ft
                    }
                });
                //commerical ladder
                $('#heelspisupLad').click(function() {
                    if ($('#heelspisupLad').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#suHeel').show();
                        $('.i10Messdiv').hide();//hide Indoor Unit Location
                        $('#heelpiperRoof').attr('checked', false);
                    } else {
                       $('#heelpiperRoof').attr('checked', false);
                    }
                });
                //commerical Permit Roof Access
                $('#heelpiperRoof').click(function() {
                    if ($('#heelpiperRoof').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#suHeel').hide();
                        $('.i10Messdiv').show();//hide Indoor Unit Location
                        $('#heelspisupLad').attr('checked', false);
                        $('#siz1').prop('checked', false);//ladder size 16ft
                        $('#siz2').prop('checked', false);//ladder size 24ft
                        $('#siz3').prop('checked', false);//ladder size 30ft
                    } else {
                       $('#heelspisupLad').attr('checked', false);
                       $('#siz1').prop('checked', false);//ladder size 16ft
                       $('#siz2').prop('checked', false);//ladder size 24ft
                       $('#siz3').prop('checked', false);//ladder size 30ft
                    }
                });
                //commerical:
                $("#sizeDDL").click(function(){
                     $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.i10Messdiv').show();//hide Indoor Unit Location
                        //$('input[name=size]').prop('checked', false);// unchecked ladder size 
                        $('#siz1').prop('checked', false);//ladder size 16ft
                        $('#siz2').prop('checked', false);//ladder size 24ft
                        $('#siz3').prop('checked', false);//ladder size 30ft
                });

                //spilt system unit location list 
                //attic
                $('#inlAttic').click(function() {
                    if ($('#inlAttic').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $(".ParkSpecial").hide();
                        $('#Atticinl').show();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').hide();
                        $('#entireDisplay1').hide();//show Special Parking hidden div
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                       $('#inlCloset').attr('checked', false);//closet
                       $('#inlAbove').attr('checked', false);//above suspended Ceiling
                       $('#inlGarage').attr('checked', false);//Garage
                       $('#inlBasement').attr('checked', false);//basement
                       $('#inlCrawl').attr('checked', false);//Crawel Space
                       $('#inlWare').attr('checked', false);//warehouse
                       $('#inlExpose').attr('checked', false);//exposed
                       $('#inlMroom').attr('checked', false);//Mechancial Roomv
                    }
                });
                //closet
                $('#inlCloset').click(function() {
                    if ($('#inlCloset').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('.ParkSpecial').show();//show Special Parking
                        $('input[name= attic]').prop('checked', false);//uncheck Attic radio button selection
                        $('input[name= csh]').prop('checked', false);//uncheck Attic radio button selection
                        //$('#entireDisplay1').show();//show Special Parking hidden div
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                       $('#inlAttic').attr('checked', false);//attic
                       $('#inlAbove').attr('checked', false);//above suspended Ceiling
                       $('#inlGarage').attr('checked', false);//Garage
                       $('#inlBasement').attr('checked', false);//basement
                       $('#inlCrawl').attr('checked', false);//Crawel Space
                       $('#inlWare').attr('checked', false);//warehouse
                       $('#inlExpose').attr('checked', false);//exposed
                       $('#inlMroom').attr('checked', false);//Mechancial Room
                    }
                });
                 //above Suspended Ceiling
                $('#inlAbove').click(function() {
                    if ($('#inlAbove').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#Atticinl').hide();
                        $('#Aboveinl').show();
                        $('#i10AtAb').hide();
                        //$('#entireDisplay1').hide();//show Special Parking hidden div
                        $('input[name= attic]').prop('checked', false);//uncheck Attic radio button selection
                        $('input[name= csh]').prop('checked', false);//uncheck Attic radio button selection
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    }
                });
                //Garage
                $('#inlGarage').click(function() {
                    if ($('#inlGarage').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('.ParkSpecial').show();//show Special Parking
                        //$('#entireDisplay1').show();//show Special Parking hidden div
                        $('input[name= attic]').prop('checked', false);//uncheck Attic radio button selection
                        $('input[name= csh]').prop('checked', false);//uncheck Attic radio button selection
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    }
                });
                //Basement
                $('#inlBasement').click(function() {
                    if ($('#inlBasement').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('.ParkSpecial').show();//show Special Parking
                        $('input[name= attic]').prop('checked', false);//uncheck Attic radio button selection
                        $('input[name= csh]').prop('checked', false);//uncheck Attic radio button selection
                        //$('#entireDisplay1').show();//show Special Parking hidden div
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room

                    }
                });
                //Crawel Space
                $('#inlCrawl').click(function() {
                    if ($('#inlCrawl').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('.ParkSpecial').show();//show Special Parking
                        $('input[name= attic]').prop('checked', false);//uncheck Attic radio button selection
                        $('input[name= csh]').prop('checked', false);//uncheck Attic radio button selection
                        //$('#entireDisplay1').show();//show Special Parking hidden div
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room

                    }
                });
                //Warehouse
                $('#inlWare').click(function() {
                    if ($('#inlWare').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('.ParkSpecial').show();//show Special Parking
                        $('input[name= attic]').prop('checked', false);//uncheck Attic radio button selection
                        $('input[name= csh]').prop('checked', false);//uncheck Attic radio button selection
                        //$('#entireDisplay1').show();//show Special Parking hidden div
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlExpose').attr('checked', false);//exposed
                        $('#inlMroom').attr('checked', false);//Mechancial Room

                    }
                });
                //Exposed
                $('#inlExpose').click(function() {
                    if ($('#inlExpose').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('.ParkSpecial').show();//show Special Parking
                        $('input[name= attic]').prop('checked', false);//uncheck Attic radio button selection
                        $('input[name= csh]').prop('checked', false);//uncheck Attic radio button selection
                        //$('#entireDisplay1').show();//show Special Parking hidden div
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlMroom').attr('checked', false);//Mechancial Room
                    }
                });

                //Mechanical Room
                $('#inlMroom').click(function() {
                    if ($('#inlMroom').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#Atticinl').hide();
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('.ParkSpecial').show();//show Special Parking
                        $('input[name= attic]').prop('checked', false);//uncheck Attic radio button selection
                        $('input[name= csh]').prop('checked', false);//uncheck Attic radio button selection
                        //$('#entireDisplay1').show();//show Special Parking hidden div
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed
                    } else {
                        $('#inlAttic').attr('checked', false);//attic
                        $('#inlCloset').attr('checked', false);//closet
                        $('#inlAbove').attr('checked', false);//above suspended Ceiling
                        $('#inlGarage').attr('checked', false);//Garage
                        $('#inlBasement').attr('checked', false);//basement
                        $('#inlCrawl').attr('checked', false);//Crawel Space
                        $('#inlWare').attr('checked', false);//warehouse
                        $('#inlExpose').attr('checked', false);//exposed

                    }
                });

                //attic split System radio button selection Access Via, Pull Down Stair Case,Scuttle Hole, Door
                $('#atti1, #atti2, #atti3, #atti4').click(function() {
                  //var cshText = document.getElementById("cshText").value;//textbox
                    if ($('#atti1, #atti2, #atti3, #atti4').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#Aboveinl').hide();
                        $('#i10AtAb').show();
                        $('.ParkSpecial').show();//show Special Parking
                        $('#atticText').val('');
                        //$('#entireDisplay1').show();//show Special Parking hidden div
                        $('select[name=atticDDl] option[value=0]').prop('selected', 'selected');
                    } else {
                        $('select[name=atticDDl] option[value=0]').prop('selected', 'selected');

                    }
                });
                //attic split System dropdown list
                $('#atticDDl').click(function() {
                    $('#Aboveinl').hide();
                    $('#atticText').val('');
                    //$('#entireDisplay1').show();//show Special Parking hidden div
                    $('input[name=attic]').removeAttr('checked');// unchecked ladder size 
                });  

                

                //Ceiling Estimate Height radio button selection 8,10,12,14 feet
                $('#csh1, #csh2, #csh3, #csh4').click(function() {
                    if ($('#csh1, #csh2, #csh3, #csh4').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#Atticinl').hide();
                        $('#i10AtAb').show();
                        $('#cshText').val('');
                        $('.ParkSpecial').show();//show Special Parking
                        $('#entireDisplay1').show();//show Special Parking hidden div
                        $('select[name=cshDDl] option[value=0]').prop('selected', 'selected');
                    } else {
                        $('select[name=cshDDl] option[value=0]').prop('selected', 'selected');

                    }
                });
                //Ceiling Estimate Height dropdown list
                $('#cshDDl').click(function() {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
                    $('#Atticinl').hide();
                    $('#cshText').val('');
                    $('#entireDisplay1').show();//show Special Parking hidden div
                    $('input[name=csh]').removeAttr('checked');// unchecked ladder size 
                });
                

                //refer to function showRadio1 this will display the radio value of the radio is checked
                $( ":checkbox" ).click(showRadio1 );
                $( ".heatTempR" ).click(showRadio1 );
                $( "select" ).change( showRadio );
                
                //not heating evenly
                // $('#heatOther').click(function() {
                //     if ($('#heatOther').is(':checked')) {
                //         $('#OtherHeat').show();
                //     } else {
                //         $('#OtherHeat').hide();
                //     }
                // });
                //Unit Concern(Residential)other ddl to show hidden div
                // $('#coolIRes').click(function() {
                //     if ($('#coolIRes').is(':checked')) {
                //         $('#cResIOther').show();
                //     } else {
                //         $('#cResIOther').hide();
                //     }
                // });

                //click on either business, industrial, educational, and religious
                //other ddl selection it will display hide div
                $('#AddComp').click(function() {
                    if ($('#AddComp').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#compAd').show();
                        $('cNone').attr('checked', false);
                    } else {
                        $('cNone').attr('checked', false);
                    }
                });
                //none for company to hide other div
                $('#cNone').click(function() {
                    if ($('#cNone').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#compAd').hide('checked', false);
                        $('#AddComp').attr('checked', false);
                    } else {
                        $('#compAd').hide('checked', false);
                        $('#AddComp').attr('checked', false);
                    }
                });
                //Ladder: other ddl 
                $('#otLadder').click(function() {
                    if ($('#otLadder').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#ladAdditional').show();
                       } else {
                        $('#ladAdditional').hide();
                    }
                });
                //Ladder Heating Issue Residential: ddl other selection
                //will show hidden div to add additional Issues to list
                $('#hOtherIss').click(function() {
                    if ($('#hOtherIss').is(':checked')) {
                        $('#IssOther').show();
                       } else {
                        $('#IssOther').hide();
                    }
                });
                

                //Estimate Ceiling Height(Residential)
                //will show hidden div to add additional hidden div
                $('#estOther').click(function() {
                    if ($('#estOther').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#atticDiv').show();
                       } else {
                        $('#atticDiv').hide();
                    }
                });
                //split system (heat pump)Ladder size ddl 
                $('#ELNOth').click(function() {
                    if ($('#ELNOth').is(':checked')) {
                        $('#oeln').show();
                       } else {
                        $('#oeln').hide();
                    }
                });
                //warranty other to show hidden div
                $('#wsOther').click(function() {
                    if ($('#wsOther').is(':checked')) {
                        $('#wsdOther').show();
                       } else {
                        $('#wsdOther').hide();
                    }
                });
                //building Type other to show hidden div
                $('#builtOther').click(function() {
                    if ($('#builtOther').is(':checked')) {
                        $('#builtDiv').show();
                       } else {
                        $('#builtDiv').hide();
                    }
                });

            //commerical Other Unit Conern/ Problem:Cooling
            $('#cpicOther').click(function() {
                    if ($('#cpicOther').is(':checked')) {
                        $('#cpicHidden').show();
                       } else {
                        $('#cpicHidden').hide();
                    }
                });
            //commerical Other Unit Conern/ Problem:Not Cooling Evenly
            $('#rneList').click(function() {
                    if ($('#rneList').is(':checked')) {
                        $('#cpiHidden').show();
                       } else {
                        $('#cpiHidden').hide();
                    }
                });
            //commerical Other Unit Conern/ Problem:Heating Issues
            $('#cpihOther').click(function() {
                    if ($('#cpihOther').is(':checked')) {
                        $('#cpihHidden').show();
                       } else {
                        $('#cpihHidden').hide();
                    }
                });
             //commerical Other Unit Conern/ Problem:Room Not Heating Issues
            $('#rsnheOther').click(function() {
                    if ($('#rsnheOther').is(':checked')) {
                        $('#rsnheHidden').show();
                       } else {
                        $('#rsnheHidden').hide();
                    }
                });
             //commerical Other Unit Conern/ Problem:Room Not Heating Issues(Office)
            $('#coOffice').click(function() {
                    if ($('#coOffice').is(':checked')) {
                        $('#OfficeHidden').show();
                       } else {
                        $('#OfficeHidden').hide();
                    }
                });
            //commerical Other Unit Conern/ Problem:Room Not Heating Issues(Office Other) 
            $('#offOther').click(function() {
                    if ($('#offOther').is(':checked')) {
                        $('#OtherOffice').show();
                       } else {
                        $('#OtherOffice').hide();
                    }
                });
            //commerical Package heat, gas or Electric Start
            //gas
            $('#packGasC').click(function() {
                    if ($('#packGasC').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#packGasHidden').show();
                        $('#packHeatC').attr('checked', false);
                        $('#packElectricC').attr('checked', false);
                       } else {
                        $('#packHeatC').attr('checked', false);
                        $('#packElectricC').attr('checked', false);
                    }
            });
            //Heat
            $('#packElectricC').click(function() {
                    if ($('#packElectricC').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#packGasHidden').hide();
                        $('#packGasC').attr('checked', false);
                        $('#packHeatC').attr('checked', false);
                       } else {
                        $('#packGasC').attr('checked', false);
                        $('#packHeatC').attr('checked', false);
                    }
            });
            //Electric
            $('#packHeatC').click(function() {
                    if ($('#packHeatC').is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('#packGasHidden').hide();
                        $('#packGasC').attr('checked', false);
                        $('#packElectricC').attr('checked', false);
                       } else {
                        $('#packGasC').attr('checked', false);
                        $('#packElectricC').attr('checked', false);
                    }
            });

            //commerical Package heat, gas or Electric End

             $('#cy0Other').click(function() {
                    if ($('#cy0Other').is(':checked')) {
                        $('#cy0Hidden').show();
                       } else {
                       $('#cy0Hidden').hide();
                    }
            });

            //Commerical spilt ladder show hidden div for other
            $('#sizeOther').click(function() {
                if ($('#sizeOther').is(':checked')) {
                    $('#sizeHidden').show();
                   } else {
                   $('#sizeHidden').hide();
                }
            });
            //Commerical spilt attic show hidden div for other
            $('#atticOther').click(function() {
                if ($('#atticOther').is(':checked')) {
                    $('#atticHidden').show();
                   } else {
                   $('#atticHidden').hide();
                }
            });
            //Commerical spilt attic Indoor Unit Location other show hidden div 
            $('#i10other').click(function() {
                if ($('#i10other').is(':checked')) {
                    $('#i10Hidden').show();
                   } else {
                   $('#i10Hidden').hide();
                }
            });
            //Commerical spilt Ceiling Height other show hidden div 
            $('#cshOther').click(function() {
                if ($('#cshOther').is(':checked')) {
                    $('#cshHidden').show();
                   } else {
                   $('#cshHidden').hide();
                }
            });

            // other Question for "Is your System"
            $('#utOther').click(function() {
                    if ($('#utOther').is(':checked')) {
                        $('#utHidden').show();
                    } else {
                        $('#utHidden').hide();
                    }
                });
            //other for question "Unit Serves commerical"
            $('#usOther').click(function() {
                    if ($('#usOther').is(':checked')) {
                        $('#usHidden').show();
                    } else {
                        $('#usHidden').hide();
                    }
                });

            // book radio button hiddden: Question: access (start)
            //yes
            $('#acYes').click(function() {
                if ($('#acYes').is(':checked')) {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
                    $('#accessHidden').show();
                    $('#accNotes').show();
                    $('.sppyn').hide();//hide question "Special Parking:"
                    $('#acNO').attr('checked', false);
                } else {
                    $('#acNO').attr('checked', false);
                }
            });
            //no
            $('#acNO').click(function() {
                if ($('#acNO').is(':checked')) {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
                    $('#accNotes').hide('checked', false); 
                    $('.sppyn').show();//show question "Special Parking:"
                    $('#accessHidden').hide('checked', false);
                    $('#acYes').attr('checked', false);
                    $("#ahGate").prop('checked', false);//gate
                    $("#ahGuard").prop('checked', false);//guard 
                    $("#ahRegular").prop('checked', false);//regular
                    $("#gateCode").hide(); //gatehidden div
                    $("#shackEntry").hide();//guard shack
                    $("#gshcb").prop('checked', false);//call better
                    $("#gshtm").prop('checked', false);//Text Before 
                    $('textarea').val(''); 
                } else {
                    $('#accNotes').hide('checked', false);
                    $('#accessHidden').hide('checked', false);
                    $('#acYes').attr('checked', false);
                    $("#ahGate").prop('checked', false);//gate
                    $("#gateCode").hide(); //gatehidden div
                    $("#ahRegular").prop('checked', false);//regular
                    $("#shackEntry").hide();//guard shack
                    $("#ahGuard").prop('checked', false);//guard 
                    $("#gshcb").prop('checked', false);//call better
                    $("#gshtm").prop('checked', false);//Text Before 
                    $('textarea').val(''); 
                }
            });
            //access entry (end)
            //Question:"Gate Access" gate entry
            $('#ahGate').click(function() {
                if ($('#ahGate').is(':checked')) {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
                    $('#gateCode').show();
                    $('#shackEntry,#gsrDiv1, #gsrGSD, #gsrHMN').hide();
                    $('#ahGuard').attr('checked', false);
                    $('#ahRegular').attr('checked', false);
                    $("#gshcb").prop('checked', false);//call better
                    $("#gshtm").prop('checked', false);//Text Before
                } else {
                    $('#ahGuard').attr('checked', false);
                    $('#ahRegular').attr('checked', false);
                    $("#gshcb").prop('checked', false);//call better
                    $("#gshtm").prop('checked', false);//Text Before
                }
            });

            //Question:"Gate Access" guard Entry
            $('#ahGuard').click(function() {
                if ($('#ahGuard').is(':checked')) {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
                    $('#shackEntry').show();
                    $('#gateCode').hide();
                    $('#ahGate').attr('checked', false);
                    $('#ahRegular').attr('checked', false);  
                    $('#gateText').val('');
                } else {
                    $('#ahGate').attr('checked', false);
                    $('#ahRegular').attr('checked', false);
                    $('#gateText').val('');
                }
            });
           
           //Question:"Gate Access" regular Entry
            $('#ahRegular').click(function() {
                if ($('#ahRegular').is(':checked')) {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
                    $('#shackEntry, #gsrDiv1, #gsrGSD, #gsrHMN').hide();
                    $('#gateCode').hide();
                    $('.sppyn').show();//show question "Special Parking:"
                    $('#ahGate').attr('checked', false);
                    $('#ahGuard').attr('checked', false);
                    $("#gshcb").prop('checked', false);//call better
                    $("#gshtm").prop('checked', false);//Text Before
                    $('#gateText').val('');
                } else {
                    $('#ahGate').attr('checked', false);
                    $('#ahGuard').attr('checked', false);
                    $("#gshcb").prop('checked', false);//call better
                    $("#gshtm").prop('checked', false);//Text Before
                    $('#gateText').val('');
                }
            });
            
            //Commerical radio button for Text Message to hide Call Before hidden div
            $('#gshtm').click(function() {
                if ($('#gshtm').is(':checked')) {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
                    $('#gsrDiv1, #gsrGSD, #gsrHMN').hide();//hide the div for  Call Before hidden div
                    $('#gateText, #hmText').val('');
                } else {
                    $('#gsrDiv1, #gsrGSD, #gsrHMN').hide();//hide the div for  Call Before hidden div
                    $('#gateText, #hmText').val('');
                }
            });
            

            
            //Question:"Animals" yes
            $('#anYes').click(function() {
                if ($('#anYes').is(':checked')) {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
                    $('#animalsDiv').show();
                    $('.callMdiv').hide();
                    $('#anNo').attr('checked', false);
                } else {
                    $('#anNo').attr('checked', false);
                }
            });

            //Question:"Animals" no
            $('#anNo').click(function() {
                if ($('#anNo').is(':checked')) {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
                    $('#animalsDiv').hide();
                    $('.callMdiv').show();
                    $('#anYes').attr('checked', false);
                    $("#anDog").prop('checked', false);//Dog
                    $("#anCat").prop('checked', false);//Cat
                } else {
                    $('#anYes').attr('checked', false);
                }
            });


            //Question:"Animal(s)choice " other"
            $('#anOther').click(function() {
              var tx = document.getElementById('animalOther').value;
               if ($('#anOther').is(':checked')) {
                    $('.callMdiv').hide();
                    $('#animalOther').show();
                } else {
                     $('#animalOther').hide();
                     $('.callMdiv').hide();
                }
            });


            //Question:"Animal(s)choice " No Animals"
            $('#anDog, #anCat').click(function() {
                if ($('#anDog, #anCat').is(':checked')) {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
                    $('.callMdiv').show();
                   // $("#anNone").prop('checked', false);//No Animals
                } else{
                  $('.callMdiv').hide();
                }
            });
            //Question:"Animal(s)choice " No Animals"
            $('#anNone').click(function() {
                if ($('#anNone').is(':checked')) {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
                    $('.callMdiv').show();
                    $("#anDog").prop('checked', false);//Dog
                    $("#anCat").prop('checked', false);//Cat
                    $("#anOther").prop('checked', false);//Other
                    $('#animalOther').hide();//textbox
                    $('#animalOther').val('');
                } else{
                  $('.callMdiv').hide();
                }
            });

            //Question:"Outdoor Unit Serve (Residential) " other"
            // $('#outdOther').click(function() {
            //     if ($('#outdOther').is(':checked')) {
            //         $('#outdHidden').show();
            //     } else {
            //          $('#outdHidden').hide();
            //     }
            // });
            //Question:"Estimate Building Story radio button (Residential) " other"
            $('#storyOt').click(function() {
                if ($('#storyOt').is(':checked')) {
                    $('#storyText').show();
                } else {
                     $('#storyText').hide();
                }
            });

            //Question:"Outdoor Unit Locatio(Residential-Split) " other"
            $('#filtOthe').click(function() {
                if ($('#filtOthe').is(':checked')) {
                    $('#filtHidden').show();
                } else {
                     $('#filtHidden').hide();
                }
            });
            //Question:"Heat Type(Residential-Package) " other"
            $('#phtOthr').click(function() {
                if ($('#phtOthr').is(':checked')) {
                    $('.phtShow').show();
                } else {
                     $('.phtShow').hide();
                }
            });
            //Question:"Special Parking to show notes if yes is checked"
            $('#py').click(function() {
                if ($('#py').is(':checked')) {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
                    $('#spNotes').show();
                    $('.cccDiv').show(); //show in hidden "Will you be using a company check or credit card for payment of services with"
                    $('#pn').attr('checked', false); 
                } else {
                    $('#pn').attr('checked', false);
                }
            });
			
	    //Question:"Special Parking to show notes if yes is checked"a
            //$('#py').click(function() {
                //if ($('#py').is(':checked')) {
                    //$('#spNotes').show();
                   // $('.offerOption').show();
                    //$('#pn').attr('checked', false);
                //} else {
                    //$('#pn').attr('checked', false);
               // }
            //});

            //Question:"Special Parking to show notes if no is checked"
            $('#pn').click(function() {
                if ($('#pn').is(':checked')) {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
                    $('#spNotes').hide('checked', false);
                    $('#py').attr('checked', false);
                    $('textarea').val('');
                    //$('.offerOption').show();
                    $('.cccDiv').show();//show in hidden "Will you be using a company check or credit card for payment of services with"
                } else {
                     $('#spNotes').hide('checked', false);
                     $('#py').attr('checked', false);
                     $('textarea').val('');
                     //$('.offerOption').hide();
                }
            });

            //for note (book radio button Techician Notes)
            $('#wordcount3').text('1024 characters left');
            $('#messpost3').keyup(function () {
                var max = 1024;
                var len = $(this).val().length;
                if (len >= max) {
                    $('#wordcount3').text(' you have reached the limit');
                } else {
                    var ch = max - len;
                    $('#wordcount3').text(ch + ' characters left');
                }
            });

            //Question: "Are you the building owner?"
            //yes
            $('#buyes').click(function () {
              if ($('#buyes').is(':checked')) {
                  $('#noBuild, .mailService').hide();//hide hidden div for Property Information
                  $('.mailBusiness').show();//show next question "Is your mailing and service address the same"
                  $('#buno').attr('checked', false);//no
              } else {
                   $('#buno').attr('checked', false);//no
              }
            });
            //no
            $('#buno').click(function () {
              if ($('#buno').is(':checked')) {
                  $('#noBuild').show();//show hidden div for Property Information
                  $('.mailService, .mailBusiness').hide();//hide next question "Is your mailing and service address the same"
                  $('#buyes').attr('checked', false);//yes
              } else {
                   $('#buyes').attr('checked', false);//yes
              }
            });

            // Owner Occupied Radio button
                $('#owOccup').click(function() {
                    if ($("#owOccup").is(':checked')) {
                      $('label.ColorSel').removeClass('ColorSel'); 
                      $(this).parent().addClass('ColorSel'); 
                      $('.occupiedDiv').show();
                      $('#fnBusin, #lnBusin,#phBusin,#phBusin1').val('');
                      $('#busLease').attr('checked', false);//Leased
                    } else {
                       $('.occupiedDiv').show();
                       $('#busLease').attr('checked', false);//Leased
                    }
                });
                // Lease Radio button
                $('#busLease').click(function() {
                    if ($("#busLease").is(':checked')) {
                        $('label.ColorSel').removeClass('ColorSel'); 
                        $(this).parent().addClass('ColorSel'); 
                        $('.occupiedDiv').show();
                        $('#fnBusin, #lnBusin,#phBusin,#phBusin1').val('');
                       $('#owOccup').attr('checked', false);//Owner Occupied
                    } else {
                      $('#owOccup').attr('checked', false);//Owner Occupied
                    }
                });
                
                
            //Commerical :Service Type Radio button name for
            //AC Heating,Pool, Plumbing,Irrigation,Electrical, Installation
            //Solar,Roofing,Lawn Care,Floor Care,Painting Pest Control
            $('input[name=stList]').click(function() {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel'); 
            });
            
            //Commerical:Is your business or company mailing and service address the same?
            $('input[name=mp]').click(function() {
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            
            
            //Commerical: Unit Serves
             $('input[name=ciUS]').click(function() {
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });  
            
            
            //Commerical: Is your system:
           $('input[name= unitTy1]').click(function() {
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            //Commerical: Chilled Issues
           $('input[name= chwater1]').click(function() {
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
           
            //Commerical: Type of Gas:
            $('input[name= gaspn]').click(function() {
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            
            //Commerical: Unit Location
            $('input[name= ty10]').click(function() {
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            
            //Commerical: Estimate Ladder Needed:
            $('input[name= cy0]').click(function() {
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            
            //Residential Heat Type
            $("input[name = thi]").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            
            //Residential Estimate Ladder Size
            $("input[name = eln0]").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            
            
            //Residential Hidden Div for Guard Shack radio button options Call Before and Text Message
            $("input[name = gsh]").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            }); 
            
             //Residential Hidden Div for Guard Shack for radio selection Techician and Homeowner
             //Techician
            $("#gsrTe").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            
           //Homeowner
            $("#gsrHm").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            
            //Question:Will you be using a company check or credit card for payment of services with checking or Credit Card
            $("input[name = ccc]").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
//                if ($("#business").prop('checked')) {
//                    alert("Business button checked");
//                    $(".setupDiv").show();
//                }
//                 
//                if($("#residential").prop('checked')){
//                    $(".setupDiv").hide();
//                    $(".offerOption").show();
//                    alert("Residential Button is checked");
//                }
            });
            //Morning radio button
            $("input[name = morn]").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
             //Afternoon radio button
            $("input[name = aft]").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
             //Afternoon radio button
            $("input[name = evn]").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            
            //Queston: How do you planning taken care of repair?
            //Hidden div question: Debit/Credit Card
            //radio button options: same and different
            $("input[name = rr0]").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            //hidden div radio button options:Warranty
            $("input[name = rr1]").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            //hidden div radio button options:Company
            $("input[name = company]").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            
             //Split System: Gas Type Options Natural or Propane
            $("input[name = thi1]").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
            
           //Split System: Gas Type Options Natural or Propane
           $("input[name =  csh]").click(function(){
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
            });
});//end of document


                  