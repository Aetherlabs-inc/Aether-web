export interface Database {
    public: {
        Tables: {
            survey_responses: {
                Row: {
                    id: string
                    email: string | null
                    responses: Record<string, any>
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    email?: string | null
                    responses: Record<string, any>
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    email?: string | null
                    responses?: Record<string, any>
                    created_at?: string
                    updated_at?: string
                }
            }
        }
    }
}

export type SurveyResponse = Database['public']['Tables']['survey_responses']['Row']
