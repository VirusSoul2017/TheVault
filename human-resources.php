<?php
 ob_start();
 session_start();
 // if( isset($_SESSION['user'])!="" ){
 //  header("Location: cds-script.html");
 // }
 include_once 'php/login/config.php';

 $error = false;

 if ( isset($_POST['btn-employee']) ) {

$employee_id              =  $_POST['employee_id'];
$ee_contractnum           =  $_POST['ee_contractnum'];
$ee_fname                 =  $_POST['ee_fname'];
$ee_mname                  =  $_POST['ee_mname'];
$ee_lname                 =  $_POST['ee_lname'];
$ee_email1                =  $_POST['ee_email1'];
$ee_email2                =  $_POST['ee_email2'];
$ee_ssnum                 =  $_POST['ee_ssnum'];
$ee_phocell               =  $_POST['ee_phocell'];
$ee_phoother              =  $_POST['ee_phoother'];
$ee_pref_communication    =  $_POST['ee_pref_communication'];
$ee_adr1                  =  $_POST['ee_adr1'];
$ee_adr2                  =  $_POST['ee_adr2'];
$ee_city                  =  $_POST['ee_city'];
$ee_state                 =  $_POST['ee_state'];
$ee_zip5                  =  $_POST['ee_zip5'];
$ee_zip4                  =  $_POST['ee_zip4'];
$ee_health                =  $_POST['ee_health'];
$ee_vision                =  $_POST['ee_vision'];
$ee_dental                =  $_POST['ee_dental'];
$ee_shortdisability       =  $_POST['ee_shortdisability'];
$ee_longdisability        =  $_POST['ee_longdisability'];
$ee_life                  =  $_POST['ee_life'];
$ee_exempt                =  $_POST['ee_exempt'];
$ee_paycycle              =  $_POST['ee_paycycle'];
$ee_bonus                 =  $_POST['ee_bonus'];
$ee_vacation              =  $_POST['ee_vacation'];
$ee_sickdays              =  $_POST['ee_sickdays'];
$ee_startdte              =  $_POST['ee_startdte'];
$ee_enddte                =  $_POST['ee_enddte'];
$ee_pay                   =  $_POST['ee_pay'];
$ee_type                  =  $_POST['ee_type'];
$ee_appstatus             =  $_POST['ee_appstatus'];
$ee_rehire                =  $_POST['ee_rehire'];
$ee_dpt                   =  $_POST['ee_dpt'];
$ee_concerns              =  $_POST['ee_concerns'];

  if (empty($employee_id)) {
   $error = true;
   $nameError = "Please enter your full name.";
  }
if( !$error ) {
   $query = "INSERT INTO employees1(employee_id, ee_contractnum, ee_fname, ee_mname, ee_lname, ee_email1, ee_email2, ee_ssnum, ee_phocell, ee_phoother, ee_pref_communication, ee_adr1, ee_adr2, ee_city, ee_state, ee_zip5, ee_zip4, ee_health, ee_vision, ee_dental, ee_shortdisability, ee_longdisability, ee_life, ee_exempt, ee_paycycle, ee_bonus, ee_vacation, ee_sickdays, ee_startdte, ee_enddte, ee_pay, ee_type, ee_appstatus, ee_rehire, ee_dpt, ee_concerns)
VALUES('$employee_id', '$ee_contractnum', '$ee_fname', '$ee_mname', '$ee_lname', '$ee_email1', '$ee_email2', '$ee_ssnum', '$ee_phocell', '$ee_phoother', '$ee_pref_communication', '$ee_adr1', '$ee_adr2', '$ee_city', '$ee_state', '$ee_zip5', '$ee_zip4', '$ee_health', '$ee_vision', '$ee_dental', '$ee_shortdisability', '$ee_longdisability', '$ee_life', '$ee_exempt', '$ee_paycycle', '$ee_bonus', '$ee_vacation', '$ee_sickdays', '$ee_startdte', '$ee_enddte', '$ee_pay', '$ee_type', '$ee_appstatus', '$ee_rehire', '$ee_dpt', '$ee_concerns')";

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
        <title>Human Resource</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/bootstrap1.css" type="text/css" rel ="stylesheet" media="screen" >
        <link href="css/bootstrap-responsive.css" type="text/css" rel ="stylesheet">
        <link href="css/datepicker.css" type="text/css" rel ="stylesheet">
        <link rel="stylesheet" href="css/styles.css" />
        <!-- <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />  -->
        <link rel="stylesheet" href="css/jquery-us.css">
       <!--  <link rel="stylesheet" href="http:/resources/demos/style.css"> -->
        <link href="css/bootstrap.css" type="text/css" rel ="stylesheet" media="screen" >
        <style>
/*            label
            {
                display: inline-block;
                width: 100px;
                margin-bottom: 5px;
                align: center;
            }*/
/*            .span1 input[type = "text"]{
                height: 10px;
                width:200px;
                font-size: 15px;


              }
            */
        </style>
    </head>
    <body onload ="repScript()">
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
        <!--nav end -->

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
                            <div class="col-sm-9 col-md-6 col-lg-9">
                                <form method="post" class="form-inline" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" autocomplete="off">
                                  <h3 align="center">Basic Information:</h3>
                                  <table border="0" align="center">
                                    <tr>
                                      <td>
                                        <b>Employee ID:</b>
                                        <?php echo $nameError; ?></span>
                                      </td>
                                      <td>
                                        <input type="text" name="employee_id" value="<?php echo $employee_id ?>"/>
                                      </td>
                                      <td>
                                        <b>Contract Number:</b>
                                      </td>
                                      <td>
                                        <input type="text" name="ee_contractnum" value="<?php echo $ee_contractnum ?>"/>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>First Name:</b>
                                      </td>
                                      <td>
                                        <input type="text" name="ee_fname" value="<?php echo $ee_fname ?>"/>
                                      </td>
                                      <td>
                                        <b>Middle Name:</b>
                                      </td>
                                      <td>
                                        <input type="text" name="ee_mname" value="<?php echo $ee_mname ?>"/>
                                      </td>
                                      <td>
                                        <b>Last Name:</b>
                                      </td>
                                      <td>
                                        <input type="text" name="ee_lname" value="<?php echo $ee_lname ?>"/>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Email 1:</b>
                                      </td>
                                      <td>
                                        <input type="email" name="ee_email1" value="<?php echo $ee_email1 ?>"/>
                                      </td>
                                      <td>
                                        <b>Email 2:</b>
                                      </td>
                                      <td>
                                        <input type="email" name="ee_email2" value="<?php echo $ee_email2 ?>"/>
                                      </td>
                                      <td>
                                        <b>SSN:</b>
                                      </td>
                                      <td>
                                        <input type="text" name="ee_ssnum" value="<?php echo $ee_ssnum ?>"/>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Phone 1:</b>
                                      </td>
                                      <td>
                                        <input type="tel" name="ee_phocell" value="<?php echo $ee_phocell ?>"/>
                                      </td>
                                      <td>
                                        <b>Phone 2:</b>
                                      </td>
                                      <td>
                                        <input type="tel" name="ee_phoother" value="<?php echo $ee_phoother ?>"/>
                                      </td>
                                      <td>
                                        <b>Preferred Contact: </b>
                                      </td>
                                      <td>
                                        <select name="ee_pref_communication" value="<?php echo $ee_pref_communication ?>">
					<option selected="selected"></option>
                                          <option value="Phone 1">Phone 1</option>
                                          <option value="Phone 2">Phone 2</option>
                                          <option value="Email 1">Email 1</option>
                                          <option value="Email 2">Email 2</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Address 1:</b>
                                      </td>
                                      <td>
                                        <input type="text" name="ee_adr1" value="<?php echo $ee_adr1 ?>"/>
                                      </td>
                                      <td>
                                        <b>Address 2:</b>
                                      </td>
                                      <td>
                                        <input type="text" name="ee_adr2" value="<?php echo $ee_adr2 ?>" />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>City:</b>
                                      </td>
                                      <td>
                                        <input type="text" name="ee_city" value="<?php echo $ee_city ?>"/>
                                      </td>
                                      <td>
                                        <b>State:</b>
                                      </td>
                                      <td>
                                        <select class="select4" name="ee_state" value="<?php echo $ee_state ?>">
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
                                      </td>
                                      <td>
                                        <b>Zip:</b>
                                      </td>
                                      <td>
                                        <input type="text" name="ee_zip5" value="<?php echo $ee_zip5 ?>"/>
                                        <b>-</b><input type="text" name="ee_zip4" value="<?php echo $ee_zip4 ?>"/>
                                      </td>
                                    </tr>
                                  </table>
                                  <br/>
                                  <h3 align="center">Insurance | Benefits | Deductions</h3>
                                  <table border="0" align="center">
                                    <tr>
                                      <td>
                                        <b>Medical Benefit:</b>
                                      </td>
                                      <td>
                                        <select name="ee_health" value="<?php echo $ee_health ?>">
                                          <option value="no">N/A</option>
                                          <option value="pckg1">Package 1</option>
                                          <option value="pckg2">Package 2</option>
                                        </select>
                                      </td>
                                      <td>
                                        <b>Vision Benefit:</b>
                                      </td>
                                      <td>
                                        <select name="ee_vision" value="<?php echo $ee_vision ?>">
                                          <option value="<?php echo $ee_vision ?>">N/A</option>
                                          <option value="<?php echo $ee_vision ?>">Gold Package</option>
                                          <option value="<?php echo $ee_vision ?>">Bronze Package</option>
                                        </select>
                                      </td>
                                      <td>
                                        <b>Dental Benefit:</b>
                                      </td>
                                      <td>
                                        <select name="ee_dental">
                                          <option value="n/a">N/A</option>
                                          <option value="Gold Package">Gold Package</option>
                                          <option value="Bronze Package">Bronze Package</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Short-Term Disability:</b>
                                      </td>
                                      <td>
                                        <select name="ee_shortdisability" value="<?php echo $ee_shortdisability ?>">
                                          <option value="0">$0,000</option>
                                          <option value="5">$5,000</option>
                                          <option value="10">$10,000</option>
                                          <option value="15">$15,000</option>
                                          <option value="20">$20,000</option>
                                        </select>
                                      </td>
                                      <td>
                                        <b>Long-Term Disability:</b>
                                      </td>
                                      <td>
                                        <select name="ee_longdisability" value="<?php echo $ee_longdisability ?>">
                                          <option value="0">$0,000</option>
                                          <option value="5">$5,000</option>
                                          <option value="10">$10,000</option>
                                          <option value="15">$15,000</option>
                                          <option value="20">$20,000</option>
                                        </select>
                                      </td>
                                      <td>
                                        <b>Life Insurance:</b>
                                      </td>
                                      <td>
                                        <select name="ee_life" value="<?php echo $ee_life ?>">
                                          <option value="0">$0,000</option>
                                          <option value="5">$5,000</option>
                                          <option value="10">$10,000</option>
                                          <option value="15">$15,000</option>
                                          <option value="20">$20,000</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <b>Exempt:</b>
                                      </td>
                                      <td>
                                        <select name="ee_exempt" value="<?php echo $ee_exempt ?>">
                                          <option value="Yes">Yes</option>
                                          <option value="No">No</option>
                                          <option value="N/A">N/A</option>
                                        </select>
                                        <td>
                                          <b>Paycycle</b>
                                        </td>
                                        <td>
                                          <input type="text" name="ee_paycycle" value="<?php echo $ee_paycycle ?>">
                                        </td>
                                        <td>
                                          <b>Bonus:</b>
                                        </td>
                                        <td>
                                          <input type="text" name="ee_bonus" value="<?php echo $ee_bonus ?>"/>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <b>Vacation:</b>
                                        </td>
                                        <td>
                                          <input type="text" name="ee_vacation" value="<?php echo $ee_vacation ?>"/>
                                        </td>
                                        <td>
                                          <b>Sick Days:</b>
                                        </td>
                                        <td>
                                          <input type="text" name="ee_sickdays" value="<?php echo $ee_sickdays ?>"/>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <b>Child Support:</b>
                                        </td>
                                        <td>
                                          <input type="text" name="ee_chldspt" value="<?php echo $ee_chldspt ?>"/>
                                        </td>
                                        <td>
                                          <b>Sport Coverage:</b>
                                        </td>
                                        <td>
                                          <input type="text" name="ee_sprtcvg" value="<?php echo $ee_sprtcvg ?>"/>
                                        </td>
                                        <td>
                                          <b>Alimony:</b>
                                        </td>
                                        <td>
                                          <input type="text" name="ee_alimony" value="<?php echo $ee_alimony ?>"/>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <b>Other Deductions:</b>
                                        </td>
                                        <td>
                                          <input type="text" name="ee_ded_otr" value="<?php echo $ee_ded_otr ?>"/>
                                        </td>
                                      </tr>
                                    </table>
                                    <br/>
                                    <h3 align="center">Job Functions</h3>
                                    <table border="0">
                                      <tr>
                                        <td>
                                          <b>Start Date:</b>
                                        </td>
                                        <td>
                                          <input type="date" name="ee_startdte" value="<?php echo $ee_startdte ?>"/>
                                        </td>
                                        <td>
                                          <b>End Date:</b>
                                        </td>
                                        <td>
                                          <input type="date" name="ee_enddte" value="<?php echo $ee_enddte ?>"/>
                                        </td>
                                        <td>
                                          <b>Pay Rate:</b>
                                        </td>
                                        <td>
                                          <input type="text" name="ee_pay" value="<?php echo $ee_pay ?>"/>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <b>Employee Type:</b>
                                        </td>
                                        <td>
                                          <select name="ee_type" value="<?php echo $ee_type ?>">
                                            <option value="Contract (1099)">Contract (1099)</option>
                                            <option value="In-House (W-4)">In-House (W-4)</option>
                                          </select>
                                        </td>
                                        <td>
                                          <b>Application Status:</b>
                                        </td>
                                        <td>
                                          <input type="text" name="ee_appstatus" value="<?php echo $ee_appstatus ?>"/>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <b>Rehire:</b>
                                        </td>
                                        <td>
                                          <input type="text" name="ee_rehire" value="<?php echo $ee_rehire ?>"/>
                                        </td>
                                        <td>
                                          <b>Department:</b>
                                        </td>
                                        <td>
                                          <select name="ee_dpt" value="<?php echo $ee_dpt ?>">
                                              <option value="Executive Manager">Executive Manager</option>
                                              <option value="Human Resources>">Human Resources</option>
                                              <option value="Accounts Payable">Accounts Payable</option>
                                              <option value="Accounts Receivable">Accounts Receivable</option>
                                              <option value="In-Inventory">In-Inventory</option>
                                              <option value="Out-Inventory">Out-Inventory</option>
                                              <option value="Invoice Processing">Invoice Processing</option>
                                              <option value="1099 PayRoll">1099 PayRoll</option>
                                              <option value="Dispatch">Dispatch</option>
                                              <option value="Call Center In">Call Center In</option>
                                              <option value="Call Center Out">Call Center Out</option>
                                              <option value="Customer Service">Customer Service</option>
                                              <option value="Service Technician">Service Technician</option>
                                              <option value="Service Installation">Service Installation</option>
                                              <option value="Sales">Sales</option>
                                              <option value="Warehouse">Warehouse</option>
                                              <option value="Office Supply">Office Supply</option>
                                              <option value="School">School</option>
                                              <option value="New Hires">New Hires</option>
                                              <option value="Laborers">Laborers</option>
                                              <option value="Part Runner">Part Runner</option>
                                              <option value="Print Shop">Print Shop</option>
                                              <option value="Developer">Developer</option>
                                              <option value="Net Admin">Net Admin</option>
                                            </select>
                                          </td>
                                          <td>
                                            <b>Work Concerns:</b>
                                          </td>
                                          <td>
                                            <textarea rows="2" cols="5" name="ee_concerns" value="<?php echo $ee_concerns ?>"></textarea>
                                          </td>
                                        </tr>
                                      </table>
                                    <br/>
                                    <table border="0">
                                      <tr align="center">
                                        <td>
                                          <button type="submit" class="btn btn-success" name="btn-employee">Add Employee</button>
                                        </td>
                                        <td>
                                          <button type="reset" class="btn btn-success">Clear Fields</button>
                                        </td>
                                        <td>
                                          <button type="" class="btn btn-success">Update Employee</button>
                                        </td>
                                      </tr>
                                    </table>
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
