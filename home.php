<?php
 ob_start();
 session_start();
 require_once 'php/login/config.php';

 // if session is not set this will redirect to login page
 if( !isset($_SESSION['user']) ) {
  header("Location: index.php");
  exit;
 }
 // select loggedin users detail
 $res=mysql_query("SELECT * FROM users WHERE userId=".$_SESSION['user']);
 $userRow=mysql_fetch_array($res);
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Welcome - <?php echo $userRow['userEmail']; ?></title>
<link rel = "stylesheet" href="css/bootstrap1.css" type ="text/css">
<link rel = "stylesheet" href="css/bootstrap-responsive.css" type ="text/css">
<link rel= "stylesheet" href="css/styles.css" type ="text/css" >
<link href="css/bootstrap.css" type="text/css" rel ="stylesheet" media="screen" >
<link href="css/flat-ui.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link rel="shortcut icon" href="images/favicon.ico">
</head>
<body>

 <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">AC Genius</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
          </ul>
          <ul class="nav navbar-nav navbar-right">

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
     <span></span>&nbsp;Hi <?php echo $userRow['userName']; ?>&nbsp;<span class="caret"></span></a>             
<ul class="dropdown-menu">
                <li><a href="php/login/logout.php?logout"><span></span>&nbsp;Sign Out</a></li>
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

 <!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Inbound Home</title>
        <link href="css/bootstrap.css" type="text/css" rel ="stylesheet" media="screen" >
        <link href="css/bootstrap-responsive.css" type="text/css" rel ="stylesheet">
        <link href="css/datepicker.css" type="text/css" rel ="stylesheet">
        <link rel="stylesheet" href="css/styles.css" />
        <!-- <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />  -->
        <link rel="stylesheet" href="css/jquery-us.css">
        <!--  <link rel="stylesheet" href="http:/resources/demos/style.css"> -->
        <link href="css/bootstrap1.css" type="text/css" rel ="stylesheet" media="screen" >
            
    </head>
    <body>
    <div class="container-fluid" style="margin-top:3px;margin-top:100px;margin-left:auto; margin-right:auto;border-width:1px;border-radius:4px;">
       <div class = "row">
            <div class="col-sm-9 col-md-6 col-lg-7">
			<p><br/><br/></p>
                    <div class ="buttons form-actions">
                            <a href="callTaking.html"><input type="submit" id = "sercall" value="Call Taking" onclick = "displayNum()"/></a>
                            <a href="cds-script-2.html"><input type="submit" id = "serep" value="Service Repair" onclick = "displayNum()"></a>
                            <a href="scheduled-service.html"><input type="submit" id = "sservice" value="Schedule Service" onclick = "displayNum()" /></a>
                            <a href="replacement.html"><input type="button" id = "reservice" value="Replacement" /></a>
                            <a href="compliments.html"><input type="button" value="Compliment(Happy)" /></a>
                            <a href="concerns.html"><input type="button" value="Concern(Unhappy)" /></a>
                            <a href="solicitor.html"><input type="button" value="Soliciter(Selling a Product)"/></a>
                            <a href="Advertisements.html"><input type="button" value="Advertisements(Promoting a Product)" /></a>
                            <a href="reschedule-service.html"><input type="button" value="Rescheduled Service Appointment" /></a>
                            <a href="reschedule-schedule.html"><input type="button" value="Rescheduled Scheduled Service" /></a>
                            <a href="reschedule-placement-app.html"><input type="button" value="Rescheduled Replacement Appointment" /></a>
                            <a href="club-membership-cancel.html"><input type="button" value="Cancel Club Membership" /></a>
                            <a href="club-membership-modify.html"><input type="button" value="Modify Club Membership" /></a>
                            <a href="billing.html"><input type="button" value="Billing Question" /></a>
                            <a href="payment.html"><input type="button" value="Make Payment" /></a>
                            <a href="message-employee.html"><input type="button" value="Message for Employee" /></a>
                            <a href="human-resources.php"><input type="button" value="Human Resource" /></a>
                            <a href="payroll.html"><input type="button" value="Payroll" /></a>
                            <a href="fleet.html"><input type="button" value="Fleet" /></a>
                            <a href="purchasing.html"><input type="button" value="Purchasing"/></a>
                            <a href="energy-savings-concern.html"><input type="button" value="Energy Saving Concern" /></a>
                            <a href="update_club_payment.html"><input type="button" value="Update Club Payment Source"/></a>
                            <a href="fin_app.html"><input type="button" value="Finiacing Application"/></a>
                            <a href="fin_stat.html"><input type="button" value="Finiacing Application Status"/></a>
                            <a href="request-home-repair.html"><input type="button" value="Request Home Repair"/></a>
                            <a href="technician-arrival-inquiry.html"><input type="button" value="Technician Arrivial Status"/></a>
                            <a href="home-repair.html"><input type="button" value="Home Repair Status"/></a>
                            <a href="accounts-payable.html"><input type="button" value="Accounts Payable"/></a>
                            <a href="accounts-receivable.html"><input type="button" value="Accounts Receivable"/></a>
                            <a href="employment.html"><input type="button" value="Employment"/></a>
                            <a href="employment-verification.html"><input type="button" value="Verification of Employment"/></a>
                            <a href=""><input type="button" value="Parts"/></a>
                            <a href=""><input type="button" value="Hobson Properties"/></a>
                            <a href=""><input type="button" value="Self Storage"/></a>
                            <a href=""><input type="button" value="Hubson Ranch"/></a>
                            <a href=""><input type="button" value="Application Status"/></a>
                            <a href=""><input type="button" value="My Fleet GPS"/></a>
                            <a href=""><input type="button" value="HVAC Wireless"/></a>
                            <a href=""><input type="button" value="Duct Cleaning"/></a>
                            <a href=""><input type="button" value="Indoor Air Quailty"/></a>
                            <a href=""><input type="button" value="HVAC"/></a>
                            <a href=""><input type="button" value="AC Genius"/></a>
                    </div>
                
                </form>
            </div><!--end of class="col-sm-9 col-md-6 col-lg-7"-->
            
            <div class = "col-sm-3 col-md-6 col-lg-5">
                  <!--button start-->
                    <div class = "button2" style = "margin-top:10px;">
                         <a href="#cancel_form" id="login_pop"><input type = "button" value = "Videoes for Test"/></a>
                         <a href=""><input type="button" value="Current Advertisements" /></a>
                         <a href=""><input type="button" value="Product Update" /></a>
                         <a href=""><input type="button" value="Custumer Comments"/></a>
                         <a href=""><input type="button" value="Company News"/></a>
                         <a href=""><input type="button" value="Quiz()"/></a>
                    </div>
            <!--button end-->
            
            <!--popup form 1-->
