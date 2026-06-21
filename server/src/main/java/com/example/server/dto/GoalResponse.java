package com.example.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GoalResponse {

    private List<String> timeline;
    private List<String> risks;
    private List<String> suggestions;
    private double successProbability;
}
