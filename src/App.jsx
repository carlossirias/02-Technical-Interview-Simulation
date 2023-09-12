import { useEffect, useState } from 'react'
import './output.css'
import {getRandomFact} from './services/facts'

const URL_PREFIX_IMAGES_CATS = 'https://cataas.com/'

function App() {
  const [fact, setFact] = useState('')
  const [sufixUrl, setSufixUrl] =  useState('')

  useEffect( ()=>{
    getRandomFact().then(newFact => setFact(newFact))
    
  },[])

  useEffect(()=>{
    var firstThreeWords = fact.split(' ', 3).join(' ')
    setSufixUrl(`cat/says/${firstThreeWords}?size=:size&color=:color`)
  },[fact])

  const handleFact = ()=>{
    getRandomFact().then(newFact => setFact(newFact))
  }

  return (
    <>
      <main className='bg-gray-900 grid place-content-center w-screen h-screen text-white text-xl'>
        <section className='flex justify-center items-center flex-col gap-10 max-w-3xl p-8'>
          <h1 className='text-3xl font-black'>Cats Facts Generator</h1>
          <figure className='h-96'>
            {sufixUrl && <img src={`${URL_PREFIX_IMAGES_CATS}${sufixUrl}`} className='w-full max-h-96 rounded-lg' alt={`Image extracted from cataas.com using ${fact} by parameterer`}/>}
          </figure>
          <article className='text-center'>
            {fact && <p>{fact}</p>}
            <button type='button' name='change_fact' style={{
              backgroundColor:'rgb(3 7 18)'
            }} onClick={handleFact} className='mt-5 p-3 bg-gray-950 rounded-lg font-bold w-fit'>Change fact</button>
          </article>
        </section>
      </main>
    </>
  )
}

export default App
