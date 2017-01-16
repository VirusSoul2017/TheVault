//Schedule Service javascipt page
var dirS = document.getElementById('fifty');


$(document).ready(function(){
	//radio button acheating
	$('#trade0').click(function(){
		if ($('#trade0').is(':checked')) {
			$('#entireDisplay01').show();
			$('#cal,.ensureDiv').hide();
			$('#trade1, #trade2, #trade3, #trade4,#trade5, #trade7 ,#trade8,#trade9,#trade10, #trade11, #trade12').attr('checked', false);
		}else{
			$('#trade1, #trade2, #trade3, #trade4,#trade5, #trade7 ,#trade8,#trade9,#trade10, #trade11, #trade12').attr('checked', false);
		}
	});
//radio button pool,plumbing, irrigation, electrical, installation, solar, roofing, lawn care, painting, pest control
	$('#trade1, #trade2, #trade3, #trade4,#trade5, #trade7 ,#trade8,#trade9,#trade10, #trade11, #trade12').click(function(){
		if ($('#trade1, #trade2, #trade3, #trade4,#trade5, #trade7 ,#trade8,#trade9,#trade10, #trade11, #trade12').is(':checked')) {
			$('#entireDisplay01').hide('checked', false);  
			$('.ensureDiv').show();
			$('#trade0').attr('checked', false);
		}else{
			$('#trade0').attr('checked', false);
		}
	});

	//Question "Number of Systems in Home"
	//if it is less than one it will show question"Are all  your System Approximate Same Age?"
	$('#rsysem1').click(function(){
		var rsys = document.getElementById('hs1');
		var rsys1 = document.getElementById('dprop');
		var rsys2 = document.getElementById('dng');
		if ($('#rsysem1').is(':checked')) {
			$('.gelDiv').show();
			$('.sasaDiv').hide();
			$('#rsysem3, #rsysem2, #rsysem4').attr('checked', false);
			if(rsys.checked){
				if(rsys1.checked || rsys2.checked){
					$('.ensureDiv').show();
				} else{
					$('.ensureDiv').hide();
				}
			}else{
				$('#heatDirect').hide();
			}

		}else{
			$('#rsysem3, #rsysem2, #rsysem4').attr('checked', false);
		}
	});
    //if it is greater than one it will show question"Are all  your System Approximate Same Age?"
	$('#rsysem3, #rsysem2, #rsysem4').click(function(){
		if ($('#rsysem3, #rsysem2, #rsysem4').is(':checked')) {
			$('.gelDiv, .sasaDiv').show();
			$('#rsysem1').attr('checked', false);
		}else{
			$('#rsysem1').attr('checked', false);
		}
	});

	//gas radio button
	$('#hs1').click(function(){
		if ($('#hs1').is(':checked')) {
			$('#heatDirect').show();
			$('#hs2,#hs3').attr('checked', false);
		}else{
			$('#hs2,#hs3').attr('checked', false);
		}
	});

	//gas radio button
	$('#hs2,#hs3').click(function(){
		if ($('#hs2,#hs3').is(':checked')) {
			$('#heatDirect').hide();
			$('#hs1').attr('checked', false);
		}else{
			$('#hs1').attr('checked', false);
		}
	});

	//Question : "Are all  your System Approximate Same Age?"
	//yes
	$('#yas').click(function(){
		if ($('#yas').is(':checked')) {
			$('#asaDiv').show();
			$('#npas').attr('checked', false);
			$('#asaDiv1').hide('checked', false);
			$('#nu1, #nu2, #nu3, #nu4').val('');//clear textbox for no radio button
		}else{
			$('#npas').attr('checked', false);
			$('#num1, #num2').val('');//clear textbox for no radio button
			$('#nu1, #nu2, #nu3, #nu4').val('');//clear textbox for no radio button
		}
	});
	//no
	$('#npas').click(function(){
		if ($('#npas').is(':checked')) {
			$('#asaDiv1').show();
			$('#yas').attr('checked', false);
			$('#asaDiv').hide('checked', false);
			$('#num1, #num2').val('');//clear textbox for no radio button
		}else{
			$('#yas').attr('checked', false);
			$('#num1, #num2').val('');//clear textbox for no radio button
		}
	});

	//Approximately System Age:
     $('#num1').change(function(){
         var diY0 = document.getElementById("num1").value;
         var w0 = new Date();
         var l0 = w0.getFullYear();
         var yid0 = l0-diY0;
        
		if (diY0.length == 0){
        	$('.sysProDiv').hide();
        	document.getElementById("num2").value = '';
        }else if(diY0.length > 0){
        	$('.sysProDiv').show();
        	document.getElementById("num2").value =yid0;
        } else{
        	document.getElementById("num2").value = '';
        }

    });

     // Approximately System Year:
     $('#num2').change(function(){
         var diY0 = document.getElementById("num2").value;
         var w0 = new Date();
         var l0 = w0.getFullYear();
         var yid0 = l0-diY0;
        
		if (diY0.length == 0){
        	$('.sysProDiv').hide();
        	document.getElementById("num1").value = '';
        }else if(diY0.length > 0){
        	$('.sysProDiv').show();
        	document.getElementById("num1").value =yid0;
        } else{
        	document.getElementById("num1").value = '';
        }

    });

     // Approximately System Year:
     $('#nu1').change(function(){
         var diY0 = document.getElementById("nu1").value;
         var w0 = new Date();
         var l0 = w0.getFullYear();
         var yid0 = l0-diY0;
        
		if (diY0.length == 0){
        	$('.sysProDiv').hide();
        	document.getElementById("nu2").value = '';
        }else if(diY0.length > 0){
        	$('.sysProDiv').show();
        	document.getElementById("nu2").value =yid0;
        } else{
        	document.getElementById("nu2").value = '';
        }

    });

     // Approximately System Year:
     $('#nu2').change(function(){
         var diY0 = document.getElementById("nu2").value;
         var w0 = new Date();
         var l0 = w0.getFullYear();
         var yid0 = l0-diY0;
        
		if (diY0.length == 0){
        	$('.sysProDiv').hide();
        	document.getElementById("nu1").value = '';
        }else if(diY0.length > 0){
        	$('.sysProDiv').show();
        	document.getElementById("nu1").value =yid0;
        } else{
        	document.getElementById("nu1").value = '';
        }

    });

     // Approximately System Year:
     $('#nu3').change(function(){
         var diY0 = document.getElementById("nu3").value;
         var w0 = new Date();
         var l0 = w0.getFullYear();
         var yid0 = l0-diY0;
        
		if (diY0.length == 0){
        	$('.sysProDiv').hide();
        	document.getElementById("nu4").value = '';
        }else if(diY0.length > 0){
        	$('.sysProDiv').show();
        	document.getElementById("nu4").value =yid0;
        } else{
        	document.getElementById("nu4").value = '';
        }

    });

     // Approximately System Year:
     $('#nu4').change(function(){
         var diY0 = document.getElementById("nu4").value;
         var w0 = new Date();
         var l0 = w0.getFullYear();
         var yid0 = l0-diY0;
        
		if (diY0.length == 0){
        	$('.sysProDiv').hide();
        	document.getElementById("nu3").value = '';
        }else if(diY0.length > 0){
        	$('.sysProDiv').show();
        	document.getElementById("nu3").value =yid0;
        } else{
        	document.getElementById("nu3").value = '';
        }

    });

     //Question"Are you having any problem with any of your systems?" 
     //"Yes" radio button
	$('#syspro0').click(function(){
		if ($('#syspro0').is(':checked')) {
			$('#resiPackage1').show();
			$('.ensureDiv').hide('checked', false);
			$('#syspro1').attr('checked', false);
			$('input[name= maea]').prop('checked', false);//Avaiable Time
		}else{
			$('#syspro1').attr('checked', false);
			$('input[name= maea]').prop('checked', false);//Avaiable Time
		}
	});

	//"No" radio button
	$('#syspro1').click(function(){
		if ($('#syspro1').is(':checked')) {
			$('.ensureDiv').show();
			$('#resiPackage1').hide();
			$('#syspro0').attr('checked', false); 
			$('input[name= cpi]').prop('checked', false);//Avaiable Time
		}else{
			$('#syspro0').attr('checked', false);
			$('input[name= cpi]').prop('checked', false);//Avaiable Time
		}
	}); 
	// cooling issue is shown if the cooling radio button is check and it will hide heating radio button selection
	$('#cooling1').click(function(){
		if ($('#cooling1').is(':checked')) {
			$('.icooling1').show();
			$('.iheating, .iheating01').hide('checked', false);
			$('#leakWater1').attr('checked', false);
			$('input[name= cpip]').prop('checked', false);//Heating
		}else{
			$('#leakWater1').attr('checked', false);
		}
	});  
	// Heating issue is shown if the heat radio button is check and it will hide cooling radio button selection
	$('#heating1').click(function(){
		if ($('#heating1').is(':checked')) {
			$('.iheating').show();
			$('.icooling1,.icooling01').hide('checked', false);
			$('#leakWater1').attr('checked', false);
			$('.icooling').hide('checked', false);
			$('#cooling1').attr('checked', false);
		}else{
			$('#leakWater1').attr('checked', false);
			$('.icooling').hide('checked', false);
			$('#cooling1').attr('checked', false);
		}
	});
	// Leaking Water, Noise, Smell, Detector Going Off issue is shown if the heat radio button is check and it will hide cooling radio button selection
	$('#leakWater1, #noise1, #smell01, #dgo1').click(function(){
		if ($('#leakWater1').is(':checked')) {
			$('.ensureDiv').show();
			$('.icooling1s').hide('checked', false);
			$('#cooling1').attr('checked', false);
			$('#heating1').attr('checked', false);
			$('.iheating').hide('checked', false);
		}else{
			$('.icooling').hide('checked', false);
			$('#cooling1').attr('checked', false);
			$('#heating1').attr('checked', false);
			$('.iheating').hide('checked', false);
		}
	});

	//Cooling radio button hidden div select
	//Not Cooling
	$('#nc1').click(function(){
		if ($('#nc1').is(':checked')) {
			$('.zonSy1').show();
			$('.ensureDiv').hide();
			$('#lc1, #nio1, #smell1,#vibe1, #nce1,#tb1,tb1,#freu1,#watleak1').attr('checked', false);
		}else{
			$('#lc1, #nio1, #smell1,#vibe1, #nce1,#tb1,tb1,#freu1,#watleak1').attr('checked', false);
			
		}
	});

	//question: Do you have a zoning system ?
	//yes
	$('#zoYes1').click(function(){
		if ($('#zoYes1').is(':checked')) {
			$('.zonSye').show();
			$('#zoNo1').attr('checked', false); 
		}else{
			$('#zoNo1').attr('checked', false);
		}
	});
	//no
	$('#zoNo1').click(function(){
		if ($('#zoNo1').is(':checked')) {
			$('.zonSye').hide('checked', false);
			$('#zoNo1').attr('checked', false);
			$('#setT1, #setA1').val('');
		}else{
			$('#zoNo1').attr('checked', false);
			$('#setT1, #setA1').val('');
			
		}
	});

	//low cooling, noise,smell,vibration,tripping breaker,freezing && waterleak
	$('#lc1, #nio1, #smell01,#vibe1,#tb1,#freu1,#watleak1').click(function(){
		if ($('#lc1, #nio1, #smell01,#vibe1,#tb1,#freu1,#watleak1').is(':checked')) {
			$('.zonSy1,.icooling01,.zonSye').hide();
			$('.ensureDiv').show();
            $('#nc1').attr('checked', false);
			$('#setT1, #setA1').val('');
		}else{
			$('#nc1').attr('checked', false);
			$('#setT1, #setA1').val('');
		}
	}); 
	//Not Cooling Evenly
	$('#nce1').click(function(){
		if ($('#nce1').is(':checked')) {
			$('.icooling01').show();
			$('.ensureDiv').hide();
			$('.zonSy1').hide();
			$('#nc1').attr('checked', false);
			$('#lc1, #nio1, #smell01,#vibe1,#tb1,tb1,#freu1,#watleak1').attr('checked', false);
			$('#setT1, #setA1').val('');
			$('#heThem01,#heThem02').val('');
		}else{
			$('#nc1').attr('checked', false);
			$('#lc1, #nio1, #smell01,#vibe1,#tb1,tb1,#freu1,#watleak1').attr('checked', false);
			$('#setT1, #setA1').val('');
			$('#heThem01,#heThem02').val('');
		}
	});

	$('.coolTemp').click(function(){
		if ($('input[name= coolTemp').is(':checked')) {
			$('.heThemDiv, #rheatissue1').hide();
			$('.ensureDiv').show();
			$('.zonSy1').hide();
			$('#lc1, #nio1, #smell01,#vibe1,#tb1,tb1,#freu1,#watleak1').attr('checked', false);
			$('#setT1, #setA1').val('');
			$('#heThem01,#heThem02').val('');
		}else{
			$('.heThemDiv, #rheatissue1').hide();
			$('.ensureDiv').show();
			$('#lc1, #nio1, #smell01,#vibe1,#tb1,tb1,#freu1,#watleak1').attr('checked', false);
			$('#setT1, #setA1').val('');
			$('#heThem01,#heThem02').val('');
			
		}
	}); 

	//Heating radio buttons and hidden div start
	//Not heating, low heating, noise, smell, vibration, tripping breaker, water leak, freezing up
	$('#nh1, #lh1, #noh1,#sh1,#vh1,#cotbh1,#wlh1, #fzh1').click(function(){
		if ($('#nh1, #lh1, #noh1,#sh1,#vh1,#cotbh1,#wlh1, #fzh1').is(':checked')) {
			$('.heThemDiv').show();
			$('#rheatissue1').show();//show Notes Textbox
            $('#nhe1').attr('checked', false);
			$('.iheating01,.icooling01').hide();
			$('#heThem01,#heThem02').val('');
		}else{
			$('#nhe1').attr('checked', false);
			$('.iheating01').hide();
			$('#heThem01,#heThem02').val('');
		}
	}); 
	//not heating Evenly
	$('#nhe1').click(function(){
		if ($('#nhe1').is(':checked')) {
			$('.heThemDiv, #rheatissue1').hide();
			$('.ensureDiv,.icooling01 ').hide();
			$('.iheating01').show();
            $('#nh1, #lh1, #noh1,#sh1,#vh1,#cotbh1,#wlh1, #fzh1').attr('checked', false);
		}else{
			$('#nh1, #lh1, #noh1,#sh1,#vh1,#cotbh1,#wlh1, #fzh1').attr('checked', false);
			$('.heThemDiv').hide();
			$('#heThem01,#heThem02').val('');
			
		}
	}); 
	//Room not Heatly Evenly
	$('. heatTempR').click(function(){
		if ($('.heatTempR').is(':checked')) {
			$('.heThemDiv, #rheatissue1').hide();
			$('.ensureDiv').show();
			$('.iheating01').hide();
            $('#nh1, #lh1, #noh1,#sh1,#vh1,#cotbh1,#wlh1, #fzh1').attr('checked', false);
            $('#heThem01,#heThem02').val('');
		}else{
			$('.ensureDiv').hide();
			$('.heThemDiv, #rheatissue1').hide();
			$('.ensureDiv').show();
			$('.iheating01').hide();
            $('#nh1, #lh1, #noh1,#sh1,#vh1,#cotbh1,#wlh1, #fzh1').attr('checked', false);
            $('#heThem01,#heThem02').val('');
			
		} 
	}); //Heating radio buttons and hidden div end

	// $('.fifty').click(function() {
 //        if ('.fifty').is(':checked')) {
 //            $('#directHidden').show();
 //            $('#IssueDiv').hide(); 
 //            $('#homeselect').hide(); 
 //            $('#resiPackage').hide(); 
 //            $('#hideMeDiv').hide();
 //        } else {
 //            //$('#directHidden').hide();
 //            $('#IssueDiv').hide();
 //            $('#homeselect').hide();
 //            $('#resiPackage').hide();
 //            $('#hideMeDiv').hide();
 //        }
 //    });

});//end of document

