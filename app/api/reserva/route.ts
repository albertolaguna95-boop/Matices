import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY no configurada — email omitido')
    return NextResponse.json({ ok: true, warn: 'email_skipped' })
  }

  const resend  = new Resend(apiKey)
  const FROM    = process.env.RESEND_FROM        ?? 'Matices Restaurante <onboarding@resend.dev>'
  const MAIL_TO = process.env.RESTAURANTE_EMAIL  ?? 'reservas@maticesrestaurante.es'

  try {
    const { nombre, email, fecha, hora, personas, mensaje } = await req.json()

    // ── Email al cliente ──────────────────────────────────────────
    await resend.emails.send({
      from:    FROM,
      to:      email,
      subject: `Reserva recibida · ${fecha} a las ${hora} — Matices`,
      html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reserva recibida — Matices</title>
</head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0A;padding:48px 24px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

        <!-- Logo / nombre -->
        <tr><td align="center" style="padding-bottom:40px;">
          <div style="display:inline-block;border:1px solid rgba(201,168,76,0.2);padding:12px 32px;">
            <span style="font-family:Georgia,serif;font-size:22px;letter-spacing:0.18em;color:#C9A84C;text-transform:uppercase;">
              Matices
            </span>
          </div>
        </td></tr>

        <!-- Separador dorado -->
        <tr><td align="center" style="padding-bottom:36px;">
          <div style="width:60px;height:1px;background:#C9A84C;opacity:0.4;display:inline-block;"></div>
          <span style="font-size:9px;letter-spacing:0.45em;color:#C9A84C;text-transform:uppercase;vertical-align:middle;margin:0 12px;">
            Reserva recibida
          </span>
          <div style="width:60px;height:1px;background:#C9A84C;opacity:0.4;display:inline-block;"></div>
        </td></tr>

        <!-- Título -->
        <tr><td align="center" style="padding-bottom:12px;">
          <h1 style="margin:0;font-family:Georgia,serif;font-size:36px;font-weight:400;color:#ffffff;letter-spacing:0.02em;">
            Hola, ${nombre}
          </h1>
        </td></tr>
        <tr><td align="center" style="padding-bottom:40px;">
          <p style="margin:0;font-size:14px;color:rgba(232,220,200,0.5);letter-spacing:0.05em;">
            Hemos recibido tu solicitud de reserva
          </p>
        </td></tr>

        <!-- Detalle reserva -->
        <tr><td style="background:#111111;border:1px solid rgba(201,168,76,0.12);padding:32px 36px;margin-bottom:24px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-bottom:20px;border-bottom:1px solid rgba(201,168,76,0.1);">
                <span style="font-size:9px;letter-spacing:0.42em;color:#C9A84C;text-transform:uppercase;">Fecha</span>
                <p style="margin:6px 0 0;font-size:16px;color:#ffffff;font-family:Georgia,serif;">${fecha}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 0;border-bottom:1px solid rgba(201,168,76,0.1);">
                <span style="font-size:9px;letter-spacing:0.42em;color:#C9A84C;text-transform:uppercase;">Hora</span>
                <p style="margin:6px 0 0;font-size:16px;color:#ffffff;font-family:Georgia,serif;">${hora}</p>
              </td>
            </tr>
            <tr>
              <td style="padding-top:20px;">
                <span style="font-size:9px;letter-spacing:0.42em;color:#C9A84C;text-transform:uppercase;">Personas</span>
                <p style="margin:6px 0 0;font-size:16px;color:#ffffff;font-family:Georgia,serif;">${personas}</p>
              </td>
            </tr>
            ${mensaje ? `
            <tr>
              <td style="padding-top:20px;border-top:1px solid rgba(201,168,76,0.1);">
                <span style="font-size:9px;letter-spacing:0.42em;color:#C9A84C;text-transform:uppercase;">Notas</span>
                <p style="margin:6px 0 0;font-size:14px;color:rgba(232,220,200,0.55);line-height:1.6;">${mensaje}</p>
              </td>
            </tr>` : ''}
          </table>
        </td></tr>

        <!-- Aviso confirmación -->
        <tr><td align="center" style="padding:36px 0 40px;">
          <p style="margin:0;font-size:13px;color:rgba(232,220,200,0.4);line-height:1.8;max-width:400px;">
            Nos pondremos en contacto contigo para confirmar la reserva.
            Si necesitas modificarla llámanos al
            <a href="tel:+34910231572" style="color:#C9A84C;text-decoration:none;">+34 910 23 15 72</a>.
          </p>
        </td></tr>

        <!-- Dirección -->
        <tr><td align="center" style="border-top:1px solid rgba(201,168,76,0.1);padding-top:32px;">
          <p style="margin:0 0 4px;font-size:9px;letter-spacing:0.42em;color:rgba(201,168,76,0.35);text-transform:uppercase;">
            Matices Bar Restaurante
          </p>
          <p style="margin:0;font-size:12px;color:rgba(232,220,200,0.25);letter-spacing:0.05em;">
            Av. Mar Mediterráneo, 73 · 28341 Valdemoro, Madrid
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
    })

    // ── Notificación interna al restaurante ───────────────────────
    await resend.emails.send({
      from:    FROM,
      to:      MAIL_TO,
      subject: `Nueva reserva: ${nombre} · ${fecha} ${hora} · ${personas} personas`,
      html: `
<!DOCTYPE html>
<html lang="es">
<body style="margin:0;padding:32px;background:#f4f4f4;font-family:Arial,sans-serif;font-size:14px;color:#333;">
  <h2 style="margin:0 0 20px;color:#0A0A0A;">Nueva reserva recibida</h2>
  <table cellpadding="8" cellspacing="0" style="background:#fff;border:1px solid #ddd;width:100%;max-width:480px;">
    <tr><td style="color:#888;width:120px;">Nombre</td><td><strong>${nombre}</strong></td></tr>
    <tr style="background:#fafafa;"><td style="color:#888;">Email</td><td>${email}</td></tr>
    <tr><td style="color:#888;">Teléfono</td><td>${personas}</td></tr>
    <tr style="background:#fafafa;"><td style="color:#888;">Fecha</td><td><strong>${fecha}</strong></td></tr>
    <tr><td style="color:#888;">Hora</td><td><strong>${hora}</strong></td></tr>
    <tr style="background:#fafafa;"><td style="color:#888;">Personas</td><td>${personas}</td></tr>
    ${mensaje ? `<tr><td style="color:#888;">Notas</td><td>${mensaje}</td></tr>` : ''}
  </table>
</body>
</html>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Email error:', err)
    return NextResponse.json({ ok: false, error: 'Error al enviar el email' }, { status: 500 })
  }
}
