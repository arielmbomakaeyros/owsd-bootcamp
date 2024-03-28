import { Button } from "@/components/ui/button";
import Image from "next/image";
import SignupModule from "./module/SignupModule";

// export const dynamic = 'auto'
// export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'
// export const maxDuration = 5

// const API_URL = "https://owsd-bootcamp.vercel.app"
const API_URL = "http://localhost:3000"

async function getAllClients() {
  // const res = await fetch(`https://api.example.com/artist/${username}/albums`)
  try {
    const users = await fetch(`${ API_URL }/api/users/signup`, {
        cache: "no-store", 
        // next: { revalidate: 10 }, 
    }); 
    return users.json()

    // console.log("-----=-------====-----------====", users)

    // if (!users.ok) {
    //     throw new Error("Failed to fetch users"); 
    // } else {
    //     const test = await users.json()
    // }
  } catch (error) {
      console.log("Error loading attendancesToday: ", error); 
  }
  
}

export default async function Home () {
  const allUsers = await getAllClients()
  console.log(allUsers, ">>>>>>>>>>")
  return (
    <div>
      <SignupModule />
      {/* hi
      <Button 
        name="name"
        className="bg-backgroundOSWD"
      >
        save
      </Button>
      */}

    </div>
  );
}

// export const dynamic = 'auto'
