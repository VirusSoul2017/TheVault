<?php
 ob_start();
 session_start();
 // if( isset($_SESSION['user'])!="" ){
 //  header("Location: cds-script.html");
 // }
 include_once 'php/login/config.php';

 $error = false;

 if ( isset($_POST['btn-client']) ) {



  if (empty($employee_id)) {
   $error = true;
   $nameError = "Please enter your full name.";
  }
if( !$error ) {
   $query = "INSERT INTO employees1()
VALUES()";

$res = mysql_query($query);

if ($res) {
 $errTyp = "success";
 $errMSG = "Successfully added employee to database";
 unset($employee_id);
 unset($ee_fname);
 unset($ee_lname);
} else {
 $errTyp = "danger";
 $errMSG = "Something went wrong, try again later...";
}
}

}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link href="css/bootstrap.css" type="text/css" rel ="stylesheet" media="screen" >
        <link href="css/bootstrap-responsive.css" type="text/css" rel ="stylesheet">
        <link href="css/datepicker.css" type="text/css" rel ="stylesheet">
        <link rel="stylesheet" href="css/styles.css" />
        <!-- <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />  -->
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
        <!--  <link rel="stylesheet" href="http:/resources/demos/style.css"> -->
        <link href="css/bootstrap1.css" type="text/css" rel ="stylesheet" media="screen" >
        <title>Call Taking</title>
    </head>
    <body onload ="load();">
        <!-- nav- start -->
        <nav class="navbar navbar-default navbar-fixed-top">
              <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="cds-script.html">Home <span class="sr-only">(current)</span></a></li>
                        <li><a href="cds-script-2.html">Service Repair</a></li>
                        <li class="active"><a href="scheduled-service.html">Scheduled Service</a></li>
                        <li><a href="replacement.html">Replacement</a></li>
                        <li class="active"><a href="compliments.html">Compliment(Happy)</a></li>
                        <li><a href="concerns.html">Concern(Unhappy)</a></li>
                        <li class="active"><a href="reschedule-service.html">Rescheduled Service </a></li>
                        <li><a href="reschedule-schedule.html">Rescheduled Scheduled Service </a></li>
                        <li class="active"><a href="reschedule-placement-app.html">Rescheduled Replacement Appointment</a></li>
                    </ul>
                 </div><!-- /.navbar-collapse -->
              </div><!-- /.container-fluid -->

              <div class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <form class="navbar-form navbar-left" role="search">
                            <span id = "messTrunk"></span>
                            <div class="form-group">
                                <label>Trunk</label>
                                  <input type="text" class="form-control" name ="tname" id = "tname1" autocomplete = "off" onblur = "copyNum()" onkeyup = "trunDescr()">
                               <label>Phone Number</label>
                                  <input type="text" class="form-control " name ="inpho" id ="inpho"  maxlength= "10" autocomplete = "off" onblur = "copyNum()">
                            </div>
                            <!-- <font size="6" >Service Page</font> -->
                        </form>
                    </div>
                    <middle>
                       <font size="6" >Calling Taking</font>
                    </middle>
                </div>
            </div>
        </nav>
 <!--nav end -->
 <div class="container-fluid" style="margin-top:130px; margin-left:auto; margin-right:auto;border-width:1px;border-radius:4px;">
        <div class = "row-fluid">
            <!-- span7 area start-->
                <div class = "col-sm-9 col-md-6 col-lg-7">
                <form class="form-inline" name ="schService" action= "<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" onsubmit= "return formVal(this)" style="margin-top:10px;" >
                        <span id = "messTrunk" style="font-size:17px; font-weight:bold;"></span>
                        <div class ="control-group" >
                            <div id = "pdiv">
							<br/>
                            <label  class ="lblline">Phone Number:</label>
                                <input type = "text" name ="pho1" maxlength = "12" id= "pho1" autocomplete = "off" onkeyup = "InputPhone(this)" />
                                <select class = "select" onclick = "numVal()" onfocus = "numVal()" id = "typepho" autocomplete = "off" >
                                    <option value = "0">Select </option>
                                    <option value  = "home" id = "homeOption">Home</option>
                                    <option value = "cell" id = "cellOption">Cell</option>
                                    <option value = "office" id = "offOption">Office</option>
                                </select>
                                <input type = 'text' name = "offText" id = "offText" onkeyup = "" style = "display:none" />
<!--                                <button type = "button" id = "pextra"  title = "Add Additional Phone Number" data-toggle="tooltip"
                                 data-original-title="Add Additional Contact" data-placement="top">+</button>-->
                            </div>
                        </div>
              <div class = "contractName">
                    <span id = "emessage" style="font-size:17px; font-weight:bold;"></span>
                      <div class = "control-group">
                        <label class ="lblline" style = "font-size:20px;">First Name:</label>
                            <input class="span3"  width="20" name="cc_fname" type="text"/>
                        <label class ="lblmiddle" style = "margin-right:auto; margin-left:-90px; font-size:20px;">Last Name:</label>
                            <input class="span3" type="text" name="cc_lname" width="20"/>
                            <label><input type="radio" name="cc_female"/> Female</label>
                              <label><input type="radio" name="cc_male"/> Male</label>
                            <input type="button" value="+" id="contractButton" title="Add Additional Contact" />
                    </div>
                     <span id = "bestMess"></span>
                            <div class = "control-group">
                              <label style = "margin-left:55px;">Is
                                  <input type="tel" name="cc_intel" width="20" > the primary contact you?</label>
                                  <label><input type= "radio" id ="bnYes" name = "best" onclick = "bnVal()" onfocus = "bnVal()" onchange ="" autocomplete = "off"
                                      data-toggle="tooltip" data-original-title ="Check if the number on the Same call in" data-placement="top">Yes</label>
                                  <label><input type= "radio" id ="bnNo" name = "best" onclick = "bnVal()" onfocus = "bnVal()" autocomplete = "off"
                                      data-toggle="tooltip" data-original-title ="Check is number will be different from the call in Number" data-placement="top">No</label>
                            </div>
                            <!-- if yes id check it will show this hidden div(refer to:) Start-->
                            <div class = "control-group bestYes" style = "display:none">
                                <p style = "margin-left:55px;">Is this a
                                    <select name="cc_inteltype">
                                      <option value="Cell">Cell</option>
                                      <option value="Home">Home</option>
                                      <option value="Office">Office</option>
                                    </select>
                                </p>
                            </div>
                          <!--if no id check it will show this hidden div(refer to:) End-->
                          <!-- if yes id check it will show this hidden div(refer to:) Start-->
                            <div class = "control-group bestNo" style = "display:none">
                                <p style = "margin-left:40px;">What is the best number to contact you on
                                    <input type="tel" name="cc_tel" width="20">is this a
                                   <select name="cc_teltype">
                                     <option value="Cell">Cell</option>
                                     <option value="Home">Home</option>
                                     <option value="Office">Office</option>
                                   </select>
                                    <input type = "text" class = "span2" id ="ben3Text" style = "display:none" onchange = "bnVal()"/></p>
                            </div>
                    <span id = "ddmessage" style="font-size:17px; font-weight:bold;"></span>
                    <div id="emailDIV">
                        <div class = "control-group">
                            <label class ="lblline">Email Address:</label>
                            <input class="span4" type="email" name="cc_eml1" width="20"/>
                           <!--  <input class="span2" type = "text" id = "email1" onchange = "mailVal()" onfocus= "mailVal()" autocomplete = "off"/> -->
                            <input type = "button" id = "addEmail" value = "+" onclick = "emailAdd()" title = "Add Additional Email"/>
                            <label class = "type"><input type= "radio" name = "ednemai" value ="dnemai"  id ="dnemai" onclick = "mailVal()" autocomplete = "off"/>
                                Decline</label>
                            <label class = "type"><input type= "radio" name = "ednemai" value ="clear" id ="clear" onclick = "mailVal()" autocomplete = "off" />
                                Clear</label>
                        </div>
                    </div>
                    <span id ="meADD"></span>
                    <div class = "control-group">
                     <p style = "margin-left:25px;">Would  you like to add additional contact?
                         <label><input type= "radio" name = "adCon" id = "contractButton1" onclick = "additonAPP()" onfocus = "additonAPP()" autocomplete = "off">Yes</label>
                         <label><input type= "radio" name = "adCon" id = "conNo" onclick = "additonAPP()" onfocus = "additonAPP()"  autocomplete = "off">No</label>
                     </p>
                    </div>
                </div><!--end of id = "contactName"-->

<!--                <span id ="meADD"></span>
                <div class = "control-group">
                     <p style = "margin-left:25px;">Would  you like to add additional contact?
                         <label><input type= "radio" name = "adCon" id = "contractButton1" onclick = "additonAPP()" onfocus = "additonAPP()" autocomplete = "off">Yes</label>
                         <label><input type= "radio" name = "adCon" id = "conNo" onclick = "additonAPP()" onfocus = "additonAPP()"  autocomplete = "off">No</label>
                     </p>
                 </div>-->
                 <!--div to for additional contact if yes is checked(Start)-->
                 <div class = "contractName2">

                 </div>

            <span id = "dmessage" style="font-size:17px; font-weight:bold;"></span>
                <div class = "control-group">
                    <label  class ="lblline" > Service Zip:</label>
                        <input class="span2" type="number" width="5" name="cc_zip"/>
                     <label  class ="lblmiddle" style = "margin-right:auto; margin-left:-155px;">City:</label>
                        <input class="span4" type="text" width="20" name="cc_city">
                     <label class ="lblright" style = "margin-right:auto; margin-left:-180px;" >State:</label>
                      <select width="20" name="cc_state" value="<?php echo $cc_state ?>">
                        <option value="0">Select</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="maine">Maine</option>
                        <option value="maryland">Maryland</option>
                        <option value="massachusetts">Massachusetts</option>
                        <option value="michigan">Michigan</option>
                        <option value="minnesota">Minnesota</option>
                        <option value="missouri">Missouri</option>
                        <option value="montana">Montana</option>
                        <option value="nebraska">Nebraska</option>
                        <option value="nevada">Nevada</option>
                        <option value="newhampshire">New Hampshire</option>
                        <option value="newjersey">New Jersey</option>
                        <option value="newmexico">New Mexico</option>
                        <option value="newyork">New York</option>
                        <option value="northcarolina">North Carolina</option>
                        <option value="northdakota">Nort Dakota</option>
                        <option value="ohio">Ohio</option>
                        <option value="oklahoma">Oklahoma</option>
                        <option value="oregon">Oregon</option>
                        <option value="pennsylvania">Pennsylvania</option>
                        <option value="rhodeisland">Rhode Island</option>
                        <option value="southcarolina">South Carolina</option>
                        <option value="southdakota">South Dakota</option>
                        <option value="tennessee">Tennessee</option>
                        <option value="texas">Texas</option>
                        <option value="utah">Utah</option>
                        <option value="vermont">Vermont</option>
                        <option value="virginia">Virgina</option>
                        <option value="washington">Washington</option>
                        <option value="westvirginia">West Virginia</option>
                        <option value="wisconsin">Wisconsin</option>
                        <option value="wyoming">Wyoming</option>
                      </select>
                </div>
                <span id = "amessage" style="font-size:17px; font-weight:bold;"></span>
                <div class = "control-group">
                    <label class ="lblline"> Address:</label>
                        <input class= "span2" type = "text" name= "address" id = "addressa" onkeyup = "houseVal()" onfocus = "houseVal()"
                        autocomplete = "off"/>
                        <input class= "span3" type = "text" name= "address1" id = "addressb" onkeyup = "streetVal()" autocomplete = "off"/>
                        <select class = "select2" id = "address" onfocus = "locstVal()" autocomplete = "off" onclick = "locstVal()">
                            <option value = "0" >Select</option>
                            <option value = "apartment" id = "apartment">Apartment</option>
                            <option value = "suite" id = "suite">Suite</option>
                            <option value = "nonet" id = "noneT">None</option>
                        </select>
                    <input class= "span1" type = "text"  name= "address3" id = "addressd" autocomplete = "off"/>
                </div>

