//javascript file for appending label and input elements
 

$(document).ready(function(){
    var phone = 0;//phone number
    var mailIndex= 1;//email only
    //Service page--add additional phone for customer
    $('#pextra').click(function(){
        var ex = $('.apart1');
        var li = $('.appPh').val();
        phone++;
        $("#pdiv").append("<div style ='display:inline-block;'><label class = 'lblline'>Phone Number "+phone+":</label><input type ='text'name ='pcomp' class = 'appPh' autocomplete ='off' maxlength ='12'  onkeyup = 'InputPhone(this)' ><select class = 'select'><option>Select</option><option>Home</option><option>Cell</option><option>Office</option></select><button class='rpart1'>-</button>&nbsp<button class = 'apart1'>+</button></div>");
        
    });
    //append question business "Who will tech need to contact upon arrival?"
    $('#aBusCon').click(function(){
         $("#newList").append("<div style ='display:inline-block;'><label class = 'lblline'><input type = 'checkbox' />First Name:</label>&nbsp<input type = 'text' class = 'span2'/>&nbsp<label class = 'lblmiddle' style = 'margin-right:auto; margin-left:-100px;'>Last Name:</label>&nbsp<input type = 'text' class='span2'/>&nbsp<label class ='lblright' style = 'margin-right:auto; margin-left:-100px;'>Phone Number:</label>&nbsp<input type = 'text' class = 'span2' autocomplete = 'off'/>&nbsp<label>Ext:</label>&nbsp<input type = 'text' class = 'span1'/><button class = 'reBus' >-</button></div>");
    });

    //remove Phone Number
    $('body').on('click', '.rpart1', function () {
        $(this).parent("div").remove();
    });
    $('body').on('click', '.rpart2', function () {
        $(this).parent("div").remove();
    });
    $('body').on('click', '.apart1', function () {
       $("#pdiv").append("<div style ='display:inline-block;'><label class = 'lblline'>Phone Number "+phone+":</label><input type ='text'name ='pcomp' class = 'appPh' autocomplete ='off' maxlength ='12'  onkeyup = 'InputPhone(this)' ><select class = 'select'><option>Select</option><option>Home</option><option>Cell</option><option>Office</option></select><button class='rpart'>-</button><button class = 'apart2'>+</button></div>");

    });
    //remove button for append attributes for "newlist" 
    $('body').on('click', '.reBus', function () {
         $(this).parent("div").remove();
    });
    //remove additional appending html for email
    $('body').on('click', '.emailDel', function () {
        $(this).parent("div").remove();
    });
    $('#addEmail').click(function(){
        mailIndex++
        $("#emailDIV").append("<span class = 'Ema' style='font-size:17px;font-weight:bold;color:red;'></span><div class = 'mailDiv'>" +"<div class = 'control-group'><label class = 'lblline'>Email Address "+mailIndex+":</label><input type = 'text' class ='span4 emaio' onkeyup = 'ema()' name = 'emaio' placeholder = '112344.jake' autocomplete = 'off'/>"+"@"+"<input type = 'text' class = 'span2 emaio1' autocomplete = 'off'/>" 
                                +"<select class = 'select' name ='doMain1'><option value = '0'>Select</option><option value = 'com'>.com</option><option value = 'org'>.org</option><option value = 'edu'>.edu</option><option value = 'gov'>.gov</option><option value = 'ac'>.ac</option><option value = 'acuk'>.ac.uk</option><option value = 'ad'>.ad</option><option value = 'ae'>.ae</option><option value = 'aero'>.aero</option><option value = 'af'>.af</option><option value = 'ag'>.ag</option><option value = 'ai'>.ai</option><option value = 'al'>.al</option><option value = 'am'>.am</option></select>"
                                +"<button class = 'emailDel'>-</button>"
                                +"<div class = 'control nedd' style ='display:none'>"+"<label class = 'lblline'>Select Email Type:</label>"+"<label class = 'type'><input type = 'radio' name = 'ednemai2' value = 'yahoo' class ='ayahoo' autocomplete = 'off'/>yahoo</label>"
                                +"<label class = 'type'><input type = 'radio' name = 'ednemai2' class ='agmail' value = 'gmail' autocomplete = 'off'/>gmail</label>"+"<label class = 'type'><input type = 'radio' name = 'ednemai2' value = 'Hotmail' class ='ahotmail'  autocomplete = 'off'/>hotmail</label>"
                                +"<label class = 'type'><input type = 'radio' name = 'ednemai2' class ='aymail'  autocomplete = 'off'/>ymail</label>" +"<label class = 'type'><input type = 'radio' name = 'ednemai2' class ='aoutlook' autocomplete = 'off'/>outlook</label>"
                                +"<label class = 'type'><input type = 'radio' name = 'ednemai2' value = 'Zoho' class ='azoho' autocomplete = 'off'/>Zoho</label> " 
                                +"<label class = 'type'><input type = 'radio' name = 'ednemai2' class = 'ayand' value = 'Yandex' autocomplete = 'off'/>Yandex</label>" + "<label class = 'type'><input type = 'radio' name = 'ednemai2' value = 'Aim' class = 'aaim' autocomplete = 'off'/>Aim</label>"
                                +"<label class = 'type'><input type = 'radio' name = 'ednemai2' class = 'amail' value = 'Mail' autocomplete = 'off'/>Mail</label>" + "<label class = 'type'><input type = 'radio' name = 'ednemai2' value = 'Inbox' class = 'ainbox' autocomplete = 'off'/>Inbox</label>"
                                +"</div>" 
                                +"<div class ='control domain2' name = '' style = 'display:none'>"
                                +"<label class = 'lblline'>Domain Type:</label>"
                                +"<label class = 'type'><input type ='radio' autocomplete = 'off' name = 'doMain' value = 'com' class = 'extCom1'/>com</label>"
                                +"<label class = 'type'><input type ='radio' autocomplete = 'off' name = 'doMain' value = 'org' class = 'extOrg1'/>org</label>"
                                +"<label class = 'type'><input type ='radio' autocomplete = 'off' name = 'doMain' value = 'edu' class = 'extEdu1'/>edu</label>"
                                +"<label class = 'type'><input type ='radio' autocomplete = 'off' name = 'doMain' value = 'net' class = 'extNet1'/>net</label>"
                                +"<label class = 'type'><input type ='radio' autocomplete = 'off' name = 'doMain' value = 'gov' class = 'extGov1'/>gov</label>"
                                +"</div>"
                                +"<div class  = 'control' style= 'display:none'>"+"<label class = 'lblline'>Add Email Type:</label>" +"<input type = 'text' autocomplete = 'off' class = 'span2'/>"
                                +"<button id = ''>Add</button>" + "</div>"
                                +"</div>"
                                +"</div>"+ "</div>");

              //email name 
           $('.emaio').keyup(function(){
                var emaio = $('.emaio').val();//first textbox
                //var emaio1 = $('.emaio1').val();//second textbox
                
                if (emaio.length == 0){
                    $('.Ema').text('Enter Email Name');
                    //$('.butSelect1').show();
                    $('.nedd').hide();
                    $('.domain2').hide();
                }else if(emaio.length > 0){
                    $('.nedd').show();
                    $('.butSelect1').hide();
                    $('.domain2').hide();
                }else{
                    $('.nedd').hide();
                    $('.domain2').hide()
                }
            });

            // $(".emaio").each( function( i, emaio ) {
            //      var emaio = $('.emaio').val();//first textbox
                
            //     if (emaio.length == 0){
            //         $('.Ema').text('Enter Email Name');
            //         //$('.butSelect1').show();
            //         $('.nedd').hide();
            //         $('.domain2').hide();
            //     }else if(emaio.length > 0){
            //         $('.nedd').show();
            //         $('.butSelect1').hide();
            //         $('.domain2').hide();
            //     }else{
            //         $('.nedd').hide();
            //         $('.domain2').hide()
            //     }
            // });

         
            //second textbox
            $('.emaio1').keyup(function(){
                var emaio1 = $('.emaio1').val();//second textbox
                if (emaio1.length == 0){
                    $('.Ema').text('Enter Email Name');
                    //$('.butSelect1').show();
                    $('.nedd').hide();
                    $('.domain2').show();
                }else if(emaio1 > 0){
                    $('.nedd').hide();
                    $('.butSelect1').hide();
                    $('.domain2').show();
                }else{
                    $('.nedd').hide();
                }
            }); 
            // $(".emaio1").each( function( i, emaio1 ) {
            //      var emaio1 = $('.emaio1').val();//second textbox
            //     if (emaio1.length == 0){
            //         $('.Ema').text('Enter Email Name');
            //         //$('.butSelect1').show();
            //         $('.nedd').hide();
            //         $('.domain2').show();
            //     }else if(emaio1 > 0){
            //         $('.nedd').hide();
            //         $('.butSelect1').hide();
            //         $('.domain2').show();
            //     }else{
            //         $('.nedd').hide();
            //     }
            // });

         });// end of #addEmail
         
         
        //Appending  for additional contacts
//        $("#contractButton1").click(function(){
//           if ($('#contractButton1').is(':checked')) {
//               (".contractName2").append("<div id = 'conExtra' style =' border-style:solid; border-width:1px; border-radius:8px; margin-left:20px; margin-right: auto;margin-top:20px;'>"+
//                                         +"Working" + "</div>");
//           }else{
//               alert('Nope');
//          }
//        });
//     
         

        //appending customer information
        $('#contractButton1').click(function(){
            $(".contractName2").append("<div id = 'conExtra' style =' border-style:solid; border-width:1px; border-radius:8px; margin-left:20px; margin-right: auto;margin-top:20px;'>"
                +"<div class = 'control-group'>"+"<span id = 'nfirstMess'></span><label class ='lblline' style = 'font-size:20px;'>First Name:</label><select style ='width: 90px; height: 30px;'><option>Select</option><option>Mr.</option><option>Mrs.</option><option>Ms.</option></select><input type = 'text' onkeyup = 'appFirst()'' autocomplete = 'off' name = nFirst[] class = 'span3 nFirst[]'><label class ='lblmiddle' style = 'font-size:20px; margin-right:auto; margin-left:-78px;'>Last Name:</label><input class='span3' type = 'text' autocomplete = 'off' name ='' id = '' onkeyup = '' onblur= ''/></div>"
                +"<div class = 'control-group'>"+"<label style = 'margin-left:55px;'>Is <span id = '' style = 'font-weight:bold;color:red;'>4115-445-4564</span> the best number to contact you?</label> <label><input type= 'radio' id ='bnYes' autocomplete = 'off'>Yes</label><label><input type= 'radio' id ='bnNo'  autocomplete = 'off'>No</label>" +"</div>" 
                +"<div class = 'control-group'>"+ "<p style = 'margin-left:55px'>Is this a <label><input type = 'radio' name = '' id = 'beCell'autocomplete = 'off'>Cell</label><label><input type = 'radio' name = '' id = 'beHome' autocomplete = 'off'>Home or</label> <label><input type = 'radio' name = 'best1' id = '' onclick = ''onfocus = '' autocomplete = 'off'>Office number ?</label><input type = 'text' autocomplete = 'off' id = '' onchange = '' onfocus = '' style = ''/></p>" +"</div>"
                +"<div class = 'control-group'>"+ "<p style = 'margin-left:40px'>What is the best number to contact you on <input type = 'text' class = 'span2' id = '' maxlength = '12' onkeyup = 'InputPhone(this)' onchange = '' onfocus = '' autocomplete = 'off'>is this a <label><input type = 'radio' name = 'ben' id ='' onclick = '' onfocus = '' autocomplete = 'off'>Cell</label><label> <input type = 'radio' name = 'ben' id ='' onclick = '' onfocus = '' autocomplete = 'off'>Home</label><label><input type = 'radio' name = 'ben' id ='' onclick = '' onfocus = '' autocomplete = ''>Office</label> ?"
                +"<input type = 'text' class = 'span2' id ='' autocomplete = 'off'/></p>"+ "<div>"
                +"<div id='emailDIV'><div class = 'control-group'><label class ='lblline'>Email Address:</label> <input class='span4' type = 'text' size = '45' name ='email' id = 'email' onkeyup= 'mailVal()' onfocus= 'mailVal()' autocomplete = 'off'/> @ <input class='span2' type = 'text' id = 'email1' onkeyup = 'mailVal()' onfocus= '' autocomplete = 'off'/><label>.</label>"+"<select name = ''  id = '' onclick = '' class = '' autocomplete = 'off'><option value = '0'>Select</option><option value = 'com'>com</option><option value = 'org'>org</option><option value = 'edu'>edu</option><option value = 'net'>net</option><option value = 'gov'>gov</option><option value = 'aero'>aero</option><option value = 'asia'>asia</option><option value = 'biz'>biz</option><option value = 'cat'>cat</option><option value = 'coop'>coop</option><option value = 'info'>info</option><option value = 'int1'>int</option><option value = 'jobs'>jobs</option><option value = 'mil'>mil</option><option value = 'mobi'>mobi</option><option value = 'other'>other</option></select>"
                +"<input type = 'button' id = 'addEmail' value = '+' onclick = '' />" + "</div> " +"</div>"  
                +"<div class = 'control-group' style = 'display:'><label class ='lblline'>Select Email Type:</label><label class = 'type'><input type= 'radio' name = ''  id ='' onclick = '' autocomplete = 'off'/> yahoo</label><label class = 'type'><input type= 'radio' name = '' value =''  id ='' onclick = '' autocomplete = 'off'/> gmail</label><label class = 'type'><input type= 'radio' name = '' value ='' autocomplete = 'off'/>hotmail</label> <label class = 'type'><input type = 'radio' name = '' value = ''  id = '' onclick = '' autocomplete = 'off'/>ymail</label><label class = 'type'><input type= 'radio' name = '' value =''  id ='' onclick = '' autocomplete = ''/>outlook</label><label class = 'type'><input type= 'radio' name = '' value = ''  id = '' onclick = ''  autocomplete = 'off'/>yandex</label>"
                +"<label class = 'type'><input type= 'radio' name = '' value =''  id ='' onclick = '' autocomplete = 'off'/>zoho</label><label class = 'type'><input type= 'radio' name = '' value = ''  id = '' onclick = ''autocomplete = ''/>aim</label> <label class = 'type'><input type= 'radio' name = '' value = ''  id = '' onclick = '' autocomplete = 'off'/>mail</label> <label class = 'type'><input type= 'radio' name = '' value = ''  id = '' onclick = '' autocomplete = ''/>Inbox</label>"+"</div>"
                +"<div class ='control-group' style = 'display:none'><label class = 'lblline'>Enter Email Type:</label><label>@</label><input type = 'text' class = 'span3' onkeyup= '' onfocus= '' id = '' autocomplete = 'off'/><label class = 'type'><input type= 'radio' name = '' id = '' onclick = '' autocomplete = 'off' />com</label><label class = 'type'><input type= 'radio' name = '' id = '' onclick = '' autocomplete = ''/>org</label><label class = 'type'><input type= 'radio' name = '' id = '' onclick = '' autocomplete = 'off'/>edu</label> <label class = 'type'><input type= 'radio' name = '' id ='' onclick = '' autocomplete = 'off'/>net</label>"
                +"<label class = 'type'><input type= 'radio' name = '' id = '' onclick = '' autocomplete = 'off'/>gov</label>"+"</div>"
                +"<div class = 'control-group'>"+ "<p style = 'margin-left:40px;'>Would you like to be notified when the techician is enrounte by<input type = 'radio' name = 'choi' id ='same' value = 'text1' onclick = '' autocomplete = 'off'> Text <input type = 'radio' id = 'choice2' value = 'Email' name = 'choi' autocomplete = 'off'> Email or <input type = 'radio' name = 'choi' id ='techBoth' autocomplete = 'off'> Both ?</p>"  +"<div>"
                +"<div class = 'control-group' style = 'display:none'><label class ='lblline'>Mobile Text Alert: </label><input class= 'span2' type = 'text'  maxlength = '12' name = '' onkeyup = 'InputPhone(this)' onblur = 'showNumber()' autocomplete = 'off'/> <span class = 'phoneList1' style = 'font-size:17px;'></span>"+ "</div>"
                +"<div class = 'control-group' style = 'display:none'><label class ='lblline'>Email Address: </label> <input class= 'span5' type = 'text' name = 'sameEmail' id = '' autocomplete = 'off'/>"  +"</div>"
                +"<div class = 'control-group'><span class = 'emList' style = 'font-size:17px;'></span></div>"
                +"</div>");
        });
        
        
         //remove button for append attributes for "newlist" 
        $('body').on('click', '#conExtra', function () {
             $(this).parent("div").remove();
        });


        
});//end of document