function TZone(){
	var box1 = $('#setT1').val();
	var box2 = $('#setA1').val();
	//pattern
    var p1 = /^[0-9]+$/;

    if(!box1.match(p1)){
	    $('.ensureDiv').hide();
	   document.getElementById('setT1').focus();
	   document.getElementById("zonMess").innerHTML="<font color = 'red'> Thermostat Set at (No):Numbers Only</font>"
	   return false;
	}else if(!box2.match(p1)){
	    $('.ensureDiv').hide();
	   document.getElementById('setA1').focus();
	   document.getElementById("zonMess").innerHTML="<font color = 'red'> Actual Temperature at (No):Numbers Only</font>"
	   return false;
	} else{
	     $('.ensureDiv').show();
	     document.getElementById("zonMess").innerHTML=""
	      return true;
	}
}//end of function TZone()

//heating : Residential
function hTemp(){
	var box3 = $('#heThem01').val();
	var box4 = $('#heThem02').val();
	//pattern
    var p1 = /^[0-9]+$/;

    if(!box3.match(p1)){
	    $('.ensureDiv').hide();
	   document.getElementById('heThem01').focus();
	   document.getElementById("hTemMessage01").innerHTML="<font color = 'red'> Thermostat Set at (No):Numbers Only</font>"
	   return false;
	}else if(!box4.match(p1)){
	    $('.ensureDiv').hide();
	   document.getElementById('heThem02').focus();
	   document.getElementById("hTemMessage01").innerHTML="<font color = 'red'> Actual Temperature at (No):Numbers Only</font>"
	   return false;
	} else{
	     $('.ensureDiv').show();
	    document.getElementById("hTemMessage01").innerHTML=""
	   return true;
	}
}//end of function hTemp()

