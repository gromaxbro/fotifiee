<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>done</title>
</head>
<body>
	
	<?php 
	error_reporting(0);
		// include 'index.html';
		$gender = "";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  $gender = $_POST["name"];
  $f = "hi";
  $arr = [
  	"kushal" => "kushal",
  	"sweta" => "sweta",
    "himani" => "himani",
    "priyansu" => "priyansu",
    "ritesh" => "ritesh",
  ];
  $bts = "bts";
  $gb = $arr[$gender];
  if ($gb){
  	echo "<div class=$bts>$gb</div>";
  }
  else{
  	echo "user not found";
  }
  // echo("<div class = $f>$gender</div>");
}


  include 'home.html';
?>

<!-- <button onclick="fg()">search</button> -->
<script src="script.js"></script>

</body>
</html>