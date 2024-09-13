/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import adalid from "../assets/alumnos/Adalid Herrera Ruiz_.jpg"
import alondra from "../assets/alumnos/Alo_Mtz.jpg"
import arturo from "../assets/alumnos/ArturoGarcia.jpeg"
import davila from "../assets/alumnos/dávila.jpeg"
import castro from "../assets/alumnos/Castro.jpeg"
import diego from "../assets/alumnos/Elizalde Barboza Diego Efren.jpeg"
import evelyn from "../assets/alumnos/EvelynGallegos.jpg"
import fer from "../assets/alumnos/Fernanda_Santillan.jpg"
import haro from "../assets/alumnos/Haro.jpg"
import hector from "../assets/alumnos/Hector.png"
import jared from "../assets/alumnos/JaredFrias.jpg"
import kennya from "../assets/alumnos/Kennya_prof.jpg"
import martin from "../assets/alumnos/MartinMoreno.png"
import moran from "../assets/alumnos/miguelmoranv.jpg"
import uriel from "../assets/alumnos/Urielgonzalez.PNG"
import yahir from "../assets/alumnos/YahirHernandez.jpeg"
import hombre from "hombre.png"
import eduardo from "../assets/alumnos/Eduardo_Garcia.png"
import jessica from "../assets/alumnos/jessicontreras.jpg"
import jp from "../assets/alumnos/null.webp"
import compean from "../assets/alumnos/CompeanMacias.jpeg"
import erick from "../assets/alumnos/ErickMeraz.jpeg"
import gustavo from "../assets/alumnos/GustavoHeredia.jpg"
import martha from "../assets/alumnos/Roman.jpg"



// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.js";

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 1</p>
                      <CardTitle tag="p">ADALID HERRERA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={adalid} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 2</p>
                      <CardTitle tag="p">ALONDRA MARTINEZ</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={alondra} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 3</p>
                      <CardTitle tag="p">ARTURO GARCIA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={arturo} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 4</p>
                      <CardTitle tag="p">LUIS CASTRO</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={castro} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 5</p>
                      <CardTitle tag="p">DAVID DÁVILA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={davila} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 6</p>
                      <CardTitle tag="p">DIEGO ELIZALDE</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={diego} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 7</p>
                      <CardTitle tag="p">EVELYN GALLEGOS</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={evelyn} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 8</p>
                      <CardTitle tag="p">FERNANDA SANTILLAN</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={fer} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 9</p>
                      <CardTitle tag="p">JOCELYN HARO</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={haro} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 10</p>
                      <CardTitle tag="p">HECTOR GALARZA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hector} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 11</p>
                      <CardTitle tag="p">JARED FRIAS</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={jared} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 12</p>
                      <CardTitle tag="p">KENNYA ORONA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={kennya} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 13</p>
                      <CardTitle tag="p">MARTIN MORENO</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={martin} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 14</p>
                      <CardTitle tag="p">MIGUEL MORAN</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={moran} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 15</p>
                      <CardTitle tag="p">URIEL GONZALEZ</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={uriel} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 16</p>
                      <CardTitle tag="p">YAHIR HERNANDEZ</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={yahir} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 17</p>
                      <CardTitle tag="p">EDUARDO GARCIA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={eduardo} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 18</p>
                      <CardTitle tag="p">JESSICA CONTRERAS</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={jessica} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 18</p>
                      <CardTitle tag="p">JUAN CONTRERAS</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={jp} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 20</p>
                      <CardTitle tag="p">DANIEL COMPEAN</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={compean} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 21</p>
                      <CardTitle tag="p">GUSTAVO HEREDIA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={gustavo} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 22</p>
                      <CardTitle tag="p">MARTHA ROMAN</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={martha} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 23</p>
                      <CardTitle tag="p">ERICK MERAZ</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={erick} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

        </Row>
        <Row>
          
          
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
