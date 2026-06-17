type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactRequestBody;

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return Response.json(
      { message: "Please fill out every field before submitting." },
      { status: 400 },
    );
  }

  return Response.json({
    message:
      "Message received. In a real app, this would send to an email service or database.",
  });
}