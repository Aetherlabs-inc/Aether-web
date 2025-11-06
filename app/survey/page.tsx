'use client';

import React from 'react';
import SurveyForm from '@/src/survey/SurveyForm';
import { defaultSurveyConfig } from '@/src/config/survey-questions';

export default function SurveyPage() {
    return <SurveyForm config={defaultSurveyConfig} />;
}