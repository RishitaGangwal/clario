import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api/goal"
});

export const analyzeGoal = (goal) => {
   return API.post("/analyze", { goal });
} 