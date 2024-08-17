import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../MyContex'
const EditWidget = ({category}) => {

    const { text, setText } = useContext(MyContext);
    
    let handleAdd =(cat,wIdx)=>{
        let updata = JSON.parse(localStorage.getItem("Widgets"))
        // console.log(cat,wIdx, updata[cat][wIdx])
        setText(updata);
        updata[cat][wIdx].add = !updata[cat][wIdx].add
        localStorage.setItem("Widgets", JSON.stringify(updata))
    }

  return (
        <div>
            {JSON.parse(localStorage.getItem("Widgets"))[category]?.map((w,widgetIdx)=>{
                return <div className='d-flex' key={w.name} >  
                         <input  class="form-check-input fs-4" style={{verticalAlign:'mddle'}} type="checkbox" id={w.name} name="widgets1" defaultChecked={JSON.parse(localStorage.getItem("Widgets"))[category][widgetIdx].add}  value="false" onClick={(e) => {  handleAdd(category,widgetIdx); e.currentTarget =JSON.parse(localStorage.getItem("Widgets"))[category][widgetIdx].add} }/>
                         <label class="form-check-label fs-4 mx-2" >{w.name}</label>
                       </div>
            })}
        </div>
  )
}

export default EditWidget;
