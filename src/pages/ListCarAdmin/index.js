import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { Container,Row,Col } from 'react-bootstrap';
import { IntlProvider, FormattedNumber } from "react-intl";
// import {} as FaIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import { IoTimeOutline } from "react-icons/io5";

import axios from "axios";
import './index.css';
const baseURL = "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car";

const config = {
  headers:{
    accept: 'application/json',
    access_token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NzYzMzM5Mn0.KngWTcxR_TzMUeuiL2-v7rvyoAzQZdWctnfVW0GwzF0'
  }
};



const converUTCtoLocal = (dataString) => {
    let date_time = new Date(dataString);
    return date_time.toUTCString();
   };


const data = [
    {
        "id" : 1,
        "image" : "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1667633197118-image_2022-11-01_16-51-04.png?alt=media",
        "name" : "Brio E",
        "status" : false
    },
    {
        "id" : 2,
        "image" : "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1667633197118-image_2022-11-01_16-51-04.png?alt=media",
        "name" : "Inovva Series E",
        "status" : false
    },
    {
        "id" : 3,
        "image" : "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1667633197118-image_2022-11-01_16-51-04.png?alt=media",
        "name" : "Suzuki",
        "status" : false
    },
    {
        "id" : 4,
        "image" : "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1667633197118-image_2022-11-01_16-51-04.png?alt=media",
        "name" : "Avanza",
        "status" : false
    },
    {
        "id" : 5,
        "image" : "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1667633197118-image_2022-11-01_16-51-04.png?alt=media",
        "name" : "Rush",
        "status" : false
    }
]

function ListCarAdmin() {
    const [listCar, setListCar] = useState([]);
    function setListCarAdmin(baseURL) {
        axios
          .get(baseURL, config)
          .then((response) => {
            

            setListCar(response.data.cars);
          
            
          })
          .catch((error) => {
            console.log('Error',error)
          });
      }
    
     
      useEffect(() => {
        setListCarAdmin(baseURL);
      }, []);
      
  return (
    <Container>
        <div style={
        {
            margin : "16px"
        }
    }></div> 
        <Row>
        {listCar.map(item => {
            return (
                <Col key={item.id} md="4" className='baris-bawah' >
                    <Card>
                    <Card.Img variant="top" src={item.image} className='setPadding' />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <b><IntlProvider locale="id">
                            <FormattedNumber
                                value={item.price}
                                style="currency"
                                currency="IDR"
                            />{" "}
                            / hari
                        </IntlProvider></b>
                        <p><AiIcons.AiOutlineUsergroupDelete/>  {item.category}</p>
                    
                        <Card.Text>
                        <IoTimeOutline/> Updated {converUTCtoLocal(item.updatedAt)}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
            </Col>
           
            
           );

        })}
        </Row>
    </Container>
  );
}

export default ListCarAdmin;