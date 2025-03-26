// app/api/systems/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const body = await req.json()
  console.log('Received request body:', body);
  
  const supabase = getSupabaseClient()

  const { data, error } = await supabase
    .from('systems')
    .insert([{ name: body.name, description: body.description }])

  if (error) {
    console.error('Error inserting system:', error)
    return NextResponse.json({ error: 'Failed to create system' }, { status: 500 })
  }

  return NextResponse.json({ data }, { status: 200 })
}
