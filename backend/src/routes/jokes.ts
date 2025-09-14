import { Router } from 'express';
import { getJokes } from '../controllers/jokes';

const router = Router()

router.get('/', getJokes)

export default router