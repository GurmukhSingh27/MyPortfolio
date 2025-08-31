import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const form = await req.formData()
  // honeypot
  if ((form.get("company") as string)?.length) {
    return NextResponse.json({ ok: true })
  }
  const name = (form.get("name") as string) || ""
  const email = (form.get("email") as string) || ""
  const message = (form.get("message") as string) || ""

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 })
  }

  // In real deployment, integrate email service or DB here.
  console.log("[contact] message:", { name, email, message })

  return NextResponse.json({ ok: true })
}
