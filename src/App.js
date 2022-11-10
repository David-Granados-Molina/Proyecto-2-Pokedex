import { useState } from 'react'
import React from 'react'
import PkmnBox from './components/PkmnBox'
import { Pagination } from './components/Pagination'

function App () {
  const [Pkmns, setPkmns] = useState([])
  const [BtnGetPkmn, setBtnGetPkmn] = useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=10')

  const getPkmn = async () => {
    const res = await fetch(BtnGetPkmn)
    const data = await res.json()

    setBtnGetPkmn(data.next)

    function createPkmn (result) {
      result.forEach(async (pkmn) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn.name}`)
        const data = await res.json()

        setPkmns(currentList => [...currentList, data])
      })
    }
    createPkmn(data.results)
  }

  const [Page, setPage] = useState(1)
  const [ForPage] = useState(10)

  const max = Pkmns.length / ForPage

  return (
    <div className="title-container">
      <h1>Pokedex</h1>
      <button type="button" className="btn btn-primary btn-get-pkmn" disabled={ max === 12 } onClick={() => getPkmn()}>Get Pokemon</button>

      <div className="app-container">
      <Pagination Page={Page} setPage={setPage} max={max}/>
        <div className="card-container">
            { Pkmns
              .slice((Page - 1) * ForPage, (Page - 1) * ForPage + ForPage)
              .map((pkmn, index) =>
              <PkmnBox
                image={pkmn.sprites.other.dream_world.front_default}
                name={pkmn.name}
                movements={pkmn.moves[0].move.name + ' // ' + pkmn.moves[1].move.name + ' // ' + pkmn.moves[2].move.name + ' // ' + pkmn.moves[3].move.name}
                type={pkmn.types[0].type.name}
                key={index}
              />
              )}
          </div>
      </div>
    </div>
  )
}

export default App
