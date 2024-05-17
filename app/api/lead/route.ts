import { NextResponse, NextRequest } from "next/server";
import { sendEmail } from "@/libs/mailgun";

// This route is used to store the leads that are generated from the landing page.
// The API call is initiated by <ButtonLead /> component
// Duplicate emails just return 200 OK
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { companions, transport, name, phone, menu, song } = body;

    await sendEmail({
      to: 'manu.rgcz@gmail.com',
      subject: 'Confirmación de asistencia a la boda',
      html: `<h3>Hola chicos, soy ${name} y te confirmo que iré a la boda.</h3>
        </p>Nombre: ${name}</p>
        <p>Teléfono: ${phone}</p>
        <p>Acompañantes: ${companions}</p>
        <p>Menú: ${menu}</p>
        <p>Transporte: ${transport}</p>
        <p>Canción: ${song}</p>
        <p>¡Nos vemos en la boda!</p>
      `
    });

    return NextResponse.json({});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
