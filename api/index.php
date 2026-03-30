<?php
if (isset($_GET['path']) && is_string($_GET['path']) && $_GET['path'] !== '') {
	$forwardedPath = $_GET['path'];
	if ($forwardedPath[0] !== '/') {
		$forwardedPath = '/'.$forwardedPath;
	}

	$_SERVER['REQUEST_URI'] = $forwardedPath;
	$_SERVER['PATH_INFO'] = $forwardedPath;
}

require __DIR__ . "/../public/index.php";

