<?php include 'database.php'; ?>

<?php

// Send the Variables
if(!isset($_POST['submit']))
{
  $ee_id                    =  $_POST['ee_recordid'];
  $ee_fname                 =  $_POST['ee_fname'];
  $ee_mname                 =  $_POST['ee_init'];
  $ee_lname                 =  $_POST['ee_lname'];
  $ee_phocell               =  $_POST['ee_phocell'];
  $ee_phoother              =  $_POST['ee_phoother'];
  $ee_email1                =  $_POST['ee_email1'];
  $ee_email2                =  $_POST['ee_email2'];
  $ee_ssnum                 =  $_POST['ee_ssnum'];
  $ee_contractnum           =  $_POST['ee_contractnum'];
  $ee_adr1                  =  $_POST['ee_adr1'];
  $ee_adr2                  =  $_POST['ee_adr2'];
  $ee_adrext                =  $_POST['ee_adrext'];
  $ee_city                  =  $_POST['ee_city'];
  $ee_state                 =  $_POST['ee_state'];
  $ee_zip5                  =  $_POST['ee_zip5'];
  $ee_zip4                  =  $_POST['ee_zip4'];
  $ee_type                  =  $_POSST['ee_type'];
  $ee_health                =  $_POST['ee_health'];
  $ee_vision                =  $_POST['ee_vision'];
  $ee_dental                =  $_POST['ee_dental'];
  $ee_shortdisability       =  $_POST['ee_shortdisability'];
  $ee_longdisability        =  $_POST['ee_longdisability'];
  $ee_life                  =  $_POST['ee_life'];
  $ee_withholding_support   =  $_POST['ee_withholding_support'];
  $ee_sportcoverage         =  $_POST['ee_sportcoverage'];
  $ee_alimony               =  $_POST['ee_alimony'];
  $ee_withholding_2         =  $_POST['ee_withholding_2'];
  $ee_concerns              =  $_POST['ee_concerns'];
  $ee_appstatus             =  $_POST['ee_appstatus'];
  $ee_pref_communication    =  $_POST['ee_pref_communication'];
  $ee_dpt                   =  $_POST['ee_dpt'];
  $ee_startdte              =  $_POST['ee_startdte'];
  $ee_enddte                =  $_POST['ee_enddte'];
  $ee_vacation              =  $_POST['ee_vacation'];
  $ee_paycycle              =  $_POST['ee_paycycle'];
  $ee_pay                   =  $_POST['ee_pay'];
  $ee_sickdays              =  $_POST['ee_sickdays'];
  $ee_bonus                 =  $_POST['ee_bonus'];
  $ee_exempt                =  $_POST['ee_exempt'];
  $ee_rehire                =  $_POST['ee_rehire'];
}

//Execute the query

mysqli_query($con, "INSERT INTO employees1(ee,recordid, ee_fname, ee_init, ee_lname, ee_phocell, ee_phoother, ee_email1, ee_email2, ee_ssnum, ee_contractnum, ee_adr1,
ee_adr2, ee_adrext, ee_city, ee_state, ee_zip5, ee_zip4, ee_type, ee_health, ee_vision, ee_dental, ee_shortdisability, ee_longdisability, ee_life, ee_withholding_support,
ee_sportcoverage, ee_alimony, ee_withholding_2, ee_concerns, ee_appstatus, ee_pref_communication, ee_dpt, ee_startdte, ee_enddte, ee_vacation, ee_paycycle, ee_pay, ee_sickdays,
ee_bonus, ee_exempt, ee_rehire,)
				VALUES($ee_recordid, '$ee_fname', '$ee_init', '$ee_lname', '$ee_phocell', '$ee_phoother', '$ee_email1', '$ee_email2', '$ee_ssnum', '$ee_contractnum', '$ee_adr1', '$ee_adr2',
        '$ee_adrext', '$ee_city', '$ee_state', $ee_zip5', '$ee_zip4', '$ee_type', '$ee_health', '$ee_vision', '$ee_dental', '$ee_shortdisability', '$ee_longdisability', '$ee_life',
      '$ee_withholding_support', '$ee_sportcoverage', '$ee_alimony', '$ee_withholding_2', '$ee_concerns', '$ee_appstatus', '$ee_pref_communication', '$ee_dpt', '$ee_startdte',
    '$ee_enddte', '$ee_vacation', '$ee_paycycle', '$ee_pay', '$ee_sickdays', '$ee_bonus', '$ee_exempt', '$ee_rehire')");
?>

