import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alert, Card } from "react-bootstrap";
import axios from "axios";
import { IntlProvider, FormattedNumber } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Accordion from "react-bootstrap/Accordion";

const DetailCar = () => {
  const [car, setCar] = useState("");
  const [catchVisible, setCatchVisible] = useState(false);
  const { id } = useParams();
  const SEARCH_URL = `https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`;

  useEffect(() => {
    axios
      .get(SEARCH_URL)
      .then((response) => {
        setCar(response.data);
      })
      .catch((error) => {
        setCatchVisible(true);
      });
  }, []);

  return (
    <div>
      {catchVisible ? (
        <Alert variant="danger">
          Tidak terhubung dengan API. Periksa sambungan API.
        </Alert>
      ) : (
        <div>
          <div className="hero-div"></div>
          <div className="detail-section">
            <Card key={car.id} className="card-detail">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="detail-title">Tentang Paket</Card.Title>
                <Card.Title className="detail-title">Include</Card.Title>
                <ul className="detail-list">
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <Card.Title className="detail-title">Exclude</Card.Title>
                <ul className="detail-list">
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Refund, Reschedule, Overtime
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="detail-list">
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
            <Card key={car.id} className="card-detail-total">
              <Card.Img
                variant="top"
                src={
                  car.image
                    ? car.image
                    : "https://img.freepik.com/premium-vector/car-cartoon-vehicle-transportation-isolated_138676-2473.jpg?w=740"
                }
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="detail-title">{car.name}</Card.Title>
                <div className="d-flex category">
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="category-icon"
                  />
                  <Card.Text>{car.category}</Card.Text>
                </div>
                <strong className="d-flex justify-content-between mt-5 mb-5">
                  <Card.Text>Total</Card.Text>
                  <IntlProvider locale="id">
                    <FormattedNumber
                      value={car.price}
                      style="currency"
                      currency="IDR"
                    />
                  </IntlProvider>
                </strong>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCar;
