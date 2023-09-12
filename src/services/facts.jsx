const URL_FACTS_CATS = 'https://catfact.ninja/fact'

export const getRandomFact = ()=>{
    return fetch(URL_FACTS_CATS).
    then(res => res.json()).
    then(data => {
        return data.fact
    })
}
