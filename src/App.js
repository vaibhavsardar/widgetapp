import './App.css';
import Category from './componets/Category';
import data from '../src/data.json'
import { useEffect, useState } from 'react';
import { MyContext } from './MyContex';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import EditWidget from './componets/EditWidget';
import NavbarComp from './componets/NavbarComp';

function App() {

  const [text, setText] = useState({});
  const [key, setKey] = useState('category1');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if(!localStorage.getItem("Widgets")){
    localStorage.setItem("Widgets", JSON.stringify(data))
  }

 useEffect(()=>{
 }, [text])
  
  return (
  <MyContext.Provider value={{ text, setText }}>
    <div className="App">
      <header className="App-header">
         <NavbarComp handleShow={handleShow}/>
      </header>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Widget of {key}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
           <Tabs
             id="controlled-tab-example"
             // activeKey={key}
             defaultActiveKey="category1"
             onSelect={(k) => setKey(k)}
             className="mb-3  "
           >
              <Tab className="" eventKey="category1" title="Category1">
                <EditWidget category={"Category1"}/>
              </Tab>
              <Tab eventKey="category2" title="Category2">
                 <EditWidget category={"Category2"}/>
              </Tab>
              <Tab eventKey="category3" title="Category3">
                 <EditWidget category={"Category3"}/>
              </Tab>
              <Tab eventKey="category4" title="Category4">
                 <EditWidget category={"Category4"}/>
              </Tab>
           </Tabs>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type='submit' >
            Save
          </Button>
        </Modal.Footer> */}
      </Modal>

     {
       Object.keys(data).map((sname,indx) =>{ return(<Category key={sname} sname ={sname}/>)} )
     }
      
    </div>
  </MyContext.Provider>
  );
}

export default App;
