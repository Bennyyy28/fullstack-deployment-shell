export async function GET() {
  return Response.json({
    status: "ok",
    app: "fullstack-deployment-shell",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
}
