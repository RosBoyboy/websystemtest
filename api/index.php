<?php
if (isset($_GET['path']) && is_string($_GET['path']) && $_GET['path'] !== '') {
	$forwardedPath = parse_url($_GET['path'], PHP_URL_PATH) ?: '/';
	$forwardedPath = '/'.ltrim($forwardedPath, '/');
	$forwardedPath = preg_replace('#/+#', '/', $forwardedPath) ?: '/';

	$query = $_SERVER['QUERY_STRING'] ?? '';
	parse_str($query, $params);
	unset($params['path']);
	$query = http_build_query($params);

	$_SERVER['REQUEST_URI'] = $forwardedPath.($query ? '?'.$query : '');
	$_SERVER['PATH_INFO'] = $forwardedPath;
}

require __DIR__ . "/../public/index.php";

