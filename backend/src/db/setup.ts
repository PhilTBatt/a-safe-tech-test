import db from './connection';

async function seed() {

    await db.query(`
        CREATE TABLE IF NOT EXISTS jokes (
            id SERIAL PRIMARY KEY,
            type TEXT,
            setup TEXT,
            punchline TEXT
        )
    `)

    await db.end()
}

seed()