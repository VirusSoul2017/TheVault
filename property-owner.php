<?php
 ob_start();
 session_start();

 include_once 'php/login/config.php';

 $error = false;

 if ( isset($_POST['btn-propown']) ) {



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
 $errMSG = "Successfully added Property Owner to database";
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
<title>Property Owner</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="css/bootstrap1.css" type="text/css" rel ="stylesheet" media="screen" >
<link href="css/bootstrap-responsive.css" type="text/css" rel ="stylesheet">
<link href="css/datepicker.css" type="text/css" rel ="stylesheet">
<link rel="stylesheet" href="css/styles.css" />
<link rel="stylesheet" href="css/jquery-us.css">
<link href="css/bootstrap.css" type="text/css" rel ="stylesheet" media="screen" >
</head>
<body>
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
                        <li class="active"><a href="home.php">Home <span class="sr-only">(current)</span></a></li>
                        <li><a href="cds-script-2.jsp">Service Repair</a></li>
                        <li class="active"><a href="scheduled-service.jsp">Scheduled Service</a></li>
                        <li><a href="replacement.jsp">Replacement</a></li>
                        <li class="active"><a href="compliments.jsp">Compliment(Happy)</a></li>
                        <li><a href="concerns.jsp">Concern(Unhappy)</a></li>
                        <li class="active"><a href="reschedule-service.jsp">Rescheduled Service </a></li>
                        <li><a href="reschedule-schedule.jsp">Rescheduled Scheduled Service </a></li>
                        <li class="active"><a href="reschedule-placement-app.jsp">Rescheduled Replacement Appointment</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
                 <div class="page-header"  style="margin-top:5px; text-align:center; color:#FFFFFF"><h2 style="text-align:center;color:#000000">Human Resource
                 </h2></div>
            </div><!-- /.container-fluid -->

        </nav>
        <div class="container-fluid" style="margin-top:180px;margin-left:auto; margin-right:auto; border-width:1px;border-radius:4px;">
             <!--nesting  column-->
            <div class ="row">
                  <div class="col-xs-12 col-md-12">
                      <form action="">
                        <table border="0">
                          <tr align="center">
                            <td>
                              <b>Search By:</b>
                              <b>Employee ID:</b><input type="text" name="ee_srecordid"/>
                              <b>First Name:</b><input type="text" name="ee_sfname"/>
                              <button type="" class="btn btn-success">Search</button>
                            </td>
                          </tr>
                        </table>
                      </form>
                      <div class = "row">
                        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
                            <div class="col-sm-9 col-md-6 col-lg-9">


                            </div>
                        </form>
                      </div>
                             <div class="col-sm-3 col-md-6 col-lg-3">
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
                                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">Frequest Ask Questions</a>
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
                                            <!-- <table class="table table-bordered">
                                                <tr>
                                                    <th></th>
                                                    <th>Address</th>
                                                    <th>Date</th>
                                                    <th>Next Service Date</th>
                                                    <th>Techican</th>

                                               <tr>
                                                    <td style = "width:10px"><input type ="checkbox"/></td>
                                                    <td> Address 1</td>
                                                    <td> <input class="span3" type = "date" name= "tdate" id ="tdate" /></td>
                                                    <td> <input class="span3" type = "date" name= "tdate" id ="tdate" /></td>
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
                                            </table>  -->
                                        </div>
                                    </div>
                                  </div>

                               </div>
                             </div>
                       </div><!--row-->

                  </div><!--end of column 12-->

        </div><!--container-->
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        <script type="text/javascript" src="js/scripts.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/jquery-ui.js"></script>
<!--        <script type="text/javascript" src="js/bootstrap-datepicker.js"></script>-->
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
<!--        <script type="text/javascript" src="dist/js/modal.js"></script>-->
        <script type="text/javascript" src="js/repScript.js"></script>
        <script type="text/javascript" src="js/display.js"></script>
        <script type="text/javascript" src="js/validation.js"></script>
        <script type="text/javascript" src="js/service.js"></script>
        <script type="text/javascript" src="js/format.js"></script>
        <script type="text/javascript" src="js/append.js"></script>
<!--        <script type="text/javascript" src="pjs/sch.js"></script>-->
<!--        <script type="text/javascript" src="pjs/jquery.mask.js"></script>-->
        <script type="text/javascript" src="js/call.js"></script>
        <script type="text/javascript" src="js/jquery.mask.min.js"></script>
    </body>
</html>
