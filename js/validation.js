function formVal(){
//    var dname = document.getElementById('fname').value;
    if((frontVal()) && (numVal()) && (namfVal()) && (namemVal()) && (namlVal()) && (recmess())  
        && (houseVal()) && (streetVal()) && (locstVal()) && (suiteVal()) && (ciVal()) && (mailVal()) && (airVal()) && (smVal()) 
        && (unopVal()) && (concVal()) && (masyVal()) && (masVal()) && (samVal()) && (gasVal()) && (saVal()) && (seroVal()) 
        && (daysVal()) && (weekVal()) && (timeVal()) && (reidVal()) && (billVal()) &&(typeVal()) && (stboVal()) 
        && (timeend()) && (cuspVal()) && (publVal()) && (cVal()) && (VistaVAl()) && (cusMess()) && (comMess()) && (oneNum()) &&(buyItem()) 
        && (invVal()) && (upmetVal()) && (membership()) && (reasonVal()) &&(paycrVal()) && (perfertm()) &&(numEmploy()) && (namebusVal()) 
        && (aileeVal()) && (techVal()) && (refnameVal()) && (doBirthVal()) &&(ssVAl()) && (lengthVal()) && (employVal()) && (employAdVal()) 
        && (ymentVal()) && (selectionVal()) && (selectionVal2()) && (hometyVal()) & (ownerListVal()) && (otincome()) && (kanbVal()) 
        && (typeVal2()) && (addElements()) && (piDatVal()) && (addrVAl()) && (homselVAl()) && (suffix()) && (reCP()) && (SystemType()) && (Union()) && (OUServe())
        && (themVal()) && (themVal2()) && (themVal3()) && (themVal4()) && (themVal5()) && (themVal7()) && (themValC()) && (AgeNum()) 
        && (LocationIn()) && (IssueCooling()) && (gasVal2()) && (roofPC()) && (roofPC1()) && (filt()) && (gas1()) && (billingAddress()) && (ebs()) && (masVal1()) && (smVAl1())) {
//        localStorage.setItem("fname", dname);
    } else {
        return false;
    }
}


//for "homepage"
function frontVal(){
    var plug  = document.getElementById('tname').value;
    var ely  = /^[0-9\-]+$/;
    //for date and time
//    var three = new Date();
    if(plug.length === 0){
        document.getElementById('tname').focus();
        document.getElementById('page').innerHTML="<font color = 'red'>Must have trunk Numbers  </font>"
//        document.getElementById("local").innerHTML=three;
        return false;
    }else if(!plug.match(ely)){
        document.getElementById("page").innerHTML="<font color = 'red'>Number Only</font>" 
        return false;
    }else{
        document.getElementById("page").innerHTML=""        
        return true;
    }
}//end of function

function numVal() {
//    var num = document.getElementById('pho1').value; 
    var typepho = document.getElementById('typepho'); //ddl for phone number type
    var nexp=/^[0-9\-]+$/; //with dashes
    var re = document.getElementById('residential');
    var busin = document.getElementById('business');
    var indus = document.getElementById('industial');
    var educ = document.getElementById('educational');
    var relig = document.getElementById('religious');
    var pa = document.getElementById('pan').value;
    
    //company register?
    var regis = document.getElementById('cInc');
    var regis1 = document.getElementById('cLLc');
    var regis2 = document.getElementById('cLP');
    var regis3= document.getElementById('companyList');
    //for date and time
    var pexp = /^[a-zA-Z\s]+$/;//allow space between names
     if (typepho.options[typepho.selectedIndex].value === 0){
            document.getElementById("pmessage").innerHTML="<font color = 'red'>  Select Phone Type </font>"
           return false;
    } else{
        document.getElementById("pmessage").innerHTML="" 
        return true;
    }
}//end of function

//function suffix(){
//    var titl =  document.getElementById("mr");
//    var tit2 =  document.getElementById("mrs");
//    var tit3 =  document.getElementById("ms");
//    var tit4 =  document.getElementById("dr");
//        if (!titl.checked && !tit2.checked && !tit3.checked && !tit4.checked){
//            document.getElementById('mr').focus();
//            document.getElementById("emessage").innerHTML="<font color = 'red'>Please Select Prefix Title</font>"
//            return false;
//        }else {
//            document.getElementById("emessage").innerHTML = "";
//            return true;
//        }
//}

//validation for first name
function namfVal() {
    var exp = /^[a-zA-Z]+$/;
//    var rm2 = document.
    var name = document.getElementById('fname').value = document.getElementById('fname').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
	if (name.length ==0){
            document.getElementById('fname').focus();
            document.getElementById("emessage").innerHTML="<font color = 'red'> Must Enter First Name </font>"
            $(".alert").show();
           return false;
        }else if(!name.match(exp)){
            document.getElementById('fname').focus();
            document.getElementById("emessage").innerHTML="<font color = 'red'> Letters Only </font>"
            $(".alert").show();
            return false;
        }else if(w4.length === 0){
            document.getElementById("mailBusDiv").innerHTML="<font color = 'red'>Please Enter Building Number </font>";
            return false;
        }else if(!w4.match(sm)){
            document.getElementById("mailBusDiv").innerHTML="<font color = 'red'>Number Only </font>";
            return false;
        }else{
            document.getElementById("emessage").innerHTML="";
            return true;
        }
}//end of function

//validation for page " Financing Application "
function namemVal(){
    var name2 = document.getElementById('mname').value = document.getElementById('mname').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
    var midexp = /^[a-zA-Z]+$/;
    var t1 = new Date();
    if(name2.length == 0){
        document.getElementById('mname').focus();
        document.getElementById("emessage").innerHTML="<font color = 'red'> Enter middle name or intial</font>"
        document.getElementById("okay1").innerHTML=t1;
        t2 = setTimeout(1000);
        time_on2=1;
        getDate();
        return false;
    } else if(!name2.match(midexp)) {
        document.getElementById("emessage").innerHTML="<font color = 'red'> Letter Only</font>"
        return false; 
    }else {
       document.getElementById("emessage").innerHTML="";
       clearTimeout(t2);
       time_on2=0;
       getDate();
        return true;  
    }

}//end of function


//validation for last name
function namlVal() {
    var exp = /^[a-zA-Z]+$/;
    var lname = document.getElementById('lname').value = document.getElementById('lname').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
    var sx = document.getElementById('sxMale');//male
    var sx1 = document.getElementById('feMale');//female
   //var road=trail.toLocaleTimeString();
        if (lname.length == 0){
            document.getElementById('lname').focus();
            document.getElementById("emessage").innerHTML="<font color = 'red'> Must Enter Last Name </font>"
            $(".alert").show();
            return false;
        }else if(!lname.match(exp)){
            document.getElementById('lname').focus();
            document.getElementById("emessage").innerHTML="<font color = 'red'> Letters Only </font>"
            $(".alert").show();
            return false;
        }else if(!sx.checked && !sx1.checked){
            document.getElementById("emessage").innerHTML="<font color = 'red'> Select Male or Female </font>"
            return false;
        } else{
             document.getElementById("emessage").innerHTML="";
            return true;
        }
}//end of function


function namlVal1() {
    var exp = /^[a-zA-Z]+$/;
    var lname = document.getElementById('lname').value = document.getElementById('lname').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
    
        if (lname.length == 0){
            document.getElementById('lname').focus();
            document.getElementById("emessage").innerHTML="<font color = 'red'> Must Enter Last Name </font>"
//            $(".alert").show();
            return false;
        }else if(!lname.match(exp)){
            document.getElementById('lname').focus();
            document.getElementById("emessage").innerHTML="<font color = 'red'> Letters Only </font>"
//            $(".alert").show();
            return false;
        } else{
             document.getElementById("emessage").innerHTML="";
             return true;
        }
}//end of function

//this for page "Message for Employee"
function recmess(){
    var personf = document.getElementById('fname0').value = document.getElementById('fname0').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
    var personl = document.getElementById('lname0').value = document.getElementById('lname0').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    }); 
    var personm = document.getElementById('mname0').value = document.getElementById('mname0').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    }); 
    //pattern
    var exp1 = /^[a-zA-Z]+$/;
    if(personf.length == 0){
        document.getElementById('fname0').focus();
        document.getElementById("emessage1").innerHTML="<font color = 'red'> Must Enter First Name </font>"
        return false;
    }else if(!personf.match(exp1)){
        document.getElementById('fname0').focus();
        document.getElementById("emessage1").innerHTML="<font color = 'red'> Letters Only </font>"
        return false;
    }else if(personm.length == 0){
        document.getElementById('mname0').focus();
        document.getElementById("emessage1").innerHTML="<font color = 'red'> Enter Middle Name  </font>"
        return false;
    } else if(!personm.match(exp1)){
        document.getElementById('mname0').focus();
        document.getElementById("emessage1").innerHTML="<font color = 'red'> Letter Only  </font>"
        return false;
    } else if(personl.length == 0){
        document.getElementById('lname0').focus();
        document.getElementById("emessage1").innerHTML="<font color = 'red'> Enter Last Name </font>"
        return false;
    } else if(!personf.match(exp1)){
        document.getElementById('lname0').focus();
        document.getElementById("emessage1").innerHTML="<font color = 'red'> Letter Only </font>"
        return false;
    } else {
        document.getElementById("emessage1").innerHTML=""
        return true;
    }
}//end of function


//validation service address house or build number
function houseVal(){
    var build = document.getElementById('addressa').value;
    var lairt= new Date();
    var addexp = /^[0-9 a-zA-Z\s]+$/; 
    if(build.length == 0){
        document.getElementById('addressA').focus();
        document.getElementById('amessage').innerHTML="<font color = 'red'>Enter house or building Number</font>"
//        document.getElementById("okay").innerHTML=lairt;
        $(".alert").show();
           return false;
    }else if(!build.match(addexp)){
        document.getElementById('addressA').focus();
        document.getElementById('amessage').innerHTML="<font color = 'red'> Numbers and Letter Only</font>"
        $(".alert").show();
           return false;
    }else{
        document.getElementById("amessage").innerHTML="";
        return true;
    }
}

//validation for street name
function streetVal(){
    var street = document.getElementById('address1').value = document.getElementById('address1').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();}); 
    var stexp =  /^[0-9 a-zA-Z\s]+$/; 
    var stop = new Date();
    if(street.length == 0){
        document.getElementById('address1').focus();
        document.getElementById('amessage').innerHTML="<font color = 'red'> Must enter a street name</font>"
        document.getElementById("okay").innerHTML=stop;
        return false;
    }else if (!street.match(stexp)){
        document.getElementById('address1').focus();
        document.getElementById('amessage').innerHTML="<font color = 'red'> Letter Only and Number only</font>"
        return false;
    }else{
        document.getElementById("amessage").innerHTML="";
        return true;
    }
}

//validation for street location example apartment, suite
function locstVal(){
     var strloc = document.getElementById('strloc');
     if(strloc.options[strloc.selectedIndex].value === ""){
        document.getElementById('amessage').innerHTML="<font color = 'red'> Select Type</font>"
     }else{
        document.getElementById('amessage').innerHTML="";
        return true;
     }
}//end of locstVal()


//validation for suite number
function suiteVal(){
    var suit = document.getElementById('address2').value;
    var siexp =  /^[0-9 a-zA-Z]+$/;
    var line = new Date();
    var pourg = line.toLocaleTimeString();
    if (!suit.match(siexp)){
        document.getElementById('address2').focus();
        document.getElementById('amessage').innerHTML="<font color = 'red'>Numbers and letters only</font>";
        return false;
    }else{
        document.getElementById("amessage").innerHTML="";
        return true;
    }
}

//validation for zip code
function codeVal() {
    var code = document.getElementById('zip5').value;
    var zexp= /^[0-9]+$/;
        if(code.length == 0){
            document.getElementById('zip5').focus();
            document.getElementById("dmessage").innerHTML="<font color = 'red'> Enter Zip Code </font>";
            return false;
        }else if(!code.match(zexp)) {
            document.getElementById('zip5').focus();
//            $("#city, #state").val("");
            document.getElementById("dmessage").innerHTML="<font color = 'red'> Number Only </font>";
            return false;
        }else if(code == 5){
            document.getElementById('addressa').focus();
             
        }else{
            document.getElementById("dmessage").innerHTML="";
            return true;
        }
}//end of codeval

//validation for city and state
function ciVal(){
    var location = document.getElementById('city').value = document.getElementById('city').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();}); 
    var citexp = /^[a-zA-Z]+(\s+[a-zA-Z]+)?$/;//allow white space between names;
    var yitc = new Date();
    var york = yitc.toLocaleTimeString();
    if (location.length==0){
        document.getElementById('zip').focus();
//        document.getElementById('city').focus();
        document.getElementById("dmessage").innerHTML="<font color = 'red'> Enter city location of address </font>"
        document.getElementById("okay").innerHTML= yitc;
        $(".alert").show();
        return false;
    }else if(!location.match(citexp)){
        document.getElementById('city').focus();
        document.getElementById("dmessage").innerHTML="<font color = 'red'> Letters </font>"
        $(".alert").show();
    }else{
        document.getElementById("dmessage").innerHTML="";
        return true;
    }

}//end of ciVal()

function stVal(){
    var sta = document.getElementById('state').value = document.getElementById('state').value.toUpperCase();
    var tat = /^[a-zA-Z]+$/;
    var ats = new Date();
    var kroy = ats.toLocaleTimeString();
    if ((sta.length == 0) || ((sta.length > 0) && (sta.length < 2)) || (sta.length > 2)){
        document.getElementById('state').focus();
        document.getElementById("dmessage").innerHTML="<font color = 'red'> Enter state location of address </font>"
        document.getElementById("okay").innerHTML= ats;
        $(".alert").show();
        return false;
    }else if(!sta.match(tat)){
        document.getElementById('state').focus();
        document.getElementById("dmessage").innerHTML="<font color = 'red'> Letters Only </font>"
        $(".alert").show();
        return false;
    }else{
       document.getElementById("dmessage").innerHTML="";
        return true;
    }
}//end of stVal()

//for text alert
function tphVal(){
    var tex = document.getElementById('textphone').value;
    var type2 = document.getElementById('type2');
    var tpho= /^[0-9\-]+$/;
    var gth = new Date();
    var royk = gth.toLocaleTimeString();
        if(type2.options[type2.selectedIndex].value == 0){
            document.getElementById("omessage").innerHTML="<font color = 'red'> Select phone type </font>"
            document.getElementById("okay").innerHTML= gth;
            return false;
        } else if((tex.length == 0) || ((tex.length > 0) && (tex.length < 12)) || (tex.length > 12)){
            document.getElementById('textphone').focus();
//            document.getElementById("okay").innerHTML= gth;
            document.getElementById("omessage").innerHTML="<font color = 'red'> Phone number must be in this format 111-111-1111 </font>"
            return false;
        }else if(!tex.match(tpho)) {
            document.getElementById('textphone').focus();
            document.getElementById("omessage").innerHTML="<font color = 'red'> 10 Digit Numbers and Dashs(-) Only </font>"
            return false;
        }else{
            document.getElementById("omessage").innerHTML="";
            document.getElementById("okay").innerHTML= gth;
            return true;
        }
}//end tphval()




//valdiation for question"How did you hear about us"
function airVal(){
    var media = document.getElementById('media');//Advertistment
    var internet = document.getElementById('internet');//Internet
    var refer = document.getElementById('refer');//Referral
    var van = document.getElementById('van');//Van/Truck
    var ev = document.getElementById('event');//event
    var toma = document.getElementById('toma');//TOMA
    var soon = document.getElementById('soon');//Community Support
    var sticker = document.getElementById('sticker');//Sticker
    var otherd = document.getElementById('otherd');//other text for Advertistment
    var alli = document.getElementById('alliance');//alliance
    var dhan = document.getElementById('dhanger');//Door Hanger
    var allian = document.getElementById('alliance');//alliance
    //var customer = document.getElementById('customer');
    //for media(Advertising) checkbox selection
    var direct = document.getElementById('direct');//direct
    var radio = document.getElementById('radio');//radio
    var tele = document.getElementById('tele');//television
    var newpaper = document.getElementById('newpaper');//new paper
    //for direct selection
    var dmail = document.getElementById('dmail');
    //for radio selection
    var rstation = document.getElementById('rstation').value;
    var rad = document.getElementById('rad').value;
    var dexp = /^[a-zA-Z]+(\s+[a-zA-Z]+)?$/;//allow white space between names
    var nat = /^[0-9a-zA-Z]+$/;//letters and numbers only
    //for television selection
    var chan = document.getElementById('chan').value;
    var tio = document.getElementById('tio').value;
    //for newpaper selection
    var paper = document.getElementById('news').value;
    var nad = document.getElementById('nad').value;
    //for internet selection
    var google = document.getElementById('google');
    var yahoo = document.getElementById('yahoo');
    var bing = document.getElementById('bing');
    var angie = document.getElementById('angie');
    var website = document.getElementById('website');
    var tmm = document.getElementById('tmm');
    var other = document.getElementById('other');
    var otco = document.getElementById('otco').value;
    //for referral selection
    var firstn = document.getElementById('ref_firstn').value;
    var lastn = document.getElementById('ref_lastn').value;
    var qcity = document.getElementById('ref_city').value;
    //for event selection
    var ec = document.getElementById('cc_event');
    //for other selection
    var otherd = document.getElementById('otherd');
    var otname = document.getElementById('otherChoice').value;
    //Community Support
    var commq = document.getElementById('ommunity');//ddl 
    var cother = document.getElementById('cother').value;//other ddl option for commerical
    var cother1 = document.getElementById('otco3').value;//other for commerical
    var coffer = document.getElementById('csOffer').value;// offer 
    //door Hanger
    var drOP = document.getElementById('doorOP');//door hanger dropdown list
    var dso = document.getElementById('dsource').value;//source textbox
    //alliance hidden div 
    var ceall = document.getElementById('anceall');//alliance ddlb
    var anF = document.getElementById('anFirst').value;//First name
    var anl = document.getElementById('anLast').value;//Last Name
    
    if(!media.checked && !internet.checked && !refer.checked && !van.checked && !ev.checked && !toma.checked && !soon.checked && !sticker.checked && !otherd.checked && !dhan.checked && !allian.checked){
        document.getElementById("admessage").innerHTML="<font color = 'red'>Must answer question how did you hear about'</font>"
        // document.getElementById("okay").innerHTML= dem;
        return false;
    }else if(media.checked){
        if(!direct.checked && !radio.checked && !tele.checked && !newpaper.checked){
            document.getElementById("admessage").innerHTML="<font color = 'red'>Please select Advertising selection</font>"
            // document.getElementById("okay").innerHTML= dem;
            return false;
        }else if(direct.checked){
            if(dmail.options[dmail.selectedIndex].value == 0){
                document.getElementById("admessage").innerHTML="<font color = 'red'>Please select Direct Listing</font>"
                $('#directHidden').hide();
                return false;
            }else if(dmail.options[dmail.selectedIndex].value == 1){
                document.getElementById("admessage").innerHTML = "<font color = 'red'>Special is select</font>";
                $('#directHidden').show();
                return false;
            }else {
                document.getElementById("admessage").innerHTML = "";
                return false;
            }
    }//end for direct mail option
     else if(radio.checked) {
            if (rstation ==0 ){
                document.getElementById('rstation').focus();
                document.getElementById("admessage").innerHTML="<font color = 'red'>Please enter Radio Station and Ad</font>"
                document.getElementById("okay").innerHTML= dem;
                return false;
            }else if(!rstation.match(nat)){
                document.getElementById("admessage").innerHTML="<font color = 'red'>Please Enter Number and Letter Only</font>"
                return false;
            }else if(rad == 0){
                document.getElementById("admessage").innerHTML="<font color = 'red'>Must Enter Ad Name</font>"
               return false;
            }else if (!rad.match(dexp)){
                document.getElementById("admessage").innerHTML="<font color = 'red'>Letter Onlys</font>"
                return false;
            }else{
                document.getElementById("admessage").innerHTML = "";
                return false;
            }
        }//end of radio area 
     else if(tele.checked){
            if(chan== 0){
                document.getElementById('chan').focus();
                document.getElementById("admessage").innerHTML="<font color = 'red'>Must Enter Television station</font>"
                document.getElementById("okay").innerHTML= dem;
                return false;
            }else if(!chan.match(dexp)){
                document.getElementById('chan').focus();
                document.getElementById("admessage").innerHTML="<font color = 'red'>Letter Only</font>"
                return false;
            }else if(tio==0){
                document.getElementById('tio').focus();
                document.getElementById("admessage").innerHTML="<font color = 'red'>Must Enter Ad Name</font>"
                return false;
            }else if(!tio.match(dexp)){
                document.getElementById('tio').focus();
                document.getElementById("admessage").innerHTML="<font color = 'red'>Letter Onlys</font>"
                return false;
            }else{
                document.getElementById("admessage").innerHTML = "";
                return false;
            }
        }//end of television 
    else if(newpaper.checked){
            if(paper==0){
                document.getElementById('news').focus();
                document.getElementById("admessage").innerHTML="<font color = 'red'>Must Enter Newpaper Name</font>"
                document.getElementById("okay").innerHTML= dem;
                return false;
            }else if(!paper.match(dexp)){
                document.getElementById('news').focus();
                document.getElementById("admessage").innerHTML="<font color = 'red'>Letter Only</font>"
                return false;
            }else if (nad== 0){
                document.getElementById('nad').focus();
                document.getElementById("admessage").innerHTML="<font color = 'red'>Must Enter Ad Name</font>"
                return false;
            }else if(!nad.match(dexp)){
                document.getElementById('nad').focus();
                document.getElementById("admessage").innerHTML="<font color = 'red'>Letter Only</font>"
                return false;
            }else{
                document.getElementById("admessage").innerHTML="";
                return false;
            }
        }//end of newpaper selection 
    }//end of media area
   else if(internet.checked){
        if(!google.checked && !yahoo.checked & !bing.checked && !angie.checked && !website.checked && !tmm.checked && !other.checked){
            document.getElementById("admessage").innerHTML="<font color = 'red'>Select search engine'</font>"
            document.getElementById("okay").innerHTML= dem;
            return false;
        } 
        if(other.checked){
            if(otco.length == 0){
                document.getElementById('otco').focus();
                document.getElementById("admessage").innerHTML="<font color = 'red'>Please enter other search engine name</font>"
                document.getElementById("okay").innerHTML= dem;
                return false;
            }else if(!otco.match(dexp)){
                document.getElementById('otco').focus();
                document.getElementById("admessage").innerHTML="<font color = 'red'>Letters Only</font>"
                return false;
            }else{
                document.getElementById("admessage").innerHTML=""
                return false;
            }
        }
    }//end of internet start of referral
    else if(refer.checked){
        if(firstn == 0){
            document.getElementById('ref_first').focus();
            document.getElementById("admessage").innerHTML="<font color = 'red'>Please enter first name of the person  </font>"
            // document.getElementById("okay").innerHTML= dem;
            return false;
        }else if(!firstn.match(dexp)){
            document.getElementById('ref_first').focus();
            document.getElementById("admessage").innerHTML="<font color = 'red'>Letter Only </font>"
            return false;
        }else if(lastn == 0){
            document.getElementById('lastn').focus();
            document.getElementById("admessage").innerHTML="<font color = 'red'>Please enter last name of the person  </font>"
            document.getElementById("okay").innerHTML= dem;
            return false;
        }else if(!lastn.match(dexp)){
            document.getElementById('lastn').focus();
            document.getElementById("admessage").innerHTML="<font color = 'red'>Letter Only </font>"
            return false;
            
        } else if(qcity == 0){
            document.getElementById('ref_city').focus();
            document.getElementById("admessage").innerHTML="<font color = 'red'>What city does this person live  </font>"
            document.getElementById("okay").innerHTML= dem;
            return false;
        }else if(!qcity.match(dexp)){
            document.getElementById('ref_city').focus();
            document.getElementById("admessage").innerHTML="<font color = 'red'>Letter Only  </font>"
            return false;
        }else{
            document.getElementById("admessage").innerHTML=""
            return false;
        }
   }//end of refer start event selection
    else if(ev.checked){
        if(ec.options[ec.selectedIndex].value == 0){
            document.getElementById("admessage").innerHTML="<font color = 'red'> Please select event </font>"
            //document.getElementById("okay").innerHTML= dem;
            return false;
        }else {
            document.getElementById("admessage").innerHTML=""
            return false;
        } 
    }//end of event start of other
     else if(otherd.checked){
        if(otname == ""){
            document.getElementById('otherChoice').focus();
            document.getElementById("admessage").innerHTML="<font color = 'red'>Please answer question </font>"
            //document.getElementById("okay").innerHTML= dem;
            return false;
        }else if(!otname.match(dexp)){
            document.getElementById('otherChoice').focus();
            document.getElementById("admessage").innerHTML="<font color = 'red'>Letter Only </font>"
            return false;
        }else{
            document.getElementById("admessage").innerHTML=""
            //document.getElementById("okay").innerHTML= dem;
            return false;
        } 
        
    }//end of  other
    
    else if(soon.checked){ 
       if(commq.options[commq.selectedIndex].value == 0){
        //$('#otco3').hide();
          document.getElementById("admessage").innerHTML="<font color = 'red'>Select Community Supporter </font>"
            return false;
       }else {
            document.getElementById("admessage").innerHTML=""
            return false;
       }
    } else if(dhan.checked){
        if(drOP.options[drOP.selectedIndex].value == 0){
            document.getElementById("admessage").innerHTML="<font color = 'red'>Select Door Hanger </font>"
            return false;
       }else if(dso.length == 0) {
            document.getElementById("admessage").innerHTML="<font color = 'red'>Enter Door Hanger Source </font>"
            return false;
       } else if(!dso.match(dexp)){
            document.getElementById("admessage").innerHTML="<font color = 'red'>Letters Only </font>"
            return false;
       } else {
            document.getElementById("admessage").innerHTML=""
            return false;
       } 
    } else if(allian.checked){
        if(ceall.options[ceall.selectedIndex].value == 0){
            document.getElementById("admessage").innerHTML="<font color = 'red'>Select Alliance </font>"
            return false;
       }else if(anF.length == 0) {
            document.getElementById("admessage").innerHTML="<font color = 'red'>Enter First Name </font>"
            return false;
       } else if(!anF.match(dexp)){
            document.getElementById("admessage").innerHTML="<font color = 'red'>Letters Only </font>"
            return false;
       } else if(anl.length == 0){
            document.getElementById("admessage").innerHTML="<font color = 'red'>Enter Last Name </font>"
            return false;
       } else {
            document.getElementById("admessage").innerHTML=""
            return false;
       } 
        
    } else{
        document.getElementById("admessage").innerHTML=""
        return true; 
    }

}//end of airval()



 // Question:"Is your mailing and service address the same?" Yes and No radio button
