import express from "express";
import runGraph from "./ai/graph.ai.js";

const app = express()

app.get('/', async (req, res) => {

    const result = await runGraph("Write a function to reverse a string in JavaScript.")

    res.json(result)
    
})

export default app