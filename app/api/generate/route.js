import { NextResponse, Request } from "next/server";
import Gemini from 'gemini-js';

const gemini = new Gemini({
    apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req){
    const request = new Request(req);
    const {topic} = await request.text();
}

const prompt = `Create 10 flashcards on the topic "${topic}". Each flashcars should have a one-sentence front and back.`;

try{
    const completion = await gemini.generateText({
        prompt,
        model: 'gemini-1.5-flash',
    });

    const flashcards = JSON.parse(completion.content);
    return NextResponse.json({flashcards});
} catch(error){
    console.error(error);
    return NextResponse.json({error: 'An error occurred while generating flashcards.'}, {status: 500});
}

