import type { Joke } from "../types/Joke";

export function JokeCard({joke}: {joke: Joke | undefined} ) {
    return (
        <div>
            {joke ? joke.setup : 'Press the button to see a joke'}
        </div>
    )
}