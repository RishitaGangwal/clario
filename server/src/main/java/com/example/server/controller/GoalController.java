package com.example.server.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/goal")
@CrossOrigin(origins = "http://localhost:3000")
public class GoalController {

    @PostMapping("/analyze")
    public Map<String, Object> analyze(@RequestBody Map<String, Object> request){

        String goal = (String) request.get("goal");

        int success = 60;
        if(goal.toLowerCase().contains("job")){
            success = 70;
        } else if(goal.toLowerCase().contains("startup")){
            success = 40;
        }

        Map<String, Object> response = new HashMap<>();

        response.put("goal", goal);

        response.put("timeline", List.of(
                "Start basics and fundamentals",
                "Build 1 real project",
                "Practice interviews"
        ));

        response.put("risks", List.of(
                "Inconsistency",
                "No real practice",
                "Overthinking tutorials"
        ));

        response.put("suggestions", List.of(
                "Study dails 2-3 hours",
                "Build projects instead of watching tutorials",
                "Revise weekly"
        ));

        response.put("successProbability", success);

    return  response;

    }
}
