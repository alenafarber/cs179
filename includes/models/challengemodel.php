<?php 

	class Challenge{

	/*
		The find static method selects categories
		from the database and returns them as
		an array of Category objects.
	*/

	public static function find($arr = array()){
		global $db;

		if(empty($arr)){
			$st = $db->prepare('SELECT id, challengename FROM challenges WHERE user_id = 1');
		}
		else if($arr['id']){
			$st = $db->prepare('SELECT id, challengename FROM challenges WHERE user_id = 1');
		}
		else{
			throw new Exception("Unsupported property!");
		}

                // This will execute the query, binding the $arr values as query parameters
		$st->execute($arr);

		// Returns an array of Category objects:
		return $st->fetchAll(PDO::FETCH_CLASS, "Challenge");
	}
}

?>