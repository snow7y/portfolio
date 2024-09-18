import {NextResponse, type NextRequest} from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import {env} from "process"; //.envからの呼び出し

export async function POST(request: NextRequest) {
  const {name, email, message} = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
    logger: true,
    debug: true,
    connectionTimeout: 30000,
    socketTimeout: 30000,
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: env.NODEMAILER_EMAIL,
    subject: `portfolio お問い合わせ ${name}様より`,
      html: `
        <p>【名前】</p>
        <p>${name}</p>
        <p>【メッセージ内容】</p>
        <p>${message}</p>
        <p>【メールアドレス】</p>
        <p>${email}</p>
    `,
  };

  try {
    transport.sendMail(mailOptions);
    return NextResponse.json({message: "Success!", status: 200});
  } catch (err) {
    return NextResponse.json({message: "Failed!", status: 500});
  }
}
