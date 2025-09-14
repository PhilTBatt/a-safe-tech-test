import { useEffect, useState } from "react";
import { JokeCard } from "./JokeCard";
import type { Joke } from "../types/Joke";

export function JokeSection() {
    const [jokes, setJokes] = useState<Joke[]>([])
    const [jokeStage, setJokeStage] = useState<number>(0)

    return (
        <section>
            <JokeCard jokes={jokes}/>

            <button onClick={() => setJokeStage(jokeStage + 1)}>
                Funny Button
            </button>
        </section>
    )
}