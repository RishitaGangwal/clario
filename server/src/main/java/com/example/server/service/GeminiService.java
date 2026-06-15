package com.example.server.service;

import com.example.server.config.RestClientConfig;
import com.example.server.dto.GeminiRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GeminiService {

    private final RestClient restClient;

    @Value("${gemini.api.key}")
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

        GeminiRequest request = new GeminiRequest(
                List.of(
                        new GeminiRequest.Content(
                                List.of(
                                        new GeminiRequest.Part(prompt)
                                )
                        )
                )
        );

        String url =
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

        String response = restClient.post()
                .uri(url)
                .header("x-goog-api-key", apiKey)
                .body(request)
                .retrieve()
                .body(String.class);



                
                return response;
                    
             }
             
             
     }
