//this page is for format for credit card, phone number and date


window.onload = function load() {
   repScript();
   showThsi();
   copyNum();
   serviceConfirm();
   displayNum();
};



//setting the textbox
function displayNum(){
    var tn = document.getElementById('cusName').value;//first name
    var tn1 = document.getElementById('cuslName').value;//last name
    var tn2 = document.getElementById('inpho').value;//phone number
    var tn3 = document.getElementById('tname1').value;//phone number span display
     localStorage.setItem("cusName", tn);
     localStorage.setItem("cuslName", tn1);
     localStorage.setItem("inpho", tn2);
     localStorage.setItem("tname", tn3);
    return true;

}// end of displayNum()


 function showThsi(){
    var tn = localStorage.getItem('cusName');//first name
    var tn1 = localStorage.getItem('cuslName');//last name
    var tn2 = localStorage.getItem('inpho');//phone number
      document.getElementById('fname').value = tn;
      document.getElementById('lname').value = tn1;
      document.getElementById('inpho').value = tn2;
      //document.getElementById('idNum').value = tn2;
      return true;
} //end of showThsi

//function serviceConfirm(){
////    var dname = document.getElementById('fname').value;
//    var dn = localStorage.getItem('disName');//phone number
//      document.getElementById('fname').value = dn;
//    
//}

 /*this area is the format function for dob, ssn, expires date and phone number*/
//function to format SSN Number
function CC23(obj) {
    var snumber = obj.value.replace(/\D/g, ''),
        char = {3:'-',6:'-',11:'-'};
    obj.value = '';
    for (var i = 0; i < snumber.length; i++) {
        obj.value += (char[i]||'') + snumber[i];
    }
}//end of function

// function format for date
function DateFormat(obj) {
    var dnumber = obj.value.replace(/\D/g, ''),
        char = {2:'/',4:'/',11:'/'};
    obj.value = '';
    for (var i = 0; i < dnumber.length; i++) {
        obj.value += (char[i]||'') + dnumber[i];
    }
}//end of function

//for expire date format
function DateExpired(obj) {
    var denumber = obj.value.replace(/\D/g, ''),
        char = {2:'/',4:'/'};
    obj.value = '';
    for (var i = 0; i < denumber.length; i++) {
        obj.value += (char[i]||'') + denumber[i];
    }
}//end of function

//Phone number textbox for question: Who will tech need to contact upon arrival
function InputPh(obj){
     var phnum = obj.value.replace(/\D/g, ''),
        char = {3:'-',6:'-',10:'x'}; 
        obj.value = '';
    for (var i = 0; i < phnum.length; i++) {
        obj.value += (char[i]||'') + phnum[i];
    }
}

//function to format phone
function InputPhone(obj) {
    var pnum = obj.value.replace(/\D/g, ''),
        char = {3:'-',6:'-',10:'x'}; 
        obj.value = '';
    var num = '123-456-7811';
    var num1 = '123-456-7821';
    var num2 = '123-456-7831';
    var num3 = '123-456-7832';
    var truText = $("#inpho").val();
//    var truText1 = $("#tname1").val();

    for (var i = 0; i < pnum.length; i++) {
        obj.value += (char[i]||'') + pnum[i];
        if(truText.length === 0){
           document.getElementById("messTrunk").innerHTML="<font color = 'red'> Textbox Empty</font>";
           $('#hideLabel').show();
        }else if(truText === num) {
            document.getElementById("messTrunk").innerHTML="<font color = 'red'> Media Radio button is checked</font>";
            $("tname").val();
            $('#media').prop('checked', true);
            $('#hideLabel').hide();
            $('#ad1').show();
            //$(this).css('color','red');
        }else{
            document.getElementById("messTrunk").innerHTML="<font color = 'red'> Not a Chance!</font>";
            $('#media').prop('checked', false);
            $('#hideLabel').show();
        }
    }//end of for loop
}//end of function


//function for trunk Description
function trunDescr(){
    var deName = $("#tname").val();
    //pattern
    var pex = /^[0-9 a-zA-Z\s]+$/;//allow space between names
    
    if(deName.length == ""){
        document.getElementById('messTrunk').innerHTML="<font color = 'red'>Must have Trunk Description </font>";
    }else if(!deName.match(pex)){
        document.getElementById('messTrunk').innerHTML="<font color = 'red'>Letters Only</font>";
        $("#tname").css("background-color", "yellow"); 
    }else{
        document.getElementById('messTrunk').innerHTML="";
        $("#tname").css("background-color", ""); 
    }
}
function copyNum(){
    //var b = document.getElementById('same4');
    var a = document.getElementById('inpho').value;
    var b = document.getElementById('tname').value;
    document.getElementById('idNum').value = a;
    document.getElementById('tname1').value = b;
    
} 


//function for contact list append allow text input value be letter only
function extAppend(obj){
     var aext = obj.value.replace(/\D/g, '');
     obj.value = '';

     for( var i = 0; i < aext.length; i++){
        obj.value +=  aext[i];
     }
}//end of function extAppend(obj)

/* this area end for format function*/

//function for credit card number  ^\s*(\d{4}-){3}\d{4}\s*$|^\s*(\d{4} ){3}\d{4}\s*$|^\s*\d{16}\s*$
// function CC2(obj) {
//     var cnumber = obj.value.replace(/\s/g,''),
//         	char = {4:'-',8:'-',12:'-'};
//     obj.value = '';
//     for (var i = 0; i < cnumber.length; i++) {
//         obj.value += (char[i]||'') + cnumber[i];
//     }
// }
//end of function

//function for credit card number
function CC3(obj) {
    var cnumber = obj.value.replace(/\D/g, ''),
            char = {4:'-',8:'-',12:'-'};
    obj.value = '';
    for (var i = 0; i < cnumber.length; i++) {
        obj.value += (char[i]||'') + cnumber[i];
    }
}//end of function

//function to display last digit for credit card
//function four(){
//	 var letter = document.getElementById('strange');
//	 //letter = letter.match(new RegExp('.{1,4}$|.{1,4}', 'g')).join("-");
//	 letter.value = new Array(letter.value.length-3).join('x') + letter.value.substr(letter.value.length-4, 4);
//     alert(letter);
//}
// for the same checkbox for pages "Service, Replacement, Scheduled Service Inbound Call" 
// if  this button click it will display the same phone number as the phone number
function showNumber(){
    var number0 = document.getElementById('pho1');
    var number1 = document.getElementById('textphone');
    var number2 = document.getElementById('same');
    if (number2.checked){
       number1.value = number0.value;
    } else if(!number2.checked){
       $('.mobile').hide();
       number1.value = "";
    } 
}

function showNumber1(){
    var number3 = document.getElementById('same2');//checkbox to display value
    var numrde = document.getElementById('same4');
    var frame1 = document.getElementById('fname');//first name(enter on form)
    var frame2 = document.getElementById('rfname');//first name for modal
    //var frame3 = document.getElementById('mname');//middle name(form)
   // var frame4 = document.getElementById('rmname');//middle name modal
    var frame5 = document.getElementById('lname');//last name(form)
    var frame6 = document.getElementById('rlname');//Last name modal
    var numrde1 = document.getElementById('owinfo');
    
    if(number3.checked){
        frame2.value = frame1.value;
        //frame4.value = frame3.value;
        frame6.value = frame5.value;
    } else if(!number2.checked){
         frame2.value = "";
         frame6.value = "";
          brano();
    } 
}//end of function

// function addCoIn(){
//     var muit = document.getElementById("");
//     var muitt = document.getElementById("");
//     var option = document.createElement("option");
// }

// function showNumber3(){
//     var numrde = document.getElementById('hopefully');
//     var numrde1 = document.getElementById('sample');
//     var numrde2 = document.getElementById('firstMessage');

//     if(numrde.checked){
//        numrde2.value = numrde1.value; 

//     }

// }

function showNumber2(){
    var number4 = document.getElementById('same3');
    var number5 = document.getElementById('phonenumber');
    var number7 = document.getElementById('textphone');
    if(number4.checked){
        number7.value = number5.value;
    }else if(!number4.checked){
        number7.value = "";
    }
}

//functin for clear textbox cache
function clear(){
    document.getElementById('members').value ="";
    document.getElementById('phonenumber').value ="";
    document.getElementById('email').value ="";
    document.getElementById('textphone').value ="";
    document.getElementById('pho1').value ="";
    
}

//function for table Warranty "page Caller Id", if the date is less than the expired date it will display green
//if the is greater than it will display red
//function warDate(){
//    var today = new Date();
//    var compare = document.getElementById("date2").value;
//    //var compare = document.getElementById("date2");
//    var compare1 = document.getElementById("date0").value;
//    var date2 = new Date(compare1);
//    var date1 = new Date(compare);
//
//    //var dateString = "03-01-2012"
//    //var compareDates =  dateString < today ? 
//    if(compare.length == 0){
//        document.getElementById("col1").style.backgroundColor="";
//        document.getElementById("date2").style.color="";
//    } else if(today > date1){
//        document.getElementById("col1").style.backgroundColor="#FF0000";
//        document.getElementById("date2").style.color="#000000";
//        var test = document.getElementById('date1').textContent;
//        alert(test);
//    } else if(today < date1){
//        document.getElementById("col1").style.backgroundColor="#008A00";
//        document.getElementById("date2").style.color="#000000";
//    }
//
//    if(compare1.length == 0){
//            document.getElementById("col2").style.backgroundColor="";
//            document.getElementById("date0").style.color="";
//    }else if(today > date2){
//            document.getElementById("col2").style.backgroundColor="#FF0000";
//            document.getElementById("date0").style.color="#000000";
//    }else if(today < date2){
//            document.getElementById("col2").style.backgroundColor="#008A00";
//            document.getElementById("date0").style.color="#000000";
//    }
//        
//}//end of function



//for email update button
function change(){
    var noinfo = document.getElementById('email');
    var disp = document.getElementById('updateE');
    if(disp.checked){
        document.getElementById('email').disabled = true;
    }else{
        document.getElementById('email').disabled = false;
    }
}

function change2(){
    var noinfo0 = document.getElementById('emailtwo');
    var disp1 = document.getElementById('updateE1');
    if(disp1.checked){
        disp = noinfo0.value = "";
    }
}

//if the update checkbox is checked it will delete the information  to enter new  address information
function addChange(){
var cadd1 = document.getElementById('addupdate');
var cadd = document.getElementById('address');
var cadd2 = document.getElementById('address1');
var cadd3 = document.getElementById('strloc');
var cadd4 = document.getElementById('address2');
var cadd5 = document.getElementById('zip');
var cadd7 = document.getElementById('city');
var cadd7 = document.getElementById('state');
    if (cadd1.checked){
        cadd1 = cadd.value = "";
        cadd1 = cadd2.value = "";
        cadd1 = cadd3.value = "0";
        cadd1 = cadd4.value = "";
        cadd1 = cadd5.value = "";
        cadd1 = cadd7.value = "";
//        cadd1 = cadd8.value = "";
    }
}//end of function

