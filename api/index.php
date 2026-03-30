<?php
if (isset($_GET['path']) && is_string($_GET['path']) && $_GET['path'] !== '') {
	$forwardedPath = parse_url($_GET['path'], PHP_URL_PATH) ?: '/';
	$forwardedPath = '/'.ltrim($forwardedPath, '/');
	$forwardedPath = preg_replace('#/+#', '/', $forwardedPath) ?: '/';

	$query = $_SERVER['QUERY_STRING'] ?? '';
	parse_str($query, $params);
	unset($params['path']);
	$query = http_build_query($params);

	// Vercel runs this entrypoint under /api/index.php. For API routes we
	// prefix once because Symfony may strip the function base path (/api).
	// Keep non-API routes unchanged so SPA pages (e.g. /admin/app) still match.
	$isApiPath = strpos($forwardedPath, '/api/') === 0 || $forwardedPath === '/api';
	$effectivePath = $isApiPath ? '/api'.$forwardedPath : $forwardedPath;

	$_SERVER['REQUEST_URI'] = $effectivePath.($query ? '?'.$query : '');
	$_SERVER['PATH_INFO'] = $effectivePath;
}

require __DIR__ . "/../public/index.php";

