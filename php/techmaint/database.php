<?php
$host="localhost";
$user="root_admin";
$password="C0D#r297533";
$con=mysqli_connect($host,$user,$password);
if(!$con) {
  echo '<h1>Connected to MySQL</h1>';
  //if connected then Select Database.
  $db=mysqli_select_db("hr_db",$con);
  $query=mysqli_query("hr_db",$db);
}
else {
  echo '<h1>MySQL Server is not connected</h1>';
}

?>