function smVal(){
    var yesm = document.getElementById('yesm');//yes 
    var smno = document.getElementById('smno');//no
    var mbuild = document.getElementById('saddress').value ;//Building Number
    var sbuild = document.getElementById('saddress1').value = document.getElementById('saddress1').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();});//Street Number
    var sadd =  document.getElementById('saddress2').value;//textbox for apartment, suite to be enter
    var zdd = document.getElementById('szip').value;//zip code
    var scity= document.getElementById('scity').value = document.getElementById('scity').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();}); //city
    var sstate = document.getElementById('sstate').value = document.getElementById('sstate').value.toUpperCase();//state
    var strloc1 = document.getElementById('strloc1');//dropdown list
    var smexp = /^[0-9]+$/;//pattern for number
    var strexp = /^[a-zA-Z]+(\s+[a-zA-Z]+)?$/;//allow white space between names
    var strexp1 =  /^[0-9 a-zA-Z\s]+$/; //pattern for numbers and letter with space
    //for date and time
//    var extra=new Date();
//    var paper=extra.toLocaleTimeString();
    if(!yesm.checked && !smno.checked){
        document.getElementById("smmessage").innerHTML="<font color = 'red'>Please Answer Question 'Is your mailing and service address the same?' </font>"
        document.getElementById('mailService').style.display = "none";
//        document.getElementById("okay").innerHTML= extra;
        return false;
    }else if(smno.checked){
        if (zdd.length == 0){
            document.getElementById('szip').focus();
            document.getElementById("smmessage").innerHTML="<font color = 'red'>Please enter zip code </font>";
            //document.getElementById("okay").innerHTML= extra;
            return false; 
        } else if(!zdd.match(smexp)){
            document.getElementById('szip').focus();
            document.getElementById("smmessage").innerHTML="<font color = 'red'>Numbers Only </font>";
            //document.getElementById("okay").innerHTML= extra;
            return false; 
        } else if(mbuild.length == 0){
            document.getElementById('saddress').focus();
            document.getElementById("smmessage").innerHTML="<font color = 'red'>Please enter house or building number </font>";
            document.getElementById("okay").innerHTML= extra;
            return false;
        }else if(!mbuild.match(smexp)){
            document.getElementById('saddress').focus();
            document.getElementById("smmessage").innerHTML="<font color = 'red'>Number Only </font>";
            return false;
        }else if(sbuild.length == 0){
            document.getElementById('saddress1').focus();
            document.getElementById("smmessage").innerHTML="<font color = 'red'>Enter street name </font>";
            document.getElementById("okay").innerHTML= extra;
            return false;
        }else if(!sbuild.match(strexp1)){
            document.getElementById('saddress1').focus();
            document.getElementById("smmessage").innerHTML="<font color = 'red'>Letters and Number Only </font>";
            return false;
        }else if(strloc1.options[strloc1.selectedIndex].value == 0){
            document.getElementById("smmessage").innerHTML="<font color = 'red'>Select Type</font>";
//            document.getElementById("okay").innerHTML= extra;
            return false;
        }else{
            document.getElementById("smmessage").innerHTML="";
            return false; 
        }
    }else{
        document.getElementById("smmessage").innerHTML="";
       return true;
    }

}//end of smVal() function


function smVAl1(){
    var z1 = document.getElementById('mp1');//yes 
    var z2 = document.getElementById('mp2');//no
    //hidden div textbox value
    var w1 = document.getElementById('bzip').value;//Zip 
    var w4 = document.getElementById('bbuiling').value;//building
    var w5 = document.getElementById('bstreet').value;//street
    var dll = document.getElementById('bDDL');//dropdown list
    //pattern
    var sm = /^[0-9]+$/;//pattern for number
    var st = /^[a-zA-Z]+(\s+[a-zA-Z]+)?$/;//allow white space between names 

    if(!z1.checked && !z2.checked){
        document.getElementById("mailBusDiv").innerHTML="<font color = 'red'>Please Answer Question 'Is your mailing and service address the same?' </font>";
        return false;
    } else if(z1.checked){
        $('#busMailing').hide();//hide hidden div for Property Information for Business
        $('#commPackage, #homeselect1').show();//show hidden div for Property Information business
        $('#bzip, #bbuiling, #bstreet, #bcity, #bstate').val('');//clear textbox value;
        document.getElementById("mailBusDiv").innerHTML="";
        return false;
    } else if(z2.checked){
        $('#commPackage').hide();
       //hide hidden div for Property Information for Business
        $('#busMailing').show();//hide hidden div for Property Information for Business
        if(w1.length === 0){
            document.getElementById("mailBusDiv").innerHTML="<font color = 'red'>Please Enter Zip Code </font>";
            return false; 
        }else if(!w1.match(sm)){
            document.getElementById("mailBusDiv").innerHTML="<font color = 'red'>Letter Only </font>";
            return false; 
        }else if(w1.match(sm)){
            $('#bbuiling').focus();
            return false; 
        }else if(w4.length === 0){
            document.getElementById("mailBusDiv").innerHTML="<font color = 'red'>Please Enter Building Number </font>";
            return false;
        }else if(!w4.match(sm)){
            document.getElementById("mailBusDiv").innerHTML="<font color = 'red'>Number Only </font>";
            return false;
        }else if(w5.length == 0){
            document.getElementById("mailBusDiv").innerHTML="<font color = 'red'>Please Enter Street Name </font>";
            return false;
        }else if(!w5.match(st)){
            document.getElementById("mailBusDiv").innerHTML="<font color = 'red'>Letter and Number Only </font>";
            return false;
        }else if(dll.options[dll.selectedIndex].value == 0){
            document.getElementById("mailBusDiv").innerHTML="<font color = 'red'>Select Type</font>";
            return false;
        } else{
            $('#commPackage, #homeselect1').show();//hide hidden div for Property Information for Business
            document.getElementById("mailBusDiv").innerHTML="";
            return false;
        }
    } else{
        document.getElementById("mailBusDiv").innerHTML="";
        return true;
    }

}//end of function smVAl1()

//for question "Is unit operating now"
function unopVal(){
    var oy = document.getElementById('oyes');
    var noo = document.getElementById('noo');
    //for date and time
    var txera=new Date();
//    var prpea=txera.toLocaleTimeString();
    if(!oy.checked && !noo.checked){
        document.getElementById("unitconmessage").innerHTML="<font color = 'red'>Must answer question 'Is unit operating now' </font>";
        document.getElementById("okay").innerHTML= txera;
        return false; 
    }else{
       document.getElementById("unitconmessage").innerHTML="";
       return true;
    }

}//end of unopVAl() function

//for quesiton "unit concern"
function concVal(){
    var issue = document.getElementById('issue');
    //for date and time
    var retxa = new Date();
    var eprap = retxa.toLocaleTimeString();
    if(issue.options[issue.selectedIndex].value == 0){
        document.getElementById("unitconmessage").innerHTML="<font color = 'red'>Please select unit concern  </font>";
        document.getElementById("okay").innerHTML= retxa;
        return false;
    }else{
        document.getElementById("unitconmessage").innerHTML = "";
        return true;
    }

}//end of function

//for question " Estimate Unit age"
function masyVal(){
    var estimate = document.getElementById('age').value;
    var esexp = /^[0-9]+$/;
    //for date and time
    var axtre = new Date();
    var pepra = axtre.toLocaleTimeString();
    if(estimate.length == 0){
        document.getElementById('age').focus();
        document.getElementById('gromessage').innerHTML="<font color = 'red'> Please answer question 'Estimate Unit Age'</font>";
        document.getElementById("okay").innerHTML= axtre;
        return false;
    }else if(!estimate.match(esexp)){
        document.getElementById('age').focus();
        document.getElementById('gromessage').innerHTML="<font color = 'red'> Number Only</font>";
        return false;
    }else{
        document.getElementById('gromessage').innerHTML="";
        return true;
    }
    
}

//for question "Number of Systems in Home"
function masVal(){
    var ny = document.getElementById('agenum').value;
    var next = document.getElementById('onal').value;
    var yes = document.getElementById('oper');
    var content = document.getElementById('soption').innerHTML = "";
    var nyexp = /^[0-9]+$/;
     //for date and time
    var treax = new Date();
//    var prape = treax.toLocaleTimeString();
    // radio button selection
    var nosy0 = document.getElementById('rsysem1');//1
    var nosy1 = document.getElementById('rsysem2');//2
    var nosy2 = document.getElementById('rsysem3');//3
    var nosy3 = document.getElementById('rsysem4');//4

    if(ny.length == 0){
        if(!nosy0.checked && !nosy1.checked && !nosy2.checked && !nosy3.checked){
            document.getElementById('gromessage').innerHTML="<font color = 'red'> Please answer question 'Number of Systems in Home'</font>";
        }else{
            document.getElementById('gromessage').innerHTML="<font color = 'red'> </font>";
        }
    } else if(ny.length > 0 && ny > 1) {
        document.getElementById('addsystems').style.display = "block";
        document.getElementById('soption').style.display = "none";
        $('input[name=nosy]').removeAttr('checked');//uncheck Number of System radio button options(Residential)   
        if(next == ny){
            document.getElementById('soption').style.display = "none";
            return false;  
        } else if(next.length == 0 && next == ny || next.length == 0 && next < ny) {
            document.getElementById('soption').style.display = "none";
            //deleteSystemCheck();
            return false;  
        } else if(next < ny){
            document.getElementById('soption').style.display = "block";
            //for each loop system to display number of system to check if less than ny(agenum)
           // addSystemCheck();
            
        } else { 
           return false;
        }
    } else if(!ny.match(nyexp)){
        document.getElementById('agenum').focus();
        document.getElementById('gromessage').innerHTML="<font color = 'red'> Number Only'</font>";
        document.getElementById('soption').style.display = "none";
        return false; 
    }else{
        document.getElementById('gromessage').innerHTML="";
       return true;
    }
}

function addSystemCheck() {
    var next = document.getElementById('onal').value;

    for (var i = 0; i < next; i++){
        var content = document.createElement('div');
            document.getElementById('soption').appendChild(content);

        var content = document.createElement('label');
            content.innerHTML = ' <label class = "question">Area:</label>'
            document.getElementById('soption').appendChild(content);

        //var content1 = document.createElement("option");
         var content = document.createElement("select");
            content.name = "name";
            content.id = "id";
            content.options[content.length] = new Option("Select", "0");
            content.options[content.length] = new Option("master", "1");
            content.options[content.length] = new Option("living room", "2");
            content.options[content.length] = new Option("kitchen", "3");
            content.options[content.length] = new Option("upstairs", "4");
            content.options[content.length] = new Option("downstairs", "5");
            document.getElementById('soption').appendChild(content);
    
        var content = document.createElement('label');
            content.innerHTML = ' <label class = "question2" style = "margin-right:auto; margin-left:-140px;">Age:</label>';
            document.getElementById('soption').appendChild(content);

        var content = document.createElement('input');
            content.style.width = "50px";
            content.innerHTML = ' <input type = "text"  name = "carea" id = "carea" onchange = "samVal()"  />';
            document.getElementById('soption').appendChild(content);

        var content = document.createElement('label');
            content.innerHTML = '<label class = "question3" >Is unit operating now?</label>';
            document.getElementById('soption').appendChild(content);
            
        var content = document.createElement('checkbox');
            content.innerHTML = '<label class = "type"><input type= "checkbox" name = "oyes" value ="hyes"  id ="hyes" />Yes</label>';
            document.getElementById('soption').appendChild(content);
        
        var content = document.createElement('checkbox');
            content.innerHTML = '<label class = "type"><input type= "checkbox" name = "noo" value ="hno"  id ="hno" />No</label>';
            document.getElementById('soption').appendChild(content);
    }
}//end of function


//for question "Number of Systems at your business or building"
function masVal1(){
    var ny1 = document.getElementById('agenum1').value;
    var next1 = document.getElementById('onal1').value;
    var yes = document.getElementById('oper');
    var content = document.getElementById('soption1').innerHTML = "";
    var nyexp = /^[0-9]+$/;
    //radio button
    var n1 = document.getElementById('system1');//1
    var n2 = document.getElementById('system2');//2
    var n3 = document.getElementById('system3');//3
    var n4 = document.getElementById('system4');//4
    
    if(ny1.length == 0){
       if(!n1.checked && !n2.checked && !n3.checked && !n4.checked){
            document.getElementById("gromessage").innerHTML="<font color = 'red'>Answer question: Number of Systems at Busines or Building'</font>";
            $('#agenum1').val('')
            return false;
        } else {
            document.getElementById('addsystems1').style.display = "none";
            $('.coIYS').show();
            $('#agenum1').val('');
            document.getElementById("gromessage").innerHTML="Next Question";
            return false;
        }
    } else if(ny1.length > 0 && ny1 > 4) {
        document.getElementById('addsystems1').style.display = "block";
        document.getElementById('soption1').style.display = "none";
        $('input[name=nosy1]').removeAttr('checked');//uncheck Number of System radio button options(Residential)   
        $('.coIYS').show();
        
        if(next1 == ny1){
            document.getElementById('soption1').style.display = "none";
            return false;  
        } else if(next1.length == 0 && next1 == ny || next1.length == 0 && next1 < ny) {
            document.getElementById('soption1').style.display = "none";
           // deleteSystemCheck();
            return false;  
        } else if(next1 < ny1){
            document.getElementById('soption1').style.display = "block";
            //for each loop system to display number of system to check if less than ny(agenum)
            addSystemCheck1();
            
        } else {                       
            return false;
        }
    }
    else if(!ny1.match(nyexp)){
        document.getElementById('agenum1').focus();
        document.getElementById('gromessage1').innerHTML="<font color = 'red'> Number Only'</font>";
        document.getElementById('soption1').style.display = "none";
        return false; 
    }else{
       document.getElementById('gromessage1').innerHTML="";
       return true;
    }
}//end of function

function addSystemCheck1() {
    var next1 = document.getElementById('onal1').value;

    for (var i = 0; i < next1; i++){
        var content = document.createElement('div');
            document.getElementById('soption1').appendChild(content);

        var content = document.createElement('label');
            content.innerHTML = ' <label class = "question">Area:</label>'
            document.getElementById('soption1').appendChild(content);

        //var content1 = document.createElement("option");
         var content = document.createElement("select");
            content.name = "name";
            content.id = "id";
            content.options[content.length] = new Option("Select", "0");
            content.options[content.length] = new Option("master", "1");
            content.options[content.length] = new Option("living room", "2");
            content.options[content.length] = new Option("kitchen", "3");
            content.options[content.length] = new Option("upstairs", "4");
            content.options[content.length] = new Option("downstairs", "5");
            document.getElementById('soption1').appendChild(content);
    
        var content = document.createElement('label');
            content.innerHTML = ' <label class = "question2" style = "margin-right:auto; margin-left:-140px;">Age:</label>';
            document.getElementById('soption1').appendChild(content);

        var content = document.createElement('input');
            content.style.width = "50px";
            content.innerHTML = ' <input type = "text"  name = "carea" id = "carea" onchange = "samVal()"  />';
            document.getElementById('soption1').appendChild(content);

        var content = document.createElement('label');
            content.innerHTML = '<label class = "question3" >Is unit operating now?</label>';
            document.getElementById('soption1').appendChild(content);
            
        var content = document.createElement('checkbox');
            content.innerHTML = '<label class = "type"><input type= "checkbox" name = "oyes" value ="hyes"  id ="hyes" />Yes</label>';
            document.getElementById('soption1').appendChild(content);
        
        var content = document.createElement('checkbox');
            content.innerHTML = '<label class = "type"><input type= "checkbox" name = "noo" value ="hno"  id ="hno" />No</label>';
            document.getElementById('soption1').appendChild(content);
    }
}//end of function

//this function is for questions"Number of systems in home" &"Number of systems to check" for Scheduled Service Inbound
//if "Number of system in home equals the same as Number of system to check it will not display there question"
//if number of systems to check is less than number of systems in home it will display there question
//question are area, age, unit is working

function samVal(){
        var systems = document.getElementById('systems').value;
        var syche = document.getElementById('syche').value; 
        var content1 = document.getElementById('options').innerHTML = "";
        var tepat = /^[0-9]+$/;
        //for date and time
        var xeera =new Date();
        var rappx = xeera.toLocaleTimeString();
    if(systems.length == 0){
        document.getElementById('systems').focus();
        document.getElementById('gromessage').innerHTML="<font color = 'red'> Answer question 'Number of Systems in Home'</font>";
//        document.getElementById("okay").innerHTML= treax;
        return false; 
    }else if(!systems.match(tepat)){
        document.getElementById('systems').focus();
        document.getElementById('gromessage').innerHTML="<font color = 'red'> Number only</font>";
        return false;
    }else if(syche.length == 0){
        document.getElementById('syche').focus();
        document.getElementById('gromessage').innerHTML="<font color = 'red'> Answer question 'Number of Systems to check in Home'</font>";
        return false;
    }else if(!syche.match(tepat)){
        document.getElementById('gromessage').innerHTML="<font color = 'red'> 'Number Only'</font>";
        return false;
    }else if(systems == syche){
        document.getElementById('options').style.display = "none";
        //document.getElementById('Unsure').style.display = "block";
        return false;
    }else if(systems > syche){
        document.getElementById('options').style.display = "block";
        addSysCheck();
        return false;
    }
    else{
        document.getElementById('gromessage').innerHTML="";
        return true;
    }
}//end of function

//function samVal() create element for question is call 
function addSysCheck() {
    var syche = document.getElementById('syche').value;
    var aselect = document.getElementById('aselect');
    //var drop = ["masterbed", "room", "living room", "kitchen"]; 
    for (var i = 0; i < syche; i++){
        var content1 = document.createElement('div');
            document.getElementById('options').appendChild(content1);

        var content1 = document.createElement('label');
            content1.innerHTML = ' <label class = "question">Area:</label>';
            document.getElementById('options').appendChild(content1);

        //var content1 = document.createElement("option");
             var content1 = document.createElement("select");
                content1.name = "name";
                content1.id = "id";
                content1.options[content1.length] = new Option("Select", "0");
                content1.options[content1.length] = new Option("master", "1");
                content1.options[content1.length] = new Option("living room", "2");
                content1.options[content1.length] = new Option("kitchen", "3");
                content1.options[content1.length] = new Option("upstairs", "4");
                content1.options[content1.length] = new Option("downstairs", "5");
                document.getElementById('options').appendChild(content1);
    
        var content1 = document.createElement('label');
            content1.innerHTML = ' <label class = "question2" style = "margin-right:auto; margin-left:-140px;">Age:</label>';
            document.getElementById('options').appendChild(content1);

        var content1 = document.createElement('input');
            content1.style.width = "50px";
            content1.innerHTML = ' <input type = "text"  name = "carea" id = "carea" onchange = "samVal()"  />';
            document.getElementById('options').appendChild(content1);

        var content1 = document.createElement('label');
            content1.innerHTML = '<label class = "question3" >Is unit operating now?</label>';
            document.getElementById('options').appendChild(content1);
            
        var content1 = document.createElement('checkbox');
            content1.innerHTML = '<label class = "type"><input type= "checkbox" name = "oyes" value ="hyes"  id ="hyes" />Yes</label>';
            document.getElementById('options').appendChild(content1);
        
        var content1 = document.createElement('checkbox');
            content1.innerHTML = '<label class = "type"><input type= "checkbox" name = "noo" value ="hno"  id ="hno" />No</label>';
            document.getElementById('options').appendChild(content1);
    }
}//end of function

function compCon(){
    var lob = document.getElementById("compname").value;
    var content5 = document.getElementById('companyContract').innerHTML = "";
    if (lob.length == 0){
        document.getElementById("compname").focus();
        document.getElementById("jkl").innerHTML="<font color = 'red'>Enter Company Name </font>";
    } else if (lob > 0){
        document.getElementById('companyContract').style.display = "block";
         contractShow();
    } else {
        document.getElementById('jkl').innerHTML = "";
    }
}//end of function

//This function validate if gas or electric is check
function gasVal(){
    var g = document.getElementById('gas');
    var tric = document.getElementById('electric');
    var heat = document.getElementById('heat');
    var propane = document.getElementById('propane');
    var natural = document.getElementById('natural');
    //for date and time
    var xea = new Date();
    var low = xea.toLocaleTimeString();

    if(!heat.checked && !g.checked && !tric.checked){
        document.getElementById('gemessage').innerHTML="<font color = 'red'> Answer question 'Is your home heat, gas or electric?'</font>";
        document.getElementById("okay").innerHTML= xea;
        return false;
    }else if(g.checked){
        if(!propane.checked && !natural.checked){
            document.getElementById('gemessage').innerHTML="<font color = 'red'> Check  propane or natural</font>";
            document.getElementById("okay").innerHTML= xea;
            return false;
        }else{
           document.getElementById('gemessage').innerHTML="";
            return false; 
        }
        
    }else{
        document.getElementById('gemessage').innerHTML="";
        return true;
    }

}//end of function