<!--                <div class = "control-group">
                    <p>Would you like to be notified when the technician is enroute by
                        <input type = "radio" name = "choi" id ="same" value = "Text" onclick = "showNumber()" autocomplete = "off"> Text <input type = "radio"
                        id = "choice2" value = "Email" name = "choi" autocomplete = "off"> Email or <input type = "radio" name = "choi" id ="techBoth"
                          autocomplete = "off"> Both ?</p>
                </div>-->

                <span id = "omessage" style="font-size:17px; font-weight:bold;"></span>
                <div class = "control-group mobile" style = "display:none">
                    <label style = "margin-right: 80px;"><input type= "checkbox" name = "" value ="media"  id ="" onclick = "" />Mobile Text Alert:</label>
                     <input class="span2" type = "text" size = "12" maxlength = "12" name ="textphone" id = "textphone" onchange = "tphVal()"
                     onkeyup = "InputPhone(this)" onblur = "showNumber()" autocomplete = "off"/>
                      <span class = "phoneList" style = "font-size:17px;"></span>
                </div>
                <div class = "control-group emailChoice" style = "display:none">
                    <label class ="lblline">Email Address: </label>
                         <input class="span5" type = "text" size = "12" name ="sameEmail" id = "sameEmail" autocomplete = "off"/>
                         <span class = "emList" style = "font-size:17px;">Display List</span>
                </div>

                <div id = "mediablock">
                        <span id = "admessage" style="font-size:20px;font-weight:bold;text-align:center;"></span>

                        <div class ="control-group">
                        <label >How did you hear about us?</label>
                        <div id = "seconArea1">
                            <div class = "control">
                                <label class = ""></label>
                                <label class = "type"><input type= "radio" name = "airv" value ="media"  id ="media" onclick = "airVal()" autocomplete = "off" />Advertising</label>
                                <label class = "type"><input type= "radio" name = "airv" value ="internet"  id ="internet" onclick = "airVal()" autocomplete = "off" />Internet</label>
                                <label class = "type"><input type= "radio" name = "airv" value ="refer"  id ="refer" onclick = "airVal()" autocomplete = "off" />Referral</label>
                                <label class = "type"><input type= "radio" name = "airv" value ="van"  id ="van" onclick = "airVal()" autocomplete = "off"/>Van/Truck</label>
                                <label class = "type"><input type= "radio" name = "airv" value ="event"  id ="event" onclick = "airVal()" autocomplete = "off" />Event</label>
                                <label class = "type"><input type= "radio" name = "airv" value ="toma"  id ="toma"  onclick = "airVal()" autocomplete = "off"/>TOMA</label>
                                    <select name ="secChoice" autocomplete = "off">
                                        <option value = "0">Select Type</option>
                                        <option value = "1" class = "secChoice" >Community Support</option>
                                        <option value = "2" class = "secChoice" >Sticker</option>
                                        <option value = "3" class = "secChoice" >Door Hanger</option>
                                        <option value = "4" class = "secChoice" >Alliance</option>
                                    </select>
                                </div>
                            </div>

                             <!--this for Advertising selection start-->
                            <div style= "display:none"  id="mediachoice">
                                <div class = "control-group">
                                    <label class ="lblline" style = "margin-right:auto; margin-left:65px;" ></label>
                                        <label class = "type"><input type= "radio" name = "adSele" value ="direct" id ="direct" onclick = "airVal()" autocomplete = "off"/>Direct Mail</label>
                                        <label class = "type"><input type= "radio" name = "adSele" value ="radio" id ="radio" onclick = "airVal()" autocomplete = "off"/>Radio</label>
                                        <label class = "type"><input type= "radio" name = "adSele" value ="tele" id ="tele" onclick = "airVal()" autocomplete = "off"/>Television</label>
                                        <label class = "type"><input type= "radio" name = "adSele" value ="newpaper" id ="newpaper" onclick = "airVal()" autocomplete = "off"/>Newspaper</label>
                                        <label class = "type"><input type= "radio" name = "adSele" value ="gtcu" id ="gtcu" onclick = "airVal()" autocomplete = "off"/>Good 2CU</label>
                                </div>
                            </div>
                            <!--this for Advertising selection end-->
                            <!--this for direct mail selection start-->
                            <div style= "display:none" id="directmail">
                                <div class = "control-group">
                                    <label class = "question" style = "margin-right:auto; margin-left:150px;">Mailer Name:</label>
                                        <select id = "dmail" onclick = "airVal()">
                                            <option id = "dchoice" value = "0">Select</option>
                                        </select>
                                    <label class = "question2" style = "margin-right:auto; margin-left:-120px">Offer Code:</label>
                                        <input type ="text" class = "span2" autocomplete = "off" id  = "dchoiceOffer"/>
                                </div>
                            </div>
                            <!-- this is for Internet  selection start-->
                            <div style= "display:none"  id="internetChoice">
                                <div class ="control-group">
                                    <label class = "question" style = "margin-right:auto; margin-left:110px;">Choose:</label>
                                        <label class = "type"><input type= "checkbox" name = "google" value ="google"  id ="google" onchange = "airVal()"/>Google</label>
                                        <label class = "type"><input type= "checkbox" name = "yahoo" value ="yahoo"  id ="yahoo" onchange = "airVal()"/>Bing</label>
                                        <label class = "type"><input type= "checkbox" name = "angie" value ="angie"  id ="angie" onclick = "airVal()"/>Angie's List</label>
                                        <label class = "type"><input type= "checkbox" name = "website" value ="website"  id ="website" />Our Website</label>
                                        <label class = "type"><input type="checkbox" name = "tmm" value = "tmm" id = "tmm"/>TMM</label>
                                        <label class = "type"><input type= "checkbox" name = "yelp" value ="yelp"  id ="yelp" />Yelp</label>
                                </div>
                                <div class = "control-group">
                                    <label class = "question" style = "margin-right:auto; margin-left:110px;"></label>
                                    <label class = "type"><input type= "checkbox" name = "yelp" value ="Home Advisor"  id ="homeVis" />Home Advisor</label>
                                    <label class = "type"><input type= "checkbox" name = "yelp" value ="Home Improvement"  id ="homeImp" />Home Improvement</label>
                                    <label class = "type"><input type= "checkbox" name = "other" value ="other"  id ="other" onclick = "airVal()" />Other</label><br />
                                        <input  class="span2" style= "display:none; margin-right:auto; margin-left:300px;" type = "text" name ="otco" id = "otco" onkeyup = "airVal()"/>
                                </div>
                                <span id ="inCount" class = "question" style = "margin-right:auto; margin-left:110px;"></span>
                                <div class = "control-group">
                                    <label class = "question" style = "margin-right:auto; margin-left:110px;">Search Input:</label>
                                        <input type ="text" class = "span7" autocomplete = "off"  id  = "intSearch" rows ="2" maxlength = "100"/>
                                </div>
                               <div class = "control-group">
                                    <label class = "question" style = "margin-right:auto; margin-left:110px;">Offer Code:</label>
                                        <input type ="text" class = "span3" autocomplete = "off" id  = "intoffer"/>
                                </div>
                            </div>
                            <!-- this is for Internet  selection end-->

                            <!-- this is for radio  selection start-->
                            <div style= "display:none" id="radioanswer">
                                <div class ="control-group">
                                    <label class = "question" style = "margin-right:auto; margin-left:150px;">Radio Station:</label>
                                        <!-- <input class="span2" type = "text" size = "" name ="rstation" id = "rstation" onchange = "airVal()"/> -->
                                    <select id="rstation" autocomplete = "off">
                                        <option>Select </option>
                                        <option>Option 1 </option>
                                        <option>Option 2</option>
                                        <option>Option 3 </option>
                                    </select>
                                    <label class = "question2" style = "margin-right:auto; margin-left:-200px;">Ad:</label>
                                        <input class="span2" type = "text" size = "" name ="rad" id = "rad" onchange = "airVal()"/>
                                </div>
                                <div class ="control-group">
                                    <label class = "question" style = "margin-right:auto; margin-left:150px;">Offer Code:</label>
                                        <input type = "text" id ="radioOffer" autocomplete = "off"/>
                                </div>
                            </div>
                        <!-- this is for radio  selection end-->
                         <!-- this is for television  selection start-->
                        <div style= "display:none" id="teleans">
                            <div class ="control-group">
                                <label class = "question" style = "margin-right:auto; margin-left:120px;">Channel :</label>
                                    <!-- <input class="span2" type = "text" size = "" name ="chan" id = "chan" onchange = "airVal()"/> -->
                                    <select id="chan" autocomplete = "off">
                                        <option>Select </option>
                                        <option>Option 1 </option>
                                        <option>Option 2</option>
                                        <option>Option 3 </option>
                                    </select>
                                <label class = "question2" style = "margin-right:auto; margin-left:-150px;" >Ad Name:</label>
                                    <input class="span2" type = "text" size = "" name ="tio" id = "tio" onchange = "airVal()"/>
                            </div>
                            <div class ="control-group">
                                    <label class = "question" style = "margin-right:auto; margin-left:120px;">Offer Code:</label>
                                        <input type = "text" id ="chanOffer" autocomplete = "off"/>
                                </div>
                        </div>
                        <!-- this is for television  selection end-->
                        <!-- this is for newspaper  selection start-->
                        <div style= "display:none" id="newwpaperans">
                            <div class ="control-group">
                                <label class = "question" style = "margin-right:auto; margin-left:180px;">Newspaper Name:</label>
                                    <!-- <input class="span2" type = "text" size = "" name ="news" id = "news" onchange = "airVal()"/> -->
                                    <select id="news" autocomplete = "off">
                                        <option>Select </option>
                                        <option>Option 1 </option>
                                        <option>Option 2</option>
                                        <option>Option 3 </option>
                                    </select>
                                <label class = "question2" style = "margin-right:auto; margin-left:-200px;" >Ad:</label>
                                    <input class="span2" type = "text" size = "" name ="nad" id = "nad" onchange = "airVal()"/>
                            </div>
                            <div class ="control-group">
                                    <label class = "question" style = "margin-right:auto; margin-left:180px;">Offer Code:</label>
                                        <input type = "text" id ="newsOffer" autocomplete = "off"/>
                                </div>
                        </div>
                        <!-- this is for newspaper selection end-->
                            <!--this for Referral selection start-->
                            <div style= "display:none" id="questionChoice">
                                <div class ="control-group">
                                    <label class = "lblline" style = "margin-right:auto; margin-left:150px;" >Refer By</label>
                                    <div class = "controls">
                                        <label class = "question" style = "margin-right:auto; margin-left:150px;" >First Name:</label>
                                            <input class="span3" type = "text" size = "" name ="firstn" id = "ref_firstn" onchange = "airVal()"
                                            autocomplete = "off"/>
                                        <label class = "lblmiddle" style = "margin-right:auto; margin-left:-110px;">Last Name:</label>
                                            <input class="span3" type = "text" size = "" name ="lastn" id = "ref_lastn" onchange = "airVal()"
                                            autocomplete = "off"/>
                                    </div>
                                </div>
                                <div class ="control-group">
                                    <label class = "question" style = "margin-right:auto; margin-left:150px;" >Zip:</label>
                                            <input class="span2" type = "text" maxlength = "5" name ="qcity" id = "ref_zip5" onchange = "airVal()"
                                            autocomplete = "off"/>
                                    <label class = "" >City:</label>
                                        <input class="span3" type = "text" size = "" name ="qcity" id = "ref_city" onchange = "airVal()"
                                        autocomplete = "off"/>
                                    <label class = "">State:</label>
                                            <input class="span1" type = "text" size = "" name ="qcity" id = "ref_state" onchange = "airVal()"
                                            autocomplete = "off"/>

                                </div>
                        </div>
                            <!--this for Referral selection end-->

                            <!--this for direct mail selection end-->
                            <!-- this is for event  selection start-->
                            <div style= "display:none" id="eventques">
                                <div class ="control-group">
                                    <label class = "question" style = "margin-right:auto; margin-left:170px;"> Choose Event:</label>
                                    <select onclick = "airVal()" id = "cc_event">
                                        <option value = "0" >Select </option>
                                        <option value = "1" >Option 1 </option>
                                    </select>
                                    <label >Offer Code:</label>
                                        <input type = "text" id ="cc_event_offcode" autocomplete = "off"/>
                                </div>
                            </div>
                        </div>
                    <div id = "seconArea">
                            <!-- this is for event  selection end-->
                            <div class = "control-group"  >
                                <label class = ""></label>
                                <label class = "type"><input type="radio" name = "airv" value = "soon" id = "soon" onclick = "airVal()" autocomplete = "off"/>Community Support</label>
                                <label class = "type"><input type="radio" name = "airv" value = "sticker" id = "sticker" onclick = "airVal()"
                                    autocomplete = "off"/>Sticker</label>
                                <label class = "type"><input type="radio" name = "airv" value = "dhanger" id = "dhanger" onclick = "airVal()"
                                    autocomplete = "off"/>Door Hanger</label>
                                <label class = "type"><input type="radio" name = "airv" value = "" id = "alliance" autocomplete = "off"/>Alliance</label>
                                <label class = "type"><input type="radio" name = "airv" value ="otherd"  id ="otherd" onclick = "airVal()" autocomplete = "off"/>Other</label>
                                <input style= "display:none; margin-right:auto; margin-left:10px;" class="span2" type = "airv" size = "" name ="otherChoice" id = "otherChoice" onkeyup = "airVal()"/>
                                <select name ="secChoice1" autocomplete = "off" class = "select0">
                                    <option value = "0">Select Type</option>
                                    <option value = "1"class = "secChoice1" >Direct</option>
                                    <option value = "2" class = "secChoice1" >Internet</option>
                                    <option value = "3" class = "secChoice1" >Referral</option>
                                    <option value = "4" class = "secChoice1" >Van/Truck</option>
                                    <option value = "5" class = "secChoice1" >Event</option>
                                    <option value = "6" class = "secChoice1" >Toma</option>
                                </select>
                            </div>


                        <!--this is for community support area start-->
                        <div style = "display:none" id= "commques">
                            <label class = "question" style = "margin-right:auto; margin-left:50px;">Select Location:</label>
                                <select id = "ommunity" onclick = "airVal()">
                                    <option value = "0" >Select </option>
                                    <option value = "h1" >Lion Club</option>
                                    <option value = "h3" >Team Sport</option>
                                    <option value = "h2" id = "cother"> Other</option>
                                </select>
                                <input class="span2" style= "display:none" type = "text" name ="otco3" id = "otco3" onkeyup = "airVal()"/>
                                <label class = "question2" style = "margin-right:auto; margin-left:-120px">Offer Code:</label>
                                        <input type ="text" class = "span2" autocomplete = "off" id  = "dchoiceOffer"/>
                        </div>
            <!--this is for community support area end-->
                        <!-- this is for door hanger  selection start-->
                        <div style= "display:none" id="doorques">
                            <div class = "control-group">
                                <label class = "question" style = "margin-right:auto; margin-left:100px;"> Name:</label>
                                     <select>
                                        <option>Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                        <option>Option 5</option>
                                        <option>Option 6</option>
                                    </select>
                                <label class = "question2" style = "margin-right:auto; margin-left:-150px;" > Source:</label>
                                    <input class="span3" type = "text" size = "" name ="dnQuestion" id = "dsource" onchange = ""/>
                            </div>
                            <div class ="control-group">
                                    <label class = "question" style = "margin-right:auto; margin-left:100px;">Offer Code:</label>
                                        <input type = "text" id ="newsOffer" autocomplete = "off"/>
                                </div>
                        </div>
            <!-- this is for door hanger selection end-->

            <!--this is for alliance area start-->
                        <div style = "display:none" id= "allianques">
                        <div class = "control-group">
                            <label class = "question" style = "margin-right:auto; margin-left:50px;">Company Name:</label>
                                <select onclick = "" id = "anceall">
                                    <option value = "0" >Select </option>
                                    <option value = "h2"> Other</option>
                                </select>
                                <input class="span2" style= "display:none" type = "text" name ="otco4" id = "otco4" onkeyup = ""/>
                        </div>
                        <div class ="control-group">
                                <label class = "question" style = "margin-right:auto; margin-left:50px;">First Name:</label>
                                        <input type = "text" id ="" autocomplete = "off"/>
                                <label class = "question2" style = "margin-right:auto; margin-left:-110px;">Last Name:</label>
                                        <input type = "text" id ="" autocomplete = "off"/>
                        </div>
                            <div class ="control-group">
                                    <label class = "question" style = "margin-right:auto; margin-left:50px;">Offer Code:</label>
                                        <input type = "text" id ="newsOffer" autocomplete = "off"/>
                                </div>
                        </div>
            <!--this is for alliance support area end-->
            </div><!--end of secondArea div-->
        </div><!--end of mediablock div-->

                        <!-- <div id = "firstMessage" style="font-size:17px; font-weight:bold;" onclick = "showNumber3()"></div> -->
                     <span id = "comAddon" style="font-size:17px; font-weight:bold;"></span><!--span validation message-->
                        <div class ="control-group">
                             <label class = "lblline"> Building Type:</label>
                             <label class = "type"><input type="radio" value="Residual" name = "resid" id = "residential" onclick ="buildVal()"
                                autocomplete = "off">Residential</label>
                               <label class = "type"><input type="radio" value="Business" name = "resid" class = "intyope" id = "business" onclick ="buildVal()" autocomplete = "off">Commercial</label>
                               <label class = "type"><input type="radio" value="Industial" name = "resid" class = "intyope" id = "industial"
                                onclick ="buildVal()" onfocus = "buildVal()" autocomplete = "off" >Industrial</label>
                               <label class = "type"><input type="radio" value="Educational" name = "resid" id = "educational" onfocus = "buildVal()"
                                onclick ="buildVal()" autocomplete = "off">Educational</label>
                               <label class = "type"><input type="radio" value="religious" name = "resid" onfocus = "buildVal()" id = "religious" onclick ="buildVal()">Religious</label>
                               <label class = "type"><input type="radio" value="religious" name = "resid" onfocus = "buildVal()" id = "muilti" onclick ="buildVal()">Multi-Family</label>
                               <select class = "span2" id = "builtDDL">
                                    <option> Select</option>
                                    <option> Select 1</option>
                                    <option id = "builtOther"> Other</option>
                               </select>
                        </div>
                        <!--hidden div for ddl  option Other id = builtDDL start  -->
                         <div class = "control-group" style = "display:none" id = "builtDiv">
                            <label class = "lblline"> Building Type:</label>
                            <input type = "text" id ="builtAdd" class = "span4" autocomplete = "off">
                            <input type = "button" id ="Addbuilt" value = "Add Building Type" onclick ="buildVal()" >
                        </div>
                        <!--hidden div for ddl  option Other id = id = builtDDL start  -->
                        <!--This is for  selection business, industial, educational, religious-->
                       <div style= "display:none" id="colist">
                            <div class = "control-group">
                                <label class = "lblline">Company Name:</label>
                                <input class="span5" type = "text" name ="pan" id = "pan" onkeyup ="numVal()" autocomplete = "off"/>
