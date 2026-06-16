import { users } from "@/app/data/users";

export async function GET() {
  return Response.json(users);
}

export async function POST(request) {
  const body = await request.json();

  const { name, imageUrl, description } = body ?? {};

  if (!name || !imageUrl || !description) {
    return Response.json(
      { error: "Missing name, imageUrl, or description." },
      { status: 400 }
    );
  }

  const newUser = {
    id: crypto.randomUUID(),
    name,
    imageUrl,
    description,
  };

  users.push(newUser);

  return Response.json(newUser, { status: 201 });
}
