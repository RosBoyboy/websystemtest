<?php
require "vendor/autoload.php";
$app = require_once "bootstrap/app.php";
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$request = Illuminate\Http\Request::create("/api/register", "POST", [
    "name" => "test", "email" => "t4@test.com", "password" => "Test!1234", "password_confirmation" => "Test!1234"
]);
$request->headers->set("Accept", "application/json");
$response = $kernel->handle($request);
echo "STATUS: ".$response->getStatusCode()."\n";
echo trim($response->getContent());