//for selection for express service, guaranteed and super saver
 function seroVal(){
    var ress = document.getElementById('aprice');
    var aran = document.getElementById('gprice');
    var uave = document.getElementById('fprice');
    
    if (!ress.checked && !aran.checked && !uave.checked){
        document.getElementById('svermessage').innerHTML="<font color = 'red'> Please select service options'</font>";
        return false; 
    }else{
        document.getElementById('svermessage').innerHTML="";
        return true; 
    }
}//end of seroVal()function

//for question "What day is best for you?"
function daysVal(){
    var tday = document.getElementById('today');//today
    var trrow = document.getElementById('tomorrow');//tomorrow
    var asap = document.getElementById('asap');//asap
    var dae = document.getElementById('tdate').value;//textbox for Date display
    var dpat = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
    //for date and time
    
    var ferof = new Date();   
    //var ferof = new Date().getTime();             
    //var owl = ferof;
    //check the date if current 
    //var dae1 = Date.parse($('#tdate').val());

    if(!tday.checked && !trrow.checked && !asap.checked){
        document.getElementById('damessage').innerHTML="<font color = 'red'> Please select choice today,tommorrow or asap</font>";
    }else if(dae.length == 0){
       document.getElementById('tdate').focus();
       document.getElementById('damessage').innerHTML="<font color = 'red'> Please enter date</font>";
    }else if(!dae.match(dpat)){
        document.getElementById('tdate').focus();
        document.getElementById('damessage').innerHTML="<font color = 'red'> Date format:01/23/14</font>";
    }else if(dae.value < ferof){
        document.getElementById('damessage').innerHTML="<font color = 'red'> Enter Current or Future date</font>";
    }else{
        document.getElementById('damessage').innerHTML="";
    }
}//end of function

// if(!tday.checked && !trrow.checked && !asap.checked){
//         document.getElementById('damessage').innerHTML="<font color = 'red'> Please select choice today,tommorrow or asap</font>";
//     }else if(dae.length == 0){
//        document.getElementById('tdate').focus();
//        document.getElementById('damessage').innerHTML="<font color = 'red'> Please enter date</font>";
//     }else if(!dae.match(dpat)){
//         document.getElementById('tdate').focus();
//         document.getElementById('damessage').innerHTML="<font color = 'red'> Date format:01/23/14</font>";
//     }else if(dae1 == ferof){
//            document.getElementById('damessage').innerHTML="<font color = 'red'> Date Equal Current Date</font>"; 
//     }else if(dae1 < ferof){
//         document.getElementById('damessage').innerHTML="<font color = 'red'> Enter Current or Future date</font>";
//     }else{
//         document.getElementById('damessage').innerHTML="";
//     }



                // var b = document.getElementById("da").value;
                // //date
                // var d = new Date().getTime();
                // var b1 = Date.parse($('#da').val());
                // //Time button Morning, Afternoon, Evening, Anytime
                // var aem0 = document.getElementById("ensure1");
                // var aem1 = document.getElementById('ensure2');
                // var aem2 = document.getElementById('ensure3');
                // var aem3 = document.getElementById('ensure4');
                // //pattern
                // var pat = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;

                // if (!aem0.checked && !aem1.checked && !aem2.checked && !aem3.checked){
                //         document.getElementById('dateCheckMess').innerHTML="<font color = 'red'>Select Time Selection</font>"
                // }else if(b.length == 0){
                //      document.getElementById('dateCheckMess').innerHTML="<font color = 'red'>Select or Enter Date</font>"
                // }else if(!b.match(pat)){
                //     document.getElementById('dateCheckMess').innerHTML="<font color = 'red'>Enter Correct Format: mm/dd/yyy</font>"
                // }else if(b1 < d) {
                //   document.getElementById('dateCheckMess').innerHTML="<font color = 'red'>Enter Future or Present Date</font>"
                // } else {
                //     document.getElementById('dateCheckMess').innerHTML="<font color = 'red'></font>"
                //     alert("Thank You");
                // }

// ((code.length == 0) || ((code.length > 0) && (code.length < 5)) || (code.length > 5))


// var selectedDate = $('#datepicker').datepicker('getDate');
// var now = new Date();
// if (selectedDate < now) {
  // selected date is in the past
//}

//http://www.coding-issues.com/2013/08/check-given-date-greater-than-current.html


//for day of week Monday, Tuesday, Wed, etc....
function weekVal(){
    var monday = document.getElementById('monday');
    var tuesday =  document.getElementById('tuesday');
    var wednesday = document.getElementById('wednesday');
    var thursday = document.getElementById('thursday');
    var friday = document.getElementById('friday');
    var saturday = document.getElementById('saturday');
    var sunday = document.getElementById('sunday');
    //for date and time
    var dmne =new Date();
    var appx = dmne.toLocaleTimeString();

    if (!monday.checked && !tuesday.checked && !wednesday.checked && !thursday.checked && !friday.checked && !saturday.checked && !sunday.checked){
        document.getElementById('wamessage').innerHTML="<font color = 'red'> Please select a day Monday, Tuesday, etc.....</font>";
        document.getElementById("okay").innerHTML= dmne;
        return false;
    }else{
       document.getElementById('wamessage').innerHTML="";
       document.getElementById("okay").innerHTML= dmne;
        return true;
    }
}

//for question "What time is best for you?"
function timeVal(){
    var morning = document.getElementById('morning');
    var afternoon = document.getElementById('afternoon');
    var evening = document.getElementById('evening');
    //for date and time
    //var gin =new Date();
//    var fter = gin.toLocaleTimeString();
    if(!morning.checked && !afternoon.checked && !evening.checked){
       document.getElementById('timessage').innerHTML="<font color = 'red'> Please answer question 'What time is best for you?'</font>";
//       document.getElementById("okay").innerHTML= gin;
        return false; 
    }else{
        document.getElementById('timessage').innerHTML="";
        //document.getElementById("okay").innerHTML= gin;
        return true;
    }
}//end of function

//for question "Is the credit card billing and mailing address the same?"

function billVal(){
    var syes = document.getElementById('syes');//yes radio button
    var sno = document.getElementById('sno');//no radio button
    var dress = document.getElementById('saddress3').value ;//building number
    var dresst = document.getElementById('dresst').value = document.getElementById('dresst').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();});//street name
    var dresz = document.getElementById('dresz').value;//zip
    var dressf = document.getElementById('dressf').value;//suite,apartment text box
    var ityf = document.getElementById('ityf').value = document.getElementById('ityf').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();});//city
    var states = document.getElementById('states').value = document.getElementById('states').value.toUpperCase();//states
    var strloc2 = document.getElementById('strloc2');//drop down list
    //dropdown list
    var apart = document.getElementById('avenue');//apartment
    var bpat = /^[0-9]+$/;
    var spat = /^[0-9a-zA-Z\s]+$/;
    var lpat = /^[a-zA-Z]+$/;
    //for date and time
//    var sad=new Date();
//    var zebra= sad.toLocaleTimeString();
    if (!syes.checked && !sno.checked){
        $('.dchDiv').hide();
        document.getElementById('bmmessage').innerHTML="<font color = 'red'>Please answer question 'Is the credit card billing and mailing address the same?'</font>";
        return false; 
    }else if(sno.checked){
         if(dresz.length == 0){
            document.getElementById('dresz').focus();
            document.getElementById('bmmessage').innerHTML="<font color = 'red'>Please enter zip code</font>";
            return false;  
        }else if(!dresz.match(bpat)){
             $("#ityf,#states").val("");
            document.getElementById('dresz').focus();
            document.getElementById('bmmessage').innerHTML="<font color = 'red'>Number Only</font>";
            return false;   
        }else if(!dresz.match(bpat)){
            document.getElementById('saddress3').focus();
            return false;
        }else if(dress.length == 0){
            document.getElementById('saddress3').focus();
            document.getElementById('bmmessage').innerHTML="<font color = 'red'>Please enter building or house number</font>";
            return false;  
        }else if(!dress.match(bpat)){
            document.getElementById('saddress3').focus();
            document.getElementById('bmmessage').innerHTML="<font color = 'red'>Number Only</font>";
            return false;  
        }else if(dresst.length == 0){
            document.getElementById('dresst').focus();
            document.getElementById('bmmessage').innerHTML="<font color = 'red'>Please enter street address</font>";
            return false;  
        }else if(!dresst.match(spat)){
            document.getElementById('dresst').focus();
            document.getElementById('bmmessage').innerHTML="<font color = 'red'>Number and letter only</font>";
            return false;   
        }else if(strloc2.options[strloc2.selectedIndex].value == 0){
            document.getElementById('bmmessage').innerHTML="<font color = 'red'> Select building type</font>";
            return false; 
//            if(apart.checked){
//                 document.getElementById('bmmessage').innerHTML="<font color = 'red'> Enter apartment number</font>";  
//            }else{
//              document.getElementById('bmmessage').innerHTML="<font color = 'red'> It is working</font>";    
//            }
        }else if(dressf.length == 0){
            document.getElementById('dressf').focus();
            document.getElementById('bmmessage').innerHTML="<font color = 'red'>Please enter suite or apt number if none put '000'</font>";
            return false;      
        }else if(!dressf.match(bpat)){
            document.getElementById('dressf').focus();
            document.getElementById('bmmessage').innerHTML="<font color = 'red'>Number Only</font>";
            return false;  
        }else{
            document.getElementById('bmmessage').innerHTML="";
            return false;
        }
    }else{
        $('.dchDiv').show();//show to next Question "Should system requird repairs with same card"
        document.getElementById('bmmessage').innerHTML="";
        document.getElementById("okay").innerHTML= sad;
        return true; 
    }
}//end of function

//function for question"Should system require repairs,how will you be paying?"
function typeVal(){
    var debit = document.getElementById('debit');//debit
    var cc = document.getElementById('cc');//Credit Card
    var hwa = document.getElementById('hwa');//Home Warranty
    //debit hidden div radio button selection
    var creSame = document.getElementById('cdSame');//same
    var creDiff = document.getElementById('cdDiff');//Different
    var comps = document.getElementById('comps').value;
    var tun = document.getElementById('tun').value;
    var waHT = document.getElementById('hwText').value;
    var repat =/^[a-zA-Z\s]+$/;
    var polpat =  /^[0-9]+$/;
    
    if(!debit.checked && !cc.checked && !hwa.checked){
        document.getElementById('tymessage').innerHTML="<font color = 'red'>Please select type of payment</font>";
        return false;
    }else if(debit.checked || cc.checked){
        if(!creSame.checked && !creDiff.checked){
          document.getElementById('tymessage').innerHTML="<font color = 'red'>Checked Debit/Credit Selection</font>";
          return false;
        } else{
           document.getElementById('tymessage').innerHTML="";
          return false;
        }
    }else if(hwa.checked){
        if(waHT.length == 0){
           document.getElementById('tymessage').innerHTML="<font color = 'red'>Enter Manufacturer</font>";
          return false;
        }else{
            document.getElementById('tymessage').innerHTML="";
          return false;
        }
    }else{
        document.getElementById('tymessage').innerHTML="";
        return true;
    }
}//end of function

function stboVal(){
    var ybook = document.getElementById('ybook');
    var lost = document.getElementById('lost');
    //for date and time
    if(!ybook.checked && !lost.checked){
            document.getElementById('callmessage').innerHTML="<font color = 'red'>Please answer question</font>";
            return false;
        } else if(ybook.checked == true) {
            document.getElementById('firm').disabled = false;
            document.getElementById('callmessage').innerHTML="";
            return false; 
        }else if(lost.checked) {
            document.getElementById('firm').disabled = true;
            return false;
            if(lcall.options[lcall.selectedIndex].value == 0){
               document.getElementById('callmessage').innerHTML="<font color = 'red'>Please select reason</font>";
              return false; 
            }else{
                document.getElementById('callmessage').innerHTML="";
                return false; 
            }
        }else {
           document.getElementById('callmessage').innerHTML="";
           document.getElementById('confirm').disabled = "";
          return true; 
        }

}//end of function

//validation for pages complients and concerns
function cuspVal(){
    var pelist = document.getElementById('typeList');
    var person = document.getElementById('person');
    //for date and time
    var grass =new Date();
    var hopper = grass.toLocaleTimeString();
    if(pelist.options[pelist.selectedIndex].value == 0){
        document.getElementById('rabbit').innerHTML="<font color = 'red'> Select one</font>";
        document.getElementById("okay").innerHTML= grass;
        return false;
    }else if(person.checked) {
        document.getElementById('givenname').style.display = "block";
        document.getElementById("okay").innerHTML= grass;
        return false;

    }else{
        document.getElementById('rabbit').innerHTML="";
        return true;
    }
}

//validation for question"May we publish your comments?"
function publVal(){
    var comy = document.getElementById('comy');
    var comn = document.getElementById('comn');
    //for date and time
    var fish =new Date();
    var hook = fish.toLocaleTimeString();
    if (!comy.checked && !comn.checked){
        document.getElementById('foot').innerHTML="<font color = 'red'> Please answer question</font>";
        document.getElementById("okay").innerHTML= fish;
        return false;
    }else{
        document.getElementById('foot').innerHTML="";
        return true;
    }

}

//for page "Customer Concerns(Unhappy)" question"What is your concern?"
function cVal(){                                        
    var bird = document.getElementById('bird');
    //for date and time
    var water = new Date();
//    var bubbles = water.toLocaleTimeString();
    if(bird.options[bird.selectedIndex].value == 0){
        document.getElementById('roof').innerHTML="<font color = 'red'> Select one</font>";
        document.getElementById("okay").innerHTML= water;
        return false;
    }else{
        document.getElementById('roof').innerHTML="";
        return true;
    }

}//end of function

