<?php
if (isset($_GET['path']) && is_string($_GET['path']) && $_GET['path'] !== '') {
	$forwardedPath = parse_url($_GET['path'], PHP_URL_PATH) ?: '/';
	$forwardedPath = '/'.ltrim($forwardedPath, '/');
	$forwardedPath = preg_replace('#/+#', '/', $forwardedPath) ?: '/';

	$query = $_SERVER['QUERY_STRING'] ?? '';
	parse_str($query, $params);
	unset($params['path']);
	$query = http_build_query($params);

	// Vercel runs this entrypoint under /api/index.php. Symfony strips the
	// function base path (/api), so prefix once to preserve original routes.
	$effectivePath = '/api'.$forwardedPath;

	$_SERVER['REQUEST_URI'] = $effectivePath.($query ? '?'.$query : '');
	$_SERVER['PATH_INFO'] = $effectivePath;
}

require __DIR__ . "/../public/index.php";

