import { razorpay } from "@/lib/razorpay"; 
import { NextResponse } from "next/server";

export async function POST(req) {
    const { price } = await req.json();
    const order = await razorpay.orders.create({
        amount: price * 100,
        currency: "INR",
    });

    return NextResponse.json({
        razorpayOrderId: order.id,
        amount: order.amount,
        currency: order.currency,
    });
}