<!--                <a href="#x" class="overlay" id = "cancel_form"></a>
                    <div class = "popup">
                        <p>Launch Video</p>
                            <a href="#" role="button" class="btn" data-toggle="modal">Video 1</a>
                            <a href="#" role="button" class="btn" data-toggle="modal">Video 2</a>
                            <a href="#" role="button" class="btn" data-toggle="modal">Video 3</a>
                            <a href="#" role="button" class="btn" data-toggle="modal">Video 4</a>
                        <div class = "div1">
                            <input type="button" value="Lunch"/>
                            <input type="button" value="Pause"/>
                            <input type="button" value="Exit"/>
                        </div>-->
                        <!--<a href="#login_form" id="login_pop">Beginning</a>-->
<!--                        <a class="close" href="#close"></a>-->
<!--                    </div>-->
            <!--POPUP AREA end-->
            <div class="accordion" id="accordion2">
                    <div class="accordion-group">
                        <div class="accordion-heading">
                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">Frequent Ask Questions</a>
                        </div>
                        <div id="collapseTwo" class="accordion-body collapse">
                            <div class="accordion-inner">
                                <h3>How much does it cost for you to come out? What does your service fee include?</h3>
                                <p>Our service fee includes diagnosing the problem, checking the system operation, and advising of what your system need to work  at its best efficiency. It's really the best bargin when it come to  
                                service because it's flat rate and there no hourly charge. When would you like us to come out? Would you like us to come out? Would you prefer us today or tomorrow?</p>
                                <h3>Explanation</h3>
                                <p>You have to give value to the service, or the service fee will always be too high as far as the  customer is concerned. Telling the customer what is covered by the  service fee helps create the value.</p>
                                <h3>"I can get it cheaper</h3>
                                <p>I'm sure you can find someone who'll charge you less on the front end, but i"m also sure we'll give you better service and better warranties too.  We offer an exclusive "fixed right ot it's free quarantee 
                                and lifetime parts warranties. I'm sure the once our technician come out, you'll be very impressed with our service. Now would you be home____or ____ for us to come by?</p>
                                <h3>Explanation</h3>
                                <p>While this isn't really a question, what the customer is really asking is why does it cost so much.  Here again, the important thing is to build value in the customer's mind. Remember that 75%
                                customer's satisfaction comes from the service he's received.</p>
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
             </div>
               <!--Collapse area end-->
            
            <!--img display-->

                <div style = "display:none;" id = "ad1" class = "mediaAd">
                    <label class="page-header"><input type = "checkbox" autocomplete = "off">Ad 1:</label>
                        <img src="img/49-tune-up-3.png"  class="img-thumbnail" >
                </div>

                <div style = "display:none;" id = "ad2" class = "mediaAd">
                    <label><input type = "checkbox" autocomplete = "off">Ad 2:</label>
                        <img src="img/second-opinion-coupon-2.png"  class="img-thumbnail"  >
                </div>

                <div style = "display:none;" id = "ad3" class = "mediaAd">
                    <label><input type = "checkbox" autocomplete = "off">Ad 3:</label>
                        <img src="img/second-opinion-coupon-2.png"  class="img-thumbnail"  >
                </div>

                <div style = "display:none;" id = "ad4" class = "mediaAd">
                    <label><input type = "checkbox" autocomplete = "off">Ad 4:</label>
                        <img src="img/49-tune-up-3.png"  class="img-thumbnail" >
                </div>
            <!--end of image area-->
            </div><!--end of class = "col-sm-3 col-md-6 col-lg-5"-->
       </div><!--end of row-fluid-->
	   <br/>
	   <br/>
	   <br/>
    </div><!--end of Container-fluid--> 
    
        <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
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
        <script type="text/javascript" src="js/call.js"></script>
        <script type="text/javascript" src="js/jquery.mask.js"></script>
        <script type="text/javascript" src="js/jquery.mask.min.js"></script>
        
    </body>
</html>
    <script src="assets/jquery-1.11.3-jquery.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>

</body>
</html>
<?php ob_end_flush(); ?>