//for page "Customer Concerns(Unhappy)" question"Would like a supervisior to"
function VistaVAl(){
    var met = document.getElementById('met');
    var cll = document.getElementById('cll');
    var leav = document.getElementById('leav');
    var protime = document.getElementById('protime').value;
    var proexp= /^([a-zA-Z0-9_ :\-.'"]+)$/;// allow semi-colon and letter
    var ade = document.getElementById('tdate').value;
    //for date and time
    var tree =new Date();
    var dirt = tree.toLocaleTimeString();
    if(!met.checked && !cll.checked && !leav.checked){
        document.getElementById('paper').innerHTML="<font color = 'red'> Answer question </font>";
        document.getElementById("okay").innerHTML= tree;
        return false;
    }else if(met.checked){
        if(protime.length == 0){
            document.getElementById('protime').focus();
            document.getElementById('paper').innerHTML="<font color = 'red'> Enter Time </font>";
            document.getElementById("okay").innerHTML= tree;
            return false;
        }else if(!protime.match(proexp)){
            document.getElementById('paper').innerHTML="<font color = 'red'> Letter and semi-colon only </font>";
            return false;
        }else if(ade.length == 0){
            document.getElementById('tdate').focus();
            document.getElementById('paper').innerHTML="<font color = 'red'> Please enter date</font>";
            document.getElementById("okay").innerHTML= tree;
            return false; 
        }   
       
    }else{
        document.getElementById('paper').innerHTML="";
        return true;

    }

}//end of function

//for page solictitor
function cusMess(){
   var emailtwo = document.getElementById('emailtwo').value;
   var parish = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([com\co\.\in])+$/
    //for date and time
//    var popper = new Date();
//    var flyer = popper.toLocaleTimeString();
    //for end of time
    //var pend = new Date();
    //var time1 = pend - popper;
    if(emailtwo.length == 0){
        document.getElementById('emailtwo').focus();
        //document.getElementById('popcorn').innerHTML="<font color = 'red'> Enter Email Address </font>"
        document.getElementById('movies').innerHTML="<font color = 'red'> Enter Email Address </font>";
        document.getElementById("okay").innerHTML= popper;
        return false;
    }else if(!emailtwo.match(parish)){
        document.getElementById('emailtwo').focus();
        //document.getElementById('popcorn').innerHTML="<font color = 'red'> 1234@gmail.com is the format </font>"
        document.getElementById('movies').innerHTML="<font color = 'red'> 1234@gmail.com is the format</font>";
        return false;
    }else{
        //document.getElementById('popcorn').innerHTML=""
        document.getElementById('movies').innerHTML="";
        //time1 = pend - flyer;
        //alert(time1);
        return true;
    }
}//end of function

function comMess(){ 
 var solcom = document.getElementById('solcom').value;
 var citexp = /^[a-zA-Z]+(\s+[a-zA-Z]+)?$/;//allow white space between names;
 //for date and time
    var jal = new Date();
    var mond = jal.toLocaleTimeString();
    //for end time
    var jend = Date.now();
    var time2 = jend - jal;
    if(solcom.length == 0){
        document.getElementById('solcom').focus(); 
        document.getElementById('movies').innerHTML="<font color = 'red'> Enter Company Name </font>";
        document.getElementById("okay").innerHTML= jal;
        return false;
    }else if(!solcom.match(citexp)){
        document.getElementById('movies').innerHTML="<font color = 'red'> Letter Only </font>";
        return false;
    } else{
        document.getElementById('movies').innerHTML="";
        time2 = jend - jal;
        alert(time2);
        return true;
    }

}//end of function
function oneNum(){
    var mobile = document.getElementById('mobile');
    var phber = document. getElementById('phonenumber').value;
    var xpeww= /^[0-9\-]+$/; //with dashes
    //for date and time
    var puppy =new Date();
    var chow = puppy.toLocaleTimeString();
      
    if(mobile.options[mobile.selectedIndex].value == 0){
        document.getElementById('movies').innerHTML="<font color = 'red'> Select Phone Type</font>";
        document.getElementById("okay").innerHTML= puppy;
        return false;
    }else if(phber.length == 0){
        document.getElementById('phonenumber').focus();
        document.getElementById('movies').innerHTML="<font color = 'red'> Enter Phone Number </font>";
        document.getElementById("okay").innerHTML= puppy;
        return false;
    }else if(!phber.match(xpeww)){
        document.getElementById('phonenumber').focus();
        document.getElementById('movies').innerHTML="<font color = 'red'> Number and dashes Only </font>";
        document.getElementById("okay").innerHTML= puppy;
        return false;
    }else{
        document.getElementById('movies').innerHTML="";
        //for end time
        //var end = Date.now()
        //time1 = end - puppy;
       // alert(time1);
        return true;
    }
}//end of function

function buyItem(){
    var selling = document.getElementById('selling').value;
    //for date and time
    var shop =new Date();
    var lizard = shop.toLocaleTimeString();
    if(selling.length == 0){
        document.getElementById('selling').focus();
        document.getElementById('buyingOp').innerHTML="<font color = 'red'> Enter name Item</font>";
        document.getElementById("okay").innerHTML= shop;
        return false;
    }else{
        document.getElementById('buyingOp').innerHTML="";
        return true;
    }

}//end of function

//billing page question "Invoice Number"
 function invVal(){
    var invoice = document.getElementById('invoice').value;
    var expt = /^[0-9]+$/;
    //for date and time
    var shop1 =new Date();
    var lizard1 = shop1.toLocaleTimeString();
    if (invoice.length == 0){
        document.getElementById('invoice').focus;
        document.getElementById('mov').innerHTML ="<font color = 'red'> Enter invoice number</font>";
        document.getElementById("okay").innerHTML= shop1;
        return false;
    }else if(!invoice.match(expt)){
        document.getElementById('invoice').focus;
        document.getElementById('mov').innerHTML = "<font color = 'red'> Numbers Only</font>";
        document.getElementById("okay").innerHTML= shop1;
        return false;
    }else{
        document.getElementById('mov').innerHTML = "";
        return true;
    }

}

//billing page --question"Update method of payment"
function upmetVal(){
    var sele1 = document.getElementById('upy');
    var sele2 = document.getElementById('upn');
    var sele3 = document.getElementById('lldebit');
    var sele4 = document.getElementById('llcc');
    var sele5 = document.getElementById('llcing');
    //for credit card selection
    var card1 = document.getElementById('master');
    var card2 = document.getElementById('visa');
    var card3 = document.getElementById('american');
    var card4 = document.getElementById('discover');
    //for credit card information
    var number1 = document.getElementById('ccnum').value;
    var number2 = document.getElementById('expdate').value;
    var number3 = document.getElementById('ccv').value;
    var number4 = document.getElementById('knab').value;
    var number5 = document.getElementById('nakb').value;
    var number7 = document.getElementById('anbk').value;
    //for pattern
    var lnumber = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/;
    var dnumber = /^[0-9\/]+$/;//with slashes
    var vnumber = /^[0-9]+$/;
    var snumber = /^(\w+ ?)*$/;//allow white space between names
    if(!sele1.checked && !sele2.checked){
        document.getElementById('eleph').innerHTML ="<font color = 'red'> Answer question</font>";
        return false;
    }else if(sele1.checked){
        if(!sele3.checked && !sele4.checked && !sele5.checked){
            document.getElementById('eleph').innerHTML ="<font color = 'red'> Please select type of payment</font>";
            return false;
        }else if(sele3.checked || sele4.checked){
            if(!card1.checked && !card2.checked && !card3.checked && !card4.checked){
                document.getElementById('eleph').innerHTML ="<font color = 'red'> Select card type </font>";
                return false;
            }else if(card1.checked || card2.checked || card3.checked ||card4.checked){
                if((number1.length == 0) || ((number1.length > 0) && (number1.length < 19))){
                    document.getElementById('ccnum').focus();
                    document.getElementById('eleph').innerHTML ="<font color = 'red'> Enter Card Number</font>";
                    return false;
                }else if(!number1.match(lnumber)){
                    document.getElementById('ccnum').focus();
                    document.getElementById('eleph').innerHTML ="<font color = 'red'> Enter a valid card</font>";
                    return false;
                }else if(number2.length == 0){
                    document.getElementById('expdate').focus();
                    document.getElementById('eleph').innerHTML ="<font color = 'red'> Enter expiration date</font>"
                    return false;
                }else if(!number2.match(dnumber)){
                    document.getElementById('expdate').focus();
                    document.getElementById('eleph').innerHTML ="<font color = 'red'> Number and Slashes only Example: 00/13</font>";
                    return false;
                }else if((number3.length == 0) || ((number3.length > 0) && (number3.length < 3))){
                    document.getElementById('ccv').focus;
                    document.getElementById('eleph').innerHTML ="<font color = 'red'> Enter CCV Number</font>";
                    return false;
                }else if(!number3.match(vnumber)){
                    document.getElementById('ccv').focus();
                    document.getElementById('eleph').innerHTML ="<font color = 'red'> Number Only</font>";
                    return false;
                }else{
                    document.getElementById('eleph').innerHTML="";
                    return false; 
                }
        } 
        
    } else if(sele5.checked){
        if (number4.length == 0){
            document.getElementById('knab').focus();
            document.getElementById('eleph').innerHTML ="<font color = 'red'> Enter Bank Name</font>";
            return false;
        } else if(!number4.match(snumber)){
            document.getElementById('knab').focus();
            document.getElementById('eleph').innerHTML ="<font color = 'red'> Letters Only</font>";
            return false;
        } else if(number5.length == 0) {
            document.getElementById('nakb').focus();
            document.getElementById('eleph').innerHTML ="<font color = 'red'> Enter route number</font>";
            return false; 
        } else if(!number5.match(vnumber)){
            document.getElementById('nakb').focus();
            document.getElementById('eleph').innerHTML ="<font color = 'red'> Numbers Only</font>";
            return false;  
        } else if(number7.length == 0) {
            document.getElementById('anbk').focus();
            document.getElementById('eleph').innerHTML ="<font color = 'red'> Enter account number</font>";
            return false;
        } else if(!number7.match(vnumber)){
            document.getElementById('anbk').focus();
            document.getElementById('eleph').innerHTML ="<font color = 'red'> Numbers Only</font>";
            return false;
        } else {
            document.getElementById('eleph').innerHTML="";
            return false;
        }
    }else{
       document.getElementById('eleph').innerHTML ="";
        return true; 
    }
  }
}//end of function



//for Cancel Membership question"Reason"
function reasonVal(){
    var canrea = document.getElementById("canrea");
    if(canrea.options[canrea.selectedIndex].value == 0){
        document.getElementById("dowin").innerHTML="<font color = 'red'>Please select Reason for canceling</font>";
        return false;
    }else{
        document.getElementById("dowin").innerHTML="";
        return true;
    }

}//end of function

//for page "Payment" question "Service Date:"
function psdVal(){
    var vicedate = document.getElementById('tdate').value;
    var viexp = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    if(vicedate.length == 0){
        document.getElementById('tdate').focus();
        document.getElementById('mov').innerHTML="<font color = 'red'>Enter service date</font>";
        return false;
    }else if(!vicedate.match(viexp)){
        document.getElementById('tdate').focus();
        document.getElementById('mov').innerHTML="<font color = 'red'>Number Only</font>";
        return false;
    }else{
        document.getElementById('mov').innerHTML="";
        return true;
    }

}//end of function

//for page "Payment" question --"Payment information"
function paycrVal(){
    var pcre = document.getElementById('pcre');
    var pde = document.getElementById('pde');
    //for credit card
    var mcard = document.getElementById('master');
    var vcard = document.getElementById('visa');
    var acard = document.getElementById('american');
    var dcard = document.getElementById('discover');
    //for card information
    var mvadn1 = document.getElementById('ccnum').value;
    var mvadn2 = document.getElementById('expdate').value;
    var mvadn3 = document.getElementById('ccv').value;
    //expression
     var mmast3 =  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/;
     var piredate2 = /^[0-9\/]+$/;//with slashes
     var vcc2 = /^[0-9]+$/;
     var popper1 =new Date();
     var flyer2 = popper.toLocaleTimeString();
    if (!pcre.checked && !pde.checked){
        document.getElementById('mov2').innerHTML="<font color = 'red'>Select card payment</font>";
        document.getElementById("okay").innerHTML= popper1;
        return false; 
    }else if(pcre.checked || pde.checked){
        if(!mcard.checked && !vcard.checked && !acard.card && !dcard.checked){
            document.getElementById('mov2').innerHTML="<font color = 'red'>Select card type</font>";
            document.getElementById("okay").innerHTML= popper1;
            return false; 
        }else if(mcard.checked || vcard.checked || acard.card || dcard.checked){
            if (mvadn1.length == 0){
                document.getElementById('ccnum').focus();
                document.getElementById('mov2').innerHTML="<font color = 'red'>What is your card number</font>";
                document.getElementById("okay").innerHTML= popper1;
                return false;
            } else if(!mvadn1.match(mmast3)){
                document.getElementById('ccnum').focus();
                document.getElementById('mov2').innerHTML="<font color = 'red'>Enter a Vaild card number</font>";
                return false;
            } else if(mvadn2.length == 0){
                document.getElementById('expdate').focus();
                document.getElementById("okay").innerHTML= popper1;
                document.getElementById('mov2').innerHTML="<font color = 'red'>Enter expiration date :mm/yy</font>";
                return false; 
            } else if(!mvadn2.match(piredate2)){
                document.getElementById('expdate').focus();
                document.getElementById('mov2').innerHTML="<font color = 'red'>Number and slashes only </font>";
                return false; 
            }else if(mvadn3.length ==  0){
                document.getElementById('ccv').focus();
                document.getElementById("okay").innerHTML= popper1;
                document.getElementById('mov2').innerHTML="<font color = 'red'>Enter CCV number </font>";
                return false;  
            }else if(!mvadn3.match(vcc2)){
                document.getElementById('ccv').focus();
                document.getElementById('mov2').innerHTML="<font color = 'red'>Number Only </font>";
                return false;  
            }else{
               document.getElementById('mov2').innerHTML="";
                return false;  
            }
        }//end of card selection
    }else{
        document.getElementById('mov2').innerHTML="";
        return true; 
    }
}//end of function

//for page Employment--- question -- "Position Interested in"
function pointVal(){
    var opening = document.getElementById('opening');
    var yeaex = document.getElementById('yeaex').value;
    //expression
    var addexp2 = /^[0-9]+$/;
    if(opening.options[opening.selectedIndex].value == 0){
        document.getElementById('mov3').innerHTML="<font color = 'red'>Select Position Option </font>";
        return false;
    }else if(yeaex.length == 0){
        document.getElementById('yeaex').focus();
        document.getElementById('mov3').innerHTML="<font color = 'red'>Enter Number of Years Experience</font>";
        return false;
    }else if(!yeaex.match(addexp2)){
        document.getElementById('mov3').innerHTML="<font color = 'red'>Number Only</font>";
        return false;
    }else {
        document.getElementById('mov3').innerHTML="";
        return true;
    }

}//end of function

//for page "Message for Employee"--- question ""
function perfertm(){
    var ques1 = document.getElementById('ques1');
    var ques2 = document.getElementById('ques2');
    //date and time
    var shop4 =new Date();
    var lizard15= shop4.toLocaleTimeString();
    if(!ques1.checked && !ques2.checked){
        document.getElementById('emessage2').innerHTML="<font color = 'red'>Select One</font>";
        document.getElementById("okay").innerHTML= shop4;
        return false;
    }else{
        document.getElementById('emessage2').innerHTML="";
        return true;
    }
}

//for page "Human Resource" question--"employee number"
function numEmploy(){
    var nu23 = document.getElementById('empnum').value;
    //pattern
    var nupat = /^[0-9]+$/;
    // date and time
    var shop3 =new Date();
    var lizard14= shop3.toLocaleTimeString();
    if(nu23.length == 0){
        document.getElementById('empnum').focus();
        document.getElementById('movies').innerHTML="<font color = 'red'>Enter employee number</font>";
        document.getElementById("okay").innerHTML= shop3;
        return false; 
    }else if(!nu23.match(nupat)){
        document.getElementById('empnum').focus();
        document.getElementById('movies').innerHTML="<font color = 'red'>Number Only</font>";
        return false;
    }else{
       document.getElementById('movies').innerHTML="";
        return true; 
    }
}//end of function

//for page "Employment Verification" question " business"
function namebusVal(){
    var business2 = document.getElementById('business2').value;
    //pattern with white space and number
    var expin =  /^[0-9 a-zA-Z\s]+$/; 
    //date and time
    var shop2 =new Date();
    var lizard12= shop2.toLocaleTimeString();
    if(business2.length == 0){
        document.getElementById('business2').focus();
        document.getElementById('jewels').innerHTML= "<font color = 'red'>Enter Company Name</font>";
        document.getElementById("okay").innerHTML= shop2;
        return false;
    }else if(!business2.match(expin)){
        document.getElementById('business2').focus();
        document.getElementById('jewels').innerHTML="<font color = 'red'>Number and Letter Only</font>";
        return false;  
    }else{
        document.getElementById('jewels').innerHTML="";
        return true;
    }

}//end of function

//for page "Payroll" questions "Email address and Employee id "
function aileeVal(){
    var emadress  = document.getElementById('fdigits').value;
    var numpem = document.getElementById('empnum').value;
    //pattern for email and number
    var text4 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([com\co\.\in])+$/;
    var nupat5 = /^[0-9]+$/;
    if(emadress.length == 0){
        document.getElementById('email').focus();
        document.getElementById('emifad').innerHTML= "<font color = 'red'>Enter Email Address</font>";
        return false;
    } else if(!emadress.match(text4)) {
        document.getElementById('email').focus();
        document.getElementById('emifad').innerHTML= "<font color = 'red'>Format 1234@gmail.com</font>";
        return false;
    }else if(numpem.length == 0) {
        document.getElementById('empnum').focus();
        document.getElementById('emifad').innerHTML= "<font color = 'red'>Enter Employee Number</font>";
        return false;  
    }else if (!numpem.match(nupat5)) {
        document.getElementById('empnum').focus();
        document.getElementById('emifad').innerHTML= "<font color = 'red'> Number Onlys</font>";
        return false;    
    } else {
        document.getElementById('emifad').innerHTML= "";
        return true;
    }

}//end function

//for page Payroll ---question "Have  you logged on the look at your pay information?"
function yinfoVal() {
    var loyes = document.getElementById('loyes');
    var lono = document.getElementById('lono');
    if (!loyes.checked && !lono.checked){
        document.getElementById('emifad1').innerHTML= "<font color = 'red'> Must answer question </font>";
        return false; 
    }else{
        document.getElementById('emifad1').innerHTML= "";
        return false; 
    }
}//end of function


//for page "Techician Arrival Inquiry"--- question "Mailing Address"
function techVal(){
    var taddress1 = document.getElementById('saddress').value;
    var taddress2 = document.getElementById('szip').value;
    //pattern
     var forest = /^[0-9]+$/;
     var expin0 =  /^[0-9 a-zA-Z\s]+$/; 
    if (taddress1.length == 0){
        document.getElementById('saddress').focus();
        document.getElementById('raintree').innerHTML= "<font color = 'red'> Enter your address </font>";
        return false; 
    }else if(!taddress1.match(expin0)) {
        document.getElementById('saddress').focus();
        document.getElementById('raintree').innerHTML= "<font color = 'red'>Letters and Numbers Only  </font>";
        return false; 
    }else if (taddress2.length == 0){
        document.getElementById('szip').focus();
        document.getElementById('raintree').innerHTML= "<font color = 'red'> Enter zip code </font>";
        return false;    
    } else if(!taddress2.match(forest)) {
        document.getElementById('szip').focus();
        document.getElementById('raintree').innerHTML= "<font color = 'red'>Numbers Only </font>";
        return false;     
    }  else {
        document.getElementById('raintree').innerHTML= "";
        return true;
    }
}//end of function

//function for first, middle and last name for page "Employment Verification"
function refnameVal(){
    var rfname = document.getElementById('rfname').value;
    var rmname = document.getElementById('rmname').value;
    var rlname = document.getElementById('rlname').value;
    //exp
    var rfexp = /^[a-zA-Z]+$/;
    if(rfname.length == 0){
        //document.getElementById('rfname').focus();
        document.getElementById('empexcal').innerHTML= "<font color = 'red'> Enter First Name </font>";
        return false;
    }else if(!rfname.match(rfexp)){
        //document.getElementById('rfname').focus();
        document.getElementById('empexcal').innerHTML= "<font color = 'red'> Letter Only </font>";
        return true;
    } else if(rmname.length == 0){
        document.getElementById('rmname').focus();
        document.getElementById('empexcal').innerHTML= "<font color = 'red'> Enter Middle Name or Initial </font>";
        return false;
    }else if(!rmname.match(rfexp)) {
        document.getElementById('rmname').focus();
        document.getElementById('empexcal').innerHTML= "<font color = 'red'> Letters Only </font>";
        return false;
    } else if(rlname.length == 0) {
        document.getElementById('rlname').focus();
        document.getElementById('empexcal').innerHTML= "<font color = 'red'> Enter Last Name </font>";
        return false;
    } else if(!rlname.match(rfexp)){
        document.getElementById('rlname').focus();
        document.getElementById('empexcal').innerHTML= "<font color = 'red'> Letters Only </font>";
        return false;
    }else {
        document.getElementById('empexcal').innerHTML= "";
        return true;
    }
    
}//end of function

//function for "question--Last for SSN Number" page -- Employment Verification
function sonumVal(){
    var ssnum = document.getElementById('ssnum').value;
    //expression
    var ssexp = /^[0-9]+$/;
    if(ssnum.length == 0){
        document.getElementById('ssnum').focus();
        document.getElementById('empexcal').innerHTML= "<font color = 'red'> Enter last 4 Social Security Number </font>";
        return false;
    }else if(!ssnum.match(ssexp)){
        document.getElementById('ssnum').focus();
        document.getElementById('empexcal').innerHTML= "<font color = 'red'> Number Only</font>";
        return false;
    } else {
        document.getElementById('empexcal').innerHTML= "";
        return true;
    }

}// end of function

//for Date of Birth  (dob) for page financing Application Status" and for pages need to be validation
function doBirthVal(){
    var birod = document.getElementById('birod').value;
    if(birod.length == 0){
        document.getElementById("birod").focus();
        document.getElementById('empexcal').innerHTML= "<font color = 'red'> Enter Date of Birth</font>";
        return false;
    }else{
        document.getElementById('empexcal').innerHTML= "";
        return true;
    }
}//end of function

//for social security number
function ssVAl(){
    var fber = document.getElementById('fber').value;
    if(fber.length == 0){
        document.getElementById("fber").focus();
        document.getElementById('empexcal').innerHTML= "<font color = 'red'> Enter Social Sercurity Number</font>";
        return false;
    } else {
       document.getElementById('empexcal').innerHTML= "";
        return true;
    }

}//end of function

//for page " Fincancing Application"
function oneNum2(){
    var mobile1 = document.getElementById('mobile1');
    var phber1 = document. getElementById('phonenumbers').value;
    var xpewww= /^[0-9\-]+$/; //with dashes
    //date and time
    var puppy = new Date();
    if(mobile1.options[mobile1.selectedIndex].value == 0){
        document.getElementById('empexcal').innerHTML="<font color = 'red'> Select Phone Type</font>";
        document.getElementById("okay").innerHTML= puppy;
        return false;
    }else if(phber1.length == 0){
        document.getElementById('phonenumbers').focus();
        document.getElementById('empexcal').innerHTML="<font color = 'red'> Enter Phone Number </font>";
        document.getElementById("okay").innerHTML= puppy;
        return false;
    }else if(!phber1.match(xpewww)){
        document.getElementById('phonenumbers').focus();
        document.getElementById('empexcal').innerHTML="<font color = 'red'> Number and dashes Only </font>";
        return false;
    }else{
        document.getElementById('empexcal').innerHTML="";
        return true;
    }
}//end of function



//for length and  for page"Financing Application"
function lengthVal(){
    var pmetime = document.getElementById('pmetime').value;
    var lsit1 = document.getElementById('a').innerHTML="";
    var lsit2 = document.getElementById('a').innerHTML="";
    var lsit3 = document.getElementById('a').innerHTML="";
    var lsit4 = document.getElementById('a').innerHTML="";
    var lsit5 = document.getElementById('a').innerHTML="";
    var lsit7 = document.getElementById('a').innerHTML="";
    var lsit8 = document.getElementById('a').innerHTML="";
    var exp19 = /^[0-9]+$/;
    if (pmetime.length == 0){
        document.getElementById('pmetime').focus();
        document.getElementById('dmessage').innerHTML="<font color = 'red'> Enter length of time at your present address </font>";
        return false;
    } else if(!pmetime.match(exp19)) {
        document.getElementById('dmessage').innerHTML="<font color = 'red'> Number only </font>";
        return true;
    } else if(pmetime < 2) {
        document.getElementById("previous").style.display="block";
        hidPreVAl();
        return false; 
    } else if(pmetime >= 2) {
         document.getElementById("previous").style.display="none";
         return false;
    } else {
       document.getElementById('dmessage').innerHTML="";
        return true; 
    }
}//end of function

// validation for Address length input(if it is least than two years) this area will show 
function hidPreVAl(){
    var lsit1 = document.getElementById('address0').value;
    var lsit2 = document.getElementById('address10').value;
    var lsit3 = document.getElementById('strloc20');
    var lsit4 = document.getElementById('address20').value;
    var lsit5 = document.getElementById('zip20').value;
    var lsit7 = document.getElementById('city20').value;
    var lsit8 = document.getElementById('state20').value;
    var exp22 = /^[0-9]+$/;
    var exp23 = /^[0-9 a-zA-Z\s]+$/;
    var exp24 = /^[a-zA-Z\s]+$/;
    var exp25 = /^[a-zA-Z]+$/;
    if (lsit1.length == 0){
        document.getElementById('address0').focus();
        document.getElementById('a').innerHTML="<font color = 'red'> Building Number </font>";
        return false;
    } else if(!lsit1.match(exp22)){
       document.getElementById('a').innerHTML="<font color = 'red'> Number Only </font>";
        return false;
    }else if(lsit2.length == 0){
        document.getElementById('address10').focus();
        document.getElementById('a').innerHTML="<font color = 'red'> Street Name </font>";
        return false;
    }else if(!lsit2.match(exp23)) {
        document.getElementById('address10').focus();
        document.getElementById('a').innerHTML="<font color = 'red'> Letter and Numbers Only </font>";
        return false;
    } else if(lsit3.options[lsit3.selectedIndex].value == 0) {
        document.getElementById('a').innerHTML="<font color = 'red'> Select street type </font>";
        return false;
    } else if(lsit4.length == 0) {
        document.getElementById('address20').focus();
        document.getElementById('a').innerHTML="<font color = 'red'> Enter suite or apartment.. if none put 000</font>";
        return false;
    } else if(!lsit4.match(exp23)) {
        document.getElementById('address20').focus();
        document.getElementById('a').innerHTML="<font color = 'red'>Number Only</font>";
        return false;
    } else if(lsit5.length == 0) {
        document.getElementById('zip20').focus();
        document.getElementById('a').innerHTML="<font color = 'red'> Enter Zip Code</font>";
        return false;
    } else if(!lsit5.match(exp22)) {
        document.getElementById('zip20').focus();
        document.getElementById('a').innerHTML="<font color = 'red'> Numbers Only</font>";
        return false;  
    } else if(lsit7.length == 0) {
        document.getElementById('city20').focus();
        document.getElementById('a').innerHTML="<font color = 'red'> Enter City Location</font>";
        return false;  
    } else if(!lsit7.match(exp24)) {
        document.getElementById('city20').focus();
        document.getElementById('a').innerHTML="<font color = 'red'> Letter Only</font>";
        return false;  
    } else if(lsit8.length == 0){
        document.getElementById('state20').focus();
        document.getElementById('a').innerHTML="<font color = 'red'> Enter State Location</font>";
        return false;
    } else if(!lsit8.match(exp25)) {
        document.getElementById('state20').focus();
        document.getElementById('a').innerHTML="<font color = 'red'> Letter Only</font>";
        return false;
    } else {
        document.getElementById('a').innerHTML="";
        return true; 
    }

}//end of function


//employer for page "Financing Application"
 function employVal(){
    var loyer = document.getElementById('employer').value;
    var exp27 = /^[a-zA-Z\s]+$/;
    if(loyer.length == 0){
        document.getElementById('employer').focus();
        document.getElementById('d').innerHTML="<font color = 'red'> Enter Employer Name</font>";
        return false;
    } else if(!loyer.match(exp27)) {
        document.getElementById('employer').focus();
        document.getElementById('d').innerHTML="<font color = 'red'> Letter Only</font>";
        return false;
    } else {
       document.getElementById('d').innerHTML="";
        return true;
    }

 }//end of length

 //for employer address
 function employAdVal(){
    var pme1 = document.getElementById('pmeaddress').value;
    var pme2 = document.getElementById('pmeaddress1').value;
    var pme3  = document.getElementById('pmestrloc');
    var pme4 = document.getElementById('pmeaddress2').value;
    var pme5 = document.getElementById('pmezip').value;
    var pme7 = document.getElementById('pmecity').value;
    var pme8 = document.getElementById('pmestate').value;
    var exp30 = /^[0-9]+$/;
    var exp31 = /^[0-9 a-zA-Z\s]+$/;
    var exp32 = /^[a-zA-Z\s]+$/;
    var exp33 = /^[a-zA-Z]+$/;
    if (pme1.length == 0){
        document.getElementById('pmeaddress').focus();
        document.getElementById('e').innerHTML="<font color = 'red'> Building Number </font>";
        return false;
    } else if(!pme1.match(exp30)){
       document.getElementById('e').innerHTML="<font color = 'red'> Number Only </font>";
        return false;
    }else if(pme2.length == 0){
        document.getElementById('pmeaddress1').focus();
        document.getElementById('e').innerHTML="<font color = 'red'> Street Name </font>";
        return false;
    }else if(!pme2.match(exp31)) {
        document.getElementById('pmeaddress1').focus();
        document.getElementById('e').innerHTML="<font color = 'red'> Letter and Numbers Only </font>";
        return false;
    } else if(pme3.options[pmestrloc.selectedIndex].value == 0) {
        document.getElementById('e').innerHTML="<font color = 'red'> Select street type </font>";
        return false;
    } else if(pme4.length == 0) {
        document.getElementById('pmeaddress2').focus();
        document.getElementById('e').innerHTML="<font color = 'red'> Enter suite or apartment.. if none put 000</font>";
        return false;
    } else if(!pme4.match(exp30)) {
        document.getElementById('pmeaddress2').focus();
        document.getElementById('e').innerHTML="<font color = 'red'>Number Only</font>";
        return false;
    } else if(pme5.length == 0) {
        document.getElementById('pmezip').focus();
        document.getElementById('e').innerHTML="<font color = 'red'> Enter Zip Code</font>";
        return false;
    } else if(!pme5.match(exp30)) {
        document.getElementById('pmezip').focus();
        document.getElementById('e').innerHTML="<font color = 'red'> Numbers Only</font>";
        return false;  
    } else if(pme7.length == 0) {
        document.getElementById('pmecity').focus();
        document.getElementById('e').innerHTML="<font color = 'red'> Enter City Location</font>";
        return false;  
    } else if(!pme7.match(exp32)) {
        document.getElementById('pmecity').focus();
        document.getElementById('e').innerHTML="<font color = 'red'> Letter Only</font>";
        return false;  
    } else if(pme8.length == 0){
        document.getElementById('pmestate').focus();
        document.getElementById('e').innerHTML="<font color = 'red'> Enter State Location</font>";
        return false;
    } else if(!pme8.match(exp33)) {
        document.getElementById('pmestate').focus();
        document.getElementById('e').innerHTML="<font color = 'red'> Letter Only</font>";
        return false;
    } else {
        document.getElementById('e').innerHTML="";
        return true; 
    }
}//end of function

//function for employment position
function ymentVal(){
  var ititon = document.getElementById('pmeposition').value;
   var exp34 = /^[a-zA-Z\s]+$/;
    if(ititon.length == 0){
        document.getElementById('pmeposition').focus();
        document.getElementById('g').innerHTML="<font color = 'red'> Enter Position</font>";
        return false; 
    } else if(!ititon.match(exp34)) {
        document.getElementById('g').innerHTML="<font color = 'red'> Number Only</font>";
        return false; 
    } else {
        document.getElementById('g').innerHTML="";
        return true;
    }

}//end of function 

//function for work phonenumber
function workPhoVal(){
    var ephone = document.getElementById('pmephone').value;
    var exp37 = /^[0-9\-]+$/; //with dashes
    if (ephone.length == 0){
        document.getElementById('pmephone').focus();
        document.getElementById('g').innerHTML="<font color = 'red'> Enter work phone number</font>";
        return false;  
    } else if(!ephone.match(exp37)) {
        document.getElementById('pmephone').focus();
        document.getElementById('g').innerHTML="<font color = 'red'>Number and Dashes Only</font>";
        return false; 
    } else {
       document.getElementById('g').innerHTML="";
        return true; 
    }
}//end of function

//function for gross income
function grossinVal(){
    var gross = document.getElementById('pmegrom').value;
    var exp38 = /^-?\d+\.?\d*$/;
    if(gross.length == 0){
        document.getElementById('pmegrom').focus();
        document.getElementById('h').innerHTML="<font color = 'red'> Enter gross income</font>";
        return false; 
    } else if(!gross.match(exp38)) {
        document.getElementById('pmegrom').focus();
        document.getElementById('h').innerHTML="<font color = 'red'> Using the format 12.00</font>";
        return false; 
    } else{
        document.getElementById('h').innerHTML="";
        return true; 
    }

}//end of function

//function for employment length
function previoEmployVal(){
    var lenem = document.getElementById('timeempl').value;
    var exp40 = /^[0-9]+$/;
    if (lenem.length == 0){
        document.getElementById('timeempl').focus();
        document.getElementById('h').innerHTML="<font color = 'red'> Length of Employment</font>";
        return false; 
    } else if(!lenem.match(exp40)) {
        document.getElementById('timeempl').focus();
        document.getElementById('h').innerHTML="<font color = 'red'> Number Only</font>";
        return false; 
    }else if(lenem < 2) {
        document.getElementById('positionempo').style.display="block";
        //epmhiddenVal();
        return false;
    } else if(lenem >= 2){
       document.getElementById("positionempo").style.display="none";
         return false;
    } else {
        document.getElementById('h').innerHTML="";
        return true; 
    }
}//end of function


//functions for checking and saving  selection
function selectionVal(){
    var ychecking = document.getElementById('ychecking');
    var nchecking = document.getElementById('nchecking');
    if(!ychecking.checked && !nchecking.checked){
        document.getElementById('l').innerHTML="<font color = 'red'> Answer Question for Checking</font>";
        return false; 
    } else {
        document.getElementById('l').innerHTML="";
        return true;  
    }
}//end of function

function selectionVal2(){
    var ysaving = document.getElementById('ysaving');
    var nsaving = document.getElementById('nsaving');
    if(!ysaving.checked && !nsaving.checked){
        document.getElementById('l').innerHTML="<font color = 'red'> Answer Question for Saving</font>";
        return false; 
    } else {
        document.getElementById('l').innerHTML="";
        return true;  
    }
}//end of funciton

function hometyVal(){
    var site = document.getElementById('site');
    var condo = document.getElementById('condo');
    var townhouse = document.getElementById('townhouse');
    var manu = document.getElementById('manu');
    if (!site.checked && !condo.checked && !townhouse.checked && !manu.checked){
       document.getElementById('p').innerHTML="<font color = 'red'> Answer Question for Home type</font>";
        return false; 
    } else {
       document.getElementById('p').innerHTML="";
        return true;  
    }

}//end of function

function ownerListVal(){
    var own = document.getElementById('own');
    var buying = document.getElementById('buying');
    var rental = document.getElementById('rental');
    var hvalue = document.getElementById('hvalue').value;
    var mvalue = document.getElementById('mvalue').value;
    var balance = document.getElementById('balance').value;
    var monthly = document.getElementById('monthly').value;
    var balancer = document.getElementById('balancer').value;
    var expression = /^[0-9]+$/;
    var exp50 = /^[a-zA-Z\s]+$/;
    if(!own.checked && !buying.checked && !rental.checked){
        document.getElementById('p').innerHTML="<font color = 'red'> Answer Question 'Which one applies'</font>";
        return false; 
    }else if(own.checked || buying.checked) {
        if(hvalue.length == 0){
            document.getElementById('p').innerHTML="<font color = 'red'> Answer Question 'Estimate Home Value'</font>";
            return false; 
        } else if(!hvalue.match(expression)) {
            document.getElementById('p').innerHTML="<font color = 'red'> Number Only</font>";
            return false;
        } else if(mvalue.length == 0){
            document.getElementById('p').innerHTML="<font color = 'red'> Answer Question 'Mortgage Balance'</font>";
            return false; 
        } else if(!mvalue.match(expression)) {
            document.getElementById('p').innerHTML="<font color = 'red'> Number Only</font>";
            return false;
        } else if(balance.length == 0) {
            document.getElementById('p').innerHTML="<font color = 'red'> Answer Question 'Mortage Company'</font>";
            return false;
        } else if(!balance.match(exp50)) {
            document.getElementById('p').innerHTML="<font color = 'red'> Letters Only</font>";
            return false;
        } else {
           document.getElementById('p').innerHTML="";
            return false; 
        }
    } else if(rental.checked) {
       if(monthly.length == 0){
            document.getElementById('p').innerHTML="<font color = 'red'> Answer Question 'Monthly Rent'</font>";
            return false; 
        } else if(!monthly.match(expression)){
            document.getElementById('p').innerHTML="<font color = 'red'> Number Only</font>";
            return false;  
        } else if(balancer.length == 0) {
           document.getElementById('p').innerHTML="<font color = 'red'> Answer Question 'Mortgage Balance'</font>";
            return false;  
        } else if(!balancer.match(expression)) {
           document.getElementById('p').innerHTML="<font color = 'red'> Number Only</font>";
            return false; 
        } else {
           document.getElementById('p').innerHTML="";
            return false; 
        }
    } else {
       document.getElementById('p').innerHTML="";
        return true;   
    }
}//end of function

function otincome(){
    var income = document.getElementById('income');
    var incomeo = document.getElementById('incomeo');
    var otccity = document.getElementById('otccity').value;
    var otcstate = document.getElementById('otcstate').value;
    var otcsource = document.getElementById('otcsource').value;
    var exp51 = /^[0-9\.\$]+$/;
    var exp55 = /^[a-zA-Z]+$/;
    var exp57 = /^[a-zA-Z\s]+$/;
    if (!income.checked && !incomeo.checked){
        document.getElementById('abc').innerHTML="<font color = 'red'> Answer Question 'Other Income'</font>";
        return false;
    } else if(income.checked) {
        if(otccity.length == 0){
            document.getElementById('abc').innerHTML="<font color = 'red'> Answer Question '$'</font>";
            return false; 
        } else if(!otccity.match(exp51)){
            document.getElementById('abc').innerHTML="<font color = 'red'> Number Only</font>";
            return false;
        } else if (otcstate.length == 0){
            document.getElementById('abc').innerHTML="<font color = 'red'> Answer Question 'per'</font>";
            return false;
        } else if(!otcstate.match(exp55)){
            document.getElementById('abc').innerHTML="<font color = 'red'> Letter Only'</font>";
            return false;
        } else if(otcsource.length == 0){
           document.getElementById('abc').innerHTML="<font color = 'red'> Answer Question 'Source'</font>";
            return false;
        } else  if(!otcsource.match(exp57)){
            document.getElementById('abc').innerHTML="<font color = 'red'> Letter Only'</font>";
            return false;
        } else {
            document.getElementById('abc').innerHTML="";
            return false;   
        }
       
    } else {
        document.getElementById('abc').innerHTML="";
        return false; 
    }

}//end of function


function kanbVal(){
    var yban = document.getElementById('yban');
    var nban = document.getElementById('nban');
    var typurchoice = document.getElementById('typurchoice');
    var fimonth = document.getElementById('fimonth').value;
    var disdate = document.getElementById('disdate').value;
    var exp58 = /^[a-zA-Z]+$/;
    var exp59 = /^[0-9\/]+$/;
    if(!yban.checked && !nban.checked){
        document.getElementById('abc').innerHTML="<font color = 'red'> Answer Question 'Have Applicant ever Declared Bankrupty'</font>";
        return false;   
    } else if(yban.checked) {
        if (typurchoice.options[typurchoice.selectedIndex].value == 0){
            document.getElementById('abc').innerHTML="<font color = 'red'> Answer Question 'Type of Bankrupty'</font>";
            return false; 
        } else if(fimonth.length == 0) {
            document.getElementById('abc').innerHTML="<font color = 'red'> Answer Question 'File Month'</font>";
            return false; 
        } else if(!fimonth.match(exp58)) {
            document.getElementById('abc').innerHTML="<font color = 'red'> Letter Only</font>";
            return false; 
        } else if(disdate.length == 0) {
           document.getElementById('abc').innerHTML="<font color = 'red'> Answer Question 'Discharge Date'</font>";
            return false;  
        } else if(!disdate.match(exp59)) {
          document.getElementById('abc').innerHTML="<font color = 'red'> Numbers and Slashes Only</font>";
            return false; 
        } else {
            document.getElementById('abc').innerHTML="";
            return false;
        }
    }else {
      document.getElementById('abc').innerHTML="";
        return true;  
    }


}//end of function


//function for question "Type Name"
// function typeVal(){
//     var vame = document.getElementById('vame').value;
//     var exp70 = /^[a-zA-Z\s]+$/; 
//     if(vame.length == 0){
//         document.getElementById('vame').focus();
//         document.getElementById('abcd').innerHTML="<font color = 'red'> Answer question'Type Name'</font>"
//         return false; 
//     } else if(!vame.match(exp70)) {
//        document.getElementById('abcd').innerHTML="<font color = 'red'> Letter Only</font>"
//         return false; 
//     } else {
//        document.getElementById('abcd').innerHTML=""
//         return true; 
//     }
// }//end of function

//function for question "Intial Of Applicant"
function typeVal2(){
    var vame0 = document.getElementById('vame0').value;
   var exp70 = /^[a-zA-Z]+$/; 
    if (vame0.length == 0){
        document.getElementById('vame0').focus();
        document.getElementById('abcd').innerHTML="<font color = 'red'> Answer question'Intial Of Applicant'</font>";
        return false;
    } else if(!vame0.match(exp70)) {
        document.getElementById('abcd').innerHTML="<font color = 'red'> Letter Only</font>";
        return false; 
    } else {
        document.getElementById('abcd').innerHTML="";
        return true; 
    }

}//end of function

//function for "Driver License Number"
function typeVal3(){
    var vame2 = document.getElementById('vame2').value;
    var exp71= /^[0-9]+$/;
    if(vame2.length == 0){
        document.getElementById('vame2').focus();
        document.getElementById('abcd').innerHTML="<font color = 'red'> Answer question'Driver License Number'</font>";
        return false;  
    } else if(!vame2.match(exp71)){
      document.getElementById('abcd').innerHTML="<font color = 'red'> Number Only</font>";
        return false;   
    } else {
        document.getElementById('abcd').innerHTML="";
        return true; 
    }

}//end of function


//function for question "Number of system to check" for page
function addElements(){
    var ment = document.getElementById("agetwo").value;
    var content2 = document.getElementById('unitques').innerHTML = "";
    if(ment.length == 0){
        document.getElementById("agetwo").focus();
        document.getElementById('rernum').innerHTML="<font color = 'red'> Please answer question'Number of room to check' </font>";
        return false; 
    } else if(ment >= 1) {
        document.getElementById('unitques').style.display = "block";
         addElRoom();
    } else{
        document.getElementById('rernum').innerHTML="";
        return true;
    }
}

//function for the number room to display selection
function addElRoom(){
    var ment = document.getElementById("agetwo").value;
    for(var i = 0; i < ment; i++){
        var content2 = document.createElement('div');
            document.getElementById('unitques').appendChild(content2);
        var content2 = document.createElement('label');
            content2.innerHTML = ' <label class = "question">Area:</label>'
            document.getElementById('unitques').appendChild(content2);

        //var content1 = document.createElement("option");
            var content2 = document.createElement("select");
                content2.name = "name";
                content2.id = "id";
                content2.options[content2.length] = new Option("Select", "0");
                content2.options[content2.length] = new Option("master", "1");
                content2.options[content2.length] = new Option("living room", "2");
                content2.options[content2.length] = new Option("kitchen", "3");
                content2.options[content2.length] = new Option("upstairs", "4");
                content2.options[content2.length] = new Option("downstairs", "5");
                document.getElementById('unitques').appendChild(content2);
    
        var content2= document.createElement('label');
            content2.innerHTML = ' <label class = "question2" style = "margin-right:auto; margin-left:-140px;">Age:</label>'
            document.getElementById('unitques').appendChild(content2);

        var content2 = document.createElement('input');
            content2.style.width = "50px";
            content2.innerHTML = ' <input type = "text"  name = "carea" id = "carea" onchange = "samVal()"  />'
            document.getElementById('unitques').appendChild(content2);

        var content2 = document.createElement('label');
            content2.innerHTML = '<label class = "question3" >Is unit operating now?</label>'
            document.getElementById('unitques').appendChild(content2);
            
        var content2 = document.createElement('checkbox');
            content2.innerHTML = '<label class = "type"><input type= "checkbox" name = "oyes" value ="hyes"  id ="hyes" />Yes</label>'
            document.getElementById('unitques').appendChild(content2);
        
        var content2 = document.createElement('checkbox');
            content2.innerHTML = '<label class = "type"><input type= "checkbox" name = "noo" value ="hno"  id ="hno" />No</label>'
            document.getElementById('unitques').appendChild(content2);
    }

}

//vaildate the create elememt fpr functon()


//function for dropdown list to pick date for payment page "billing"
function piDatVal(){
    var listdate = document.getElementById('listdate');
   if(listdate.options[listdate.selectedIndex].value == 0){
        document.getElementById("eleph").innerHTML="<font color = 'red'>Please select date</font>";
        return false;
   } else {
        document.getElementById("eleph").innerHTML="";
        return true;
   }

}//end of function

//function for service  address format page "Payment"
function addrVAl(){
    var win = document.getElementById('address21').value;
    var win1 = document.getElementById('zip21').value;
    var win2 = document.getElementById('city21').value = document.getElementById('city21').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();});
    var win3 = document.getElementById('state21').value;
    var win4 = document.getElementById('address12').value = document.getElementById('address12').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();});
    var win5 = document.getElementById('strloc21');
    var snumber1 = /^[0-9 a-zA-Z\s]+$/;//allow white space between names
    var snumber2 = /^[0-9]+$/;
    var snumber3 = /^[a-zA-Z\s]+$/;
    if(win.length == 0){
        document.getElementById('address21').focus();
        document.getElementById("abcdeg").innerHTML="<font color = 'red'>Please enter address</font>";
        return false;
    }else if(!win.match(snumber1)){
        document.getElementById('address21').focus();
        document.getElementById("abcdeg").innerHTML="<font color = 'red'>Number and letter Only</font>";
        return false;
    } else if(win4.length == 0){
        document.getElementById('address12').focus();
        document.getElementById("abcdeg").innerHTML="<font color = 'red'>Enter Street Name</font>";
        return false;
    } else if(!win4.match(snumber1)){
       document.getElementById("abcdeg").innerHTML="<font color = 'red'>Number and letters Only</font>";
        return false;
    } else if(strloc21.options[strloc21.selectedIndex].value == 0) {
        document.getElementById('strloc21').focus();
        document.getElementById("abcdeg").innerHTML="<font color = 'red'>Select Type</font>";
        return false; 
    } else if(win1.length == 0) {
        document.getElementById('zip21').focus();
        document.getElementById("abcdeg").innerHTML="<font color = 'red'>Enter zip code</font>";
        return false; 
    } else if(!win1.match(snumber2)) {
        document.getElementById('zip21').focus();
        document.getElementById("abcdeg").innerHTML="<font color = 'red'>Letter Only</font>";
        return false; 
    } else if(win2.length == 0) {
        document.getElementById('city21').focus();
        document.getElementById("abcdeg").innerHTML="<font color = 'red'>Please enter city</font>";
        return false;
    } else if(!win2.match(snumber3)) {
        document.getElementById('city21').focus();
        document.getElementById("abcdeg").innerHTML="<font color = 'red'>Letter Only</font>";
        return false; 
    } else if(state21.length == 0) {
        document.getElementById('city21').focus();
        document.getElementById("abcdeg").innerHTML="<font color = 'red'>Please enter state</font>";
        return false;
    } else if(!state21.match(snumber3)) {
        document.getElementById('state21').focus();
        document.getElementById("abcdeg").innerHTML="<font color = 'red'>Letter Only</font>";
        return false;
    } else {
       document.getElementById("abcdeg").innerHTML="";
        return true; 
    }
}//end of function

