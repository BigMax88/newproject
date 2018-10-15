<?php
    header("Content-type:text/html;charset=utf-8");
    $username = $_GET['username'];
    $con = mysql_connect("localhost","root","root");
    if(!$con){
    	echo "连接数据库失败";
    }else {
    	mysql_select_db("youkala",$con);
    	$sqlstr="select * from yonghu where username='$username'";
    	$result = mysql_query($sqlstr,$con);
    	mysql_close($con);
    	$rows = mysql_num_rows($result);
    	if($rows==0){
    		echo "1";//可以使用
    	}else{
    		echo "0";//已经被人使用
    	}
    }
?>