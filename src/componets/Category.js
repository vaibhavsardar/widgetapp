import React, { useState } from 'react'
import Widgets from './Widgets';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

const Category = ({sname}) => {
  
  const [show, setShow] = useState(false);
  const [inputWidget, setInputWidget] = useState({name: "",text: "",});
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addWidget = ()=>{
    let updata = JSON.parse(localStorage.getItem("Widgets"))
    updata[sname]?.push({...inputWidget,"add":true})
    localStorage.setItem("Widgets", JSON.stringify(updata))
    handleClose();
  }

  const handleWidgetinput = (e) => {
    setInputWidget({...inputWidget,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Widget to {sname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
                 <Form.Label className='mx-2'>Widget Name :</Form.Label>
                 <input type="text" name="name" onChange={handleWidgetinput} placeholder="Enter widget name" />
               
                 <Form.Label className='mx-2'>Widget Text :</Form.Label>
                 <input type="text" name="text"onChange={handleWidgetinput}  placeholder=" Enter widget text " />
              
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" type='submit' onClick={addWidget}> Add</Button>
        </Modal.Footer>
      </Modal>

      <div className='px-3'>
        <h2>{ sname}</h2>
      </div>

      <div style={{display :"flex",overflowX:"hidden"}}>

          {JSON.parse(localStorage.getItem("Widgets"))[sname]?.map((w,indx)=>{
             return( w["add"] ?<Widgets key={indx} category={sname} index={indx} wdata={w}/>: "")
          })}

         <div className=" border rounded px-4 py-2" variant="outline-success" style={{margin:"15px",borer:" 0px solid Black",display:'flex',alignItems:'center',justifyContent:"center"}}>
             <Button  className='border' onClick={handleShow}>+ Add Widget</Button>
         </div>

      </div>

    </div>
  )
}
export default Category;
