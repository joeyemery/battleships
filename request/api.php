<?php

	parse_str(file_get_contents("php://input"), $post_vars);

	echo json_encode(array(
		'error' => false,
		'value' => $post_vars
	));

?>