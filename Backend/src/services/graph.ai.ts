import { HumanMessage } from "@langchain/core/messages";
import { StateSchema, MessagesValue, ReducedValue, type GraphNode, StateGraph, START, END } from "@langchain/langgraph";
import {z} from "zod";

const State = new StateSchema({
    messages: MessagesValue,
    solution_1: new ReducedValue(z.string().default(""),{
        reducer: (current, next)=>{
            return next
        } 
    }),
    solution_2: new ReducedValue(z.string().default(""),{
        reducer: (current, next)=>{
            return next
        } 
    }),
    judge_recommendation: new ReducedValue(z.object().default({
        solution_1_score: 0,
        solution_2_score:0,
        winner:"solution_1" as "solution_1" | "solution_2"
    }))
});

const solutionNode: GraphNode <typeof State>= (state:typeof State)=> {

    console.log(state)
     
}

const graph = new StateGraph(State)
.addNode("solution", solutionNode)
.addEdge(START, "solution")
.compile()

export default async function

(userMessage:string){
    const result = await graph.invoke({
        messages: [
            new HumanMessage(userMessage)
        ]
    })

    return result.messages

};