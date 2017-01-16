<?php include 'database.php'; ?>

<?php

// Send the Variables
if(!isset($_POST['submit']))
{
  $ee_id               =  $_POST['ee_id'];
  $ee_fname            =  $_POST['ee_fname'];
  $ee_mname            =  $_POST['ee_mname'];
  $ee_lname            =  $_POST['ee_lname'];
  $ee_email1           =  $_POST['ee_email1'];
  $ee_email2           =  $_POST['ee_email2'];
  $ee_ss               =  $_POST['ee_ss'];
  $ee_contractnum      =  $_POST['ee_contractnum'];
  $ee_adr1             =  $_POST['ee_adr1'];
  $ee_adr2             =  $_POST['ee_adr2'];
  $ee_city             =  $_POST['ee_city'];
  $ee_state            =  $_POST['ee_state'];
  $ee_zip5             =  $_POST['ee_zip5'];
  $ee_zip4             =  $_POST['ee_zip4'];
  $ee_health           =  $_POST['ee_health'];
  $ee_vision           =  $_POST['ee_vision'];
  $ee_dental           =  $_POST['ee_dental'];
  $sht_trm             =  $_POST['sht_trm'];
  $lng_trm             =  $_POST['lng_trm'];
  $lfe_ins             =  $_POST['lfe_ins'];
  $ee_childsup         =  $_POST['ee_childsup'];
  $ee_sportcover       =  $_POST['ee_sportcover'];
  $ee_alimony          =  $_POST['ee_alimony'];
  $ee_deduct_other     =  $_POST['ee_deduct_other'];
  $ee_work_concerns    =  $_POST['ee_work_concerns'];
  $ee_appstatus        =  $_POST['ee_appstatus'];
  $ee_comm             =  $_POST['ee_comm'];
  $ee_dpt              =  $_POST['ee_dpt'];
  $ee_hiredte          =  $_POST['ee_hiredte'];
  $ee_enddte           =  $_POST['ee_enddte'];
  $ee_vacation         =  $_POST['ee_vacation'];
  $ee_sickdays         =  $_POST['ee_sickdays'];
  $ee_rehire           =  $_POST['ee_rehire'];
  $ee_resume           =  $_POST['ee_resume'];
  $ee_exam1            =  $_POST['ee_exam1'];
  $ee_cert             =  $_POST['ee_cert'];
  $ee_dgr              =  $_POST['ee_dgr'];
}

//Execute the query

mysqli_query($con, "INSERT INTO employees1(ee_id, ee_fname, ee_mname, ee_lname, ee_email1, ee_email2, ee_ss, ee_contractnum,
ee_adr1, ee_adr2, ee_city, ee_state, ee_zip5, ee_zip4, ee_health, ee_vision, ee_dental, sht_trm, lng_trm, lfe_ins, ee_childsup,
ee_sportcover, ee_alimony, ee_deduct_other, ee_work_concerns, ee_appstatus, ee_comm, ee_dpt, ee_hiredte, ee_enddte, ee_vacation,
ee_sickdays, ee_rehire, ee_resume, ee_exam1, ee_cert, ee_dgr)
				VALUES('$ee_id','$ee_fname','$ee_mname','$ee_lname','$ee_email1','$ee_email2','$ee_ss','$ee_contractnum','$ee_adr1','$ee_adr2',
        '$ee_city','$ee_state','$ee_zip5','$ee_zip4','$ee_health','$ee_vision','$ee_dental','$sht_trm','$lng_trm','$lfe_ins','$ee_childsup',
      '$ee_sportcover','$ee_alimony','$ee_deduct_other','$ee_work_concerns','$ee_appstatus','$ee_comm','$ee_dpt','$ee_hiredte','$ee_enddte',
    '$ee_vacation','$ee_sickdays','$ee_rehire','$ee_resume','$ee_exam1','$ee_cert','$ee_dgr')");
?>
