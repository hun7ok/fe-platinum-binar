import React, { useState } from 'react';
import './Navbar2.css';
import { Link,useLocation } from 'react-router-dom';
import { BiHome } from "react-icons/bi";
import { AiFillDashboard,AiFillCar,AiOutlineBars,AiOutlineClose,AiOutlineUser } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import * as FaIcons from 'react-icons/ai';






const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [aktif, setAktif] = useState("tab3");
  console.log(aktif);

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  const splitLocation = pathname.split("/");
  const split = ">";
  

  const breadcumbs = () => {
    if (splitLocation[1]==="") {
      return ""
      
    }else{
      return splitLocation;
    }
  }
  // console.log(splitLocation);

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        
        <div className='header-toggle' onClick={() => setShow(!show)}>
          {show ? <AiOutlineBars/> : <AiOutlineClose/>}
        </div>
        <Navbar>
          <Container>
           
            <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#deets"> <AiOutlineUser/></Nav.Link>
          <Nav.Link> Unis Badri</Nav.Link>
            </Navbar.Collapse>
           
          </Container>
         </Navbar>
       
      </header>

      <aside className={`sidebar2 ${show ? 'show' : null}`}>
        <nav className='nav2'>
          <div>
            <Link to='/' className={`nav-logo2 ${splitLocation[1] === "" ? "active" : ""}`}>
              <BiHome/>
              
              <span className='nav-logo-name2'>Homepage</span>
            </Link>

            <div className='nav-list2'>
              <Link to='/dashboard' className={`nav-link2 ${splitLocation[1] === "dashboard" ? "active" : ""}`}>
                <AiFillDashboard/>
                <span className='nav-link-name2'>Dashboard</span>
              </Link>
              <Link to='/listcar' className={`nav-link2 ${splitLocation[1] === "cars" ? "active" : ""}`}>
                <AiFillCar/>
                <span className='nav-link-name2'>Cars</span>
              </Link>
             
            </div>
          </div>

         
        </nav>
      </aside>

      <b>Home {split} </b>{breadcumbs()}
    </main>
  );
};

export default Sidebar;
