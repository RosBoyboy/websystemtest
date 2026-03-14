<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Access Required — NurbanNxt</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Inter', sans-serif;
            background: #020617;
            color: #f8fafc;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
        }

        /* Subtle grid overlay */
        body::before {
            content: '';
            position: fixed;
            inset: 0;
            background-image:
                linear-gradient(rgba(249,115,22,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(249,115,22,0.03) 1px, transparent 1px);
            background-size: 40px 40px;
            pointer-events: none;
        }

        .card {
            width: 100%;
            max-width: 420px;
            background: #0f172a;
            border: 1px solid #1e293b;
            border-radius: 1.25rem;
            padding: 2.5rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        /* Orange top accent bar */
        .card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 3px;
            background: linear-gradient(90deg, #f97316, #fb923c, #f97316);
        }

        /* Lock icon container */
        .icon-wrap {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background: rgba(249,115,22,0.1);
            border: 1px solid rgba(249,115,22,0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
        }

        .icon-wrap svg {
            width: 32px;
            height: 32px;
            color: #f97316;
        }

        /* Logo */
        .logo {
            font-size: 1.1rem;
            font-weight: 700;
            letter-spacing: -0.01em;
            color: #94a3b8;
            margin-bottom: 1.75rem;
        }

        .logo span { color: #f97316; }

        /* Error badge */
        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(239,68,68,0.12);
            border: 1px solid rgba(239,68,68,0.3);
            color: #f87171;
            font-size: 0.7rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            padding: 4px 12px;
            border-radius: 999px;
            margin-bottom: 1.25rem;
        }

        .badge-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #ef4444;
            animation: pulse 1.8s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }

        h1 {
            font-size: 1.4rem;
            font-weight: 700;
            color: #f1f5f9;
            margin-bottom: 0.625rem;
            line-height: 1.3;
        }

        p {
            color: #64748b;
            font-size: 0.875rem;
            line-height: 1.6;
            margin-bottom: 2rem;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            background: #f97316;
            color: #fff;
            font-size: 0.9rem;
            font-weight: 600;
            padding: 0.8rem 1.5rem;
            border-radius: 0.625rem;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: background 0.15s, transform 0.1s;
            letter-spacing: 0.01em;
        }

        .btn:hover {
            background: #ea6c10;
            transform: translateY(-1px);
        }

        .btn:active { transform: translateY(0); }

        .btn svg { width: 16px; height: 16px; }

        .divider {
            border: none;
            border-top: 1px solid #1e293b;
            margin: 1.75rem 0 1.25rem;
        }

        .footer-text {
            font-size: 0.75rem;
            color: #334155;
        }

        .footer-text a {
            color: #475569;
            text-decoration: none;
        }

        .footer-text a:hover { color: #94a3b8; }
    </style>
</head>
<body>
    <div class="card">
        <!-- Logo -->
        <div class="logo"><span>Nurban</span>Nxt — Admin</div>

        <!-- Lock icon -->
        <div class="icon-wrap">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
        </div>

        <!-- Error badge -->
        <div class="badge">
            <span class="badge-dot"></span>
            Authentication Required
        </div>

        <h1>Admin Access Restricted</h1>
        <p>
            This area is restricted to authorised administrators only.<br>
            You must sign in with a valid admin account to continue.
        </p>

        <!-- Login button -->
        <a href="/admin/app#/login" class="btn">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
            </svg>
            Sign In to Admin Panel
        </a>

        <hr class="divider">

        <p class="footer-text">
            Not an admin? <a href="/">Return to store</a>
        </p>
    </div>
</body>
</html>
