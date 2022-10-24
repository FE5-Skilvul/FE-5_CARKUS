const apiKey = "https://6350376e78563c1d82bca248.mockapi.io/"

export async function loadKampus(){
    let res = await fetch(`${apiKey}/kampus`)
    return await res.json()
}

export async function getIdKampus(id){
    let res = await fetch(`${apiKey}/kampus/${id}`)
    return await res.json()
}

export async function getThread(id){
    let res = await fetch(`${apiKey}/kampus/${id}/diskusi`)

    return res.json()
}