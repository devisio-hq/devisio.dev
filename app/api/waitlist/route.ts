import { NextRequest, NextResponse } from "next/server"
import { resend } from "@/lib/resend"
import { waitlistSchema } from "@/lib/validations"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = waitlistSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0]?.message ?? "Invalid email address" },
        { status: 400 }
      )
    }

    const { email } = result.data

    // Add contact to Resend audience
    const audienceId = process.env.RESEND_AUDIENCE_ID
    if (!audienceId) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    const contactResult = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    })

    // Duplicate email — treat as success
    if (
      contactResult.error &&
      contactResult.error.name !== "validation_error"
    ) {
      // Only fail on non-duplicate errors
      const isDuplicate =
        contactResult.error.message
          ?.toLowerCase()
          .includes("already exists") ||
        (contactResult.error.name as string) === "already_exists"

      if (!isDuplicate) {
        console.error("Resend contacts error:", contactResult.error)
        return NextResponse.json(
          { error: "Failed to register email" },
          { status: 500 }
        )
      }
    }

    // Send confirmation email
    await resend.emails.send({
      from:
        process.env.NODE_ENV === "production"
          ? "noreply@devisio.fr"
          : "onboarding@resend.dev",
      to: email,
      subject: "Tu es sur la liste Devisio !",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h1 style="color: #f97316; font-size: 24px; margin-bottom: 16px;">
            Bienvenue sur la liste Devisio !
          </h1>
          <p style="color: #111827; font-size: 16px; line-height: 1.6;">
            Tu es bien inscrit(e) sur la liste d'accès anticipé.
            On te contacte en premier dès le lancement.
          </p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 24px;">
            — L'équipe Devisio
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Waitlist error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
