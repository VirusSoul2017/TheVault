
//display for asap checked box
var asp = false;
var ssp = false;
var directm =false;
var snay =  false;

$(document).ready(function(){
	$('#aprice').click(function(){
		asp = true;
		if(asp==true){
			$('#asapserv').toggle();
			$('#cardque').show();
			asp=false;
		}else{
			$('#cardque').hide();
		}
	});
	// supersaver option
	$('#fprice').click(function(){
		ssp =true;
		if(ssp==true){
			$('#superserv').toggle();
			$('#cardque').show();
			$('#mtimeHidden').hide();
			$('#atimeHidden').hide();
			$('#etimeHidden').hide();
			$('#timeSel').hide();
			ssp=false;
		} else{
			$('#cardque').hide();
		}
	});
	
	$('#tabs1')
	    .tabs()
	    .addClass('ui-tabs-vertical ui-helper-clearfix');
	//for page customer concern question "would you like to for a supervisior"
		$('#met').click(function(){
			if ($('#met').is(':checked')) {
				$('#promeet').show();
				$('#cll').attr('checked', false);
				$('#leav').attr('checked', false);
			}else{
				$('#cll').attr('checked', false);
				$('#leav').attr('checked', false);
			}
		});

         //$('#tname').keyup(displayImg).focus(displayImg);
		//to hide promeet (this is the call radio selection)
		$('#cll').click(function(){
                    if ($('#cll').is(':checked')) {
                            $('#promeet').hide('checked', false);
                            $('#met').attr('checked', false);
                            $('#leav').attr('checked', false);
                    }else{
                            $('#met').attr('checked', false);
                            $('#leav').attr('checked', false);
                    }
		});

		//to hide promeet (this is the leave a message radio selection)
		$('#leav').click(function(){
                    if ($('#leav').is(':checked')) {
                            $('#promeet').hide('checked', false);
                            $('#met').attr('checked', false);
                            $('#cll').attr('checked', false);
                    }else{
                            $('#met').attr('checked', false);
                            $('#cll').attr('checked', false);
                    }
		});
		$('#cRanch').click(function(){
                    if ($('#cRanch').is(':checked')) {
                            $('#strloc').hide('checked', false);
                            $('#address2').hide('checked', false);
                            $('#clake').attr('checked', false);
                            $('#cRental').attr('checked', false);
                            $('#cVacation').attr('checked', false);
                    }else{
                            $('#clake').attr('checked', false);
                            $('#cRental').attr('checked', false);
                            $('#cVacation').attr('checked', false);
                    }
		});
		$('#clake').click(function(){
                    if ($('#clake').is(':checked')) {
                            $('#strloc').show('checked', false);
                            $('#address2').show('checked', false);
                            $('#cRanch').attr('checked', false);
                            $('#cRental').attr('checked', false);
                            $('#cVacation').attr('checked', false);
                    }else{
                            $('#cRanch').attr('checked', false);
                            $('#cRental').attr('checked', false);
                            $('#cVacation').attr('checked', false);
                    }
		});
		$('#cRental').click(function(){
                    if ($('#cRental').is(':checked')) {
                            $('#strloc').show('checked', false);
                            $('#address2').show('checked', false);
                            $('#cRanch').attr('checked', false);
                            $('#clake').attr('checked', false);
                            $('#cVacation').attr('checked', false);
                    }else{
                            $('#cRanch').attr('checked', false);
                            $('#clake').attr('checked', false);
                            $('#cVacation').attr('checked', false);
                    }
		});
		$('#cVacation').click(function(){
                    if ($('#cVacation').is(':checked')) {
                            $('#strloc').show('checked', false);
                            $('#address2').show('checked', false);
                            $('#cRanch').attr('checked', false);
                            $('#clake').attr('checked', false);
                            $('#cRental').attr('checked', false);
                    }else{
                            $('#cRanch').attr('checked', false);
                            $('#clake').attr('checked', false);
                            $('#cRental').attr('checked', false);
                    }
		});

		//show AC Heating Table to show if AC Heating radio button is checked
		$("#acButton").click(function(){
                    $('#acTable').show()
                    $('#pluButton').attr('checked', false);
		});
		$("#pluButton").click(function(){
                    $('#acTable').hide();
                    $('#acButton').attr('checked', false);
		}); 
		
		$("#acButton1").click(function(){
                    $('#acTable1').show();
                    $('#pluButton1').attr('checked', false);
                });
		
		$("#pluButton1").click(function(){
                    $('#acTable1').hide();
                    $('#acButton1').attr('checked', false);
		});

     // $("#EnterNow").click(function(){
     //    issue();
     //  });
    $("#bnYes").click(function(){
      if ($('#bnYes').is(':checked')) {
          $(' .bestYes').show();
         $('.bestNo').hide();
      }else{
         $(' .bestYes').hide();
      }
    });

    $("#bnNo").click(function(){
      if ($('#bnNo').is(':checked')) {
        $('.bestNo').show();
        $('.bestYes').hide();
      }else{
         $('.bestNo').hide();
      }
    });

    $("#showPhone").click(function(){
        // var b = document.getElementById('"showPhone');
        var a = document.getElementById('phone1').value;
      if ($('#showPhone').is(':checked')) {
         document.getElementById('idNum').innerHTML = a;
      }else{
         document.getElementById('idNum').innerHTML = "";
      }
    });  


    //seach function
    $(".a1").keyup(function(){
         _this = this;
        // Show only matching TR, hide rest of them
        $.each($(".tableC tbody ").find("tr"), function() {
            // console.log($(this).text());
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) == -1)
               $(this).hide();
            else
               $(this).show();                
        });
    });
    
    //Expiratiotn Date for CC Modal
     $("#expdate").keyup(function(){
         var exdate = new Date();
         exda = exdate.getMonth() + '/' + exdate.getFullYear();
         document.getElementById("expdate").innerHTML= exda;
     });
     
     //disable textbox if none drop downlist selection is check
     //Input Area: Service Address buliding type
      $("#strloc").change(function(){
        $(this).find("option:selected").each(function(){
            if($(this).attr("value")==="none"){
                $("#address3").prop('disabled',true);
            }else{
                $("#address3").prop('disabled',false);
            }
        });
    });
     //Residentail:Is your mailing and service address the same?
     //Mailing Address dropdown list for building type
     $("#strloc1").change(function(){
        $(this).find("option:selected").each(function(){
            if($(this).attr("value")==="road"){
                $("#saddress2").prop('disabled',true);
            }else{
                $("#saddress2").prop('disabled',false);
            }
        });
    });
     
     
		
});


