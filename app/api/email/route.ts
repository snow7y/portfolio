import {NextResponse, type NextRequest} from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import {env} from "process"; //.envからの呼び出し

export async function POST(request: NextRequest) {
  const {name, email, message} = await request.json();

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: env.NODEMAILER_EMAIL,
    subject: `portfolio お問い合わせ ${name}様より, ${email}`,
    text: message,
  };

  try {
    transport.sendMail(mailOptions);
    return NextResponse.json({message: "Success!", status: 200});
  } catch (err) {
    return NextResponse.json({message: "Failed!", status: 500});
  }
}