function tradeVal(){
	var tr0 =  document.getElementById('trade0');
	var tr1 =  document.getElementById('trade1');
	var tr2 =  document.getElementById('trade2');
	var tr3 =  document.getElementById('trade3');
	var tr4 =  document.getElementById('trade4');
	var tr5 =  document.getElementById('trade5');
	var tr7 =  document.getElementById('trade7');
	var tr8 =  document.getElementById('trade8');
	var tr9 =  document.getElementById('trade9');
	var tr10 =  document.getElementById('trade10');
	var tr11 =  document.getElementById('trade11');
	var tr12 =  document.getElementById('trade12');

	if(!tr0.checked && !tr1.checked && !tr2.checked && !tr3.checked && !tr4.checked && !tr5.checked && !tr7.checked && !tr8.checked && !tr9.checked && !tr10.checked && !tr11.checked && !tr12.checked){
		 document.getElementById("tradeMess").innerHTML="<font color = 'red'>Select Trade</font>"
         return false;
	} else{
		document.getElementById("tradeMess").innerHTML=""
         return true;
	}
}//end of tradeVal();

//Question "Are you heating systems heating, gas or duel fuel"
function hsVal() {
	var hg = document.getElementById('hs1');//gas  
	var he = document.getElementById('hs2');//electric
	var hd = document.getElementById('hs3');//dual Fuel
	//gas
	var p = document.getElementById('dprop');//propane
	var n = document.getElementById('dng');//

	if(!hg.checked && !he.checked && !hd.checked){
		document.getElementById("hsMess").innerHTML="<font color = 'red'>Select Heating Type</font>"
         return false;
	}else if(hg.checked){
		if(!p.checked || !n.checked){
			document.getElementById("hsMess").innerHTML="<font color = 'red'>Select Gas Type</font>"
            return false;
		}else if(p.checked || n.checked) {
			document.getElementById("hsMess").innerHTML="<font color = 'red'>Something is check</font>"
			//$(".ensureDiv").show();
            return false;
		}
	} else{
		document.getElementById("hsMess").innerHTML=""
		//$( "input[name=nosy][value=1]" ).next().show(""); 
         return true;
	}
}// end of hsVal

