import React, { useState } from 'react'

function NeoSearch({ handleSearch }) {

  const [formData, setFormdata] = useState({
    start: "",
    end: ""
  })

  function handleChange(e) {
    let name = e.target.name
    setFormdata({...formData,
      [name] : e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(formData)
  }
  

  return (
    <form className='search' onSubmit={handleSubmit}>
    <label>Start date
    <input type="date" name='start' value={formData.start} onChange={handleChange} />
    </label>
    
    <label>End date
    <input type="date" name='end' value={formData.end} onChange={handleChange} />
    </label>
    
    <input className="date-submit" type="submit" value="Search" />
</form>
  )
}

export default NeoSearch