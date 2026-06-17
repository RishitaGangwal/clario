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

            String text = root.path("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text")
                    .toString();

            text = text.replace("\"", "")
                    .replace("```json", "")
                    .replace("```", "")
                    .trim();

            return objectMapper.readValue(text, GoalResponse.class);

        } catch (Exception e) {
           throw new RuntimeException("Gemini service is currently unavailable.",e);
        }

    }
}
