import type { Joke } from "../types/Joke";

export function JokeCard({joke, jokeStage}: {joke: Joke | undefined, jokeStage: number} ) {
    return (
        <div>
            {jokeStage === -1 ? 'Press the funny button to see a joke' : 
                jokeStage === 0 ? joke?.setup : joke?.punchline}
        
        </div>
    )
}