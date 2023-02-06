import React, { useState } from "react";

function FilterPhotos({ onFilter }) {

    const [formData, setFormdata] = useState({
        date: "",
        pov: ""
    })

    function handleChange(e) {
        let name = e.target.name
        setFormdata({...formData, [name]:e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        onFilter(formData)

    }

  return (
    <div className="filter-section">
      <form id="form" onSubmit={handleSubmit}>
        <div className="date-selection">
          <input type="date" name="date" id="date"  max="today" onChange={handleChange} />
        </div>
        <div className="pov-selection">
          <select name="pov" id="pov-select-curiosity"  onChange={handleChange} >
            <option value="all">Select the POV</option>
            <option value="all">All the cameras</option>
            <option value="fhaz">Front Hazard Avoidance Camera</option>
            <option value="rhaz">Rear Hazard Avoidance Camera</option>
            <option value="mast">Mast Camera</option>
            <option value="chemcam">Chemistry and Camera Complex</option>
            <option value="mahli">Mars Hand Lens Imager</option>
            <option value="mardi">Mars Descent Imager</option>
            <option value="navcam">Navigation Camera</option>
            <option value="pancam">Panoramic Camera</option>
          </select>
        </div>
        <div className="find-button" id="btn-submit">
          <img src={require("../../assets/lupa.png")} className="find-img" />
          <input type="submit" value="search"></input>
        </div>
      </form>
    </div>
  );
}

export default FilterPhotos;
