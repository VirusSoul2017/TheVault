/*this is a script for the representative to read while on the phone with the customer */
 
//function for alert box
function repScript(){
    // alertbox show message
      $(".alert").hide()
      //$(".alert alert-danger").hide()
      // Onetst();
}
//display scripts (with tab and click function)
// for phone selection for all the pages have the same id
$(document).ready(function(){
    
    //for phone number
    // $('#pho1').keydown(function(){
    //    document.getElementById("showScript").innerHTML="<font color = 'black'> You made right choice calling Comfort Expert, this is (name) how I help you today? Also the number you are calling from is you cell/business....? (Apologize and reassured)  </font>"
    //     $(".alert").show(); 
    // });
    // $('#pho1').click(function(){
    //     document.getElementById("showScript").innerHTML="<font color = 'black'> You made right choice calling Comfort Expert, this is (name) how I help you today? Also the number you are calling from is you cell/business....? (Apologize and reassured)  </font>"
    //     $(".alert").show();
    // });
    //for textphone for pages Service Repair, Schedules  Services,Replacement,Reschedule (Service,Replacement)
    $('#textphone').keyup(function(){
        document.getElementById("showScript2").innerHTML="<font color = 'black'> What number would to text  you when someone in route? </font>"
        $(".alert").show();
    });
    $('#textphone').click(function(){
        document.getElementById("showScript2").innerHTML="<font color = 'black'> What is the best contact number...Can this number receive text for techican arrival alert ...? </font>"
        $(".alert").show();
    });

    //for first name is for all pages 
    $('#fname').keyup(function(){
        document.getElementById("showScript1").innerHTML="<font color = 'black'>May I have your first name, please?....Verfiy name if show on caller id </font>"
        $(".alert").show();

    });
    $('#fname').click(function(){
         document.getElementById("showScript1").innerHTML="<font color = 'black'>May I have your first name, please?....Verfiy name if show on caller id </font>"
        $(".alert").show();
    });
    //for middle name all pages
    $('#mname').keyup(function(){
        document.getElementById("showScript2").innerHTML="<font color = 'black'>What is your middle name or middle inital</font>"
        $(".alert").show();
    });
    $('#mname').click(function(){
        document.getElementById("showScript2").innerHTML="<font color = 'black'>What is your middle name or middle inital</font>"
        $(".alert").show();
    });
    
    //for last name of all pages
    $('#lname').keyup(function(){
        document.getElementById("showScript3").innerHTML="<font color = 'black'>May I have your last name, please?.... Verfiy name if show on caller id </font>"
        $(".alert").show();
    });
    $('#lname').click(function(){
        document.getElementById("showScript3").innerHTML="<font color = 'black'>May I have your last name, please?.... Verfiy name if show on caller id </font>"
        $(".alert").show();
    });

    //for address for 
    $('#addressnum').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What is service address house or builidng number (callerId).....Verify the address </font>"
        $(".alert").show();
    });
     $('#addressnum').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What is service address house or builidng number (callerId).....Verify the address </font>"
        $(".alert").show()
    });
    // for street
    $('#street').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is  your street name ? .....Verify the street address  </font>"
        $(".alert").show()
    });
    $('#street').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is  your street name ? .....Verify the street address   </font>"
        $(".alert").show()
    });
    // for apt number
    $('#aptnum').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is  your apartment number ?  </font>"
        $(".alert").show()
    });
    $('#aptnum').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is  your apartment number ?  </font>"
        $(".alert").show()
    });
    //for address 
    $('#address').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What is address house or builidng number (callerId).....Verify the address </font>"
        $(".alert").show()
    });
    $('#address').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What is address house or builidng number (callerId).....Verify the address </font>"
        $(".alert").show()
    });
    

    //for zip
    $('#zip').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is  your zip code ?  </font>"
        $(".alert").show()
    });
    $('#zip').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is  your zip code ?  </font>"
        $(".alert").show()
    });
    // for city and state to verify
    $('#city').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is the correct city ?  </font>"
        $(".alert").show()
    });
    $('#city').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is the correct city ?  </font>"
        $(".alert").show()
    });
    
    //for state
    $('#state').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is the correct state  </font>"
        $(".alert").show()
    });
    $('#city').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is the correct city ?  </font>"
        $(".alert").show()
    });
    //for email
    // $('#email').keyup(function(){
    //     document.getElementById("showScript8").innerHTML="<font color = 'black'> May I have your email address? </font>"
    //     $(".alert").show()
    // });
    // $('#email').click(function(){
    //     document.getElementById("showScript8").innerHTML="<font color = 'black'> May I have your email address?....Would like add an additional email address? </font>"
    //     $(".alert").show()
    // });
    // $('#email').change(function(){
    //     document.getElementById("showScript8").innerHTML="<font color = 'black'> May I have your email address?....Would like add an additional email address? </font>"
    //     $(".alert").show()
    // });
    $('#addEmail').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Would you like to add additional? </font>"
        $(".alert").show()
    });
    
    // for unit age
    $('#age').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the age of your unit? </font>"
        $(".alert").show()
    });
    $('#age').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the age of your unit? </font>"
        $(".alert").show()
    });
    // for number of units
    $('#agenum').keyup(function(){
        var room = document.cdsquestions.agenum.value;
        if (room <= 1){
            document.getElementById("showScript").innerHTML="<font color = 'black'> How many will be service? </font>"
            $(".alert").show()
        }else if (room > 2){
            document.getElementById("showScript").innerHTML="<font color = 'red'>We are offer a special  today.....?</font>"
        $(".alert").show()
        }
    });
    //for hidden question "Number of a additional system to check"
    $('#onal').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> How  many system would like to check </font>"
            $(".alert").show()
    });
    $('#onal').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> How  many system would like to check </font>"
            $(".alert").show()
    });

    // for time morning
    $('#morning').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> The best time will be between...? </font>"
        $(".alert").show()
    });
    $('#morning').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> The best time will be between...? </font>"
        $(".alert").show()
    });
    // for time afternoon
    $('#afternoon').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> The best time will be between...? </font>"
        $(".alert").show()
    });
    $('#afternoon').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> The best time will be between...? </font>"
        $(".alert").show()
    });
    // for time evening
    $('#evening').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> The best time will be between...? </font>"
        $(".alert").show()
    });
    $('#evening').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> The best time will be between...? </font>"
        $(".alert").show()
    });
    // for media
    $('#media').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> How did you hear about us?</font>"
        $(".alert").show()
    });
    $('#media').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> How did you hear about us?</font>"
        $(".alert").show()
    });
    // for refer
    $('#refer').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> The person who refer you to us...? </font>"
        $(".alert").show()
    });
    $('#refer').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> The person who refer you to us...? </font>"
        $(".alert").show()
    });
    // for event
    $('#event').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Which event did...? </font>"
        $(".alert").show()
    });
    $('#event').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Which event did...? </font>"
        $(".alert").show()
    });
    // for other
    $('#otherd').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Can you please how did you find us? </font>"
        $(".alert").show()
    });
    $('#otherd').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Can you please how did you find us? </font>"
        $(".alert").show()
    });
    
    // for direct
    $('#direct').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the mailer name or flyer?</font>"
        $(".alert").show()
    });
    $('#direct').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the mailer name or flyer?</font>"
        $(".alert").show()
    });
    // for radio
    $('#radio').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the  radio station?</font>"
        $(".alert").show()
    });
    $('#radio').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the  radio station?</font>"
        $(".alert").show()
    });
    // for newpaper
    $('#newpaper').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the newpaper?</font>"
        $(".alert").show()
    });
    $('#newpaper').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the newpaper?</font>"
        $(".alert").show()
    });
   // for Internet
    $('#internet').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What internet service did you use?</font>"
        $(".alert").show()
    });
    $('#internet').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What internet serice did you use?</font>"
        $(".alert").show()
    });
    // for question"is mailing and service address the same....?
    $('#yesm').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is your mailing and service address the same?</font>"
        $(".alert").show()
    });
    $('#yesm').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is your mailing and service address the same?</font>"
        $(".alert").show()
    });
    $('#nom').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What you mailing address?</font>"
        $(".alert").show()
    });
    $('#nom').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What you mailing address?</font>"
        $(".alert").show()
    });
    $('#saddress').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What your house or building number?</font>"
        $(".alert").show()
    });
    $('#saddress').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What your house or building number?</font>"
        $(".alert").show()
    });
    $('#saddress1').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your street?</font>"
        $(".alert").show()
    });
    $('#saddress1').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your street?</font>"
        $(".alert").show()
    });
    $('#saddress2').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your .......?</font>"
        $(".alert").show()
    });
    $('#saddress2').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your .......?</font>"
        $(".alert").show()
    });
    $('#szip').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your zip?</font>"
        $(".alert").show()
    });
    $('#szip').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your zip?</font>"
        $(".alert").show()
    });
    $('#scity').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Verify the city?</font>"
        $(".alert").show()
    });
    $('#scity').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Verify the city?</font>"
        $(".alert").show()
    });
    $('#sstate').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the state.....?</font>"
        $(".alert").show()
    });
    $('#sstate').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the state.....?</font>"
        $(".alert").show()
    });
     //for question"are you the homeowner"
    $('#hyes').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Are you the homeowner?</font>"
        $(".alert").show()
    });
    $('#hyes').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Are you the homeowner?</font>"
        $(".alert").show()
    });
    $('#hyes').focus(function(){
        document.getElementById("showScript20").innerHTML="<font color = 'black'> Script Above the question</font>"
        $(".alert").show()
    });
    $('#hno').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Since you not the homeowner........?</font>"
        $(".alert").show()
    });
    $('#hno').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Since you not the homeowner........?</font>"
        $(".alert").show()
    });
    //for question "unit concern"
    $('#oyes').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is your unit working?</font>"
        $(".alert").show()
    });
    $('#oyes').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is your unit working?</font>"
        $(".alert").show()
    });
    $('#noo').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> what issue are having with unit?</font>"
        $(".alert").show()
    });
    $('#noo').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> what issue are having with unit?</font>"
        $(".alert").show()
    });
    //for cooling
    // $('#cooling').keyup(function(){
    //     document.getElementById("showScript").innerHTML="<font color = 'black'> Are your inside and outside unit running?</font>"
    //     $(".alert").show()
    // });
    // $('#cooling').click(function(){
    //     document.getElementById("showScript").innerHTML="<font color = 'black'> Are your inside and outside unit running?</font>"
    //     $(".alert").show()
    // });
    // for heating
    // $('#heating').keyup(function(){
    //     document.getElementById("showScript").innerHTML="<font color = 'black'> Are your ........?</font>"
    //     $(".alert").show()
    // });
    // $('#heating').click(function(){
    //     document.getElementById("showScript").innerHTML="<font color = 'black'> Are your ........?</font>"
    //     $(".alert").show()
    // });
    //for frozen
    $('#frozen').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> How much frost is on the heat pump?</font>"
        $(".alert").show()
    });
    $('#frozen').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> How much frost is on the heat pump?</font>"
        $(".alert").show()
    });
    //for water
    $('#water').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Please turn off your unit( If Situation: Water everywhere)</font>"
        $(".alert").show()
    });
    $('#water').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Please turn off your unit( If Situation: Water everywhere)</font>"
        $(".alert").show()
    });
    // for room not cooling
    $('#rnc').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is......?</font>"
        $(".alert").show()
    });
    $('#water').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Please turn off your unit( If Situation: Water everywhere)</font>"
        $(".alert").show()
    });
    //for smelling smoke
    $('#ssg').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Please leave the house! Call the fire department once everyone's  outside and safe.</font>"
        $(".alert").show()
    });
    $('#ssg').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Please leave the house! Call the fire department once everyone's  outside and safe.</font>"
        $(".alert").show()
    });
    //for carbon monoxide detector
    $('#cmd').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> If the detector is going off...Please open the windows, and turn off the unit </font>"
        $(".alert").show()
    });
    $('#cmd').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> If the detector is going off...Please open the windows, and turn off the unit </font>"
        $(".alert").show()
    });
    //for furnace 
     $('#fbs').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Please turn off your furnace </font>"
        $(".alert").show()
    });
    $('#fbs').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Please turn off your furnace </font>"
        $(".alert").show()
    });
    //for heat pump frozen  
    $('#hpf').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> How much frost is on the heat pump?</font>"
        $(".alert").show()
    });
    $('#hpf').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> How much frost is on the heat pump?</font>"
        $(".alert").show()
    });
    //for question "are you and your spouse general home.....?"
    $('#asevening').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Are  you and your spouse generally home during the day even or weekend be appointment better?...evening</font>"
        $(".alert").show()
    });
    $('#asevening').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Are  you and your spouse generally home during the day even or weekend be appointment better?....evening</font>"
        $(".alert").show()
    });
    $('#asweekend').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Are  you and your spouse generally home during the day even or weekend be appointment better?....weekend</font>"
        $(".alert").show()
    });
    $('#asweekend').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Are  you and your spouse generally home during the day even or weekend be appointment better?...weekend</font>"
        $(".alert").show()
    });
    // for question"what day is best for you"
    $('#today').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the best day for you today or tommorrow?</font>"
        $(".alert").show()
    });
    $('#today').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Are  you and your spouse generally home during the day even or weekend be appointment better?</font>"
        $(".alert").show()
    });
    $('#tomorrow').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What day will be best for you?</font>"
        $(".alert").show()
    });
    $('#tomorrow').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What day will be best for you?</font>"
        $(".alert").show()
    });
    // for question " what is the best time 
    $('#morning').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the best time for you is the morning, afternoon, evening, and asap?</font>"
        $(".alert").show()
    });
    $('#morning').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the best time for you is the morning, afternoon, evening, and asap?....what will be time morning?</font>"
        $(".alert").show()
    });
    $('#afternoon').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the best time in morning?</font>"
        $(".alert").show()
    });
    $('#afternoon').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the best time in morning?</font>"
        $(".alert").show()
    });
    $('#evening').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the best time in evening?</font>"
        $(".alert").show()
    });
    $('#evening').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the best time in evening?</font>"
        $(".alert").show()
    });
    $('#asap').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the best time for today?</font>"
        $(".alert").show()
    });
    $('#asap').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is the best time for today?</font>"
        $(".alert").show()
    });
    // question " credit card mailing and billing is the same"
    $('#byes').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is the credit card and billing and mailing address is the same?</font>"
        $(".alert").show()
    });
    $('#byes').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is the credit card and billing and mailing address is the same?</font>"
        $(".alert").show()
    });
    $('#bno').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your mailing address?</font>"
        $(".alert").show()
    });
    $('#bno').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your mailing address?</font>"
        $(".alert").show()
    });
    $('#master').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your Mastercard number?</font>"
        $(".alert").show()
    });
    $('#master').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your Mastercard number?</font>"
        $(".alert").show()
    });
    $('#visa').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your Visa card number?</font>"
        $(".alert").show()
    });
    $('#visa').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your Visa card number?</font>"
        $(".alert").show()
    });
    $('#american').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is American Express card number?</font>"
        $(".alert").show()
    });
    $('#american').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is American Express card number?</font>"
        $(".alert").show()
    });
    $('#camount').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Verify the amount... How much will you be paying today?</font>"
        $(".alert").show()
    });
    $('#camount').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Verify the amount... How much will you be paying today?</font>"
        $(".alert").show()
    });
    $('#ccnum').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Verify the card number.....</font>"
        $(".alert").show()
        //Credit card to display first nine number and show last four digit
       var cardN = document.getElementById('ccnum').value;
       $('#shoCard').text(cardN); 
       $("#shoCard").text($("#shoCard").text().replace(/.(?=.{4})/g, 'x'));
    });
    $('#ccnum').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Verify the card number.....</font>"
        $(".alert").show()
    });
    $('#expired').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your expiration date?</font>"
        $(".alert").show()
    });
    $('#expired').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your expiration date?</font>"
        $(".alert").show()
    });
    $('#ccv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your ccv number?</font>"
        $(".alert").show()
    });
    $('#ccv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your ccv number?</font>"
        $(".alert").show()
    });
    $('#caddress').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your the mailing or billling address?</font>"
        $(".alert").show()
    });
    $('#caddress').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your the mailing or billling address?</font>"
        $(".alert").show()
    });
    $('#czip').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your zip code?</font>"
        $(".alert").show()
    });
    $('#czip').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your zip code?</font>"
        $(".alert").show()
    });
    $('#ccity').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>  Verify the city</font>"
        $(".alert").show()
    });
    $('#ccity').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>  Verify the city</font>"
        $(".alert").show()
    });
    $('#cstate').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>  Verify the state.......</font>"
        $(".alert").show()
    });
    $('#cstate').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>  Verify the state....</font>"
        $(".alert").show()
    });
    //book and lost call check
    $('#lost').keyup(function(){
       document.getElementById("showScript").innerHTML="<font color = 'black'>Thank for calling</font>"
        $(".alert").show()
    });
    $('#lost').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Thank for calling</font>"
        $(".alert").show();

        //lost
            $('#lost').click(function() {
                if ($('#lost').is(':checked')) {
                    $('#ybook').attr('checked', false);
                    $('#bookHidden').hide('checked', false);
                    $('#reason').show();
                } else {
                    $('#ybook').attr('checked', false);
                    $('#bookHidden').hide('checked', false);
                }
            });

    });
    $('#ybook').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>The techican will alert you upon arrival</font>"
        $(".alert").show()
    });

    $('#ybook').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>The techican will alert you upon arrival</font>"
        $(".alert").show();
        if ($('#ybook').is(':checked')) {
            $('#bookHidden').show();
            $('#lost').attr('checked', false);
            $('#reason').hide('checked', false);
        } else {
            $('#lost').attr('checked', false);
            $('#reason').hide('checked', false);
        }

        var number = 1 + Math.floor(Math.random() * 99999);
        $('#gnumber').text(number); 

       //first name
       var fname = document.getElementById('fname').value;
       $('#shoFirst').text(fname); 

       //last name
       var lname = document.getElementById('lname').value;
       $('#shoLast').text(lname);

       //Number of resident
       var sh1 = document.getElementById('address').value;
       $('#shoANum').text(sh1);
       
       //street name
       var sh2 = document.getElementById('address1').value;
       $('#shoStre').text(sh2);

       //build type
       var sh3 = document.getElementById('address3').value;
       $('#shoPNum').text(sh3);
       
       //zip
       var sh4 = document.getElementById('zip').value;
       $('#shoZip').text(sh4);

       //state
       var sh5 = document.getElementById('city').value;
       $('#shoCity').text(sh5);

       //t
       var sh7 = document.getElementById('state').value;
       $('#shoState').text(sh7);

       //Number of system
       var sh8 = document.getElementById('agenum').value;
       $('#shoAge').text(sh8);

       //show ccv
       var sh9 = document.getElementById('ccv').value;
       $('#shoCCV').text(sh9);

       //show expire date for credit card
       var sh10 = document.getElementById('expdate').value;
       $('#shoEP').text(sh10);

        //show number of systems
        var sh11 = document.getElementById('agenum').value;
       $('#shoAge').text(sh11);

        var otherInput = document.getElementById('conOther').value;
        $('#shoConcern').text(otherInput);

    //Credit card to display first nine number and show last four digit
       // var cardN = document.getElementById('ccnum').value;
       // $('#shoCard').text(cardN); 
       // $("#shoCard").text($("#shoCard").text().replace(/.(?=.{4})/g, 'x'));
    });

    //script for confirm page
    //verify first name
    $('#firstv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the customer  first name_______?</font>"
        $(".alert").show()
    });
    $('#firstv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the customer first name_______?</font>"
        $(".alert").show()
    });
    //verfiy last name
    $('#lastv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the customer last name_______?</font>"
        $(".alert").show()
    });
    $('#lastv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the customer last name_______?</font>"
        $(".alert").show()
    });
    //verfiy service and mailing address
    $('#addressv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy house or building number</font>"
        $(".alert").show()
    });
    $('#addressv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy house or building numbe</font>"
        $(".alert").show()
    });
    //verfiy mailing address
    $('#streetv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the street name</font>"
        $(".alert").show()
    });
    $('#streetv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the street name</font>"
        $(".alert").show()
    });
    //verfiy apartment number
    $('#aptnumv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the apartment or suite number</font>"
        $(".alert").show()
    });
    $('#aptnumv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the apartment or suite number</font>"
        $(".alert").show()
    });
    // verify zip code
    $('#zipv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the zip code</font>"
        $(".alert").show()
    });
    $('#zipv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the zip code</font>"
        $(".alert").show()
    });
    // verify city
    $('#cityv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the city</font>"
        $(".alert").show()
    });
    $('#cityv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verfiy the city</font>"
        $(".alert").show()
    });
    //verify the customer concern
    $('#concernv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Repeat the customer concern</font>"
        $(".alert").show()
    });
    $('#concernv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Repeat the customer concern</font>"
        $(".alert").show()
    });
    //verify the  service fee
    $('#sfeev').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Repeat the chosen fee</font>"
        $(".alert").show()
    });
    $('#sfeev').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Repeat the chosen fee</font>"
        $(".alert").show()
    });
    // verify the date
    $('#datev').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Your appointment day will be</font>"
        $(".alert").show()
    });
    $('#datev').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Your appointment day will be</font>"
        $(".alert").show()
    });
    //verify the  time
    $('#timev').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Your appointment will be at</font>"
        $(".alert").show()
    });
    $('#timev').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Your appointment will be at</font>"
        $(".alert").show()
    });
    //the confirmation number
    $('#confirmnv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>(Click the confirmation number button)Your confirmation number is ?</font>"
        $(".alert").show()
    });
    $('#confirmnv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>(Click the confirmation number button)Your confirmation number is ? </font>"
        $(".alert").show()
    });
    //verfiy card type
    $('#cardtv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>The card you will using</font>"
        $(".alert").show()
    });
    $('#cardtv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>The card you will using</font>"
        $(".alert").show()
    });
    // verify card number
    $('#cardtnv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Your card number.....</font>"
        $(".alert").show()
    });
    $('#cardtnv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Your card number.....</font>"
        $(".alert").show()
    });
    //verfiy paying method
    $('#pmv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>This will with your credit card or checking.....</font>"
        $(".alert").show()
    });
    $('#pmv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>This will with your credit card or checking.....</font>"
        $(".alert").show()
    });
    //verfiy mailing address
    $('#phoc').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify Phone Number</font>"
        $(".alert").show()
    });
    $('#phoc').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify Phone Number</font>"
        $(".alert").show()
    });
    //verify mailing (building or house number)
    $('#textc').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify Text alert</font>"
        $(".alert").show()
    });
    $('#textc').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify Text alert</font>"
        $(".alert").show()
    });
    // verify building or resident number name
    $('#maddressv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify building or resident number</font>"
        $(".alert").show()
    });
    $('#maddressv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify building or resident number</font>"
        $(".alert").show()
    });
    //verify mailing street 
    $('#mstreetv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify street mailing location</font>"
        $(".alert").show()
    });
    $('#mstreetv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify street mailing location</font>"
        $(".alert").show()
    });
    // verify building, suite or apartment
    $('#maptnumv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify building suite or apartment</font>"
        $(".alert").show()
    });
    $('#maptnumv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify building suite or apartment</font>"
        $(".alert").show()
    });
    // verify zip
    $('#mzipv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify the zip code</font>"
        $(".alert").show()
    });
    $('#mzipv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify the zip code</font>"
        $(".alert").show()
    });
    //verify city
    $('#mcityv').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify the city</font>"
        $(".alert").show()
    });
    $('#mcityv').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify the city</font>"
        $(".alert").show()
    });
    //verify state
    $('#mstatev').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify the state</font>"
        $(".alert").show()
    });
    $('#mstatev').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify the state</font>"
        $(".alert").show()
    });
    //script for business
    $('#business').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Will this be business or resident</font>"
        $(".alert").show()
    });
    $('#business').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Will this be business or resident</font>"
        $(".alert").show()
    });
    //script for resident
    $('#resident').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What type of  service would be provide for an(a) resident or business?</font>"
        $(".alert").show()
    });
    $('#resident').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What type of  service would be provide for an(a) resident or business?</font>"
        $(".alert").show()
    });
    //script for express service
    $('#aprice').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>We have several option, we have the Express Service for the price.......</font>"
        $(".alert").show()
    });
    $('#aprice').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>We have several option, we have the Express Service for the price.......</font>"
        $(".alert").show()
    });
    //script for guaranteed
    $('#gprice').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> The quaranteed offer for only........</font>"
        $(".alert").show()
    });
    $('#gprice').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> The quaranteed offer for only........</font>"
        $(".alert").show()
    });
    //script for super saver
    $('#fprice').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> The Super saver offer for only........</font>"
        $(".alert").show()
    });
    $('#fprice').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> The Super saver offer for only........</font>"
        $(".alert").show()
    });
    // for Inbound Calls
    // $('#tname').keyup(function(){
    //     document.getElementById("showScript").innerHTML="<font color = 'black'> You made the right choose this(name),how may I help you today?</font>"
    //     $(".alert").show()
    // });
    // $('#tname').click(function(){
    //     document.getElementById("showScript").innerHTML="<font color = 'black'> You made the right choose this(name),how may I help you today?</font>"
    //     $(".alert").show()
    // });
    //for phone display
    $('#inpho').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Verify the phone number displayed....Will this be your direct number</font>"
        $(".alert").show()
    });
    $('#inpho').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Verify the phone number displayed....Will this be your direct number</font>"
        $(".alert").show()
    });

    //for Number of system to check
    $('#syche').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> How many of system would like to check</font>"
        $(".alert").show()
    });
    $('#syche').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> How many of system would like to check</font>"
        $(".alert").show()
    });

    //for Question: Would you likeus to check your additional systems, they are only__ per system?
     $('#des').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> If Yes is select..Would like for us to check all or certains unit in your home?</font>"
        $(".alert").show()
    });
    $('#des').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> If Yes is select..Would like for us to check all or certains unit in your home?</font>"
        $(".alert").show()
    });

    //for Question:Number of a additional system
    $('#besy').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> If number of  system is selected..How many would like to service or checked? </font>"
        $(".alert").show()
    });
    $('#besy').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> If number of  system is selected..How many would like to service or checked? </font>"
        $(".alert").show()
    });

    //for question:"Number of systems to check"
    $('#syche').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Number of system you would like to check? </font>"
        $(".alert").show()
    });
    $('#syche').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Number of system you would like to check? </font>"
        $(".alert").show()
    });


    //for question "Is your home gas or electric? " and for gas  selection(propane or natural) for page Service Repair, Schedule Service and Replacement
    $('#gas').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is your systems gas or electric'.... </font>"
        $(".alert").show()
    });
    $('#gas').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is your systems gas or electric'....  </font>"
        $(".alert").show()
    });

    //for electric
    $('#electric').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is your systems gas or electric'.... if ask why... We are going make sure the techican is an propane specialist </font>"
        $(".alert").show()
    });
    $('#electric').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is your systems gas or electric'....  </font>"
        $(".alert").show()
    });
    //for gas selection (propane and Natural)
    $('#propane').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> if Customer ask why .....We are going make sure the techican is an propane specialist </font>"
        $(".alert").show()
    });
    $('#propane').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> if Customer ask why .....We are going make sure the techican is an propane specialist </font>"
        $(".alert").show()
    });

    // for natural
    $('#natural').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Verify if natural gas the right selection </font>"
        $(".alert").show()
    });
    $('#natural').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Verify if natural gas the right selection </font>"
        $(".alert").show()
    });

    //for billing
    $('#invoice').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> May I have your invoice number.....  </font>"
        $(".alert").show()
    });

    $('#invoice').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> May I have your invoice number.....  </font>"
        $(".alert").show()
    });

    //for mailing address street type selection
    $('#strloc').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify...For example: 123 Street Name Ave is correct  </font>"
        $(".alert").show()
    });

    $('#strloc').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Verify...For example: 123 Street Name Ave is correct</font>"
        $(".alert").show()
    });
    //for  suite number
    $('#address2').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> If it for apartment ... May have the apartment Number....If it a home put 000</font>"
        $(".alert").show()
    });

    $('#address2').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> If it for apartment ... May have the apartment Number....If it a home put 000</font>"
        $(".alert").show()
    });


    //for phone number selection
    $('#mobile').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Will this number be your cell, business, home </font>"
        $(".alert").show()
    });

    $('#mobile').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Will this number be your cell, business, home </font>"
        $(".alert").show()
    });

    //for phone number selection
    $('#phonenumber').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your phone number </font>"
        $(".alert").show()
    });     

    $('#phonenumber').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your phone number</font>"
        $(".alert").show()
    });

    //for ext for page "Message for Employee"
    $('#phonenext').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your extension </font>"
        $(".alert").show()
    });
    $('#phonenext').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your extension </font>"
        $(".alert").show()
    });

    //for phone number selection
    $('#emailtwo').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your email address </font>"
        $(".alert").show()
    });

    $('#emailtwo').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> What is your email address</font>"
        $(".alert").show()
    });

    //for question "Update method of payment" yes or no selection--- page billing
    // yes (it will show credit card selection and information to enter)
    $('#upy').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is your method of payment is the same or different </font>"
        $(".alert").show()
    });

    $('#upy').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is your method of payment is the same or different </font>"
        $(".alert").show()
    });

    //no
    $('#upn').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is your method of payment is the same or different </font>"
        $(".alert").show()
    });
    $('#upn').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Is your method of payment is the same or different </font>"
        $(".alert").show()
    });

    //page Modify Club Membership-- question "Membership Number"
    $('#members').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Verify membership.... May I have your membership number </font>"
        $(".alert").show()
    });

    $('#members').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'> Verify membership.... May I have your membership number</font>"
        $(".alert").show()
    });

    //page "Payment" --question "Service date"
    $('#servicedate').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What is your service date </font>"
        $(".alert").show()
    });
    $('#servicedate').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What is your service date </font>"
        $(".alert").show()
    });

    //question -- "Payment Information" page "Payment"
    $('#pcre').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Will this be credit or debit payment....what type credit card will you be using to pay </font>"
        $(".alert").show()
    });

    $('#pcre').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Will this be credit or debit payment....what type credit card will you be using to pay  </font>"
        $(".alert").show()
    });

    //question -- "Payment information"  page "Payment"

    $('#pde').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Will this be credit or debit payment....what type credit card will you be using to pay </font>"
        $(".alert").show()
    });

    $('#pde').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>Will this be credit or debit payment...what type credit card will you be using to pay </font>"
        $(".alert").show()
    });

    //question -- "business"  page "Employment Verification"
    $('#business2').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What is your business name </font>"
        $(".alert").show()
    });

    $('#business2').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What is your business name </font>"
        $(".alert").show()
    });

    //question for first and last name for page "Message for Employee"
    $('#fname0').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What is your first name </font>"
        $(".alert").show()
    });
    $('#fname0').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What is your first name </font>"
        $(".alert").show()
    });
    
    // for page"Employee Verification"
    $('#rfname').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What is your first name </font>"
        $(".alert").show()
    });
    $('#rfname').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What is your first name </font>"
        $(".alert").show()
    });
    // for page"Billing" question
    $('#listdate').keyup(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What billing date will like for monthly payment</font>"
        $(".alert").show()
    });
    $('#listdate').click(function(){
        document.getElementById("showScript").innerHTML="<font color = 'black'>What billing date will like for monthly payment</font>"
        $(".alert").show()
    });
    $('#hwa').keyup(function(){
        var hwaText = document.getElementById("hwa").value;
        if (hwaText > 13){
            alert('Greater than 13')
        } else if (hwaText > 13){
            alert('Less than 13')
        }
    });

    // $('.nFirst').keyup(function(){
    //     var nF = $('nFirst.').val();
    //     var pat = /^[a-zA-Z]+$/;
    //     if (nF.length == 0){
    //         document.getElementById("nfirstMess").innerHTML="<font color = 'black'>Working </font>"
    //     }else if(!nF.match(pat)){
    //         document.getElementById("nfirstMess").innerHTML="<font color = 'red'>Not Working</font>"
    //     }
    // });

});//end   

// $(document).ready(function(){
//     var buttonclick = false;
// //for edit button
//    $('#changescript').focusout(function(){
//     if(!(buttonClicked)){
//         alert('BlurEvent');
//     }else{
//         buttonClicked = false;
//     }
// });
// $('#hopefully').on('click', function () {
//     var letter = document.getElementById("sample").value;
//     $('#firstMessage').text(letter);
//     $('#firstMessage').show();
// });

// $('#hopefully').on('click', function () {

//     $messScript = $(#sample);
//     var orig = $messScript.find('*');
//     $d.text('#firstMessage');
//     $d.append(orig);



    // var letter = $('sample').val();
    // $("#firstMessage")[0].firstChild.nodeValue = letter;
    // });
// });

