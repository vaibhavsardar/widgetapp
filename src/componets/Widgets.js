import React, { useContext } from 'react'
import { MyContext } from '../MyContex';
import { Button, Card } from 'react-bootstrap';

const Widgets = ({category,wdata,index}) => {

  const { text, setText } = useContext(MyContext);


  let handleRemoveWidget =(cat,wIdx)=>{
    let updata = JSON.parse(localStorage.getItem("Widgets"))
    updata[cat][wIdx].add = false
    
    localStorage.setItem("Widgets", JSON.stringify(updata))
    setText(updata);
}

  return (
    <div style={{margin:"15px",position:'relative'}}>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{wdata.name}</Card.Title>
              <Card.Text>
                Some  example text to build on the widget  and make up the
                bulk of the widget's content.{wdata.text}
              </Card.Text>
            </Card.Body>
        </Card>
        
        <Button  variant="outline-success" onClick={()=>{handleRemoveWidget(category,index)}} style={{position:'absolute',padding:"5px",top:'-10px',right:"-10px"}} >X</Button>
    </div>
  )
}

export default Widgets;
