import React, { useState } from 'react'

export const Pagination = ({ Page, setPage, max }) => {
  const [input, setInput] = useState(1)

  const nextPage = () => {
    setInput(parseInt(input) + 1)
    setPage(parseInt(Page) + 1)
  }

  const prevPage = () => {
    setInput(parseInt(input) - 1)
    setPage(parseInt(Page) - 1)
  }

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setPage(parseInt(e.target.value))
      if (parseInt(e.target.value < 1) || parseInt(e.target.value) > Math.ceil(max) || isNaN(parseInt(e.target.value))) {
        setPage(1)
        setInput(1)
      } else {
        setPage(parseInt(e.target.value))
      }
    }
  }

  const onChange = e => {
    setInput(e.target.value)
  }

  return (
        <div className='pagination-container'>
            <button type="button" className="btn btn-danger" disabled = {Page === 1 || Page < 1} onClick={prevPage}>Prev</button>
            <input className='input-page' value={input} name="page" autoComplete='off' onChange={e => onChange(e)} onKeyDown={e => onKeyDown(e)}></input>
            <p>of {max}</p>
            <button type="button" className="btn btn-danger" disabled = {Page === Math.ceil(max) || Page > Math.ceil(max)} onClick={nextPage}>Next</button>
        </div>
  )
}
