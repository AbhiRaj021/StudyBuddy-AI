// "use client";
// import { db } from "@/configs/db";
// import { USER_TABLE } from "@/configs/schema";
// import { useUser } from "@clerk/nextjs";
// import axios from "axios";
// import { eq } from "drizzle-orm";
// import React, { useEffect } from "react";

// function Provider({ children }) {
//   const { user } = useUser();

//   useEffect(() => {
//     user && CheckIsNewUser();
//   }, [user]);

//   // check if user already Exist
//   const CheckIsNewUser = async () => {
//     // const result = await db.select().from(USER_TABLE)
//     // .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
//     // // console.log(result);

//     // if(result?.length == 0)
//     // {
//     //   // If Not, Then add to DB
//     //   const userResponse = await db.insert(USER_TABLE).values({
//     //     name: user?.fullName,
//     //     email: user?.primaryEmailAddress?.emailAddress
//     //   }).returning({id:USER_TABLE.id})
//     //   // console.log(userResponse);
//     // }

//     try{
//       const response = await axios.post("/api/create-user", { user: user });
//       console.log(response.data);
//     }catch (error){
//       console.error("Error creating user:", error);
//     }
//   }
//   return <div>{children}</div>;
// }

// export default Provider;

"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Provider({ children }) {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (user) {
      checkIsNewUser();
      // Redirect to dashboard if on profile page
      if (pathname === '/dashboard') {
        router.push('/dashboard');
      }
    }
    console.log("User:", user);
  }, [user, pathname]);

  const checkIsNewUser = async () => {
    try {
      const response = await axios.post("/api/create-user", { 
        user: {
          fullName: user?.fullName,
          primaryEmailAddress: user?.primaryEmailAddress?.emailAddress || ""
        } 
      });
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        console.error("Error creating user:", error);
      }
    }
  }

  return <>{children}</>;
}

export default Provider;
