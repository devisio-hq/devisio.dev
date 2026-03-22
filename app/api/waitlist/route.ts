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

    // Check for existing contact before creating (Resend silently upserts — no error on duplicates)
    const existingContacts = await resend.contacts.list({ audienceId })
    if (existingContacts.data?.data?.some((c) => c.email === email)) {
      return NextResponse.json({ success: true })
    }

    const contactResult = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    })

    if (contactResult.error) {
      console.error("Resend contacts error:", contactResult.error)
      return NextResponse.json(
        { error: "Failed to register email" },
        { status: 500 }
      )
    }

    // Send confirmation email
    await resend.emails.send({
      from:
        process.env.NODE_ENV === "production"
          ? "noreply@devisio.dev"
          : "onboarding@resend.dev",
      to: email,
      subject: "Tu es sur la liste Devisio !",
      html: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bienvenue sur la liste Devisio</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- HEADER -->
          <tr>
            <td style="background-color:#f97316;border-radius:12px 12px 0 0;padding:32px 40px;text-align:center;">
              <span style="font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Devisio</span>
              <p style="margin:8px 0 0;color:#fed7aa;font-size:13px;font-weight:500;letter-spacing:0.5px;text-transform:uppercase;">Devis vocal pour artisans</p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 40px 32px;">
              <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#111827;line-height:1.3;">
                Tu es sur la liste&nbsp;! 🎉
              </h1>
              <p style="margin:0 0 24px;font-size:15px;color:#6b7280;line-height:1.5;">
                On t'a bien enregistré. Tu seras parmi les premiers à accéder à Devisio dès le lancement.
              </p>

              <!-- DIVIDER -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr><td style="border-top:1px solid #e5e7eb;"></td></tr>
              </table>

              <!-- WHAT IS DEVISIO -->
              <h2 style="margin:0 0 12px;font-size:16px;font-weight:700;color:#111827;">C'est quoi Devisio ?</h2>
              <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.6;">
                Devisio est l'outil qui te permet de <strong>créer un devis professionnel en parlant</strong> — comme si tu expliquais ton chantier à un collègue. Tu parles, Devisio rédige, tu envoies.
              </p>

              <!-- 3 FEATURES -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background-color:#fff7ed;border-left:4px solid #f97316;border-radius:0 8px 8px 0;padding:14px 16px;margin-bottom:10px;">
                    <p style="margin:0;font-size:14px;color:#111827;line-height:1.5;">
                      <strong style="color:#f97316;">Parle, ne tape pas.</strong><br/>
                      Décris ton intervention à voix haute. Devisio génère les lignes du devis automatiquement.
                    </p>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
                <tr>
                  <td style="background-color:#fff7ed;border-left:4px solid #f97316;border-radius:0 8px 8px 0;padding:14px 16px;">
                    <p style="margin:0;font-size:14px;color:#111827;line-height:1.5;">
                      <strong style="color:#f97316;">Prêt en 60 secondes.</strong><br/>
                      Fini les tableaux Excel et les PDF à remplir à la main. Ton devis est propre et envoyable en un clic.
                    </p>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;margin-top:10px;">
                <tr>
                  <td style="background-color:#fff7ed;border-left:4px solid #f97316;border-radius:0 8px 8px 0;padding:14px 16px;">
                    <p style="margin:0;font-size:14px;color:#111827;line-height:1.5;">
                      <strong style="color:#f97316;">3 devis offerts pour tester.</strong><br/>
                      Accès anticipé inclus — tu testes gratuitement dès l'ouverture, sans carte bancaire.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- DIVIDER -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr><td style="border-top:1px solid #e5e7eb;"></td></tr>
              </table>

              <!-- NEXT STEPS -->
              <p style="margin:0 0 8px;font-size:15px;color:#374151;line-height:1.6;">
                <strong>La suite ?</strong> On te contacte dès que les portes ouvrent. Garde un oeil sur ta boite mail.
              </p>
              <p style="margin:0;font-size:15px;color:#374151;line-height:1.6;">
                Des questions d'ici là ? Réponds directement à cet email.
              </p>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#f9fafb;border-radius:0 0 12px 12px;border-top:1px solid #e5e7eb;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#111827;">Devisio</p>
              <p style="margin:0 0 12px;font-size:12px;color:#9ca3af;">Landes, France</p>
              <p style="margin:0;font-size:11px;color:#d1d5db;line-height:1.6;">
                Tu reçois cet email car tu t'es inscrit(e) sur la liste d'attente Devisio.<br/>
                <a href="https://devisio.dev/politique-confidentialite" style="color:#9ca3af;text-decoration:underline;">Politique de confidentialité</a>
                &nbsp;·&nbsp;
                <a href="https://devisio.dev/mentions-legales" style="color:#9ca3af;text-decoration:underline;">Mentions légales</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
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
