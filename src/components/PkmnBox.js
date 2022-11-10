import React from 'react'

const PkmnBox = ({ image, name, movements, type }) => {
  const style = type + ' pkmn-container'
  return (
        <div className={style}>
            <div className="img pkm-img">
                <img src={image} alt={name} />
            </div>
            <div className="pkmn-details">
                <h3 className="pkmn-name">{name}</h3>
                <hr></hr>
                <h5 className="pkmn-mov-title">Movements</h5>
                <span className="pkmn-movements">{movements}</span>
                <h5 className="pkmn-mov-title">Type</h5>
                <span className="pkmn-type">{type}</span>
            </div>

        </div>
  )
}

export default PkmnBox
