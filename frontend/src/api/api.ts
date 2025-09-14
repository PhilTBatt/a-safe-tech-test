import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api'
})

export async function getJokes() {
    const res = await api.get("/")
    return res.data
}