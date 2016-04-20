<?php

/*
	This file creates a new MySQL connection using the PDO class.
	The login details are taken from includes/config.php.
*/

$username = root;
$password = root;


try {
	$db = new PDO(
		"mysql:host=localhost;dbname=fitfeats;charset=UTF8",
		$username,
		$password
	);

    $db->query("SET NAMES 'utf8'");
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
	error_log($e->getMessage());
	die("A database error was encountered");
}

?>