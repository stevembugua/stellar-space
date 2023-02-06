import React from "react";
import NeoItem from "./NeoItem";

function NeoList({ objects }) {
  return (
    <div className="neo-list">
        {objects.map(obj => {
            return <NeoItem key={obj.id} obj={obj} />
        })}
      
    </div>
  );
}

export default NeoList;