function addChange1(){
    var cadd8 = document.getElementById('addupdate20');
    var cadd9 = document.getElementById('address21');
    var cadd10 = document.getElementById('address12');
    var cadd12 = document.getElementById('strloc21');
    var cadd13 = document.getElementById('address212');
    var cadd14 = document.getElementById('zip21');
    var cadd15 = document.getElementById('city21');
    var cadd17 = document.getElementById('state21');
    if (cadd8.checked){
        cadd8 = cadd9.value = "";
        cadd8 = cadd10.value = "";
        cadd8 = cadd12.value = "0";
        cadd8 = cadd13.value = "";
        cadd8 = cadd14.value = "";
        cadd8 = cadd15.value = "";
        cadd8 = cadd17.value = "";
    }
}//end of function

function ZipClear(){
  var clzi = document.getElementById('clzipco');
  var clez = document.getElementById('zip');
  var clse = document.getElementById('city');
  var clce = document.getElementById('state');

  //credit card
  var clziz = document.getElementById('clcreditco');
  var strange = document.getElementById('strange');
    if(clzi.checked){
            clzi = clez.value = "";
            clzi = clse.value = "";
            clce = clce.value = "";
        } else{
            clzi = clez.value ;
            clzi = clse.value ;
            clce = clce.value ;
        }

     if(clziz.checked){
        clziz = strange.value = "";
     } else {
        clziz = strange.value ;
     }   
}
/*This function is for page Caller id for service type, when select it will change color to show selection , unclick it will go back to it orginal color*/
function colorC(layer){
  var mylayer= document.getElementById(layer);
  var input = mylayer.childNodes[0];
    if(input.checked == true){
    mylayer.style.backgroundColor = "#000";
    } else {
    mylayer.style.backgroundColor = "#009300";
  }
}

function amountOwe(){
var amowe;
var balmain;
var aomain;
var amowe = document.getElementById('amowe').value;
var balmain = document.getElementById('balmain').value;
var aomain = document.getElementById('aomain').value;
document.getElementById("disamount").innerHTML = "";
document.getElementById("disamount1").innerHTML = "" ;
document.getElementById("disamount2").innerHTML = "" ;
document.getElementById("disamount3").innerHTML = "" ;
together = amowe - balmain;
together1 = balmain - amowe;
together2 = amowe - balmain- aomain;

	 if (amowe > balmain){
		document.getElementById("hcareag").style.backgroundColor="#FF0000";
		document.getElementById("disamount").innerHTML = "Invoice total amount $ " + amowe;
		document.getElementById("disamount1").innerHTML = "Present balance $ " + balmain;
        document.getElementById("disamount2").innerHTML = "Current Payment $ " + aomain;
		document.getElementById("disamount3").innerHTML = "Current Amount $ " + together2;
	 } else if(amowe < balmain){
		document.getElementById("hcareag").style.backgroundColor="#009300";
		document.getElementById("disamount").innerHTML = "Invoice total amount: " + amowe;
		document.getElementById("disamount1").innerHTML = "Present balance: " + balmain;
		document.getElementById("disamount2").innerHTML = "You have overpaid: " + together1;
		
	 } else if(amowe <= balmain){
		document.getElementById("hcareag").style.backgroundColor="";
                document.getElementById("disamount").innerHTML = "Invoice total amount: " + amowe;
                document.getElementById("disamount1").innerHTML = "Present balance: " + balmain;
                document.getElementById("disamount2").innerHTML = "Current Payment: " + aomain;
                document.getElementById("disamount3").innerHTML = "Current Amount: " + together2;
	}else{
                document.getElementById("hcareag").style.backgroundColor="";
     }
}

function amountRE(){
    var umn = 100.00;
    umn = umn.toFixed(2);
    var ufnd = document.getElementById('ufnd').value;
     if (parseInt(ufnd)<= parseInt(umn)){
        document.getElementById("ufnd").style.backgroundColor="";
        document.getElementById("forun").innerHTML = "" ;
    }else if(parseInt(ufnd)> parseInt(umn)){
        document.getElementById("ufnd").style.backgroundColor="#FF0000";
        document.getElementById("ufnd").style.color="#000000";
        document.getElementById("forun").innerHTML = "<font color = 'red'> Need Manager Approval Over </font>" + umn;
    } else {
       document.getElementById("ufnd").style.backgroundColor=""; 
       document.getElementById("forun").innerHTML = "";
    }
}

function invoiceBalance(){
    var listVal = document.getElementById('invo');
    var listVal1 = document.getElementById('totamouo');
    var listVal2 = document.getElementById('totamou');
    var listVal3 = document.getElementById('totoweo');
    var listVal4 = document.getElementById('totowe');
    var listVal5 = document.getElementById('invo1');
    var listVal7 = document.getElementById('totamoua');
    var listVal8 = document.getElementById('totamou1');
    var listVal9 = document.getElementById('totowea');
    var listVal10 = document.getElementById('totowe1');
    var listVal11 = document.getElementById('invo2');
    var listVal12 = document.getElementById('totamoub');
    var listVal13 = document.getElementById('totamou2');
    var listVal14 = document.getElementById('totoweb');
    var listVal15 = document.getElementById('totowe2');
    var listVal17 = document.getElementById('tottoo');
    var listVal18 = document.getElementById('tottoo4');
    var listVal19 = document.getElementById('tottoo1');
    var listVal20 = document.getElementById('tottoo5');
    var listVal21 = document.getElementById('tottoo3');
    var listVal22 = document.getElementById('tottoo7');


if (listVal.checked){
        listVal2.value = listVal1.value;
        listVal4.value = listVal3.value;
        listVal18.value = listVal17.value;
    } else{
        listVal2.value = "";
        listVal4.value = "";
        listVal18.value = "";
    }

    if(listVal5.checked){
        listVal8.value = listVal7.value;
        listVal10.value = listVal9.value;
        listVal20.value = listVal19.value;
    } else {
        listVal8.value = "";
        listVal10.value = "";
        listVal20.value = "";
    }

    if(listVal11.checked){
        listVal13.value = listVal12.value;
        listVal15.value = listVal14.value;
        listVal22.value = listVal21.value;
    } else {
        listVal13.value = "";
        listVal15.value = "";
        listVal22.value = "";
    }
    var total=Number($('#totamouo').val()) - Number($('#totoweo').val());
    $('#tottoo').val(total);

    var total1=Number($('#totamoua').val()) - Number($('#totowea').val());
    $('#tottoo1').val(total1);

    var total2=Number($('#totamoub').val()) - Number($('#totoweb').val());
    $('#tottoo3').val(total2);

    var total3=Number($('#tottoo').val()) + Number($('#tottoo1').val()) + Number($('#tottoo3').val());
    $('#fintot').val(total3);
}

function ocaSumm(){
    var restot = Number($('#ationsum').val()) - Number($('#taionsum').val());
     $('#tiaonsum').val(restot); 
   var restot1 = Number($('#atsum').val()) - Number($('#tasum').val());
    $('#taisum').val(restot1); 
   var restot2 = Number($('#atsum1').val()) - Number($('#tasum1').val());
    $('#taisum1').val(restot2);
   var restot3 = Number($('#atsum2').val()) - Number($('#tasum2').val());
    $('#taisum2').val(restot3);
   var restot4 = Number($('#taisum').val()) + Number($('#taisum1').val()) + Number($('#taisum2').val());
    $('#ationsum').val(restot4); 

    var restot5 = Number($('#fatsum').val()) - Number($('#fasum').val());
    $('#ftaisum').val(restot5);
    var restot7 = Number($('#fatsum1').val()) - Number($('#ftasum1').val());
    $('#ftaisum1').val(restot7);
    var restot8 = Number($('#fatsum2').val()) - Number($('#ftasum2').val());
    $('#ftaisum2').val(restot8);
    var restot9 = Number($('#ftaisum').val()) + Number($('#ftaisum1').val()) + Number($('#ftaisum2').val());
    $('#ationsum1').val(restot9); 
    var restot10 = Number($('#ationsum1').val()) - Number($('#taionsum1').val());
    $('#tiaonsum1').val(restot10);

    var restot11 = Number($('#oatsum').val()) - Number($('#oasum').val());
    $('#otaisum').val(restot11);
    var restot12 = Number($('#oatsum1').val()) - Number($('#otasum1').val());
    $('#otaisum1').val(restot12);
    var restot13 = Number($('#oatsum2').val()) - Number($('#otasum2').val());
    $('#otaisum2').val(restot13);
    var restot14 = Number($('#otaisum').val()) + Number($('#otaisum1').val()) + Number($('#otaisum2').val());
    $('#ationsum2').val(restot14); 
    var restot15 = Number($('#ationsum2').val()) - Number($('#taionsum2').val());
    $('#tiaonsum2').val(restot15);

    var restot17 = Number($('#latsum').val()) - Number($('#lasum').val());
    $('#ltaisum').val(restot17);
    var restot18 = Number($('#latsum1').val()) - Number($('#ltasum1').val());
    $('#ltaisum1').val(restot18);
    var restot19 = Number($('#latsum2').val()) - Number($('#ltasum2').val());
    $('#ltaisum2').val(restot19);
    var restot20 = Number($('#ltaisum').val()) + Number($('#ltaisum1').val()) + Number($('#ltaisum2').val());
    $('#ationsum3').val(restot20); 
    var restot21 = Number($('#ationsum3').val()) - Number($('#taionsum3').val());
    $('#tiaonsum3').val(restot21);

    var restot22 = Number($('#tiaonsum').val()) + Number($('#tiaonsum1').val()) + Number($('#tiaonsum2').val()) + Number($('#tiaonsum3').val());
    $('#fintot').val(restot22); 

}
$(document).ready(function(){
        $('#compname').keyup(function() {
        var $compname = $(this);
        // this is the value before the keypress
        var beforeVal = $compname.val();
        setTimeout(function() {
            // this is the value after the keypress
            var afterVal = $compname.val();
            $('#companyContract').prepend(
                $('<div></div>').append("<div class = 'control-group'><label class ='question'>First Name:</label><input class='span3' type = 'text' name ='unitage' id = 'age'/><label class = 'question2'>Last Name:</label><input class='span3' type = 'text' name ='unitage' id = 'age'/></div>" )
            );
        }, 0);
    });
});

