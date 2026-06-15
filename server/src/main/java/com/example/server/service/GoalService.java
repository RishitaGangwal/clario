package com.example.server.service;

import com.example.server.dto.GoalRequest;
import com.example.server.dto.GoalResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class GoalService {

    private final GeminiService geminiService;

    public GoalResponse analyzeGoal(GoalRequest request){

        String aiPrompt = geminiService.generatePlan(request.getGoal());

        System.out.println(aiPrompt);

           List<String> timeline = List.of(
                    "Basics",
                    "Project",
                    "Apply"
            );

        List<String> risks = List.of(
                    "Inconsistency",
                    "Burnout"
            );

        List<String> suggestions = List.of(
                    "Study dails 2-3 hours",
                    "Build projects instead of watching tutorials",
                    "Revise weekly"
            );

        int success = request.getGoal().toLowerCase().contains("job") ? 75 : 60;

            return  new GoalResponse(timeline,risks,suggestions,success);

        }
}
