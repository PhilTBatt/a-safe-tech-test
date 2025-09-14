import { useEffect, useState } from "react";
import { JokeCard } from "./JokeCard";
import { getJokes } from "../api/api";
import type { Joke } from "../types/Joke";

export function JokeSection() {
    const [jokes, setJokes] = useState<Joke[]>([])
    const [currentJoke, setCurrentJoke] = useState<Joke>()

    useEffect(() => {
        async function loadJokes() {
            const data = await getJokes()
            setJokes(data)
        }
    
        loadJokes()
    }, [])

    function buttonClick() {

        const randomIndex = Math.floor(Math.random() * jokes.length)
        const randomJoke = jokes[randomIndex]
        setCurrentJoke(randomJoke)
    }

    return (
        <section>
            <JokeCard joke={currentJoke}/>

            <button onClick={buttonClick}>
                Funny Button
            </button>
        </section>
    )
}