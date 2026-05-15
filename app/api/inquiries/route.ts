import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { inquiries } from "@/lib/db/schema";

const createInquirySchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(255, "Name is too long"),
  email: z.string().email("Invalid email address").max(255, "Email is too long"),
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(20, "Mobile number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Invalid mobile number format"),
  description: z
    .union([
      z.string().min(10, "Description must be at least 10 characters if provided"),
      z.literal("").transform(() => undefined),
    ])
    .optional(),
  // company and service are accepted but not persisted (not in DB schema)
  company: z.string().optional(),
  service: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = createInquirySchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path[0] as string,
        message: issue.message,
      }));
      return NextResponse.json(
        { success: false, message: "Validation failed", errors },
        { status: 400 }
      );
    }

    const { name, email, mobile, description } = result.data;

    const [newInquiry] = await db
      .insert(inquiries)
      .values({ name, email, mobile, description, createdAt: new Date(), updatedAt: new Date() })
      .returning();

    return NextResponse.json(
      { success: true, message: "Inquiry created successfully", data: newInquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
