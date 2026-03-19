import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const info = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "andyelizbarashvilii@gmail.com",
    subject: `${info.name} ${info.lastname}-ის წერილი`,
    text: `${info.message} mail:${info.mail}`,
    replyTo: info.mail,
  });

  return Response.json({ success: true });
}
