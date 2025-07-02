// import { NextResponse } from "next/server";

// export async function POST(req) {

//   const {user} = req.json();

//   const result = await inngest.send({
//     name: 'user.create',
//     data:{
//       user:user
//     }
//   })

//   return NextResponse.json({result:result});
// }

import { NextResponse } from "next/server";
import { inngest } from "@/inngest/client"; // Make sure this path is correct

export async function POST(req) {
  try {
    const { user } = await req.json();

    if (!user) {
      return NextResponse.json({ error: "User data is missing" }, { status: 400 });
    }

    const result = await inngest.send({
      name: 'user.create',
      data: {
        user: user
      }
    });

    return NextResponse.json({ result: result });
  } catch (error) {
    console.error("Error in create-user API route:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
