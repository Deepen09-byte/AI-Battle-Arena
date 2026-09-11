import express from "express"
import useGraph from "./services/graph.ai.js"

const app = express()

app.get('/health', (req, res) => {
    res.status(200).json({ status:'ok'})
})

app.post('/use-graph',async (req, res) => {
    await useGraph("what is the fuckin capital of fuckin antartica?")
})


export default app