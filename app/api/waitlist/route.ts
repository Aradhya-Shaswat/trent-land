import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = 'force-dynamic';

const waitlistSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().optional(),
  age: z.string().optional(),
  experienceLevel: z.string().optional(),
  country: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const result = waitlistSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }

    const { email, firstName, lastName, age, experienceLevel, country } = result.data;

    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!GOOGLE_SHEETS_URL) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Google Sheets columns: Timestamp, Email, First Name, Last Name, Age, Experience, Country, Source
    const sheetData = {
      timestamp: new Date().toISOString(),
      email,
      firstName,
      lastName: lastName || "",
      age: age || "",
      experienceLevel: experienceLevel || "",
      country: country || "",
      source: "Trentarev Waitlist"
    };

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sheetData)
    });

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status}`);
    }

    return NextResponse.json(
      { success: true, message: "Successfully added to waitlist" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process waitlist submission" },
      { status: 500 }
    );
  }
}
