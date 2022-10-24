import { API_URL } from "../const/API_URL.js";

export async function createThread(name, diskusi, kampuId, createdAt = new Date().toLocaleDateString('ind-ID', { year: 'numeric', month: 'long', day: 'numeric'})){
    let res = await fetch(`${API_URL}/kampus/${kampuId}/diskusi`,{
        method: "POST",

        headers: {
            'Content-Type': 'application/json',
          },

        body: JSON.stringify({name, diskusi, kampuId, createdAt})
    })
    return res.json()
}
