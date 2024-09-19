import {NextResponse, type NextRequest} from "next/server";
import {env} from "process"; //.envからの呼び出し
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

const sendTo = env.SEND_EMAIL || "";

export async function POST(request: NextRequest) {
  const {name, email, message} = await request.json();

  try {
    const response = await resend.emails.send({
      from: "portfolio contact <onboarding@resend.dev>",
      to: [sendTo],
      subject: `portfolio お問い合わせ ${name}様より`,
      html: `
        <p>【名前】</p>
        <p>${name}</p>
        <p>【メッセージ内容】</p>
        <p>${message}</p>
        <p>【メールアドレス】</p>
        <p>${email}</p>
    `,
    });

    if (!response) {
      return NextResponse.json({message: "Failed!", status: 500});
    } else {
      return NextResponse.json({message: "Success!", status: 200});
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({message: "Failed!", status: 500});
  }
}