<!--                                <label class = "type"><input type="radio" value="INC" name = "btype" id = "cInc" onclick ="CompanyOther()" onfocus = "CompanyOther()">INC</label>
                                <label class = "type"><input type="radio" value="LLC" name = "btype" id = "cLLc" onclick ="CompanyOther()"
                                    onfocus = "CompanyOther()">LLC</label>
                                <label class = "type"><input type="radio" value="LP"  name = "btype" id = "cLP"  onclick ="CompanyOther()"
                                    onfocus = "CompanyOther()">LP</label>-->
                                  <select class = "span2" id = "companyList">
                                    <option>Select Company &#8649</option>
                                    <option id = "norgan" value = "0">NPO(Nonprofit Organizations)</option>
                                    <option  value = "0">C-Corp</option>
                                    <option  value = "0">Subs</option>
                                    <option  value = "0">LLC</option>
                                    <option  value = "0">LLP</option>
                                    <option  value = "0">LP</option>
                                    <option  value = "0">Sole Proprietor</option>
                                    <option  value = "0">Partnership</option>
                                    <option  value = "0">Organization</option>
                                    <option  value = "0">501 C3</option>
                                    <!-- <option id = "AddComp" value = "2">Other</option> -->
                               </select>
                            </div>
<!--                            <div class = "control-group">
                                <label class = "lblline"></label>
                                <select class = "span2" id = "companyList">
                                        <option>Select Company</option>
                                        <option id = "norgan" value = "0">NPO(Nonprofit Organizations)</option>
                                         <option id = "AddComp" value = "2">Other</option>
                                    </select>
                                <input type = "text" id ="yanpAdd" class = "span3" autocomplete = "off">
                            </div>-->
                        </div>
                        <!--hidden div for ddl  option Other id = AddComp start  -->
<!--                         <div class = "control-group" style = "display:none" id = "compAd">
                            <label class = "lblline">Other Company:</label>
                            <input type = "text" id ="yanpAdd" class = "span4" autocomplete = "off">
                            <input type = "button" id ="panyAdd" value = "Add Company" onclick ="CompanyOther()" >
                        </div>-->
                        <!--hidden div for ddl  option Other id = AddComp start  -->
                    <!--This is for selection business, industial, educational, religious end-->

                    <div class = "control-group">
                        <label class = "lblline">Service Type:</label>
                        <label class = "type"><input type="radio" value="Repair" name = "ssr" id = "g1" autocomplete = "off"> Repair</label>
                        <label class = "type"><input type="radio" value="Schedule Service" name = "ssr" id = "g2" autocomplete = "off"  >Schedule Service</label>
                        <label class = "type"><input type="radio" value="Replacement"  name = "ssr" id = "g3" autocomplete = "off">Replacement</label>
                        <label class = "type"><input type="radio" value="Maintenance"  name = "ssr" id = "g4" autocomplete = "off">Maintenance</label>
                    </div>


                    <span id = "gemessage1" style="font-size:17px; font-weight:bold;"></span>
                    <div id = "homeselect" style = "display:none">
                        <span id = "mmessage" style="font-size:17px; font-weight:bold;"></span>
                            <div class = "control-group">
                                <label style="font-size:17px;">Are you the home owner?</label>
                                    <label class = "type"><input type= "radio" name = "home1" value ="hyes"  id ="hyes" onfocus = "homselVAl()" onclick ="homselVAl()" autocomplete = "off" />Yes</label>
                                    <label class = "type"><input type= "radio" name = "home1" value ="hno"  id ="hno" onfocus = "homselVAl()" onclick ="homselVAl()" autocomplete = "off" />No</label>
                            </div>
                    </div>
                    <!-- <span id = "gemessage1" style="font-size:17px; font-weight:bold;"></span> -->
                    <div id = "residques" style = "display:none">
                        <div class = "control-group">
                            <label> Property Owner Information</label>
                                <div class = "control">
                                    <label  class ="question" >First Name:</label>
                                    <input class="span2" type = "text" size = "" name ="owinfo" id = "owinfo" maxlength= "45" onchange ="homselVAl()"
                                    autocomplete = "off" />
                                    <!-- <label  class ="lblmiddle" style = "margin-right:auto; margin-left:-80px;">Middle Intial:</label>
                                        <input class="span2" type = "text" size = "" name ="" id = "" onkeyup = "" autocomplete = "off" /> -->
                                    <label  class ="lblright" style = "margin-right:auto; margin-left:-120px;">Last Name:</label>
                                    <input class="span2" type = "text" size = "" name ="owinfo1" id = "owinfo1" onchange = "homselVAl()" autocomplete = "off" />
                                </div>
                            </div>
                            <div class = "control-group">
                                <label class ="question">Zip:</label>
                                    <input class="span1" type = "text" name ="poaddre4" id ="poaddre4"  maxlength = "5" onchange = "homselVAl()"/>
                                <label  class ="lblmiddle" style = "margin-right:auto; margin-left:-155px;">City:</label>
                                    <input class="span3" type = "text" name ="poaddre5" id = "poaddre5" onchange = "homselVAl()"/>
                                <label class ="lblright" style = "margin-right:auto; margin-left:-180px;">State:</label>
                                    <input class="span1" type = "text" name ="poaddre7" id = "poaddre7" maxlength = "2" onchange = "homselVAl()"/>
                            </div>
                            <div class = "control-group">
                                <label class ="question">  Address:</label>
                                    <input class= "span2" type = "text"  name= "poaddre1" id = "poaddre1" onchange = "homselVAl()" />
                                    <input class= "span3" type = "text"  name= "poaddre2" id = "poaddre2" onchange = "homselVAl()" />
                                    <select class = "select2" id = "poaddre3" onclick = "homselVAl()">
                                        <option value = "0" >Select</option>
                                        <option value = "avenue">Apartment</option>
                                        <option value = "street">Suite</option>
                                        <option value = "neither" id = "neither">None</option>
                                    </select>
                                <input class= "span1" type = "text" name= "poaddre31" id = "poaddre31" onchange = "homselVAl()"/>
                            </div>

                            <div class = "control-group">
                                <label class = "question"> Phone Number:</label>
                                    <input class = "span3" type = "text" id ="phonenjum"  maxlength = "12" onchange = "homselVAl()" onkeyup = "InputPhone(this)"  autocomplete = "off"/>
                            </div>
                            <span id = "gemessage3" style="font-size:17px; font-weight:bold;"></span>
                            <div class = "control-group">
                                <label>Who will be paying for the repairs?</label>
                                    <label class = "type"><input type= "radio" name = "parepairs" value ="paren"  id ="paren" onfocus = "homsel2VAl()"
                                        onclick = "homsel2VAl()" autocomplete = "off" />Renter</label>
                                    <label class = "type"><input type= "radio" name = "parepairs" value ="parown"  id ="parown" onfocus = "homsel2VAl()"  onclick = "homsel2VAl()" autocomplete = "off"/>Owner</label>
                            </div>
                    </div><!--end of  display none-->

                    <span id = "businB" style="font-size:17px; font-weight:bold;"></span>
                <div id = "homeselect1" style = "display:none;">
                <div class = "control-group">
                    <label>Are you the</label>
                    <label class = "type"><input type= "radio" name = "tlb" value ="Tenant"  id ="owOccup" onfocus = "buildingB()" onclick = "buildingB()"
                        autocomplete = "off" />Owner Occupied</label>
                    <label>or</label>
                    <label class = "type"><input type= "radio" name = "tlb" value ="Tenant"  id ="busLease" onfocus = "buildingB()" onclick = "buildingB ()"
                        autocomplete = "off" />Leased ?</label>

                <!--<label style="font-size:17px;">Are you the building owner?</label>
                    <label class = "type"><input type= "radio" name = "buyes" value ="Yes" id ="buyes" onfocus = "building()" onclick ="building()"
                        autocomplete = "off" />Yes</label>
                    <label class = "type"><input type= "radio" name = "buno" value ="No"  id ="buno" onfocus = "building()" onclick ="building()"
                        autocomplete = "off" />No</label>-->
                </div>

                <span id = "stListMess" style="font-size:17px; font-weight:bold;"></span>
                <div class = "control-group">
                    <label>Service Type:</label>
                    <label><input type = "radio" name = "stList" autocomplete = "off" onclick ="reCP1()" onfocus ="reCP1()" id = "stList0" />AC Heating</label>
                    <label><input type = "radio" name = "stList" autocomplete = "off" onclick ="reCP1()" onfocus ="reCP1()" id = "stList1" />Pool</label>
                    <label><input type = "radio" name = "stList" autocomplete = "off" onclick ="reCP1()" onfocus ="reCP1()" id = "stList2" />Plumbing</label>
                    <label><input type = "radio" name = "stList" autocomplete = "off" onclick ="reCP1()" onfocus ="reCP1()" id = "stList3" />Irrigation</label>
                    <label><input type = "radio" name = "stList" autocomplete = "off" onclick ="reCP1()" onfocus ="reCP1()" id = "stList4" />Electrical</label>
                    <label><input type = "radio" name = "stList" autocomplete = "off" onclick ="reCP1()" onfocus ="reCP1()" id = "stList5" />Installation</label>
                    <label><input type = "radio" name = "stList" autocomplete = "off" onclick ="reCP1()" onfocus ="reCP1()" id = "stList6" />Solar</label>
                </div>

                <div class = "control-group">
                    <label style = "margin-right: 102.5px;"></label>
                    <label><input type = "radio" name = "stList" autocomplete = "off" onclick ="reCP1()" onfocus ="reCP1()" id = "stList7" />Roofing</label>
                    <label><input type = "radio" name = "stList" autocomplete = "off" onclick ="reCP1()" onfocus ="reCP1()" id = "stList8" />Lawn Care</label>
                    <label><input type = "radio" name = "stList" autocomplete = "off" onclick ="reCP1()" onfocus ="reCP1()" id = "stList9" />Floor Care</label>
                    <label><input type = "radio" name = "stList" autocomplete = "off" onclick ="reCP1()" onfocus ="reCP1()" id = "stList10" />Painting</label>
                    <label><input type = "radio" name = "stList" autocomplete = "off" onclick ="reCP1()" onfocus ="reCP1()" id = "stList11" />Pest Control</label>
                </div>

                <span id = "techDiv" style="font-size:17px; font-weight:bold;"></span>
                <div class = "control-group occupiedDiv" style = "display:none">
                    <div id = "newList">
                        <label>Who will tech need to contact upon arrival?</label>
                        <div class = "control">
                            <label class ="lblline"><input type = "checkbox" id = "sameBus" />First Name:</label>
                                <input type = "text" class = "span2" id = "fnBusin" onkeyup = "arrival()" autocpmplete = "off"/>
                            <label class ="lblmiddle" style = "margin-right:auto; margin-left:-100px;">Last Name:</label>
                                <input type = "text" class = "span2" id = "lnBusin" onkeyup = "arrival()" autocpmplete = "off"/>
                            <label class ="lblright" style = "margin-right:auto; margin-left:-100px;">Phone Number:</label>
                                <input type = "text" class = "span2" id = "phBusin" onchange = "arrival()"  maxlength = "12" autocpmplete = "off"
                                onkeyup = "InputPhone(this)" />
                            <label>Ext:</label>
                                <input type = "text" class = "span1" id = "phBusin1" onchange = "arrival()" maxlength = "5" autocpmplete = "off"/>
                                <button id = "aBusCon">+</button>
                        </div>
                    </div>

                </div>


        <!--radio button "No" hidden div -->
            <div id = "noBuild" style = "display:none">
                <!--if No is chosen it will display this hidden div-->
                 <label> Building Information</label>
                    <div class = "control-group"  style = "display:none">
                      <label>Will you be responsible for paying repairs?</label>
                        <label class = "type"><input type= "radio" name = "prYN" value =""  id ="prYes" onfocus = "building()" onclick = "building()"
                            autocomplete = "off" />Yes</label>
                        <label class = "type"><input type= "radio" name = "prYN" value =""  id ="prNo" onfocus = "building()" onclick = "building()"
                            autocomplete = "off"/>No</label>
                    </div>
                    <div class = "control-group">
                        <label>Will the </label>
                        <label class = "type"><input type= "radio" name = "tlb" value ="Tenant"  id ="tlb0" onfocus = "building()" onclick = "building()"
                            autocomplete = "off" />Tenent</label>
                        <label>or</label>
                        <label class = "type"><input type= "radio" name = "tlb" value ="Landlord" id ="tlb1" onfocus = "building()" onclick = "building()"
                            autocomplete = "off"/>Landlord</label>
                        <label>are reponsible for paying repairs?</label>
                    </div>

                    <!-- Tenent radio button hidden div-->
                    <div class = "control-group eamount " style = "display:none">
                        <label>Do you have an exceeding amount?</label>
                            <label class = "type"><input type= "radio" name = "eamou" id ="eamou1" onfocus = "building()" onclick = "building()" autocomplete = "off"
                                />Yes</label>
                            <label class = "type"><input type= "radio" name = "eamou" id ="eamou2" onfocus = "building()" onclick = "building()"  autocomplete = "off"
                                />No</label>
                    </div>
                    <!--end of Tenent radio button hidden div-->

                    <!--Tenent radio button hidden  if radio "Yes" is checked-->
                    <span id = "" style="font-size:17px; font-weight:bold;"></span>
                        <div class = "control-group tbaoDiv" style = "display:none">
                            <label>Tenent Amount:</label>
                                <input type= "type" class = "span2" id ="tenet" onfocus = "building()" onkeyup= "building()" autocomplete = "off" />
                            <label> Broker Agent/Owner Amount:</label>
                                <input type= "type" class = "span2"  id ="baom" onfocus = "building()" onkeyup= "building()" autocomplete = "off" />

                        </div>
                    <!--end of "yes"-->

                <div id = "bciDiv" style = "display:none">
                    <label> Contact Information:</label>&nbsp;<span id = "businB1" style="font-size:17px; font-weight:bold;"></span>
                    <div class = "control-group">
                        <label class ="lblline">Company Name:</label>
                            <input class= "span4" id = "busComp" onfocus = "building1()" onkeyup= "building1()" type = "text" />
                    </div>
                    <div class = "control-group">
                        <label class ="lblline">First Name:</label>
                            <input class= "span2" type = "text" id = "fn1" onfocus = "building1()" onkeyup= "building1()"/>
                        <label class ="lblmiddle" style = "margin-right:auto; margin-left:-100px;">Last Name:</label>
                            <input class= "span2" type = "text" id = "lnl" onfocus = "building1()" onkeyup= "building1()" />
                        <label class ="lblright" style = "margin-right:auto; margin-left:-100px;">Phone Number:</label>
                            <input class= "span2" type = "text" id = "pn1" onfocus = "building1()" onkeyup= "building1()" maxlength = "12"
                            onkeypress = "InputPhone(this)" />
                    </div>
                </div><!--end of  contact information-->
            </div><!--end of  no radio button hidden div-->


        </div>