//for question " Are you the homeowner"
function homselVAl(){
    var h = document.getElementById('hyes');//yes
    var hn = document.getElementById('hno');//no
    var info1 = document.getElementById('owinfo').value = document.getElementById('owinfo').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
    var info2 = document.getElementById('owinfo1').value = document.getElementById('owinfo1').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
    var info3 = document.getElementById('phonenjum').value;
    var infoadd = document.getElementById('poaddre1').value;
    var infoadd1 = document.getElementById('poaddre2').value = document.getElementById('poaddre2').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
    var infoadd2 = document.getElementById('poaddre3');
    var infoadd21 = document.getElementById('poaddre31').value;
    var infoadd3 = document.getElementById('poaddre4').value ;//zip code
    var infoadd4 = document.getElementById('poaddre5').value = document.getElementById('poaddre5').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });//city
    var infoadd5 = document.getElementById('poaddre7').value = document.getElementById('poaddre7').value.toUpperCase();//state
    //radio button
    var infobut1 = document.getElementById('paren');//Renter
    var infobut2 = document.getElementById('parown');//Owner 
    
    var inf04 = document.getElementById("gemessage1").innerHTML="";
    var inf05 = document.getElementById("gemessage1").innerHTML="";
    // var inf09 = document.getElementById("gemessage4").innerHTML="";
    // var inf10 = document.getElementById("gemessage4").innerHTML="";
    // var inf11 = document.getElementById("gemessage4").innerHTML="";
    // var inf12 = document.getElementById("gemessage4").innerHTML="";
    // var inf13 = document.getElementById("gemessage4").innerHTML="";
    // var inf14 = document.getElementById("gemessage4").innerHTML="";
    // var inf15 = document.getElementById("gemessage4").innerHTML="";
    // var inf17 = document.getElementById("gemessage4").innerHTML="";
    // var inf18 = document.getElementById("gemessage4").innerHTML="";
    // var inf19 = document.getElementById("gemessage4").innerHTML="";
    // var inf20 = document.getElementById("gemessage4").innerHTML="";
    // var inf21 = document.getElementById("gemessage4").innerHTML="";
    var pat1 = /^[a-zA-Z\s]+$/;
    var pat2 =  /^[0-9 a-zA-Z\-]+$/;
    var pat3 =  /^[0-9 a-zA-Z]+$/;
    var pat4 =  /^[0-9 a-zA-Z\s]+$/;
    var pat5 = /^[0-9]+$/;
    var pat7 = /^[a-zA-Z]+$/;

    // document.getElementById('firstname').value = document.getElementById('firstname').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    //     return letter.toUpperCase();
    // });
    if(!h.checked && !hn.checked){
        document.getElementById("gemessage1").innerHTML="<font color = 'red'>Answer question'Are you the owner'</font>";
        return false;
    } else if(hn.checked) {
        if(info1.length == 0){
           document.getElementById('owinfo').focus(); 
           document.getElementById("gemessage1").innerHTML="<font color = 'red'>Enter first name</font>";
           return false; 
        }else if(!info1.match(pat7)){
            document.getElementById('owinfo').focus(); 
            document.getElementById("gemessage1").innerHTML="<font color = 'red'>Letters Only</font>";
            return false; 
        } else if(info2.length == 0) {
            document.getElementById('owinfo1').focus(); 
            document.getElementById("gemessage1").innerHTML="<font color = 'red'>Enter Last Name</font>";
            return false; 
        } else if(!info2.match(pat1)){
            document.getElementById('owinfo1').focus(); 
            document.getElementById("gemessage1").innerHTML="<font color = 'red'>Letter Only</font>";
            return false; 
        } else if(infoadd3.length == ""){
           document.getElementById("gemessage1").innerHTML="<font color = 'red'>Enter Zip Code</font>";
           return false;
        }else if(!infoadd3.match(pat5)){
          document.getElementById("gemessage1").innerHTML="<font color = 'red'>Numbers Only Example '76011'</font>";
           return false;
        }else if(infoadd3.match(pat5)){
           $("#poaddre1").focus();
           return false;  
        }else if(infoadd.length == 0){
            document.getElementById('poaddre1').focus(); 
            document.getElementById("gemessage1").innerHTML="<font color = 'red'>Enter Address Number</font>";
            return false; 
        }else if(!infoadd.match(pat3)) {
            document.getElementById("gemessage1").innerHTML="<font color = 'red'>Letter and Number Only</font>";
            return false;
        }else if(infoadd1.length == ""){
           document.getElementById('poaddre2').focus(); 
           document.getElementById("gemessage1").innerHTML="<font color = 'red'>Enter Address Street Name</font>";
            return false;
        }else if(!infoadd1.match(pat4)){
           document.getElementById("gemessage1").innerHTML="<font color = 'red'>Letter and Number Only</font>";
           return false; 
        }else if(infoadd2.options[infoadd2.selectedIndex].value == 0){
           document.getElementById("gemessage1").innerHTML="<font color = 'red'>Please Select Type</font>";
           return false;
        }else if(info3.length == 0){
           document.getElementById('phonenjum').focus(); 
            document.getElementById("gemessage1").innerHTML="<font color = 'red'>Enter Phone Number</font>";
            return false; 
        } else{
            $("#renOwn").show();//show the question "Who will be paying for the repairs?"
           document.getElementById("gemessage1").innerHTML="";
           return false;  
        } 
    } else if(h.checked) {
      $("#renOwn").show();//show the question "Who will be paying for the repairs?" 
    } else {
       document.getElementById("gemessage1").innerHTML="";
        //homsel2VAl();
        return true;  
    }

}//end of function

//question "Who will be paying for the repairs?"
function homsel2VAl(){
    var inf04 = document.getElementById('paren');//renter
    var inf05 = document.getElementById('parown');//owner
    if (!inf04.checked && !inf05.checked){
        $('.mailService').hide();
        document.getElementById("gemessage3").innerHTML="<font color = 'red'>Answer question</font>";
        return false;
    } else {
        $('.mailService').show();
      document.getElementById("gemessage3").innerHTML="";
      homsel3VAl();
        return true; 
    }
}// end of function

//credit card validation
function homsel3VAl(){
    var inf09 = document.getElementById('fryes');
    var inf10 = document.getElementById('frno');
    var inf11 = document.getElementById('master1');
    var inf12 = document.getElementById('visa1');
    var inf13 = document.getElementById('american1');
    var inf14 = document.getElementById('discover1');
    var inf15 = document.getElementById('ofname').value;
    var inf17 = document.getElementById('omname').value;
    var inf18 = document.getElementById('olname').value;
    var inf19 = document.getElementById('hccnum').value;
    var inf20 = document.getElementById('hexpdate').value;
    var inf21 = document.getElementById('hccv').value;
    var exp00 = /^[a-zA-Z]+$/;
    var vcc = /^[0-9]+$/;
    var numast =  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/;
    var piredate5 = /^[0-9\/]+$/;//with slashes
    var ex1  = /^[0-9]+$/;
    if(!inf09.checked && !inf10.checked){
        document.getElementById("gemessage4").innerHTML="<font color = 'red'>Answer question</font>";
         return false;  
    } else if(inf09.checked){ 
        if(!inf11.checked && !inf12.checked && !inf13.checked && !inf14.checked){
            document.getElementById("gemessage4").innerHTML="<font color = 'red'>Answer question</font>";
            return false;  
        } else if(inf15.length == 0){
            document.getElementById('ofname').focus();
            document.getElementById("gemessage4").innerHTML="<font color = 'red'>Enter first name</font>";
            return false;
        } else if(!inf15.match(exp00)) {
            document.getElementById('ofname').focus();
            document.getElementById("gemessage4").innerHTML="<font color = 'red'>Letter Only</font>";
            return false;
        } else if(inf17.length== 0) {
            document.getElementById('omname').focus();
            document.getElementById("gemessage4").innerHTML="<font color = 'red'>Enter middle name or intial</font>";
             return false;
        } else if(!inf17.match(exp00)) {
            document.getElementById('omname').focus();
            document.getElementById("gemessage4").innerHTML="<font color = 'red'>Letter Only</font>";
             return false;
        } else if(inf18.length== 0) {
            document.getElementById('olname').focus();
            document.getElementById("gemessage4").innerHTML="<font color = 'red'>Enter last name</font>";
            return false;
        } else if(!inf18.match(exp00)) {
            document.getElementById('olname').focus(); 
            document.getElementById("gemessage4").innerHTML="<font color = 'red'>Letter Only</font>";
            return false; 
        } else if(inf19.length == 0) {
            document.getElementById('hccnum').focus(); 
           document.getElementById("gemessage4").innerHTML="<font color = 'red'>Enter credit card number</font>";
             return false;  
        } else if(!inf19.match(numast)) {
            document.getElementById('hccnum').focus(); 
            document.getElementById("gemessage4").innerHTML="<font color = 'red'>Enter vaild credit number</font>";
            return false; 
        } else if(inf20.length== 0) {
            document.getElementById('hexpdate').focus(); 
            document.getElementById("gemessage4").innerHTML="<font color = 'red'>Enter expiration date</font>";
            return false; 
        } else if(!inf20.match(piredate5)) {
           document.getElementById("gemessage4").innerHTML="<font color = 'red'>Enter a vaild date</font>";
            return false;
        } else if(inf21.length == 0){
            document.getElementById("gemessage4").innerHTML="<font color = 'red'>Enter CCV number </font>";
            return false; 
        } else if(!inf21.match(ex1)){
            document.getElementById("gemessage4").innerHTML="<font color = 'red'>Number Only</font>";
            return false;
        } else {
            document.getElementById("gemessage4").innerHTML="";
            return false;
        }
    } else {
        document.getElementById("gemessage4").innerHTML="";
        return true; 
    }
}//end of function

