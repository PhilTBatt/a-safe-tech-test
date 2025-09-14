import { fetchJokes } from "../models/joke"
import { Request, Response } from 'express';

export async function getJokes(req: Request, res: Response) {
    try {
        const jokes = await fetchJokes()
        res.json(jokes)
    } catch (err) {
        res.status(500).send('Error fetching jokes')
    }
}