<div id = "resiPackage" style = "display:none;">
             <hr>
     <span id = "resiMessage" style="font-size:17px; font-weight:bold;"></span>
            <div class = "control-group">
                <label class = "question">Concern/Problem:</label>
                    <label class = "type"><input type= "radio" name = "cpo" value ="cooling"  id = "cooling" onfocus = "reCP()" onclick = "reCP()"
                        autocomplete = "off" /> Cooling</label>
                    <label class = "type"><input type= "radio" name = "cpo" value ="heating"  id = "heating" onfocus = "reCP()" onclick = "reCP()"
                        autocomplete = "off" /> Heating</label>
                    <label class = "type"><input type= "radio" name = "cpo" value ="heatCool"  id = "heatCool" onclick = "reCP()" onfocus = "reCP()"
                        autocomplete = "off" />Cooling & Heating</label>
                    <label class = "type"><input type= "radio" name = "cpo" value ="Water Leak"  id = "leakWater" onclick = "reCP()" onfocus = "reCP()"
                        autocomplete = "off" />Water Leak</label>
                    <label class = "type"><input type= "radio" name = "cpo" value ="Noise"  id = "noise" onclick = "reCP()" onfocus = "reCP()"
                        autocomplete = "off" />Noise</label>
                    <label class = "type"><input type= "radio" name = "cpo" value ="Smell"  id = "smell1" onclick = "reCP()" onfocus = "reCP()"
                        autocomplete = "off" />Smell</label>
                    <label class = "type"><input type= "radio" name = "cpo" value ="Detector Going Off"  id = "dgo" onclick = "reCP()" onfocus = "reCP()"
                        autocomplete = "off" />Detector Going Off</label>
            </div>
            <div class = "control-group">
                <label class = "question"></label>
                <label class = "type"><input type= "radio" name = "cpo"  autocomplete = "off" onfocus = "reCP()" onclick = "reCP()" id = "acHeating"/>
                    AC Heating</label>
                <label class = "type"><input type= "radio" name = "cpo" autocomplete = "off" onfocus = "reCP()" onclick = "reCP()" id = "plumbing" />
                   Plumbing</label>
                <label class = "type"><input type= "radio" name = "cpo"  autocomplete = "off" onfocus = "reCP()" onclick = "reCP()" id = "electri"/>
                   Electrical</label>
                <label class = "type"><input type= "radio" name = "cpo"  autocomplete = "off" onfocus = "reCP()" onclick = "reCP()" id = "GarDoor"/>
                    Garage Door</label>
                <label class = "type"><input type= "radio" name = "cpo"  autocomplete = "off" onfocus = "reCP()" onclick = "reCP()" id = "pestControl"/>
                    Pest Control</label>
                <label class = "type"><input type= "radio" name = "cpo"  autocomplete = "off" onfocus = "reCP()" onclick = "reCP()" id = "lawnCare" />
                    Lawn Care</label>
            </div>
            <div class = "control-group">
                <label class = "question"></label>
                <label class = "type"><input type= "radio" name = "cpo"  autocomplete = "off" onfocus = "reCP()" onclick = "reCP()" id= "poolService" />
                    Pool Service </label>
                <label class = "type"><input type= "radio" name = "cpo"  autocomplete = "off" onfocus = "" onclick = ""/>TBD</label>
                <label class = "type"><input type= "radio" name = "cpo"  autocomplete = "off" onfocus = "" onclick = ""/> TBD</label>
                <label class = "type"><input type= "radio" name = "cpo"  autocomplete = "off" onfocus = "" onclick = ""/> TBD</label>
                <select id = "ucpDDL">
                    <option>Select</option>
                    <!-- <option id = "ucpOther" value = "">Other</option> -->
                </select>
                <input type = "text" id = "ucpText" class ="span3" autocomplete = "off"/>
            </div>
            <!--Hidden div for Cooling (id ="cooling") radio button start-->
            <span id = "cpMess" style="font-size:17px; font-weight:bold;"></span><!--span validaiton message-->
            <div class = "icooling" style = "display:none">
                <div class = "control-group">
                    <label class = "question">Cooling Issues:</label>
                        <label class = "type"><input type= "radio" name = "cpi" id = "nc" autocomplete = "off" onclick = "UnitOther()" onfocus = "UnitOther()"/>
                            Not Cooling</label>
                        <label class = "type"><input type= "radio" name = "cpi" id = "lc" autocomplete = "off" onclick = "UnitOther()" onfocus = "UnitOther()"/>
                            Low Cooling</label>
                        <label class = "type"><input type= "radio" name = "cpi" id = "nio" autocomplete = "off" onclick = "UnitOther()" onfocus = "UnitOther()"/>
                            Noise</label>
                        <label class = "type"><input type= "radio" name = "cpi" id = "smell" autocomplete = "off" onclick = "UnitOther()" onfocus = "UnitOther()"/> Smell</label>
                        <label class = "type"><input type= "radio" name = "cpi" id = "vibe" autocomplete = "off" onclick = "UnitOther()" onfocus = "UnitOther()"/>
                            Vibration</label>
                </div>
                 <div class = "control-group">
                    <label class = "question"></label>
                    <label class = "type"><input type= "radio" name = "cpi" id = "nce" autocomplete = "off" onclick = "UnitOther()" onfocus = "UnitOther()"/>
                        Not Cooling Evenly</label>
                    <label class = "type"><input type= "radio" name = "cpi" id = "tb"  autocomplete = "off" onclick = "UnitOther()" onfocus = "UnitOther()"/>
                        Tripping Breaker</label>
                    <label class = "type"><input type= "radio" name = "cpi" id = "freu" autocomplete = "off" onclick = "UnitOther()" onfocus = "UnitOther()"/>
                        Freezing Up</label>
                    <label class = "type"><input type= "radio" name = "cpi" id = "watleak"  autocomplete = "off" onclick = "UnitOther()" onfocus = "UnitOther()"/>
                        Water Leak</label>
                </div>
                <div class ="control-group" id = "hideSelectoin">
                    <label class = "question"></label>
                    <select class = "span3" id = "ResCoolI" autocomplete = "off">
                        <option  value = "0"> Select Other Issues</option>
                        <option  value = "">Issues 1</option>
                        <!-- <option id = "coolIRes" value = "other" >Other</option> -->
                    </select>
                    <input type = "text" class = "span3" id = "cResIOther"/>
                </div>
                <div class = "control-group">
                    <label class = "question">Thermostat Set at:</label>
                        <input type ="text" autocomplete = "off" id = "therm" class ="span1" maxlength ="3" onkeyup = "themVal()"/>
                    <label>deg.f</label>
                    <label class = "question">Actual Temperature at:</label>
                        <input type ="text" autocomplete = "off" id = "therm1" class ="span1" maxlength ="3" onkeyup = "themVal2()" />
                    <label>deg.f</label>
                </div>
                <div class = "control-group" id = "hideNotes">
                    <label class = "question">Notes:</label>
                         <div class = "control" style = "margin-top:-20px;">
                            <label class = "question"></label>
                            <textarea class="form-control" id ="messpost4"  maxlength = "1024" rows ="3" style = "height:75px; width:700px;" autocomplete = "off">
                            </textarea>
                        </div>
                        <div class = "control">
                            <label class = "question"></label>
                            <span id ="wordcount4">0</span>
                        </div>
                </div>
            </div><!--end of icooling -->
            <span id = "resiMessage4" style="font-size:17px; font-weight:bold; color:red;"></span>
            <div class = "icooling1" style = "display:none" >
                <div class = "control-group">
                    <label class = "question">Room(s) Not Cooling Evenly:</label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="MasterBed Room" class = "coolTemp" autocomplete = "off" id = "masterb"
                        onclick = "roomEvenly()" onfocus = "roomEvenly()"/>Master BedRoom</label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="Kitchen" class = "coolTemp" autocomplete = "off" onclick = "roomEvenly()" id = "kitchen" onfocus = "roomEvenly()" /> Kitchen</label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="Living Room" class = "coolTemp" autocomplete = "off"  id = "living"
                       onclick = "roomEvenly()" onfocus = "roomEvenly()"/>Living Room</label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="Den"  class = "coolTemp" autocomplete = "off" id = "den" onclick = "roomEvenly()" onfocus = "roomEvenly()" />Den</label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="Dining Room" class = "coolTemp" autocomplete = "off"
                        id = "diningRoom" onclick = "roomEvenly()" onfocus = "roomEvenly()" /> Dining Room</label>
                </div>
                <div class = "control-group">
                  <label class = "question"></label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="Game Room" class = "coolTemp" id = "GameRoom" autocomplete = "off"
                    onclick = "roomEvenly()" onfocus = "roomEvenly()" />Game Room</label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="Office" class = "coolTemp" id = "office" autocomplete = "off"
                     onclick = "roomEvenly()" onfocus = "roomEvenly()"   /> Office</label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="First Floor" class = "coolTemp" id = "firstFl" autocomplete = "off"
                    onclick = "roomEvenly()" onfocus = "roomEvenly()" /> First Floor</label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="Second Floor" class = "coolTemp" id = "secondFl"  autocomplete = "off"
                    onclick = "roomEvenly()" onfocus = "roomEvenly()" /> Second Floor</label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="Third Floor" class = "coolTemp" id = "thirdFl" autocomplete = "off"
                    onclick = "roomEvenly()" onfocus = "roomEvenly()" /> Third Floor</label>
                </div>
                <div class = "control-group">
                    <label class = "question"></label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="Fourth Floor" class = "coolTemp" autocomplete = "off"  id = "fourthFl"
                        onclick = "roomEvenly()" onfocus = "roomEvenly()"/>Fourth Floor</label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="Sun Room" class = "coolTemp"  autocomplete = "off" id = "sunRoom"
                        onclick = "roomEvenly()" onfocus = "roomEvenly()" /> Sun Room</label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="Master Bathroom" class = "coolTemp" autocomplete = "off"
                        id = "masterBath" onclick = "roomEvenly()" onfocus = "roomEvenly()" /> Master Bathroom</label>
                    <label class = "type"><input type= "checkbox" name = "cpi1" value ="Utility Room"  class = "coolTemp" autocomplete = "off"
                        id = "UtilityRo" onclick = "roomEvenly()" onfocus = "roomEvenly()" /> Utility Room</label>
                </div>
                <div class = "control-group">
                    <label class = "question"></label>
                    <select class = "span3 coolTemp" id ="addR"  autocomplete = "off">
                        <option id = "selectconcern" value = "0"> Select Room</option>
                        <option id = "" value = "">Room 1</option>
                        <option id = "" value = "">Room 2</option>
                        <option id = "" value = "">Room 3</option>
                        <option id = "" value = "">Room 4</option>
                        <option id = "" value = "">None</option>
                       <!--  <option id = "nceOther" value = ""  >Other</option> -->
                    </select>
                    <input type = "text" id = "recnAdd" class = "span3"/>
                </div>
                <span id = "difMess" style="font-size:17px; font-weight:bold;"></span>
                <div class = "control-group">
                     <label class = "question"></label>
                    <span id = "moorCooling" style = "font-size:17px;">Degree Difference:</span>
                </div>
                <div class = "control-group" >
                    <label class = "question">Notes:</label>
                     <div class = "control" style = "margin-top:-20px;">
                        <label class = "question"></label>
                        <!-- <input type ="textarea" autocomplete = "off" id = "" style = "height:75px; width:700px;" /> -->
                        <textarea class="form-control" id ="messpost5"  maxlength = "1024" rows ="3" style = "height:75px; width:700px;" autocomplete = "off"></textarea>
                    </div>
                    <div class = "control">
                        <label class = "question"></label>
                        <span id ="wordcount5">0</span>
                    </div>
                </div>

            </div><!--end of  class = "icooling1"-->
             <!--heating(residential) radio hidden div to display concern/problem radio button option -->
            <span id = "heaMessage" style="font-size:17px; font-weight:bold;"></span>
            <div class = "iheating" style = "display:none">
                <div class = "control-group">
                    <label class = "question">Heating Issues:</label>
                        <label class = "type"><input type= "radio" name = "cpii" id = "nh"  autocomplete = "off" onclick = "HeatIssu()" onfocus = "HeatIssu()"/>Not Heating</label>
                        <label class = "type"><input type= "radio" name = "cpii" id = "lh"  autocomplete = "off" onclick = "HeatIssu()" onfocus = "HeatIssu()" /> Low Heating</label>
                        <label class = "type"><input type= "radio" name = "cpii" id = "noh" autocomplete = "off" onclick = "HeatIssu()" onfocus = "HeatIssu()"/> Noise</label>
                        <label class = "type"><input type= "radio" name = "cpii" id = "sh"  autocomplete = "off" onclick = "HeatIssu()" onfocus = "HeatIssu()"/> Smell</label>
                        <label class = "type"><input type= "radio" name = "cpii" id = "vh"  autocomplete = "off" onclick = "HeatIssu()" onfocus = "HeatIssu()"/> Vibration</label>
                </div>
                <div class = "control-group">
                        <label class = "question"></label>
                        <label class = "type"><input type= "radio" name = "cpii" id = "nhe"  autocomplete = "off" onclick = "HeatIssu()"
                            onfocus = "HeatIssu()" /> Not Heating Evenly</label>
                        <label class = "type"><input type= "radio" name = "cpii" id = "cotbh"  autocomplete = "off" onclick = "HeatIssu()"
                            onfocus = "HeatIssu()"/> Tripping Breaker</label>
                        <label class = "type"><input type= "radio" name = "cpii" id = "wlh"  autocomplete = "off" oncniolick = "HeatIssu()"
                            onfocus = "HeatIssu()" /> Water Leak</label>
                        <label class = "type"><input type= "radio" name = "cpii" id = "fzh"  autocomplete = "off" onclick = "HeatIssu()"
                            onfocus = "HeatIssu()" /> Freezing Up</label>
                </div>
                <div class = "control" id = "IssDDL" >
                    <label class = "question">Additional Listing</label>
                    <select class = "span3" id ="rheatissu" autocomplete = "off">
                        <option id = "" value = "0"> Select Issues</option>
                        <option id = "hOtherIss" value = "" >Other</option>
                    </select>
                    <input type = "text" class = "span3" autocomplete = "off"  id = "IssOther"/>
                </div>
                <span id = "hTemMessage" style="font-size:17px; font-weight:bold;"></span>
                <div class = "control-group">
                    <label class = "question">Thermostat Set at:</label>
                        <input type ="text" autocomplete = "off" id = "heThem" class ="span1" maxlength ="3" onkeyup = "themVal3()" />
                    <label>deg.f</label>
                    <label class = "question">Actual Temperature at:</label>
                        <input type ="text" autocomplete = "off" id = "heThem1" class ="span1" maxlength ="3" onkeyup = "themVal4()" />
                    <label>deg.f</label>
                </div>
                <div class = "control-group" id ="rheatissue1">
                    <label class = "question">Notes:</label>
                         <div class = "control" style = "margin-top:-20px;">
                            <label class = "question"></label>
                            <!-- <input type ="textarea" autocomplete = "off" id = "" style = "height:75px; width:700px;" /> -->
                            <textarea class="form-control" id ="messpost7"  maxlength = "1024" rows ="3" style = "height:75px; width:700px;" autocomplete = "off"></textarea>
                        </div>
                        <div class = "control">
                            <label class = "question"></label>
                            <span id ="wordcount7">0</span>
                        </div>
                </div>
            </div><!--end of class = "iheating"-->
             <!--Not Heating Evenly radio button selection hidden div (start) -->
            <div class = "iheating1" style = "display:none">
                <span id = "cpipMess" style="font-size:17px; font-weight:bold;"></span><!--span for validation-->
                <div class = "control-group">
                    <label class = "question">Room(s) Not Heating  Evenly:</label>
                        <label class = "type"><input type= "checkbox" name = "cpip" value ="MasterBed Room" class = "heatTempR" autocomplete = "off" id ="hmasterb" onclick = "hEvenly()" onfocus = "hEvenly()"/>Master BedRoom</label>
                        <label class = "type"><input type= "checkbox" name = "cpip" value ="Kitchen" class = "heatTempR" id = "hkitchen" autocomplete = "off"  onclick = "hEvenly()" onfocus = "hEvenly()"/> Kitchen</label>
                        <label class = "type"><input type= "checkbox" name = "cpip" value ="Living Room" class = "heatTempR" id = "hliving" autocomplete = "off" onclick = "hEvenly()" onfocus = "hEvenly()"/>Living Room</label>
                        <label class = "type"><input type= "checkbox" name = "cpip" value ="Den" class = "heatTempR" id = "hden"
                            autocomplete = "off" onclick = "hEvenly()" onfocus = "hEvenly()"/>Den</label>
                        <label class = "type"><input type= "checkbox" name = "cpip" value ="Dining Room"  class = "heatTempR" id = "hdiningRoom"
                            autocomplete = "off" onclick = "hEvenly()" onfocus = "hEvenly()"/> Dining Room</label>
                </div>
                <div class = "control-group">
                    <label class = "question"></label>
                    <label class = "type"><input type= "checkbox" name = "cpip" value ="Game Room" class = "heatTempR" id = "hgameRo"  autocomplete = "off" onclick = "hEvenly()" onfocus = "hEvenly()"/>Game Room</label>
                    <label class = "type"><input type= "checkbox" name = "cpip" value ="Office" class = "heatTempR" id = "hOffice" autocomplete = "off" onclick = "hEvenly()" onfocus = "hEvenly()"/> Office</label>
                    <label class = "type"><input type= "checkbox" name = "cpip" value ="First Floor" class = "heatTempR" id = "hfirstFl"  autocomplete = "off" onclick = "hEvenly()" onfocus = "hEvenly()"/> First Floor</label>
                    <label class = "type"><input type= "checkbox" name = "cpip" value ="Second Floor" class = "heatTempR" id = "hsecondFl"  autocomplete = "off" onclick = "hEvenly()" onfocus = "hEvenly()"/> Second Floor</label>
                    <label class = "type"><input type= "checkbox" name = "cpip" value ="Third Floor" class = "heatTempR" id = "hthirdFl"  autocomplete = "off" onclick = "hEvenly()" onfocus = "hEvenly()"/> Third Floor</label>
                </div>
                <div class = "control-group">
                    <label class = "question"></label>
                    <label class = "type"><input type= "checkbox" name = "cpip" value ="Fourth Floor"  class = "heatTempR"  autocomplete = "off"  id = "hfourthFl" onclick = "hEvenly()" onfocus = "hEvenly()"/>Fourth Floor</label>
                    <label class = "type"><input type= "checkbox" name = "cpip" value ="Sun Room"  class = "heatTempR"  autocomplete = "off"  id = "hsunRoom" onclick = "hEvenly()" onfocus = "hEvenly()"/> Sun Room</label>
                    <label class = "type"><input type= "checkbox" name = "cpip" value ="Master Bathroom"  class = "heatTempR" id ="hmasterBa"  autocomplete = "off" onclick = "hEvenly()" onfocus = "hEvenly()" /> Master Bathroom</label>
                    <label class = "type"><input type= "checkbox" name = "cpip" value ="Utility Room"  class = "heatTempR"  autocomplete = "off"  id ="hUtilityRo" onclick = "hEvenly()" onfocus = "hEvenly()"/> Utility Room</label>
                </div>
                <div class = "control-group">
                    <label class = "question"></label>
                    <select class = "span3" id = "HeatIssue" autocomplete = "off">
                        <option id = "" value = "0"> Select Room</option>
                        <option id = "" value = "Room 1">Room 1</option>
                        <option id = "" value = "Room 2">CO2</option>
                        <option id = "" value = "Room 3">Furnace Booming Sound</option>
                        <option id = "" value = "Room 4">Heat Pump Has Frost</option>
                        <option id = "" value = "Room 5">None</option>
                        <!-- <option id = "heatOther" value = "heatOther">Other</option> -->
                    </select>
                    <input type = "text" class = "span3" autocomplete = "off" id = "OtherHeat" style = "display:" />
                </div>
                <div class = "control-group" >
                    <span id = "heatEName"></span>
                </div>
                <div class = "control-group ">
                    <label class = "question">Notes:</label>
                    <div class = "control" style = "margin-top:-20px;">
                        <label class = "question"></label>
                        <!-- <input type ="textarea" autocomplete = "off" id = "" style = "height:75px; width:700px;" /> -->
                        <textarea class="form-control" id ="messpost00"  maxlength = "1024" rows ="3" style = "height:75px; width:700px;" autocomplete = "off"></textarea>
                    </div>
                    <div class = "control">
                        <label class = "question"></label>
                        <span id ="wordcount00">0</span>
                    </div>
                </div>
            </div><!--end of class = "iheating1"-->
