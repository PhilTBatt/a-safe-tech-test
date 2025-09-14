import { Router } from 'express';
import { Joke } from '../models/joke';

const router = Router()
let jokes: Joke[] = []

router.get('/', (req, res) => {
  res.json(jokes)
})

export default router