function asaVal(){
	var yas = document.getElementById("yas");
	var npas = document.getElementById("npas");
	//yes
	//Question: "Approximately System Age"
	var n = document.getElementById('num1').value;
	var n1 = document.getElementById('num2').value;
	//no 
	//Question:"Approximately System Newest Age"
	var n2 = document.getElementById('nu1').value;
	var n3 = document.getElementById('nu2').value;
	//Question: "Approximately System Oldest Age"
	var n4 = document.getElementById('nu3').value;
	var n5 = document.getElementById('nu4').value;
	//pattern
	var nu = /^[0-9]+$/;//pattern for number

	if(!yas.checked && !npas.checked){
		document.getElementById("asaMess").innerHTML="<font color = 'red'>Answer Question:'Are all your System Approximate Same Age?'</font>"
        return false;
	} else if(yas.checked) {
		if(n.length == 0){
			document.getElementById('asaMess').innerHTML ="<font color = 'red'>Enter Approximately System Age</font>"
		}else if(!n.match(nu)){
			document.getElementById('asaMess').innerHTML ="<font color = 'red'>Letter Only</font>"
			return false;
		}else if(n1.length == 0){
			document.getElementById('asaMess').innerHTML ="<font color = 'red'>Enter Approximately System Year</font>"
			return false;
		}else if(!n1.match(nu)){
			document.getElementById('asaMess').innerHTML ="<font color = 'red'>Letter Only</font>"
			return false;
		}else{
			document.getElementById('asaMess').innerHTML ="<font color = 'red'></font>"
			return false;
		}
		
	} else {
		document.getElementById("asaMess").innerHTML=""
		$('#asaDiv').show();
        return true;
	}
}//end of function()
 
 function dpackageVal(){
 	var adbP = document.getElementById('dpackage').checked;//Package
 	var adbS = document.getElementById('dspilt').checked;//Spilt
 	var adbE = document.getElementById('devap').checked;//Evaporative
 	var adbG = document.getElementById('dgeoth').checked;//Geothermal
 	var adbM = document.getElementById('dmspilt').checked;//Mini Spilt
 	var adbI = document.getElementById('dhidk').checked;//I don't know
 	
 	
 	if(!adbP && !adbS && !adbE && !adbG && !adbM && !adbI){
 		document.getElementById('ptypeMess').innerHTML ="<font color = 'red'>Select System Type</font>"
		return false;
 	}else if(adbP){
 		$('#homeselect').hide();//hide quesiton"Are you homeowner?"
 		$('#pselDiv').show();//show heat Type
 		document.getElementById('ptypeMess').innerHTML ="<font color = 'red'>Homeselect Is Hidden</font>"
		return false;
 	}else if(adbS){
 		$('#homeselect').hide();//hide quesiton"Are you homeowner?"
 		$('#spiSystemSel,#htDHide1').show();//show heat Type
 		document.getElementById('ptypeMess').innerHTML ="<font color = 'red'>Homeselect Is Hidden(Spilt)</font>"
		return false;
 	}else if(adbE || adbG || adbM || adbI){
 		$('#homeselect').hide();//hide quesiton"Are you homeowner?"
 		$('#pselDiv, #htDHide1').hide();//show heat Type
 		document.getElementById('ptypeMess').innerHTML ="<font color = 'red'>Radio button for Evaporative, Geothermal, Mini Spilt, IDk</font>"
		return false;
 	}else{
 		document.getElementById('ptypeMess').innerHTML ="<font color = 'red'></font>"
		return true;
 	}

 }//End of dpackageVal ensureDiv