</div><!--end of id = "resiPackage"-->

<!--start of commPackage div (commercial)-->
<div id ="commPackage" style = "display:none;" >
    <span id = "cpoMessage" style="font-size:17px; font-weight:bold;"></span>
    <div class = "control-group">
        <label class = "question">Concern/Problem:</label>
        <label class = "type"><input type= "radio" name = "cpo1" value ="cocooling"  id = "cocooling" onclick = "IssueCooling()" onfocus = "IssueCooling()"
            autocomplete = "off" /> Cooling</label>
        <label class = "type"><input type= "radio" name = "cpo1" value ="coheating"  id = "coheating"  autocomplete = "off" onclick = "IssueCooling()"
            onfocus = "IssueCooling()" /> Heating</label>
        <label class = "type"><input type= "radio" name = "cpo1" value ="coheatCool" id = "coheatCool" onclick = "IssueCooling()" onfocus = "IssueCooling()"
            autocomplete = "off" />Cooling & Heating</label>
    </div>

<!--if room cooling evenly id click it will show cooling issues-->
    <div class = "copCooling" style = "display:none">
        <span id = "cpicMess" style="font-size:17px; font-weight:bold;"></span>
        <div class = "control-group" >
            <label class = "question">Cooling Issues:</label>
            <label class = "type"><input type= "radio" name = "cpic" id = "conc" onclick = "coolCommercial()" onfocus = "coolCommercial()"  autocomplete = "off"/>
                Not Cooling</label>
            <label class = "type"><input type= "radio" name = "cpic" id = "coloc" onclick = "coolCommercial()" onfocus = "coolCommercial()" autocomplete = "off" />
                Low Cooling</label>
            <label class = "type"><input type= "radio" name = "cpic" id = "coon" onclick = "coolCommercial()" onfocus = "coolCommercial()" autocomplete = "off"/>
                Noise</label>
            <label class = "type"><input type= "radio" name = "cpic" id = "cos" onclick = "coolCommercial()" onfocus = "coolCommercial()" autocomplete = "off"/>
                Smell</label>
            <label class = "type"><input type= "radio" name = "cpic" id = "cov" onclick = "coolCommercial()" onfocus = "coolCommercial()" autocomplete = "off"/>
                Vibration</label>
        </div>
        <div class = "control-group">
            <label class = "question"></label>
            <label class = "type"><input type= "radio" name = "cpic"  id = "conce" onclick = "coolCommercial()" onfocus = "coolCommercial()" autocomplete = "off" />
                Not Cooling Evenly</label>
            <label class = "type"><input type= "radio" name = "cpic"  id = "cotb" onclick = "coolCommercial()" onfocus = "coolCommercial()" autocomplete = "off"/> Tripping Breaker</label>
            <label class = "type"><input type= "radio" name = "cpic" id = "cofreu" onclick = "coolCommercial()" onfocus = "coolCommercial()"  autocomplete = "off" />  Freezing Up</label>
            <label class = "type"><input type= "radio" name = "cpic" id = "cowl" onclick = "coolCommercial()" onfocus = "coolCommercial()" autocomplete = "off"/>
                Water Leak</label>
        </div>
        <div class = "control-group">
            <label class = "question"></label>
            <select class = "span3" id = "cpicAList" autocomplete = "off">
                <option id = "" value = "0">Select Issues</option>
                <option id = "cpicOther" value = "">Other</option>
            </select>
            <input type = "text" id ="cpicText" class = "span3" autocomplete = "off">
        </div>

        <span id = "thMess" style="font-size:17px; font-weight:bold;"></span>
        <div class = "control-group">
            <label class = "question">Thermostat Set At:</label>
                <input type ="text" autocomplete = "off" id = "cTherm" maxlength = "2" class ="span1" onchange = "themVal7()" onfocus = "themVal()"/>
            <label>deg.f</label>
            <label class = "question ">Actual Temperature At:</label>
                <input type ="text" autocomplete = "off" id = "cTherm1" class ="span2" maxlength ="2" />
            <label>deg.f</label>
        </div>
        <div class = "control-group hideOption">
            <label class = "question">Notes:</label>
                <div class = "control" style = "margin-top:-20px;">
                    <label class = "question"></label>
                   <textarea class="form-control" id ="messpost03"  maxlength = "1024" rows ="3" style = "height:75px; width:700px;" autocomplete = "off"></textarea>
                </div>
                 <div class = "control">
                    <label class = "question"></label>
                    <span id ="wordcount03">0</span>
                </div>
        </div>
         <!--click not cooling evenly it will display hidden value for room selection(radio button id = "conce") star of div-->
        <span id = "cpiMess10" style="font-size:17px; font-weight:bold;"></span>
        <div id = "cnceRooms" style = "display:none">
            <div class ="control-group">
                <label class = "question">Room(s) Not Cooling Evenly:</label>
                <label class = "type"><input type= "checkbox" name = "cpi0c" value ="Lobby"
                    class = "cpiS" autocomplete = "off" onclick = "notevevlyCCom()" onfocus ="notevevlyCCom()" id = "sl"/>Lobby</label>
                <label class = "type"><input type= "checkbox" name = "cpi0c" value ="Server Room"
                    class = "cpiS" autocomplete = "off" onclick = "notevevlyCCom()" onfocus ="notevevlyCCom()" id = "sl1"/>Server Room</label>
                 <label class = "type"><input type= "checkbox" name = "cpi0c" value ="First Floor"
                    class = "cpiS" autocomplete = "off" onclick = "notevevlyCCom()" onfocus ="notevevlyCCom()" id = "sl2"/> First Floor</label>
                <label class = "type"><input type= "checkbox" name = "cpi0c" value ="Second Floor"
                    class = "cpiS"  autocomplete = "off" onclick = "notevevlyCCom()" onfocus ="notevevlyCCom()" id = "sl3"  /> Second Floor</label>
                <label class = "type"><input type= "checkbox" name = "cpi0c" value ="Third Floor"
                    class = "cpiS" autocomplete = "off" onclick = "notevevlyCCom()" onfocus ="notevevlyCCom()" id = "sl4" /> Third Floor</label>
            </div>
            <div class ="control-group">
                <label class = "question"></label>
                <label class = "type"><input type= "checkbox" name = "cpi0c" value ="Conference Room"  class = "cpiS" autocomplete = "off"
                    onclick = "notevevlyCCom()" onfocus ="notevevlyCCom()" id = "sl5" />Conference Room</label>
                <label class = "type"><input type= "checkbox" name = "cpi0c" value ="Office"
                    class = "cpiS" autocomplete = "off" onclick = "notevevlyCCom()" onfocus ="notevevlyCCom()" id = "sl6"/> Office</label>
                <label class = "type"><input type= "checkbox" name = "cpi0c" value ="East Offices"
                    class = "cpiS" autocomplete = "off" onclick = "notevevlyCCom()" onfocus ="notevevlyCCom()" id = "sl7" />East Offices</label>
                <label class = "type"><input type= "checkbox" name = "cpi0c" value ="West Offices"
                    class = "cpiS" autocomplete = "off" onclick = "notevevlyCCom()" onfocus ="notevevlyCCom()" id = "sl8" />West Offices</label>
                <label class = "type"><input type= "checkbox" name = "cpi0c" value ="North Offices"  class = "cpiS" autocomplete = "off"
                    onclick = "notevevlyCCom()" onfocus ="notevevlyCCom()" id = "sl9" />North Offices</label>
            </div>
            <div class ="control-group">
                <label class = "question"></label>
                <label class = "type"><input type= "checkbox" name = "cpi0c" value ="South Office"  class = "cpiS" onchange = "" autocomplete = "off" onclick = "notevevlyCCom()" onfocus ="notevevlyCCom()" id = "sl10" />South Office</label>
                <select class = "span3 cpiS" id = "cpiDDL" autocomplete = "off">
                    <option id = "" value = "0"> Select Concern</option>
                   <!--  <option id = "rneList" value = "" >Other</option> -->
                </select>
                <input type = "text" id ="cpiText" class = "span3" autocomplete = "off">
            </div>
            <div class = "control-group" >
               <span id = "cpiName" style = "font-size:17px;"></span>
            </div>
            <div class = "control-group">
                <label class = "question">Notes:</label>
                    <div class = "control" style = "margin-top:-20px;">
                        <label class = "question"></label>
                        <textarea class="form-control" id ="messpost04"  maxlength = "1024" rows ="3" style = "height:75px; width:700px;" autocomplete = "off"></textarea>
                    </div>
                    <div class = "control">
                        <label class = "question"></label>
                        <span id ="wordcount04">0</span>
                    </div>
            </div>
        </div> <!--click not cooling evenly it will display hidden value for room selection(radio button id = "conce") end of div-->

    </div><!--end of class = "copCooling"-->

    <!--click heat it will display hidden value(radio button id = "coheating")start of div-->
    <div id = "cheatbut" style = "display:none">
        <!--heating issue radio for commercial-->
        <span id = "cpicMess1" style="font-size:17px; font-weight:bold;"></span>
        <div class = "control-group">
            <label class = "question">Heating Issues:</label>
            <label class = "type"><input type= "radio" name = "cpih" value =""  id = "cohnh"  autocomplete = "off"
                onfocus = "cpicIssues()" onclick = "cpicIssues()"/>Not Heating</label>
            <label class = "type"><input type= "radio" name = "cpih" value =""  id = "cohloh"  autocomplete = "off"
              onfocus = "cpicIssues()" onclick = "cpicIssues()"/> Low Heating</label>
            <label class = "type"><input type= "radio" name = "cpih" value =""  id = "cohon"  autocomplete = "off"
                onfocus = "cpicIssues()" onclick = "cpicIssues()"/> Noise</label>
            <label class = "type"><input type= "radio" name = "cpih" value =""  id = "cohs"  autocomplete = "off"
                onfocus = "cpicIssues()" onclick = "cpicIssues()"/> Smell</label>
            <label class = "type"><input type= "radio" name = "cpih" value =""  id = "cohv"  autocomplete = "off"
                onfocus = "cpicIssues()" onclick = "cpicIssues()"/> Vibration</label>
        </div>
        <div class = "control-group">
            <label class = "question"></label>
            <label class = "type"><input type= "radio" name = "cpih" value =""  id = "cohnhe" autocomplete = "off"
                onfocus = "cpicIssues()" onclick = "cpicIssues()"/> Not Heating Evenly</label>
            <label class = "type"><input type= "radio" name = "cpih" value =""  id = "cohtb"  autocomplete = "off"
                onfocus = "cpicIssues()" onclick = "cpicIssues()"/> Tripping Breaker</label>
            <label class = "type"><input type= "radio" name = "cpih" value =""  id = "cohfreu"  autocomplete = "off"
                onfocus = "cpicIssues()" onclick = "cpicIssues()"/> Freezing Up</label>
            <label class = "type"><input type= "radio" name = "cpih" value =""  id = "cohwl"  autocomplete = "off"
               onfocus = "cpicIssues()" onclick = "cpicIssues()"/> Water Leak</label>
        </div>
        <div class = "control-group">
            <label class = "question"></label>
            <select id = "cpihDDL">
                <option> Select</option>
                <!-- <option id = "cpihOther" value = "">Other</option> -->
            </select>
            <input type = "text" id ="cpihText" class = "span3" autocomplete = "off">
        </div>
        <span id = "themValCMes" style="font-size:17px; font-weight:bold;"></span>
        <div class = "control-group">
            <label class = "question">Thermostat Set at:</label>
                <input type ="text" autocomplete = "off" id = "tsetat" onchange = "themValC()" class ="span1" maxlength ="3"/>
            <label>deg.f</label>
            <label class = "question">Actual Temperature at:</label>
                <input type ="text" autocomplete = "off" id = "tsetat1" class ="span2" maxlength ="3"/>
            <label>deg.f</label>
        </div>
        <div class = "control-group cpihSelectH ">
            <label class = "question">Notes:</label>
                <div class = "control" style = "margin-top:-20px;">
                    <label class = "question"></label>
                    <textarea class="form-control" id ="messpost05"  maxlength = "1024" rows ="3"
                    style = "height:75px;width:700px;" autocomplete = "off"></textarea>
                </div>
                <div class = "control">
                    <label class = "question"></label>
                    <span id ="wordcount05">0</span>
                </div>
        </div>

    </div><!--end of id = "cheatbut"-->
    <!--click heat it will display hidden value(radio button id = "coheating")start of div-->

    <!--commercial not heating evenly radio hidden button div(id = cohnce) start-->
        <span id = "rsnheMess" style="font-size:17px; font-weight:bold;"></span>
        <div id = "nceCom" style = "display:none">
            <div class = "control-group">
                <label class = "question">Room(s) Not Heating  Evenly:</label>
                <label class = "type"><input type= "checkbox" name = "rsnhe" value ="Lobby"  class = "rsnheS" onclick = "locateRoom()" onfocus = "locateRoom()"
                    id = "hlobby" autocomplete = "off"/>Lobby</label>
                <label class = "type"><input type= "checkbox" name = "rsnhe" value ="Server Room"  class = "rsnheS" onclick = "locateRoom()" onfocus = "locateRoom()" id = "hServer" autocomplete = "off" />
                    Server Room</label>
                <label class = "type"><input type= "checkbox" name = "rsnhe" value ="First Floor" class = "rsnheS" onclick = "locateRoom()" onfocus = "locateRoom()"
                    id = "hFirst" autocomplete = "off" />
                    First Floor</label>
                <label class = "type"><input type= "checkbox" name = "rsnhe" value ="Second Floor"  class = "rsnheS" onclick = "locateRoom()" onfocus = "locateRoom()" id = "hSecond" autocomplete = "off" />
                    Second Floor</label>
                <label class = "type"><input type= "checkbox" name = "rsnhe" value ="Third Floor"  class = "rsnheS" onclick = "locateRoom()" onfocus = "locateRoom()" id = "hThird" autocomplete = "off" />
                    Third Floor</label>
            </div>
            <div class = "control-group">
                <label class = "question"></label>
                <label class = "type"><input type= "checkbox" name = "rsnhe" value ="Conference Room"  class = "rsnheS" onclick = "locateRoom()" onfocus = "locateRoom()" id = "hCRoom" autocomplete = "off" />     Conference Room</label>
                <label class = "type"><input type= "checkbox" name = "rsnhe" value ="Office"  class = "rsnheS"  onclick = "locateRoom()" onfocus = "locateRoom()" id = "hOffice" autocomplete = "off"/>
                    Office</label>
                <select class = "span3" id = "rsnheSelect" autocomplete = "off">
                    <option id = "" value = "0"> Select Area</option>
                </select>
                <input type = "text" id ="rsnheInput" class = "span2" autocomplete = "off">
            </div>
            <div class ="control-group">
               <span id = "rsnhName" style = "font-size:17px;"></span>
            </div>
            <div class = "control-group">
                <label class = "question">Notes:</label>
                <div class = "control" style = "margin-top:-20px;">
                    <label class = "question"></label>
                    <textarea class="form-control" id ="messpost07"  maxlength = "1024" rows ="3"
                    style = "height:75px; width:700px;" autocomplete = "off"></textarea>
                </div>
            </div>
            <div class = "control-group">
                    <label class = "question"></label>
                    <span id ="wordcount07">0</span>
            </div>
        </div><!--end of nceCom-->
    <!--commercial not heating evenly radio hidden button div(id = cohnce) start-->
