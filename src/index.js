export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // API Health Check
    if (url.pathname === "/api/health") {
      return Response.json({ status: "ok", app: "Taskora Phase 1" });
    }

    // Home Page Route
    if (url.pathname === "/") {
      return new Response(getHomePageHTML(), {
        headers: { "Content-Type": "text/html; charset=UTF-8" }
      });
    }

    // Default 404 Response
    return new Response("Not Found", { status: 404 });
  }
};

function getHomePageHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Taskora — Watch. Complete. Earn.</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #f8fafc; color: #0f172a; }
    header { background: #fff; padding: 18px 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; }
    .logo { font-size: 24px; font-weight: 800; color: #16a34a; }
    .hero { text-align: center; padding: 80px 20px; }
    .hero h1 { font-size: 42px; margin-bottom: 20px; }
    .hero h1 span { color: #16a34a; }
    .btn { display: inline-block; padding: 12px 24px; background: #16a34a; color: white; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 20px; }
  </style>
</head>
<body>
  <header>
    <div class="logo">Taskora</div>
    <a href="/login" style="color: #16a34a; text-decoration: none; font-weight: bold;">Login</a>
  </header>
  <section class="hero">
    <h1>Watch. <span>Complete.</span> Earn.</h1>
    <p>Complete verified tasks and earn real rewards with Taskora.</p>
    <a href="/signup" class="btn">Get Started (Phase 1)</a>
  </section>
</body>
</html>`;
}