function additonAPP(){
	 var y = document.getElementById("contractButton1");
	 var n = document.getElementById("conNo");
        document.getElementById("conExtra").innerHTML = "";
    
         
	  if(!y.checked && !n.checked){
		 document.getElementById('meADD').innerHTML="<font color = 'red'>Select Question</font>";
	  }else if(y.checked){
//		document.getElementById('meADD').innerHTML="<font color = 'red'>Yes button is checked</font>";
		 $(".contractName2").append("<div id = 'conExtra' style =' border-style:solid; border-width:1px; border-radius:8px; margin-left:20px; margin-right: auto;margin-top:20px;'>"
                    +"<div class = 'control-group'>"+"<span id = 'nfirstMess'></span><label class ='lblline' style = 'font-size:20px;'>First Name:</label><select style ='width: 90px; height: 30px;'><option>Select</option><option>Mr.</option><option>Mrs.</option><option>Ms.</option></select><input type = 'text' onkeyup = 'appFirst()'' autocomplete = 'off' name = nFirst[] class = 'span3 nFirst[]'><label class ='lblmiddle' style = 'font-size:20px; margin-right:auto; margin-left:-78px;'>Last Name:</label><input class='span3' type = 'text' autocomplete = 'off' name ='' id = '' onkeyup = '' onblur= ''/></div>"
                    +"<div class = 'control-group'>"+"<label style = 'margin-left:55px;'>Is <span id = '' style = 'font-weight:bold;color:red;'>4115-445-4564</span> the best number to contact you?</label> <label><input type= 'radio' id ='bnYes' autocomplete = 'off'>Yes</label><label><input type= 'radio' id ='bnNo'  autocomplete = 'off'>No</label>" +"</div>" 
                    +"<div class = 'control-group'>"+ "<p style = 'margin-left:55px'>Is this a <label><input type = 'radio' name = '' id = 'beCell'autocomplete = 'off'>Cell</label><label><input type = 'radio' name = '' id = 'beHome' autocomplete = 'off'>Home or</label> <label><input type = 'radio' name = 'best1' id = '' onclick = ''onfocus = '' autocomplete = 'off'>Office number ?</label><input type = 'text' autocomplete = 'off' id = '' onchange = '' onfocus = '' style = ''/></p>" +"</div>"
                    +"<div class = 'control-group'>"+ "<p style = 'margin-left:40px'>What is the best number to contact you on <input type = 'text' class = 'span2' id = '' maxlength = '12' onkeyup = 'InputPhone(this)' onchange = '' onfocus = '' autocomplete = 'off'>is this a <label><input type = 'radio' name = 'ben' id ='' onclick = '' onfocus = '' autocomplete = 'off'>Cell</label><label> <input type = 'radio' name = 'ben' id ='' onclick = '' onfocus = '' autocomplete = 'off'>Home</label><label><input type = 'radio' name = 'ben' id ='' onclick = '' onfocus = '' autocomplete = ''>Office</label> ?"
                    +"<input type = 'text' class = 'span2' id ='' autocomplete = 'off'/></p>"+ "<div>"
                    +"<div id='emailDIV'><div class = 'control-group'><label class ='lblline'>Email Address:</label> <input class='span4' type = 'text' size = '45' name ='email' id = 'email' onkeyup= 'mailVal()' onfocus= 'mailVal()' autocomplete = 'off'/> @ <input class='span2' type = 'text' id = 'email1' onkeyup = 'mailVal()' onfocus= '' autocomplete = 'off'/><label>.</label>"+"<select name = ''  id = '' onclick = '' class = '' autocomplete = 'off'><option value = '0'>Select</option><option value = 'com'>com</option><option value = 'org'>org</option><option value = 'edu'>edu</option><option value = 'net'>net</option><option value = 'gov'>gov</option><option value = 'aero'>aero</option><option value = 'asia'>asia</option><option value = 'biz'>biz</option><option value = 'cat'>cat</option><option value = 'coop'>coop</option><option value = 'info'>info</option><option value = 'int1'>int</option><option value = 'jobs'>jobs</option><option value = 'mil'>mil</option><option value = 'mobi'>mobi</option><option value = 'other'>other</option></select>"
                    +"<input type = 'button' id = 'addEmail' value = '+' onclick = '' />" + "</div> " +"</div>"  
                    +"<div class = 'control-group' style = 'display:'><label class ='lblline'>Select Email Type:</label><label class = 'type'><input type= 'radio' name = ''  id ='' onclick = '' autocomplete = 'off'/> yahoo</label><label class = 'type'><input type= 'radio' name = '' value =''  id ='' onclick = '' autocomplete = 'off'/> gmail</label><label class = 'type'><input type= 'radio' name = '' value ='' autocomplete = 'off'/>hotmail</label> <label class = 'type'><input type = 'radio' name = '' value = ''  id = '' onclick = '' autocomplete = 'off'/>ymail</label><label class = 'type'><input type= 'radio' name = '' value =''  id ='' onclick = '' autocomplete = ''/>outlook</label><label class = 'type'><input type= 'radio' name = '' value = ''  id = '' onclick = ''  autocomplete = 'off'/>yandex</label>"
                    +"<label class = 'type'><input type= 'radio' name = '' value =''  id ='' onclick = '' autocomplete = 'off'/>zoho</label><label class = 'type'><input type= 'radio' name = '' value = ''  id = '' onclick = ''autocomplete = ''/>aim</label> <label class = 'type'><input type= 'radio' name = '' value = ''  id = '' onclick = '' autocomplete = 'off'/>mail</label> <label class = 'type'><input type= 'radio' name = '' value = ''  id = '' onclick = '' autocomplete = ''/>Inbox</label>"+"</div>"
                    +"<div class ='control-group' style = 'display:none'><label class = 'lblline'>Enter Email Type:</label><label>@</label><input type = 'text' class = 'span3' onkeyup= '' onfocus= '' id = '' autocomplete = 'off'/><label class = 'type'><input type= 'radio' name = '' id = '' onclick = '' autocomplete = 'off' />com</label><label class = 'type'><input type= 'radio' name = '' id = '' onclick = '' autocomplete = ''/>org</label><label class = 'type'><input type= 'radio' name = '' id = '' onclick = '' autocomplete = 'off'/>edu</label> <label class = 'type'><input type= 'radio' name = '' id ='' onclick = '' autocomplete = 'off'/>net</label>"
                    +"<label class = 'type'><input type= 'radio' name = '' id = '' onclick = '' autocomplete = 'off'/>gov</label>"+"</div>"
                    +"<div class = 'control-group'>"+ "<p style = 'margin-left:40px;'>Would you like to be notified when the techician is enrounte by<input type = 'radio' name = 'choi' id ='same' value = 'text1' onclick = '' autocomplete = 'off'> Text <input type = 'radio' id = 'choice2' value = 'Email' name = 'choi' autocomplete = 'off'> Email or <input type = 'radio' name = 'choi' id ='techBoth' autocomplete = 'off'> Both ?</p>"  +"<div>"
                    +"<div class = 'control-group' style = 'display:none'><label class ='lblline'>Mobile Text Alert: </label><input class= 'span2' type = 'text'  maxlength = '12' name = '' onkeyup = 'InputPhone(this)' onblur = 'showNumber()' autocomplete = 'off'/> <span class = 'phoneList1' style = 'font-size:17px;'></span>"+ "</div>"
                    +"<div class = 'control-group' style = 'display:none'><label class ='lblline'>Email Address: </label> <input class= 'span5' type = 'text' name = 'sameEmail' id = '' autocomplete = 'off'/>"  +"</div>"
                    +"<div class = 'control-group'><span class = 'emList' style = 'font-size:17px;'></span></div>"
                    +"</div>");
	  }else if(n.checked){
//		document.getElementById('meADD').innerHTML="<font color = 'red'>No button is checked</font>";
		$(".contractName2").empty();
	  }else{
		document.getElementById('meADD').innerHTML="<font color = 'red'>Okay</font>";
	  }
	 
	}//end of additonAPP()