</div><!-- end of commPackage div (commercial)-->
<hr><!--start of question area and end of cooling and heating hidden div-->
            <div class = "replHide" style  = "display:none" >
                <span id = "unitconmessage" style="font-size:17px; font-weight:bold;"></span>
                    <div class ="control-group">
                        <label class = "question4" style = "margin-right:auto; margin-left:-10px;" >Is your current system operating?</label>
                           <label class = ""><input type = "radio" name ="sopert" id = "sopert1" autocomplete = "off" />Yes</label>
                           <label class = ""><input type = "radio" name ="sopert" id = "sopert2" autocomplete = "off" />No</label>
                        <label class = "question">Unit Concern</label>
                            <select class = "span4" onclick = "concVal()" id = "issue" autocomplete = "off">
                                <option id = "selectconcern" value = "0"> Select Concern</option>
                                <option id = "" value = "cooling"> Not Cooling</option>
                                <option id = "" value = "heating">Not Heating</option>
                                <option id = "" value = "frozen">Frozen</option>
                                <option id = "" value = "water">Water Link</option>
                                <option id = "" value = "rvc">Room Not Cooling</option>
                                <option id = "" value = "ssg">Smell smoke or gas</option>
                                <option id = "" value = "cmd">Carbon Monoxide Detector</option>
                                <option id = "" value = "fbs">Furnace Booming Sound</option>
                                <option id = "" value = "hpf">Heat Pump Has Frost</option>
                                <option id = "none" value = "none">None</option>
                                <option id = "ohi" value = "ohi" >Other</option>
                            </select>

                    </div>
                    <div id ="sopertHide" style = "display:none">
                        <span id = "dwyMess" style="font-size:17px; font-weight:bold;"></span>
                        <div class = "control-group" >
                            <label>How long has it not been operating?</label>
                                <select class = "select">
                                    <option >Select</option>
                                    <option id ="dys" value = "Days">Days</option>
                                    <option id ="wks" value = "Weeks">Weeks</option>
                                    <option id ="mths" value = "Years">Months</option>
                                    <option id ="yrs" value = "Years">Years</option>
                                </select>
                                <input class = "span1" autocomplete = "off" id ="dwyText"/>
                        </div>

                        <!--notes area for question  "How long has it not been operating?"-->
                        <!--it will display hidden  div to add additional notes-->
                        <div id = "dwyHide" style = "display:none">
                                <div class = "control-group">
                                <label class = "lblline">Notes:</label>
                                </div>
                                <div class = "control-group">
                                    <label class = "question3"></label>
                                    <textarea  id = "messpost1" style = "margin-top:-35px; margin-left:-85px;" maxlength = "1024" rows ="5"></textarea>
                                    <div id ="wordcount1">0</div>
                                </div>
                        </div>
                    </div>

            </div>   <!-- end of replHide div-->
            <span id = "gromessage" style="font-size:17px; font-weight:bold;"></span>
                <div class ="control-group entireDisplay" style = "display:none">
                    <label class = "question">Estimated Unit Age:</label>
                        <input class="span1" type = "text" size = "" name ="age" id = "age" onchange = "masyVal()" autocomplete = "off"/>
                    <label class = "question2">Number of systems in home</label>
                        <input class="span1" type = "text" size = "" name ="systems" id = "systems" onchange = "samVal()" autocomplete = "off" />
                    <label class = "question3">Number of systems to check</label>
                        <input class="span1" type = "text" name ="syche" id = "syche" onkeyup = "samVal()" autocomplete = "off" />
                </div>

                    <!--if  'number of systems to check is the same as 'Number of systems in home this area will not show-->
                    <!--if  'number of systems to check is the different as 'Number of systems in home this area will show-->
                    <!--the number is enter will show the create element for each number-->
                    <span id = "gromessage" style="font-size:17px; font-weight:bold;"></span>
                    <div id="options" style = "display:none">
                        <div class = "control-group">

                        </div>
                    </div>
                 <div class = "hi" style = "display:none">
                    <span id = "gemessage" style="font-size:17px; font-weight:bold;"></span>
                    <div class = "control-group">
                        <label style="font-size:17px;"> Is your heat, gas or electric?</label>
                        <label class = "type"><input type= "checkbox" name = "heat" value ="heat" id ="heat" onclick= "gasVal()" autocomplete = "off" />Heat</label>
                       <label class = "type"><input type= "checkbox" name = "gas" value ="gas" id ="gas" onclick= "gasVal()" autocomplete = "off" />Gas</label>
                        <label class = "type"><input type= "checkbox" name = "electric" value ="electric"  id ="electric" onclick= "gasVal()" autocomplete = "off"/>Electric</label>
                    </div>
                    <div id = "elegas" style = "display:none">
                        <div class = "control-group">
                        <label style = "margin-right:auto; margin-left:30px; margin-top:20px; font-size:17px; "> What type of gas is being used? </label>
                            <label class = "type"><input type= "radio" name = "thi" value ="propane" id ="propane" onclick = "gasVal()" autocomplete = "off" />Propane</label>
                            <label class = "type"><input type= "radio" name = "thi" value ="natural"  id ="natural" onclick = "gasVal()" autocomplete = "off"/>Natural Gas</label>
                        </div>
                    </div>
                    <div id = "gaseld" style = "display:none">
                        <div class = "control-group">
                            <label style = "margin-right:auto; margin-left:30px; margin-top:20px; font-size:17px; "> What type of electric is being used? </label>
                            <label class = "type"><input type= "radio" name = "thi1" value ="hepump" id ="hepump" onclick = "gasVal()" autocomplete = "off" />Heat Pump</label>
                                <label class = "type"><input type= "radio" name = "thi1" value ="ectci"  id ="ectci" onclick = "gasVal()" autocomplete = "off"/>ELectric Heat</label>
                        </div>
                    </div>
                </div>
             <div class = "replHide1" style  = "display:none" >
                    <div class ="control-group">
                       <label style = "margin-right:auto; margin-left:-10px; font-size:17px; "> Are you wanting a system that will </label>
                                <label class = ""><input type= "checkbox" name = "" value ="Lower Utilities Bills"  id ="lub" onchange = ""/>Lower Utilities Bills</label>
                                <label class = ""><input type= "checkbox" name = "" value ="More Reliable"  id ="mreliable" onchange = "" />More Reliable</label>
                                <label class = ""><input type= "checkbox" name = "" value =">Make Cleaner Air"  id ="maCleaner" onchange = "" />Make Cleaner Air</label>
                                <br>
                                <label class = "" style = "margin-right:auto; margin-left:255px;"><input type= "checkbox" name = "" value ="Make Your Home More Comfortable"  id ="myhmc" onchange = "" />Make Your Home More Comfortable</label>
                        <label style = "margin-right:auto; margin-left:3px;font-size:17px;">in your home?</label>
                    </div>

                    <div class = "control-group">
                        <label>Is your home all </label>
                         <label class = ""><input type= "radio" name = "iyhal" value ="Electric"  id ="iyhal2" autocomplete = "off" />Electric</label>
                        <label>or</label>
                        <label class = ""><input type= "radio" name = "iyhal" value ="Gas"  id ="iyhal1" autocomplete = "off" />Gas ?</label>
                       <label class = "question gtln " style = "display:none">Gas Type: </label>
                            <label class = "gtln" style = "display:none" ><input type= "radio" name = "gtype" value ="LP" id ="glp"  autocomplete = "off"/>LP</label>
                            <label class = "gtln" style = "display:none"><input type= "radio" name = "gtype" value ="Natural" id ="gnatu" autocomplete = "off"/>Natural</label>
                   </div>
                    <!--Gas radio button hidden div start-->
               <div id = "iyhalHide" style = "display:none">

                   <span id = "ewsbMess" style="font-size:17px; font-weight:bold;"></span>
                    <div class ="control-group">
                         <label class ="question"> Estimate Winter Bill: </label>
                         <label class =""> Highest: </label>
                            <input type = "text" class = "span1" autocomplete = "off" maxlength = "3" id = "ewb" onchange = "estimatebuild()" onkeyup = "costVAl()" />
                        <label> Lowest: </label>
                            <input type = "text" class = "span1" autocomplete = "off" maxlength = "3" id = "ewb2" onchange = "estimatebuild()" />
                            <label class ="question"> Estimate Summer Bill: </label>
                         <label class =""> Highest: </label>
                             <input type = "text" class = "span1" autocomplete = "off" maxlength = "3" id = "esb" onchange = "estimatebuild1()" onkeyup = "costVAl()" />
                        <label> Lowest: </label>
                           <input type = "text" class = "span1" autocomplete = "off" maxlength = "3" id = "esb2" onchange = "estimatebuild1()" />
                    </div>
                </div><!--Gas radio button hidden div end-->
            <!--Electric radio button hidden div start-->
               <div id = "iyhalHide1" style = "display:none">
                    <div class ="control-group">
                         <label class ="question"> Estimate Winter Bill: </label>
                         <label class =""> Highest: </label>
                             <input type = "text" class = "span1" autocomplete = "off" maxlength = "3" id = "ewb1" onchange = "estimatebuild()" onkeyup = "costVAl()" />
                         <label> Lowest: </label>
                            <input type = "text" class = "span1" autocomplete = "off" maxlength = "3" id = "ewb3" onchange = "estimatebuild()" />
                        <label class ="question"> Estimate Summer Bill: </label>
                         <label class =""> Highest: </label>
                            <input type = "text" class = "span1" autocomplete = "off" maxlength = "3" id = "esb1" onchange = "estimatebuild1()" onkeyup = "costVAl()"/>
                        <label> Lowest: </label>
                            <input type = "text" class = "span1" autocomplete = "off" maxlength = "3" id = "esb3" onchange = "estimatebuild1()" />
                    </div>
                </div><!--Electric radio button hidden div end-->

                <span id = "rernum" style="font-size:17px; font-weight:bold;"></span>
                    <div class = "control-group">
                      <label class ="question">Brand Preferred</label>
                          <select class = "select1" name ="branpr" id ="branpr" autocomplete = "off">
                                <option> Select</option>
                          </select>
                    </div>
                    <div class = "control-group">
                        <label>Which area is least comfortable ?</label>
                            <label class = "" ><input type= "radio" name = "gtype3" value ="Master Bedroom"  id ="lcMast"  autocomplete = "off"/>Master Bedroom</label>
                            <label class = ""><input type= "radio" name = "gtype3" value ="Bedroom"  id ="lcBedr" autocomplete = "off"/>Bedroom</label>
                            <label class = ""><input type= "radio" name = "gtype3" value ="Kitchen"  id ="lcKict" autocomplete = "off"/>Kitchen</label>
                            <label class = ""><input type= "radio" name = "gtype3" value ="Den"  id ="lcDen" autocomplete = "off"/>Den</label>

                            <select class = "span2" id = "leddl" autocomplete = "off">
                                <option value = "0">Select</option>
                                <option value = "5" id= "upstairs">Upstairs</option>
                                <option value = "6" id= "downstairs">Downstairs</option>
                                <option value = "7" id = "leastOther">Other</option>
                            </select>
                            <input class = "span2" type= "text" name = "least" autocomplete = "off"  id ="least" style = "display:none"/>
                    </div>

                    <div class = "control-group">
                        <label class = "offer">In order to qualify for our 100% money back guarantee we need to have all key decision makers</label>
                        <label class = "offer"> present to make sure we answer any and all your questions you may have.  We can meet you at</label>
                        <label class = "offer"> your convenience morning, evening or afternoon to qualify for 100% money back guartantee? </label>
                        <label class = "type"><input type= "radio" name = "quey" value ="qyes" id ="qyes" autocomplete = "off" />Yes</label>
                        <label class = "type"><input type= "radio" name = "quey" value ="qno"  id ="qno" autocomplete = "off" />No</label>
                    </div>

            </div><!-- end of replHide-->

            <span id = "smmessage" style="font-size:17px; font-weight:bold;"></span><span id = "unitconmessage" style="font-size:17px; font-weight:bold;"></span>
                <div class ="control-group threeOffer" style = "display:none;">
                    <label style="font-size:17px;"> Is your mailing and service address the same?</label>
                        <label class = "type"><input type= "radio" name = "smess" value ="yesm"  id ="yesm" onclick = "smVal()"
                            onfocus = "smVal()" autocomplete = "off"/>Yes</label>
                        <label class = "type"><input type= "radio" name = "smess" value ="smno"  id ="smno" onclick = "smVal()"
                            onfocus = "smVal()" autocomplete = "off"/>No</label>
                </div>
                <div style = "display:none" id ="mailing">
                    <div class = "control-group">
                        <label  class ="lblline">Zip:</label>
                            <input class="span2" type = "text" size = "s" name ="szip" id = "szip" maxlength = "5" onchange = "smVal()" autocomplete = "off"/>
                        <label  class ="lblmiddle" style = "margin-right:auto; margin-left:-155px;">City:</label>
                            <input class="span4" type = "text" size = "" name ="scity" id = "scity" onchange = "smVal()"
                            autocomplete = "off"/>
                         <label class ="lblright" style = "margin-right:auto; margin-left:-180px;">State:</label>
                            <input class="span1" type = "text" size = "" name ="sstate" id = "sstate" maxlength = "2" placeholder ="TX"
                            onchange = "smVal()" autocomplete = "off"/>
                    </div>
                    <div class = "control-group">
                        <label class ="lblline"> Mailing Address:</label>
                            <input class= "span2" type = "text" size = "" name= "saddress" id = "saddress" onchange = "smVal()"
                            autocomplete = "off" />
                            <input class= "span3" type = "text" size = "" name= "saddress1" id = "saddress1" onchange = "smVal()"
                            autocomplete = "off" />
                            <select class = "select2" id = "strloc1" autocomplete = "off" onclick = "smVal()">
                                <option value = "0" >Select</option>
                                <option value = "avenue">Apartment</option>
                                <option value = "street">Suite</option>
                                <option value = "road">None</option>
                            </select>
                        <input class= "span1" type = "text" size = "" name= "saddress2" id = "saddress2" onchange = "smVal()"
                        autocomplete = "off" />
                    </div>
                </div><!--end of id = "mailing"-->

            <div id = "entireDisplay" style = "display:none"  >
                        <span id = "gromessage" style="font-size:17px; font-weight:bold;"></span>
                        <div class ="control-group">
                            <label>Number of Systems in Home:</label>
                                <label class = "type"><input type= "radio" name = "nosy" onclick = "masVal()" onfocus = "masVal()"  id ="rsysem1" autocomplete = "off"/>1
                                 </label>
                                <label class = "type"><input type= "radio" name = "nosy" onclick = "masVal()" onfocus = "masVal()"  id ="rsysem2" autocomplete = "off"/>2
                                 </label>
                                <label class = "type"><input type= "radio" name = "nosy" onclick = "masVal()" onfocus = "masVal()"  id ="rsysem3" autocomplete = "off"/>3
                                 </label>
                                <label class = "type"><input type= "radio" name = "nosy" onclick = "masVal()" onfocus = "masVal()"  id ="rsysem4" autocomplete = "off"/>4
                                 </label>
                                <input class="span1" type = "text" size = "" name ="agenum" id = "agenum" maxlength = "3" onkeyup = "masVal()"  autocomplete = "off" />
                        </div>

                        <!-- This area for number of system if two or more (addsystems) -->
                        <div id = "addsystems" style = "display:none">
                            <div class ="control-group">
                                <label style = "font-size:17px;">Would you like us to check your additional systems, they are only<input class="span1" type = "text" placeholder = "$29" />per system?
                                    <label class = "type"><input type= "radio" name = "dyn" value ="des"  id ="des" onclick = "masVal()" autocomplete = "off" />Yes</label>
                                    <label class = "type"><input type= "radio" name = dyn value ="dd"  id ="dd" onclick = "masVal()" autocomplete = "off"  />No</label>
                                </label>
                            </div>
                        </div>

                        <!--if yes is selected this question will show -->
                        <span id = "gromessage" style="font-size:17px; font-weight:bold;"></span>
                        <div id="syoption" style = "display:none">
                            <div class  = "control-group">
                                <label style="font-size:17px;">Number of a additional system(s) to check</label>
                                    <input class = "span1" type = "text" name = "onal" id= "onal" maxlength = "3" onkeyup = "masVal()"  autocomplete = "off" />
                                    <label class = "type"><input type= "checkbox" name = "adall" value =""  id ="adall"/>Add All</label>
                            </div>
                        </div>

                        <!--if number is the same as for additional system to check it will not show, if different number this area will appear-->
                        <div id="soption" style = "display:none">

                        </div>
              </div><!--end of entireDisplay-->


            <div class ="control-group">
               <label style = "margin-right:auto; font-size:17px; font-style: italic;"> Will you using be  is a</label>
               <label class = "type"><input type= "radio" name = "cdhw1" value ="Credit/Debit"  id ="cdhw2" autocomplete = "off" />Credit/Debit</label> or
               <label class = "type"><input type= "radio" name = "cdhw1" value ="Home Warranty" id ="cdhw3" autocomplete = "off" />Home Warranty</label>
               <label>?</label>
            </div>

            <div class ="control-group deceHidden" style =" display:none">
                <label class ="question">Debit/Credit Card:</label>
                    <label class = "type"><input type= "radio" name = "rr0" value ="same" id ="cdSame" onclick = "typeVal()" onfocus = "typeVal()"
                        autocomplete = "off" />Same</label>
                    <label class = "type"><input type= "radio" name = "rr0" value ="different"  id ="cdDiff" onclick = "typeVal()" onfocus = "typeVal()"
                        autocomplete = "off" />Different</label>
            </div>

            <div style =" display:none" id ="warra">
                    <div class ="control-group">
                        <label class ="question">Warranty:</label>
                            <label class = "type"><input type= "radio" name = "rr1" id ="wa1"  autocomplete = "off" />
                                Home </label>
                            <label class = "type"><input type= "radio" name = "rr1" id ="wa2"  autocomplete = "off" />
                                Manufacturer</label>
                             <input type = "text" class = "span1" id = "hwText" style = "display:none" onchange  = "manf()" autocomplete = "off"/>
                        </div>
                    <div class = "control-group manfaDiv">
                        <label class ="question"> Company:</label>
                            <label class = "type"><input type= "radio" name = "company" id ="comp1" autocomplete = "off" />American Home Guardian</label>
                            <label class = "type"><input type= "radio" name = "company" id ="comp2" autocomplete = "off" />American Home Shield</label>
                            <label class = "type"><input type= "radio" name = "company" id ="comp3" autocomplete = "off" />Complete Appliance Protection</label>
                    </div><!-- end of control-group-->
                    <div class = "control-group manfaDiv">
                        <label class ="question"></label>
                            <label class = "type"><input type= "radio" name = "company" id ="comp4" autocomplete = "off" />Certified Warranty</label>
                            <label class = "type"><input type= "radio" name = "company" id ="comp5" autocomplete = "off" />Global Home Warranty</label>
                            <label class = "type"><input type= "radio" name = "company" id ="comp7" autocomplete = "off" />Home Service Club</label>

                    </div><!-- end of control-group-->
                    <div class = "control-group manfaDiv">
                            <label class ="question"></label>
                            <select id = "wardlist" name ="wardlist" autocomplete="off">
                                <option> Select Warranty</option>
                                <option id = "" value = "Landmark"> Landmark</option>
                                <option id = "" value = "Old Republic"> Old Republic</option>
                                <option id = "" value = "Select Home Warranty"> Select Home Warranty</option>
                                <option id = "" value = "TBD Fidiely"> TBD Fidiely</option>
                                <option id = "" value = "TBD Nation"> TBD Nation</option>
                                <!-- <option id = "wsOther" value = "Other"> Other</option> -->
                            </select>
                            <input type = "text" id ="warrText" class = "span4" autocomplete = "off">
                    </div><!-- end of control-group-->

                    <div class = "control-group manfaDiv1" style = "display:none">
                        <label class ="question">Brand:</label>
                            <label class = "type"><input type= "radio" name = "brand" id ="brd1" autocomplete = "off" />Trane</label>
                            <label class = "type"><input type= "radio" name = "brand" id ="brd2" autocomplete = "off" />Goodman</label>
                            <label class = "type"><input type= "radio" name = "brand" id ="brd3" autocomplete = "off" />Lennox</label>
                            <label class = "type"><input type= "radio" name = "brand" id ="brd4" autocomplete = "off" />Carrier</label>
                            <label class = "type"><input type= "radio" name = "brand" id ="brd5" autocomplete = "off" />Rheem</label>
                            <label class = "type"><input type= "radio" name = "brand" id ="brd6" autocomplete = "off" />Amana</label>
                            <label class = "type"><input type= "radio" name = "brand" id ="brdIDK" autocomplete = "off" />I Don't Know</label>
                    </div>
                    <div class = "control-group manufaDiv1" style = "display:none">
                        <label class ="question" id = "manfaDD"></label>
                            <select>
                                <option>Select</option>
                                <option>Select</option>
                            </select>
                            <input class="span3" type = "text" id = "brText" />
                    </div>
                     <span id = "tunMessage" style="font-size:17px; font-weight:bold;"></span>
                     <span id = "tunMessage1" style="font-size:17px; font-weight:bold;margin-left:200px;"></span>
                    <div class = "control-group policyDiv" style = "display:none">
                        <label  class ="question">Policy Number:</label>
                          <input class="span4" type = "text" maxlength = "20" name ="tun" id = "tun" onkeyup = "policyNum()" onfocus = "policyNum()"
                              autocomplete = "off"/>
                    </div>
                    <div class = "control-group policyDiv" style = "display:none">
                    <label class = "question"> Special Notes:</label>
                    </div>
                    <div class = "control-group policyDiv">
                        <label class = "question2">
                        <textarea  id = "messpost08" style = "margin-top:-10px;" maxlength = "1024" rows ="5"></textarea>
                        <div id ="wordcount08">0</div>
                        </label>
                    </div>

                    <span id = "sedDivMess" style="font-size:17px; font-weight:bold;"></span>
                    <div class = "control-group sedDiv" style = "display:none">
                        <label class ="question">Start Date:</label>
                            <input class="span2" type = "text"  name ="" id = "sdte" onchange = "startDate()"/>
                        <label>End Date:</label>
                            <input class="span2" type = "text"  name ="" id = "edte" onchange = "startDate()"/>
                    </div>
            </div><!--end of id = "warra"-->
          <span id = "svermessage" style="font-size:17px; font-weight:bold;"></span>
                    <div class ="control-group threeOffer">
                        <label class ="question" style = "margin-right:auto; margin-left:-70px;"></label>
                          <input type= "checkbox" name = "aprice" value ="aprice"  id ="aprice" onclick = "seroVal()"/><label style="font-size:17px;"> Express Service</label> <input class="span1" type = "text" placeholder = "$129" />  <label style="font-size:17px;">expected arrival at your home is estimated to be this</label><input class="span2" class type = "text" placeholder = "afternoon"/>

                    </div>
                    <div id = "asapserv">
                        <div class ="control-group threeOffer">
                            <label class ="question" style = "margin-right:auto; margin-left:-70px;"></label>
                            <input type= "checkbox" name = "gprice" value ="gprice"  id ="gprice" onclick = "seroVal()"/><label style="font-size:17px;"> Guaranteed on time or it is free for only</label><input class="span1" type = "text" placeholder = "$99" />
                        </div>

                        <div class ="control-group threeOffer">
                            <label class ="question" style = "margin-right:auto; margin-left:-70px;"></label>
                            <input type= "checkbox" name = "fprice" value ="fprice"  id ="fprice" onclick = "seroVal()"/><label style="font-size:17px;"> Super Saver flex schedule service only</label> <input class="span1" type = "text" placeholder = "$39" />
                        </div>
            <div id = "superserv">
                <span id = "damessage" style="font-size:17px; font-weight:bold;"></span>
                    <div class ="control-group">
                       <label style="font-size:17px;">What day is best for you?</label>
                            <label class = "type" style = "margin-right:auto; margin-left:10px;"><input type= "radio" name = "time" value ="today"  id ="today" onchange = "daysVal()"/>Today</label>
                            <label class = "type"><input type= "radio" name = "time" value ="tomorrow"  id ="tomorrow" onchange = "daysVal()"/>Tomorrow</label>
                            <label class = "type"><input type= "radio" name = "time" value ="asap"  id ="asap" onchange = "daysVal()" />ASAP</label>
                            <label style = "margin-right:auto; margin-left:30px;">Date:</label>
                            <input class="span2" type = "text" name= "tdate" id ="tdate" onchange = "daysVal()" title ="Please enter date" />
                    </div>
                   <span id = "wamessage" style="font-size:17px; font-weight:bold;"></span>
                    <div class ="control-group" id = "disWeek">
                        <label  class ="question" style = "margin-right:auto; margin-left:25px;"></label>
                            <label class = "type"><input type= "radio" name = "timew" value ="morning"  id ="monday" onchange = "weekVal()" />Monday</label>
                            <label class = "type"><input type= "radio" name = "timew" value ="tuesday"  id ="tuesday"  onchange = "weekVal()"/>Tuesday</label>
                            <label class = "type"><input type= "radio" name = "timew" value ="wednesday"  id ="wednesday" onchange = "weekVal()"/>Wednesday</label>
                            <label class = "type"><input type= "radio" name = "timew" value ="thursday"  id ="thursday" onchange = "weekVal()"/>Thursday</label>
                            <label class = "type"><input type= "radio" name = "timew" value ="friday"  id ="friday" onchange = "weekVal()" />Friday</label>
                            <label class = "type"><input type= "radio" name = "timew" value ="saturday"  id ="saturday" onchange = "weekVal()"/>Saturday</label>
                            <label class = "type"><input type= "radio" name = "timew" value ="sunday"  id ="sunday" onchange = "weekVal()" />Sunday</label>
                    </div>
                    <span id = "timessage" style="font-size:17px; font-weight:bold;"></span>
                    <div class ="control-group">
                        <label style="font-size:17px;">What time is best  for you?</label>
                            <label class = "type" style = "margin-right:auto; margin-left:3px;"><input type= "radio" name = "timec" value ="morning"  id ="morning" onclick = "timeVal()"/>Morning</label>
                            <label class = "type"><input type= "radio" name = "timec" value ="afternoon"  id ="afternoon" onclick = "timeVal()" />Afternoon</label>
                            <label class = "type"><input type= "radio" name = "timec" value ="evening"  id ="evening" onclick = "timeVal()" />Evening</label>
                    </div>

                </div><!--superserv-->
            </div><!--asapserv-->

