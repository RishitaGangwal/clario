package com.example.server.service;

import com.example.server.dto.GeminiRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private static final String GEMINI_API_URL =
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

    public String generatePlan(String goal) {

        RestTemplate restTemplate = new RestTemplate();

        String prompt = """
                You are a career planning assistant.

                Return ONLY valid JSON.

                Rules:
                - timeline must contain exactly 3 steps
                - risks must contain exactly 2 points
                - suggestions must contain exactly 3 points
                - successProbability should be between 0 and 100
                - Keep each point short (max 12 words)

                JSON format:
                {
                  "timeline": [],
                  "risks": [],
                  "suggestions": [],
                  "successProbability": 0
                }

                Goal:
                %s
                """.formatted(goal);

        String requestBody = String.format(
                "{\"contents\": [{\"parts\": [{\"text\": \"%s\"}]}]}",
                prompt.replace("\n", "\\n")
                        .replace("\"", "\\\"")
        );

        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");
        headers.set("x-goog-api-key", apiKey);

        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<String> response =
                restTemplate.postForEntity(
                        GEMINI_API_URL,
                        entity,
                        String.class
                );


        return response.getBody();
    }
}