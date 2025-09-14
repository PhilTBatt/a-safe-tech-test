import db from './connection';
import fetch from 'node-fetch';

async function seed() {
    const res = await fetch('https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json')
    const jokes = await res.json()

    await db.query(`
        CREATE TABLE IF NOT EXISTS jokes (
            id SERIAL PRIMARY KEY,
            type TEXT,
            setup TEXT,
            punchline TEXT
        )
    `)

    for (const joke of jokes) {
        await db.query(
            'INSERT INTO jokes (type, setup, punchline) VALUES ($1, $2, $3)',
            [joke.type, joke.setup, joke.punchline]
        )
    }

    await db.end()
    console.log('Database seeded')
}

seed()