//function for to show edit or present script(phone number)
//this function when is click the checkbox which is for the page it is for 
//it will change text script  message for phone
//if all check it will change it for all the pages
function Onetst(){
    var servic = document.getElementById('sRepair');
    var reRes = document.getElementById('reRes');
    var rePla = document.getElementById('repPage');
    var reCom = document.getElementById('plicPage');
    var reCon = document.getElementById('licPage');
    var reBill = document.getElementById('inBill');
    var reMBill = document.getElementById('pbill');
    var geDch = document.getElementById('greSch');
    var geDSch = document.getElementById('gscheduled');
    var geDrpl = document.getElementById('gRpla');
    var upCpay = document.getElementById('upCpay');
    var rpsol = document.getElementById('uctior');
    var hmanu = document.getElementById('huReso');
    var mfoep = document.getElementById('mfoep');
    var loyment = document.getElementById('loyment');
    var tainq = document.getElementById('tainq');
    var accrecv = document.getElementById('accrecv');
    var lrolay = document.getElementById('lrolay');
    var ablepay = document.getElementById('ablepay');
    var ancelcl = document.getElementById('ancelcl');
    var difymo = document.getElementById('difymo');
    var fasta = document.getElementById('fasta');
    var veremoym = document.getElementById('veremoym');
    var hpsta = document.getElementById('hpsta');
    var purc = document.getElementById('purc');
    var aythomew = document.getElementById('aythomew');
    var meNotes = document.getElementById('rodeo').value;
    var newString = meNotes.replace(/showScript/g, "");
     //for checkbox phone(service page)
    if(servic.checked){
        // document.cdsquestions.pho1.checked = document.getElementById('showScript').innerHTML = "Phone number new message" + meNotes;
        document.getElementById('showScript').innerHTML = " Service Repair New Message:</br>" + newString;
    } 
    //for checkbox phone number (Reschedule Service)
    if (reRes.checked){
        // document.schService.pho1.checked = document.getElementById('showScript').innerHTML = "Reschedule Service phone number new message" + meNotes;
         document.getElementById('showScript').innerHTML = "Reschedule Service New Message:</br>" + newString;
    }
    //for checkbox phone number (Replacement Service)
    if (rePla.checked){
         //document.replacement.pho1.checked = document.getElementById('showScript').innerHTML = "Replacement phone number new message" + meNotes;
         document.getElementById('showScript').innerHTML = "Replacement New Message:</br>" + newString;
        // document.body.appendChild("Replacement" + meNotes);
    } 
    //for phone number(Compliments(Happy)
    if (reCom.checked){
         //document.getElementById('showScrippurct').innerHTML = "Replacement New Message:</br>" + newString;
        document.getElementById('showScript').innerHTML = "Compliments New Message:</br>" + newString;
    } 
    //for phone number(Concerns(UnHappy))
    if (reCon.checked){
         //document.getElementById('showScript').innerHTML = "Replacement New Message:</br>" + newString;
        document.getElementById('showScript').innerHTML = "Concerns New Message:</br>" + newString;
    } 
    //for phone number(Billing)
    if (reBill.checked){
         //document.getElementById('showScript').innerHTML = "Replacement New Message:</br>" + newString;
        document.getElementById('showScript').innerHTML = "Billing New Message:</br>" + newString;
    } 
    //for Make a Payment 
    if (reMBill.checked){
         document.getElementById('showScript').innerHTML = "Make a Payment New Message:</br>" + newString;
    } uctior
    //for Reschedule Service Appointment 
    if (geDch.checked){
         document.getElementById('showScript').innerHTML = "Reschedule Service Appointment:</br>" + newString;
    } 
    //for Reschedule Scheduled Appointment: 
    if (geDSch.checked){
         document.getElementById('showScript').innerHTML = "Reschedule Scheduled Appointment:</br>" + newString;
    } 
    //for Reschedule Placement Appointment: 
    if (geDrpl.checked){
         document.getElementById('showScript').innerHTML = "Reschedule Placement Appointment:</br>" + newString;
    } 
    //for Update Club Payment Appointment: 
    if (upCpay.checked){
         document.getElementById('showScript').innerHTML ="Update Club Payment Appointment:</br>" + newString;
    }
    //for Solicitor
    if (rpsol.checked){
         document.getElementById('showScript').innerHTML = "Solicitor New Message:</br>" + newString;
    }
    //for Human Resource
    if (hmanu.checked){
         document.getElementById('showScript').innerHTML = "Human Resource New Message:</br>" + newString;
    }
    //message for employee
    if (mfoep.checked){
         document.getElementById('showScript').innerHTML = "Message for Employee New Message:</br>" + newString;
    }
    //Employment
    if (loyment.checked){
         document.getElementById('showScript').innerHTML = "Employee New Message:</br>" + newString;
    }
    //Techician Arrival Inquiry
    if (tainq.checked){
         document.getElementById('showScript').innerHTML = "Techician Arrival Inquiry New Message:</br>" + newString;
    }
    //Account Receivable
    if (accrecv.checked){
         document.getElementById('showScript').innerHTML = "Account Receivable Inquiry:</br>" + newString;
    }
    //Payroll
    if (lrolay.checked){
         document.getElementById('showScript').innerHTML = "Payroll New Message :</br>" + newString;
    }
    //Account Payablveremoyme
    if (ablepay.checked){
         document.getElementById('showScript').innerHTML = "Account Payable New Message :</br>" + newString;
    }
    //Cancel Club Membership
    if (ancelcl.checked){
         document.getElementById('showScript').innerHTML = "Cancel Club Membership New Message :</br>" + newString;
    }
    //Modify Club Membership
    if (difymo.checked){
         document.getElementById('showScript').innerHTML = "Modify Club Membership New Message :</br>" + newString;
    }
    //Financing Application Status
    if (fasta.checked){
         document.getElementById('showScript').innerHTML = "Financing Application Status New Message :</br>" + newString;
    }
    //Employment Verification
    if (veremoym.checked){
         document.getElementById('showScript').innerHTML = "Employment Verification New Message :</br>" + newString;
    }
    //Home Repair Status
    if (hpsta.checked){
         document.getElementById('showScript').innerHTML = "Employment Verification New Message :</br>" + newString;
    }
    //Purchasing
    if (purc.checked){
         document.getElementById('showScript').innerHTML = "Purchasing New Message :</br>" + newString;
    }
    //Are you the homeowner?
    if (aythomew.checked){
         document.getElementById('showScript').innerHTML = "Are you the homeowner New Message :</br>" + newString;
    }
}

//for first name admin
// function Onetst1(){
//     var meNotes1 = document.getElementById('rodeo').value;
//     var newString1 = meNotes1.replace(//g, "showScript1");
//     var wiType = document.getElementById('wiTypes').value;
    

//     switch (wiType){
//         case "1":
//             document.getElementById('showScript1').innerHTML = "All page changes:</br>" + newString1;
//         break;
//         case "2":
//              var sracp = document.getElementById('showScript1').getElementsByTag Name('strong');
//              for(var i=strong.length; i-->0;){
//                 strong[i].onclick = function(){
//                     document.getElementById('showScript1') = "Test Now"
//                 };
//              }
//          break;
//         case "3":
//             document.getElementById('showScript1').innerHTML = "Replacement" + meNotes1;
//          break;
//         case "4":
//             document.getElementById('showScript1').innerHTML = "Choice 4";
//          break;
//         case "5":
//             document.getElementById('showScript1').innerHTML = "Choice 5";
//          break;
//         case "7":
//             document.getElementById('showScript1').innerHTML = "Choice 7";
//         break;
//         case "8":
//             document.getElementById('showScript1').innerHTML = "Choice 8";
//         break;
//         case "9":
//             document.getElementById('showScript1').innerHTML = "Choice 9";
//         break;
//         case "10":
//             document.getElementById('showScript1').innerHTML = "Choice 10";
//         break;
//         case "11":
//             document.getElementById('showScript1').innerHTML = "Choice 11";
//         break;
//         case "12":
//             document.getElementById('showScript1').innerHTML = "Choice 12";
//         break;
//        default:
//          // Display an error dialog.
//             document.getElementById('showScript1').innerHTML = "test";
//          break; 
//   }
    
// }//end of function


// function TypeSc(){
//     var pTNotes = document.getElementById('rodeoList').value;
//     var newString1 = pTNotes.replace('"",/showScript1/g');
//     document.getElementById('showScript1').innerHTML = "New Message:" + newString1;
// }
 
// function MiState(){
//     var mTNotes = document.getElementById('rodeo1').value;
//     // var newString2 = pTNotes.replace('"",/showScript2/g');
//     document.getElementById('showScript2').innerHTML = "New Message:" + mTNotes;
// }