//check and unchecked checked boxes if selected
//This for it will closed if another selection is chosen
//show and hide advertisement area with check selection
$(document).ready(function(){
//for media
	$('#media').click(function() {
          if ($('#media').is(':checked')) {
	        $('label.ColorSel').removeClass('ColorSel'); //removes class on old active label
    		$(this).parent().addClass('ColorSel'); // adds class to new active label
                $('#mediachoice').show().addClass('ColorSel');
                //$('#homeselect').hide();//hide quesiton"Are you homeowner?"
                $('#seconArea').hide('checked', false);
                $('#internet').attr('checked', false);
                $('#refer').attr('checked', false);
                $('#van').attr('checked', false);
                $('#direct').attr('checked', false);
                $('#internetChoice').hide('checked',false);
                $('#questionChoice').hide('checked',false);
                $('#eventques').hide('checked',false);
                $('#event').attr('checked', false);
                $('#toma').attr('checked', false);
                $('#soon').attr('checked', false);
                $('#commques').hide('checked', false);
                $('#otherd').attr('checked', false);
                $('#otherChoice').hide('checked',false);
                $('#other').attr('checked', false);
                $('#otChoice').hide('checked',false);
                $('#sticker').attr('checked', false);
                $('#customer').attr('checked', false);
                $('#alliance').attr('checked', false);
                $('#allianques').hide('checked', false);
         } else {
         	$('#media').parent().addClass("ColorSel");
                $('#internet').attr('checked', false)
                $('#internet').prop('disabled', true);
                $('#refer').attr('checked', false);
                $('#van').attr('checked', false);
                $('#direct').attr('checked', false);
                $('#internetChoice').hide('checked',false);
                $('#questionChoice').hide('checked',false);
                $('#eventques').hide('checked',false);
                $('#event').attr('checked', false);
                $('#toma').attr('checked', false);
                $('#soon').attr('checked', false);
                $('#commques').hide('checked', false);
                $('#otherd').attr('checked', false);
                $('#otherChoice').hide('checked',false);
                $('#other').attr('checked', false);
                $('#otChoice').hide('checked',false);
                $('#sticker').attr('checked', false);
                $('#customer').attr('checked', false);
                $('#dhanger').attr('checked', false);
                $('#doorques').hide('checked', false);
                $('#alliance').attr('checked', false);
                $('#allianques').hide('checked', false);
            }
    });
//for internet
    $('#internet').click(function() {
            if ($('#internet').is(':checked')) {
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
                $('#internetChoice').show().addClass('ColorSel');
                $('#seconArea').hide('checked', false);
                $('#media').attr('checked', false).removeClass('ColorSel');
                $('#mediachoice').hide('checked',false);
                $('#directmail').hide('checked',false);
                $('#radioanswer').hide('checked',false);
                $('#teleans').hide('checked',false);
                $('#newwpaperans').hide('checked',false);
                $('#radio').attr('checked', false);
                $('#tele').attr('checked', false);
                $('#newpaper').attr('checked', false);
                $('#refer').attr('checked', false);
                $('#van').attr('checked', false);
                $('#direct').attr('checked', false);
                $('#questionChoice').hide('checked',false);
                $('#eventques').hide('checked',false);
                $('#event').attr('checked', false);
                $('#toma').attr('checked', false);
                $('#soon').attr('checked', false);
                $('#commques').hide('checked', false);
                $('#otherd').attr('checked', false);
                $('#otherChoice').hide('checked',false);
                $('#other').attr('checked', false);
                $('#otChoice').hide('checked',false);
                $('#sticker').attr('checked', false);
                $('#customer').attr('checked', false);
                $('#dhanger').attr('checked', false);
                $('#doorques').hide('checked', false);
                $('#alliance').attr('checked', false);
                $('#allianques').hide('checked', false);
            } else {
                $('#mediachoice').hide('checked',false);
                $('#directmail').hide('checked',false);
                $('#media').attr('checked', false);
                $('#refer').attr('checked', false);
                $('#van').attr('checked', false);
                $('#direct').attr('checked', false);
                $('#radioanswer').hide('checked',false);
                $('#radio').attr('checked', false);
                $('#teleans').hide('checked',false);
                $('#tele').attr('checked', false);
                $('#newpaper').attr('checked', false);
                $('#newwpaperans').hide('checked',false);
                $('#questionChoice').hide('checked',false);
                $('#eventques').hide('checked',false);
                $('#event').attr('checked', false);
                $('#toma').attr('checked', false);
                $('#soon').attr('checked', false);
                $('#commques').hide('checked', false);
                $('#otherd').attr('checked', false);
                $('#otherChoice').hide('checked',false);
                $('#other').attr('checked', false);
                $('#otChoice').hide('checked',false);
                $('#sticker').attr('checked', false);
                $('#customer').attr('checked', false);
                $('#dhanger').attr('checked', false);
                $('#doorques').hide('checked', false);
                $('#alliance').attr('checked', false);
                $('#allianques').hide('checked', false);
            }
    });
//for referral
	$('#refer').click(function() {
		if ($('#refer').is(':checked')) {
	            $('label.ColorSel').removeClass('ColorSel'); 
    		    $(this).parent().addClass('ColorSel');
                    $('#questionChoice').show().css('color','red');
                    $('#seconArea').hide('checked', false);
                    $('#media').attr('checked', false);
                    $('#mediachoice').hide();
                    $('#directmail').hide();
                    $('#radioanswer').hide('checked',false);
                    $('#teleans').hide('checked',false);
                    $('#newwpaperans').hide('checked',false);
                    $('#radio').attr('checked', false);
                    $('#tele').attr('checked', false);
                    $('#newpaper').attr('checked', false);
                    $('#internet').attr('checked', false);
                    $('#van').attr('checked', false);
                    $('#direct').attr('checked', false);
                    $('#eventques').hide('checked',false)
                    $('#event').attr('checked', false);
                    $('#toma').attr('checked', false);
                    $('#soon').attr('checked', false);
                    $('#commques').hide('checked', false);
                    $('#otherd').attr('checked', false);
                    $('#otherChoice').hide('checked',false);
                    $('#internetChoice').hide('checked',false);
                    $('#other').attr('checked', false);
                    $('#otChoice').hide('checked',false);
                    $('#sticker').attr('checked', false);
                    $('#tmm').attr('checked', false);
                    $('#customer').attr('checked', false);
                    $('#dhanger').attr('checked', false);
                    $('#doorques').hide('checked', false);
                    $('#alliance').attr('checked', false);
                    $('#allianques').hide('checked', false);
            } else {
                $('#mediachoice').hide('checked',false);
                $('#directmail').hide('checked',false);
                $('#media').attr('checked', false);
                $('#internet').attr('checked', false);
                $('#van').attr('checked', false);
                $('#direct').attr('checked', false);
                $('#radioanswer').hide('checked',false);
                $('#radio').attr('checked', false);
                $('#teleans').hide('checked',false);
                $('#tele').attr('checked', false);
                $('#newpaper').attr('checked', false);
                $('#newwpaperans').hide('checked',false);
                $('#internetChoice').hide('checked',false);
                $('#eventques').hide('checked',false);
                $('#event').attr('checked', false);
                $('#toma').attr('checked', false);
                $('#soon').attr('checked', false);
                $('#commques').hide('checked', false);
                $('#otherd').attr('checked', false);
                $('#otherChoice').hide('checked',false);
                $('#other').attr('checked', false);
                $('#otChoice').hide('checked',false);
                $('#sticker').attr('checked', false);
                $('#tmm').attr('checked', false);
                $('#customer').attr('checked', false);
                $('#dhanger').attr('checked', false);
                $('#doorques').hide('checked', false);
                $('#alliance').attr('checked', false);
                $('#allianques').hide('checked', false);
            }
    });
//for van
$('#van').click(function() {
		if ($('#van').is(':checked')) {
                    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel');  
                    $('#seconArea').hide('checked', false);
                    $('#questionChoice').hide('checked',false);
                    $('#media').attr('checked', false);
                    $('#mediachoice').hide('checked',false);
                    $('#directmail').hide('checked',false);
                    $('#radioanswer').hide('checked',false);
                    $('#teleans').hide('checked',false);
                    $('#newwpaperans').hide('checked',false);
                    $('#radio').attr('checked', false);
                    $('#tele').attr('checked', false);
                    $('#newpaper').attr('checked', false);
                    $('#internet').attr('checked', false);
                    $('#refer').attr('checked', false);
                    $('#direct').attr('checked', false);
                    $('#eventques').hide('checked',false);
                    $('#toma').attr('checked', false);
                    $('#event').attr('checked', false);
                    $('#soon').attr('checked', false);
                    $('#commques').hide('checked', false);
                    $('#otherd').attr('checked', false);
                    $('#otherChoice').hide('checked',false);
                    $('#other').attr('checked', false);
                    $('#otChoice').hide('checked',false);
                    $('#sticker').attr('checked', false);
                    $('#tmm').attr('checked', false);
                    $('#sticker').attr('checked', false);
                    $('#customer').attr('checked', false);
                    $('#dhanger').attr('checked', false);
                    $('#doorques').hide('checked', false);
                    $('#alliance').attr('checked', false);
                    $('#allianques').hide('checked', false);
            
		} else {
                    $('#questionChoice').hide('checked',false);
                    $('#mediachoice').hide('checked',false);
                    $('#directmail').hide('checked',false);
                    $('#media').attr('checked', false);
                    $('#internet').attr('checked', false);
                    $('#refer').attr('checked', false);
                    $('#direct').attr('checked', false);
                    $('#radioanswer').hide('checked',false);
                    $('#radio').attr('checked', false);
                    $('#teleans').hide('checked',false);
                    $('#tele').attr('checked', false);
                    $('#newpaper').attr('checked', false);
                    $('#newwpaperans').hide('checked',false);
                    $('#internetChoice').hide('checked',false);
                    $('#eventques').hide('checked',false);
                    $('#toma').attr('checked', false);
                    $('#event').attr('checked', false);
                    $('#soon').attr('checked', false);
                    $('#commques').hide('checked', false);
                    $('#otherd').attr('checked', false);
                    $('#otherChoice').hide('checked',false);
                    $('#other').attr('checked', false);
                    $('#otChoice').hide('checked',false);
                    $('#sticker').attr('checked', false);
                    $('#tmm').attr('checked', false);
                    $('#sticker').attr('checked', false);
                    $('#customer').attr('checked', false);
                    $('#dhanger').attr('checked', false);
                    $('#doorques').hide('checked', false);
                    $('#alliance').attr('checked', false);
                    $('#allianques').hide('checked', false);
                }
    });

//for event
$('#event').click(function() {
	if ($('#event').is(':checked')) {
	        $('label.ColorSel').removeClass('ColorSel'); 
    		$(this).parent().addClass('ColorSel');
    		$('#seconArea').hide('checked', false); 
                $('#eventques').show().addClass('ColorSel'); 
                $('#questionChoice').hide('checked',false);
                $('#media').attr('checked', false);
                $('#mediachoice').hide('checked',false);
                $('#directmail').hide('checked',false);
                $('#radioanswer').hide('checked',false);
                $('#teleans').hide('checked',false);
                $('#newwpaperans').hide('checked',false);
                $('#radio').attr('checked', false);
                $('#tele').attr('checked', false);
                $('#newpaper').attr('checked', false);
                $('#internet').attr('checked', false);
                $('#internetChoice').hide('checked',false);
                $('#refer').attr('checked', false);
                $('#direct').attr('checked', false);
                $('#van').attr('checked', false);
                $('#toma').attr('checked', false);
                $('#soon').attr('checked', false);
                $('#commques').hide('checked', false);
                $('#otherd').attr('checked', false);
                $('#otherChoice').hide('checked',false);
                $('#other').attr('checked', false);
                $('#otChoice').hide('checked',false);
                $('#sticker').attr('checked', false);
                $('#tmm').attr('checked', false);
                $('#customer').attr('checked', false);
                $('#dhanger').attr('checked', false);
                $('#doorques').hide('checked', false);
                $('#alliance').attr('checked', false);
                $('#allianques').hide('checked', false);
            } else {
	        $('#questionChoice').hide('checked',false);
                $('#mediachoice').hide('checked',false);
                $('#directmail').hide('checked',false);
                $('#media').attr('checked', false);
                $('#internet').attr('checked', false);
                $('#refer').attr('checked', false);
                $('#direct').attr('checked', false);
                $('#radioanswer').hide('checked',false);
                $('#radio').attr('checked', false);
                $('#teleans').hide('checked',false);
                $('#tele').attr('checked', false);
                $('#newpaper').attr('checked', false);
                $('#newwpaperans').hide('checked',false);
                $('#internetChoice').hide('checked',false);
                $('#van').attr('checked', false);
                $('#toma').attr('checked', false);
                $('#soon').attr('checked', false);
                $('#commques').hide('checked', false);
                $('#otherd').attr('checked', false);
                $('#otherChoice').hide('checked',false);
                $('#other').attr('checked', false);
                $('#otChoice').hide('checked',false);
                $('#sticker').attr('checked', false);
                $('#tmm').attr('checked', false);
                $('#customer').attr('checked', false);
                $('#dhanger').attr('checked', false);
                $('#doorques').hide('checked', false);
                $('#alliance').attr('checked', false);
                $('#allianques').hide('checked', false);
            }
    });
    //for TOMA Selection (checkbox)
    $('#toma').click(function() {
		if ($('#toma').is(':checked')) {
		    $('label.ColorSel').removeClass('ColorSel'); 
                    $(this).parent().addClass('ColorSel');
                    $('#seconArea').hide('checked', false); 
                    $('#eventques').hide('checked',false);
                    $('#questionChoice').hide('checked',false);
                    $('#media').attr('checked', false);
                    $('#mediachoice').hide('checked',false);
                    $('#directmail').hide('checked',false);
                    $('#radioanswer').hide('checked',false);
                    $('#teleans').hide('checked',false);
                    $('#newwpaperans').hide('checked',false);
                    $('#radio').attr('checked', false);
                    $('#tele').attr('checked', false);
                    $('#newpaper').attr('checked', false);
                    $('#internet').attr('checked', false);
                    $('#internetChoice').hide('checked',false);
                    $('#refer').attr('checked', false);
                    $('#direct').attr('checked', false);
                    $('#van').attr('checked', false);
                    $('#event').attr('checked', false);
                    $('#soon').attr('checked', false);
                    $('#commques').hide('checked', false);
                    $('#otherd').attr('checked', false);
                    $('#otherChoice').hide('checked',false);
                    $('#other').attr('checked', false);
                    $('#otChoice').hide('checked',false);
                    $('#sticker').attr('checked', false);
                    $('#tmm').attr('checked', false);
                    $('#customer').attr('checked', false);
                    $('#dhanger').attr('checked', false);
                    $('#doorques').hide('checked', false);
                    $('#alliance').attr('checked', false);
                    $('#allianques').hide('checked', false);
            } else {
		    $('#questionChoice').hide('checked',false);
                    $('#mediachoice').hide('checked',false);
                    $('#directmail').hide('checked',false);
                    $('#media').attr('checked', false);
                    $('#internet').attr('checked', false);
                    $('#refer').attr('checked', false);
                    $('#direct').attr('checked', false);
                    $('#radioanswer').hide('checked',false);
                    $('#radio').attr('checked', false);
                    $('#teleans').hide('checked',false);
                    $('#tele').attr('checked', false);
                    $('#radioanswer').hide('checked',false);
                    $('#newpaper').attr('checked', false);
                    $('#newwpaperans').hide('checked',false);
                    $('#internetChoice').hide('checked',false);
                    $('#van').attr('checked', false);
                    $('#eventques').hide('checked',false);
                    $('#soon').attr('checked', false);
                    $('#commques').hide('checked', false);
                    $('#otherd').attr('checked', false);
                    $('#otherChoice').hide('checked',false);
                    $('#other').attr('checked', false);
                    $('#otChoice').hide('checked',false);
                    $('#sticker').attr('checked', false);
                    $('#tmm').attr('checked', false);
                    $('#customer').attr('checked', false);
                    $('#dhanger').attr('checked', false);
                    $('#doorques').hide('checked', false);
                    $('#alliance').attr('checked', false);
                    $('#allianques').hide('checked', false);
                }
            });
//for Community Support selection(checkbox)
$('#soon').click(function() {
		if ($('#soon').is(':checked')) {
			$('label.ColorSel').removeClass('ColorSel'); 
    		$(this).parent().addClass('ColorSel');
    		$('#seconArea1').hide('checked', false); 
			$('#commques').show().addClass('ColorSel');
			$('#eventques').hide('checked',false);
			$('#questionChoice').hide('checked',false);
			$('#media').attr('checked', false);
			$('#mediachoice').hide('checked',false);
			$('#directmail').hide('checked',false);
			$('#radioanswer').hide('checked',false);
			$('#teleans').hide('checked',false);
			$('#newwpaperans').hide('checked',false);
			$('#radio').attr('checked', false);
			$('#tele').attr('checked', false);
			$('#newpaper').attr('checked', false);
			$('#internet').attr('checked', false);
			$('#internetChoice').hide('checked',false);
            $('#refer').attr('checked', false);
            $('#direct').attr('checked', false);
            $('#van').attr('checked', false);
            $('#event').attr('checked', false);
            $('#toma').attr('checked', false);
            $('#otherd').attr('checked', false);
			$('#otherChoice').hide('checked',false);
			$('#other').attr('checked', false);
            $('#otChoice').hide('checked',false);
            $('#sticker').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#customer').attr('checked', false);
            $('#dhanger').attr('checked', false);
            $('#doorques').hide('checked', false);
            $('#alliance').attr('checked', false);
            $('#allianques').hide('checked', false);
            
		} else {
			$('#questionChoice').hide('checked',false);
            $('#mediachoice').hide('checked',false);
            $('#directmail').hide('checked',false);
            $('#media').attr('checked', false);
            $('#internet').attr('checked', false);
            $('#refer').attr('checked', false);
            $('#direct').attr('checked', false);
            $('#radioanswer').hide('checked',false);
			$('#radio').attr('checked', false);
			$('#teleans').hide('checked',false);
			$('#tele').attr('checked', false);
			$('#newpaper').attr('checked', false);
			$('#newwpaperans').hide('checked',false);
			$('#internetChoice').hide('checked',false);
			$('#van').attr('checked', false);
			$('#eventques').hide('checked',false);
			$('#toma').attr('checked', false);
			$('#otherd').attr('checked', false);
			$('#otherChoice').hide('checked',false);
			$('#other').attr('checked', false);
            $('#otChoice').hide('checked',false);
            $('#sticker').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#customer').attr('checked', false);
            $('#dhanger').attr('checked', false);
            $('#doorques').hide('checked', false);
            $('#alliance').attr('checked', false);
            $('#allianques').hide('checked', false);
        }
    });

//for other selection(checkbox)
$('#otherd').click(function() {
		if ($('#otherd').is(':checked')) {
			$('label.ColorSel').removeClass('ColorSel'); 
    		        $(this).parent().addClass('ColorSel');
			$('#otherChoice').show();
			$('#seconArea1').hide('checked', false);
			$('#eventques').hide('checked',false);
			$('#questionChoice').hide('checked',false);
			$('#media').attr('checked', false);
			$('#mediachoice').hide('checked',false);
			$('#directmail').hide('checked',false);
			$('#radioanswer').hide('checked',false);
			$('#teleans').hide('checked',false);
			$('#newwpaperans').hide('checked',false);
			$('#radio').attr('checked', false);
			$('#tele').attr('checked', false);
			$('#newpaper').attr('checked', false);
			$('#internet').attr('checked', false);
			$('#internetChoice').hide('checked',false);
            $('#refer').attr('checked', false);
            $('#direct').attr('checked', false);
            $('#van').attr('checked', false);
            $('#event').attr('checked', false);
            $('#toma').attr('checked', false);
            $('#soon').attr('checked', false);
            $('#commques').hide('checked', false);
            $('#other').attr('checked', false);
            $('#otChoice').hide('checked',false);
            $('#sticker').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#customer').attr('checked', false);
            $('#dhanger').attr('checked', false);
            $('#doorques').hide('checked', false);
            $('#alliance').attr('checked', false);
            $('#allianques').hide('checked', false);
        } else {
			$('#questionChoice').hide('checked',false);
            $('#mediachoice').hide('checked',false);
            $('#directmail').hide('checked',false);
            $('#media').attr('checked', false);
            $('#internet').attr('checked', false);
            $('#refer').attr('checked', false);
            $('#direct').attr('checked', false);
            $('#radioanswer').hide('checked',false);
			$('#radio').attr('checked', false);
			$('#teleans').hide('checked',false);
			$('#tele').attr('checked', false);
			$('#newpaper').attr('checked', false);
			$('#newwpaperans').hide('checked',false);
			$('#internetChoice').hide('checked',false);
			$('#van').attr('checked', false);
			$('#eventques').hide('checked',false);
			$('#toma').attr('checked', false);
			$('#soon').attr('checked', false);
			$('#commques').hide('checked', false);
			$('#other').attr('checked', false);
            $('#otChoice').hide('checked',false);
            $('#sticker').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#customer').attr('checked', false);
            $('#dhanger').attr('checked', false);
            $('#doorques').hide('checked', false);
            $('#alliance').attr('checked', false);
            $('#allianques').hide('checked', false);
            
        }
        
});

$('#sticker').click(function() {
		if ($('#sticker').is(':checked')) {
			$('label.ColorSel').removeClass('ColorSel'); 
    		$(this).parent().addClass('ColorSel');
    		$('#seconArea1').hide('checked', false); 
			$('#otherChoice').hide('checked',false);
			$('#eventques').hide('checked',false);
			$('#questionChoice').hide('checked',false);
			$('#media').attr('checked', false);
			$('#mediachoice').hide('checked',false);
			$('#directmail').hide('checked',false);
			$('#radioanswer').hide('checked',false);
			$('#teleans').hide('checked',false);
			$('#newwpaperans').hide('checked',false);
			$('#radio').attr('checked', false);
			$('#tele').attr('checked', false);
			$('#newpaper').attr('checked', false);
			$('#internet').attr('checked', false);
			$('#internetChoice').hide('checked',false);
            $('#refer').attr('checked', false);
            $('#direct').attr('checked', false);
            $('#van').attr('checked', false);
            $('#event').attr('checked', false);
            $('#toma').attr('checked', false);
            $('#soon').attr('checked', false);
            $('#commques').hide('checked', false);
            $('#other').attr('checked', false);
            $('#otChoice').hide('checked',false);
            $('#tmm').attr('checked', false);
            $('#customer').attr('checked', false);
            $('#dhanger').attr('checked', false);
            $('#doorques').hide('checked', false);
            $('#alliance').attr('checked', false);
            $('#allianques').hide('checked', false);
            
		} else {
			$('#questionChoice').hide('checked',false);
            $('#mediachoice').hide('checked',false);
            $('#directmail').hide('checked',false);
            $('#media').attr('checked', false);
            $('#internet').attr('checked', false);
            $('#refer').attr('checked', false);
            $('#direct').attr('checked', false);
            $('#radioanswer').hide('checked',false);
			$('#radio').attr('checked', false);
			$('#teleans').hide('checked',false);
			$('#tele').attr('checked', false);
			$('#newpaper').attr('checked', false);
			$('#newwpaperans').hide('checked',false);
			$('#internetChoice').hide('checked',false);
			$('#van').attr('checked', false);
			$('#eventques').hide('checked',false);
			$('#toma').attr('checked', false);
			$('#soon').attr('checked', false);
			 ('#commques').hide('checked', false);
			$('#other').attr('checked', false);
            $('#otChoice').hide('checked',false);
            $('#otherChoice').hide('checked',false);
            $('#tmm').attr('checked', false);
            $('#customer').attr('checked', false);
            $('#dhanger').attr('checked', false);
            $('#doorques').hide('checked', false);
            $('#alliance').attr('checked', false);
            $('#allianques').hide('checked', false);
            
        }
        
});

//for previous customer
$('#customer').click(function() {
		if ($('#customer').is(':checked')) {
			$('#otherChoice').hide('checked',false);
			$('#eventques').hide('checked',false);
			$('#questionChoice').hide('checked',false);
			$('#media').attr('checked', false);
			$('#mediachoice').hide('checked',false);
			$('#directmail').hide('checked',false);
			$('#radioanswer').hide('checked',false);
			$('#teleans').hide('checked',false);
			$('#newwpaperans').hide('checked',false);
			$('#radio').attr('checked', false);
			$('#tele').attr('checked', false);
			$('#newpaper').attr('checked', false);
			$('#internet').attr('checked', false);
			$('#internetChoice').hide('checked',false);
            $('#refer').attr('checked', false);
            $('#direct').attr('checked', false);
            $('#van').attr('checked', false);
            $('#event').attr('checked', false);
            $('#toma').attr('checked', false);
            $('#soon').attr('checked', false);
            $('#commques').hide('checked', false);
            $('#other').attr('checked', false);
            $('#otChoice').hide('checked',false);
            $('#tmm').attr('checked', false);
            $('#sticker').attr('checked', false);
            $('#dhanger').attr('checked', false);
            $('#doorques').hide('checked', false);
            $('#alliance').attr('checked', false);
            $('#allianques').hide('checked', false);
        } else {
			$('#questionChoice').hide('checked',false);
            $('#mediachoice').hide('checked',false);
            $('#directmail').hide('checked',false);
            $('#media').attr('checked', false);
            $('#internet').attr('checked', false);
            $('#refer').attr('checked', false);
            $('#direct').attr('checked', false);
            $('#radioanswer').hide('checked',false);
			$('#radio').attr('checked', false);
			$('#teleans').hide('checked',false);
			$('#tele').attr('checked', false);
			$('#newpaper').attr('checked', false);
			$('#newwpaperans').hide('checked',false);
			$('#internetChoice').hide('checked',false);
			$('#van').attr('checked', false);
			$('#eventques').hide('checked',false);
			$('#toma').attr('checked', false);
			$('#soon').attr('checked', false)
			$('#commques').hide('checked', false);
			$('#other').attr('checked', false);
            $('#otChoice').hide('checked',false);
            $('#otherChoice').hide('checked',false);
            $('#tmm').attr('checked', false);
            $('#sticker').attr('checked', false);
            $('#dhanger').attr('checked', false);
            $('#doorques').hide('checked', false);
            $('#alliance').attr('checked', false);
            $('#allianques').hide('checked', false);
            
        }
        
});

//for door hanger selection(checked)
$('#dhanger').click(function() {
		if ($('#dhanger').is(':checked')) {
	           $('label.ColorSel').removeClass('ColorSel'); 
    		    $(this).parent().addClass('ColorSel');
                    $('#doorques').show().addClass('ColorSel');
                    $('#seconArea1').hide('checked', false); 
                    $('#questionChoice').hide('checked',false);
                    $('#mediachoice').hide('checked',false);
                    $('#directmail').hide('checked',false);
                    $('#media').attr('checked', false);
                    $('#internet').attr('checked', false);
                    $('#refer').attr('checked', false);
                    $('#direct').attr('checked', false);
                    $('#radioanswer').hide('checked',false);
                    $('#radio').attr('checked', false);
                    $('#teleans').hide('checked',false);
                    $('#tele').attr('checked', false);
                    $('#newpaper').attr('checked', false);
                    $('#newwpaperans').hide('checked',false);
                    $('#internetChoice').hide('checked',false);
                    $('#van').attr('checked', false);
                    $('#eventques').hide('checked',false);
                    $('#toma').attr('checked', false);
                    $('#soon').attr('checked', false);
                    $('#commques').hide('checked', false);
                    $('#other').attr('checked', false);
                    $('#otChoice').hide('checked',false);
                    $('#otherChoice').hide('checked',false);
                    $('#tmm').attr('checked', false);
                    $('#sticker').attr('checked', false);
                    $('#alliance').attr('checked', false);
                    $('#allianques').hide('checked', false);
        } else {
                    $('#questionChoice').hide('checked',false);
                    $('#mediachoice').hide('checked',false);
                    $('#directmail').hide('checked',false);
                    $('#media').attr('checked', false);
                    $('#internet').attr('checked', false);
                    $('#refer').attr('checked', false);
                    $('#direct').attr('checked', false);
                    $('#radioanswer').hide('checked',false);
                    $('#radio').attr('checked', false);
                    $('#teleans').hide('checked',false);
                    $('#tele').attr('checked', false);
                    $('#newpaper').attr('checked', false);
                    $('#newwpaperans').hide('checked',false);
                    $('#internetChoice').hide('checked',false);
                    $('#van').attr('checked', false);
                    $('#eventques').hide('checked',false);
                    $('#toma').attr('checked', false);
                    $('#soon').attr('checked', false);
                    $('#commques').hide('checked', false);
                    $('#other').attr('checked', false);
                    $('#otChoice').hide('checked',false);
                    $('#otherChoice').hide('checked',false);
                    $('#tmm').attr('checked', false);
                    $('#sticker').attr('checked', false);
                    $('#alliance').attr('checked', false);
                    $('#allianques').hide('checked', false);
            }
    });

//for alliance selection(checked)
$('#alliance').click(function() {
	if ($('#alliance').is(':checked')) {
	        $('label.ColorSel').removeClass('ColorSel'); 
    		$(this).parent().addClass('ColorSel');
                $('#allianques').show().addClass('ColorSel');
                $('#seconArea1').hide('checked', false);
                $('#questionChoice').hide('checked',false);
                $('#mediachoice').hide('checked',false);
                $('#directmail').hide('checked',false);
                $('#media').attr('checked', false);
                $('#internet').attr('checked', false);
                $('#refer').attr('checked', false);
                $('#direct').attr('checked', false);
                $('#radioanswer').hide('checked',false);
                $('#radio').attr('checked', false);
                $('#teleans').hide('checked',false);
                $('#tele').attr('checked', false);
                $('#newpaper').attr('checked', false);
                $('#newwpaperans').hide('checked',false);
                $('#internetChoice').hide('checked',false);
                $('#directmail').hide('checked',false);
                $('#media').attr('checked', false);
                $('#internet').attr('checked', false);
                $('#refer').attr('checked', false);
                $('#direct').attr('checked', false);
                $('#radioanswer').hide('checked',false);
                $('#van').attr('checked', false);
                $('#eventques').hide('checked',false);
                $('#toma').attr('checked', false);
                $('#soon').attr('checked', false);
                $('#commques').hide('checked', false);
                $('#other').attr('checked', false);
                $('#otChoice').hide('checked',false);
                $('#otherChoice').hide('checked',false);
                $('#tmm').attr('checked', false);
                $('#sticker').attr('checked', false);
                $('#dhanger').attr('checked', false);
                $('#doorques').hide('checked', false);
	} else {
                $('#questionChoice').hide('checked',false);
                $('#mediachoice').hide('checked',false);
                $('#directmail').hide('checked',false);
                $('#media').attr('checked', false);
                $('#internet').attr('checked', false);
                $('#refer').attr('checked', false);
                $('#direct').attr('checked', false);
                $('#radioanswer').hide('checked',false);
                $('#radio').attr('checked', false);
                $('#teleans').hide('checked',false);
                $('#tele').attr('checked', false);
                $('#newpaper').attr('checked', false);
                $('#newwpaperans').hide('checked',false);
                $('#internetChoice').hide('checked',false);
                $('#van').attr('checked', false);
                $('#eventques').hide('checked',false);
                $('#toma').attr('checked', false);
                $('#soon').attr('checked', false);
                $('#commques').hide('checked', false);
                $('#other').attr('checked', false);
                $('#otChoice').hide('checked',false);
                $('#otherChoice').hide('checked',false);
                $('#tmm').attr('checked', false);
                $('#sticker').attr('checked', false);
                $('#dhanger').attr('checked', false);
                $('#doorques').hide('checked', false);
			
        }
});

//Community Support option if other is click
$('#cother').click(function() {
		if ($('#cother').is(':checked')) {
		    $('#otco3').show();
		    $('#questionChoice').hide('checked',false);
                    $('#mediachoice').hide('checked',false);
                    $('#directmail').hide('checked',false);
                    $('#media').attr('checked', false);
                    $('#internet').attr('checked', false);
                    $('#refer').attr('checked', false);
                    $('#direct').attr('checked', false);
                    $('#radioanswer').hide('checked',false);
                    $('#radio').attr('checked', false);
                    $('#teleans').hide('checked',false);
                    $('#tele').attr('checked', false);
                    $('#newpaper').attr('checked', false);
                    $('#newwpaperans').hide('checked',false);
                    $('#internetChoice').hide('checked',false);
                    $('#van').attr('checked', false);
                    $('#eventques').hide('checked',false);
                    $('#toma').attr('checked', false);
                    $('#soon').attr('checked', false);
                    $('#other').attr('checked', false);
                    $('#otChoice').hide('checked',false);
                    $('#otherChoice').hide('checked',false);
                    $('#tmm').attr('checked', false);
                    $('#sticker').attr('checked', false);
                    $('#dhanger').attr('checked', false);
                    $('#doorques').hide('checked', false);
                    $('#alliance').attr('checked', false);
                    $('#allianques').hide('checked', false);
		} else {
                    $('#questionChoice').hide('checked',false);
                    $('#mediachoice').hide('checked',false);
                    $('#directmail').hide('checked',false);
                    $('#media').attr('checked', false);
                    $('#internet').attr('checked', false);
                    $('#refer').attr('checked', false);
                    $('#direct').attr('checked', false);
                    $('#radioanswer').hide('checked',false);
                    $('#radio').attr('checked', false);
                    $('#teleans').hide('checked',false);
                    $('#tele').attr('checked', false);
                    $('#newpaper').attr('checked', false);
                    $('#newwpaperans').hide('checked',false);
                    $('#internetChoice').hide('checked',false);
                    $('#van').attr('checked', false);
                    $('#eventques').hide('checked',false);
                    $('#toma').attr('checked', false);
                    $('#soon').attr('checked', false);
                    $('#commques').hide('checked', false);
                    $('#other').attr('checked', false);
                    $('#otChoice').hide('checked',false);
                    $('#otherChoice').hide('checked',false);
                    $('#tmm').attr('checked', false);
                    $('#sticker').attr('checked', false);
                    $('#dhanger').attr('checked', false);
                    $('#doorques').hide('checked', false);
			
        }
});



//for direct selection(checked)
$('#direct').click(function() {
        if ($('#direct').is(':checked')) {
                $('#directmail').show();
                $('#tele').attr('checked', false);
                $('#teleans').hide('checked',false);
                $('#newpaper').attr('checked', false);
                $('#newwpaperans').hide('checked',false);
                $('#radio').attr('checked', false);
                $('#radioanswer').hide('checked',false);
                $('#gtcu').attr('checked', false);
        } else {
                $('#tele').attr('checked', false);
                $('#teleans').hide('checked',false);
                $('#newpaper').attr('checked', false);
                $('#newwpaperans').hide('checked',false);
                $('#radio').attr('checked', false);
                $('#radioanswer').hide('checked',false);
                $('#gtcu').attr('checked', false);
    }
        
});

//for radio selection(checked)
$('#radio').click(function() {
        if ($('#radio').is(':checked')) {
                $('#radioanswer').show();
                $('#directHidden').hide();
                $('#tele').attr('checked', false);
                $('#teleans').hide('checked',false);
                $('#newpaper').attr('checked', false);
                $('#newwpaperans').hide('checked',false);
                $('#direct').attr('checked', false);
                $('#directmail').hide('checked',false).get(0).selectedIndex = 0;
                $('#gtcu').attr('checked', false);
        } else {
                $('#tele').attr('checked', false);
                $('#teleans').hide('checked',false);
                $('#newpaper').attr('checked', false);
                $('#newwpaperans').hide('checked',false);
                $('#direct').attr('checked', false);
                $('#directmail').hide('checked',false);
                $('#gtcu').attr('checked', false);
        }
});
//for television selection(checked)
$('#tele').click(function() {
        if ($('#tele').is(':checked')) {
            $('#teleans').show();
            $('#newpaper').attr('checked', false);
            $('#newwpaperans').hide('checked',false);
            $('#direct').attr('checked', false);
            $('#directmail').hide('checked',false);
            $('#radio').attr('checked', false);
            $('#radioanswer').hide('checked',false);
            $('#gtcu').attr('checked', false);
        } else {
            $('#newpaper').attr('checked', false);
            $('#newwpaperans').hide('checked',false);
            $('#direct').attr('checked', false);
            $('#directmail').hide('checked',false);
            $('#radio').attr('checked', false);
            $('#radioanswer').hide('checked',false);
            $('#gtcu').attr('checked', false);
        }
});



//for newpaper selection(checked)
$('#newpaper').click(function() {
        if ($('#newpaper').is(':checked')) {
            $('#newwpaperans').show();
            $('#tele').attr('checked', false);
            $('#teleans').hide('checked',false);
            $('#direct').attr('checked', false);
            $('#directmail').hide('checked',false);
            $('#radio').attr('checked', false);
            $('#radioanswer').hide('checked',false);
            $('#gtcu').attr('checked', false);
        } else {
            $('#tele').attr('checked', false);
            $('#teleans').hide('checked',false);
            $('#direct').attr('checked', false);
            $('#directmail').hide('checked',false);
            $('#radio').attr('checked', false);
            $('#radioanswer').hide('checked',false);
            $('#gtcu').attr('checked', false);
        }
});
//for Good 2 CU (checked)
$('#gtcu').click(function() {
    if ($('#gtcu').is(':checked')) {
            $('#tele').attr('checked', false);
            $('#teleans').hide('checked',false);
            $('#direct').attr('checked', false);
            $('#directmail').hide('checked',false);
            $('#radio').attr('checked', false);
            $('#radioanswer').hide('checked',false);
            $('#newpaper').attr('checked', false);
            $('#newwpaperans').hide('checked',false);
    } else {
            $('#tele').attr('checked', false);
            $('#teleans').hide('checked',false);
            $('#direct').attr('checked', false);
            $('#directmail').hide('checked',false);
            $('#radio').attr('checked', false);
            $('#radioanswer').hide('checked',false);
        }
});

//This section is for the internet checkbox selection
//for google checkbox selection
$('#google').click(function() {
        if ($('#google').is(':checked')) {
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
        } else {
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
        }
});
//for yahoo checkbox selection
$('#yahoo').click(function() {
        if ($('#yahoo').is(':checked')) {
            $('#google').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
        } else {
            $('#google').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
        }
});
//for bing checkbox selection
$('#bing').click(function() {
        if ($('#bing').is(':checked')) {
            $('#google').attr('checked', false);
            $('#yahoo').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
        } else {
            $('#google').attr('checked', false);
            $('#yahoo').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
        }
});

//for angie checkbox selection
$('#angie').click(function() {
        if ($('#angie').is(':checked')) {
            $('#google').attr('checked', false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
        } else {
            $('#google').attr('checked', false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
        }
});
//for other selection checkbox
$('#other').click(function() {
        if ($('#other').is(':checked')) {
        	$('#otco').show();
            $('#google').attr('checked', false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
        } else {
            $('#google').attr('checked', false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
        }
});
//for Our Website checkbox selection
$('#website').click(function() {
        if ($('#website').is(':checked')) {
        	$('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#google').attr('checked', false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
        } else {
        	$('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#google').attr('checked', false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
            
        }
});
//for TMM checkbox selection
$('#tmm').click(function() {
        if ($('#tmm').is(':checked')) {
        	$('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#website').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
        } else {
        	$('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#google').attr('checked', false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#website').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
            
        }
});
//for Home Visor checkbox selection
$('#homeVis').click(function() {
        if ($('#homeVis').is(':checked')) {
        	$('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#google').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
        } else {
        	$('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#google').attr('checked', false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#google').attr('checked', false);
            $('#homeImp').attr('checked', false);
            $('#yelp').attr('checked', false);
            
        }
});

//for Home Improvement checkbox selection
$('#homeImp').click(function() {
        if ($('#homeImp').is(':checked')) {
        	$('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#google').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#yelp').attr('checked', false);
        } else {
        	$('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#google').attr('checked', false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#google').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#yelp').attr('checked', false);
        }
});

//for Yelp checkbox selection
$('#yelp').click(function() {
        if ($('#yelp').is(':checked')) {
        	$('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#google').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
        } else {
        	$('#other').attr('checked', false);
            $('#otco').hide('checked',false);
            $('#google').attr('checked', false);
            $('#yahoo').attr('checked', false);
            $('#bing').attr('checked', false);
            $('#angie').attr('checked', false);
            $('#website').attr('checked', false);
            $('#tmm').attr('checked', false);
            $('#google').attr('checked', false);
            $('#homeVis').attr('checked', false);
            $('#homeImp').attr('checked', false);
            
        }
});
//for Question: Are you the homeowner? selection check box (yes or no)
//for  yes selection checkbox
$('#hyes').click(function() {
    if ($('#hyes').is(':checked')) {
        $('label.ColorSel').removeClass('ColorSel'); 
        $(this).parent().addClass('ColorSel'); 
        $('#hno').attr('checked', false);
        $("#owinfo,#owinfo1, #poaddre4,#poaddre5, #poaddre7,#poaddre1,#poaddre2,#poaddre31, #phonenjum").val('');
        $('input[name=parepairs]').prop('checked', false);//Uncheck buttons:Who will be paying for the repairs?
        $('select[name=poaddre3] option[value=0]').prop('selected', 'selected');//Uncheck Drop Down List
        $('#entireDisplay01').hide(); 
        $('.tradeDiv').show();
        $('#residques').hide('checked', false);
        $('#cardques').hide('checked', false);
        $('#cardques1').hide('checked', false);
        $(".mailService, .tradeDiv").show();//show the question "Who will be paying for the repairs?" 
    } else {
       $('#hno').attr('checked', false); 
       $('.offerOption').hide('checked', false);

   }
});
// for no checkbox
$('#hno').click(function() {
    if ($('#hno').is(':checked')) {
        $('label.ColorSel').removeClass('ColorSel'); 
        $(this).parent().addClass('ColorSel'); 
    	$('#residques').show();
    	$('.tradeDiv').hide();
    	$('#hyes').attr('checked', false);
    	$("#renOwn").show();//show the question "Who will be paying for the repairs?" 
   	} else {
       $('#hyes').attr('checked', false); 
    }
});

//question "Who will be paying for the repairs?"
$('#paren').click(function() {
    if ($('#paren').is(':checked')) {
    	$('#cardques').hide('checked', false); 
    	$('.tradeDiv').show();
    	$('#parown').attr('checked', false);
    	$('#cardques1').hide('checked', false);
   	} else {
       $('#parown').attr('checked', false); 
    }
});

//question "Who will be paying for the repairs?"
$('#parown').click(function() {
    if ($('#parown').is(':checked')) {
    	$('#cardques,.tradeDiv').show();
    	$('#paren').attr('checked', false);
    } else {
       $('#paren').attr('checked', false); 
    }
});

//question "Are you financial responsible for repairs?"
$('#fryes').click(function() {
    if ($('#fryes').is(':checked')) {
    	$('#cardques1').show();
    	$('#frno').attr('checked', false);
    	
   	} else {
       $('#frno').attr('checked', false); 
    }
});

$('#frno').click(function() {
    if ($('#frno').is(':checked')) {
    	$('#cardques1').hide('checked', false);
    	$('#fryes').attr('checked', false);
    } else {
       $('#fryes').attr('checked', false); 
    }
});



//this area is for question"Is your mailing and service address the same?"checked box area
//for yes
$('#yesm').click(function() {
    if ($('#yesm').is(':checked')) {
        $('label.ColorSel').removeClass('ColorSel'); 
        $(this).parent().addClass('ColorSel'); 
        $('#szip,#scity,#sstate,#saddress,#saddress1,#saddress2').val("");
        $('select[name=stroloc1] option[value=0]').prop('selected', 'selected');//Uncheck Drop Down List
        $('#smno').attr('checked', false);
        $('#mailing').hide('checked', false);
        $('#resiPackage').show();
    } else {
        $('#smno').attr('checked', false);
        $('#mailing').hide('checked', false);
        $('#resiPackage').hide('checked', false);
    } 
});

//for no
$('#smno').click(function() {
    if ($('#smno').is(':checked')) {
        $('#mailing').show();
        $('#yesm').attr('checked', false);
        $('#resiPackage').hide();
    } else {
       $('#yesm').attr('checked', false);
    }
});


//This is for question"Is unit operating now? checked box area
//for yes
$('#oyes').click(function() {
    if ($('#oyes').is(':checked')) {
        $('#noo').attr('checked', false);
        $('.IssueDiv1').show();
    } else {
        $('#noo').attr('checked', false);
    }
});
//for no
$('#noo').click(function() {
    if ($('#noo').is(':checked')) {
        $('#oyes').attr('checked', false);
        $('.IssueDiv1').show();
    } else {
        $('#oyes').attr('checked', false);
    }
});

//This is for sevice option
//Guaranteed on time or it is free for only
$('#gprice').click(function() {
        if ($('#gprice').is(':checked')) {
        	$('#fprice').attr('checked', false);
        	$(".timeAva").show();
        } else {
			$('#fprice').attr('checked', false);
			$(".timeAva").hide();
		}
});
//Super Saver flex schedule service only
$('#fprice').click(function() {
        if ($('#fprice').is(':checked')) {
        	$('#gprice').attr('checked', false);
        } else {
			$('#gprice').attr('checked', false);
        }
});
//This is for question"What day is best for you? 
//for today
$('#today').click(function() {
	 var dt = new Date();
	 var n = new Date();
	 //var tie = n-kav;  
        if ($('#today').is(':checked')) {
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
        	document.getElementById("tdate").value = dt.toLocaleDateString();
        	$("#disWeek").hide(); 
        	$("#timeSel").show();
        	$('#tdate').show();
        	$('#tomorrow').attr('checked', false);
        	$('#asap').attr('checked', false);
		} else {
		$('#tomorrow').attr('checked', false);
        	$('#asap').attr('checked', false);
        }
		button1();
});

//for today
$('#asap').click(function() {
	 var dt = new Date();
         // var n = new Date();
	 //var tie = n-kav;  
        if ($('#asap').is(':checked')) {
                $('label.ColorSel').removeClass('ColorSel'); 
                $(this).parent().addClass('ColorSel'); 
        	document.getElementById("tdate").value =dt.toLocaleDateString();
        	$("#disWeek").hide(); 
        	$("#timeSel").show();
        	$('#tdate').show();
        	$('#tomorrow').attr('checked', false);
        	$('#today').attr('checked', false);
        	$('#cardque').hide();
        } else {
			$('#tomorrow').attr('checked', false);
        	$('#today').attr('checked', false);
        	$('#cardque').hide();
        }
		button1();
});

$('#dow').click(function() {
    if ($(this).is(':checked')) {
        $('label.ColorSel').removeClass('ColorSel'); 
        $(this).parent().addClass('ColorSel'); 
        $("#disWeek").show(); 
    } else {
        $('#tomorrow').attr('checked', false);
        $('#today').attr('checked', false);
        $('#cardque').hide();
    }
		
});

//for asap
// $('#asap').click(function() {
//         if ($('#asap').is(':checked')) {
//         	$("#disWeek").hide();
//         	$('#today').attr('checked', false);
//         	$('#tomorrow').attr('checked', false);
//         } else {
// 			$('#today').attr('checked', false);
//         	$('#tomorrow').attr('checked', false);
//         }
// });

//for tommorrow
$('#tomorrow').click(function() {
	var serTom = new Date();
        serTom.setDate(serTom.getDate()+1);
	var te = (serTom.getMonth()+1) +'/' + serTom.getDate() + '/' + serTom.getFullYear();
	document.getElementById("tdate").value = te;
       if ($('#tomorrow').is(':checked')) {
         $('label.ColorSel').removeClass('ColorSel'); 
         $(this).parent().addClass('ColorSel'); 
    	switch (new Date().getDay()+ 1) {
         case 0:
           te = document.getElementById("sunday").checked = true;
           break;
         case 1:
           te = document.getElementById("monday").checked = true;
           break;
         case 2:
           te = document.getElementById("tuesday").checked = true;
           break;
         case 3:
           te = document.getElementById("wednesday").checked = true;
           break;
         case 4:
           te = document.getElementById("thursday").checked = true;
           break;
         case 5:
          te = document.getElementById("friday").checked = true;
          break;
         case  6:
          te = document.getElementById("saturday").checked = true;
          break;
       }
    	$('#disWeek').show();
        //$('#tdate,.tdate').hide();
        $("#timeSel").show();
        $('#today').attr('checked', false);
    	$('#asap').attr('checked', false);
    	$('#mor1,#mor2,#mor3').prop('checked', false);//morning
        $('#aft1,#aft2,#aft3').prop('checked', false);//afternoon
        $('#evn1,#evn2,#evn3').attr('checked', false);//evening
    } else{
    	//$('#dow').show();
        //$('#tdate').hide();
	$('#today').attr('checked', false);
    	$('#asap').attr('checked', false);
    	$('#mor1,#mor2,#mor3').prop('checked', false);//morning
        $('#aft1,#aft2,#aft3').prop('checked', false);//afternoon
        $('#evn1,#evn2,#evn3').attr('checked', false);//evening
    }
});



//This is for question "What time is best  for you?"
//for morning
$('#morning').click(function() {
    if ($('#morning').is(':checked')) {
        $('label.ColorSel').removeClass('ColorSel'); 
        $(this).parent().addClass('ColorSel'); 
    	$('#atimeHidden').hide();
    	$('#mtimeHidden').show();
    	$('#etimeHidden').hide();
       	$('#afternoon').attr('checked', false);
        $('#evening').attr('checked', false);
    } else {
	$('#afternoon').attr('checked', false);
        $('#evening').attr('checked', false);
	}
});
//Replacement  morning  radio button(Caller-Id)
$('#morning1').click(function() {
    if ($('#morning1').is(':checked')) {
    	$('#atimeHidden').hide();
    	$('#mtimeHidden').show();
    	$('#etimeHidden').hide();
       	$('#afternoon1').attr('checked', false);
        $('#evening1').attr('checked', false);
    } else {
        $('#afternoon1').attr('checked', false);
        $('#evening1').attr('checked', false);
    }

});
$('#afternoon').click(function() {
    if ($('#afternoon').is(':checked')) {
        $('label.ColorSel').removeClass('ColorSel'); 
        $(this).parent().addClass('ColorSel'); 
    	$('#atimeHidden').show();
    	$('#mtimeHidden').hide();
    	$('#etimeHidden').hide();
       	$('#evening').attr('checked', false);
       	$('#morning').attr('checked', false);
    } else {
        $('#evening').attr('checked', false);
       	$('#morning').attr('checked', false);
	}

});
//Replacemet radio button to show time avaiable(Caller-Id)
$('#afternoon1').click(function() {
    if ($('#afternoon1').is(':checked')) {
    	$('#atimeHidden').show();
    	$('#mtimeHidden').hide();
    	$('#etimeHidden').hide();
       	$('#evening1').attr('checked', false);
       	$('#morning1').attr('checked', false);
    } else {
	$('#evening1').attr('checked', false);
       	$('#morning1').attr('checked', false);
    }

});
//for evening caller id Page
$('#evening1').click(function() {
    if ($('#evening1').is(':checked')) {
    	$('#atimeHidden').hide();
    	$('#mtimeHidden').hide();
    	$('#etimeHidden').show();
       	$('#morning').attr('checked', false);
       	$('#afternoon').attr('checked', false);
    } else {
        $('#morning').attr('checked', false);
       	$('#afternoon').attr('checked', false);
    }

});
//Replacement radio to show time avaiable(Caller-Id)
$('#evening').click(function() {
    if ($('#evening').is(':checked')) {
        $('label.ColorSel').removeClass('ColorSel'); 
        $(this).parent().addClass('ColorSel'); 
    	$('#atimeHidden').hide();
    	$('#mtimeHidden').hide();
    	$('#etimeHidden').show();
       	$('#morning').attr('checked', false);
       	$('#afternoon').attr('checked', false);
    } else {
	$('#morning').attr('checked', false);
       	$('#afternoon').attr('checked', false);
	}

});
//This area is for credit card check box selection
//mastercard
$('#master').click(function() {
    if ($('#master').is(':checked')) {
        $('#visa').attr('checked', false);
        $('#american').attr('checked', false);
        $('#discover').attr('checked', false);
    } else {
        $('#visa').attr('checked', false);
        $('#american').attr('checked', false);
        $('#discover').attr('checked', false);
    }

});

//visa
$('#visa').click(function() {
    if ($('#visa').is(':checked')) {
        $('#creditcard').show();
        $('#master').attr('checked', false);
        $('#american').attr('checked', false);
        $('#discover').attr('checked', false);
    } else {
        $('#master').attr('checked', false);
        $('#american').attr('checked', false);
        $('#discover').attr('checked', false);
    }
});
//for american

$('#american').click(function() {
    if ($('#american').is(':checked')) {
        $('#creditcard').show();
        $('#master').attr('checked', false);
        $('#visa').attr('checked', false);
        $('#discover').attr('checked', false);
    } else {
        $('#master').attr('checked', false);
        $('#visa').attr('checked', false);
        $('#discover').attr('checked', false);

    }

});

$('#ensure1,#ensure2, #ensure3').click(function(){
    if ($('#ensure1,#ensure2,#ensure3').is(':checked')) {
        //$('#cal').show();
        $('#selectdays').show();
    } else {
        //$('#cal').hide();
        $('#selectdays').hide();

    }
});

//calendar Anyday radio
 $('#ensure4').click(function(){
	if ($('#ensure4').is(':checked')) {
            $('#cal').show();
            $('#mon,#tue, #wed, #sun,#thu, #sat').show();
            $('.two,.zero,.three,.four,.five,.one,.seven ').show();//hide tuesday column
	} else {
            $('#mon,#tue, #wed, #sun,#thu, #sat').show();
            $('.two,.zero,.three,.four,.five,.one,.seven').show();//hide tuesday column
	}
 });
//calendar Sunday radio
$('#sun').click(function(){
    if ($('#sun').is(':checked')) {
    	$('.zero').show();
    	$('#tue').attr('checked', false);
    	$('.two').hide();//hide tuesday column
    	$('#mon').attr('checked', false);
        $('.one').hide();
        $('#wed').attr('checked', false);
        $('.three').hide();
        $('#thu').attr('checked', false);
        $('.four').hide();
        $('#fri').attr('checked', false);
        $('.five').hide();
        $('#sat').attr('checked', false);
        $('.seven').hide();
   } else {
        $('#tue').attr('checked', false);
        $('.two').hide();//hide tuesday column
        $('#mon').attr('checked', false);
        $('.one').hide();
        $('#wed').attr('checked', false);
        $('.three').hide();
        $('#thu').attr('checked', false);
        $('.four').hide();
        $('#fri').attr('checked', false);
        $('.five').hide();
        $('#sat').attr('checked', false);
        $('.seven').hide();

    }
}); 
//calendar Monday radio
$('#mon').click(function(){
    if ($('#mon').is(':checked')) {
            $('.one').show();
            $('#sun').attr('checked', false);
            $('.zero').hide();//hide tuesday column
            $('#tue').attr('checked', false);
            $('.two').hide();
            $('#wed').attr('checked', false);
            $('.three').hide();
            $('#thu').attr('checked', false);
            $('.four').hide();
            $('#fri').attr('checked', false);
            $('.five').hide();
            $('#sat').attr('checked', false);
            $('.seven').hide();
	} else {
            $('#sun').attr('checked', false);
            $('.zero').hide();//hide tuesday column
            $('#tue').attr('checked', false);
            $('.two').hide();
            $('#wed').attr('checked', false);
            $('.three').hide();
            $('#thu').attr('checked', false);
            $('.four').hide();
            $('#fri').attr('checked', false);
            $('.five').hide();
            $('#sat').attr('checked', false);
            $('.seven').hide();
	}
}); 
//calendar Tuesday radio
$('#tue').click(function(){
    if ($('#tue').is(':checked')) {
            $('.two').show();//hide tuesday column
            $('#sun').attr('checked', false);
            $('.zero').hide();//hide tuesday column
            $('#mon').attr('checked', false);
            $('.one').hide();
            $('#wed').attr('checked', false);
            $('.three').hide();
            $('#thu').attr('checked', false);
            $('.four').hide();
            $('#fri').attr('checked', false);
            $('.five').hide();
            $('#sat').attr('checked', false);
            $('.seven').hide();
	} else {
            $('#sun').attr('checked', false);
            $('.zero').hide();//hide tuesday column
            $('#mon').attr('checked', false);
            $('.one').hide();
            $('#wed').attr('checked', false);
            $('.three').hide();
            $('#thu').attr('checked', false);
            $('.four').hide();
            $('#fri').attr('checked', false);
            $('.five').hide();
            $('#sat').attr('checked', false);
            $('.seven').hide();
	}
});
//calendar Wednesday radio
$('#wed').click(function(){
    if ($('#wed').is(':checked')) {
            $('.three').show();//hide tuesday column
            $('#sun').attr('checked', false);
            $('.zero').hide();//hide tuesday column
            $('#mon').attr('checked', false);
            $('.one').hide();
            $('#tue').attr('checked', false);
            $('.two').hide();
            $('#thu').attr('checked', false);
            $('.four').hide();
            $('#fri').attr('checked', false);
            $('.five').hide();
            $('#sat').attr('checked', false);
            $('.seven').hide();
	} else {
            $('#sun').attr('checked', false);
            $('.zero').hide();//hide tuesday column
            $('#mon').attr('checked', false);
            $('.one').hide();
            $('#tue').attr('checked', false);
            $('.two').hide();
            $('#thu').attr('checked', false);
            $('.four').hide();
            $('#fri').attr('checked', false);
            $('.five').hide();
            $('#sat').attr('checked', false);
            $('.seven').hide();
		
	}
});
//calendar Thursday radio
$('#thu').click(function(){
    if ($('#thu').is(':checked')) {
    	$('.four').show();//hide tuesday column
    	$('#sun').attr('checked', false);
    	$('.zero').hide();//hide tuesday column
        $('#mon').attr('checked', false);
        $('.one').hide();
        $('#tue').attr('checked', false);
        $('.two').hide();
        $('#wed').attr('checked', false);
        $('.three').hide();
        $('#fri').attr('checked', false);
        $('.five').hide();
        $('#sat').attr('checked', false);
        $('.seven').hide();
    } else {
        $('#sun').attr('checked', false);
        $('.zero').hide();//hide tuesday column
        $('#mon').attr('checked', false);
        $('.one').hide();
        $('#tue').attr('checked', false);
        $('.two').hide();
        $('#wed').attr('checked', false);
        $('.three').hide();
        $('#fri').attr('checked', false);
        $('.five').hide();
        $('#sat').attr('checked', false);
        $('.seven').hide();
    }
});

//calendar Friday radio
$('#fri').click(function(){
    if ($('#fri').is(':checked')) {
    	$('.five').show();//hide tuesday column
    	$('#sun').attr('checked', false);
    	$('.zero').hide();//hide tuesday column
        $('#mon').attr('checked', false);
        $('.one').hide();
        $('#tue').attr('checked', false);
        $('.two').hide();
        $('#wed').attr('checked', false);
        $('.three').hide();
        $('#thu').attr('checked', false);
        $('.four').hide();
        $('#sat').attr('checked', false);
        $('.seven').hide();
    } else {
        $('#sun').attr('checked', false);
        $('.zero').hide();//hide tuesday column
        $('#mon').attr('checked', false);
        $('.one').hide();
        $('#tue').attr('checked', false);
        $('.two').hide();
        $('#wed').attr('checked', false);
        $('.three').hide();
        $('#thu').attr('checked', false);
        $('.four').hide();
        $('#sat').attr('checked', false);
        $('.seven').hide();
    }
});

//calendar Saturday radio
$('#sat').click(function(){
    if ($('#sat').is(':checked')) {
    	$('.seven').show();//hide tuesday column
    	$('#sun').attr('checked', false);
    	$('.zero').hide();//hide tuesday column
        $('#mon').attr('checked', false);
        $('.one').hide();
        $('#tue').attr('checked', false);
        $('.two').hide();
        $('#wed').attr('checked', false);
        $('.three').hide();
        $('#thu').attr('checked', false);
        $('.four').hide();
        $('#fri').attr('checked', false);
        $('.five').hide();
    } else {
        $('#sun').attr('checked', false);
        $('.zero').hide();//hide tuesday column
        $('#mon').attr('checked', false);
        $('.one').hide();
        $('#tue').attr('checked', false);
        $('.two').hide();
        $('#wed').attr('checked', false);
        $('.three').hide();
        $('#thu').attr('checked', false);
        $('.four').hide();
        $('#fri').attr('checked', false);
        $('.five').hide();
    }
});


//$('#cal').show();
 //    $('.one').show();
	// $('#tue,#mon')show();
	// $('.two').show();//hide tuesday column

//for discover
$('#discover').click(function() {
    if ($('#discover').is(':checked')) {
		$('#creditcard').show();
		$('#master').attr('checked', false);
		$('#visa').attr('checked', false);
		$('#american').attr('checked', false);
	} else {
		$('#master').attr('checked', false);
		$('#visa').attr('checked', false);
		$('#american').attr('checked', false);
	}

});
//Question "How long has it not been operating?"(Replacement)
$("#dys, #wks, #yrs,#mths").click(function(){
	if ($('#dys').is(':checked')) {
		$('#dwyHide').show();
	} else if ($('#wks').is(':checked')){
		$('#dwyHide').show();
	} else if ($('#yrs').is(':checked')){
		$('#dwyHide').show();
	}else if ($('#mths').is(':checked')) {
		$('#dwyHide').show();
	} else {
		$('#dwyHide').hide();
	}
});
//Question "Is your current system Operating? no"(Replacement)
$("#sopert2").click(function(){
	if ($('#sopert2').is(':checked')) {
		$('#sopertHide').show();
		// $('#checkOut').show();
		$('#sopert1').attr('checked', false);
	} else {
		$('#sopertHide').hide();
		$('#sopert1').attr('checked', false);
	}
});
//Question "Is your current system Operating? --yes--"(Replacement)
$("#sopert1").click(function(){
	if ($('#sopert1').is(':checked')) {
		$('#sopertHide').hide('checked', false);
		// $('#checkOut').hide('checked', false);
		$('#sopert2').attr('checked', false);
	} else {
		$('#sopertHide').hide('checked', false);
		$('#sopert2').attr('checked', false);
		// $('#checkOut').hide('checked', false);
	}

});
//Question "Is your home all --gas--"(Replacement)
$("#iyhal1").click(function(){
	if ($('#iyhal1').is(':checked')) {
		$('.gtln').show();
		$('#iyhalHide').show();
		$('#iyhal2').attr('checked', false);
		$('#iyhalHide1').hide('checked', false);
		$('#ewb1, #ewb3, #esb1,#esb3').val("");
		
	} else {
		$('.gtln').hide();
		$('#iyhalHide').hide();
		$('#iyhal2').attr('checked', false);
		$('#iyhalHide1').hide('checked', false);
		$('#ewb1, #ewb3, #esb1,#esb3').val("");
	}
});
//Question "Is your home all --Electric--"(Replacement)
$("#iyhal2").click(function(){
	if ($('#iyhal2').is(':checked')) {
		$('#iyhalHide1').show();
		$('.gtln').hide('checked', false);
		$('#iyhal1').attr('checked', false);
		$('#iyhalHide').hide('checked', false);
		$('#ewb, #ewb2, #esb,#esb2').val("");
	} else {
		$('.gtln').hide('checked', false);
		$('#iyhal1').attr('checked', false);
		$('#iyhalHide').hide('checked', false);
		$('#ewb, #ewb2, #esb,#esb2').val("");
	}
});
//Question "Which area is least comfortable ?"(Replacement)
// $("#leastOther").click(function(){
// 	if ($('#leastOther').is(':checked')) {
// 		$('#least').show();
// 		$('#masterBed').attr('checked', false);
// 	} else {
// 		$('#least').hide();
// 		$('#masterBed').attr('checked', false);
// 	}
// });
//Question "Which area is least comfortable ?"(Replacement)
// $("#masterBed").click(function(){
// 	if ($('#masterBed').is(':checked')) {
// 		$('#leastOther').attr('checked', false);
// 		$('#least').hide('checked', false);
// 	} else {
// 		$('#leastOther').attr('checked', false);
// 		$('#least').hide('checked', false);
// 	}
// });
//Question "Which area is least comfortable ?"(Replacement)


// for page Service, and schedule service
$('#master30').click(function() {
    if ($('#master30').is(':checked')) {
    	$('#visa30').hide();
		$('#diner30').hide();
		$('#american30').hide();
		$('#discover30').hide();
	} else {
		$('#master30').show();
		$('#visa30').show();
		$('#american30').show();
		$('#diner30').show();
		$('#discover30').show();
	}

});

//This for  question "Is the credit card billing and mailing address the same?"
//yes
$('#syes').click(function() {
    if ($('#syes').is(':checked')) {
        $('#sno').attr('checked', false);
//        $('#dresz').val('');
        $('select[name=strloc2] option[value=0]').prop('selected', 'selected');//Uncheck Drop Down List
        $('#creditadd').hide('checked', false);
    } else {
        $('#sno').attr('checked', false);
        $('#creditadd').hide('checked', false);
    }
});

//no
$('#sno').click(function() {
    if ($('#sno').is(':checked')) {
        $('#creditadd').show();
        $('#syes').attr('checked', false);
    } else {
        $('#syes').attr('checked', false);
    }
}); 
//yes for page Caller id open invoice update date payment button
$('#syes1').click(function() {
    if ($('#syes1').is(':checked')) {
    	$('#invBilling').show();
		$('#sno1').attr('checked', false);
	} else {
		$('#sno1').hide('checked', false);
	}
});
//no for page Caller id open invoice update date payment button
$('#sno1').click(function() {
    if ($('#sno1').is(':checked')) {
    	$('#invBilling').hide('checked', false);
		$('#syes1').attr('checked', false);
	} else {
		$('#syes1').hide('checked', false);
		$('#invBilling').hide('checked', false);
	}
});

//This for question: "How do you planning taken care of repair? "
//debit
$('#debit').click(function() {
    if ($('#debit').is(':checked')) {
        $('label.ColorSel').removeClass('ColorSel'); 
        $(this).parent().addClass('ColorSel'); 
        $('#cc').attr('checked', false);
        $('#hwa').attr('checked', false);
        $('#warra').hide('checked', false);
        $('.deceHidden').show();
        $('.manfaDiv,.manfaDiv1 ').hide('checked', false);//hide the hidden div for Warranty Home and Brand
        $("#wa1,#wa2").prop('checked', false);//Text Before
    } else {
        $('#cc').attr('checked', false);
        $('#hwa').attr('checked', false);
        $('#warra').hide('checked', false);
        $('.manfaDiv,.manfaDiv1 ').hide('checked', false);//hide the hidden div for Warranty Home and Brand
        $("#wa1,#wa2").prop('checked', false);//Text Before
    }
});
//credit card
$('#cc').click(function() {
    if ($('#cc').is(':checked')) {
        $('label.ColorSel').removeClass('ColorSel'); 
        $(this).parent().addClass('ColorSel'); 
        $('#debit').attr('checked', false);
        $('#hwa').attr('checked', false);
        $('#warra').hide('checked', false);
        $('.deceHidden').show();
        $('#warra').hide('checked', false);
        $('.manfaDiv,.manfaDiv1 ').hide('checked', false);//hide the hidden div for Warranty Home and Brand
        $("#wa1,#wa2").prop('checked', false);//Unchecked radio buttons selections if Credit and Debit button checked
    } else {
        $('#debit').attr('checked', false);
        $('#hwa').attr('checked', false);
        $('#warra').hide('checked', false);
        $('.manfaDiv,.manfaDiv1 ').hide('checked', false);//hide the hidden div for Warranty Home and Brand
        $("#wa1,#wa2").prop('checked', false);//Unchecked radio buttons selections if Credit and Debit button checked
    }
});
//hwa
$('#hwa').click(function() {
    if ($('#hwa').is(':checked')) {
        $('label.ColorSel').removeClass('ColorSel'); 
        $(this).parent().addClass('ColorSel'); 
        $('#warra').show();
        $('#debit').attr('checked', false);
        $('#cc').attr('checked', false);
        $('.deceHidden').hide('checked', false);//hide the hidden div for Credit/Debit radio button selection
        $('.manfaDiv,.manfaDiv1 ').hide('checked', false);//hide the hidden div for Warranty Home and Brand
        $("#wa1,#wa2").prop('checked', false);//uncheck radio button if Warranty button is check
        $('input[name=rr0]').removeAttr('checked');//uncheck Debit/Card radio if Home Warranty is checked
    } else {
        $('#debit').attr('checked', false);
        $('#cc').attr('checked', false);
        $('.deceHidden').hide('checked', false);//hide the hidden div for Credit/Debit radio button selection
        $('.manfaDiv').hide('checked', false);//hide the hidden div for Warranty Home and Brand
        $('.manfaDiv,.manfaDiv1 ').hide('checked', false);//hide the hidden div for Warranty Home and Brand
        $('input[name=rr0]').removeAttr('checked');//uncheck Debit/Card radio if Home Warranty is checked
    }
});
//if warranty button is checked-- jquery event and method
//home--
$('#wa1').click(function() {
    if ($('#wa1').is(':checked')) {
        $('.manfaDiv').show();// Home Warranty
        $('.manfaDiv1').hide();// Brand Warranty
        $('#hwText').hide('checked', false);// Brand Warranty Textbox
        $('#wa2').attr('checked', false);
        $('.deceHidden').hide('checked', false);//hide Credit/Debit
        $('input[name=rr0]').removeAttr('checked');//uncheck Debit/Card radio if Home Warranty is checked
    } else {
        $('#wa2').attr('checked', false);
        $('.deceHidden').hide('checked', false);//hide Credit/Debit
        $('input[name=rr0]').removeAttr('checked');//uncheck Debit/Card radio if Home Warranty is checked
    }
});
//warranty 
$('#wa2').click(function() {
    if ($('#wa2').is(':checked')) {
        $('#hwText').show();// Brand Warranty Textbox
        $('.manfaDiv').hide();// Home Warranty
        $('#wa1').attr('checked', false);
        $('.deceHidden').hide('checked', false);//hide Credit/Debit
        $('input[name=rr0]').removeAttr('checked');//uncheck Debit/Card radio if Home Warranty is checked
    } else {
        $('#hwText').hide();// Brand Warranty Textbox
        $('.manfaDiv').hide();// Home Warranty
        $('#wa1').attr('checked', false);
        $('.deceHidden').hide('checked', false);//hide Credit/Debit
        $('input[name=rr0]').removeAttr('checked');//uncheck Debit/Card radio if Home Warranty is checked
    }
});
//Home warranty
$('input[name=company]').click(function() {
     $('.policyDiv').toggle();	
});
//brand for warranty
$('#brd1, #brd2, #brd3,#brd4,#brd5,#brd6').click(function() {
     if ($('#brd1, #brd2, #brd3,#brd4,#brd5,#brd6').is(':checked')) {
		$('.policyDiv').show();	
	} else {
		$('.policyDiv').hide();
	}	
});
//brand I don' Know
$('#brdIDK').click(function() {
    if ($('#brdIDK').is(':checked')) {
        $('.policyDiv').hide();
        $('.sedDiv').hide();
        $('#brd1, #brd2, #brd3,#brd4,#brd5,#brd6').attr('checked', false);
        $('#tunMessage1').text("Alert techician to gather the policy information upon arrival before starting");
    } else {
        $('.policyDiv').hide();
        $('.sedDiv').hide();
        $('#brd1, #brd2, #brd3,#brd4,#brd5,#brd6').attr('checked', false);
    }
});



//This for question"Would you like us to check your additional systems, they are only<input class="span1"type = "text" placeholder = "$29" />per system?"
//yes
$('#des').click(function() {
    if ($('#des').is(':checked')) {
		$('#syoption').show();
		$('#dd').attr('checked', false);
	} else {
		$('#dd').attr('checked', false);
	}
});
$('#des1').click(function() {
    if ($('#des1').is(':checked')) {
		$('#syoption1').show();
		$('#dd1').attr('checked', false);
	} else {
		$('#dd1').attr('checked', false);
	}
});
//no(Package)
$('#dd').click(function() {
    if ($('#dd').is(':checked')) {
		$('#syoption').hide('checked', false);
		$('#des').attr('checked', false);
	} else {
		$('#des').attr('checked', false);
		$('#syoption').hide('checked', false);
	}
});
//spilts system:
$('#dd1').click(function() {
    if ($('#dd1').is(':checked')) {
		$('#syoption1').hide('checked', false);
		$('#des1').attr('checked', false);
		$('#onal1').val('');
		document.getElementById('soption1').style.display = "none";
	} else {
		$('#des1').attr('checked', false);
		$('#syoption1').hide('checked', false);
		$('#onal1').val('');
	}
});
//this for book or lost call
//book
$('#ybook').click(function() {
    if ($('#ybook').is(':checked')) {
            $('label.ColorSel').removeClass('ColorSel'); 
            $(this).parent().addClass('ColorSel'); 
            $('#bookHidden').show();
            $('#lost').attr('checked', false);
            $('#reason').hide('checked', false);
            $('#subBut').prop('disabled', false);
	} else {
            $('#lost').attr('checked', false);
            $('#reason').hide('checked', false);
            $('#subBut').prop('disabled', false);
	}
});
//lost
$('#lost').click(function() {
        if ($('#lost').is(':checked')) {
            $('label.ColorSel').removeClass('ColorSel'); 
            $(this).parent().addClass('ColorSel'); 
            $('#ybook').attr('checked', false);
            $('#bookHidden').hide('checked', false);
            $('#reason').show();
            $('#subBut').prop('disabled', true);
	} else {
            $('#ybook').attr('checked', false);
            $('#bookHidden').hide('checked', false);
            $('#subBut').prop('disabled', false);
	}
});

//this for question "Update method of payment"
//for yes
$('#upy').click(function() {
    if ($('#upy').is(':checked')) {
		$('#crecarpddate').show();
		$('#upn').attr('checked', false);
		
	} else {
		$('#upn').attr('checked', false);
	}
});
//for no
$('#upn').click(function() {
    if ($('#upn').is(':checked')) {
		$('#crecarpddate').hide('checked', false);
		$('#upy').attr('checked', false);
		$('#creupddate3').hide('checked', false);
		$('#creupddat2').hide('checked', false);
	} else {
		$('#upy').attr('checked', false);
		$('#creupddate3').hide('checked', false);
		$('#creupddat2').hide('checked', false);
	}
});
//for debit for page""billing"
$('#lldebit').click(function() {
    if ($('#lldebit').is(':checked')) {
		$('#creupddat2').show();
		$('#llcc').attr('checked', false);
		$('#llcing').attr('checked', false);
		$('#creupddate3').hide('checked', false);
	} else {
		$('#llcc').attr('checked', false);
		$('#llcing').attr('checked', false);
		$('#creupddate3').hide('checked', false);
	}
});
//for Open Voice Detail debit
$('#lldebit2').click(function() {
    if ($('#lldebit2').is(':checked')) {
		$('#deceinfo').show();
		$('#llcc2').attr('checked', false);
		$('#llcing2').attr('checked', false);
		$('#bankInfo').hide('checked', false);
	} else {
		$('#llcc2').attr('checked', false);
		$('#llcing2').attr('checked', false);
		$('#bankInfo').hide('checked', false);
	}
});
//for Open Voice Detail credit
$('#llcc2').click(function() {
    if ($('#llcc2').is(':checked')) {
		$('#deceinfo').show();
		$('#lldebit2').attr('checked', false);
		$('#llcing2').attr('checked', false);
		$('#bankInfo').hide('checked', false);
	} else {
		$('#lldebit2').attr('checked', false);
		$('#llcing2').attr('checked', false);
		$('#bankInfo').hide('checked', false);
	}
});
//for Open Voice Detail Bank
$('#llcing2').click(function() {
    if ($('#llcing2').is(':checked')) {
        $('#bankInfo').show();
        $('#lldebit2').attr('checked', false);
        $('#llcc2').attr('checked', false);
        $('#deceinfo').hide('checked', false);
    } else {
        $('#lldebit2').attr('checked', false);
        $('#llcc2').attr('checked', false);
        $('#deceinfo').hide('checked', false);
    }
});
//for credit card for page""billing"
$('#llcc').click(function() {
    if ($('#llcc').is(':checked')) {
		$('#creupddat2').show();
		$('#lldebit').attr('checked', false);
		$('#llcing').attr('checked', false);
		$('#creupddate3').hide('checked', false);
	} else {
		$('#lldebit').attr('checked', false);
		$('#llcing').attr('checked', false);
		$('#creupddate3').hide('checked', false);
	}
});
//for checking for page "billing"
$('#llcing').click(function() {
    if ($('#llcing').is(':checked')) {
        $('#creupddate3').show();
        $('#lldebit').attr('checked', false);
        $('#llcc').attr('checked', false);
        $('#creupddat2').hide('checked', false);
    } else {
        $('#lldebit').attr('checked', false);
        $('#llcc').attr('checked', false);
        $('#creupddat2').hide('checked', false);
    }
});

$("#lldebit1").click(function(){
    $("#creupddat21").toggle();
}); 
$("#llcc1").click(function(){
    $("#creupddat21").toggle();
});
$("#llcing1").click(function(){
    $("#creupddate31").toggle();
});

//for caller id page
$('#pyesn').click(function() {
    if ($('#pyesn').is(':checked')) {
		$('#crecarpddate').show();
		$('#pnoy').attr('checked', false);
	} else {
		$('#pnoy').attr('checked', false);
	}
});

$('#pnoy').click(function() {
    if ($('#pnoy').is(':checked')) {
		$('#pyesn').attr('checked', false);
		$('#crecarpddate').hide('checked', false);
		$('#creupddate3').hide('checked', false);
		$('#creupddat2').hide('checked', false);
	} else {
		$('#pyesn').attr('checked', false);
		$('#crecarpddate').hide('checked', false);
		$('#creupddate3').hide('checked', false);
		$('#creupddat2').hide('checked', false);
	}
});

//for payment information --payment.html
//for credit card
$('#pcre').click(function() {
    if ($('#pcre').is(':checked')) {
		$('#creupddate').show();
		$('#pde').attr('checked', false);
	} else {
		$('#pde').attr('checked', false);
	}
});
//for debit card
$('#pde').click(function() {
    if ($('#pde').is(':checked')) {
		$('#creupddate').show();
		$('#pcre').attr('checked', false);
	} else {
		$('#pcre').attr('checked', false);
	}
});
//for question---financing-app.html
//question--which one applies
$('#rental').click(function() {
    if ($('#rental').is(':checked')) {
		$('#own').attr('checked', false);
		$('#buying').attr('checked', false);
		$('#reoption').show();
		$('#oboption').hide('checked', false);
	} else {
		$('#own').attr('checked', false);
		$('#buying').attr('checked', false);
		$('#oboption').hide('checked', false);
	}
});
// for own
$('#own').click(function() {
    if ($('#own').is(':checked')) {
		$('#oboption').show();
		$('#rental').attr('checked', false);
		$('#buying').attr('checked', false);
		$('#reoption').hide('checked', false);
	} else {
		$('#rental').attr('checked', false);
		$('#buying').attr('checked', false);
		$('#reoption').hide('checked', false);
	}
});

//for buying
$('#buying').click(function() {
	if ($('#buying').is(':checked')) {
		$('#oboption').show();
		$('#rental').attr('checked', false);
		$('#own').attr('checked', false);
		$('#reoption').hide('checked', false);
		
	} else {
		$('#rental').attr('checked', false);
		$('#own').attr('checked', false);
		$('#reoption').hide('checked', false);
		
	}
});

//for
//question "home type"
//for condo
$('#condo').click(function() {
    if ($('#condo').is(':checked')) {
		$('#townhouse').attr('checked', false);
		$('#manu').attr('checked', false);
		$('#site').attr('checked', false);
	} else {
		$('#townhouse').attr('checked', false);
		$('#manu').attr('checked', false);
		$('#site').attr('checked', false);
	}
});

//for townhouse
$('#townhouse').click(function() {
    if ($('#townhouse').is(':checked')) {
		$('#condo').attr('checked', false);
		$('#manu').attr('checked', false);
		$('#site').attr('checked', false);
	} else {
		$('#condo').attr('checked', false);
		$('#manu').attr('checked', false);
		$('#site').attr('checked', false);
	}
});

//for mobile
$('#manu').click(function() {
    if ($('#manu').is(':checked')) {
		$('#condo').attr('checked', false);
		$('#townhouse').attr('checked', false);
		$('#site').attr('checked', false);
	} else {
		$('#condo').attr('checked', false);
		$('#townhouse').attr('checked', false);
		$('#site').attr('checked', false);
	}
});
//for site
$('#site').click(function() {
    if ($('#site').is(':checked')) {
		$('#condo').attr('checked', false);
		$('#townhouse').attr('checked', false);
		$('#manu').attr('checked', false);
		
	} else {
		$('#condo').attr('checked', false);
		$('#townhouse').attr('checked', false);
		$('#manu').attr('checked', false);
	}
});

//for question "mailing address 
//same
$('#same').click(function() {
    if ($('#same').is(':checked')) {
		$('#different').attr('checked', false);
		$('#mailingAddress').hide('checked', false);
	} else {
		$('#different').attr('checked', false);
		$('#mailingAddress').hide('checked', false);
	}
});

//different
$('#different').click(function() {
    if ($('#different').is(':checked')) {
		$('#same').attr('checked', false);
		$('#mailingAddress').show();
	} else {
		$('#same').attr('checked', false);
		
	}
});

//for question "installion address"
$('#isame').click(function() {
    if ($('#isame').is(':checked')) {
		$('#idiff').attr('checked', false);
		$('#inAddress').hide('checked', false);
	} else {
		$('#idiff').attr('checked', false);
		$('#inAddress').hide('checked', false);
		
	}
});

//for different
$('#idiff').click(function() {
    if ($('#idiff').is(':checked')) {
		$('#inAddress').show();
		$('#isame').attr('checked', false);
	} else {
		$('#isame').attr('checked', false);
	}
});

// for co- applicant area
//yes
$('#coay').click(function() {
    if ($('#coay').is(':checked')) {
		$('#coan').attr('checked', false);
		$('#cpoption').show();
	} else {
		$('#coan').attr('checked', false);
	}
});

//for no
$('#coan').click(function() {
    if ($('#coan').is(':checked')) {
		$('#coay').attr('checked', false);
		$('#cpoption').hide('checked', false);
	} else {
		$('#coay').attr('checked', false);
		$('#cpoption').hide('checked', false);
	}
});

//other income (yes)
$('#income').click(function() {
    if ($('#income').is(':checked')) {
		$('.otcome').show();
		$('#incomeo').attr('checked', false);
	} else {
		$('#incomeo').attr('checked', false);
	}
});
//for income "no"
$('#incomeo').click(function() {
    if ($('#incomeo').is(':checked')) {
		$('#income').attr('checked', false);
		$('.otcome').hide('checked', false);
	} else {
		$('#income').attr('checked', false);
		$('.otcome').hide('checked', false);
	}
});
//for checking account
//yes
$('#ychecking').click(function() {
    if ($('#ychecking').is(':checked')) {
		$('#csacc').show();
		$('#nchecking').attr('checked', false);
	} else {
		$('#nchecking').attr('checked', false);
	}
});
//no
$('#nchecking').click(function() {
    if ($('#nchecking').is(':checked')) {
		$('#csacc').hide('checked', false);
		$('#ychecking').attr('checked', false);
	} else {
		$('#ychecking').attr('checked', false);
		$('#csacc').hide('checked', false);
	}
});

//for saving
//yes
$('#ysaving').click(function() {
    if ($('#ysaving').is(':checked')) {
		$('#csacc').show();
		$('#nsaving').attr('checked', false);
	} else {
		$('#nsaving').attr('checked', false);
	}
});
//no
$('#nsaving').click(function() {
    if ($('#nsaving').is(':checked')) {
		$('#csacc').hide('checked', false);
		$('#ysaving').attr('checked', false);
	} else {
		$('#ysaving').attr('checked', false);
		$('#csacc').hide('checked', false);
	}
});
//for questio "Have Applicant ever Declared Bankrupty:"
//yes
$('#yban').click(function() {
    if ($('#yban').is(':checked')) {
		$('#ruptoption').show();
		$('#nban').attr('checked', false);
	} else {
		$('#nban').attr('checked', false);
	}
});

//no
$('#nban').click(function() {
    if ($('#nban').is(':checked')) {
		$('#yban').attr('checked', false);
		$('#ruptoption').hide('checked', false);
	} else {
		$('#yban').attr('checked', false);
		$('#ruptoption').hide('checked', false);
	}
});
//for question"Is your gas or electronic?"
$('#gas').click(function() {
    if ($('#gas').is(':checked')) {
		$('#elegas').show();
	} else {
		$('#elegas').hide();
	}
});
$('#electric').click(function() {
    if ($('#electric').is(':checked')) {
		$('#gaseld').show();
	} else {
		$('#gaseld').hide();
	}
});

//for finiancing Application  page
//for co-applicatin selection 
//if yes is check show coption  display
$('#coay').click(function() {
    if ($('#coay').is(':checked')) {
		$('#coan').attr('checked', false);
		$('#cpoption').show();
	} else {
		$('#coan').attr('checked', false);
	}
});

//no
$('#coan').click(function() {
    if ($('#coan').is(':checked')) {
		$('#coay').attr('checked', false);
		$('#cpoption').hide('checked', false);
	} else {
		$('#coay').attr('checked', false);
	}
});

//for mailing selection 
//same
$('#asame').click(function() {
    if ($('#asame').is(':checked')) {
		$('#adiff').attr('checked', false);
		$('#diffemail').hide('checked', false);
	} else {
		$('#adiff').attr('checked', false);
		$('#diffemail').hide('checked', false);
	}
});
//different
$('#adiff').click(function() {
    if ($('#adiff').is(':checked')) {
		$('#asame').attr('checked', false);
		$('#diffemail').show();
	} else {
		$('#asame').attr('checked', false);
	}
});
//checking and saving selection
//checking (yes)
$('#ychecking1').click(function() {
    if ($('#ychecking1').is(':checked')) {
        $('#nchecking1').attr('checked', false);
        $('#csacc1').show();
    } else {
        $('#nchecking1').attr('checked', false);
    }
});

//checking (no)
$('#nchecking1').click(function() {
    if ($('#nchecking1').is(':checked')) {
        $('#ychecking1').attr('checked', false);
        $('#csacc1').hide('checked', false);
    } else {
        $('#ychecking1').attr('checked', false);
    }
});

//saving (yes)
$('#ysaving1').click(function() {
    if ($('#ysaving1').is(':checked')) {
        $('#nsaving1').attr('checked', false);
        $('#csacc1').show();
    } else {
        $('#nsaving1').attr('checked', false);
    }
});

//saving (no)
$('#nsaving1').click(function() {
    if ($('#nsaving1').is(':checked')) {
            $('#ysaving1').attr('checked', false);
            $('#csacc1').hide('checked', false);
	} else {
            $('#ysaving1').attr('checked', false);
	}
});

//for page Club Membership
 $('#pnay').click(function() {
    if ($('#pnay').is(':checked')) {
		$('#compinfo').show();
		$('#rseident').attr('checked', false);
		$('#residinfo').hide('checked', false);
	} else {
		$('#rseident').attr('checked', false);
		$('#residinfo').hide('checked', false);
	}
});
$('#rseident').click(function() {
    if ($('#rseident').is(':checked')) {
		$('#residinfo').show();
		$('#compnay').attr('checked', false);
		$('#compinfo').hide('checked', false);
	} else {
		$('#compnay').attr('checked', false);
		$('#compinfo').hide('checked', false);
	}
});
$('#crseident').click(function() {
    if ($('#crseident').is(':checked')) {
            $('#residinfo').show();
            $('#compinfo').show();
	} else {
            $('#residinfo').show();
            $('#compinfo').show();
	}
});

//for page "Reschedule Scheduled Service Appointment"
//if select all is check is while display check
//if uncheck it set it back to none
$('#cacheck').click(function(){
	 if ($('#cacheck').is(':checked')) {
	     $('.icon-ok').toggle();
	     $('#cacheck1').hide();
	      $('#cacheck2').hide();
	      $('#cacheck3').hide();
	     $('#cacheck4').hide();
	  }else{
	      $('.icon-ok').hide();
	      $('#cacheck1').show();
	      $('#cacheck2').show();
	      $('#cacheck3').show();
	      $('#cacheck4').show();
	  }
	});

$('#caheck').click(function(){
	 if ($('#cacheck').is(':checked')) {
	     $('#caheck1').attr('checked',true);
	     $('#caheck2').attr('checked',true);
	     $('#caheck3').attr('checked',true);
	     $('#caheck4').attr('checked',true);
	  }else {
	     $('#caheck1').attr('checked', true);
	     $('#caheck2').attr('checked', true);
	     $('#caheck3').attr('checked', true);
	     $('#caheck4').attr('checked', true);
	  }
});

/*this is for page Caller id if a service,replacment, schedule service.concern, reschedule and check  is select it will display offer and hide Location*/
//Service
$("#svice").click(function(){
   if($('#svice').is(':checked')){
    $("#ucpq").show();
    $(".exprsHide").show();//EXpress Service
    $("#sertHide").show();//Service Today
    $("#stHide").show();//Service Tomorrow superHide
    $("#superHide").show();//Super Saver
    $("#sdcHide").show();//Specfic Day 
    $("#tt2").hide('checked', false);//Schedule Service Hidden div
    $('.schHid').hide('checked', false);
    $(".sen").hide('checked', false);
    $("#blank").hide('checked', false);
    $('.hlhc').show();
    $('.ucpq1').show();
    $("#Locate_table").hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#schseselection").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#ssvice1").attr('checked', false);
    $("#reservHide").hide('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $("#dowHide").hide('checked', false);
    $('#ccelsc').hide('checked', false);
  } else {
    $("#blank").hide('checked', false);
    $("#Locate_table").hide('checked', false);
    $('.schHid').hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#schseselection").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#ssvice1").attr('checked', false);
    $("#reservHide").hide('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $("#dowHide").hide('checked', false);
    $('#ccelsc').hide('checked', false);
	}
});

//Replacement
$("#rvice").click(function(){
   if($('#rvice').is(':checked')){
    $("#tidasch").show();
    $('#dowHide').show();
    $('#tt2').show();
    $(".flex1").hide('checked', false);
    $("#blank").hide('checked', false);
    $(".exprsHide").hide('checked', false);;//EXpress Service
    $("#sertHide").hide('checked', false);;//Service Today
    $("#stHide").hide('checked', false);;//Service Tomorrow superHide
    $("#superHide").hide('checked', false);;//Super Saver  
    $("#sdcHide").hide('checked', false);;//Specfic Day
    $("#cancel").hide('checked', false);//Cancel Button
    // $("#tod").hide('checked', false);
    $("#Locate_table").hide('checked', false);
    $('.schHid').hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#schseselection").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#ssvice1").attr('checked', false);
    $("#reservHide").hide('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $('#ccelsc').hide('checked', false);
    
  } else{
    $(".exprsHide").hide('checked', false);//EXpress Service
    $("#sertHide").hide('checked', false);//Service Today
    $("#stHide").hide('checked', false);//Service Tomorrow superHide
    $("#superHide").hide('checked', false);//Super Saver  
    $("#sdcHide").hide('checked', false);//Specfic Day 
    $("#cancel").hide('checked', false);//Cancel Button
    $("#blank").hide('checked', false);
    $('#ccelsc').hide('checked', false);
    $("#Locate_table").hide('checked', false);
    $('.schHid').hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#schseselection").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#ssvice1").attr('checked', false);
    $("#reservHide").hide('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    
  }
});


//Concern
$("#boxch").click(function(){
   if($('#boxch').is(':checked')){
    $("#calconcer").show();
    $("#ucpq").show();
    $(".sen").show();
    $("#reservHide").hide('checked', false);
    $('#tod').hide('checked', false);
    $('#reschl').hide('checked', false);
    $(".exprsHide").show();//EXpress Service
    $("#sertHide").show();//Service Today
    $("#stHide").show();//Service Tomorrow superHide
    $("#superHide").show();//Super Saver
    $("#sdcHide").show();//Specfic Day 
    $("#tidasch").hide('checked', false);
    $('#dowHide').hide('checked', false);
    $('#tt2').hide('checked', false);
    $("#blank").hide('checked', false);
    $('#ccelsc').hide('checked', false);
    $("#Locate_table").hide('checked', false);
    $('.hlhc').hide('checked', false);
    $('.ucpq1').hide('checked', false);
    $('.schHid').hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#schseselection").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ssvice1").attr('checked', false);
    $("#reservHide").hide('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $("#dowHide").hide('checked', false);
    
  } else {
    $("#blank").hide('checked', false);
    $('#ccelsc').hide('checked', false);
    $("#Locate_table").hide('checked', false);
    $('.schHid').hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#schseselection").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#svice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#ssvice1").attr('checked', false);
    $("#reservHide").hide('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $("#dowHide").hide('checked', false);
    
  }
});

//Scheduled Service
$("#ssvice").click(function(){
   if($('#ssvice').is(':checked')){
    $("#schseselection").show();
    // $('.schHid').show();
    $('#dowHide').show();
    $('#reschl').hide('checked', false);
    $('#chDate4').hide('checked', false);
    $('#tod').hide('checked', false);
    $("#blank").hide('checked', false);
    $('#tt2').show();
    $('#ccelsc').show();
    $('#cancel').hide('checked', false);
    $('#sertHide').hide('checked', false);
    $('#stHide').hide('checked', false);
    $('#sdcHide').hide('checked', false);
    $("#Locate_table").hide('checked', false);
    $(".exprsHide").hide('checked', false);
    $("#superHide").hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#ucpq").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ssvice1").attr('checked', false);
    $("#reservHide").hide('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    
  } else {
    $('#reschl').hide('checked', false);
    $('#chDate4').hide('checked', false);
    $("#blank").hide('checked', false);
    $('#cancel').hide('checked', false);
    $("#Locate_table").hide('checked', false);
    $("#superHide").hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#ucpq").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ssvice1").attr('checked', false);
    $("#reservHide").hide('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    
  }
    
});

 //Rescheduled Service
$("#ssvice1").click(function(){
   if($('#ssvice1').is(':checked')){
    $("#reservHide").show();
    $('#tod').show();
    $(".todayHide").hide('checked', false);
    $('#tt2').hide('checked', false);
    $("#schseselection").hide('checked', false);
    $('#ccelsc').hide('checked', false);
    $('#reschl').show();
    $(".flex1").hide('checked', false);
    $("#blank").hide('checked', false);
    $('#dowHide').hide('checked', false);
    $("#Locate_table").hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $(".exprsHide").hide('checked', false);//EXpress Service
    $("#sertHide").hide('checked', false);//Service Today
    $("#stHide").hide('checked', false);//Service Tomorrow superHide
    $("#superHide").hide('checked', false);;//Super Saver  
    $("#sdcHide").hide('checked', false);//Specfic Day 
    $("#cancel").hide('checked', false);//Cancel Button
    
  } else {
    $('#ccelsc').hide('checked', false);
    $('#dowHide').hide('checked', false);
    $("#blank").hide('checked', false);
    $('#ccelsc').hide('checked', false);
    $("#schseselection").hide('checked', false);
    $("#Locate_table").hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $(".exprsHide").hide('checked', false);//EXpress Service
    $("#sertHide").hide('checked', false);//Service Today
    $("#stHide").hide('checked', false);//Service Tomorrow superHide
    $("#superHide").hide('checked', false);//Super Saver  
    $("#sdcHide").hide('checked', false);//Specfic Day 
    $("#cancel").hide('checked', false);//Cancel Button
   }
});
//Open Call Table Radio button  Reschedule service
//if this is clicked it show  hide div same as Reschedule Button
//locate on the AC Location table (Refer to #aclopen jquery function)
$(".openResch").click(function(){
    if($('.openResch').is(':checked')){
       $('#reservHide').show();
    } else{
      $('#reservHide').hide();
    }
	 
});
//Cancel
$(".openCancel").click(function(){
    if($('.openCancel').is(':checked')){
        $('#reservHide').hide();
    } else{
        $('#reservHide').show();
    }
});

//Caller Id Page (AC/Location table Open Call Column)
$("#aclOpen").click(function(){
   if($('#aclOpen').is(':checked')){
    $("#i3_table").show();
    $("#superHide").show();
    $("#reservHide").show();
    $("#reschl").show();
    $('#tod').show();
    $("#Locate_table").hide('checked', false);//Location Table
    $(".exprsHide").hide('checked', false);//EXpress Service
    $("#sertHide").hide('checked', false);//Service Today
    $("#stHide").hide('checked', false);//Service Tomorrow superHide
    $("#superHide").hide('checked', false);//Super Saver  
    $("#sdcHide").hide('checked', false);//Specfic Day 
    $("#cancel").hide('checked', false);//Cancel Button
    $("#blank").hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#ssvice1").attr('checked', false);
    $("#reservHide").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $("#dowHide").hide('checked', false);
    $(".exprsHide").show();//EXpress Service
    $("#sertHide").show();//Service Today
    $("#stHide").show();//Service Tomorrow superHide
    $("#superHide").show();//Super Saver  
    $("#sdcHide").show();//Specfic Day 
    $("#cancel").show();//Cancel Button
  } else {
    $("#blank").hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $("#dowHide").hide('checked', false);
    $(".exprsHide").show();//EXpress Service
    $("#sertHide").show();//Service Today
    $("#stHide").show();//Service Tomorrow superHide
    $("#superHide").show();//Super Saver  
    $("#sdcHide").show();//Specfic Day 
    $("#cancel").show();//Cancel Button
  }
});

//Caller Id Page (AC/Location table System Information Column)
$("#aclSyst").click(function(){
   if($('#aclSyst').is(':checked')){
    $("#i1_table").show();
    $("#superHide").hide('checked', false);
    $("#reservHide").hide('checked', false);
    $("#reschl").hide('checked', false);
    $('#tod').hide('checked', false);
    $("#reschl").attr('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $("#dowHide").hide('checked', false);
    $(".exprsHide").show();//EXpress Service
    $("#sertHide").show();//Service Today
    $("#stHide").show();//Service Tomorrow superHide
    $("#superHide").show();//Super Saver  
    $("#sdcHide").show();//Specfic Day 
    $("#cancel").show();//Cancel Button
   } else {
    $("#superHide").hide('checked', false);
    $("#reservHide").hide('checked', false);
    $("#reschl").hide('checked', false);
    $('#tod').hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $("#dowHide").hide('checked', false);
    $(".exprsHide").show();//EXpress Service
    $("#sertHide").show();//Service Today
    $("#stHide").show();//Service Tomorrow superHide
    $("#superHide").show();//Super Saver  
    $("#sdcHide").show();//Specfic Day 
    $("#cancel").show();//Cancel Button
   }
});


//Caller Id Page (AC/Location table History Column)
$("#aclHist").click(function(){
   if($('#aclHist').is(':checked')){
    $("#scall").show();
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $("#dowHide").hide('checked', false);
    $(".exprsHide").show();//EXpress Service
    $("#sertHide").show();//Service Today
    $("#stHide").show();//Service Tomorrow superHide
    $("#superHide").show();//Super Saver  
    $("#sdcHide").show();//Specfic Day 
    $("#cancel").show();//Cancel Button
   } else {
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $("#dowHide").hide('checked', false);
    $(".exprsHide").show();//EXpress Service
    $("#sertHide").show();//Service Today
    $("#stHide").show();//Service Tomorrow superHide
    $("#superHide").show();//Super Saver  
    $("#sdcHide").show();//Specfic Day 
    $("#cancel").show();//Cancel Button
   }
});

//Caller Id Page (AC/Location table Recommmended Work Column)
$("#aclRecom").click(function(){
   if($('#aclRecom').is(':checked')){
    $("#i2_table").show();
    $("#reservHide").hide('checked', false);
    $('#tod').hide('checked', false);
    $("#reschl").hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $("#dowHide").hide('checked', false);
    $(".exprsHide").show();//EXpress Service
    $("#sertHide").show();//Service Today
    $("#stHide").show();//Service Tomorrow superHide
    $("#superHide").show();//Super Saver  
    $("#sdcHide").show();//Specfic Day 
    $("#cancel").show();//Cancel Button
   } else {
    $("#reschl").hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#cvTime").attr('checked', false);
    $("#dowHide").hide('checked', false);
    $(".exprsHide").show();//EXpress Service
    $("#sertHide").show();//Service Today
    $("#stHide").show();//Service Tomorrow superHide
    $("#superHide").show();//Super Saver  
    $("#sdcHide").show();//Specfic Day 
    $("#cancel").show();//Cancel Button
   }
});

//Caller Id Page (AC/Location table Club Vist Column)
$("#cvTime").click(function(){
   if($('#cvTime').is(':checked')){
    $('#dowHide').show();
    $('#tt2').show();
    $('.flex1').hide('checked', false);
    $('#sdcHide').hide('checked', false);
    $('#sertHide').hide('checked', false);
    $('#stHide').hide('checked', false);
    $("#superHide").hide('checked', false);
    $(".exprsHide").hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#aclHist").attr('checked', false);
    $("#scall").hide('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
   } else {
    $('.flex1').hide('checked', false);
    $("#boxch").attr('checked', false);
    $("#calconcer").hide('checked', false);
    $("#rvice").attr('checked', false);
    $("#tidasch").hide('checked', false);
    $("#svice").attr('checked', false);
    $("#ucpq").hide('checked', false);
    $("#ssvice").attr('checked', false);
    $("#aclOpen").attr('checked', false);
    $("#i3_table").hide('checked', false);
    $("#aclSyst").attr('checked', false);
    $("#i1_table").hide('checked', false);
    $("#aclRecom").attr('checked', false);
    $("#i2_table").hide('checked', false);
    $('#sdcHide').hide('checked', false);
    $('#sertHide').hide('checked', false);
    $('#stHide').hide('checked', false);
   }
});
// //clear radio button  clearDis
// $("#clearDis").click(function(){
// 	if($(this).is(':checked')){
// 		$("#boxch").attr('disabled','');
// 	    // $("#rvice").attr('disabled','');
// 	    // $("#svice").attr('disabled','');
// 	    // $("#ssvice").attr('disabled','');
// 	} else {
//   		$("#boxch").attr('disabled','');
// 	    // $("#rvice").attr('disabled','');
// 	    // $("#svice").attr('disabled','');
// 	    // $("#ssvice").attr('disabled','');
//   	}
// });



$('.selroom').click(function(){
    if ($('.selroom').is(':checked')) {
    	// $("#tany").show();
    	$("#roare").show();
        $(".green").show();
        $("#room1").show();
        $(".word1").hide();
        $("#hidmes").show();
    } else {
        // $("#tany").hide();
        $("#roare").hide();
        $(".green").hide();
        $("#room1").hide();
        $(".word1").show();
        $("#hidmes").hide();
    }
  });
//Schedule Service radio button
$('#g2').click(function(){
    if ($('#g2').is(':checked')) {
    	$(".hi").show();
    	$("#homeselect").show();
    	$("#g3").attr('checked', false);
    	$(".replHide, .entireDisplay").show();
    	$("#g1").attr('checked', false);
    	$(".threeOffer,.replHide1,.warra").hide('checked', false);
    	$(".timeAva").hide('checked', false);
    	$("#g4").attr('checked', false);
    } else {
	$("#g3").attr('checked', false);
    	//$(".replHide").hide('checked', false);
    	$("#g1").attr('checked', false);
    	$(".threeOffer,.replHide1,.warra").hide('checked', false);
    	$("#g4").attr('checked', false); 
	}
  });
//Service radio button
$('#g1').click(function(){
    if ($('#g1').is(':checked')) {
    	$("#g3").attr('checked', false);
    	$(".replHide").hide('checked', false);
    	$("#g2").attr('checked', false);
    	$(".hi").hide('checked', false);
    	$("#g4").attr('checked', false);
    	$("#homeselect, #entireDisplay, .threeOffer").show(); 
    } else {
	$("#g3").attr('checked', false);
    	$(".replHide, .replHide1").hide('checked', false);
    	$("#g2").attr('checked', false);
    	$(".hi").hide('checked', false);
    	$("#g4").attr('checked', false);
	}
  });
//Replacement radio button
$('#g3').click(function(){
    if ($('#g3').is(':checked')) {
    	$(".replHide, .replHide1").show();
    	$("#homeselect").show();
    	$("#g2").attr('checked', false);
    	$(".hi").hide('checked', false);
    	$("#g1").attr('checked', false);
    	$(".threeOffer").hide('checked', false);
    	$("#g4").attr('checked', false);
     } else {
	$("#g2").attr('checked', false);
    	$(".hi").hide('checked', false);
    	$("#g1").attr('checked', false);
    	$(".threeOffer").hide('checked', false);
    	$("#g4").attr('checked', false);
	}
  });
//Maintenance radio button
$('#g4').click(function(){
    if ($('#g4').is(':checked')) {
    	$("#homeselect").show();
    	$("#g2").attr('checked', false);
    	$(".hi").hide('checked', false);
    	$("#g1").attr('checked', false);
    	$(".threeOffer").hide('checked', false);
    	$("#g3").attr('checked', false);
    	$(".replHide").hide('checked', false); 
     } else {
	$("#g2").attr('checked', false);
    	$(".hi").hide('checked', false);
    	$("#g1").attr('checked', false);
    	$(".threeOffer").hide('checked', false);
    	$("#g3").attr('checked', false);
    	$(".replHide").hide('checked', false);
	}
  });


$('#tableLocations tr').click(function(e) {
    $('#tableLocations tr').removeClass('highlighted');
    $(this).addClass('highlighted');
});

// $('input[name="matgee"]').on('change', function(){
//     if ($(this).val()=='mateagree') {
//         //change to "show update"
//          $("#alertdate").text("Maintance is Due");
//           $("#custnoti").text("Payment overdue");
// 	} 
// 	else  {
//        $("#alertdate").text("Pass due for Maintance");
        
//     }
// });

//for page "Caller id" concern button
// $("#cvice").click(function(){
//    if($('#cvice').is(':checked')){
//     $("#hcareag").show();
//     $("#calconcer").show();
//     $("#tableLocations").hide();
//   } else {
//   	$("#tableLocations").show();
//   	$("#calconcer").hide();
//   	$("#hcareag").hide();

//   }
// });
// $("#ssvice").click(function(){
//    if($('#ssvice').is(':checked')){
//     $("#schseselection").show(); 
//     $("#tableLocations").hide();
//   } else {
//   	$("#tableLocations").show();
//   	$("#schseselection").hide();
//   }
// });

	$("#madirect").click(function(){
            $("#maildir").toggle();
            $("#dropLoc").toggle();
	});
	$("#sorts").click(function(){
            $("#sortMail").show();
            $("#enpMail").hide();
	 });
	$("#envel").click(function(){
            $("#enpMail").show();
            $("#sortMail").hide();
	 });
	$("#papsizeg").click(function(){
            $("#sortMail1").show();
     	});
	
        $("#papsize").click(function(){
            $("#sortMail1").hide();
        });

	$("#invd").click(function(){
            $("#detailinvoice").toggle();
	}); 
	
        $("#linema").click(function(){
            $("#linkemail").toggle();
   	});
  
  	$("#upinv").click(function(){
            $("#unpaidin").toggle();
	}); 
  
 	$("#paupin").click(function(){
	   $("#payuda").toggle();
	});

 	$("#maryloca").click(function(){
	    $("#sumLocation").toggle();
	});

 	$("#mainhouse").click(function(){
	   $("#housmain").toggle();
	});
	$("#farmhouse").click(function(){
            $("#farmmain").toggle();
	});
	$("#officehouse").click(function(){
            $("#officemain").toggle();
	});
	$("#livinghouse").click(function(){
		$("#livingmain").toggle();
	});

	$("#displaycard").click(function(){
            $("#payuda").toggle();
	});

	$("#woHistory").click(function(){
            $("#history").toggle();
	});
	$("#butDetail").click(function(){
            $("#customerShow1").toggle();
        });
        
        $("#acheating").click(function(){
            $("#acTble").toggle();
            //$("#resiPackage").toggle();
	});
	//dropdown list for phone number(office)
	$("#offOption").click(function(){
            if ($('#offOption').is(':checked')) {
                $("#offText").show();
            } else {
                $("#offText").show();
            }
        });
    //dropdown list for phone number(home)
	$("#homeOption").click(function(){
            if ($('#homeOption').is(':checked')) {
                $("#offText").hide('checked', false);
            } else {
                $("#offText").hide('checked', false);
            }
        });
    //dropdown list for phone number(cell)
	$("#cellOption").click(function(){
            if ($('#ellOption').is(':checked')) {
                $("#offText").hide('checked', false);
            } else {
                $("#offText").hide('checked', false);
            }
        });

   
    //AC/Location (Warranty Column) Caller Id Page
    $("#aclWarr").click(function(){
       $("#tany").toggle();
    });
    //Location(s) table (Warranty Column) Caller Id Page
    $("#lhi").click(function(){
       $("#i4_table").toggle();
       $("#lhi").css({"background-color":"black"});
    });
    $("#OpenVbut").click(function(){
       $("#openV_table").toggle();
       $("#OpenVbut").css({"background-color":"black"});
    });
	$("#hbl").click(function(){
        $("#blank").toggle();
    });
    $("#hltab").click(function(){
        $("#Locate_table").toggle();
    });
    
    
    
	// $(".schseselection").click(function(){
 //       $("#schseselection").toggle();
       
	// });
    
    
    //Advertisting ddl --if one of of the option is check it will show the second row
    $(".secChoice").click(function(){
         if($('.secChoice').is(':checked')){
            $('select[name=secChoice1] option[value=0]').prop('selected', 'selected');
            $("#seconArea").show();
            $("#seconArea1").hide();
          } else {
                 $("#seconArea").hide();
                 $("#seconArea1").show();
         }
	});
	$(".secChoice1").click(function(){
	   if($('.secChoice1').is(':checked')){
		   $("#seconArea1").show();
		   $("#seconArea").hide();
		 } else {
		 	$("#seconArea1").hide();
		 	$("#seconArea").show();
		}
	});

//if update card is click type of card will be select to remove card and show the
	$("#master10").click(function(){
	   if($('#master10').is(':checked')){
		   $(".maste0").show();
		   $(".visa0").hide();
		   $(".amerin0").hide();
		   $(".disover0").hide();
		} else {
			$(".visa0").hide();
			$(".amerin0").hide();
			$(".disover0").hide();
		}
	});
	$("#visa10").click(function(){
	   if($('#visa10').is(':checked')){
		   $(".visa0").show();
		   $(".maste0").hide();
		   $(".amerin0").hide();
		   $(".disover0").hide();
		} else {
			$(".maste0").hide();
			$(".amerin0").hide();
			$(".disover0").hide();
		}
	});
	$("#american10").click(function(){
	   if($('#american10').is(':checked')){
	   	   $(".amerin0").show();
		   $(".visa0").hide();
		   $(".maste0").hide();
		   $(".disover0").hide();
		} else {
			$(".maste0").hide();
			$(".visa0").hide();
			$(".disover0").hide();
		}
	});
//        http://stackoverflow.com/questions/5215307/jquery-find-credit-card-type
	$("#discover10").click(function(){
	   if($('#discover10').is(':checked')){
	   	   $(".disover0").show();
	   	   $(".amerin0").hide();
		   $(".visa0").hide();
		   $(".maste0").hide();
		} else {
			$(".maste0").hide();
			$(".visa0").hide();
			$(".amerin0").hide();
		}
	});

//for modal card selection it  selection
$("#maste0").click(function(){
	   if($('#maste0').is(':checked')){
                $(".maste2").show();
                $(".visa2").hide();
                $(".amerin2").hide();
                $(".disover2").hide();
                $(".diner2").hide();
            } else {
                $(".visa2").hide();
                $(".amerin2").hide();
                $(".disover2").hide();
                $(".diner2").hide();
            }
	});

$("#visa0").click(function(){
	   if($('#visa0').is(':checked')){
	   	   $(".maste2").hide();
	   	   $(".visa2").show();
		   $(".amerin2").hide();
		   $(".disover2").hide();
		   $(".diner2").hide();
		} else {
		   $(".visa2").show();
		   $(".amerin2").hide();
		   $(".disover2").hide();
		   $(".maste2").hide();
		   $(".diner2").hide();
		}
	});

$("#amerin0").click(function(){
	   if($('#amerin0').is(':checked')){
	   	   $(".maste2").hide();
	   	   $(".visa2").hide();
		   $(".amerin2").show();
		   $(".disover2").hide();
		   $(".diner2").hide();
		} else {
		   $(".visa2").hide();
		   $(".amerin2").show();
		   $(".disover2").hide();
		   $(".maste2").hide();
		   $(".diner2").hide();
		}
	});

$("#disover0").click(function(){
	   if($('#disover0').is(':checked')){
	   	   $(".maste2").hide();
	   	   $(".visa2").hide();
		   $(".amerin2").hide();
		   $(".disover2").show();
		   $(".diner2").hide();
		} else {
		   $(".visa2").hide();
		   $(".amerin2").hide();
		   $(".disover2").show();
		   $(".maste2").hide();
		   $(".diner2").hide();
		}
	});

$("#diner0").click(function(){
	   if($('#diner0').is(':checked')){
	   	   $(".maste2").hide();
	   	   $(".visa2").hide();
		   $(".amerin2").hide();
		   $(".disover2").hide();
		   $(".diner2").show();
		   $('#shoCardT').val("Diner Card");
		} else {
		   $(".visa2").hide();
		   $(".amerin2").hide();
		   $(".disover2").hide();
		   $(".maste2").hide();
		   $(".diner2").show();
		   $('#shoCardT').val("Diner Card");
		}
	});


 //for table example location date if select all is check it will check all selection
 
 $("#allsle").click(function(){
   if($('#allsle').is(':checked')){
     $('.cliall').attr('checked',true);
     $('#houmain2').show();
     $('#farmain').show();
     $('#offiain').show();
     $('#beacain').show();

	} else {
  	 $('.cliall').attr('checked',false);
  	 $('#houmain2').hide();
  	 $('#farmain').hide();
     $('#offiain').hide();
     $('#beacain').hide();
   }
 });
$("#lomaca").click(function(){
   if($('#lomaca').is(':checked')){
     $('#houmain2').show();
   } else {
  	 $('#houmain2').hide();
  }
 });
$("#famaca").click(function(){
   if($('#famaca').is(':checked')){
     $('#farmain').show();
   } else {
  	 $('#farmain').hide();
  }
 });

$("#ofmaca").click(function(){
   if($('#ofmaca').is(':checked')){
     $('#offiain').show();
   } else {
  	 $('#offiain').hide();
  }
 });

$("#beamaca").click(function(){
   if($('#beamaca').is(':checked')){
     $('#beacain').show();
   } else {
  	 $('#beacain').hide();
  }
 });

$("#refund").click(function(){
   if($('#refund').is(':checked')){
     $('#boxes').show();
     $('#boxes1').show();
     $('#refundtable').show();
     $('#refundtype').show();
     $('#refundtypeL').show();
    } else {
  	 $('#boxes').hide();
     $('#boxes1').hide();
     $('#refundtable').hide();
     $('#refundtypeL').hide();
  }
 });


//Search Input count max
$('#intSearch').keyup(function () {
    var maxLen = 100;
    var s = $(this).val().length;
    if (s >= maxLen) {
        $('#inCount').text(' you have reached the limit');
    } else {
        var ih = maxLen - s;
        $('#inCount').text(ih + ' characters left');
    }
});


//for note (textarea)
$('#wordcount').text('1024 characters left');
$('#messpost').keyup(function () {
    var max = 1024;
    var len = $(this).val().length;
    if (len >= max) {
        $('#wordcount').text(' you have reached the limit');
    } else {
        var ch = max - len;
        $('#wordcount').text(ch + ' characters left');
    }
});
//for note (textarea lost button)
$('#wordcount1').text('1024 characters left');
$('#messpost1').keyup(function () {
    var max = 1024;
    var len = $(this).val().length;
    if (len >= max) {
        $('#wordcount1').text(' you have reached the limit');
    } else {
        var ch = max - len;
        $('#wordcount1').text(ch + ' characters left');
    }
});
//for Question"Special Parking"  (textarea)
$('#wordcount2').text('1024 characters left');
$('#messpost2').keyup(function () {
    var max = 1024;
    var len = $(this).val().length;
    if (len >= max) {
        $('#wordcount2').text(' you have reached the limit');
    } else {
        var ch = max - len;
        $('#wordcount2').text(ch + ' characters left');
    }
});//for Question"Special Access" (textarea)
$('#wordcount3, #wordcount4,#wordcount5,#wordcount7,#wordcount8,#wordcount9,#wordcount0,#wordcount01,#wordcount02, #wordcount03, #wordcount04,#wordcount05,#wordcount07, #wordcount08').text('1024 characters left');
$('#messpost3, #messpost4,#messpost5,#messpost7,#messpost8,#messpost9,#messpost0,#messpost01,#messpost02,#messpost03,#messpost04,#messpost05,#messpost07, #messpost00, #messpost08').keyup(function () {
    var max = 1024;
    var len = $(this).val().length;
    if (len >= max) {
        $('#wordcount3,#wordcount4,#wordcount5,#wordcount7,#wordcount8,#wordcount9,#wordcount0, #wordcount01,#wordcount02,#wordcount04,#wordcount03,#wordcount05,#wordcount07, #wordcount00').text(' you have reached the limit');
    } else {
        var ch = max - len;
        $('#wordcount3,#wordcount4,#wordcount5,#wordcount7,#wordcount8,#wordcount9,#wordcount0, #wordcount01,#wordcount02,#wordcount04,#wordcount03,#wordcount05,#wordcount07').text(ch + ' characters left');
    }
});
//for note (textarea lost button) also for frequently Ask Service
$('#wordcount2, #letterCou').text('1024 characters left');
$('#messpost2, #garNotes').keyup(function () {
    var max = 1024;
    var len = $(this).val().length;
    if (len >= max) {
        $('#wordcount2, #garNotes').text(' you have reached the limit');
    } else {
        var ch = max - len;
        $('#wordcount2, #garNotes').text(ch + ' characters left');
    }
});
//for First Name
$('#rodeocount').text('1024 characters left');
$('#rodeoList').keyup(function () {
    var max1 = 1024;
    var len1 = $(this).val().length;
    if (len1 >= max1) {
        $('#rodeocount').text(' you have reached the limit');
    } else {
        var ch1 = max1 - len1;
        $('#rodeocount').text(ch1 + ' characters left');
    }
});
//for Phone Number
$('#rodeocount1').text('1024 characters left');
$('#rodeo').keyup(function () {
    var max1 = 1024;
    var len1 = $(this).val().length;
    if (len1 >= max1) {
        $('#rodeocount1').text(' you have reached the limit');
    } else {
        var ch1 = max1 - len1;
        $('#rodeocount1').text(ch1 + ' characters left');
    }
});

//for Middle name
$('#rodeocount2').text('1024 characters left');
$('#rodeo1').keyup(function () {
    var max1 = 1024;
    var len1 = $(this).val().length;
    if (len1 >= max1) {
        $('#rodeocount2').text(' you have reached the limit');
    } else {
        var ch1 = max1 - len1;
        $('#rodeocount2').text(ch1 + ' characters left');
    }
});



//if update is click it will show label and input to enter
$("#updateE").click(function(){
   if($('#updateE').is(':checked')){
     $('#lbmail').show();
     $('#updemail').show();
   } else {
  	 $('#lbmail').hide();
     $('#updemail').hide();
  }
 });

// $("#addChart").click(function () { 

//     $("#tableLocations").each(function () {
       
//         var tds = '<tr>';
//         jQuery.each($('tr:last td', this), function () {
//             tds += '<td>' + $(this).html() + '</td>';
//         });
//         tds += '</tr>';
//         if ($('tbody', this).length > 0) {
//             $('tbody', this).append(tds);
//         } else {
//             $(this).append(tds);
//         }
//     });
// });

$("#cddChart").click(function(){
	 $("table tr input:checked").parents('tr').remove();
});


// var count = 0;
// var detail = $('#cont1').val();
// var detail1 = $('#cont2').val();
// $(".nameAd").click(function () { 
// 	$('#infoBox').show();
//    $("#customerShow1").append("<tr>" +"<td><input type = 'checkbox'></td>"
// 									  +"<td>" + detail.val() + "</td>" 
//                                       +"<td>" + detail1.val() + "</td>"
//                                       +"<td><a href='' class='edit'>Edit</a></td>" 
//                                       +"<td><span class='delete'><a href=''>View</a></span></td>" + "</tr>");
// });

// $(' .tab_row').click(function(){
//                 $(this).nextUntil('.tab_row').css('display', function(i,v){
//                     return this.style.display === 'table-row' ? 'none' : 'table-row';
//                 });
//           $('.tab_row1').show();

//    });

$('.cshowButton').click(function () {
        var val = $('.cont1').val();
        var val2 = $('.cont2').val();
        var val3 = $('.cont3').val();
        var val4 = $('.cont4').val();
        var val5 = $('.cont5').val();
        var val6 = $('.cont6').val();
        var val7 = $('.cont9').val();
        var val8 = $('.cont11');

        $('#customer_show').append('<tr class = "">' +'<td><input type = "checkbox"></td>' + '<td>' + val + '</td>' + '<td>' + val2 + '</td>' + '<td>' + val3 + '</td>' 
        	                      + '<td>' + val4 + '</td>'+'<td>'+ val5 +'</td>'+'<td>'+(val7 + '').concat($('.cont10').val() + ' ' + val8.find("option:selected").text() + ' ' + $('.cont12').val() + ', ' + $('.cont7').val() + ' '+ $('.cont8').val()+ ' ' +$('.cont6').val() ) 
        	                  +'</td>' +'<td><button type="button" class="editName btn btn-small btn-primary">Edit</button> <a class="btn btn-small btn-primary" href="#orderModal" role="button" data-toggle="modal">View</a></td>' +' </tr>');
        // val8.find("option:selected").text()
        // <td>" + (fname.find("option:selected").text() + ' ').concat(lname.find("option:selected").text()) + "</td>"
          $('.cont1').val('');
          $('.cont2').val('');
          $('.cont3').val('');
          $('.cont4').val('');
          $('.cont5').val('');
          $('.cont6').val('');
          $('.cont9').val('');
          $('.cont10').val('');
          $('.cont11').val('');
          $('.cont12').val('');
          $('#infoBox').hide();

});

$(".nameAd").click(function(){
	$('#infoBox').toggle();
});


// $(".editName").click(function(){
// 	$('#infoBox').toggle();
//  //    $('.cont1').val( $('.cont1').html());
	

// 	// if($('.nameAd').is(':checked')){
//  //     $('#infoBox').toggle();
//  //     $('.cont1').val( $('.cont1').html());
//  //   } else {
//  //   	$('.cont1').val( $('').html());
//  //   }
   
//  });
    
$(".nameRE").click(function(){
	 $("table tr input:checked").parents('tr').remove();
});

//for page market screen
//direct mail
$("#mialdir").click(function(){
   if($('#mialdir').is(':checked')){
     $('#dirmail').show();
   } else {
  	 $('#dirmail').hide();
   }
 });
//for phone number selection for cancel and modify club membership
//cancel club membership
$("#ancelcl").click(function(){
   if($('#ancelcl').is(':checked')){
     $('#phtypefo').show();
     $('#cmadtyr').show();
     $('#rmadtyr').show();
     $('#srsqeus').hide();
    } else {
  	 $('#phtypefo').hide();
     $('#cmadtyr').show();
     $('#rmadtyr').show();
     $('#srsqeus').hide();
    }
 });

$("#difymo").click(function(){
   if($('#difymo').is(':checked')){
     $('#phtypefo').show();
     $('#cmadtyr').show();
     $('#rmadtyr').show();
     $('#srsqeus').hide();
    } else {
  	 $('#phtypefo').hide();
     $('#cmadtyr').show();
     $('#rmadtyr').show();
     $('#srsqeus').hide();
    }
 });
//if either one of the checkbox is checked it show selection for question
//Are you the homeowner will be on pages Service, Reschedule and Replacement
$("#aythomew").click(function(){
   if($('#aythomew').is(':checked')){
     $('#phtypefo').show();
     $('#srsqeus').show();
     $('#cmadtyr').hide();
     $('#rmadtyr').hide();
    } else {
  	 $('#phtypefo').hide();
     $('#srsqeus').hide();
     $('#cmadtyr').hide();
     $('#rmadtyr').hide();
    }
 }); 
//admin script new page question selection
//phone number
$('#catalog').click(function() {
	if ($('#catalog').is(':checked')) {
		$('#phumber').show();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});
//first name
$('#efstN').click(function() {
	if ($('#efstN').is(':checked')) {
		$('#irstNa').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#lddress').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});
//middle name
$('#mnori').click(function() {
	if ($('#mnori').is(':checked')) {
		$('#miMane').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});
//last name
$('#tNameL').click(function() {
	if ($('#tNameL').is(':checked')) {
		$('#astName').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});
//Building Number
$('#dingNum').click(function() {
	if ($('#dingNum').is(':checked')) {
		$('#buiNumb').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});
//street name
$('#sreeNam').click(function() {
	if ($('#sreeNam').is(':checked')) {
		$('#treetNam').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});
//type of building
$('#ofbuid').click(function() {
	if ($('#ofbuid').is(':checked')) {
		$('#ypeo').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide()
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});

//Building Type Number
$('#uitynumb').click(function() {
	if ($('#uitynumb').is(':checked')) {
		$('#butype').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});
//Zip Code
$('#codez').click(function() {
	if ($('#codez').is(':checked')) {
		$('#zicoe').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});
//City
$('#citlocation').click(function() {
	if ($('#citlocation').is(':checked')) {
		$('#cityop').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});
//state
$('#tatesl').click(function() {
	if ($('#tatesl').is(':checked')) {
		$('#locstate').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();

	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});

//Text Number
$('#teNumbe').click(function() {
	if ($('#teNumbe').is(':checked')) {
		$('#extNum').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});
//Email Address
$('#eladdress').click(function() {
	if ($('#eladdress').is(':checked')) {
		$('#lddress').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});
//Company/Business
$('#combus').click(function() {
	if ($('#combus').is(':checked')) {
		$('#sCompany').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});

//Reason for Cancel
$('#recancel').click(function() {
	if ($('#recancel').is(':checked')) {
		$('#rCancel').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});

//Last Four Digits/SSN
$('#lafodig').click(function() {
	if ($('#lafodig').is(':checked')) {
		$('#foulas').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});

//Employee Id
$('#ployeedi').click(function() {
	if ($('#ployeedi').is(':checked')) {
		$('#loyeeId').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();$("#llcing1").click(function(){
    	$("#creupddate31").toggle();
});
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    } else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});
//Position
$('#iosp').click(function() {
	if ($('#iosp').is(':checked')) {
		$('#sition').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    } else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//Years of Experience
$('#ofyrar').click(function() {
	if ($('#ofyrar').is(':checked')) {
		$('#yoe').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    } else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
		
    }
});

//Estimated Time for Arrival
$('#tifoarri').click(function() {
	if ($('#tifoarri').is(':checked')) {
		$('#estorai').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//Date
$('#efrth').click(function() {
	if ($('#efrth').is(':checked')) {
		$('#thdob').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
    	$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    } else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
   		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//Time
$('#efrth1').click(function() {
	if ($('#efrth1').is(':checked')) {
		$('#timplacement').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
    	$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    } else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//Day
$('#efrth2').click(function() {
	if ($('#efrth2').is(':checked')) {
		$('#dayplacement').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    
    } else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//Invoice number
$('#berinvoi').click(function() {
	if ($('#berinvoi').is(':checked')) {
		$('#voinceNum').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    
    } else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});
//Job number
$('#ticker').click(function() {
	if ($('#ticker').is(':checked')) {
		$('#bojnumber').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    } else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();

    }
});

// work number(Admin Page)
// $('#').click(function() {
// 	if ($('#').is(':checked')) {
// 		$('#').show();
// 		$('#catalog').attr('checked', false);
// 		$('#phumber').hide();
// 		$('#efstN').attr('checked', false);
// 		$('#irstNa').hide();
// 		$('#mnori').attr('checked', false);
// 		$('#miMane').hide();
// 		$('#tNameL').attr('checked', false);
// 		$('#astName').hide();
// 		$('#dingNum').attr('checked', false);
// 		$('#buiNumb').hide();
// 		$('#sreeNam').attr('checked', false);
// 		$('#treetNam').hide();
// 		$('#ofbuid').attr('checked', false);
// 		$('#ypeo').hide();
// 		$('#uitynumb').attr('checked', false);
// 		$('#butype').hide();
// 		$('#codez').attr('checked', false);
// 		$('#zicoe').hide();
// 		$('#citlocation').attr('checked', false);
// 		$('#cityop').hide();
// 		$('#tatesl').attr('checked', false);
// 		$('#locstate').hide();
// 		$('#teNumbe').attr('checked', false);
// 		$('#extNum').hide();
// 		$('#eladdress').attr('checked', false);
// 		$('#lddress').hide();
// 		$('#combus').attr('checked', false);
// 		$('#sCompany').hide();
// 		$('#recancel').attr('checked', false);
// 		$('#rCancel').hide();
// 		$('#lafodig').attr('checked', false);
// 		$('#foulas').hide();
// 		$('#ployeedi').attr('checked', false);
// 		$('#loyeeId').hide();
// 		$('#iosp').attr('checked', false);
// 		$('#sition').hide();
// 		$('#ofyrar').attr('checked', false);
// 		$('#yoe').hide();
// 		$('#tifoarri').attr('checked', false);
// 		$('#estorai').hide();
// 		$('#efrth').attr('checked', false);
// 		$('#thdob').hide();
// 		$('#efrth').attr('checked', false);
// 		$('#thdob').hide();
// 		$('#efrth1').attr('checked', false);
// 		$('#timplacement').hide();
// 		$('#efrth2').attr('checked', false);
// 		$('#dayplacement').hide();
// 		$('#berinvoi').attr('checked', false);
// 		$('#voinceNum').hide();
// 		$('#ticker').attr('checked', false);
// 		$('#bojnumber').hide();
// 		$('#kwNumber').attr('checked', false);
// 		$('#cuworknu').hide();
// 		$('#conamount').attr('checked', false);
// 		$('#cusamount').hide();
// 		$('#pecordts').attr('checked', false);
// 		$('#sadderparts').hide();
// 		$('#uc').attr('checked', false);
// 		$('#unConcern').hide();
// 		$('#eua').attr('checked', false);
// 		$('#nerco1').hide();
// 		$('#nosih').attr('checked', false);
// 		$('#systHome').hide();
// 		$('#bricks').attr('checked', false);
// 		$('#palce').hide();
// 		$('#hraeout').attr('checked', false);
// 		$('#adver').hide();
// 		$('#wtig').attr('checked', false);
// 		$('#inhome').hide();
//     } else {
// 		$('#catalog').attr('checked', false);
// 		$('#phumber').hide();
// 		$('#efstN').attr('checked', false);
// 		$('#irstNa').hide();
// 		$('#mnori').attr('checked', false);
// 		$('#miMane').hide();
// 		$('#tNameL').attr('checked', false);
// 		$('#astName').hide();
// 		$('#dingNum').attr('checked', false);
// 		$('#buiNumb').hide();
// 		$('#sreeNam').attr('checked', false);
// 		$('#treetNam').hide();
// 		$('#uitynumb').attr('checked', false);
// 		$('#butype').hide();
// 		$('#codez').attr('checked', false);
// 		$('#zicoe').hide();
// 		$('#citlocation').attr('checked', false);
// 		$('#cityop').hide();
// 		$('#tatesl').attr('checked', false);
// 		$('#locstate').hide();
// 		$('#teNumbe').attr('checked', false);
// 		$('#extNum').hide();
// 		$('#eladdress').attr('checked', false);
// 		$('#lddress').hide();
// 		$('#combus').attr('checked', false);
// 		$('#sCompany').hide();
// 		$('#recancel').attr('checked', false);
// 		$('#rCancel').hide();
// 		$('#lafodig').attr('checked', false);
// 		$('#foulas').hide();
// 		$('#ployeedi').attr('checked', false);
// 		$('#loyeeId').hide();
// 		$('#iosp').attr('checked', false);
// 		$('#sition').hide();
// 		$('#ofyrar').attr('checked', false);
// 		$('#yoe').hide();
// 		$('#efrth').attr('checked', false);
// 		$('#thdob').hide();
// 		$('#efrth').attr('checked', false);
// 		$('#thdob').hide();
// 		$('#efrth1').attr('checked', false);
// 		$('#timplacement').hide();
// 		$('#efrth2').attr('checked', false);
// 		$('#dayplacement').hide();
// 		$('#berinvoi').attr('checked', false);
// 		$('#voinceNum').hide();
// 		$('#kwNumber').attr('checked', false);
// 		$('#cuworknu').hide();
// 		$('#conamount').attr('checked', false);
// 		$('#cusamount').hide();
// 		$('#pecordts').attr('checked', false);
// 		$('#sadderparts').hide();
// 		$('#uc').attr('checked', false);
// 		$('#unConcern').hide();
// 		$('#eua').attr('checked', false);
// 		$('#nerco1').hide();
// 		$('#nosih').attr('checked', false);
// 		$('#systHome').hide();
// 		$('#bricks').attr('checked', false);
// 		$('#palce').hide();
// 		$('#hraeout').attr('checked', false);
// 		$('#adver').hide();
// 		$('#wtig').attr('checked', false);
// 		$('#inhome').hide();
// 	}
// });

// work number(Admin Page)
$('#kwNumber').click(function() {
	if ($('#kwNumber').is(':checked')) {
		$('#cuworknu').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	}
});

// Amount(Admin Page)
$('#conamount').click(function() {
	if ($('#conamount').is(':checked')) {
		$('#cusamount').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

// Special Order Parts(Admin Page)
$('#pecordts').click(function() {
	if ($('#pecordts').is(':checked')) {
		$('#sadderparts').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

// Unit Concern Parts(Admin Page)
$('#uc').click(function() {
	if ($('#uc').is(':checked')) {
		$('#unConcern').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

// Estimate Unit Age(Admin Page)
$('#eua').click(function() {
	if ($('#eua').is(':checked')) {
		$('#nerco1').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

// Number of System in Home(Admin Page)
$('#nosih').click(function() {
	if ($('#nosih').is(':checked')) {
		$('#systHome').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//Type of business(Admin Page)
$('#bricks').click(function() {
	if ($('#bricks').is(':checked')) {
		$('#palce').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//How did you hear about us(Admin Page)
$('#hraeout').click(function() {
	if($('#hraeout').is(':checked')) {
		$('#adver').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teinhomeNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//What type of gas is being used(Admin Page)
$('#wtig').click(function() {
	if($('#wtig').is(':checked')) {
		$('#inhome').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teinhomeNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//What day is best for you?(Admin Page)
$('#daweek').click(function() {
	if($('#daweek').is(':checked')) {
		$('#avaia').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teinhomeNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//What time is best for you?(Admin Page)
$('#daweek1').click(function() {
	if($('#daweek1').is(':checked')) {
		$('#avaia1').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teinhomeNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//Will you be using master, visa,american, discover or diner card?(Admin Page)
$('#caPayment').click(function() {
	if($('#caPayment').is(':checked')) {
		$('#methpay').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teinhomeNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
		
    }
});

//Should system require repairs,how will you be paying?(Admin Page)
$('#reqairs').click(function() {
	if($('#reqairs').is(':checked')) {
		$('#rer').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teinhomeNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//Booking(Admin Page)
$('#ayth1').click(function() {
	if($('#ayth1').is(':checked')) {
		$('#endPage').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teinhomeNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//Lost(Admin Page)
$('#ayth2').click(function() {
	if($('#ayth2').is(':checked')) {
		$('#endPage1').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teinhomeNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#brandp').attr('checked', false);
		$('#rebrand').hide();
    }
});

//Brand Prefer(Admin Page)
$('#brandp').click(function() {
	if($('#brandp').is(':checked')) {
		$('#rebrand').show();
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#bojnumber').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#ofbuid').attr('checked', false);
		$('#ypeo').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#bojnumber').hide();
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#tifoarri').attr('checked', false);
		$('#estorai').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#ticker').attr('checked', false);
		$('#bojnumber').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#nosih').attr('checked', false);
		$('#systHome').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
	} else {
		$('#catalog').attr('checked', false);
		$('#phumber').hide();
		$('#efstN').attr('checked', false);
		$('#irstNa').hide();
		$('#mnori').attr('checked', false);
		$('#miMane').hide();
		$('#tNameL').attr('checked', false);
		$('#astName').hide();
		$('#dingNum').attr('checked', false);
		$('#buiNumb').hide();
		$('#sreeNam').attr('checked', false);
		$('#treetNam').hide();
		$('#uitynumb').attr('checked', false);
		$('#butype').hide();
		$('#codez').attr('checked', false);
		$('#zicoe').hide();
		$('#citlocation').attr('checked', false);
		$('#cityop').hide();
		$('#tatesl').attr('checked', false);
		$('#locstate').hide();
		$('#teinhomeNumbe').attr('checked', false);
		$('#extNum').hide();
		$('#eladdress').attr('checked', false);
		$('#lddress').hide();
		$('#combus').attr('checked', false);
		$('#sCompany').hide();
		$('#recancel').attr('checked', false);
		$('#rCancel').hide();
		$('#lafodig').attr('checked', false);
		$('#foulas').hide();
		$('#ployeedi').attr('checked', false);
		$('#loyeeId').hide();
		$('#iosp').attr('checked', false);
		$('#sition').hide();
		$('#ofyrar').attr('checked', false);
		$('#yoe').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth').attr('checked', false);
		$('#thdob').hide();
		$('#efrth1').attr('checked', false);
		$('#timplacement').hide();
		$('#efrth2').attr('checked', false);
		$('#dayplacement').hide();
		$('#berinvoi').attr('checked', false);
		$('#voinceNum').hide();
		$('#kwNumber').attr('checked', false);
		$('#cuworknu').hide();
		$('#conamount').attr('checked', false);
		$('#cusamount').hide();
		$('#pecordts').attr('checked', false);
		$('#sadderparts').hide();
		$('#uc').attr('checked', false);
		$('#unConcern').hide();
		$('#eua').attr('checked', false);
		$('#nerco1').hide();
		$('#bricks').attr('checked', false);
		$('#palce').hide();
		$('#hraeout').attr('checked', false);
		$('#adver').hide();
		$('#wtig').attr('checked', false);
		$('#inhome').hide();
		$('#daweek').attr('checked', false);
		$('#avaia').hide();
		$('#daweek1').attr('checked', false);
		$('#avaia1').hide();
		$('#caPayment').attr('checked', false);
		$('#methpay').hide();
		$('#reqairs').attr('checked', false);
		$('#rer').hide();
		$('#ayth1').attr('checked', false);
		$('#endPage').hide();
		$('#ayth2').attr('checked', false);
		$('#endPage1').hide();
    }
});

//$('#textNum').mask('99/99/9999');
$('#ccnum').mask('9999 9999 9999 9999');
$('#expdate').mask('99/9999');
$('#idate').mask('99/9999');
$('#isdate').mask('9999');
$('#isdate1').mask('9999');
//$('#cTherm1').mask('9999');
// $('#tsetat1').mask('9999');
//$('#yeNum1').mask('9999');
//$('#odu1').mask('9999');
//$('#igGas1').mask('9999');
$('#furanceGas1').mask('9999');
$('#coilGas1').mask('9999');
$('#hgeYear').mask('9999');
$('#ouit1').mask('9999');
$('#ingas1').mask('9999');
$('#agefurn1').mask('9999');
$('#gcoil1').mask('9999');
$('#gT1').mask('9999');
$('#htou1').mask('9999');
$('#hine1').mask('9999');
// $('#ehText').mask('999');
//$('#sdte').mask('99/99/9999');
$('#edte').mask('99/99/9999');
$('#inpho').mask('999 999 9999');
$('#cusinpho').mask('999 999 9999');








// $('#ybook').click(function(){
//        var number = 1 + Math.floor(Math.random() * 99999);
//         $('#gnumber').text(number); 

//        //first name
//        var fname = document.getElementById('fname').value;
//        $('#shoFirst').text(fname); 

//        //last name
//        var lname = document.getElementById('lname').value;
//        $('#shoLast').text(lname);

//        //Number of resident
//        var sh1 = document.getElementById('address').value;
//        $('#shoANum').text(sh1);
       
//        //street name
//        var sh2 = document.getElementById('address1').value;
//        $('#shoStre').text(sh2);

//        //build type
//        var sh3 = document.getElementById('address3').value;
//        $('#shoPNum').text(sh3);
       
//        //zip
//        var sh4 = document.getElementById('zip').value;
//        $('#shoZip').text(sh4);

//        //state
//        var sh5 = document.getElementById('city').value;
//        $('#shoCity').text(sh5);

//        //t
//        var sh7 = document.getElementById('state').value;
//        $('#shoState').text(sh7);

//        //Number of system
//        var sh8 = document.getElementById('agenum').value;
//        $('#shoAge').text(sh8);

//        //show ccv
//        var sh9 = document.getElementById('ccv').value;
//        $('#shoCCV').text(sh9);

//        //show expire date for credit card
//        var sh10 = document.getElementById('expdate').value;
//        $('#shoEP').text(sh10);

//      	//show number of systems
//      	var sh11 = document.getElementById('agenum').value;
//        $('#shoAge').text(sh11);

// 		var otherInput = document.getElementById('conOther').value;
//         $('#shoConcern').text(otherInput);

// 	//Credit card to display first nine number and show last four digit
//        var cardN = document.getElementById('ccnum').value;
//        $('#shoCard').text(cardN); 
//        $("#shoCard").text($("#shoCard").text().replace(/.(?=.{4})/g, 'x'));
// });


	//show building type
	$('#apartment').click(function() {
    	$('#shoBuid').text("Apartment");
	});
	$('#suite').click(function() {
    	$('#shoBuid').text("Suite");
	});
	$('#noneT').click(function() {
    	$('#shoBuid').text("");
	});

	//show Concern Unit
	// $('#cooling').click(function() {
 //    	$('.shoConcern').text(" Not Cooling");
	// });
	$('#heating').click(function() {
    	$('.shoConcern').text(" Not Heating");
	});
	$('#frozen').click(function() {
    	$('.shoConcern').text("Frozen");
	});
	$('#water').click(function() {
    	$('.shoConcern').text("Water Link");
	});
	$('#rnc').click(function() {
    	$('.shoConcern').text("Room Not Cooling");
	});
	$('#ssg').click(function() {
    	$('.shoConcern').text("Smell Smoke or Gas");
	});
	$('#cmd').click(function() {
    	$('.shoConcern').text("Carbon Monoxide Detector");
	});
	$('#fbs').click(function() {
    	$('.shoConcern').text("Furance Booming Sound");
	});
	$('#Gashpf').click(function() {
    	$('.shoConcern').text("Heat Pump Has Frost");
	});
	$('#none').click(function() {
    	$('.shoConcern').text("None");
	});
	$('#diner0').click(function() {
    	$('#shoCardT').text("Diner Club");
	});
	$('#maste0').click(function() {
    	$('#shoCardT').text("Master Card");
	});
	$('#visa0').click(function() {
    	$('#shoCardT').text("Visa");
	});
	$('#amerin0').click(function() {
    	$('#shoCardT').text("American Express");
	});
	$('#disover0').click(function() {
    	$('#shoCardT').text("Discover");
	});
	$('#aprice').click(function() {
    	$('#shoFee').text("$129");
	});
	$('#gprice').click(function() {
    	$('#shoFee').text("$50");
	});
	$('#fprice').click(function() {
    	$('#shoFee').text("$100");
	});

    $("#ohi").click(function () {
		if ($(this).is(":checked")) {
        	$('#ohi1').show();
         } else{
        	$('#ohi1').hide();
        }
     });

$('#pextra, #pho1, #fname, #lname, #email,#media, #event, #residential,#religious,#muilti, #builtDDL, #pan, #cLP, #mp1, #mp2').tooltip();
$('#contractButton, #addEmail, #internet, #refer, #van, #toma,#soon, #alliance, #business, #industial,#cInc, #cLLc, #bzip, #bbuiling').tooltip();
$('#package,#spilt,#evpgo, #gomal, #misplit, #idk, #sticker, #dhanger, #otherd, #educational, #builtAdd, #bstreet, #sanText,#bDDL,#busLease, #owOccup').tooltip();
$('#szip, #domain, #email1, #zip, #address, #address1,.select4, #strloc, #same, #choice2, #techBoth').tooltip();
$('#fnBusin, #lnBusin, #phBusin, #trade0, #trade1, #trade2, #trade3, #trade4,#trade5, #bnYes, #bnNo').tooltip();
       //email option
	$("#eyahoo").click(function (){
            if ($(this).is(":checked")) {
                $('select[name=domain] option[value=com]').prop('selected', 'selected');
	       		$('#emailc').val("yahoo");
	       	} else{
                $('select[name=domain] option[value=com]').prop('selected', 'selected');
	       		$('#emailc').val("");
	       	}
        });
        //hotmail
       $("#ehotmail").click(function () {
	       	if ($(this).is(":checked")) {
                    // $('select[name=yghyo] option[value=hotmail]').prop('selected', 'selected');
                    $('select[name=domain] option[value=com]').prop('selected', 'selected');
                    $('#emailc').val("hotmail");
                    // $('#yghHidden').hide();
                    // $('#yghText').val("");
                    // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
	        } else {
                    $('select[name=domain] option[value=com]').prop('selected', 'selected');
                    $('#emailc').val("");
                    // $('select[name=yghyo] option[value=hotmail]').prop('selected', 'selected');
                    // $('select[name=yghyo] option[value=hotmail]').prop('selected', 'selected');
                    // $('#yghHidden').hide();
                    // $('#yghText').val("");
                    // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, go
                }
	});
       //gmail
       $("#egmail").click(function () {
            if ($(this).is(":checked")) {
                // $('select[name=yghyo] option[value=gmail]').prop('selected', 'selected');
                $('select[name=domain] option[value=com]').prop('selected', 'selected');
                $('#emailc').val("gmail");
                // $('#yghHidden').hide();
                // $('#yghText').val("");
                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
            } else{
                // $('select[name=yghyo] option[value=gmail]').prop('selected', 'selected');
                $('select[name=domain] option[value=com]').prop('selected', 'selected');
                $('#emailc').val("");
                // $('#yghHidden').hide();
                // $('#yghText').val("");
                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
            }
        });
       //ymail
//        $("#eymail").click(function () {
//            if ($(this).is(":checked")) {
//                 // $('select[name=yghyo] option[value=ymail]').prop('selected', 'selected');
//                 $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                 $('#email1').val("ymail");
//                 // $('#yghHidden').hide();
//                 // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            } else{
//                // $('select[name=yghyo] option[value=ymail]').prop('selected', 'selected');
//                $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                $('#email1').val("");
//                // $('#yghHidden').hide();
//                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            }
//        });
//       //outlook
//       $("#eoutlook").click(function () {
//            if ($(this).is(":checked")) {
//                // $('select[name=yghyo] option[value=outlook]').prop('selected', 'selected');
//                $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                $('#email1').val("outlook");
//                // $('#yghHidden').hide();
//                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            } else{
//                // $('select[name=yghyo] option[value=outlook]').prop('selected', 'selected');
//                $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                $('#email1').val("");
//                // $('#yghHidden').hide();
//                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            }
//        });
       //zoho
//       $("#ezoho").click(function () {
//            if ($(this).is(":checked")) {
//                // $('select[name=yghyo] option[value=outlook]').prop('selected', 'selected');
//                $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                $('#email1').val("zoho");
//                // $('#yghHidden').hide();
//                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            } else{
//                // $('select[name=yghyo] option[value=outlook]').prop('selected', 'selected');
//                $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                $('#email1').val("");
//                // $('#yghHidden').hide();
//                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            }
//        });
       //yandex
//       $("#eyandex").click(function () {
//            if ($(this).is(":checked")) {
//                // $('select[name=yghyo] option[value=outlook]').prop('selected', 'selected');
//                $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                $('#email1').val("yandex");
//                // $('#yghHidden').hide();
//                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            } else{
//                // $('select[name=yghyo] option[value=outlook]').prop('selected', 'selected');
//                $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                $('#email1').val("");
//                // $('#yghHidden').hide();
//                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            }
//        });
       //aim
//       $("#eaim").click(function () {
//            if ($(this).is(":checked")) {
//                // $('select[name=yghyo] option[value=outlook]').prop('selected', 'selected');
//                $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                $('#email1').val("aim");
//                // $('#yghHidden').hide();
//                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            } else{
//                // $('select[name=yghyo] option[value=outlook]').prop('selected', 'selected');
//                $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                $('#email1').val("");
//                // $('#yghHidden').hide();
//                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            }
//        });
       //aim
//       $("#emali").click(function () {
//            if ($(this).is(":checked")) {
//                // $('select[name=yghyo] option[value=outlook]').prop('selected', 'selected');
//                $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                $('#email1').val("mail");
//                // $('#yghHidden').hide();
//                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            } else{
//                // $('select[name=yghyo] option[value=outlook]').prop('selected', 'selected');
//                $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                $('#email1').val("");
//                // $('#yghHidden').hide();
//                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            }
//        });
       //Inbox
//       $("#einbox").click(function () {
//            if ($(this).is(":checked")) {
//                // $('select[name=yghyo] option[value=outlook]').prop('selected', 'selected');
//                $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                $('#email1').val("inbox");
//                // $('#yghHidden').hide();
//                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            } else{
//                // $('select[name=yghyo] option[value=outlook]').prop('selected', 'selected');
//                $('select[name=domain] option[value=com]').prop('selected', 'selected');
//                $('#email1').val("");
//                // $('#yghHidden').hide();
//                // $('#extOrg, #extEdu, #extNet, #extGov').prop('checked', false);//org, edu, net, gov
//            }
//        });

       //Inbox
       $("#cellOption").click(function () {
            if ($(this).is(":checked")) {
                $('select[name=typepho] option[value=cell]').prop('selected', 'selected');
                $('#phoneList').val("Cell");
            } else{
                $('select[name=typepho] option[value=cell]').prop('selected', 'selected');
                $('#phoneList').val('');
                
            }
        });

       //email type other
        $("#eother").click(function () {
            if ($(this).is(":checked")) {
                $('select[name=yghyo] option[value=other]').prop('selected', 'selected');
                $('select[name=domain] option[value=0]').prop('selected', 'selected');
//                $('#yghText').show();
//                $("#email1").hide();
                $('#yghHidden').show();

            } else{
                $('select[name=yghyo] option[value=other]').prop('selected', 'selected');
                $('select[name=domain] option[value=0]').prop('selected', 'selected');
                $('#yghText').hide();
//                $("#email1").hide();
                $('#yghHidden').show();
            }
        });
       //com
       $("#extCom").click(function () {
            if ($(this).is(":checked")) {
                $('select[name=domain] option[value=com]').prop('selected', 'selected');
               
            } else{
                $('select[name=domain] option[value=com]').prop('selected', 'selected');
                
            }
        });
       //org
       $("#extOrg").click(function () {
            if ($(this).is(":checked")) {
                $('select[name=domain] option[value=org]').prop('selected', 'selected');
            } else{
                $('select[name=domain] option[value=org]').prop('selected', 'selected');
			}
        });
       //edu
       $("#extEdu").click(function () {
            if ($(this).is(":checked")) {
                $('select[name=domain] option[value=edu]').prop('selected', 'selected');
            } else{
                $('select[name=domain] option[value=edu]').prop('selected', 'selected');
            }
        });
       //net
       $("#extNet").click(function () {
            if ($(this).is(":checked")) {
                $('select[name=domain] option[value=net]').prop('selected', 'selected');
            } else{
                $('select[name=domain] option[value=net]').prop('selected', 'selected');
            }
        });
       //net
       $("#extGov").click(function () {
            if ($(this).is(":checked")) {
                $('select[name=domain] option[value=gov]').prop('selected', 'selected');
            } else{
                $('select[name=domain] option[value=gov]').prop('selected', 'selected');
            }
        });
       //Other for the domain type
       $("#extOther").click(function () {
            if ($(this).is(":checked")) {
                $('select[name=domain] option[value=other]').prop('selected', 'selected');
            } else{
                $('select[name=domain] option[value=other]').prop('selected', 'selected');
            }
        });

       $("#excom").click(function () {
            if ($(this).is(":checked")) {
                $('#email1').val(".com");
            } else{
                $('#email1').val("");
            }
        });
       $("#exorg").click(function () {
            if ($(this).is(":checked")) {
                $('#email1').val(".org");
            } else{
                $('#email1').val("");
            }
        });
       $("#exedu").click(function () {
            if ($(this).is(":checked")) {
                $('#email1').val(".edu");
            } else{
                $('#email1').val("");
            }
        });
        $("#exnet").click(function () {
            if ($(this).is(":checked")) {
                $('#email1').val(".net");
            } else{
                $('#email1').val("");
            }
        });
        //Email Type other
   //      $("#yghOther").click(function () {
   //      	var ygh = $('#yghOther').value;
   //      	if ($(this).is(":checked")) {
   //          	$('#yghHidden').show();
			// } else{
   //              $('#yghHidden').hide();
   //          }
        // });
        //Question:"Will you using be  is a credit/radio or Home Warranty ?"
        //Home Warranty
        $("#cdhw3").click(function () {
            if ($(this).is(":checked")) {
                //$('#cchw').show();
                $('#cdhw2').attr('checked', false);//Warranty radio button
                $('#warra').show();
                $('.deceHidden').hide('checked', false);
            } else{
                $('#cdhw3').attr('checked', false);//Warranty radio button
                $('.deceHidden').hide('checked', false);
            }
        });
        //Check or Credit
        $("#cdhw2").click(function () {
            if ($(this).is(":checked")) {
                $('.deceHidden').show();
                $('#cdhw3').attr('checked', false);//Warranty radio button
                $('#warra').hide();
            } else{
                $('#cdhw2').attr('checked', false);//Warranty radio button
            }
        });
		//Debit and Credit Card
         $("#debit,#cc").click(function () {
            if ($('#debit,#cc').is(":checked")) {
                $('#deceHidden').show();
                $('#hwa').attr('checked', false);//Warranty radio button
                $('#warra').hide();//hide Home Warranty hidden div
            } else{
                $('#cdhw3').attr('checked', false);//Warranty radio button
                $('#warra').hide('checked', false);//debit or credit card hidden div
            }
        });
         //Debit and Credit Card Hidden Div
         $("#cdSame,#cdDiff").click(function () {
            if ($('#cdSame,#cdDiff').is(":checked")) {
                $('#bookHidden').show();
                $
                $('#hwa').attr('checked', false);//Warranty radio button
                $('#warra').hide();//hide Home Warranty hidden div
            } else{
                $('#cdhw3').attr('checked', false);//Warranty radio button
                $('#warra').hide('checked', false);//debit or credit card hidden div
            }
        });

        //Home Warranty  
        $("#hwa").click(function () {
            if($(this).is(":checked")) {
            	$('#warra').show();
            	$('#debit,#cc').attr('checked', false);//debit or credit radio button
                $('#deceHidden').hide();//debit or credit card hidden div
            } else{
            	$('#debit,#cc').attr('checked', false);//debit or credit radio button
                $('#deceHidden').hide();//debit or credit card hidden div
            }
        });



        //Question "Would you like to be notified when the techician is enrounte by...."
        //Textbox
	    $("#same").click(function () {
        	 var ph =  document.getElementById('pho1');//Phone Number
        	 var ph1 = document.getElementById('textphone');//append text to copy text value "pho1"
        	 var tyDDL = document.getElementById('typepho');// dropdown list
                 var pb = $("#ben1").val();//cell
                 var pb1 = $("#ben2").val();//home
                 var pb2 = $("#ben3").val();//office
                 var ph2 = $('.phoneList').val();
        	 if ($(this).is(":checked")) {
                    $('.mobile').show();
                    $('.emailChoice').hide('checked', false);
                    // ph1.value = ph.value;
                    $('.phoneList').text(appendPhone);
                     ph2.value = ph1.value + tyDDL.value;
		}else if(pb2.checked){
                    $("")
                }else{
                    $('.emailChoice').hide('checked', false);
                     ph1.value ="";
                     ph2.value = "";
                }
            //appendPhone();
        });
	//Email
        $("#choice2").click(function () {
        	var line =  document.getElementById('email');
        	var line1 = document.getElementById('email1');
        	var line4 = document.getElementById('domain');
        	var addeml = $(".emaio").val();
                var adLine = $(".emaio1").val();
                var line5 = document.getElementById('yghText');
        	var line2 = document.getElementById('sameEmail');
        	var line3 = $(".emList").val();
        	var line7 = $("#eother");
        	if ($('#choice2').is(":checked")) {
                    $('.emailChoice').show();
                    line2.value = line.value + "@" +line1.value + "."+ line4.value;
//                    line2.value = line.value + "@" +line5.value + "."+ line4.value ;
                    $('.mobile').hide('checked', false);
                    $('.emList').text(appendEma);
                } else if(line7.checked) {
                	line2.value = line.value + "@" +line5.value + "."+ line4.value ;
            	} else {
                    $('.mobile').hide('checked', false);
                    line2.value  = "";
                    line3.value = "";
                    line5.value = "";
	        }
	});
	//Both
        $("#techBoth").click(function () {
            var ph = document.getElementById('pho1');
            var ph1 = document.getElementById('textphone');
            //email
            var line =  document.getElementById('email');
            var line1 = document.getElementById('email1');
            var line2 = document.getElementById('sameEmail');
                if ($(this).is(":checked")) {
                        $('.emailChoice').show();
                        $('.mobile').show();
                        ph1.value = ph.value;
                        line2.value = line.value + "@" +line1.value;
                } else{
                        $('.emailChoice').show();
                        $('.mobile').show();
                        ph1.value ="";
                        line2.value = "";
                }
        });
// Search function for table Contact List
    $(".ctSearch").keyup(function(){
         _this = this;
        // Show only matching TR, hide rest of them
        $.each($("#customer_show tbody ").find("tr"), function() {
            // console.log($(this).text());
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) == -1)
               $(this).hide();
            else
               $(this).show();                
        });
    }); 

// Search function for table Contact List
    $("#fname").keyup(function(){
         _this = this;
        // Show only matching TR, hide rest of them
        $.each($("#records_table1 tbody ").find("tr"), function() {
            // console.log($(this).text());
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) == -1)
               $(this).hide();
            else
               $(this).show();                
        });
    }); 

$(".ctSearch1").keyup(function(){
         _this = this;
        // Show only matching TR, hide rest of them
        $.each($("#records_table1 tbody ").find("tr"), function() {
            // console.log($(this).text());
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) == -1)
               $(this).hide();
            else
               $(this).show();                
        });
    }); 
// Search function for table  Locations 
    $(".loctSearch").keyup(function(){
         _this = this;
        // Show only matching TR, hide rest of them
        $.each($(".loc_header tbody ").find("tr"), function() {
            // console.log($(this).text());
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) == -1)
               $(this).hide();
            else
               $(this).show();                
        });
    });

// Search function for Update Club Payment 
    $(".table-location").keyup(function(){
         _this = this;
        // Show only matching TR, hide rest of them
        $.each($(".search-location tbody ").find("tr"), function() {
            // console.log($(this).text());
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) == -1)
               $(this).hide();
            else
               $(this).show();                
        });
    });

    // Search function for Update Club Payment 
    $(".table-club").keyup(function(){
         _this = this;
        // Show only matching TR, hide rest of them
        $.each($(".search-club tbody ").find("tr"), function() {
            // console.log($(this).text());
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) == -1)
               $(this).hide();
            else
               $(this).show();                
        });
    });
    //Service  Address
           $( '#zip5' ).on( 'keyup', function( e ){

               var $code1 = $( this );
               var zip1 = $code1.val();
               var reqUrl = 'http://ZiptasticAPI.com/' + zip1 + '?callback=?';

               var $city1 = $( '#city' );
               var $state1 = $( '#state' );
               
            if( zip1.length > 4 && $.isNumeric( zip1 ) )
               {
                 $.getJSON( reqUrl, null, function( data ){
                   if ( data.city ) $city1.val( data.city );
                   if ( data.state ) $state1.val( data.state );

                   if ( data.error )
                   {
                     $city1.val( '' );
                     $state1.val( '' );
                   }
                 });
                   

               }
           }); 


    //Mailing Address
           $( '#szip' ).on( 'keyup', function( e ){

               var $code1 = $( this );
               var zip1 = $code1.val();
               var reqUrl = 'http://ZiptasticAPI.com/' + zip1 + '?callback=?';

               var $city1 = $( '#scity' );
               var $state1 = $( '#sstate' );
               
            if( zip1.length > 4 && $.isNumeric( zip1 ) )
               {
                 $.getJSON( reqUrl, null, function( data ){
                   if ( data.city ) $city1.val( data.city );
                   if ( data.state ) $state1.val( data.state );

                   if ( data.error )
                   {
                     $city1.val( '' );
                     $state1.val( '' );
                   }
                 });
                   

               }
           });

           //Billing Address
           $( '#dresz' ).on( 'keyup', function( e ){

               var $code2 = $( this );
               var zip2 = $code2.val();
               var reqUrl = 'http://ZiptasticAPI.com/' + zip2 + '?callback=?';

               var $city2 = $( '#ityf' );
               var $state2 = $( '#states' );
               
            if( zip2.length > 4 && $.isNumeric( zip2 ) )
               {
                 $.getJSON( reqUrl, null, function( data ){
                   if ( data.city ) $city2.val( data.city );
                   if ( data.state ) $state2.val( data.state );

                   if ( data.error )
                   {
                     $city2.val( '' );
                     $state2.val( '' );
                   }
                 });
                }
           });

           //Referral 
           $( '#qcity2' ).on( 'keyup', function( e ){

               var $code2 = $( this );
               var zip2 = $code2.val();
               var reqUrl = 'http://ZiptasticAPI.com/' + zip2 + '?callback=?';

               var $city2 = $( '#qcity' );
               var $state2 = $( '#qcity1' );
               
            if( zip2.length > 4 && $.isNumeric( zip2 ) )
               {
                 $.getJSON( reqUrl, null, function( data ){
                   if ( data.city ) $city2.val( data.city );
                   if ( data.state ) $state2.val( data.state );

                   if ( data.error )
                   {
                     $city2.val( '' );
                     $state2.val( '' );
                   }
                 });
                }
           });

           //Contact List 
           $( '.cont6' ).on( 'keyup', function( e ){

               var $code2 = $( this );
               var zip2 = $code2.val();
               var reqUrl = 'http://ZiptasticAPI.com/' + zip2 + '?callback=?';

               var $city2 = $( '.cont7' );
               var $state2 = $( '.cont8' );
               
            if( zip2.length > 4 && $.isNumeric( zip2 ) )
               {
                 $.getJSON( reqUrl, null, function( data ){
                   if ( data.city ) $city2.val( data.city );
                   if ( data.state ) $state2.val( data.state );

                   if ( data.error )
                   {
                     $city2.val( '' );
                     $state2.val( '' );
                   }
                 });
                }
           });

         //Contact List 
           $( '#poaddre4' ).on( 'keyup', function( e ){

               var $code2 = $( this );
               var zip2 = $code2.val();
               var reqUrl = 'http://ZiptasticAPI.com/' + zip2 + '?callback=?';

               var $city2 = $( '#poaddre5' );
               var $state2 = $( '#poaddre7');
               
            if( zip2.length > 4 && $.isNumeric( zip2 ) )
               {
                 $.getJSON( reqUrl, null, function( data ){
                   if ( data.city ) $city2.val( data.city );
                   if ( data.state ) $state2.val( data.state );

                   if ( data.error )
                   {
                     $city2.val( '' );
                     $state2.val( '' );
                   }
                 });
                }
           });


     //Business mailing and service (commerical)
           $( '#bzip' ).on( 'keyup', function( e ){

               var $code1 = $( this );
               var zip1 = $code1.val();
               var reqUrl = 'http://ZiptasticAPI.com/' + zip1 + '?callback=?';

               var $city1 = $( '#bcity' );
               var $state1 = $( '#bstate' );
               
            if( zip1.length > 4 && $.isNumeric( zip1 ) )
               {
                 $.getJSON( reqUrl, null, function( data ){
                   if ( data.city ) $city1.val( data.city );
                   if ( data.state ) $state1.val( data.state );

                   if ( data.error )
                   {
                     $city1.val( '' );
                     $state1.val( '' );
                   }
                 });
                   

               }
           });


	$('#isdate').change(function(){
	     var kav = document.getElementById("isdate").value;
	     var d = new Date();
	     var n = d.getFullYear();
	     var tie = n-kav;
	    document.getElementById("paUA").value =tie;
	});

    $('#paUA').change(function(){
         var kav = document.getElementById("paUA").value;
         var d = new Date();
         var n = d.getFullYear();
         var tie = n-kav;
        document.getElementById("isdate").value =tie;
    });

    //Gas Split (System Age)
    $('#gT').change(function(){
         var diY = document.getElementById("gT").value;
         var w = new Date();
         var l = w.getFullYear();
         var yid = l-diY;
        document.getElementById("gT1").value =yid;
    });

     //Gas Split (Year Installed)
    $('#gT1').change(function(){
         var diY = document.getElementById("gT1").value;
         var w = new Date();
         var l = w.getFullYear();
         var yid1 = l-diY;
        document.getElementById("gT").value =yid1;
    });

    //Outdoor (System Age)
    $('#ouit').change(function(){
         var diY = document.getElementById("ouit").value;
         var w1 = new Date();
         var l1 = w1.getFullYear();
         var yid1 = l1-diY;
        document.getElementById("ouit1").value =yid1;
    });
     //Outdoor (Year Installed)split sytstem
    $('#ouit1').change(function(){
         var diY = document.getElementById("ouit1").value;
         var w1 = new Date();
         var l1 = w1.getFullYear();
         var yid1 = l1-diY;
        document.getElementById("ouit").value =yid1;
    });
     //disable outdoor gas unit age and year installed when the Don't Know button is click 
     $("#odIDK").change(function(){
	    alert('I am pretty sure the text box changed');
	    $("#ouit,#ouit1").prop('disabled',true);
    });

    //Indoor Gas (System Age) split sytstem
    $('#ingas').change(function(){
         var diY1 = document.getElementById("ingas").value;
         var w2 = new Date();
         var l2 = w2.getFullYear();
         var yid2 = l2-diY1;
        document.getElementById("ingas1").value =yid2;
    });
     //Indoor Gas (Year Installed) split sytstem
    $('#ingas1').change(function(){
         var diY2 = document.getElementById("ingas1").value;
         var w3 = new Date();
         var l3 = w3.getFullYear();
         var yid3 = l3-diY2;
        document.getElementById("ingas").value =yid3;
    });
     //disable indoor gas unit age and year installed when the Don't Know button is click 
     $("#inIDK").change(function(){
	    alert('Indoor Gas Unit');
	    $("#ingas,#ingas1").prop('disabled',true);
    });
       
    //Furnace (System Age) split sytstem
    $('#agefurn').change(function(){
         var diY4 = document.getElementById("agefurn").value;
         var w4 = new Date();
         var l4 = w4.getFullYear();
         var yid4 = l4-diY4;
        document.getElementById("agefurn1").value =yid4;
    });
     //Furnace (Year Installed) split sytstem
    $('#agefurn1').change(function(){
         var diY5 = document.getElementById("agefurn1").value;
         var w5 = new Date();
         var l5 = w5.getFullYear();
         var yid5 = l5-diY5;
        document.getElementById("agefurn").value =yid5;
    });
    //disable indoor gas unit age and year installed when the Don't Know button is click 
     $("#ageIDK").change(function(){
	    alert('Furnace Unit');
	    $("#agefurn,#agefurn1").prop('disabled',true);
    });
     //Furnace (System Age) split sytstem
    $('#gcoil').change(function(){
         var diY7 = document.getElementById("gcoil").value;
         var w7 = new Date();
         var l7 = w7.getFullYear();
         var yid7 = l7-diY7;
        document.getElementById("gcoil1").value =yid7;
    });
     //Furnace (Year Installed) split sytstem
    $('#gcoil1').change(function(){
         var diY8 = document.getElementById("gcoil1").value;
         var w8 = new Date();
         var l8 = w8.getFullYear();
         var yid8 = l8-diY8;
        document.getElementById("gcoil").value =yid8;
    });
    //disable indoor gas unit age and year installed when the Don't Know button is click 
     $("#coilIDK").change(function(){
	    alert('Coil Unit');
	    $("#gcoil,#gcoil1").prop('disabled',true).val("");
	    // $('#ewb1, #ewb3, #esb1,#esb3').val("");
    });
     //System Age(Year Installed) Split Sytstem
     $('#hgeAge').change(function(){
         var diY9 = document.getElementById("hgeAge").value;
         var w9 = new Date();
         var l9 = w9.getFullYear();
         var yid9 = l9-diY9;
       
		if (diY9.length == 0){
        	$('.rgwFilt').hide();
        	document.getElementById("hgeYear").value = '';
        } else if (diY9.length > 0){
        	$('.rgwFilt').show();
        	document.getElementById("hgeYear").value = yid9;
        } else{
        	document.getElementById("hgeYear").value = '';
        }

    });
     //System Age(Year Installed) Split Sytstem
     $('#hgeYear').change(function(){
         var diY0 = document.getElementById("hgeYear").value;
         var w0 = new Date();
         var l0 = w0.getFullYear();
         var yid0 = l0-diY0;
        
		if (diY0.length == 0){
        	$('.rgwFilt').hide();
        	document.getElementById("hgeAge").value = '';
        }else if(diY0.length > 0){
        	$('.rgwFilt').show();
        	document.getElementById("hgeAge").value =yid0;
        } else{
        	document.getElementById("hgeAge").value = '';
        }

    });
    //Outdoor Unit(Year Installed) Split Sytstem
     $('#htou').change(function(){
         var diY02 = document.getElementById("htou").value;
         var w0 = new Date();
         var l1 = w0.getFullYear();
         var yid11 = l1-diY02;
         document.getElementById("htou1").value = yid11;
        
        if (diY02.length == 0){
        	document.getElementById("htou1").value = '';
        	return false;
        } else{
        	//$('.rgwFilt').show();
        	document.getElementById("htou1").value = yid11;
        	 return true;
        }
     });
     //Outdoor Unit(Year Installed) Split Sytstem
     
    //Outdoor Unit(Year Installed) Split Sytstem
     $('#htou1').change(function(){
         var diY03 = document.getElementById("htou1").value;
         var w0 = new Date();
         var l1 = w0.getFullYear();
         var yid12 = l1-diY03;
         document.getElementById("htou").value = yid12;
         
      	// if (diY03.length == 0){
       //  	document.getElementById("htou").value = '';
       //  } else{
        	//$('.rgwFilt').show();
        	//document.getElementById("htou").value = yid12;
        //}
    });
     //Outdoor Unit(Year Installed) Split Sytstem

 
     //Indoor Unit(Year Installed) Split Sytstem
     $('#hine').change(function(){
         var diY04 = document.getElementById("hine").value;
         var w0 = new Date();
         var l1 = w0.getFullYear();
         var yid13 = l1-diY04;
         
        if (diY04.length == 0){
        	document.getElementById("hine1").value = '';
        } else{
        	//$('.rgwFilt').show();
        	document.getElementById("hine1").value = yid13;
        }

    });
     //Indoor Unit(Year Installed) Split Sytstem
     $('#hine1').change(function(){
         var diY05 = document.getElementById("hine1").value;
         var w0 = new Date();
         var l1 = w0.getFullYear();
         var yid14 = l1-diY05;
         document.getElementById("hine").value = yid14;
     });
     //Indoor Unit(Year Installed) Split Sytstem

     //Split System : Yes -- Is Indoor and Outdoor Unit Approximate Same Age? System Age
     $('#yeNum').change(function(){
          //new date for System Age
          	var yeNum = document.getElementById('yeNum').value; 
		    var ye = new Date();
		    var ey = ye.getFullYear();
		    var yeSyst = ey-yeNum;
		    document.getElementById("yeNum1").value = yeSyst;

		    if (yeNum.length == 0){
        		document.getElementById("yeNum1").value = "";
	        } else{
	           document.getElementById("yeNum1").value = yeSyst;
	        }
		});
     //Split System : Yes -- Is Indoor and Outdoor Unit Approximate Same Age? YEAR
     $('#yeNum1').change(function(){
          //new date for System Age
          	var yeNum1 = document.getElementById('yeNum1').value; 
		    var ye1 = new Date();
		    var ey1 = ye1.getFullYear();
		    var yeSyst1 = ey1-yeNum1;
		    
			if (yeNum1.length == 0){
        		document.getElementById("yeNum").value = "";
	        } else{
	           document.getElementById("yeNum").value = yeSyst1;
	        }
		});

     //Split System : No -- Is Indoor and Outdoor Unit Approximate Same Age? (Outdoor Unit)
     $('#odu').change(function(){
          //new date for System Age
          	var oduNum = document.getElementById('odu').value; 
		    var oduN = new Date();
		    var udo = oduN.getFullYear();
		    var odunu = udo-oduNum;
		    
		    if (oduNum.length == 0){
        		document.getElementById("odu1").value = "";
	        } else{
	           document.getElementById("odu1").value = odunu;
	        }
		});
     //Split System : No -- Is Indoor and Outdoor Unit Approximate Same Age? (Outdoor Unit--Year Installed)
     $('#odu1').change(function(){
          //new date for System Age
          	var oduNum1 = document.getElementById('odu1').value; 
		    var oduN1 = new Date();
		    var udo1 = oduN1.getFullYear();
		    var odunu1 = udo1-oduNum1;
		    
		    if (oduNum1.length == 0){
        		document.getElementById("odu").value = "";
	        } else{
	           document.getElementById("odu").value = odunu1;
	        }
		});
     //Split System : No -- Is Indoor and Outdoor Unit Approximate Same Age? ( Indoor Gas-- Years Old)
     $('#igGas').change(function(){
          //new date for System Age
          	var igNum = document.getElementById('igGas').value; 
		    var igg = new Date();
		    var gas = igg.getFullYear();
		    var gasi = gas-igNum;
		    
		    if (igNum.length == 0){
        		document.getElementById("igGas1").value = "";
	        } else{
	           document.getElementById("igGas1").value = gasi;
	        }
		});
     //Split System : No -- Is Indoor and Outdoor Unit Approximate Same Age? ( Indoor Gas-- Year Installed )
     $('#igGas1').change(function(){
          //new date for System Age
          	var igNum1 = document.getElementById('igGas1').value; 
		    var igg1 = new Date();
		    var gas1 = igg1.getFullYear();
		    var gasi1 = gas1-igNum1;
		    
		    if (igNum1.length == 0){
        		document.getElementById("igGas").value = "";
	        } else{
	           document.getElementById("igGas").value = gasi1;
	        }
		});

     //Split System : No -- Is Indoor and Outdoor Unit Approximate Same Age? ( Indoor Gas-- Year Installed )
     $('#igGas1').change(function(){
          //new date for System Age
          	var igNum1 = document.getElementById('igGas1').value; 
		    var igg1 = new Date();
		    var gas1 = igg1.getFullYear();
		    var gasi1 = gas1-igNum1;
		    
		    if (igNum1.length == 0){
        		document.getElementById("igGas").value = "";
	        } else{
	           document.getElementById("igGas").value = gasi1;
	        }
		}); 

     //Split System : No -- Is Indoor and Outdoor Unit Approximate Same Age? ( Furance Gas-- Year Old )
     $('#furanceGas').change(function(){
          //new date for System Age
          	var furn = document.getElementById('furanceGas').value; 
		    var fgas = new Date();
		    var fura = fgas.getFullYear();
		    var furan = fura-furn;
		    
		    if (furn.length == 0){
        		document.getElementById("furanceGas1").value = "";
	        } else{
	           document.getElementById("furanceGas1").value = furan;
	        }
		});
    
    //Split System : No -- Is Indoor and Outdoor Unit Approximate Same Age? ( Furance Gas-- Year Installed )
     $('#furanceGas1').change(function(){
          //new date for System Age
          	var furn1 = document.getElementById('furanceGas1').value; 
		    var fgas1 = new Date();
		    var fura1 = fgas1.getFullYear();
		    var furan1 = fura1-furn1;
		    
		    if (furn1.length == 0){
        		document.getElementById("furanceGas").value = "";
	        } else{
	           document.getElementById("furanceGas").value = furan1;
	        }
	});


     //Split System : No -- Is Indoor and Outdoor Unit Approximate Same Age? ( Coil Gas-- Years Old )
     $('#coilGas').change(function(){
          //new date for System Age
          	var coil = document.getElementById('coilGas').value; 
		    var coilg = new Date();
		    var coi = coilg.getFullYear();
		    var gcoil = coi-coil;
		    
		    if(coil.length == 0){
        	  document.getElementById("coilGas1").value = "";
	        } else{
	           document.getElementById("coilGas1").value = gcoil;
	        }
	});
     
  //Split System : No -- Is Indoor and Outdoor Unit Approximate Same Age? ( Coil Gas-- Years Old )
     $('#coilGas1').change(function(){
          //new date for System Age
          	var coil1 = document.getElementById('coilGas1').value; 
		    var coilg1 = new Date();
		    var coi1 = coilg1.getFullYear();
		    var gcoil1 = coi1-coil1;
		    
		    if(coil1.length == 0){
        	  document.getElementById("coilGas").value = "";
	        } else{
	           document.getElementById("coilGas").value = gcoil1;
	        }
	});

    //Split System : yes -- Is Indoor and Outdoor Unit Approximate Same Age? ( HeatType: Heat and Electric )
    //System Age
     $('#sayo').change(function(){
          //new date for System Age
          	var sa = document.getElementById('sayo').value; 
		    var saDate = new Date();
		    var say = saDate.getFullYear();
		    var ayo = say-sa;
		    
		    if(sa.length == 0){
		    	$('#packLocage').hide();//show the Outdoor Unit Location
        	  document.getElementById("sayi").value = "";
	        } else{
	           document.getElementById("sayi").value = ayo;
	        }
	});
     //Year Installed
     $('#sayi').change(function(){
          //new date for System Age
          	var sa1 = document.getElementById('sayi').value; 
		    var saDate1 = new Date();
		    var say1 = saDate1.getFullYear();
		    var ayo1 = say1-sa1;
		    
		    if(sa1.length == 0){
		    	$('#packLocage').hide();//show the Outdoor Unit Location
        	  document.getElementById("sayo").value = "";
	        } else{
	           document.getElementById("sayo").value = ayo1;
	        }
	});
     //Split System : No -- Is Indoor and Outdoor Unit Approximate Same Age? ( HeatType: Heat and Electric )
    //Outdoor Unit
    $('#hodu').change(function(){
      //new date for System Age
      	var hodu = document.getElementById('hodu').value; 
	    var hdate = new Date();
	    var hd = hdate.getFullYear();
	    var headu = hd-hodu;
	    
	    if(hodu.length == 0){
	    $('#packLocage').hide();//show the Outdoor Unit Location
    	  document.getElementById("hodu1").value = "";
        } else{
           document.getElementById("hodu1").value = headu;
        }
	});
	//Outdoor Unit Year Installed
	$('#hodu1').change(function(){
      //new date for System Age
      	    var hodu1 = document.getElementById('hodu1').value; 
	    var hdate1 = new Date();
	    var hd1 = hdate1.getFullYear();
	    var headu1 = hd1-hodu1;
	    
            if(hodu1.length === ""){
                $('#packLocage').hide();//show the Outdoor Unit Location
                document.getElementById("hodu").value = "";
            } else{
                document.getElementById("hodu").value = headu1;
            }
       });
	//Indoor Electric Year Old(Age)
	$('#ieyo').change(function(){
      //new date for System Age
      	var ieyo = document.getElementById('ieyo').value; 
	    var iedate = new Date();
	    var ide = iedate.getFullYear();
	    var ieTe = ide-ieyo;
            
            if(ieyo.length == 0){
                $('#packLocage').hide();//show the Outdoor Unit Location
                document.getElementById("ieyo1").value = "";
            } else{
              document.getElementById("ieyo1").value = ieTe;
            }
	});

	//Indoor Electric Year Installed
	$('#ieyo1').change(function(){
      //new date for System Age
      	    var ieyo1 = document.getElementById('ieyo1').value; 
	    var iedate1 = new Date();
	    var ide1 = iedate1.getFullYear();
	    var ieTe1 = ide1-ieyo1;
	    if(ieyo1.length == 0){
              $('#packLocage').hide();//show the Outdoor Unit Location
              document.getElementById("ieyo").value = "";
            } else{
              document.getElementById("ieyo").value = ieTe1;
            }
        });

	//add radio button
	$('#adall1').click(function(){
	   var age = document.getElementById('agenum1').value;
	     if ($('#adall1').is(':checked')) {
	         $("#onal1").prop("disabled", true); 
	         $("#onal1").val(age);
	         document.getElementById('soption1').style.display = "none";
	    } else {
	        $("#onal1").prop("disabled", false);
	        $("#onal1").val(age);
	        document.getElementById('soption1').style.display = "none";  
	    }
 	});

 	//Question "What time is best  for you?" morning
    $('#mor1,#mor2,#mor3').click(function(){
            $('#cardque').show();
            $('#aft1,#aft2,#aft3').attr('checked', false);//afternoon
            $('#evn1,#evn2,#evn3').attr('checked', false);//evening
	});
	//Question "What time is best  for you?" Afternoon
    $('#aft1,#aft2,#aft3').click(function(){
            if ($('#aft1,#aft2,#aft3').is(':checked')) {
                    $('#cardque').show();
                    $('#mor1,#mor2,#mor3').attr('checked', false);//afternoon
                    $('#evn1,#evn2,#evn3').attr('checked', false);//evening
            }else{
                    $('#mor1,#mor2,#mor3').attr('checked', false);//afternoon
                    $('#evn1,#evn2,#evn3').attr('checked', false);//evening
            }
	});

	
    //Question "What time is best  for you?" Evening
    $('#evn1,#evn2,#evn3').click(function(){
		$('#cardque').show();
		$('#mor1,#mor2,#mor3').attr('checked', false);//afternoon
		$('#aft1,#aft2,#aft3').attr('checked', false);//evening
	});

	// //Question "What time is best  for you?" Evening
 //    $('#p3h').click(function(){
	// 	$('#dchRepairs').show();
		
	// });
    //Question "What time is best  for you?" Afternoon
 //    $('#sercall').click(function(){
 //    	var tex = $('#tname1').val();//Trunk Number
 //    	var phnum = $('#inpho1').val();//phone number
 //    	//page text
 //    	var tex1 = $('#tname').val();//Trunk Number
 //    	var phnum1 = $('#inpho').val();//phone number
	// 	if($('#sercall').is(':checked')) {
	// 	  	tex1 = tex;
	// 	}else{
	// 		tex1 = '';
	// 	}
	// });

	

});// end check area

//datepicker
$(function() {
//    $( "#tdate" ).datepicker();
    $( "#tdate" ).datepicker({
        showOn: "button",
        buttonImage: "img/cal.jpg",
        buttonImageOnly: true,
        buttonText: "Choose Date"
    });
    $("#tdate1").datepicker({ minDate: 0 });
    $("#tdate3").datepicker({ minDate: 0 });
    $("#rdate").datepicker({ minDate: 0 });
    
    
    
});

$(function() {
    $("#datepicker").datepicker({
      altField: "#alternate",
      altFormat: "DD,  MM d, yy"
    });

    $("#datepicker1").datepicker({
      altField: "#alternate1",
      altFormat: "DD,  MM d, yy"
	});
    $("#datepicker2").datepicker({
      altField: "#alternate2",
      altFormat: "DD,  MM d, yy"
     });
    $("#datepicker4").datepicker({
      altField: "#alternate4",
      altFormat: "DD"
     });

    $("#da").datepicker({ minDate: 0 });
    
    $("#da2").datepicker({ 
        minDate: 0, 
        numberOfMonths: 3,
        showButtonPanel: true,
        showWeek: true,
        beforeShowDay: nonWorkingDates
    });

    $( "#from" ).datepicker({
      //defaultDate: "+1w",
      //changeMonth: true,
      minDate: 0,
      numberOfMonths: 3,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#to" ).datepicker({
      //defaultDate: "+1w",
      //changeMonth: true,
      minDate: 0,
      numberOfMonths: 3,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
    
    $("#selectdays input:checkbox").change(function(){
        var v = $(this).attr("value")*1;
        if($(this).is(":checked")){
           if($.inArray(v,_selectedDays)<0){
                _selectedDays.push(v);
			}
        }else{
            var f=$.inArray(v,_selectedDays);
            if(f>=0){
                _selectedDays.splice(f,1);
            }               
        }
    });


});
var _selectedDays = new Array();
function nonWorkingDates(date){
    var day = date.getDay();
    for(var i=0;i<_selectedDays.length;i++){
        if(day==_selectedDays[i]){
            return [true];
        }
    }       
    return [false];
}		

$(function($){
	$('#leddl').change(function () {
		switch ($(this).val()) {
		    case '1':
		      	$('#leastOther').attr('checked', false);
 				$('#least').hide('checked', false);
		      break;
		      case '2':
		      	$('#leastOther').attr('checked', false);
 				$('#least').hide('checked', false);
		      break;
		      case '3':
		      	$('#leastOther').attr('checked', false);
 				$('#least').hide('checked', false);
		      break;
		      case '4':
		      	$('#leastOther').attr('checked', false);
 				$('#least').hide('checked', false);
		      break;
		      case '5':
		      	$('#leastOther').attr('checked', false);
 				$('#least').hide('checked', false);
		      break;
		      case '6':
		      	$('#leastOther').attr('checked', false);
 				$('#least').hide('checked', false);
		      break;
			case '7':
		        $('#least').show();
		      break;
		    default:
		      $('#least').hide();
	    }
  });

});



//function for generate confirmation number
function confirmation(){
	var chars ="0123456789ABCDEFGHIJklmNopQRstUvxyZMnOPK"
	var string_length=7;
	var randomstring='';
	for (var i=0; i<string_length;i++){
		var rnum= Math.floor(Math.random()* chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	document.confirmpage.confirmnv.value=randomstring;
	document.mcancel.rnumber.value=randomstring;


}

//function add email address
var mailIndex=1;

function removeCl(mailIndex){
 	$('#amail'+mailIndex).remove();
}
 //page Financing application to add income source
	$(document).ready(function(){
      $("#sIncome").click(function(){
      	// alert('add test');
        $(".otcome").append("<div class ='control-group'><label class = 'line'>$</label><input class='span1' type = 'text' size = '20' name ='sdollar' id ='sdollar' maxlength= '45' /><label><input  type = 'radio' size = '20' name ='week' name ='week' id = 'cdollar'/>Weekly</label><label><input type ='radio' name ='week'>BiWeekly</label><label><input type= 'radio' name ='week'>Quarterly</label><label class = 'line3'>Source</label><input type ='text' id='stype' class ='span2'><input type = 'button' class = 'minus' value ='x'></div>");
      });
      $(".minus").click(function(){
        	alert('remove test');
        	// $("div").remove(".otcome");
        	$('div').removeClass(".otcome")//gmail
            $(".agmail").click(function () {
                if ($(this).is(":checked")) {
                    $('select[name = yghyo1] option[value=gmail]').prop('selected', 'selected');
                    $('select[name=doMain1] option[value=com]').prop('selected', 'selected');
                    $('.domain1').hide();//domain
                    $('#yghText1').val("");
                    $('.extOrg1,.extEdu1,.extNet1,.extGov1').prop('checked', false);//org, edu, net, gov
                } else{
                    $('select[name = yghyo1] option[value=gmail]').prop('selected', 'selected');
                    $('select[name=doMain1] option[value=com]').prop('selected', 'selected');
                    $('.domain1').hide();//domain
                    $('#yghText1').val("");
                    $('.extOrg1,.extEdu1,.extNet1,.extGov1').prop('checked', false);//org, edu, net, gov
                   
                }
            });
	 });


    //Select all Checkbox function
    $('#checkall').on('click',function(){
        if(this.checked){
            $('.radi1').each(function(){
                this.checked = true;
            });
        }else{
             $('.radi1').each(function(){
                this.checked = false;
            });
        }
    });
    
    $('.radi1').on('click',function(){
        if($('.checkbox:checked').length == $('.checkbox').length){
            $('#checkall').prop('checked',true);
        }else{
            $('#checkall').prop('checked',false);
        }
    });

});

function button1() {
    //var d1 = new Date();
    //var t1 = d1.toUTCString();
    //var h = d1.getHours() + d1.getMinutes(); 
    var h = new Date().getHours();//hours
    // var hours = new Date().getHours();//hours
    // var minutes = new Date().getMinutes();//minutes
    // var d1  = "" + ((hours > 12) ? hours - 12 : hours); 
    // 	d1 += ((minutes < 10) ? ":0" : ":") + minutes;

    if(h<12){
        document.getElementById("morning").checked = true;
        document.getElementById("afternoon").checked = false;
        document.getElementById("evening").checked = false;
        $('#atimeHidden').hide();
        $('#etimeHidden').hide();
        $('#mtimeHidden').show();
    }else if(h>12 || h<17){
        document.getElementById("afternoon").checked = true;
        document.getElementById("morning").checked = false;
        document.getElementById("evening").checked = false;
       $('#atimeHidden').show();
       $('#etimeHidden').hide();
    }else if(h>17 || h<19){
    	alert("Present Time:" + "" + d + ":" + m +"" +"afternoon");
    	 button2();
        document.getElementById("evening").checked = true;
        document.getElementById("afternoon").checked = false;
        document.getElementById("evening").checked = false;
        $('#etimeHidden').show();
        $('#atimeHidden').hide();
     }else{
     	document.getElementById("afternoon").checked = "";
        document.getElementById("morning").checked = "";
        document.getElementById("evening").checked = "";
     }
        button2();
 }//end of function

 //Time Selection function for afternoon   
function button2(){
    var abutton = $("#afternoon").serializeArray();//checkbox class
    var abutton1 = document.getElementById('aft1');
    var abutton2 = document.getElementById('aft2');
    var abutton3 = document.getElementById('aft3');
    //new date
    var d = new Date().getHours();//hours
    var m = new Date().getMinutes();//minutes
    //alert("Present Time:" + "" + d + ":" + m +"" +"&nbspafternoon");
    	if(d >12 || d<14){
    	 $('#cardque').show();
            document.getElementById("aft2").checked = true;
            document.getElementById("aft3").checked = false;	
        }else if(d >14 || d < 17){
            $('#cardque').show();
            alert("greater than 2:30pm");
            document.getElementById("aft3").checked = true;
            document.getElementById("aft2").checked = false;	
        }else{
            $('#cardque').hide();
            document.getElementById("aft3").checked = "";
            document.getElementById("aft2").checked = "";
        }
    }


    //append phone
    function appendPhone(){
        var addPhone = $(".appPh").serializeArray();
        $( ".phoneList" ).empty();
        jQuery.each( addPhone, function( i, addPhone ) {
            $(".phoneList").append("<label class = 'type'><input type= 'checkbox' id ='media' autocomplete = 'off' />Mobile Text Alert:</label>"+"<input type = 'text' onkeyup = 'InputPhone(this)' class = 'span3' value = '"+addPhone.value+" ':</label>" + "");
        });
    }//end of append phone number

    //append email
    function appendEma(){
        var addeml = $(".emaio").serializeArray();
        $(".emList").empty();
        jQuery.each(addeml, function( i, addeml) {
            $('.emList').append("<div class = 'control-group'><label class ='lblline'>Email Address:</label><input type = 'text' class = 'span8' value = '"+ addeml.value +"':></div>");
        });
     }//end of append email

 function issue(){
          var fnmar = document.getElementById('firstname').value;//first name textbox
          var lnmar = document.getElementById('lastname').value;//last name textbox
          var emai =  document.getElementById('ebox').value;//email user name
          var emai1 = document.getElementById('ebox1').value;//email type
          //RADIO BUTTONS
          var bu1 = document.getElementById('dnemai').checked;//Decline
          var bu2 = document.getElementById('clear').checked;//Clear
          //PATTERN
          var pat = /^([a-zA-Z0-9\_\.\*\#\$\%\&])+$/;//email pattern for username   
          var alpha = /^[a-zA-Z]+$/;//Letter only

          if (fnmar.length == 0) {
            document.getElementById('newMEss').innerHTML = "<font color = 'red'>Enter First Name</font>";
          }else if(!fnmar.match(alpha)){
             document.getElementById('newMEss').innerHTML = "<font color = 'red'>First Name:Letter only</font>";
             document.getElementById("firstname").style.color = "#ff0000";
          }else if(lnmar.length == 0) {
             document.getElementById('lastname').focus();
             document.getElementById('newMEss').innerHTML = "<font color = 'red'>Enter Last Name</font>";
          }else if(!lnmar.match(alpha)){
             document.getElementById('newMEss').innerHTML = "<font color = 'red'> Last Name:Letter Only</font>";
             document.getElementById("lastname").style.color = "#ff0000";
          }else if(emai.length == 0){
            document.getElementById('newMEss').innerHTML = "<font color = 'red'>Enter Email User Name</font>";
          }else if(!emai.match(pat)){
             document.getElementById('newMEss').innerHTML = "<font color = 'red'>Letter and Number</font>";
             document.getElementById("ebox").style.color = "#ff0000";
          }else if(emai.length > 1){
            $('#emailType').show();
          }else if(emai1.length == 0){
              document.getElementById('newMEss').innerHTML = "<font color = 'red'>Enter Email Type</font>";
          }else if(!emai1.match(alpha)){
              document.getElementById('newMEss').innerHTML = "<font color = 'red'>Email Type: Letter Only</font>";
             document.getElementById("ebox1").style.color = "#ff0000";
          }else{
                 document.getElementById('newMEss').innerHTML = "";
                 document.getElementById("lastname").style.color = "";
                 document.getElementById("firstname").style.color = "";
                 document.getElementById("ebox").style.color = "";
                 document.getElementById("ebox1").style.color = "";
          }
          
    }



//links
// http://www.minihowtos.net/jquery-change-value-of-drop-down-list


