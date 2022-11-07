import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col,Form,Button } from 'react-bootstrap';
const baseURL = "https://bootcamp-rent-cars.herokuapp.com/admin/order/reports?from=2022-11-01&until=2022-11-30";

const config = {
  headers:{
    accept: 'application/json',
    access_token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NzYzMzM5Mn0.KngWTcxR_TzMUeuiL2-v7rvyoAzQZdWctnfVW0GwzF0'
  }
};


export default function BarChart() {
  const [report, setReport] = useState([]);
  const [chartData, setChartData]  = useState({});
  const [labtgl,setLabtgl] = useState([]);
  const [valtgl,setValtgl] = useState([]);

  // let label_tgl = [];
  // let value_tgl = [];
  
  let get_labeltgl = "";
  let berhasil = ""

function setDataCarVisual(baseURL) {
  let sort_day;
  let label_tgl = [];
  let value_tgl = []; 
 

    axios
      .get(baseURL, config)
      .then(res => {
        sort_day = res.data.sort((a,b) => {
          return a.day - b.day;

        })
        console.log(sort_day)


        

          for(const dataObj of sort_day){
            // nomor = nomor +1;
            get_labeltgl = dataObj.day.slice(8,11);
            // berhasil = "waluh"
            
            // console.log('substring',get_labeltgl);
            // let dataset = {
            //   "no" : nomor ,
            //   "email" : dataObj.User.email,
            //   "start_rent" : convertLocalTimeToUTCTime(dataObj.start_rent_at),
            //   "finish_rent" : convertLocalTimeToUTCTime(dataObj.finish_rent_at),
            //   "car" : dataObj.Car.name,
            //   "category" : dataObj.Car.category,
            //   "price" : dataObj.Car.price
            // }
           
            label_tgl.push(get_labeltgl);
           
            value_tgl.push(dataObj.orderCount);

            
        }
        

        setLabtgl(label_tgl)
        setValtgl(value_tgl)

        console.log(labtgl)

      
        
      })
      .catch((error) => {
        console.log('Error',error)
      });
  }

  useEffect(() => {
    setDataCarVisual(baseURL);
  }, []);

  console.log("Label Tanggal",labtgl)
  console.log("Value Tanggal",valtgl)

    // const labels2 = labtgl;
    const options = {
        responsive: true,
        scales: {
           
            y: {
                display: true,
                title: {
                    display: true,
                    text: "Ammount Of Car Rented",
                },
                // ticks: {
                //     // Include a dollar sign in the ticks
                //     callback: function(value, index, ticks) {
                //         return  value;
                //     }
                // }
            },
            x: {
              display: true,
              title: {
                  display: true,
                  text: "Date",
              }
             
          }
          },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Rented Car Data',
          },
        },
      };
      
      const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
    
   const data2 = {
        labels : labtgl ,
        
        datasets: [
            {
                label : "eer",
                backgroundColor: "rgba(88, 107, 144, 1)",
                borderColor: "rgba(88, 107, 144, 1)",
                data : valtgl

            }
        ]
    };

  const bulan_tahun = [
    {
      "id" : "2022-10",
      "ket" : "Oktober - 2022"
    },
    {
      "id" : "2022-11",
      "ket" : "November - 2022"
    }
]
  return (
    <div>

      <Container>
        <div style={
        {
            margin : "12px"
        }
    }></div> 

    
  
         
        <Row className="g-1">
          <Col xs="2">
          <Form.Select aria-label="Default select example">
          {bulan_tahun.map(item => {
                  return (<option key={item.id} value={item.id}>{item.ket}</option>);
          })}
          </Form.Select>
          
             
          </Col>
          <Col xs> <Button variant="primary">Go</Button></Col>
        </Row>
        <Row>
            <Bar options={options} data={data2}/>
        </Row>
      </Container> 
    </div>
  )
}
