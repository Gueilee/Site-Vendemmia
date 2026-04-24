import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({ email: z.string().email() })

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.safeParse(body)

    if (!data.success) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // TODO: Integrate with email marketing (e.g. RD Station, Mailchimp, Brevo)
    console.log('[newsletter]', data.data.email)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