//residential dropdown list for not cooling evenly
        //click other it will display hidden show in jquery function id =nceOTher
        // and input text into textbox and click add button it be add into the dropdown list
        function roomEvenly(){
           // var rlist=document.getElementById("addOther").value;//textbox
            var rlist=document.getElementById("recnAdd").value;//textbox
            var molist = document.getElementById("addR");//dropdown List
            var option1 = document.createElement("option");//create new option
            var rmpat= /^[a-zA-Z\s]+$/;//pattern
            //selection
            var coption = document.getElementById('masterb');//masterbed room
            var coption1 = document.getElementById('kitchen');//kitchen
            var coption2 = document.getElementById('living');//living room
            var coption3 = document.getElementById('den');//den
            var coption4 = document.getElementById('diningRoom');//dining room
            var coption5 = document.getElementById('GameRoom');//game room
            var coption7 = document.getElementById('office');//office
            var coption8 = document.getElementById('firstFl'); //first floor
            var coption9 = document.getElementById('secondFl');//second floor
            var coption10 = document.getElementById('thirdFl');//third floor
            var coption11= document.getElementById('fourthFl');//fourth floor
            var coption12 = document.getElementById('sunRoom');//sun room
            var coption13 = document.getElementById('masterBath');//master bath
            
            if(rlist.length == 0){
               if (!coption.checked &&!coption1.checked && !coption2.checked && !coption3.checked 
                    && !coption4.checked && !coption5.checked && !coption7.checked && !coption8.checked 
                    && !coption9.checked && !coption10.checked  && !coption11.checked && !coption12.checked
                    && !coption13.checked){
                    $('.heatNOS').hide();
                    document.getElementById('resiMessage4').innerHTML = "<font color = 'red'> Please Select Room is not cooling evenly</font>"
                }else{
                    document.getElementById('resiMessage4').innerHTML = ""
                }
            } else if(!rlist.match(rmpat)){
                    //document.getElementById('addOther').focus();
                    document.getElementById("resiMessage4").innerHTML="<font color = 'red'> Letters Only</font>"
                    return false;
            }else if(rlist.match(rmpat)){
                $('.heatNOS').hide();
                $('input[name= cpi1]').prop('checked', false);//Not Cooling Issues
                $("#moorCooling").empty();
                document.getElementById("resiMessage4").innerHTML=""
                return true;
            }
        }// end of roomEvenly()

        //residential dropdown list for not heating  evenly
        //click other it will display hidden show in jquery function id =heatOther
        // and input text into textbox and click add button it be add into the dropdown list
        function hEvenly(){
            //var hlist=document.getElementById("heOther").value;//textbox
            var hlist=document.getElementById("OtherHeat").value;//textbox
            var healist = document.getElementById("HeatIssue");//dropdown List
            var option2 = document.createElement("option");//create new option
            var htpat= /^[a-zA-Z\s]+$/;//pattern
            //selection
            var heption = document.getElementById('hmasterb');
            var heption1 = document.getElementById('hkitchen');
            var heption2 = document.getElementById('hliving');
            var heption3 = document.getElementById('hden');
            var heption4 = document.getElementById('hdiningRoom');
            var heption5 = document.getElementById('hgameRo');
            var heption7 = document.getElementById('hOffice');
            var heption8 = document.getElementById('hfirstFl');
            var heption9 = document.getElementById('hsecondFl');
            var heption10 = document.getElementById('hthirdFl');
            var heption11 = document.getElementById('hfourthFl');
            var heption12 = document.getElementById('hsunRoom');
            var heption13 = document.getElementById('hmasterBa');
            var heption14 = document.getElementById('hUtilityRo');

            if(hlist.length == 0){
                if (!heption.checked && !heption1.checked && !heption2.checked && !heption2.checked && !heption4.checked && !heption5.checked && !heption7.checked && !heption8.checked && !heption9.checked &&  !heption10.checked &&!heption11.checked && !heption12.checked && !heption13.checked &&!heption14.checked){
                     document.getElementById('cpipMess').innerHTML = "<font color = 'red'> Please Select Room is not heatly evenly</font>"
                   } else {
                        document.getElementById('cpipMess').innerHTML = ""
                   }
            } else if(!hlist.match(htpat)){
                // document.getElementById('heOther').focus();
                document.getElementById("cpipMess").innerHTML="<font color = 'red'> Letters Only</font>"
                return false;
            }else if(hlist.match(htpat)){
                $('input[name= cpip]').prop('checked', false);//Room Not Evenly (Residential)
                $("#heatEName").empty();
                document.getElementById("cpipMess").innerHTML=""
                return true;  
            }

        }//end of hEvenly()
        
        //company other selection
        //click other it will display hidden show in jquery function id =compAd
        // and input text into textbox and click add button it be add into the dropdown list
        function CompanyOther(){
            var complist=document.getElementById("yanpAdd").value;//textbox
            var busnlist = document.getElementById("companyList");//dropdown List
            var option4 = document.createElement("option");//create new option
            var cpat= /^[a-zA-Z\s]+$/;//pattern
            //selection
            var btype = document.getElementById("cInc");//INC
            var btype1 = document.getElementById("cLLc");//LLC
            var btype2 = document.getElementById("cLP");//LP

            if(complist.length == 0){
                $("#homeselect1").hide();
                if(!btype.checked && !btype1.checked && !btype2.checked){
                    document.getElementById("comAddon").innerHTML="<font color = 'red'> Select Business Corporation</font>"
                    return false;
                }else{
                    $("#homeselect1").show();
                    document.getElementById("comAddon").innerHTML=""
                    return false;
                }
            } else if(!complist.match(cpat)){
                $("#homeselect1").hide();
                document.getElementById('yanpAdd').focus();
                document.getElementById("comAddon").innerHTML="<font color = 'red'> Letters Only</font>"
                return false;
            }else if(complist.match(cpat)){
                $("#homeselect1").show();
                // option4.text = complist;
                // busnlist.options.add(option4);
                return true;
            }


        }//end of CompanyOther()



        //company other selection for Schedule Service
        //click other it will display hidden show in jquery function id =compAd
        // and input text into textbox and click add button it be add into the dropdown list
        function CompanyOther1(){
            var complist=document.getElementById("yanpAdd").value;//textbox
            var busnlist = document.getElementById("companyList");//dropdown List
            var option4 = document.createElement("option");//create new option
            var cpat= /^[a-zA-Z\s]+$/;//pattern
            //selection
            var btype = document.getElementById("cInc");//INC
            var btype1 = document.getElementById("cLLc");//LLC
            var btype2 = document.getElementById("cLP");//LP

            if(complist.length == 0){
                $(".mailBusiness").hide();
                if(!btype.checked && !btype1.checked && !btype2.checked){
                    document.getElementById("comAddon").innerHTML="<font color = 'red'> Select Business Corporation</font>"
                    return false;
                }else{
                    $(".mailBusiness").show();
                    document.getElementById("comAddon").innerHTML=""
                    return false;
                }
            } else if(!complist.match(cpat)){
                $(".mailBusiness").hide();
                document.getElementById('yanpAdd').focus();
                document.getElementById("comAddon").innerHTML="<font color = 'red'> Letters Only</font>"
                return false;
            }else if(complist.match(cpat)){
                $(".mailBusiness").show();
                // option4.text = complist;
                // busnlist.options.add(option4);
                return true;
            }
        }//end of CompanyOther()

        //building type
        //click other it will display hidden show in jquery function id =compAd
        // and input text into textbox and click add button it be add into the dropdown list

        function buildVal() {
            var re = document.getElementById('residential'); //residential
            var busin = document.getElementById('business');//business
            var indus = document.getElementById('industial');//industial
            var educ = document.getElementById('educational');//educational
            var relig = document.getElementById('religious');//religious
            var multi = document.getElementById('muilti');//Multi-family
            //hidden div textbox and radio button
            var x = document.getElementById("builtAdd").value;//textbox
            var x1 = document.getElementById("builtDDL");//dropdown List
            var optionx = document.createElement("option");//create new option
            var cpat= /^[a-zA-Z\s]+$/;//pattern

            if(x.length == 0){
                if(!re.checked && !busin.checked && !indus.checked && !educ.checked  && !relig.checked && !multi.checked){
                    document.getElementById("comAddon").innerHTML="<font color = 'red'> Choose one Residential, Business, Industial, Educational, Religious, Multi Family</font>"
                    return false;
                }else{
                    document.getElementById("comAddon").innerHTML=""
                    return false; 
                }
            } else if(!x.match(cpat)){
                document.getElementById('builtAdd').focus();
                document.getElementById("comAddon").innerHTML="<font color = 'red'> Letters Only</font>"
                return false;
            }else if(x.match(cpat)){
                document.getElementById("comAddon").innerHTML=""
                optionx.text = x;
                x1.options.add(optionx);
                return true;
                //sag();
            }
        }//end of buildVal()

        //Ladder (Package) 
        //click other it will display hidden show in jquery function id =otLadder
        // and input text into textbox and click add button it be add into the dropdown list
        function LadderSize(){
            var lsize=document.getElementById("ladSize").value;//textbox
            var ladlist = document.getElementById("ladderSeletion");//dropdown List
            var option5 = document.createElement("option");//create new option
            var lpat= /^[0-9]+$/;//pattern
            //ladder radio button selection
            var size = document.getElementById('ladSize');//16
            var size1 = document.getElementById('ladSize1');//24
            var size2 = document.getElementById('ladSize2');//30

            if(lsize.length == 0){ 
                $('.ParkSpecial').hide();//Special Parking Div
                 if(!size.checked && !size1.checked && !size2.checked){
                    $('#IssueDiv').hide();//Special Parking Div
                    document.getElementById('LadMessage').innerHTML="<font color = 'red'> Check Ladder Size</font>"
                    return false;
                }else {
                    $('#IssueDiv,.ensureDiv').show();//Special Parking Div
                    document.getElementById('LadMessage').innerHTML=""
                    return false;
                }
            }else if(!lsize.match(lpat)){
                $('.ParkSpecial').hide();//Special Parking Div
                $('#IssueDiv, .ensureDiv').hide();//Special Parking Div
                document.getElementById('ladSize').focus();
                document.getElementById("LadMessage").innerHTML="<font color = 'red'> Number Only</font>"
                return false;
            }else if(lsize.match(lpat)){
                $('#IssueDiv').show();//Special Parking Div
                document.getElementById("LadMessage").innerHTML=""
                $('.ParkSpecial, .ensureDiv').show();//Special Parking Div
                // ladlist.options.add(option5);
                return true;
            }
        }//end of LadderSize()

        //Heating Issues Residential
        //click other it will display hidden show in jquery function id =IssOther
        // and input text into textbox and click add button it be add into the dropdown list
        function HeatIssu(){
            // var teaText=document.getElementById("addheaOther").value;//textbox   
            var teaText=document.getElementById("IssOther").value;//textbox
            var ladlist = document.getElementById("rheatissu");//dropdown List
            var option7 = document.createElement("option");//create new option
            var hpat= /^[a-zA-Z\s]+$/;//pattern
            //selection
            var hption = document.getElementById('nh');//Not Heating
            var hption1 = document.getElementById('lh');//Low Heating
            var hption2 = document.getElementById('noh');//Noise
            var hption3 = document.getElementById('sh');//Smell
            var hption4 = document.getElementById('vh');//Vibration
            var hption5 = document.getElementById('nhe');// Not Heating Evenly
            var hption7 = document.getElementById('cotbh');//Tripping Beaker
            var hption8 = document.getElementById('wlh');//water leak
            var hption9 = document.getElementById('fzh');//freezing up

            if(teaText.length == 0){
                if (!hption.checked && !hption1.checked && !hption2.checked && !hption3.checked && !hption4.checked && !hption5.checked && !hption7.checked && !hption8.checked && !hption9.checked){
                    document.getElementById('heaMessage').innerHTML = "<font color = 'red'> Please Select Room is heating issues</font>"
                   } else {
                        document.getElementById('heaMessage').innerHTML = ""
                   }
            }else if(!teaText.match(hpat)){
                document.getElementById('IssOther').focus();
                document.getElementById("heaMessage").innerHTML="<font color = 'red'> Letters Only</font>"
                return false;
            }else if(teaText.match(hpat)){
                $('input[name= cpii]').prop('checked', false);//Cooling Issues
                 return true;
             } 
             
        }//end of HeatIssu()

        //Estimate Ceiling Height
        //click other it will display hidden show in jquery function id =IssOther
        // and input text into textbox and click add button it be add into the dropdown list
        function CeilingHeight(){
            var esticText=document.getElementById("atticInput").value;//textbox
            var ceilist = document.getElementById("atticList");//dropdown List
            var option8 = document.createElement("option");//create new option
            var ewpat= /^[0-9]+$/;//pattern
            //Estimate Ceiling Height
            var luta = document.getElementById('luta');//Access Via
            var luta1 = document.getElementById('luta1');//Pull Down Stair Case
            var luta2 = document.getElementById('luta2');//Scuttle Whole
            var luta3 = document.getElementById('luta3');//Door
            
            if(esticText.length == 0){
                if(!luta.checked && !luta1.checked && !luta2.checked && !luta3.checked){
                   document.getElementById("attticmess").innerHTML="<font color = 'red'> Select Ceiling Height</font>"
                   return false;
                }else{
                   document.getElementById("attticmess").innerHTML=""
                   return false; 
                }
            } else if(!esticText.match(ewpat)){
                document.getElementById('atticInput').focus();
                document.getElementById("attticmess").innerHTML="<font color = 'red'> Numbers Only</font>"
                return false;
            }else if(esticText.match(ewpat)){
                document.getElementById("attticmess").innerHTML=""
                option8.text = esticText;
                ceilist.options.add(option8);
                return true;
            }
        }//end of CeilingHeight()

        //Estimate Ladder Height (Heating , Spilt System)
        //click other it will display hidden show in jquery function id =ELNOth
        // and input text into textbox and click add button it be add into the dropdown list
        function heatSpilt(){
            var numText = document.getElementById("olz").value;//textbox
            var hespist = document.getElementById("elnList");//dropdown List
            var option9 = document.createElement("option");//create new option
            var swpat= /^[0-9]+$/;//pattern
            //selection
            var roSize = document.getElementById("rosi1");//16
            var roSize1 = document.getElementById("rosi2");//24
            var roSize2 = document.getElementById('rosi3');//30

            if(numText.length == 0){
                $('#rooHeight').hide();
                if(!roSize.checked && !roSize1.checked && !roSize2.checked){
                    document.getElementById("reatSPI").innerHTML="<font color = 'red'> Select Ladder Size(Residential Spilt System)</font>"
                    return false;
                } else{
                    $('#rooHeight').show();
                    document.getElementById("reatSPI").innerHTML=""
                    return false;
                }
            } else if(!numText.match(swpat)){
                document.getElementById('olz').focus();
                document.getElementById("reatSPI").innerHTML="<font color = 'red'> Numbers Only</font>"
                return false;
            }else if(numText.match(swpat)){
                $('#rooHeight').show();
                $('input[name= roSize]').prop('checked', false);//Cooling Issues
                document.getElementById("reatSPI").innerHTML=""
                return true;
            }
        }//end of heatSpilt()

        //Cooling (radio button) (Unit Concern/Problem )
        //click other it will display hidden show in jquery function id = cResIOther
        // and input text into textbox and click add button it be add into the dropdown list
        function UnitOther(){
            var coText=document.getElementById("cResIOther").value;//textbox
//            var poplist = document.getElementById("ResCoolI");//dropdown List
//            var option10 = document.createElement("option");//create new option
            var wpat= /^[a-zA-Z\s]+$/;//pattern
            //selection
            var ci = document.getElementById('nc');//not cooling
            var ci1 = document.getElementById('lc');//low cooling
            var ci2 = document.getElementById('nio');//noise
            var ci3 = document.getElementById('smell');//smell
            var ci4 = document.getElementById('vibe');//vibration
            var ci5 = document.getElementById('nce');//not cooling evenly
            var ci7 = document.getElementById('tb');//tripping breaker
            var ci8 = document.getElementById('freu');//freezing up
            var ci9 = document.getElementById('watleak');//water leak

            if(coText.length == 0){
                $('#zonSy').hide();
                if (!ci.checked &&!ci1.checked && !ci2.checked && !ci3.checked && !ci4.checked && !ci5.checked && !ci7.checked && !ci8.checked && !ci9.checked){
                    document.getElementById('cpMess').innerHTML = "<font color = 'red'> Please Select Cooling Type</font>"
                }else{
                    document.getElementById('cpMess').innerHTML = "";
                }
            } else if(!coText.match(wpat)){
                $('#zonSy').hide();
                document.getElementById("cpMess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(coText.match(wpat)){
                $('#zonSy').show();
                document.getElementById("cpMess").innerHTML="";
                $('input[name= cpi]').prop('checked', false);//Cooling Issues
                return true;
            }
        }//end of UnitOther()

        //Warranty
        //click other it will display hidden show in jquery function id = wsdOther
        // and input text into textbox and click add button it be add into the dropdown list
        function warrantyList(){
            var wText=document.getElementById("warrText").value;//textbox
            var wlist = document.getElementById("wardlist");//dropdown List
            var option11 = document.createElement("option");//create new option
            var wapat= /^[a-zA-Z\s]+$/;//pattern

            if(!wText.match(wapat)){
                document.getElementById('warrText').focus();
                document.getElementById("arrwMess").innerHTML="<font color = 'red'>Letters Only</font>";
                return false;
            }else if(wText.match(wapat)){
                document.getElementById("arrwMess").innerHTML="";
                option11.text = wText;
                wlist.options.add(option11);
                return true;
            }
        }

        //Commercial  Unit Concern/Problem:Cooling
        //click other it will display hidden show in jquery function id = cpiHidden
        // and input text into textbox and click add button it be add into the dropdown list
        function coolCommercial(){
            var ccomText=document.getElementById("cpicText").value;//textbox
            var ccomlist = document.getElementById("cpicAList");//dropdown List
            var option12 = document.createElement("option");//create new option
            var wapat= /^[a-zA-Z\s]+$/;//pattern
            //cooling selection
            var cpic = document.getElementById('conc');//Not Cooling
            var cpic1 = document.getElementById('coloc');//Low Cooling
            var cpic2 = document.getElementById('coon');//Noise
            var cpic3 = document.getElementById('cos');//smell
            var cpic4 = document.getElementById('cov');//Vibration
            var cpic5 = document.getElementById('conce');//Not Cooling Evenly
            var cpic7 = document.getElementById('cotb');//Tripping Beaker
            var cpic8 = document.getElementById('cofreu');//Freezing Up
            var cpic9 = document.getElementById('cowl');//Water Leak

            if(ccomText.length == 0){
                $('.thMessDiv').hide();
                if(!cpic.checked && !cpic1.checked && !cpic2.checked && !cpic3.checked && !cpic4.checked && !cpic5.checked && !cpic7.checked && !cpic8.checked && !cpic9.checked){
                    document.getElementById("cpicMess").innerHTML="<font color = 'red'>Select Commercial Cooling Issues</font>"
                    return false;
                } else{
                    document.getElementById("cpicMess").innerHTML=""
                    return false;
                }
            }else if(!ccomText.match(wapat)){
                $('.thMessDiv').hide();
                document.getElementById('cpicText').focus();
                document.getElementById("cpicMess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(ccomText.match(wapat)){
                 $('.thMessDiv').show();
                // $('#cTherm,#cTherm1 ').val('');
                $('input[name= cpic]').prop('checked', false);//Cooling Issues(Commercial)
                document.getElementById("cpicMess").innerHTML=""
               return true;
            } 
        }//end of function coolCommercial()

        //Commercial  Unit Concern/Problem:Cooling Issues--Not Cooling Evenly
        //click other it will display hidden show in jquery function id = cpiMess
        // and input text into textbox and click add button it be add into the dropdown list
        function notevevlyCCom(){
            var cpiText=document.getElementById("cpiText").value;//textbox
            var cpiList = document.getElementById("cpiDDL");//dropdown List
            var option121 = document.createElement("option");//create new option
            var nepat= /^[a-zA-Z\s]+$/;//pattern
            //Selection
            var scpi = document.getElementById('sl');//lobby
            var scpi1 = document.getElementById('sl1');//Server Room
            var scpi2 = document.getElementById('sl2');//First Floor
            var scpi3 = document.getElementById('sl3');//Second Floor
            var scpi4 = document.getElementById('sl4');//Third Floor
            var scpi5 = document.getElementById('sl5');//Conference Room
            var scpi7 = document.getElementById('sl6');//Office
            var scpi8 = document.getElementById('sl7');// East Office
            var scpi9 = document.getElementById('sl8');// West Office
            var scpi10 = document.getElementById('sl9');// North Offices
            var scpi11 = document.getElementById('sl10');// South Office

            if(cpiText.length == 0){
                // $(".coUnitServes").hide();
                if(!scpi.checked && !scpi1.checked && !scpi2.checked && !scpi3.checked && !scpi4.checked && !scpi5.checked && !scpi7.checked && !scpi8.checked && !scpi9.checked && !scpi10.checked && !scpi11.checked) {
                    document.getElementById("cpiMess10").innerHTML="<font color = 'red'>Select Room(s) Location for Room Not Cooling Evenly</font>"
                    return false;
                }else{
                     $(".heatNO").show();
                    document.getElementById("cpiMess10").innerHTML=""
                    return false;
                }
            }else if(!cpiText.match(nepat)){
                document.getElementById('cpiText').focus();
                document.getElementById("cpiMess10").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(cpiText.match(nepat)){
                document.getElementById("cpiMess10").innerHTML=""
                $('input[name= cpi0c]').prop('checked', false);//Room Not Evenly (Residential)
                $("#cpiName").empty();
                $(".heatNO").show();
                return true;
            }
        }//end of notevevlyCCom()function
        
        //Commercial  Unit Concern/Problem:Heating Issues
        //click other it will display hidden show in jquery function id = cpihHidden
        // and input text into textbox and click add button it be add into the dropdown list
        function cpicIssues(){
            var cpihText = document.getElementById("cpihText").value;//textbox
            var cpihList = document.getElementById("cpihDDL");//dropdown List
            var option13 = document.createElement("option");//create new option
            var cpihpat= /^[a-zA-Z\s]+$/;//pattern
            //selection 
            var cpih = document.getElementById("cohnh");//Not Heating
            var cpih1 = document.getElementById("cohloh");//Low Heating
            var cpih2 = document.getElementById("cohon");//Noise
            var cpih3 = document.getElementById("cohs");//Smell
            var cpih4 = document.getElementById("cohv");//Vibration
            var cpih5 = document.getElementById("cohnhe");//Not Heating Evenly
            var cpih7 = document.getElementById("cohtb");//Tripping Beaker
            var cpih8 = document.getElementById("cohfreu");//Freezing Up
            var cpih9 = document.getElementById("cohwl");//Water Leak     

            if(cpihText.length == 0){
                $('.ctsaHeat').hide();
                if(!cpih.checked && !cpih1.checked && !cpih2.checked && !cpih3.checked && !cpih4.checked && !cpih5.checked && !cpih7.checked && !cpih8.checked && !cpih9.checked ){
                    document.getElementById("cpicMess1").innerHTML="<font color = 'red'>Select Heating Issues(Commercial)</font>"
                    return false;
                }  else if(cpihList.options[cpihList.selectedIndex].value == 1){
                   $('input[name=cpih]').removeAttr('checked');//uncheck heating issue(Commerical)
                   $('#cpihText').val('');
                   $('.ctsaHeat').show();
                   document.getElementById("cpicMess1").innerHTML="<font color = 'red'>Select Option</font>"
                    return false;
                } else {
                    document.getElementById("cpicMess1").innerHTML=""
                    return false;
                }
            } else if(!cpihText.match(cpihpat)){
                $('.ctsaHeat').hide();
                document.getElementById('cpihText').focus();
                document.getElementById("cpicMess1").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(cpihText.match(cpihpat)){
                $('.ctsaHeat').show();
                $('select[name=cpihSelect] option[value=0]').prop('selected', 'selected');
                $('input[name=cpih]').removeAttr('checked');//uncheck heating issue(Commerical)
                document.getElementById("cpicMess1").innerHTML=""
                return true;
            }
        }//end of function cpicIssues()

        //Commercial  Unit Concern/Problem:Not Heating Evenly other
        //click other it will display hidden show in jquery function id = rsnheHidden
        // and input text into textbox and click add button it be add into the dropdown list
        function locateRoom(){
            var rsnheText=document.getElementById("rsnheInput").value;//textbox
            var rsnheList = document.getElementById("rsnheSelect");//dropdown List
            var option14 = document.createElement("option");//create new option
            var rsnhepat= /^[a-zA-Z\s]+$/;//pattern
            //selection
            var rsnhe = document.getElementById("hlobby");//Lobby
            var rsnhe1 = document.getElementById("hServer");//Server Room
            var rsnhe2 = document.getElementById("hFirst");//First Floor
            var rsnhe3 = document.getElementById("hSecond");//Second Floor
            var rsnhe4 = document.getElementById("hThird");//Third Floor
            var rsnhe5 = document.getElementById("hCRoom");//Conference Room
            var rsnhe7 = document.getElementById("hOffice");//Office

            if(rsnheText.length == 0){
                if(!rsnhe.checked && !rsnhe1.checked && !rsnhe2.checked && !rsnhe3.checked && !rsnhe4.checked && !rsnhe5.checked && !rsnhe7.checked){
                    document.getElementById("rsnheMess").innerHTML="<font color = 'red'>Not Heating Evenly Room(s) Selection(Commercial)</font>"
                    return false;
                }else{
                   document.getElementById("rsnheMess").innerHTML=""
                    return false; 
                }

            }else if(!rsnheText.match(rsnhepat)){
                document.getElementById('rsnheInput').focus();
                document.getElementById("rsnheMess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(rsnheText.match(rsnheText)){
                document.getElementById("rsnheMess").innerHTML=""
                option14.text = rsnheText;
                rsnheList.options.add(option14);
                return true;
            }
        }

        //Commercial  Unit Concern/Problem:Not Heating Evenly Office Other
        //click other it will display hidden show in jquery function id = OtherOffice
        // and input text into textbox and click add button it be add into the dropdown list
        function additionalLocation(){
            var officeText=document.getElementById("officeText").value;//textbox
            var officeList = document.getElementById("officeDDL");//dropdown List
            var option15 = document.createElement("option");//create new option
            var officepat= /^[a-zA-Z\s]+$/;//pattern

            if(!officeText.match(officepat)){
                document.getElementById('officeText').focus();
                document.getElementById("locationMess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(officeText.match(officepat)){
                document.getElementById("locationMess").innerHTML=""
                option15.text = officeText;
                officeList.options.add(option15);
                return true;
            }
        }

        function packCoLadder(){
            var cy0Text=document.getElementById("cy0Text").value;//textbox
            var cy0List = document.getElementById("cy0DDL");//dropdown List
            var option17 = document.createElement("option");//create new option
            var cy0pat= /^[0-9]+$/;//pattern
            //selection
            var feet = document.getElementById("feet");// 16
            var feet1 = document.getElementById("feet1");// 24
            var feet2 = document.getElementById("feet2");// 30

            if(cy0Text.length == 0){
                $('.ParkSpecial').hide();//Special Parking
                if(!feet.checked && !feet1.checked && !feet2.checked){
                    document.getElementById("cy0message").innerHTML="<font color = 'red'>Select Ladder Size (Package)</font>"
                    return false;
                }else if(cy0List.options[cy0List.selectedIndex].value == 1){
                    $('.ParkSpecial').show();//Special Parking
                    document.getElementById('feet').checked = false; 
                    document.getElementById('feet1').checked = false; 
                    document.getElementById('feet2').checked = false; 
                    document.getElementById("cy0message").innerHTML="Select Selection"
                    return false; 
                } else{
                    $('.ParkSpecial').show();//Special Parking
                    document.getElementById("cy0message").innerHTML=""
                    return false; 
                }
            }else if(!cy0Text.match(cy0pat)){
                $('.ParkSpecial').hide();//Special Parking
                document.getElementById('cy0Text').focus();
                document.getElementById("cy0message").innerHTML="<font color = 'red'>Number Only</font>"
                return false;
            }else if(cy0Text.match(cy0pat)){
                $('.ParkSpecial').show();//Special Parking
                $('select[name=cyOdd] option[value=0]').prop('selected', 'selected');
                $('input[name=cy0]').removeAttr('checked');//uncheck heating issue(Commerical)
                document.getElementById("cy0message").innerHTML=""
                return true;
            }
        }// end of function packCoLadder()

        

        //Commercial Ladder Size Spilt System
        //click other it will display hidden show in jquery function id = sizeHidden
        // and input text into textbox and click add button it be add into the dropdown list

        function sizeLadder(){
            var sizeText= document.getElementById("sizeText").value;//textbox
            var sizeList = document.getElementById("sizeDDL");//dropdown List  
            //var option18 = document.createElement("option");//create new option
            var sizepat = /^[0-9]+$/;//pattern
            //selection
            var siz1 = document.getElementById("siz1");// 16
            var siz2 = document.getElementById("siz2");// 24
            var siz3 = document.getElementById("siz3");// 30

            if(sizeText.length==0){
                $('.i10Messdiv').hide();//hide indoor unit location
                if(!siz1.checked && !siz2.checked && !siz3.checked){
                     document.getElementById("sizeMess").innerHTML="<font color = 'red'>Select Ladder Size (Split System)</font>"
                    if(sizeList.options[sizeList.selectedIndex].value == 0){
                        document.getElementById("sizeMess").innerHTML="<font color = 'red'>Select Option </font>"
                        $('input[name=size]').removeAttr('checked');//uncheck heating issue(Commerical)
                        $('#sizeText').val('');
                        $('.i10Messdiv').show();
                        return false;
                    }else{
                        document.getElementById("sizeMess").innerHTML=""
                            return false;
                    }
                } else {
                     $('.i10Messdiv').show();
                    document.getElementById("sizeMess").innerHTML=""
                    return false; 
                } 
            } else if(!sizeText.match(sizepat)){
                $('.i10Messdiv').hide();//hide Indoor Unit Location
                document.getElementById('sizeText').focus();
                document.getElementById("sizeMess").innerHTML="<font color = 'red'>Numbers Only</font>"
                return false;
            } else if(sizeText.match(sizepat)){
                $('.i10Messdiv').show();//hide Indoor Unit Location
                $('input[name=size]').removeAttr('checked');// unchecked ladder size 
                $('select[name=sizeDDL] option[value=0]').prop('selected', 'selected');
                document.getElementById("sizeMess").innerHTML=""
                return true;
            }
        }//end of function

        //Commercial Attic Spilt System
        //click other it will display hidden show in jquery function id = atticHidden
        // and input text into textbox and click add button it be add into the dropdown list
        function atticEntry(){
            var atticText=document.getElementById("atticText").value;//textbox
            var atticList = document.getElementById("atticDDl");//dropdown List
            //var option19 = document.createElement("option");//create new option
            var atticpat = /^[a-zA-Z\s]+$/;//pattern
            //selection
            var attic = document.getElementById("atti1");//Access Via
            var attic1 = document.getElementById("atti2");//Pull Down Stair Case
            var attic2 = document.getElementById("atti3");//Scuttle Whole
            var attic3 = document.getElementById("atti4");//Door

            if(atticText.length == 0){
                $('#entireDisplay1').hide();//hide indoor unit location
                if(!attic.checked && !attic1.checked && !attic2.checked && !attic3.checked){
                    document.getElementById("atticMess").innerHTML="<font color = 'red'>Select Attic Entry</font>"
                    return false;
                } else{
                    document.getElementById("atticMess").innerHTML=""
                    return false;
                }
            }else if(!atticText.match(atticpat)){
                $('#entireDisplay1').hide();//hide indoor unit location
                document.getElementById('atticText').focus();
                document.getElementById("atticMess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(atticText.match(atticpat)){
                $('#entireDisplay1').show();//hide Indoor Unit Location
                $('input[name=attic]').removeAttr('checked');// unchecked ladder size 
                $('select[name=atticDDl] option[value=0]').prop('selected', 'selected');
                document.getElementById("atticMess").innerHTML=""
                return true;
            }
        }//end of function

        //Commercial other  Indoor Unit Location Spilt System
        //click other it will display hidden show in jquery function id = i10Hidden
        // and input text into textbox and click add button it be add into the dropdown list
        function ulsEntry(){
            var i10Text = document.getElementById("i10Text").value;//textbox
            var i10List = document.getElementById("i10DDl");//dropdown List
            //var option20 = document.createElement("option");//create new option
            var i10pat = /^[a-zA-Z\s]+$/;//pattern
            //selection
             var i1 = document.getElementById("inlCloset");// closet
             var i2 = document.getElementById("inlGarage");// Garage
             var i3 = document.getElementById("inlBasement");// Basement
             var i4 = document.getElementById("inlAttic");// Attic
             var i5 = document.getElementById("inlCrawl");// Crawl Space
             var i7 = document.getElementById("inlAbove");// Above Suspended
             var i8 = document.getElementById("inlWare");// Warehouse
             var i9 = document.getElementById("inlExpose");// Exposed
             var i10 = document.getElementById("inlMroom");// Mechanical Room

             if(i10Text.length==0){
                  $('#entireDisplay1').hide();//hide indoor unit location
                if(!i1.checked && !i2.checked  && !i3.checked && !i4.checked && !i5.checked && !i7.checked && !i8.checked && !i9.checked && !i10.checked){
                     document.getElementById("i10Mess").innerHTML="<font color = 'red'>Select Indoor Unit Location (Split System)</font>"
                    if(i10List.options[i10List.selectedIndex].value == 1){
                        $('input[name=i10]').removeAttr('checked');//uncheck heating issue(Commerical)
                        $('#i10Text').val('');
                    }else{
                        document.getElementById("i10Mess").innerHTML=""
                            return false;
                    }
                } else {
                     $('#entireDisplay1').show();
                    document.getElementById("i10Mess").innerHTML=""
                    return false; 
                } 
            } else if(!i10Text.match(i10pat)){
                $('#entireDisplay1').hide();//hide Indoor Unit Location
                document.getElementById('i10Text').focus();
                document.getElementById("i10Mess").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            } else if(i10Text.match(i10pat)){
                $('#entireDisplay1').show();//hide Indoor Unit Location
                $('input[name=i10]').removeAttr('checked');// unchecked ladder size 
                $('select[name=i10DDl] option[value=0]').prop('selected', 'selected');
                document.getElementById("i10Mess").innerHTML=""
                return true;
            }
             
        }//end of ulsEntry()

          

        //Commercial other Ceiling Estimate other option
        //click other it will display hidden show in jquery function id = cshHidden
        // and input text into textbox and click add button it be add into the dropdown list
        function ceilingEntry(){
            var cshText = document.getElementById("cshText").value;//textbox
            var cshList = document.getElementById("cshDDl");//dropdown List
            var option21 = document.createElement("option");//create new option
            var cshpat = /^[0-9]+$/;//pattern
            //Ceiling Height
            var csh = document.getElementById('csh1');//8
            var csh1 = document.getElementById('csh2');//10
            var csh2 = document.getElementById('csh3');//12
            var csh3 = document.getElementById('csh4');//14

            if(cshText.length == 0){
                $('#entireDisplay1').hide();//hide Indoor Unit Location
                if(!csh.checked && !csh1.checked && !csh2.checked && !csh3.checked){
                    document.getElementById("cshMess").innerHTML="<font color = 'red'>Select Ceiling Entry</font>"
                    return false;
                    if(cshList.options[cshList.selectedIndex].value == 1){
                        $('input[name=csh]').removeAttr('checked');//uncheck heating issue(Commerical)
                        $('#cshText').val('');
                    }else{
                        document.getElementById("cshMess").innerHTML=""
                            return false;
                    }
                }else {
                    $('#entireDisplay1').show();//hide Indoor Unit Location
                    document.getElementById("cshMess").innerHTML=""
                    return false;
                }

            } else if(!cshText.match(cshpat)){
                $('#entireDisplay1').hide();//hide Indoor Unit Location
                document.getElementById('cshText').focus();
                document.getElementById("cshMess").innerHTML="<font color = 'red'>Numbers Only</font>"
                return false;
            }else if(cshText.match(cshpat)){
                $('#entireDisplay1').show();//hide Indoor Unit Location
                $('input[name=csh]').removeAttr('checked');// unchecked ladder size 
                $('select[name=cshDDl] option[value=0]').prop('selected', 'selected');
                document.getElementById("cshMess").innerHTML=""
                return true;
            }
        }

        //Commercial other  question "Is your System"
        //click other it will display hidden show in jquery function id = utHidden
        // and input text into textbox and click add button it be add into the dropdown list
        function yourSystem(){
            var utText = document.getElementById("utText").value;//textbox
            var utList = document.getElementById("utDDL");//dropdown List
            var option22 = document.createElement("option");//create new option
            var utpat = /^[a-zA-Z\s]+$/;//pattern
            //selection
            var unitTy1 = document.getElementById("cpackage");//Package
            var unitTy10 = document.getElementById("cspilt");//Spilt System
            var unitTy11 = document.getElementById("cgomal");//Geothermal 
            var unitTy12 = document.getElementById("cmispli");//Mini split
            var unitTy13 = document.getElementById("cevpgo");//Evaporative
            var unitTy14 = document.getElementById("chwater");//Chilled Water 
            var unitTy15 = document.getElementById("htwater");//Hot Water
            var unitTy17 = document.getElementById("steam");//Steam
            if(utText.length == 0){
                $('#cpackageSel').hide();//hide the Package hidden div
                if(!unitTy1.checked && !unitTy10.checked && !unitTy11.checked && !unitTy12.checked && !unitTy13.checked && !unitTy14.checked && !unitTy15.checked && !unitTy17.checked){
                    document.getElementById("utmessage").innerHTML="<font color = 'red'>Select System Type:(Commercial)</font>"
                    return false;
                }else{
                    document.getElementById("utmessage").innerHTML=""
                    return false;
                }
            }else if(!utText.match(utpat)){
                $('#cpackageSel').hide();//hide the Package hidden div
                document.getElementById('utText').focus();
                document.getElementById("utmessage").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(utText.match(utpat)){
                $('#cpackageSel').hide();//show the Package hidden div
                $('input[name=unitTy1]').removeAttr('checked');//uncheck Package System type(Commerical)  
                $('input[name=packHeatC]').removeAttr('checked');//uncheck not heating evenging checkbox(Commerical)
                document.getElementById("utmessage").innerHTML=""
                return false;
            }
        }//end of yourSystem()

        //Commercial other  question "Unit Serves"
        //click other it will display hidden show in jquery function id = utHidden
        // and input text into textbox and click add button it be add into the dropdown list
        function Units(){
            var usText = document.getElementById("usText").value;//textbox
            var usList = document.getElementById("usDDL");//dropdown List
            var option24 = document.createElement("option");//create new option
            var uspat = /^[a-zA-Z\s]+$/;//pattern
            //selection
            var ciUS = document.getElementById('use');//Entire Building
            var ciUS1 = document.getElementById('eb');//First Floor
            var ciUS2 = document.getElementById('sf');//Second Floor
            var ciUS3 = document.getElementById('tf');//Third Floor 

            if(usText.length == 0){
                $('.coIYS').hide();
                if(!ciUS.checked && !ciUS1.checked && !ciUS2.checked && !ciUS3.checked){
                    document.getElementById("usmessage").innerHTML="<font color = 'red'>Select Unit Serves</font>"
                    return false;
                }else if(usList.options[usList.selectedIndex].value == 1){
                   $('input[name=cpih]').removeAttr('checked');//uncheck heating issue(Commerical)
                   $('.coIYS').show();
                   //$('#cpihText').val('');
                   document.getElementById("usmessage").innerHTML="<font color = 'red'>Select Option</font>"
                    return false;
                } else {
                    document.getElementById("usmessage").innerHTML=""
                    return false;
                }

            } else if(!usText.match(uspat)){
                $('.coIYS').hide();
                document.getElementById('usText').focus();
                document.getElementById("usmessage").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else if(usText.match(uspat)){
                document.getElementById("usmessage").innerHTML=""
                $('.coIYS').show();
                $('select[name=usDDLN] option[value=0]').prop('selected', 'selected');
                $('input[name=ciUS]').removeAttr('checked');//uncheck heating issue(Commerical)
                return true;
            }
        }//end of function

        //function for Room(s) Not Cooling Evenly Residential 
        //click the checkbox it will display value and label text box to enter temp
        function showRadio(){
        var letters = $(".coolTemp").serializeArray();
        var ro = $(".diffTem").val();
        var roPat = /^[0-9]+$/;
        $("#moorCooling").empty();
            jQuery.each( letters, function( i, letters ) {
                $("#moorCooling").append('<div style ="display:inline; padding:10px">'+'<label class = "question4">'
                                            + letters.value +'&nbsp Degree Difference:</label>'+'<input type = "text" name = "ffid[]" class = "span1 diffTem[]" autocomplete = "off" onkeyup ="Difference()" onfocus = "Difference()" maxlength = "3"/>'
                                            +'<label>deg.f</label></div>');
            });
        }//end of function

        function Difference(){
            //var ro = document.getElementsByName('ffid[]');
            //var letters = $(".coolTemp").checked;
            var ro = $(".diffTem").val();//append textbox
            var roPat = /^[0-9]+$/;
           
            for (i = 0; i < ro.length; i++) {
                if (ro == null || ro == ""){
                     document.getElementById("difMess").innerHTML="<font color = 'red'>Enter Temperature</font>"
                     return false;
                    $(".UnitServes").hide();
                }else if(!ro.match(roPat)) {
                    document.getElementById("difMess").innerHTML="<font color = 'red'>Number Only </font>"
                    return false;
                } else if(ro > 1 ){
                    $(".UnitServes").hide();
                    document.getElementById("difMess").innerHTML="<font color = 'red'>Chosen</font>"
                    return false;
                } else {
                    $(".UnitServes").show();
                    document.getElementById("difMess").innerHTML="<font color = 'red'></font>"
                    return true;
                }       
            }//end of for loop
        } //end of function  

         
        // $(document).ready(function(){
        //     $('input[name=ffid]').each(function(){
        //       alert($(this).val());
        //       var ro = $(".diffTem").val();form.buztype.
        //       var roPat = /^[0-9]+$/;
           
        //     for (i = 0; i < ro.length; i++) {
        //        if (ro.length == 0){
        //              document.getElementById("difMess").innerHTML="<font color = 'red'>Enter Temperature</font>"
        //              return false;
        //            $(".UnitServes").hide();
        //         }else if(!ro.match(roPat)) {
        //             document.getElementById("difMess").innerHTML="<font color = 'red'>Number Only</font>"
        //             return false;
        //         } else{
        //             $(".UnitServes").show();
        //             document.getElementById("difMess").innerHTML="<font color = 'red'></font>"
        //             return true;
        //         }
        //     }
        //   });
        // }); 

        

        //function for Room(s) Not Heating Evenly Residential 
        //click the checkbox it will display value and label text box to enter temp
        function showRadio1(){
            var hletters = $(".heatTempR").serializeArray();
            $( "#heatEName" ).empty();
                jQuery.each( hletters, function( i, hletters ) {
                  $( "#heatEName" )
                  .append('<div style ="display:inline; padding:10px">'+'<label class = "question4">'+ hletters.value +'&nbsp Degree Difference:</label>'+'<input type = "text" class = "span1" autocomplete = "off"/>'+'<label>deg.f</label></div>');
                });
        }


        function Commericalnce(){
            var cpletters = $(".cpiS").serializeArray();//radio button class
            var cpText = $('.cpiNameText').val();
            $("#cpiName").empty();
                jQuery.each( cpletters, function( i, cpletters ) {
                  $("#cpiName").append('<div style ="display:inline; padding:10px">'+'<label class = "question4">'+ cpletters.value +'&nbsp Degree Difference:</label>'
                           +'<input type = "text" class = "span1 cpiNameText" maxlength ="3" onkeydown = "cpiNameT()"  autocomplete = "off"/>'+'<label>deg.f</label></div>');
                    });
            }

        function cpiNameT(){
             var cpletters = obj.value.replace(/\D/g, '');
            //  $(".cpiS").serializeArray();//radio button class
            var cpText = $('.cpiNameText').val();
            // var cpText = obj.value.replace(/\D/g, '');
            // var input = cpText.getElementsByTagName("input");
            // var cppat = /^[0-9]+$/;pattern
            // obj.value = '';

               for (i=0; i< cpText.length;i++){
                    if(cpText.length == 0){
                        $(".heatNOS").hide();
                        $(".cpiNameText").focus(); 
                        $(".cpiMessjj").text( 'Number is Enter into Textbox'); 
                    }else {
                        obj.value +=  cpText[i];
                        $(".heatNOS").show();
                    }
                }//end of for loop

         }//end of cpiNameT() function


         // for (i=0; i< cpText.length;i++){
         //           if(cpText.length == 0){
         //                $(".heatNOS").hide();
         //                $(".cpiNameText").focus(); 
         //                $(".cpiMessjj").text( 'Number is Enter into Textbox'); 
         //            }else {
         //                obj.value +=  cpText[i];
         //                $(".heatNOS").show();
         //            }


        function CommericalHeat(){
                var rsnhletters = $(".rsnheS").serializeArray();//radio button class
                $("#rsnhName").empty();
                    jQuery.each( rsnhletters, function( i, rsnhletters ) {
                      $("#rsnhName").append('<div style ="display:inline; padding:10px">'+'<label class = "question4">'+ rsnhletters.value +'&nbsp Degree Difference:</label>'
                               +'<input type = "text" maxlength = "3" class = "span1" autocomplete = "off"/>'+'<label>deg.f</label></div>');
                    });
        }
         //Work History Table   
        function workHist(){
                var cidSTy = $(":input").serializeArray();//checkbox class
                $("#scallVal").empty();
                    jQuery.each( cidSTy, function( i, cidSTy ) {
                      $("#scallVal").append(cidSTy.value + "");
                    });
        }


        function costVAl(){
            var ewb = document.getElementById('ewb').value;//winter gas highest
            var ewb1 = document.getElementById('esb').value;// summer highest gas 
            var ewb2 = document.getElementById('ewb1').value;// Electric  winter highest
            var ewb3 = document.getElementById('esb1').value;// Electric  summer highest
            document.getElementById('checkOut').style.display = "";
            
            // ((sta.length == 0) || ((sta.length > 0) && (sta.length < 2)) || (sta.length > 2))
            var high = 100.00;
            high = high.toFixed(2);
            // gas winter highest and lowest
           if ((parseInt(ewb) >= parseInt(high)) && (parseInt(ewb1) >= parseInt(high))){
             document.getElementById('checkOut').style.display = "block";
            } else if ((parseInt(ewb)<= parseInt(high)) && (parseInt(ewb1)<= parseInt(high))) {
             document.getElementById('checkOut').style.display = "none";
            }

            //electric winter highest and lowest
           if ((parseInt(ewb2) >= parseInt(high)) && (parseInt(ewb3) >= parseInt(high))){
             document.getElementById('checkOut').style.display = "block";
           } else if ((parseInt(ewb2)<= parseInt(high))&& (parseInt(ewb3)<= parseInt(high))) {
             document.getElementById('checkOut').style.display = "none";
           } 
        }


        //winter(replacement page)
        function estimatebuild(){
            var build = $("#ewb").val();//highest gas
            var build1 = $("#ewb1").val();//highest electric
            var build2 = $("#ewb2").val();//lowest gas
            var build3 = $("#ewb3").val();//lowest eletric
            //pattern
            var tenn = /^[0-9]+$/;
                
                if(!build.match(tenn)){
                   document.getElementById('ewb').focus();
                   document.getElementById("ewsbMess").innerHTML="<font color = 'red'> Winter Highest Gas number Only</font>"
                   return false;
                 }else if(!build1.match(tenn)){
                    document.getElementById('ewb1').focus();
                    document.getElementById("ewsbMess").innerHTML="<font color = 'red'> Winter Highest electric Number Only</font>"
                   return false;
                 }else if(!build2.match(tenn)){
                    document.getElementById('ewb2').focus();
                    document.getElementById("ewsbMess").innerHTML="<font color = 'red'> Winter Lowest Gas Number Only</font>"
                   return false;
                }else if(!build3.match(tenn)){
                    document.getElementById('ewb3').focus();
                    document.getElementById("ewsbMess").innerHTML="<font color = 'red'> Winter Lowest Electric Number Only</font>"
                   return false;
                }else{
                    document.getElementById("ewsbMess").innerHTML=""
                   return true;
                }
            }//end of  estimatebuild()

            //summer build(replacement page)
    
    function estimatebuild1(){
            var built = $("#esb").val();//highest Gas
            var built1 = $("#esb1").val();//highest Electric
            var built2 = $("#esb2").val();//lowest Gas
            var built3 = $("#esb3").val();//lowest Electric
            var tenn1 = /^[0-9]+$/;
                if(!built.match(tenn1)){
                   document.getElementById('esb').focus();
                   document.getElementById("ewsbMess1").innerHTML="<font color = 'red'>Summer Highest Gas</font>";
                   return false;
                 }else if(!built1.match(tenn1)){
                   document.getElementById('esb1').focus();
                   document.getElementById("ewsbMess1").innerHTML="<font color = 'red'>Summer Highest Electric</font>";
                   return false;
                 }else if(!built2.match(tenn1)){
                   document.getElementById('esb2').focus();
                   document.getElementById("ewsbMess1").innerHTML="<font color = 'red'>Summer Lowest Gas</font>";
                   return false;
                 }else if(!built3.match(tenn1)){
                   document.getElementById('esb3').focus();
                   document.getElementById("ewsbMess1").innerHTML="<font color = 'red'>Summer Lowest Electric</font>";
                   return false;
                 }else{
                    document.getElementById("ewsbMess1").innerHTML="";
                   return true;
                }
            }//end of  estimatebuild1()

//function text of "Should system require repairs,how will you be paying?"
function manf(){
    var yearM = $("#hwText").val();

    if(yearM >13){
        $(".manfaDiv1").hide();
        document.getElementById("tymessage").innerHTML = "<font color = 'red'>Greater than 13</font>";
    } else if(yearM <13){
        $(".manfaDiv1").show();
        document.getElementById("tymessage").innerHTML = "<font color = 'red'> Less than 13</font>";
    } else{
        $(".manfaDiv1").hide();//hide div
        $("#hwText").text("");//clear textbox
    }
}//end of function

function bnVal(){
                var bn = document.getElementById('bnYes');//yes
                var bn1 = document.getElementById('bnNo');//no
                //yes radio button hidden div var
                var be1 = document.getElementById('beCell');//cell
                var be2 = document.getElementById('beHome');//home
                var be3 = document.getElementById('beOffice');//office
                //yes radio button if office radio is click
                var beText = document.getElementById('best1Text').value;//office textbox
                //no radio button hiddden var
                var ben0 = document.getElementById('ben0').value;//textbox to enter phone number
                var ben1 = document.getElementById('ben1');//cell
                var ben2 = document.getElementById('ben2');//home
                var ben3 = document.getElementById('ben3');//office
                //office radio button
                var ben3T = document.getElementById('ben3Text').value;
                //pattern
                var p = /^[0-9]+$/;
            
            if(!bn.checked && !bn1.checked){
                document.getElementById("bestMess").innerHTML ="<font color = 'red'> Answer Question: Is the best number to contact you?</font>"
                return false;
            }else if(bn.checked){
                $('.bestYes').show();//show hidden div for yes
                $('.bestNo').hide();//hide hidden div for no
                if(!be1.checked && !be2.checked && !be3.checked){
                    document.getElementById("bestMess").innerHTML = "<font color = 'red'> Answer Question: Select Phone Type</font>"
                    return false;
                }else if(be3.checked){ 
                    $('#best1Text').show();//show hidden div for yes
                    if(beText.length == 0){
                        document.getElementById("bestMess").innerHTML = "<font color = 'red'>Yes:Enter Ext Number</font>"
                        return false;
                    }else if(!beText.match(p)) {
                        document.getElementById("bestMess").innerHTML = "<font color = 'red'>Yes:Number Only</font>"
                        return false;
                    } else{
                        document.getElementById("bestMess").innerHTML = ""
                        return false;
                    }
                } else {
                    document.getElementById("bestMess").innerHTML = ""
                    return false;
                }
            }else if(bn1.checked){
                $('.bestYes').hide();//hide hidden div for yes
                $('.bestNo').show();//show hidden div for no
                if(ben0.length == 0){
                    document.getElementById("bestMess").innerHTML = "<font color = 'red'> Enter Phone</font>"
                    return false;
                }else if(!ben1.checked && !ben2.checked && !ben3.checked) {
                    document.getElementById("bestMess").innerHTML = "<font color = 'red'> Select Phone Type </font>"
                    return false;
                }else if(ben3.checked) {
                    $('#ben3Text').show();//hide hidden div for yes
                    if(ben3T.length == 0){
                       document.getElementById("bestMess").innerHTML = "<font color = 'red'> Office: Enter Ext </font>"
                       return false;
                    }else if(!ben3T.match(p)){
                        document.getElementById("bestMess").innerHTML = "<font color = 'red'> Office: Number Only </font>"
                       return false;
                    }else{
                        document.getElementById("bestMess").innerHTML = ""
                       return false;
                    }
                }
                
            }else{
                    document.getElementById('bestMess').innerHTML =""
                    return true;
            }

        }//end of function
      

function servicePrice(){
   var spanp = $('.expService');
   var b = document.getElementById('txtDisplay');
}

//  


//$(function() {
//     $('#sdte').datepicker({
//            dateFormat: "mm/dd/yy",
//            changeMonth: true,
//            changeYear: true,
//            showButtonPanel: true,
//            onClose: function(dateText, inst) {
//
//
//                function isDonePressed(){
//                    return ($('#ui-datepicker-div').html().indexOf('ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all ui-state-hover') > -1);
//                }
//
//                if (isDonePressed()){
//                    var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
//                    var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
//                    $(this).datepicker('setDate', new Date(year, month, 1)).trigger('change');
//                    
//                     $('#sdte').focusout();//Added to remove focus from datepicker input box on selecting date
//                }
//            },
//            beforeShow : function(input, inst) {
//
//                inst.dpDiv.addClass('month_year_datepicker');
//
//                if ((datestr = $(this).val()).length > 0) {
//                    year = datestr.substring(datestr.length-4, datestr.length);
//                    month = datestr.substring(0, 2);
//                    $(this).datepicker('option', 'defaultDate', new Date(year, month-1, 1));
//                    $(this).datepicker('setDate', new Date(year, month-1, 1));
//                    $(".ui-datepicker-calendar").hide();
//                }
//            }
//        });

  
//});

//  $(function() {
//    
//  });

//$(function() {
//     $('#edte').datepicker({
//            dateFormat: "mm/dd/yy",
//            changeMonth: true,
//            changeYear: true,
//            showButtonPanel: true,
//            onClose: function(dateText, inst) {
//
//
//                function isDonePressed(){
//                    return ($('#ui-datepicker-div').html().indexOf('ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all ui-state-hover') > -1);
//                }
//
//                if (isDonePressed()){
//                    var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
//                    var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
//                    $(this).datepicker('setDate', new Date(year, month, +1)).trigger('change');
//                    
//                     $('#edte').focusout()//Added to remove focus from datepicker input box on selecting date
//                }
//            },
//            beforeShow : function(input, inst) {
//
//                inst.dpDiv.addClass('month_year_datepicker')
//
//                if ((datestr = $(this).val()).length > 0) {
//                    year = datestr.substring(datestr.length-4, datestr.length);
//                    month = datestr.substring(0, 2);
//                    $(this).datepicker('option', 'defaultDate', new Date(year, month-1, 1));
//                    $(this).datepicker('setDate', new Date(year, month-1, 1));
//                    $(".ui-datepicker-calendar").hide();
//                }
//            }
//        })
//});