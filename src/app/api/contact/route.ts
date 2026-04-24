import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  nome:        z.string().min(2),
  sobrenome:   z.string().min(2),
  email:       z.string().email(),
  telefone:    z.string().min(10),
  empresa:     z.string().min(2),
  assunto:     z.enum(['analytics', 'importacao', 'armazenagem', 'transporte', 'parceria', 'outro']),
  mensagem:    z.string().min(20),
  privacidade: z.literal(true),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.safeParse(body)

    if (!data.success) {
      return NextResponse.json({ error: 'Dados inválidos', details: data.error.flatten() }, { status: 400 })
    }

    // TODO: Integrate with CRM / email service (e.g. RD Station, HubSpot, SendGrid)
    console.log('[contact]', data.data)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
