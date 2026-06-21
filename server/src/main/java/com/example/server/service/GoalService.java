package com.example.server.service;

import com.example.server.dto.GoalRequest;
import com.example.server.dto.GoalResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class GoalService {

    private final GeminiService geminiService;
    private final ObjectMapper objectMapper;

    public GoalResponse analyzeGoal(GoalRequest request) {

        try {

            String response = geminiService.generatePlan(request.getGoal());

            JsonNode root = objectMapper.readTree(response);

            String text = root.at("/candidates/0/content/parts/0/text").asText();

            System.out.println("TEXT FROM GEMINI:");
            System.out.println(text);

            text = text.replace("```json", "")
                    .replace("```", "")
                    .trim();

            System.out.println("CLEAN JSON:");
            System.out.println(text);

            return objectMapper.readValue(text, GoalResponse.class);

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }

    }
}
