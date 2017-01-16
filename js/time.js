

var work = 0;
var trail = 0;
var t1;
var t2;
var time_on = 0;
var time_on2 = 0;
var rend;

function time1(){
    document.getElementById('okay0'),innerHTML = "Time1;" + work;
    work = new Date();
    t1 = setTimeout("nameTime()", 1000);
}

function nameTime(){
    var value1 = document.getElementById('fname').value;
    if (value1.length <= 1){
        time_on = 1;
        time1();
    }else if(value1.length > 1){
        clearTimeout(t1);
        time_on = 0;
        getDate();
    }
}

function time2(){
    document.getElementById('okay1'),innerHTML = "Time1;" + trail;
    trail = new Date();
    t2 = setTimeout("lastTime()", 1000);
}

function lastTime(){
    var value2 = document.getElementById('fname').value;
    if (value2.length <= 1){
        time_on2 = 1;
        time2();
    } else if(value2.length){
        clearTimeout(t2);
        time_on2 = 0;
        getDate();
    }
}

 //function for to calculate time
 function getDate(){
     var sec = rend/1000;
     sec = sec.toFixed(2);
     var min2 = sec/60;
     rend = work-trail;
     var roundMin = Math.round(min2);
    var fixedMins = Number(min2).toFixed(2);
    var remainder = fixedMins.toString().split(".")[1];
     var decimal = "."+remainder;
     var leftover = decimal * 60;
     leftover = Math.round(leftover);
     document.getElementById("okayend").innerHTML = "min: " + min2 + " sec: " + leftover;
 }//end of function


//validation for first name
function namfVal() {
    var exp = /^[a-zA-Z]+$/;
    var name = document.getElementById('fname').value;
    var work = new Date();
        if (name.length ==0){
            document.getElementById('fname').focus();
            document.getElementById("emessage").innerHTML="<font color = 'red'> Must Enter First Name </font>"
            document.getElementById("okay0").innerHTML = work;
            $(".alert").show();
            return false;
        }else if(!name.match(exp)){
            document.getElementById('fname').focus();
            document.getElementById("emessage").innerHTML="<font color = 'red'> Letters Only </font>"
            $(".alert").show();
            return false;
        }else{
            document.getElementById("emessage").innerHTML="";
            clearTimeout(t);
            return true;
        }
}//end of function

//validation for last name
function namlVal() {
    var exp = /^[a-zA-Z]+$/;
    var lname = document.getElementById('lname').value;
    var trail = new Date();
    //var road=trail.toLocaleTimeString();
        if (lname.length == 0){
            document.getElementById('lname').focus();
            document.getElementById("emessage").innerHTML="<font color = 'red'> Must Enter Last Name </font>"
            document.getElementById("okay2").innerHTML= trail;
            $(".alert").show();
            return false;
        }else if(!lname.match(exp)){
            document.getElementById('lname').focus();
            document.getElementById("emessage").innerHTML="<font color = 'red'> Letters Only </font>"
            $(".alert").show();
            return false;
        }else{
            document.getElementById("emessage").innerHTML="";
            return true;
        }
}//end of function

// //function for to calculate time
// function getDate(){
//     var sec = rend/1000;
//     sec = sec.toFixed(2);
//     var min2 = sec/60;
//     rend = work-poe-trail;
//     var roundMin = Math.round(min2);
//     var fixedMins = Number(min2).toFixed(2);
//     var remainder = fixedMins.toString().split(".")[1];
//     var decimal = "."+remainder;
//     var leftover = decimal * 60;
//     leftover = Math.round(leftover);
//     document.getElementById("okayend").innerHTML = "min: " + min2 + " sec: " + leftover;
// }//end of function