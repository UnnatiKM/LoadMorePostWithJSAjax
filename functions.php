<?php

// Function file

function morepostss()
		{
				$perpage = (isset($_POST["perpage"])) ? $_POST["perpage"] : 4;
    			$page = (isset($_POST['pageNumber'])) ? $_POST['pageNumber'] : 0;
    			$postlength = (isset($_POST['postlength'])) ? $_POST["postlength"] : 0; 
    			header("Content-Type: text/html");
    			$args = array( 'post_type' => 'case-studies', 'posts_per_page' => $perpage,'orderby'=>'menu_order','offset'=>$postlength);
    			$loop = new WP_Query( $args );
    			case_studies_posts($loop);
}
