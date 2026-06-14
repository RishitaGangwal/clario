package com.example.server.controller;

import com.example.server.dto.GoalRequest;
import com.example.server.dto.GoalResponse;
import com.example.server.service.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/goal")
@CrossOrigin(origins = "http://localhost:3000")
public class GoalController {

   @Autowired
    private GoalService goalService;

   @PostMapping("/analyze")
   public GoalResponse analyze(@RequestBody GoalRequest request){
       return goalService.analyzeGoal(request);
   }
}
