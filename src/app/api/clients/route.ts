import connectMongoDB from "@/lib/mongodb";
import Clients from "@/models/client_model";
import { NextResponse } from "next/server";


export const POST = async (request: any) => {
    try {
        const { fullName, email, phoneNumber, companyName, interestingService } = await request.json(); 
        console.log("in backend", fullName, email, phoneNumber, companyName, interestingService)
        await connectMongoDB();
        const client = { fullName, email, phoneNumber: parseInt(phoneNumber), companyName, interestingService }
        console.log("........client", client)
        const clientResult = await Clients.create(client); 
        console.log("........", clientResult)
        return NextResponse.json({ message: "Client Created Successfully", clientResult }, { status: 201 } ); 
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}; 



export const GET = async (request: any) => {
    try {
        console.log("00000000000000000000000")
        await connectMongoDB(); 
        const clients = await Clients.find(); 
        return NextResponse.json({ message: "Clients Listed Successfully", clients }, { status: 200 } ); 
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}; 