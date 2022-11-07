import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from 'react-data-table-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const baseURL = "https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc";

const config = {
  headers:{
    accept: 'application/json',
    access_token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NzYzMzM5Mn0.KngWTcxR_TzMUeuiL2-v7rvyoAzQZdWctnfVW0GwzF0'
  }
};


const convertLocalTimeToUTCTime = (dataString) => {
  let date_time = new Date(dataString);
  return date_time.toLocaleString();
 };






function getNumberOfPages(rowCount, rowsPerPage) {
    return Math.ceil(rowCount / rowsPerPage);
  }

  function toPages(pages) {
    const results = [];

//   console.log(pages)
  
    for (let i = 1; i <= pages; i++) {
      results.push(i);
    }
  
    return results;
  }

  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage, // available but not used here
    currentPage
  }) => {
    const handleBackButtonClick = () => {
      onChangePage(currentPage - 1);
    };
  
    const handleNextButtonClick = () => {
      onChangePage(currentPage + 1);
    };
  
    const handlePageNumber = (e) => {
      onChangePage(Number(e.target.value));
    };
  
    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;
    console.log('Jumlah Data',rowCount)
    console.log('Halaman',pageItems)
    return (
      <Container>
        
        <Row>
          <Col>Belajar </Col>
          <Col>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleBackButtonClick}
              disabled={previosDisabled}
              aria-disabled={previosDisabled}
              aria-label="previous page"
            >
              Previous
            </button>
          </li>
          {pageItems.map((page) => {
            const className =
              page === currentPage ? "page-item active" : "page-item";
  
            return (
              <li key={page} className={className}>
                <button
                  className="page-link"
                  onClick={handlePageNumber}
                  value={page}
                >
                  {page}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleNextButtonClick}
              disabled={nextDisabled}
              aria-disabled={nextDisabled}
              aria-label="next page"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
      </Col>
      </Row>
      </Container>
    );
  };

  const customStyles = {
   
    headCells: {
        style: {
            background: '#CFD4ED',
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    }
   
};
// A super simple expandable component.
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const columns = [
    {
        name: 'No',
        selector: row => row.no,
    },
    {
        name: 'Email',
        selector: row => row.email,
    },
    {
      name: 'Car',
      selector: row => row.car,
    },
    {
      name: 'Start Rent',
      selector: row => row.start_rent,
    },
    {
      name: 'Finish Rent',
      selector: row => row.finish_rent,
    },
    {
      name: 'Price',
      selector: row => row.price,
    },
    {
      name: 'Category',
      selector: row => row.category,
    },
];



export default function DataReport() {
  let datawal = [];
  let nomor = 0
  function setCarsList(baseURL) {
    axios
      .get(baseURL, config)
      .then((response) => {
        

          for(const dataObj of response.data.orders){
            nomor = nomor +1;
            let dataset = {
              "no" : nomor ,
              "email" : dataObj.User.email,
              "start_rent" : convertLocalTimeToUTCTime(dataObj.start_rent_at),
              "finish_rent" : convertLocalTimeToUTCTime(dataObj.finish_rent_at),
              "car" : dataObj.Car.name,
              "category" : dataObj.Car.category,
              "price" : dataObj.Car.price
            }
            datawal.push(dataset)
           
           
           

        }
        setMobil(datawal);
        // console.log(mobil)
          // setMobil(response.data.orders)
          //&& items.image !== null
        
        
      })
      .catch((error) => {
        console.log('Error',error)
      });
  }

  const [mobil, setMobil] = useState([]);
  useEffect(() => {
    setCarsList(baseURL);
  }, []);
  
    return (
        <DataTable
            pagination
            paginationComponent={BootyPagination}
            columns={columns}
            data={mobil}
            defaultSortFieldID={1}
            
            customStyles={customStyles}
            // expandableRows
            // expandableRowsComponent={ExpandedComponent}
        />
    );
};