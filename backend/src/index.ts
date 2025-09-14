import type { Application, Request, Response } from 'express';

const express = require('express');
const dotenv = require('dotenv');

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 8000

app.get('/', (req: Request, res: Response) => {
  res.send('Testing')
})

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`)
  
})