function logPass(){
    var userName  = document.getElementById("logEmployee").value;
    var userName = userName.trim();
    var passlog = document.getElementById("logPassword").value;
    var uspat = /^[0-9 a-zA-Z]+$/
    if(userName == '') {
        document.getElementById('welcome').innerHTML="<font color = 'red'> Please Enter Login Id</font>";
        return false;
    } else if(!userName.match(uspat)) {
        document.getElementById('welcome').innerHTML="<font color = 'red'>Letter and Number Only</font>";
        return false;
    }else {
        document.getElementById('welcome').innerHTML="";
        return true;
    }

    if(passlog == ''){
        document.getElementById('welcome1').innerHTML = "<font color = 'red'>Letter and Number Only</font>";
        return false;
    }else{
        document.getElementById('welcome1').innerHTML = "";
        return true;
    }


    
} //end of function

function forguest(){
    var quest = document.getElementById('fquest').value;
    if(quest == ''){
        document.getElementById('finame').innerHTML = "<font color = 'red'>Enter First Name</font>";
        return false;
    }else {
        document.getElementById('finame').innerHTML = "";
        return true;
    }

}//end of function


///Residential Unit Concern 
     function reCP(){
        var cooling = document.getElementById('cooling');//cooling
        var heating = document.getElementById('heating');//heating
        var heatC =  document.getElementById('heatCool');//heat and cool
        var leakW = document.getElementById('leakWater');//Leak Water
        var noise = document.getElementById('noise');//noise
        var smell = document.getElementById('smell1');//smell
        var detect = document.getElementById('dgo');//Detector Going Off
        var ach = document.getElementById('acHeating');//AC Heating
        var plumb = document.getElementById('plumbing');//Plumbing
        var electr = document.getElementById('electri');//Electrical
        var garD = document.getElementById('GarDoor');//Garage Door 
        var pest = document.getElementById('pestControl');//Pest Control
        var lawnC = document.getElementById('lawnCare');//Pest Control
        var pSeri = document.getElementById('poolService');//Pool Service
        //Textbox
        var textUCP = document.getElementById('ucpText').value;//textbox
        //regular expression
        var pxt = /^[a-zA-Z\s]+$/;;//allow white space between names;

        if(!cooling.checked && !heating.checked && !heatC.checked && !leakW.checked && !noise.checked && !smell.checked && !detect.checked && !ach.checked && !plumb.checked && !electr.checked && !garD.checked && !lawnC.checked && !pSeri.checked){
            document.getElementById('resiMessage').innerHTML = "<font color = 'red'> Please Select Concern Type</font>";
        }else {
            document.getElementById('resiMessage').innerHTML = "";
        } 
       
     }//end of reCP() function

     
     //Service Type for page "Service Repair"
     function reCP1(){
        var stList0 = document.getElementById('stList0');//AC Heating 
        var stList1 = document.getElementById('stList1');//Pool
        var stList2 = document.getElementById('stList2');//Plumbing
        var stList3 = document.getElementById('stList3');//Irrigation
        var stList4 = document.getElementById('stList4');//Electrical
        var stList5 = document.getElementById('stList5');//Installation
        var stList6 = document.getElementById('stList6');//Solar
        var stList7 = document.getElementById('stList7');//Roofing
        var stList8 = document.getElementById('stList8');//Lawn Care  
        var stList9 = document.getElementById('stList9');//Floor Care   
        var stList10 = document.getElementById('stList10');//Painting
        var stList11 = document.getElementById('stList11');//Pest Control

        if(!stList0.checked && !stList1.checked && !stList2.checked && !stList3.checked && !stList4.checked && !stList5.checked && !stList6.checked && !stList7.checked && !stList8.checked && !stList9.checked && !stList10.checked && !stList11.checked){
            document.getElementById('stListMess').innerHTML = "<font color = 'red'> Select Type:</font>";
        }else{
            document.getElementById('stListMess').innerHTML = "";
        }
    }//end of function reCP1()



//Question: Is  your system" Validation
   function SystemType(){
        var packa = document.getElementById('package');//Package
        var packa1 = document.getElementById('spilt');//split System
        var packa2 = document.getElementById('evpgo');//evaporative
        var packa3 = document.getElementById('gomal');//Geothermal
        var packa4 = document.getElementById('misplit');//mini spilt
        var packa5 = document.getElementById('idk');//I don't Know
        //textbox for Unit Age input if Eveporative, Geothermal & Mini Splilt
        var egmt = docment.getElementbyId("uaaeText").value;//textbox 

        if(!packa.checked && !packa1.checked && !packa2.checked && !packa3.checked && !packa4.checked && !packa5.checked){
            document.getElementById('resiMessage8').innerHTML = "<font color = 'red'> Please Select System Type</font>"
        }else if(packa2.checked ||packa3.checked ||packa4.checked){
            if(egmt.length == ""){
                document.getElementById('eight').innerHTML = "<font color = 'red'>Enter Unit Age</font>";
            }else{
               document.getElementById('eight').innerHTML = "<font color = 'red'>It is Working</font>"; 
            }
        }else{
            document.getElementById('resiMessage8').innerHTML = "";
            
        }
    }//end of SystemType()

    function Union(){
        var roof = document.getElementById('roofr');//roof
        var ground = document.getElementById('ground');//ground
        var wall = document.getElementById('locWall');//wall
        var pra = document.getElementById('perRoof');//Permit Roof
        var lad = document.getElementById('supLad');//ladder
        //other
        var ulText=document.getElementById("ty10text").value;//textbox 
        var ulist = document.getElementById("ty10Sel");//dropdown List
        var option35 = document.createElement("option");//create new option
        var ewpat= /^[a-zA-Z\s]+$/;//pattern

         if(ulText.length == 0){
            $('.ParkSpecial').hide();// hide Special Parking Div
            if(!roof.checked && !ground.checked && !wall.checked){
               document.getElementById('resiMessage10').innerHTML="<font color = 'red'> Answer question 'Unit Location'</font>";
                return false;
            }else{
               document.getElementById("resiMessage10").innerHTML="";
               return false; 
            }
        } else if(!ulText.match(ewpat)){
            $('.ParkSpecial').hide();// show Special Parking Div
            document.getElementById('ty10text').focus();
            document.getElementById("resiMessage10").innerHTML="<font color = 'red'> Letters Only</font>";
            return false;
        }else if(ulText.match(ewpat)){
            $('.ParkSpecial').show();// show Special Parking Div
            $('input[name= ty101]').prop('checked', false);//uncheck Unit Location(Package):(Residential)
            document.getElementById("resiMessage10").innerHTML="";
            return true;
        }

}// end of Union()


//split system Residential radio selection
function OUServe(){
    var outText=document.getElementById("outdHidden").value;//textbox
    var outlist = document.getElementById("outdDDL");//dropdown List
    var option25 = document.createElement("option");//create new option
    var opat= /^[a-zA-Z\s]+$/;//pattern
    //selection
    var level = document.getElementById('centire');//Entire
    var level1 = document.getElementById('cfFloor');//First Floor
    var level2 = document.getElementById('csFloor');//Second Floor
    var level3 = document.getElementById('ctFloor');//Third Floor
    var level4 = document.getElementById('cbedroom');//Bedrooms
    var level5 = document.getElementById('cLivingRom');//Living Room

     if(outText.length == 0){
        $('#unitTyD').hide();// hide Is your system
        if (!level.checked && !level1.checked && !level2.checked && !level3.checked && !level4.checked && !level5.checked){
            document.getElementById('resiMessage11').innerHTML = "<font color = 'red'> Select Outdoor Unit Serves</font>";
           } else {
                document.getElementById('resiMessage11').innerHTML = "";
           }

    }else if(!outText.match(opat)){
        $('#unitTyD').hide();// hide Is your system
        document.getElementById('outdHidden').focus();
        document.getElementById("resiMessage11").innerHTML="<font color = 'red'> Letters Only</font>";
        return false;
    }else if(outText.match(opat)){
        $('#unitTyD').show();// hide Is your system
        $('input[name= cpiUS]').prop('checked', false);//uncheck Unit Serves(Residential) 
        document.getElementById("resiMessage11").innerHTML=""
        return true;
    }
}//end of function OUServe()


// if(outText.length == 0){
//         if (!level.checked && !level1.checked && !level2.checked && !level3.checked && !level4.checked && !level5.checked){
//             document.getElementById('resiMessage11').innerHTML = "<font color = 'red'> Select Outdoor Unit Serves</font>"
//            } else {
//                 document.getElementById('resiMessage11').innerHTML = ""
//            }

//     }else if(!outText.match(opat)){
//         document.getElementById('outdText').focus();
//         document.getElementById("resiMessage11").innerHTML="<font color = 'red'> Letters Only</font>"
//         return false;
//     }else if(outText.match(opat)){
//         document.getElementById("resiMessage11").innerHTML=""
//         option25.text = outText;
//         outlist.options.add(option25);
//         return true;
//     }

//Temp for Cooling Issues
function themVal(){
         var temper = $("#therm").val();
         var temper1 = $("#therm1").val();
         var thPat = /^[0-9]+$/;

         if(!temper.match(thPat)){
            $('.UnitServes').hide();
           document.getElementById('therm').focus();
           document.getElementById("resiMessage2").innerHTML="<font color = 'red'> Thermostat Set at (Yes):Numbers Only</font>";
           return false;
         }else if(!temper1.match(thPat)){
            $('.UnitServes').hide();
            document.getElementById('therm1s').focus();
           document.getElementById("resiMessage2").innerHTML="<font color = 'red'> Actual Temperature at (Yes):Numbers Only</font>";
           return false;
         } else{
             $('.UnitServes').show();
            document.getElementById("resiMessage2").innerHTML="";
           return true;
         }
    }//end of themVal function

    //Temp for Zoning System
    function themZone(){
         var t = $("#setT").val();
         var a = $("#setA").val();
         var thPat0 = /^[0-9]+$/;
         //parse number
         var tnum = 65;
//         tnum = tnum.toFixed(2);
         var anum = 85;
//         anum = anum.toFixed(2);
         var hnum = 105;
//         hnum = hnum.toFixed(2);
         if(!t.match(thPat0)){
//            $('.UnitServes').hide();
              $('#entireDisplay').hide();
           document.getElementById('setT').focus();
           document.getElementById("resiMessage2").innerHTML="<font color = 'red'> Thermostat Set at (No):Numbers Only</font>";
           return false;
         }else if((parseInt(t)< parseInt(tnum)) || (parseInt(t)> parseInt(anum))){
//            $('.UnitServes').hide();
              $('#entireDisplay').hide();
            document.getElementById("resiMessage2").innerHTML="<font color = 'red'> Thermostat Set Can't Be Below: </font>"+ tnum + "<font color = 'red'>or above </font>" + anum;
            return false;
         }else if((parseInt(a)< parseInt(tnum)) || (parseInt(a)> parseInt(hnum))){
//              $('.UnitServes').hide();
                $('#entireDisplay').hide();
            document.getElementById("resiMessage2").innerHTML="<font color = 'red'> Actual Room Temp Can't Be Below: </font>"+ tnum + "<font color = 'red'>or above </font>" + hnum;
            return false;
         } else{
//            $('.UnitServes').show();
              $('#entireDisplay').show();
            document.getElementById("resiMessage2").innerHTML="";
            return true;
         } 
    }//end of themZone()
    
    
    

    
    //function for Question: Number of System  for Residential cooling
    function themVal2(){
        var temper1 = $("#dnosText").val();
        var thPat = /^[0-9]+$/;
        
        if(!temper1.match(thPat)){
           document.getElementById('therm1').focus();
           document.getElementById("resiMessage2").innerHTML="<font color = 'red'>Numbers Only</font>";
           return false;
         }else if(temper1 > 1){
            $('.UnitServes').show();
            $('#unitTyD').hide();
        } else if(temper1 <= 1){
            $('#unitTyD').show();
            $('.UnitServes').hide();
        } else{
            document.getElementById("resiMessage2").innerHTML="";
           return true;
        }
    }//end of themVal function 


    function themVal3(){
        var temper2 = $("#heThem").val();
        var temper3 = $("#heThem1").val();
        var thPatt = /^[0-9]+$/;
        
        if(!temper2.match(thPatt)){
            $('.UnitServes').hide();
           document.getElementById('heThem').focus();
           document.getElementById("hTemMessage").innerHTML="<font color = 'red'>(Thermostat Set:) Numbers Only</font>";
           return false;
         } else if(!temper3.match(thPatt)){
            $('.UnitServes').hide();
           document.getElementById('heThem1').focus();
           document.getElementById("hTemMessage").innerHTML="<font color = 'red'> (Actual:) Numbers Only</font>";
           return false;
         } else {
            $('.UnitServes').show();
            document.getElementById("hTemMessage").innerHTML="";
           return true;
         }
    }//end of themVal3 function 

    function themVal4(){
        var temper4 = $("#dhnosText").val();
        var thPatte = /^[0-9]+$/;
        
        if(temper4.length == 0){
            $('#unitTyD, .UnitServes').hide();
        } else if(!temper4.match(thPatte)){
          document.getElementById("hTemMessage").innerHTML="<font color = 'red'>Numbers Only</font>";
           return false;
         }else if(temper4 >1){
            $('.UnitServes').show();
            $('#unitTyD').hide();
        } else if(temper4 <= 1){
            $('#unitTyD').show();
            $('.UnitServes').hide();
        } else{
            document.getElementById("hTemMessage").innerHTML="";
           return true;
        }
    }//end of themVal4 function 

    function themVal5(){
        var temper4 = $("#paUA").val();
        var thPatte = /^[0-9]+$/;
        if(!temper4.match(thPatte)){
           document.getElementById('paUA').focus();
           document.getElementById("UAMess").innerHTML="<font color = 'red'>Numbers Only</font>";
           return false;
         }else if(temper4.match(thPatte)){
            document.getElementById("UAMess").innerHTML="";
           return true;
         }
    }//end of themVal3 function 

    //Commerical: Temperture Input
  function themVal7() {
        var temper5 = $("#cTherm").val();
        var temper51 = $("#cTherm1").val();
        var thePatte = /^[0-9]+$/;
        if(!temper5.match(thePatte)){
            $('.coUnitServes').hide();
           document.getElementById('cTherm').focus();
           document.getElementById("thMess").innerHTML="<font color = 'red'>Thermostat Set:Numbers Only</font>";
           return false;
         }else if(!temper51.match(thePatte)){
            $('.coUnitServes').hide();
           document.getElementById('cTherm1').focus();
           document.getElementById("thMess").innerHTML="<font color = 'red'> Actual Temperature At:Numbers Only</font>";
           return false;
         } else {
            //$('.coUnitServes').show();
            $('.coUnitServes').show();
            document.getElementById("thMess").innerHTML="";
           return true;
         }
  }

  //Commerical: Temperture Input Commerical Heating Issuing
  function themValC() {
        var te7 = $("#tsetat").val();
        var te71 = $("#tsetat1").val();
        var thePatten = /^[0-9]+$/;
        if(!te7.match(thePatten)){
           $('.coUnitServes').hide();
           document.getElementById('tsetat').focus();
           document.getElementById("themValCMes").innerHTML="<font color = 'red'> Thermostat Set at:Numbers Only</font>";
           return false;
         }else if(!te71.match(thePatten)){
            $('.coUnitServes').hide();
            document.getElementById('tsetat1').focus();
            document.getElementById("themValCMes").innerHTML="<font color = 'red'> Actual Temperature at:Numbers Only</font>";
           return true;
         }else {
             $('.coUnitServes').show();
            document.getElementById("themValCMes").innerHTML="";
           return true;
         }
  }//end of themValC

  function nosHeat() {
        var nosH = $("#dhnosText1").val();
        var thePatten = /^[0-9]+$/;//number pattern
        if(nosH.length == 0){
            $('.coUnitServes').hide();//unit concern
            $('.coIYS').hide(); //is your system
            document.getElementById("noshMEss").innerHTML="<font color = 'red'> Enter a Number</font>";
        }else if(!nosH.match(thePatten)){
             $('.coUnitServes').hide();//unit concern
             $('.coIYS').hide(); //is your system
             document.getElementById("noshMEss").innerHTML="<font color = 'red'> Numbers Only</font>";
        }else if(nosH <= 1) {
             $('.coUnitServes').hide();//unit concern
             $('.coIYS').show(); //is your system
        } else if(nosH > 1) {
            $('.coUnitServes').show();
            $('.coIYS').hide();
        } 
  }//end of function

  function policyNum(){
        var tunText = $("#tun").val();
        var thP = /^[0-9 a-zA-Z\s]+$/; 
        
        if(tunText.length == 0){
            $('.sedDiv').hide();
        } else if(!tunText.match(thP)){
          document.getElementById("tunMessage").innerHTML="<font color = 'red'>Number and Letters Only</font>";
           return false;
        }else if(tunText > 0){
            $('.sedDiv').show();
        } else if(tunText <= 0){
            $('.sedDiv').hide();
        } else{
            document.getElementById("tunMessage").innerHTML="";
           return true;
        }
    }//end of policyNum function

//    function startDate(){
//        var today = new Date();
//        var stDate = $("#sdte").val();
//        var edate = $("#edte").val();
//        //var sePat = /^[0-9]+$/;
//        //new Date
//        var date1 = new Date(sdate);
//        var date2 = new Date(edate);
//       
//        if(stDate.length == 0){
//            document.getElementById("sedDivMess").innerHTML="<font color = 'red'>Enter Start: Month and Date Format 12/2000</font>";
//            return false;
//        }else if(edate.length == 0){
//		    document.getElementById("col1").style.backgroundColor="#FF0000";
//            document.getElementById("date2").style.color="#000000";
//            document.getElementById("sedDivMess").innerHTML="<font color = 'red'>Enter End: Month and Date Format 12/2000</font>";
//            return false;
//        }else if(date2 < date1){
//            document.getElementById("sedDivMess").innerHTML="<font color = 'red'> End Date Can't be less Than Start Date</font>";
//            return false; 
//        } else {
//            $('#bookHidden').show();
//           document.getElementById("sedDivMess").innerHTML="";
//           return true; 
//        }
//    }//end of policyNum function
    
//    function startDate(){
//         var stDate = $("#sdte").val();
//         var edate = $("#edte").val();
//         
//         var date1 = new Date(stdate);
//         var date2 = new Date(edate);
//         
//        if(date2 > date1){
//            alert("End Date is greater than Start Date");
//            document.getElementById("sedDivMess1").innerHTML="<font color = 'red'> End Date Can't be less Than Start Date</font>";
//            return false; 
//        } else {
//           $('#bookHidden').show();
//           document.getElementById("sedDivMess").innerHTML="";
//           return true; 
//        }
         
       
//    }//end of function


// compare start and end to current date
    function compare(){
         var sdate = document.getElementById('sdte').value;
         var edate = document.getElementById('edte').value;
         var date1 = new Date(sdate);
         var date2 = new Date(edate);

        if(date2 > date1){
            $('#bookHidden').show();
        }else if(date2 < date1){
            $('#bookHidden').hide();
             document.getElementById("sedDivMess").innerHTML="<font color = 'red'> Warranty End Date Can't Be Less than Start Date</font>";
        }
    }//end of function

    function animOther(){
        var stDate = $("#animalOther").val();
        var sePat = /^[a-zA-Z\s]+$/;//pattern

        if(stDate.length == 0){
           $('.callMdiv').hide();
        } else if(!stDate.match(sePat)){
          document.getElementById("bookHidMess").innerHTML="<font color = 'red'>Letters Only</font>";
           return false;
        }else if(stDate.length > 1){
            $('.callMdiv').show();
        } else if(stDate.length < 1){
            $('.callMdiv').hide();
        } else{
           document.getElementById("bookHidMess").innerHTML="";
           return true;
        }
    }//end of animOther function
   
  function AgeNum(){
        var moUa = $("#moUA").val();
        var thePatten = /^[0-9]+$/;
        if(!moUa.match(thePatten)){
           document.getElementById('moUA').focus();
           document.getElementById("AgeNumMess").innerHTML="<font color = 'red'>Numbers Only</font>";
           return false;
         }else if(moUa.match(thePatten)){
            document.getElementById("AgeNumMess").innerHTML="";
           return true;
         }   
     }

function LocationIn(){
    var iul = document.getElementById('iduclos');//Closet
    var iul1 = document.getElementById('idugara');//Garage
    var iul2 = document.getElementById('idubase');//Basement
    var iul3 = document.getElementById('iduatti');//Attic
    var iul4 = document.getElementById('iducs');//Crawl Space
    //attic
    var atul = document.getElementById('ticvia');//Access Via
    var atul1 = document.getElementById('ticpds');//Pull Down Stair Case
    var atul2 = document.getElementById('ticsw');//Scuttle Hole
    var atul3 = document.getElementById('ticdoo');//Door
    //Garage
     var ggh1 = document.getElementById('slrs1');//House
     var ggh2 = document.getElementById('slrs2');//Garage
    
    if(!iul.checked && !iul1.checked && !iul2.checked && !iul3.checked && !iul4.checked){
        document.getElementById("iduMess").innerHTML="<font color = 'red'> Answer Question 'Indoor Unit Location'</font>";
        return false;
    }else if(iul3.checked) {
        if(!atul.checked && !atul1.checked && !atul2.checked && !atul3.checked){
          document.getElementById("iduMess").innerHTML="<font color = 'red'> Attic Access Selection</font>";
           return false;
        }else{
            document.getElementById("iduMess").innerHTML="";
             return false;
        }
    }else if(iul1.checked){
        if(!ggh1.checked && !ggh2.checked){
            document.getElementById("iduMess").innerHTML="<font color = 'red'> Select Garage Area</font>";
           return false;
        } else {
          document.getElementById("iduMess").innerHTML="";
            return false;
        } 
    } else{
        document.getElementById("iduMess").innerHTML="";
           return true;
    }
}// end of function LocationIn()

//Commerical Unit Concern/Problem
function IssueCooling(){
    var cop = document.getElementById('cocooling');//Cooling
    var cop1 = document.getElementById('coheating');//Heating
    var cop2 = document.getElementById('coheatCool');//Cooling & Heating

    if(!cop.checked && !cop1.checked && !cop2.checked){
        document.getElementById("cpoMessage").innerHTML="<font color = 'red'> Select Unit Concern/Problem</font>";
             return false;
    }else{
        document.getElementById("cpoMessage").innerHTML="";
             return true;
    }
}//end of IssueCooling()


