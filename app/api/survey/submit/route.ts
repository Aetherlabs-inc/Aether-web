import { createClient } from '@/src/lib/supabase-server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, responses } = body;

        if (!responses) {
            return NextResponse.json(
                { error: 'Responses are required' },
                { status: 400 }
            );
        }

        const supabase = createClient();

        const { data, error } = await supabase
            .from('survey_responses')
            .insert({
                email: email || null,
                responses: responses,
            })
            .select()
            .single();

        if (error) {
            console.error('Error saving survey response:', error);
            return NextResponse.json(
                { error: 'Failed to save survey response' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, id: data.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing survey submission:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

