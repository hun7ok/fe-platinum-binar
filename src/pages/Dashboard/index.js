import React from 'react';
import BarChart from "../../components/Barchart/BarChart";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import * as FaIcons from 'react-icons/bs';
import './index.css';
import DataTables from '../../components/Datatables';
export default function index() {
  return (
    <>   
    <div style={
        {
            margin : "12px"
        }
    }></div> 
    <Container fluid="md">
        <Row>
            <Col className='tebal'><FaIcons.BsBookmarkFill/><span> Rented Car Data Visualization</span></Col>
        </Row>
    <Row>
      <Col><BarChart/></Col>
    </Row>
    <div style={
        {
            margin : "30px"
        }
    }>

    </div>
    <Row>
        <Col className='tebal'>
            Dashboard
        </Col>
    </Row>
    <div style={
        {
            margin : "30px"
        }
    }>
        
    </div>
    <Row >
        <Col>
        <FaIcons.BsBookmarkFill/> List Order
        </Col>
    </Row>
   
    <div style={
        {
            margin : "30px"
        }
    }>
        
    </div>
    <Row>
      <Col>
        <DataTables/>
      </Col>
    </Row>
  </Container>
  </>
  )
}