<!--            <span id = "damessage" style="font-size:17px; font-weight:bold;"></span>
                    <div class ="control-group timeAva" style = "display:none">
                       <label style="font-size:17px;">What day is best for you?</label>
                            <label class = "type" style = "margin-right:auto; margin-left:10px;"><input type= "radio" name = "time" value ="today" id ="today" onchange = "daysVal()" autocomplete = "off"/>Today</label>
                            <label class = "type"><input type= "radio" name = "time" value ="tomorrow"  id ="tomorrow" onchange = "daysVal()" autocomplete = "off"/>Tomorrow</label>
                            <label class = "type"><input type= "radio" name = "time" value ="asap"  id ="asap" onchange = "daysVal()" autocomplete = "off" />ASAP</label>
                            <label class = "tdate" style = "margin-right:auto; margin-left:30px;">Date:</label>
                            <input class="span4" type = "text" name= "tdate" id ="tdate" onchange = "daysVal()" autocomplete = "off"/>
                             <p>Date: <input type="text" id="datepicker"></p>
                    </div>-->
<!--                   <span id = "wamessage" style="font-size:17px; font-weight:bold;"></span>
                    <div class ="control-group" id = "disWeek" style = "display:none">
                        <label  class ="question" style = "margin-right:auto; margin-left:25px;"></label>
                            <label class = "type"><input type= "radio" name = "timew" value ="morning"
                                id ="monday" onchange = "weekVal()" autocomplete = "off" />Monday</label>
                            <label class = "type"><input type= "radio" name = "timew" value ="tuesday"
                                id ="tuesday"  onchange = "weekVal()" autocomplete = "off"/>Tuesday</label>
                            <label class = "type"><input type= "radio" name = "timew" value ="wednesday"
                                id ="wednesday" onchange = "weekVal()" autocomplete = "off"/>Wednesday</label>
                            <label class = "type"><input type= "radio" name = "timew" value ="thursday"
                                id ="thursday" onchange = "weekVal()" autocomplete = "off"/>Thursday</label>
                            <label class = "type"><input type= "radio" name = "timew" value ="friday"
                                id ="friday" onchange = "weekVal()" autocomplete = "off" />Friday</label>
                            <label class = "type"><input type= "radio" name = "timew" value ="saturday"
                                id ="saturday" onchange = "weekVal()" autocomplete = "off"/>Saturday</label>
                            <label class = "type"><input type= "radio" name = "timew" value ="sunday"
                                id ="sunday" onchange = "weekVal()" autocomplete = "off" />Sunday</label>
                    </div>-->
                    <!-- <span id = "timessage" style="font-size:17px; font-weight:bold;"></span>
                    <div class ="control-group" id = "timeSel" style = "display:none">
                        <label style="font-size:17px;">What time is best  for you?</label>
                            <label class = "type" style = "margin-right:auto; margin-left:3px;">
                                <input type= "radio" name = "timec" value ="morning"  id ="morning" onclick = "timeVal()" autocomplete = "off"/>Morning</label>
                            <label class = "type"><input type= "radio" name = "timec" value ="afternoon"  id ="afternoon" onclick = "timeVal()" autocomplete = "off" />Afternoon</label>
                            <label class = "type"><input type= "radio" name = "timec" value ="evening"  id ="evening" onclick = "timeVal()" autocomplete = "off" />Evening</label>
                    </div> -->

                    <!--Morning-->
                    <div class = "control-group" id = "mtimeHidden" style = "display:none">
                       <label  class ="question" style = "margin-right:auto; margin-left:25px;"></label>
                            <label class = "type"><input type= "radio" name = "morn" class = "mti"  id ="mor1" onchange ="button2()" autocomplete ="off" />
                                8 am to 12 pm |</label>
                            <label class = "type"><input type= "radio" name = "morn" class = "mti"  id ="mor2" onchange ="button2()" autocomplete ="off" />
                                8 am to 10 am</label>
                            <label class = "type"><input type= "radio" name = "morn" class = "mti"  id ="mor3" onchange ="button2()" autocomplete ="off"/>
                                11 am to 12 pm</label>
                    </div>
                    <!--Afternoon-->
                    <div class = "control-group" id = "atimeHidden" style = "display:none">
                       <label  class ="question" style = "margin-right:auto; margin-left:25px;"></label>
                            <label class = "type"><input type= "radio" name = "aft"  id ="aft1" onchange ="button2()" autocomplete ="off" />
                                12 pm to 5 pm |</label>
                            <label class = "type"><input type= "radio" name = "aft"  id ="aft2" onchange ="button2()" autocomplete ="off" />
                                12 pm to 2:30 pm</label>
                            <label class = "type"><input type= "radio" name = "aft"  id ="aft3" onchange ="button2()" autocomplete ="off"/>
                                2:30 PM to 5 pm</label>
                    </div>
                    <!--Evening-->
                    <div class = "control-group" id = "etimeHidden" style = "display:none">
                       <label  class ="question" style = "margin-right:auto; margin-left:25px;"></label>
                            <label class = "type"><input type= "radio" name = "evn" id ="evn1"  onchange ="button2()" autocomplete ="off"/>
                                6 pm to 9 pm |</label>
                            <label class = "type"><input type= "radio" name = "evn" id ="evn2"  onchange ="button2()" autocomplete ="off"/>
                                6 pm to 7 pm</label>
                            <label class = "type"><input type= "radio" name = "evn" id ="evn3"   onchange ="button2()" autocomplete ="off" />
                                8 pm to 9 pm</label>
                    </div>


                    <div class = "control-group">
                      <label class = "question"> Special Notes:</label>
                    </div>
                    <div class = "control-group">
                        <label class = "question2"  >
                        <textarea  id = "messpost" style = "margin-left:185px; margin-top:-25px;" maxlength = "1024" rows ="5"></textarea>
                        <div id ="wordcount">0</div>
                        </label>
                    </div>

                    <!--This area is for to check if the call is book or lost-->
                    <span id = "callmessage" style="font-size:17px; font-weight:bold;"></span>
                    <div class ="control-group">
                        <label class = "question" style = "margin-right:auto; margin-left:11px;"></label>
                        <!-- <a href="#sConfirm"><input type="button" class="btn" value="Confirm" onclick ="formVal()" onchange = "stboVal()" id = "firm"/></a> -->
                        <a href="#sConfirm"><label class = "type"><input type="radio" name = "webl" class="btn" value="Book" id ="ybook" onclick ="stboVal()" autocomplete = "off"/>Book Call</label></a>
                        <label class = "type"><input type= "radio" name = "webl" value ="lost"  id ="lost" onclick ="stboVal()"
                            autocomplete = "off" />Lost Call</label>
                    </div>

                 <!--This area to display if lost call is selected(end)-->
                <div class="form-actions">
                   <button type="submit" class="btn btn-success" name="btn-client">Submit</button>
                   <a class="btn" href="page2.html"> Return to Inbound Home Page</a>
                </div>


        </form>
   </div><!--span7 area end-->

              <!--span5 area end-->
                <div class = "col-sm-3 col-md-6 col-lg-5">
                <div class="well well-small">
                        <div class = "button2">
                             <a href="second.html"><input type="button" value="Second Opinions"/></a>
                             <a href="cds-script-2.html"><input type="button" value="Sample 2"/></a>
                             <a href="cds-script-2.html"><input type="button" value="Sample 3"/></a>
                             <a href="cds-script-2.html"><input type="button" value="Sample 4"/></a>
                             <a href="cds-script-2.html"><input type="button" value="Sample 5"/></a>
                             <a href="cds-script-2.html"><input type="button" value="Sample 6"/></a>
                             <a href="cds-script-2.html"><input type="button" value="Sample 7"/></a>
                             <a href="cds-script-2.html"><input type="button" value="Sample 8"/></a>
                             <a href="cds-script-2.html"><input type="button" value="Sample 9"/></a>
                             <a href="cds-script-2.html"><input type="button" value="Flyers"/></a>
                        </div>
                </div>
                        <!-- <div id = "okay" style="color:black"></div> -->
                        <div id = "okay0" style="color:black"></div>
                        <div id = "okay1" style="color:blue"></div>
                        <div id = "okay2" style="color:orange"></div>
                        <div id = "okayend" style="color:red"></div>
                        <div id = "time" style="color:red"></div>
                        <div id = "time2" style="color:blue"></div>
                        <div id = "tend" style="color:orange"></div>


            <!--Collapse area start-->
                 <div class="accordion" id="accordion2">
                    <div class="accordion-group">
                        <div class="accordion-heading">
                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">Rep Script</a>
                        </div>
                        <div id="collapseOne" class="accordion-body collapse in">
                            <div class="accordion-inner">
                                    <div class="accordion-inner">
                                        <div class="alert alert-info" style="width:80%; min-height:30px;" id="message">
                                        <strong style="font-size:17px;" id="showScript"></strong></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-group">
                        <div class="accordion-heading">
                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">Frequently Ask Questions</a>
                        </div>
                    <div id="collapseTwo" class="accordion-body collapse">
                        <div class="accordion-inner">
                            <h3>How much does it cost for you to come out? What does your service fee include?</h3>
                            <p>Our service fee includes diagnosing the problem, checking the system operation, and advising of what your system need to work  at its best efficiency. It's really the best bargin when it come to
                            service because it's flat rate and there no hourly charge. When would you like us to come out? Would you like us to come out? Would you prefer us today or tomorrow?</p>
                            <h3>Explanation</h3>
                            <p>You have to give value to the service, or the service fee will always be too high as far as the  customer is concerned. Telling the customer what is coverd by the  service fee helps create the value.</p>
                            <h3>"I can get it cheaper</h3>
                            <p>I'm sure you can find someone who'll charge you less on the front end, but i"m also sure we'll give you better service and better warranties too.  We offer an exclusive "fixed right ot it's free quarantee
                            and lifetime parts warranties. I'm sure the once our technician come out, you'll be very impressed with our service. Now would you be home____or ____ for us to come by?</p>
                            <h3>Explanation</h3>
                            <p>While this isn't really a question, what the customer is really asking is why does it cost so much.  Here again, the important thing is to build value in the customer's mind. Remember that 75%
                            customer's satifaction comes from the service he's received.</p>
                            <h3>How much is Freon?</h3>
                            <p>The technician will be able to evaluate your system and determine what you need.  We don't change by the pound, which in end saves you money. I guarantee we'll do the best possible job for you when
                            we come out</p>
                            <h3>Explanation</h3>
                            <p>If the unit is  cooling, talk with the customer about scheduling a tune up. Remember, up to pounds of Freon can be added for the cost of tune up, and then there are all the other
                            benefits of a tune up to help sell it.</p>
                            <p>If unit is not cooling , book a service call and send a service technician.</p>
                            <h3>How much does it cost for you to come out? What does your service fee include?</h3>
                            <p>Let go ahead and get you on the schedule. Would you prefer us today or tomorrow?</p>
                        </div>
                    </div>
                    </div>
                    <div class="accordion-group">
                        <div class="accordion-heading">
                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree">Customer Summary</a>
                        </div>
                        <div id="collapseThree" class="accordion-body collapse">
                            <div class="accordion-inner">
                                <table class="table table-bordered">
                                    <tr>
                                        <th></th>
                                        <th>Address</th>
                                        <th>Date</th>
                                        <th>Next Service Date</th>
                                        <th>Technician</th>
                                    </tr>
                                   <tr>
                                        <td style = "width:10px"><input type ="checkbox"/></td>
                                        <td> Address 1</td>
                                    </tr>

                                    <tr>
                                        <td><input type ="checkbox"/></td>
                                        <td> Address 1</td>
                                    </tr>
                                    <tr>
                                            <td><input type ="checkbox"/></td>
                                            <td> Address 1</td>
                                    </tr>
                                    <tr>
                                            <td><input type ="checkbox"/></td>
                                            <td> Address 1</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                 <!--Collapse area end-->

            </div><!--span5-->


            </div><!--rowfluid-->

        </div><!--container-->

        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
        <script type="text/javascript" src="js/scripts.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min1.js"></script>
        <script type="text/javascript" src="js/repScript.js"></script>
        <script type="text/javascript" src="js/display.js"></script>
        <script type="text/javascript" src="js/validation.js"></script>
        <script type="text/javascript" src="js/service.js"></script>
        <script type="text/javascript" src="js/format.js"></script>
        <script type="text/javascript" src="js/append.js"></script>
<!--        <script type="text/javascript" src="pjs/jquery.mask.js"></script>-->
        <script type="text/javascript" src="js/call.js"></script>
        <script type="text/javascript" src="js/jquery.mask.min.js"></script>

    </body>
</html>
