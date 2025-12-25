import { db } from "@/configs/db";
import { PAYMENT_RECORD_TABLE, STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { razorpay } from "@/lib/razorpay";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { razorpayPaymentId, razorpayOrderId, userId, plan, amount } = await req.json();

    const result = await db.insert(PAYMENT_RECORD_TABLE).values({
        razorpayPaymentId: razorpayPaymentId,
        customerId: userId,
        plan: plan,
        amount: amount,
        razorpayOrderId: razorpayOrderId,
    } as any).returning({ id: PAYMENT_RECORD_TABLE.id });

    return NextResponse.json({
        result: result,
        message: "Payment confirmed successfully",
    });
}