function gasVal2(){
    var cospigasr = document.getElementById('cospigasr');//gas
    var cospielectric = document.getElementById('cospielectric');//electric
    var cospiheat = document.getElementById('cospiheat');//heat
    var cospropane = document.getElementById('cospropane');//propane
    var cosnatural = document.getElementById('cosnatural');//natural  
    
    if(!cospigasr.checked && !cospielectric.checked && !cospiheat.checked){
        $('#cospigasr1').hide();//hide
       document.getElementById('gasVal2message').innerHTML="<font color = 'red'> Answer question 'Is your home heat, gas or electric?'(Spilt System)</font>";
        return false;
    }else if(cospigasr.checked){
        if(!cospropane.checked || !cosnatural.checked){
            $('#cospigasr1').hide();//hide
            document.getElementById('gasVal2message').innerHTML="<font color = 'red'> Check  propane or natural</font>";
            return false;
        }else{
            $('#cospigasr1').show();//show
           document.getElementById('gasVal2message').innerHTML="";
            return false; 
        }
        
    }else{
        document.getElementById('gasVal2message').innerHTML="";
        return true;
    }

}//end of function

//Gas(Commerical) click no function
function inOutVal(){
    var ycsp = document.getElementById('yesComsp');//yes
    var ncsp = document.getElementById('noComsp');//no
    //yes
    var yeNum = document.getElementById('yeNum').value;
    var yeNum1 = document.getElementById('yeNum1').value;
    //no
    var outd = document.getElementById('odu').value;//Outdoor Unit Age
    var outd1 = document.getElementById('odu1').value;//Outdoor Unit Year Installed
    var indG = document.getElementById('igGas').value;//Indoor Gas age
    var indG1 = document.getElementById('igGas1').value;//Indoor Year  Installed
    var furaG = document.getElementById('furanceGas').value;//Furnace Age
    var furaG1 = document.getElementById('furanceGas1').value;//Furnace Year Installed
    var coilG = document.getElementById('coilGas').value;//Coil YearInstalled
    var coilG1 = document.getElementById('coilGas1').value;//Coil Age
    var yePat = /^[0-9]+$/;

    if(!ycsp.checked && !ncsp.checked){
        //$('#packLocage').hide();//hide the Outdoor Unit Location
        document.getElementById('gasVal2message1').innerHTML="<font color = 'red'> Answer queston:'Is Indoor and outdoor unit Approximate same age?'</font>";
            return false; 
    }else if(ycsp.checked){
        if((!yeNum.match(yePat)) && (!yeNum1.match(yePat))){
            document.getElementById('gasVal2message1').innerHTML="<font color = 'red'>Number Only for System Age or year Installed</font>";
            return false;
        } else{
            $('#packLocage').show();//show the Outdoor Unit Location
            document.getElementById('gasVal2message1').innerHTML= "";
            return false;
        }
    }else if(ncsp.checked){
       if((!outd.match(yePat)) && (!outd1.match(yePat))){
            document.getElementById('gasVal2message1').innerHTML="<font color = 'red'>Outdoor Unit Year Old or Installed Numbers Only</font>";
            return false;
        }else if((!indG.match(yePat)) && (!indG1.match(yePat))){
            document.getElementById('gasVal2message1').innerHTML="<font color = 'red'>Indoor Gas Year Old or Installed Numbers Only</font>";
            return false;
        }else if((!furaG.match(yePat)) && (!furaG1.match(yePat))){
            document.getElementById('gasVal2message1').innerHTML="<font color = 'red'>Furance Year Old or Installed Numbers Only</font>";
            return false;
        }else if((!coilG.match(yePat)) && (!coilG1.match(yePat))){
           document.getElementById('gasVal2message1').innerHTML="<font color = 'red'>Coil Year Old or Installed Numbers Only</font>";
            return false;
        } else{
            $('#packLocage').show();//show the Outdoor Unit Location
            document.getElementById('gasVal2message1').innerHTML="";
            return false; 
        }
         
    }else{
        document.getElementById('gasVal2message1').innerHTML="";
        return true; 
    }
 } //end of function inOutVal()


 //commerical split system Heat and Electric radio button validation function Start
 //This function will also validate the hidden div textbox value accept numbers only and each one is required to be filled in order to 
 //go the next question "Outdoor Unit Location(Commerical-- Split System)"
 function hinOutVal(){
    var hsyes = document.getElementById('yesCHEsp');//yes
    var hsno = document.getElementById('noCHEsp');//no
    //yes(Sytem Age Textboxs)
    var sayo = document.getElementById('sayo').value;
    var sayi = document.getElementById('sayi').value;
    //no
    var noua = document.getElementById('hodu').value;//Outdoor Unit Year Old
    var noua1 = document.getElementById('hodu1').value;//Outdoor Unit Year Installed
    var noua2 = document.getElementById('ieyo').value;//Indoor Electric Year Installed
    var noua3 = document.getElementById('ieyo1').value;//Indoor Electric Year Installed
    //pattern
    var hePat = /^[0-9]+$/;

    if(!hsyes.checked && !hsno.checked){
        document.getElementById('gasVal2message1').innerHTML="<font color = 'red'> Answer queston Heat Spilt:'Is Indoor and outdoor unit Approximate same age?'</font>";
        return false; 
    }else if(hsyes.checked){
       if((!sayo.match(hePat)) && (!sayi.match(hePat))){
            document.getElementById('gasVal2message1').innerHTML="<font color = 'red'>Number Only for Heat: System Age or year Installed</font>";
            return false;
        } else{
            $('#packLocage').show();//show the Outdoor Unit Location
            document.getElementById('gasVal2message1').innerHTML= "";
            return false;
        }
    } else if(hsno.checked){
        if((!noua.match(hePat)) && (!noua1.match(hePat))){
            document.getElementById('gasVal2message1').innerHTML="<font color = 'red'>Heat or Electric:Outdoor Unit Year Old or Installed Numbers Only</font>";
            return false;
        } else if((!noua2.match(hePat)) && (!noua3.match(hePat))){
           document.getElementById('gasVal2message1').innerHTML="<font color = 'red'>Heat or Electric:Indoor Electric Year Old or Installed Numbers Only</font>";
            return false; 
        } else{
            $('#packLocage').show();//show the Outdoor Unit Location
            document.getElementById('gasVal2message1').innerHTML="";
            return false; 
        }
    } else{
       document.getElementById('gasVal2message1').innerHTML="";
        return true;
    }
 }//commerical split system Heat and Electric radio button validation functin end


 //commerical Package Unit Location
function roofPC(){
    var croofr = document.getElementById('croofr');//roof
    var cground = document.getElementById('cground');// ground
    var clocWall = document.getElementById('clocWall');//wall
    var cperRoof = document.getElementById('cperRoof');//Permit Roof Access
    var csupLad = document.getElementById('csupLad');//Ladder
    //for date and time
    // var xea = new Date();
    // var low = xea.toLocaleTimeString();

    if(!croofr.checked && !cground.checked && !clocWall.checked){
        $('.ParkSpecial').hide();//Special Parking
        document.getElementById('roofPCmessage').innerHTML="<font color = 'red'> Unit Location(Commerical Package)</font>";
        return false;
    }else if(croofr.checked){
        $('.ParkSpecial').hide();//unit concern
        if(!cperRoof.checked && !csupLad.checked){
            document.getElementById('roofPCmessage').innerHTML="<font color = 'red'> Roof Access(Commerical Package)</font>";
            return false;
        }else{
            $('.ParkSpecial').show();//unit concern
           document.getElementById('roofPCmessage').innerHTML="";
            return false; 
        }
        
    }else{
        $('.ParkSpecial').show();//unit concern
        document.getElementById('roofPCmessage').innerHTML="";
        return true;
    }


}//end of roofPC()  

//Commerical Outdoor Unit Location
function roofPC1(){
    var sroof = document.getElementById('spiroofheel');//roof
    //$("#spiroofheel").val(); //roof
    var sground = document.getElementById('spigroundheel');//ground
    //$("#spigroundheel"); //ground
    var swall = document.getElementById('spilocWallheel');//wall
    //$("#spilocWallheel"); //wall
    var roof1 = $("#heelpiperRoof");//Permit Roof Access
    var roof2 = $("#heelspisupLad");//Ladder
   
    if(!sroof.checked && !sground.checked && !swall.checked){
        document.getElementById('roofPC1Message').innerHTML="<font color = 'red'> 'Unit Location'(Commerical Split System)</font>";
        return false;
    } else if(sroof.checked){
        $(".i10Messdiv").hide(); 
        if(!roof1.checked && !roof2.checked){
            document.getElementById('roofPC1Message').innerHTML="<font color = 'red'> Roof Access(Commerical Split System)</font>";
            return false;
        }else{
           document.getElementById('roofPC1Message').innerHTML="";
            return false; 
        }
        
    } else if(sground.checked && swall.checked){
        $(".i10Messdiv").show(); 
        return false;
    } else{
         document.getElementById('roofPC1Message').innerHTML="";
        return true;
    }
}//end of roofPC1()




// else if(sroof.checked){
//         $("#i10Messdiv").hide(); 
//         if(!roof1.checked && !roof2.checked){
//             document.getElementById('roofPC1Message').innerHTML="<font color = 'red'> Roof Access(Commerical Split System)</font>"
//             return false;
//         }else{
//            document.getElementById('roofPC1Message').innerHTML=""
//             return false; 
//         }
        
//     }else{
//         document.getElementById('roofPC1Message').innerHTML=""
//         return true;
//     }

//Package Spilt System Outdoor Unit Location  ParkSpecial
function filt(){
        var outD = document.getElementById('roofilt');//roof
        var outD1 = document.getElementById('grouilt');//ground
        var outD2 = document.getElementById('wallilt');//wall
        //Ladder Access
        var acce = document.getElementById('prfSpilt');//permit ladder
        var acce1 = document.getElementById('lSpilt');//Ladder

        if(!outD.checked && !outD1.checked && !outD2.checked ){
            document.getElementById('filtMessage').innerHTML="<font color = 'red'> Select Outdoor Unit Location(Package Spilt System) </font>";
            return false; 
        } else if(outD1.checked || outD2.checked){
            $('#rooHeight, .ensureDiv').show();
        } else if(outD.checked){
            $('#rooHeight').hide();
            if(!acce.checked && !acce1.checked){
                document.getElementById('filtMessage').innerHTML="<font color = 'red'> Select Roof Access </font>";
                    return false; 
            } else if(acce1.checked){
                $('#rooHeight').hide();
            } else{
                document.getElementById('filtMessage').innerHTML="";
                    return false;  
            }
        }else{
           document.getElementById('filtMessage').innerHTML=" </font>";
            return true;   
        }
}//end of filt()

    //Package Commerical Heat Type selection
function gas1(){
    var packGasC = document.getElementById('packGasC');//gas
    var packElectricC = document.getElementById('packElectricC');//electric
    var packHeatC = document.getElementById('packHeatC');//heat
    var ppropane = document.getElementById('ppropane');//propane
    var pnatural = document.getElementById('pnatural');//natural
    //for date and time
    // var xea = new Date();
    // var low = xea.toLocaleTimeString();

    if(!packGasC.checked && !packElectricC.checked && !packHeatC.checked){
        document.getElementById('gas1message').innerHTML="<font color = 'red'> Answer question 'Is your home heat, gas or electric?'(Commerical Package) </font>";
        return false;
    } else if(packGasC.checked){
        $('.comULoc').hide();
        if(!ppropane.checked && !pnatural.checked){
            document.getElementById('gas1message').innerHTML="<font color = 'red'> Check  propane or natural</font>";
            return false;
        }else{
            $('.comULoc').show();
           document.getElementById('gas1message').innerHTML="";
            return false; 
        }
    }else{
        $('.comULoc').show();
        document.getElementById('gas1message').innerHTML="";
        return true;
    }


}//end of gas1()

//Package Residential Heat Type:  
    function gasVal1(){
    var g = document.getElementById('gasr');//gas
    var tric = document.getElementById('electricr');//electric
    var heat = document.getElementById('heatr');//heat
    var dual = document.getElementById('dualr');//dual
    var hyd = document.getElementById('hydr');//hydronic
    var iflor = document.getElementById('iflor');//in floor radiant
    var wood = document.getElementById('wood');//wood
    var pro = document.getElementById('propaner');//propane
    //gas radio buttons
    var propane = document.getElementById('propane');//propane
    var natural = document.getElementById('natural');//gas
    //ddl textbox and button
    var phtText = document.getElementById("phtShow").value;//textbox
    var phtList = document.getElementById("phtDDL");//dropdown List
    var option27 = document.createElement("option");//create new option
    var hpat = /^[a-zA-Z\s]+$/;//pattern 

    if(phtText.length == 0){
        $(".pselPack").hide(); 
        if(!heat.checked && !g.checked && !pro.checked && !tric.checked && !dual.checked && !hyd.checked && !iflor.checked && !wood.checked) {
            document.getElementById('resiMessage9').innerHTML="<font color = 'red'> Answer question 'Is your home heat, gas or electric?'(Residential Package)</font>";
            return false;
       }else if(pro.checked){
            $("#elegas11r").hide(); 
            $(".pselPack").show(); 
            
        }else if(g.checked){
            if(!propane.checked && !natural.checked){
                document.getElementById('resiMessage9').innerHTML="<font color = 'red'> Check  propane or natural</font>";
                return false;
            }else{
                $(".pselPack").show(); 
                document.getElementById('resiMessage9').innerHTML="";
                return false; 
            }
        }
    }else if(!phtText.match(hpat)){
        $(".pselPack, #elegas11r").hide();
        $('input[name= thi]').prop('checked', false);//uncheck Heat Type::(Residential)   
        document.getElementById("resiMessage9").innerHTML="<font color = 'red'>Letters Only</font>";
        return false;
    }else if(phtText.match(hpat)){
        $(".pselPack").show(); 
        $('input[name= psel]').prop('checked', false);//uncheck Heat Type::(Residential) 
        document.getElementById("resiMessage9").innerHTML="";
        return true;
    }
}//end of function gasVal1()


//Residential Spilt system Heat Type
function hgeType(){
    var h = document.getElementById('heatrspi');//heat
    var g = document.getElementById('gasrspi');//gas
    var e = document.getElementById('electricrspi');//electric
    var d = document.getElementById('dual');//electric
    //heat(h) and electric(e) yes and no radio button
    var heyes = document.getElementById('heleyes');//yes
    var heno = document.getElementById('heleno');//no
    var hedk = document.getElementById('heldk');//I Don't Know
    //yes radio button
    var hgeA = $("#hgeAge").val(); //Heat System Unit
    //no 
    var htou = $("#htou").val(); //Heat Outdoor Unit(year)
    var htou1 = $("#htou1").val(); //Heat Outdoor Unit(year installed)
    var hine = $("#hine").val(); //Heat Indoor Electric(year)
    
    //gas(g) yes and on radio button
    var gyes = document.getElementById('hpyes');
    var gno = document.getElementById('hpno');
    //gas input text box(yes)
    var gText = $("#gT").val();
    var numPa = /^[0-9]+$/;
    //gas input Textbox (no)
    var git = $("#ouit").val();//Gas outdoor
    var gin = $("#ingas").val();//Indoor Gas
    var gfurn = $("#agefurn").val();// Gas Furnace
    var gcoil = $("#gcoil").val();//Gas Coil
    //type of gas
    var gpro = document.getElementById('gpro');//propane
    var gnat = document.getElementById('gnat');//natural

    if (!h.checked && !g.checked && !e.checked && !d.checked){
        document.getElementById('hgeMessage').innerHTML="<font color = 'red'> Answer 'Split System question 'Heat Type'</font>"
        return false;
    }else if(h.checked || e.checked) {
        if(!heyes.checked && !heno.checked && !hedk.checked){
            document.getElementById('hgeMessage').innerHTML="<font color = 'red'> Answer: Heat Pump: Unit Age: Is Indoor and Outdoor Approximate Same Age?</font>";
            return false;
        }else if(heyes.checked){
            if(!hgeA.match(numPa)){
                document.getElementById('hgeAge').focus();
                document.getElementById('hgeMessage').innerHTML="<font color = 'red'>(Heat) System Unit Numbers Only</font>";
                return false;
            }else if(hgeA.match(numPa)) {
                document.getElementById('hgeMessage').innerHTML="";
                return false;
            }
            
        }else if(heno.checked) {
            if(!htou.match(numPa)){
                $('.rgwFilt').hide();
                document.getElementById('hgeMessage').innerHTML="<font color = 'red'>(Heat) Outdoor Unit: Numbers Only</font>";
                return false;
            }else if(!hine.match(numPa)){
                $('.rgwFilt').hide();
                 document.getElementById('hgeMessage').innerHTML="<font color = 'red'>(Heat) Indoor Electric: Number Only</font>";
                return false;
            } else {
                $('.rgwFilt').show();
                 document.getElementById('hgeMessage').innerHTML="<font color = 'red'></font>";
                return false;
            }
        }else if(hedk.checked) {
            $('.rgwFilt').show();
            $("#hgeAge, #hgeYear").val("")//Clear Yes text entry  for "Is Indoor and Outdoor Unit Approximate Same Age?" System Age and Year installed
            $("#htou", "#htou1").val("")//Clear No text entry  for "Is Indoor and Outdoor Unit Approximate Same Age?" System Age and Year installed
            $("#hine", "#hine1").val("")//Clear No text entry  for "Is Indoor and Outdoor Unit Approximate Same Age?" System Age and Year installed
            return false; 
        }else {
           document.getElementById('hgeMessage').innerHTML="";
            return false; 
        }
        
    }else if(g.checked ) {
        if(!gpro.checked && !gnat.checked){
            document.getElementById('hgeMessage').innerHTML="<font color = 'red'> Residential Spilt: Select Type of Gas </font>";
            return false;
        } else {
            $('.rgwFilt').show();
           document.getElementById('hgeMessage').innerHTML="";
            return false; 
        }
        
    }else {
        document.getElementById('hgeMessage').innerHTML="";
        return true;
    }
}//end of function hgeType()

function billingAddress(){
    var bill = document.getElementById('billinga').value;//building number
    var bill1 = document.getElementById('billinga1').value;//street Name billinga3
    var bill2 = document.getElementById('billinga3').value;//zip
    var bill3 = document.getElementById('billinga4').value;//City
    var bill4 = document.getElementById('billinga5').value;//State 
    //clear zip code checkbox
    var cbutton = document.getElementById('bacButton');//clear button
    //pattern
    var pattern = /^[0-9]+$/;
    var pattern1 = /^[0-9a-zA-Z\s]+$/;
    var pattern2 =/^[a-zA-Z\s]+$/;
    var pattern3 =/^[a-zA-Z]+$/;
    
        if(!bill.match(pattern)){
            document.getElementById('billinga').focus();
            document.getElementById("billMess").innerHTML="<font color = 'red'>Billing Address Building 'Numbers Only'</font>";
            return false; 
        }else if(!bill1.match(pattern1)){
            document.getElementById('billinga1').focus();
            document.getElementById("billMess").innerHTML="<font color = 'red'>Street Name 'Numbers and Letter Only'</font>";
            return false;
        } else if(!bill2.match(pattern)){
            document.getElementById('billinga3').focus();
            document.getElementById("billMess").innerHTML="<font color = 'red'> Billing Zip 'Number Only'</font>";
            return false;
        }else if(!bill3.match(pattern2)){
            document.getElementById('billinga4').focus(); 
            document.getElementById("billMess").innerHTML="<font color = 'red'> Billing City 'Letters Only'</font>";
            return false;
        }else if(!bill4.match(pattern3)){
            document.getElementById('billinga5').focus(); 
            document.getElementById("billMess").innerHTML="<font color = 'red'> Billing State 'Letter Only'</font>"
            return false;
        }else{
            document.getElementById("billMess").innerHTML="";
            return true; 
        }
}// end if function billingAddress()

//Question :Estimating Building story(Residential split systems) 
function ebs(){
    var story = document.getElementById("story");//1
    var story1 = document.getElementById("story1");//2
    var story2 = document.getElementById("story2");//3
    var story3 = document.getElementById("storyOt");//other
    var storyText = document.getElementById("storyText").value;//textbox
    var sp = /^[0-9]+$/; 
    //est. height textbox
    //var cBox = document.getElementById("ehText").value;//Est.Height textbox

    if(!story.checked && !story1.checked && !story2.checked && !story3.checked){
        $('.iduDiv').hide();
        document.getElementById("ebsMess").innerHTML="<font color = 'red'> Select Estimating Building Story</font>";
        return false;
    }else if(story3.checked){
        if(storyText.length == 0){
            $('.iduDiv').hide();
            document.getElementById("ebsMess").innerHTML="<font color = 'red'> Enter Other Estimating Building Story</font>";
            return false;
        }else if(!storyText.match(sp)){
            $('.iduDiv').hide();
            document.getElementById("ebsMess").innerHTML="<font color = 'red'> Number Only</font>";
            return false;
        }else{
            $('.iduDiv').show();
            $('input[name = bStory]').prop('checked', false);//
           document.getElementById("ebsMess").innerHTML="";
            return false; 
        }
    }else{
        $('.iduDiv').show();
        $('#ehText').val('');
        document.getElementById("ebsMess").innerHTML="";
        return true;
    }
}//end of function


           
$(document).ready(function(){
$('.launchConfirm').on('click', function (e) {
    $('#confirm').modal({ backdrop: 'static', keyboard: false })
        .one('click', '[data-value]', function (e) {
            if($(this).data('value')) {
                alert('confirmed');
            } else {
                alert('canceled');
            }
        });

    var number = 1 + Math.floor(Math.random() * 900000);
    $('#gnumber').text(number);

});
$('#hopefully').on('click', function () {
    var letter = document.getElementById("sample").value;
    $('#firstMessage').text(letter);
    $('#firstMessage').show();
});

// $("#subMod").submit(function( event ) {
   
//    if ( $( "#rfname").val() === "" ) {
//     $( "#rtName" ).text( "Validated..." ).show();
//     return;
//   }
// });


//validation get password request (first name)
    $("#finame").hide();
    $("#finame1").hide();
    $("#finame2").hide();
    $("#eiquest").keyup(guestList).focus(guestList);
    $("#fquest").keyup(guestList).focus(guestList);
    $("#lquest").keyup(guestList).focus(guestList);

    function guestList(){
        var patgu  = /^[a-zA-Z]+$/;
        var patgu1 = /^[0-9 a-zA-Z]+$/;
        var patgu2 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([com\co\.\in])+$/;
        var guest =  $("#fquest").val();
        var guest1 = $("#lquest").val();
        var guest2 = $("#eiquest").val();
        var guest3 = $("#email").val();
        //for first name
        if(guest == ''){
           $("#finame").text("Enter First Name"); 
           $("#finame").show(); 
        }else if(!patgu.test(guest)){
           $("#finame").text("Letters Only"); 
           $("#finame").show(); 
        }else{
           $("#finame").hide();  
        }
        //last name
        if(guest1 == ''){
            $("#finame1").text("/Enter Last Name");
            $("#finame1").show(); 
        } else if(!patgu.test(guest1)){
            $("#finame1").text("/Letters Only");
            $("#finame1").show();
        } else {
           $("#finame1").hide();  
        }

    // employee id number
    if(guest2 == ''){
            $("#finame2").text("Number and Letters Only");
            $("#finame2").show(); 
        } else if(!patgu1.test(guest2)){
            $("#finame2").text("/Letters Only");
            $("#finame2").show();
        } else {
           $("#finame2").hide();  
        }


    // email Address 
    if(guest3 == ''){
            $("#finame3").text("/Enter Email Address");
            $("#finame3").show(); 
        } else if(!patgu2.test(guest3)){
            $("#finame3").text("/Format: jane.gold@acgenis.com");
            $("#finame3").show();
        } else {
           $("#finame2").hide();  
        }
    }//end of function

    

//validtion heat type
    $("#resiMessage9").hide();
    $('#phtShow').keyup(residHTyp).focus(residHTyp);
    
    function residHTyp(){
        var textPht = $('#phtShow').val();
        var expt = /^[a-zA-Z\s]+$/;;//allow white space between names;;
        if(!expt.test(textPht)){
            $("#resiMessage9").text("Letters Only").show();
        } else{
            $("#resiMessage9").text("").show();
        }

    }//end of function residHTy

    //validation for Unit Serves other textbox
    $("#resiMessage11").hide();
    $('#outdHidden').keyup(residUnitSer).focus(residUnitSer);
    function residUnitSer(){
        var textOut = $('#outdHidden').val();
        var expt = /^[a-zA-Z\s]+$/;;//allow white space between names;;
        if(!expt.test(textOut)){
            $("#resiMessage11").text("Letters Only").show();
        } else{
            $("#resiMessage11").text("").show();
        }

    }//end of function residHTy


    //validation for Estimate Ladder Needed: other textbox Residential---Package
    $("#LadMessage").hide();
    $('#ladSize0').keyup(residUL1).focus(residUL1);
    function residUL1(){
        var expt1 = /^[0-9]+$/;//Number Only;
        var textEst = $('#ladSize0').val();
        
        if(!expt1.test(textEst)){
            $(".ParkSpecial").hide();
            $("#LadMessage").text("Number Only").show();
        } else if(expt1.test(textEst)) {
            $(".ParkSpecial").show();
            $('input[name= eln0]').prop('checked', false);//uncheck Roof Access:(Package):(Residential)
            $("#LadMessage").text("").show();
        } else{
            $("#LadMessage").text("").show();
        }   
    }

    //validation for Outdoor Unit Location: other textbox Residential---Split
    $("#filtMessage").hide();
    $('#filtText').keyup(spiltOUL).focus(spiltOUL);
    function spiltOUL(){
        var expt1 =  /^[a-zA-Z\s]+$/;//allow white space between names;
        var textOUL = $('#filtText').val();
        
        if(!expt1.test(textOUL)){
            $("#filtMessage").text("Letter Only").show();
        } else {
            $("#filtMessage").text("").show();
        }   
    }
 
 //validation for Estimate Ladder Needed: other textbox Residential---Split
    $("#reatSPI").hide();
    $('#olz').keyup(spiltELN).focus(spiltELN);
    function spiltELN(){
        var expt0 =  /^[0-9]+$/;//Number Only;
        var textOLZ = $('#olz').val();
        
        if(!expt0.test(textOLZ)){
            $("#reatSPI").text("Numbers Only").show();
        } else {
            $("#reatSPI").text("").show();
        }   
    } 

    //validation for Estimate Height: other textbox Residential---Split
    $("#ebsMess").hide();
    $('#ehText').keyup(spiltEBS).focus(spiltEBS);
    function spiltEBS(){
        var expt2 =  /^[0-9]+$/;//Number Only;
        var textEH = $('#ehText').val();
        if(!expt2.test(textEH)) {
           $('.iduDiv').hide();
           document.getElementById("ebsMess").innerHTML="<font color = 'red'> Number Only </font>";
        } else if(expt2.test(textEH)) {
           $('.iduDiv').show();
           $('#storyText').hide();
           $('input[name= bStory]').prop('checked', false);// radio button for Estimate Building Story 1, 2 or 3
           $('#storyText').val('');//textbox for Estimate Building 
        } else{
              document.getElementById("ebsMess").innerHTML="";
        }
    }

    //validation for Estimate Height: other textbox Residential---Split
    $("#ebsMess").hide();
    $('#storyText').keyup(spiltStory).focus(spiltStory);
    function spiltStory(){
        var expt2 =  /^[0-9]+$/;//Number Only;
        var textStory = $('#storyText').val();
        
        if(!expt2.test(textStory)){
            $("#reatSPI").text("Numbers Only").show();
        } else {
            $("#reatSPI").text("").show();
        }   
    }

    //validation for "Is your mailing and service address the same?" if  the ddlb for apartment & suite
    $("#smmessage").hide();
    $('#saddress2').keyup(ddlbASO).focus(ddlbASO);

    function ddlbASO(){
        var numberText = $('#saddress2').val();
        var none = $('#road');
        var strexp1 =   /^[0-9 a-zA-Z\s]+$/;//Number Only and Letter Only

        if(!strexp1.test(numberText)){
            $("#smmessage").text("Numbers and Letter: Example:14B or 14").show().css("color", "red");
        }  else {
            $("#smmessage").text("").show();
        }    

    }
      
});//end

