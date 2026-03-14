<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Seller Panel — NurbanNxt</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link rel="stylesheet" href="{{ mix('css/seller.css') }}" />
</head>
<body>
    <div id="seller-app"></div>
    <script src="{{ mix('js/seller.js') }}"></script>
</body>
</html>
