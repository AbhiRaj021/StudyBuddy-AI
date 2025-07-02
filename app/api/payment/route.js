import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { razorpay } from "@/lib/razorpay";
import { eq } from "drizzle-orm";
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