function appFirst(){
    var nF = $('.nFirst').val();
    //var nF =document.getElementsByName("nFirst[]");

    for(i = 0; i < nF.length; i++){
        if(nf.length == ""){
           document.getElementById('nfirstMess').innerHTML="<font color = 'red'> Enter First Name </font>"
        }else{
            document.getElementById('nfirstMess').innerHTML="<font color = 'red'> Name have been Enter </font>"
        }

    }

}//end of function
 

 function titleSp(){
    var title = $(".titleText").val();
    var exp = /^[a-zA-Z]+(\s+[a-zA-Z]+)?$/;//allow white space between names;
         
    for (i=0; i<title.length; i++){
        if (title.length == ''){
            $(".titleText").focus();
            $(".titleSpan").text( 'Enter Title of Contact'); 
        } else if(!exp.test(title)){
            $(".titleSpan").text( "Letter Only");
        }else{
            $(".titleSpan").text("");
        }
   
    }
    
}//end of function 

//function for contact list append allow text input value be letter only
function extAppend(obj){
     var aext = obj.value.replace(/\D/g, '');
     obj.value = '';

     for( var i = 0; i < aext.length; i++){
        obj.value +=  aext[i];
     }
}//end of function extAppend(obj)

function emailAppend(){
    var ane = document.getElementById("ane");//no email
    var ade = document.getElementById("ade"); //Decline  
    var adef = document.getElementById("adef"); //Default
    var clearb = document.getElementById("aclea"); //Clear

    if(ane.checked ||ade.checked || adef.checked || !clearb.checked){
        document.getElementById('aExample').disabled = true;
        document.getElementById('aExample1').disabled = true;
        return false;
    } else if(!ane.checked && !ade.checked && !adef.checked && clearb.checked ){
        document.getElementById('aExample').disabled = false;
        document.getElementById('aExample1').disabled = false;
        return false;
    }  else {
        document.getElementById('aExample').disabled = '';
        document.getElementById('aExample1').disabled = '';
        return true;
    }
}//end of Email Append()

function ema(){
      var emaio = $('.emaio').val();//first textbox
       for( var i = 0; i < emaio.length; i++){
            if (emaio.length == 0){
                $('.Ema').text('Enter Email Name');
                //$('.butSelect1').show();
                $('.nedd').hide();
                $('.domain2').hide();
            }else if(emaio.length > 0){
                $('.nedd').show();
                $('.butSelect1').hide();
                $('.domain2').hide();
            }else{
                $('.nedd').hide();
                $('.domain2').hide()
            }

       }
}