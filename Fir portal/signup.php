<?php
$username=$_POST['username'];
$name=$_POST['name'];
$email=$_POST['email'];
$gender=$_POST['gender'];
$password=$_POST['password'];
$city=$_POST['city'];
$occupation=$_POST['occupation'];
mysql_connect('localhost','root','');
mysql_select_db('police_management');
$query="insert into register(username,name,email,gender,password,city,occupation) values ('$username','$name','$email','$gender','$password','$city','$occupation')";
mysql_query($query);

header("Location:index.html");
?>