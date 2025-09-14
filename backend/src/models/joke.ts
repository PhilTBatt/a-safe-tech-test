import db from '../db/connection';

export interface Joke {
    type: string;
    setup: string;
    punchline: string;
}

export async function fetchJokes(): Promise<Joke[]> {
    const result = await db.query('SELECT * FROM jokes')
    return result.rows
}