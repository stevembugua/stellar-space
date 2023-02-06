import React from 'react'

function NeoItem({ obj }) {
  return (
    <div className='neo-item'>
    <h5>{obj.name}</h5>
    <span className={obj.is_potentially_hazardous_asteroid ? 'yellow' : 'safe'}>{obj.is_potentially_hazardous_asteroid ? 'Potentially hazardous' : 'Non-Hazardous'}</span>
    <div className='divider'></div>
    <p>Max_diameter_size: {parseFloat(obj.estimated_diameter.kilometers.estimated_diameter_max).toFixed(2)} (km)</p>
    <p>Max_diameter_size: {parseFloat(obj.estimated_diameter.kilometers.estimated_diameter_min).toFixed(2)} (km)</p>
    <p>Last observation: {obj.orbital_data.first_observation_date}</p>
    <p>Last observation: {obj.orbital_data.last_observation_date}</p>
</div>

  )
}

export default NeoItem