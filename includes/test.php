<html>

<table>

<tr>

<td>ID</td>
<td>Challenge Name</td>
</tr>
<?php

// Enter username and password
$username = root;
$password = root;

// Create database connection using PHP Data Object (PDO)
$db = new PDO("mysql:host=localhost;dbname=fitfeats", $username, $password);

// Identify name of table within database
$table = 'challenges';

// Create the query - here we grab everything from the table
$stmt = $db->query('SELECT id, challengename FROM challenges WHERE user_id = 1');

// Close connection to database
$db = NULL;

while($rows = $stmt->fetch()){
echo "<tr><td>". $rows['id'] . "</td><td>" . $rows['challengename'] . "</td></tr>";
};
?>
</table>
</html>