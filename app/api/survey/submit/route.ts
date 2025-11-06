import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/src/lib/supabase-server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, responses } = body;

    // Validate request body
    if (!responses || typeof responses !== 'object') {
      return NextResponse.json(
        { message: 'Invalid request: responses are required' },
        { status: 400 }
      );
    }

    // All survey responses are anonymous - no user_id is collected
    const supabase = createClient();

    // Prepare the data for insertion (anonymous)
    const surveyData = {
      email: email || null,
      responses: responses,
    };

    // Insert into database
    const { data, error } = await supabase
      .from('survey_responses')
      .insert(surveyData)
      .select()
      .single();

    if (error) {
      console.error('Error inserting survey response:', error);
      return NextResponse.json(
        { message: 'Failed to submit survey response', error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Survey response submitted successfully', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in survey submit route:', error);
    return NextResponse.json(
      {
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

