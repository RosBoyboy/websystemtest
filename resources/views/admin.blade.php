<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>NurbanNxt Admin</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('css/admin.css') }}">
</head>
<body class="bg-slate-950 antialiased">
    <div id="admin-app"></div>
    <script src="{{ mix('js/admin.js') }}"></script>
</body>
</html>
