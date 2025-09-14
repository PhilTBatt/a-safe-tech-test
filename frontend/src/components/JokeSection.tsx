import { useEffect, useState } from "react";
import { JokeCard } from "./JokeCard";
import { getJokes } from "../api/api";
import type { Joke } from "../types/Joke";

export function JokeSection() {
    const [jokes, setJokes] = useState<Joke[]>([])
    const [currentJoke, setCurrentJoke] = useState<Joke>()
    const [jokeStage, setJokeStage] = useState<number>(-1)

    useEffect(() => {
        async function loadJokes() {
            const data = await getJokes()
            setJokes(data)
        }
    
        loadJokes()
    }, [])

    function buttonClick() {
        if (jokeStage === -1 || jokeStage === 1) {
            const randomIndex = Math.floor(Math.random() * jokes.length)
            const randomJoke = jokes[randomIndex]
            setCurrentJoke(randomJoke)
        }
        
        setJokeStage(prevStage => (prevStage + 1) % 2)
    }

    return (
        <section>
            <JokeCard joke={currentJoke} jokeStage={jokeStage}/>

            <button onClick={buttonClick}>
                Funny Button
            </button>
        </section>
    )
}