//for email address
function mailVal(){
    var lia = document.getElementById('emaila').value;//email textbox 1
    var lia1 = document.getElementById('emailc').value;//email textbox 2
//    var lia3 = document.getElementById('yghText').value; 
    var emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([com\co\.\in])+$/ // email pattern
    var text = /^([a-zA-Z0-9\_\.\*\#\$\%\&])+$/ 
    var exten = /^(([a-zA-Z0-9\-])+\.)+([com\co\.\in])+$/
    var exten1 = /^[0-9a-zA-Z]+$/ //letters and Number Only
    var extPa =/\S+\.\S+/;
    var enemai = document.getElementById("enemai");//no email
    var dnemai = document.getElementById("dnemai");//decline
    var defau = document.getElementById("default");//default
    var clea = document.getElementById("clear");//clear
    var yahoo = document.getElementById("eyahoo");//yahoo
    var gmail = document.getElementById("egmail");//gmail
    var hotmail = document.getElementById("ehotmail");//hotmail
    var aol = document.getElementById("eaol");//aol
//    var ymail = document.getElementById("eymail");//ymail
//    var outlook = document.getElementById("eoutlook");//outlook
    var other = document.getElementById("eother");//other
    var domain = document.getElementById("emaile'");
//    var thg = new Date();
//    var yokr = thg.toLocaleTimeString();
    var strEmail;
   
    if(dnemai.checked){
        document.getElementById('emaila').disabled = true;
        document.getElementById('emailc').disabled = true;
        document.getElementById('domain').disabled = true;
        document.getElementById('addEmail').disabled = true;
        //document.getElementById('clear').style.display = "block";
    }else if(clea.checked){
        $('#emaila,#emailc,#domain,#addEmail').val("");
        document.getElementById('emaila').disabled = false;
        document.getElementById('emailc').disabled = false;
        document.getElementById('addEmail').disabled = false;
        
    }else if(!clea.checked && !dnemai.checked ){
        if(lia.length == 0){
            document.getElementById('emaila').focus();
            document.getElementById("ddmessage").innerHTML = "<font color = 'red'>Enter User Name </font>"
            return false;
        }else if(lia.length > 0){
            document.getElementById('emailType').style.display = "block";
            document.getElementById("ddmessage").innerHTML = "<font color = 'red'>Greater Than 1</font>"
            return false;
        }else {
            document.getElementById("ddmessage").innerHTML = "<font color = 'red'>Thank You</font>"
            return false;
        }
       
    }else{
        document.getElementById('ddmessage').innerHTML = "";
        return true;
    }
}//end  of mailVal()

//for credit card information
    function brano(){
        var expt = /^[a-zA-Z]+$/;
        var expt1 =/^[a-zA-Z\s]+$/;//allow space between names
        var refe = document.getElementById('rfname').value;//first Name
        var mefe = document.getElementById('rmname').value;//middle 
        var lefe = document.getElementById('rlname').value;//last Name
           if(refe.length == ''){
                document.getElementById("rtName").innerHTML="<font color = 'red'>Enter First Name'</font>";
                return false; 
            } else if(!refe.match(expt)){
                document.getElementById("rtName").innerHTML="<font color = 'red'>First Name:Letters Only'</font>";
                return false;
            }else if(mefe.length == ''){
               document.getElementById("rtName").innerHTML=""
                return false;
            }else if(!mefe.match(expt)){
               document.getElementById("rtName").innerHTML="<font color = 'red'>Middle Name:Letters Only'</font>";
                return false;
            } else if(lefe.length == ''){
               document.getElementById("rtName").innerHTML="<font color = 'red'>Enter Last Name'</font>";
                return false;
            } else if(!lefe.match(expt1)){
               document.getElementById("rtName").innerHTML="<font color = 'red'>Last Name:Letters Only</font>";
                return false;
            } else{
               document.getElementById("rtName").innerHTML="";
                return true;
            }
               
        }//end of function


function billingAddress(){
        var bill = document.getElementById('billinga').value;//building number
        var bill1 = document.getElementById('billinga1').value;//street Name 
        var bill2 = document.getElementById('billinga3').value;//zip
        var bill3 = document.getElementById('billinga4').value;//City
        var bill4 = document.getElementById('billinga5').value;//State 
        //clear zip code checkbox
        var cbutton = document.getElementById('bacButton');//clear button
        //pattern
        var pattern = /^[0-9]+$/;
        var pattern1 = /^[0-9a-zA-Z\s]+$/;
        var pattern2 =/^[a-zA-Z\s]+$/;
        var pattern3 =/^[a-zA-Z]+$/;
        
            if(!bill.match(pattern)){
                document.getElementById('billinga').focus();
                document.getElementById("billMess").innerHTML="<font color = 'red'>Billing Address Building 'Numbers Only'</font>";
                return false; 
            }else if(!bill1.match(pattern1)){
                document.getElementById('billinga1').focus();
                document.getElementById("billMess").innerHTML="<font color = 'red'>Street Name 'Numbers and Letter Only'</font>";
                return false;
            } else if(!bill2.match(pattern)){
                document.getElementById('billinga3').focus();
                document.getElementById("billMess").innerHTML="<font color = 'red'> Billing Zip 'Number Only'</font>";
                return false;
            }else if(!bill3.match(pattern2)){
                document.getElementById('billinga4').focus(); 
                document.getElementById("billMess").innerHTML="<font color = 'red'> Billing City 'Letters Only'</font>";
                return false;
            }else if(!bill4.match(pattern3)){
                document.getElementById('billinga5').focus(); 
                document.getElementById("billMess").innerHTML="<font color = 'red'> Billing State 'Letter Only'</font>";
                return false;
            }else{
                document.getElementById("billMess").innerHTML="";
                return true; 
            }
}// end if function billingAddress()

//Special Access/Gate Validation
function sag(){
    //Special Access/Gate radio button
    var saBut = document.getElementById('acYes');//yes
    var saBut1 = document.getElementById('acNO');//no
     //Special Access/Gate :Gate Access
    var ah1 = document.getElementById('ahGate');//gate
    var ah2 = document.getElementById('ahGuard');//guard
    var ah3 = document.getElementById('ahRegular');//regular
    //gate textbox
    var gText = document.getElementById('gateText').value;//gate textbox
    //Guard Shack Request radio button (gate hidden div)
    var gsr = document.getElementById('gshcb');//Call Before
    var gsr1 = document.getElementById('gshtm');// Text Message
    //Guard radio button Guard and Homeowner
    var gsrTe = document.getElementById('gsrTe');//Techician
    var gsrHm = document.getElementById('gsrHm');//Homeowner
    //Textbox for Techician
    var gstext = document.getElementById('gsText').value;//text to enter phone number
    ////Textbox for Homeowner
    var hwgs = document.getElementById('hmText').value;//text box to mobile number
    //pattern for phone number
    var ppatt =/^\d{3}-\d{3}-\d{4}$/;
    //pattern
    var saPat = /^[0-9]+$/;
    //Special Parking 
    var pyn1 = document.getElementById('py');//yes
    var pyn2 = document.getElementById('pn');//no
    //textarea
    var messpo = document.getElementById("messpost2");
    // Business radio button
    var busin = document.getElementById('business');
    if(!saBut.checked && !saBut1.checked){
        document.getElementById("sagMess").innerHTML="<font color = 'red'> Answer Question: Special Access/Gate'</font>";
        return false;
    } else if(saBut.checked){
         if(!ah1.checked && !ah2.checked && !ah3.checked){
           document.getElementById("sagMess").innerHTML="<font color = 'red'> Answer Question: Gate Access'</font>";
           return false;
        } else if(ah1.checked){
           if(gText.length == 0){
                document.getElementById("sagMess").innerHTML="<font color = 'red'> Enter Gate Code'</font>";
                return false;
           }else if(!gText.match(saPat)){
                document.getElementById("sagMess").innerHTML="<font color = 'red'> Numbers Only'</font>";
                return false;
           } else {
                $('.sppyn').show();//special Parking
                document.getElementById("sagMess").innerHTML="";
                return false;
           } 
        } else if(ah2.checked){
            if(!gsr.checked && !gsr1.checked){
                document.getElementById("sagMess").innerHTML="<font color = 'red'>Guard Shack Request: Select Option'</font>";
                return false;
            }else if(gsr.checked) {
               $('#gsrDiv1').show();
                  document.getElementById("sagMess").innerHTML="<font color = 'red'>Techician is checked'</font>";
                if(!gsrTe.checked && !gsrHm.checked ){
                    document.getElementById("sagMess").innerHTML="<font color = 'red'>Will Techician...'</font>";
                }else if(gsrTe.checked){
                    $('#gsrGSD').show();//Techician Hidden div
                    $('#gsrHMN').hide();//Homeowner
                    $('#hmText').val('');//Clear Textbox for Homeowner if Techicican is check
                    if(gstext == 0){
                       $('.sppyn').hide();//special Parking
                       document.getElementById("sagMess").innerHTML="<font color = 'red'>Enter Guard : Phone Number'</font>";
                   } else if(!gstext.match(ppatt)) {
                       $('.sppyn').hide();//special Parking
                        document.getElementById("sagMess").innerHTML="<font color = 'red'>Enter Guard : Phone Number do not match'</font>";
                   } else {
                       $('.sppyn').show();//special Parking
                        document.getElementById("sagMess").innerHTML="";
                   }
                }else if(gsrHm.checked){
                    $('#gsrHMN').show();//Homeowner
                    $('#gsrGSD').hide();//Techician Hidden div
                    $('#gsText').val('');//Clear Textbox for Techician if Homeowner is check
                    if(hwgs == 0){
                        $('.sppyn').hide();//special Parking
                       document.getElementById("sagMess").innerHTML="<font color = 'red'>Homeowner:Enter Mobile Phone Number for Text '</font>";
                   }else if(!hwgs.match(ppatt)) {
                       $('.sppyn').hide();//Special Parking
                       document.getElementById("sagMess").innerHTML="<font color = 'red'>Homeowner:Phone Number Example 555-789-7456 '</font>"; 
                   } else{
                      $('.sppyn').show();//special Parking
                       document.getElementById("sagMess").innerHTML="";  
                   }
                }

           } else {
                $('.sppyn').show();//special Parking
                document.getElementById("sagMess").innerHTML="";
                return false;
           } 
        }
    } else if(saBut1.checked){
        if(!pyn1.checked && !pyn2.checked){
           $('.sppyn').show();//special Parking
           document.getElementById("sagMess").innerHTML="<font color = 'red'> Special Parking Selection'</font>"
           return false;
        } else{
            $('.sppyn').show();//special Parking
            document.getElementById("sagMess").innerHTML=""
           return false;
        }
    } else if(busin.checked){
        $('.offerOption').hide();//special Parking
        document.getElementById("sagMess").innerHTML="<font color = 'red'> Hide Question: Are you the homeowner?'</font>"
        return false;
    } else{
        $('.sppyn, .cccDiv').show();//special Parking
        document.getElementById("sagMess").innerHTML=""
        return true;
    } 

}//end of function sag()
      
function building(){
    var b0 = document.getElementById('buyes');//yes
    var b1 = document.getElementById('buno');//no  
    //no hidden div validation for text and radio button
    var bn0 = document.getElementById('prYes');//yes for question "Will you be responsible for paying repairs"
    var bn1 = document.getElementById('prNo');//no for question "Will you be responsible for paying repairs"
    //radio button for Question;"Will the tenet, Landlord or both are responsible for paying for repairs"
    var tlb0 = document.getElementById('tlb0');//Tenant
    var tlb1 = document.getElementById('tlb1');//Landlord
    //Question: "Do you have an exceeding amount?" hidden div for
    var ea0 = document.getElementById('eamou1');//yes 
    var ea1 = document.getElementById('eamou2');//no 
    //Yes radio button validation textbox for Tenent and Broker Agent/Owner Amount
    var tbao = document.getElementById('tenet').value;//Tenent
    var tbao1 = document.getElementById('baom').value;//Broker/Owner
    //pattern
    var dollar  = /^\$\d+([.][0-9]+)?$/;
   

    if (!b0.checked && !b1.checked){
       document.getElementById("businB").innerHTML="<font color = 'red'> Answer Question:Are you the building owner?'</font>";
    } else if(b1.checked) {
        if(!tlb0.checked && !tlb1.checked){
            document.getElementById("businB").innerHTML="<font color = 'red'> Answer Question: Will you be responsible for paying repairs?'</font>";
        }else if(tlb0.checked){
             $('.eamount').show();//show question "Do you have an exceeding amount?"
             document.getElementById("businB").innerHTML="<font color = 'red'> Answer Question: Do you have an exceeding amount?'</font>";
             if(!ea0.checked && !ea1.checked){
                document.getElementById("businB").innerHTML="<font color = 'red'> Answer Question: Do you have an exceeding amount? Yes or No'</font>";
             }else if(ea0.checked){
                $('.tbaoDiv').show();//show question: "Tenent and Broker Agent" hide nd div
                if(tbao.length == 0){
                   document.getElementById("businB").innerHTML="<font color = 'red'> Do you have an exceeding amount?: Enter Dollar Amount'</font>"; 
                }else if(!tbao.match(dollar)){
                   document.getElementById("businB").innerHTML="<font color = 'red'> Example: $455.00'</font>"; 
                }else if(tbao1.length == 0){
                   document.getElementById("businB").innerHTML="<font color = 'red'> Do you have an exceeding amount?: Enter Broker/Owner'</font>"; 
                }else if(!tbao1.match(dollar)){
                   document.getElementById("businB").innerHTML="<font color = 'red'> Example: $455.00'</font>";   
                } else{
                    $('#bciDiv').show();//show question "Do you have an exceeding amount?"
                    building1();
                  document.getElementById("businB").innerHTML=""  
                }
            } else if(ea1.checked){
                $('.tbaoDiv,#bciDiv').hide();//hide question: "Tenent and Broker Agent" hide nd div
                $('#tenet,#baom').val('');//clear textbox
                $('.mailBusiness').show();//show next question"Is your business or company mailing and service address the same"
                document.getElementById("businB").innerHTML=""; 
                building1();
            } else{
                 document.getElementById("businB").innerHTML="";
            }
        } else if(tlb1.checked){
             $('.eamount').hide();//hide question "Do you have an exceeding amount?"
             $('#bciDiv').show();//show question "Contact Information"
             $('#tenet,#baom').val('');//clear textbox
            document.getElementById("businB").innerHTML="";
        } else{
            document.getElementById("businB").innerHTML="";
        } 
    } else{
        document.getElementById("businB").innerHTML="";
    }
}//end of function building()

function buildingB(){
	var owner = document.getElementById('owOccup');//radio button Owner Leased
	var leased = document.getElementById('busLease');//rado button Leased
	
	if (!owner.checked && !leased.checked){
		document.getElementById("businB").innerHTML="<font color = 'red'> Select either Owned Occuppied or Leased?</font>"; 
        $('.occupiedDiv').hide();
	} else{
		document.getElementById("businB").innerHTML=""; 
	}

}

function arrival(){
	var name =  document.getElementById('fnBusin').value= document.getElementById('fnBusin').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });//first name with function to captialize the first letters
	var name1 = document.getElementById('lnBusin').value= document.getElementById('lnBusin').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });//last name with function to captialize the first letters
    var ph  = document.getElementById('phBusin').value//phone number
    var phe = document.getElementById('phBusin1').value//phone number extenison
    //pattern
    var ei = /^[a-zA-Z]+$/;//letter only
    var ei1 =/^[a-zA-Z\s]+$/;//letter only with space
    var phex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;//phone number
	
        if(name.length == 0){
                document.getElementById("techDiv").innerHTML="<font color = 'red'> Enter First Name</font>"; 
        }else if(!name.match(ei)){
                document.getElementById("techDiv").innerHTML="<font color = 'red'> First Name: Letters Only</font>";
                $('.mailBusiness, .tradeDiv').hide();
        }else if(name1.length == 0) {
                document.getElementById("techDiv").innerHTML="<font color = 'red'> Enter Last Name</font>";  
        }else if(!name1.match(ei1)){
                document.getElementById("techDiv").innerHTML="<font color = 'red'> Last Name: Letters Only</font>";
                $('.mailBusiness, .tradeDiv').hide();
        }else if(ph.length == 0) {
                document.getElementById("techDiv").innerHTML="<font color = 'red'> Enter Phone Number</font>";
        }else if(!ph.match(phex)){
                document.getElementById("techDiv").innerHTML="<font color = 'red'> Number and Dash Only:123-456-4577</font>";
        }else if(phe.length == 0) {
            document.getElementById("techDiv").innerHTML="<font color = 'red'> Greater Than One</font>";  
        } else {
            document.getElementById("techDiv").innerHTML=""; 
            $('.mailBusiness, .tradeDiv').show();
        }
    }//end of arrival function

        function Payment(){
            var pay1 = document.getElementById('ccc1');//Checking
            var pay2 = document.getElementById('ccc2');//Credit
            
            if(!pay1.checked && !pay2.checked){
                document.getElementById("cccMess").innerHTML="<font color = 'red'> Select Check or Credit</font>"; 
                //$('.setupDiv').hide();
                  $('.offerOption').hide();
            }else if(pay1.checked || pay2.checked){
                if ($("#business").prop('checked')) {
                    alert("Business button checked");
                    $(".setupDiv").show();
                }
                 
                if($("#residential").prop('checked')){
                    $(".setupDiv").hide();
                    $(".offerOption").show();
                    alert("Residential Button is checked");
                }
               
            }else{
                document.getElementById("cccMess").innerHTML=""; 
                //$('.setupDiv').show();
                 $('.offerOption').show();
            }
        }
        
        
                

function Payment0(){ 
    var zy1 = document.getElementById('account1');//Checking
    var zy2 = document.getElementById('account2');//Credit
//    var pay1 = document.getElementById('ccc1');//Checking
//    var pay2 = document.getElementById('ccc2');//Credit

    if(!zy1.checked && !zy2.checked){
        document.getElementById("setupMess").innerHTML="<font color = 'red'> Select Check or Credit</font>";
        $('.offerOption').hide();
    }else{
        document.getElementById("setupMess").innerHTML=""; 
         $('.offerOption').show();
    }
}//end of function payment0()



//function for Business/Landlord Contact Infomation
function building1(){
    var bcomp = document.getElementById('busComp').value;//Company Name
    var bcomp0 = document.getElementById('fn1').value;//First Name
    var bcomp1 = document.getElementById('lnl').value;//Last Name
    var bcomp2 = document.getElementById('pn1').value;//Phone Number
    //pattern
    var p1 = /^[0-9a-zA-Z\s]+$/;
    var p2 = /^[a-zA-Z]+$/;

     if(bcomp.length == 0){
        document.getElementById("businB1").innerHTML="<font color = 'red'>Enter Company Name</font>" 
     } else if(!bcomp.match(p1)){
       document.getElementById("businB1").innerHTML="<font color = 'red'>Letters and Numbers Only</font>"  
     } else if(bcomp0.length == 0){
        document.getElementById("businB1").innerHTML="<font color = 'red'>Enter First Name</font>"  
     } else if(!bcomp0.match(p2)){
        document.getElementById("businB1").innerHTML="<font color = 'red'>Letters and Numbers Only</font>" 
     } else if(bcomp1.length == 0){
        document.getElementById("businB1").innerHTML="<font color = 'red'>Enter Last Name</font>" 
     } else if(!bcomp1.match(p2)){
        document.getElementById("businB1").innerHTML="<font color = 'red'>Letters and Numbers Only</font>"  
     } else if(bcomp2.length == 0){
        $('#commPackage').hide();//hide question "Contact Information"
        document.getElementById("businB1").innerHTML="<font color = 'red'>Enter Last Name</font>"  
     } else{
        $('#commPackage').show();//show question "Contact Information"
        document.getElementById("businB1").innerHTML=""  
     }
}


