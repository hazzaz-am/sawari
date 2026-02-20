import { neon } from "@neondatabase/serverless";

/**
 * This TypeScript function handles a POST request to insert user data into a database table,
 * performing validation and error handling.
 * @param {Request} request - The `POST` function you provided is an asynchronous function that handles
 * incoming POST requests. It expects a `Request` object as a parameter.
 * @returns The code is returning a response based on the outcome of the POST request handling:
 */
export async function POST(request: Request) {
	try {
		const sql = neon(process.env.DATABASE_URL as string);
		const { name, email, clerkId } = await request.json();

		if (!name || !email || !clerkId) {
			return Response.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			);
		}

		const response = await sql`
    INSERT INTO users (name, email, clerk_id)
    VALUES(
      ${name},
      ${email},
      ${clerkId}
    )
    `;

		return new Response(JSON.stringify({ data: response }), {
			status: 201,
		});
	} catch (error) {
		console.error("Error while creating user", error);
		return Response.json(
			{ error: error },
			{
				status: 500,
			},
		);
	}
}
