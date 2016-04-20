<?php

/* This controller renders the home page */

class ChallengeController{
	public function handleRequest(){

		// Select all the categories:
		$content = Challenge::find();

		render('home',array(
			'title'		=> 'hello',
			'content'	=> $content
		));
	}
}




?>