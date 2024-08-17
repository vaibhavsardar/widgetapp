import React, { useEffect, useState } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap';

const NavbarComp = ({handleShow}) => {

  const [filteredArr, setFilteredArr] = useState([])
  const [widgetArr, setwidgetArr] = useState([])
  let widgetArr2=[]

  useEffect(()=>{
    let update =JSON.parse(localStorage.getItem("Widgets"))
    Object.keys(JSON.parse(localStorage.getItem("Widgets"))).map((warr)=> {widgetArr2 =[...widgetArr2,...update[warr]] })
    setwidgetArr(widgetArr2)
  },[])

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    // console.log("serit",searchTerm)
    const filteredItems = widgetArr.filter((widget) =>{
      return widget["name"].toLowerCase().includes(searchTerm.toLowerCase())
    });
    // console.log("sear",filteredItems)
   searchTerm ? setFilteredArr(filteredItems) : setFilteredArr([])
  }

  return (
    <div style={{position:'relative'}}>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Dashboard</Navbar.Brand>
        <div className="d-flex ">
            <input
              type="search"
              placeholder="Search"
              className="m-2 p-1 rounded "
              aria-label="Search"
              onChange={handleInputChange}
            />
        </div>
        <Button variant="outline-success" onClick={handleShow}>Add Widgets</Button>
      </Container>
     </Navbar>

      <div className='rounded ' style={{position:'absolute', width:"190px", background:"lightgray",top:"50px", left:"660px",zIndex:"100"}}>
        {filteredArr.map((w)=> <h6 className='px-2 pt-1'>{w["name"]}</h6>)}
      </div>
    </div>
  )
}

export default NavbarComp
