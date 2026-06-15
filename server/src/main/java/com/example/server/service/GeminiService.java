package com.example.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GeminiService {

    @Value("{gemini.api.key}")
    private String apiKey;

    public String generatePlan(String goal){
        String prompt = """
                You are a goal planning assistant.
                
                Goal: %s
                
                Return ONLY Valid JSON in this format:
                
                {
                   "timeline":["step1","step2","step3"],
                   "risks": ["risk1", "risk2"],
                   "suggestions": ["suggestion1", "suggestion2", "suggestion3"],
                   "successProbability": 75
                
                }
                
                """.formatted(goal);
                
                return prompt;
                    
             }
             
             
     }
