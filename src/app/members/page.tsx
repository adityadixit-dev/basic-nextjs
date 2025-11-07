import { auth } from "@clerk/nextjs/server";

const page = async () => {
  const { sessionClaims } = await auth();
  const userEmail = sessionClaims?.email;

  return (
    <section>
      <h2>Authenticated Route</h2>
      <p>You need to be signed in to view this route</p>
      <p>Since you are seeing this, congratulations!! you have signed in</p>
      <p>Your Email is : {userEmail}</p>
    </section>
  );
};

export default page;
