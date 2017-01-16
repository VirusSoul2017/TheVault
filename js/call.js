
var num = '123-456-7811'//Service Repa
var num1 = '123-456-7821'//Schedule Service
var num2 = '123-456-7831'//Replacement
var num01 = '123-456-7822'//Schedule Service radoio butto auto click Advertisement

//setting the textbox
function displayNum(){
    var tn = document.getElementById('cusName').value;//first name
    var tn1 = document.getElementById('cuslName').value;//last name
    var tn2 = document.getElementById('inpho').value;//phone number
    //var tn3 = document.getElementById('idNum').value;//phone number span display
     localStorage.setItem("cusName", tn);
     localStorage.setItem("cuslName", tn1);
     localStorage.setItem("inpho", tn2);
     //localStorage.setItem("idNum", tn2);
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



 function displayImg(){
   var showIm = $('#tname').val();
      
      if(showIm == num){
          $("#ad1").show();
          $("#ad2,#ad3, #ad4").hide();
          $("#serep, #sservice").css("background-color", "yellow");
//      }else if(showIm == num1) { 
//          $(" #sservice").css("background-color", "yellow");
//          $(" #serep").css("background-color", "");
//          $('#ad2').show();
//          $('#ad1, #ad3').hide();
//      } else if(showIm == num2) { 
//          $("#reservice").css("background-color", "yellow");
//          $("#serep, #sservice,").css("background-color", "");
//          $('#ad4').show();
//          $('#ad1, #ad2, #ad4').hide();
      } else {
          $('#ad1, #ad2, #ad3').hide();
          $("#serep, #sservice, #reservice").css("background-color", "");
      }
}//end of function