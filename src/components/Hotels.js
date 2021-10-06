import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom'
import {
   Container, Row, Col, CardTitle, CardText,
  CardSubtitle, CardBody, Button
} from 'reactstrap'





class Hotels extends Component {
  constructor(props) {
    super(props)      // se intializeaza un array in state pentru a putea fi mapat
   
    this.state = {      
      hotel: '' ,
     data: [
       {
        id: "1",
        image: 'hotel1',
        hotel: "Grand Hotel Astoria",
        location: "Mamaia",
        text:"Hotelul Grand Astoria, fostul Hotel Patria, este situat în centrul staţiunii Mamaia, la 500 m de cazinou și la 50 m de plaja cu nisip. Proprietatea oferă unități de cazare cu aer condiționat şi vedere la mare."
      },
      {
        id: "2",
        image: "hotel2",
        hotel: " Hotel Malibu",
        location: "Mamaia",
        text:"Situat la intrarea în staţiunea Mamaia, pe malul Mării Negre, acest hotel îmbină vederea superbă cu o mulţime de facilităţi impresionante. Proprietatea asigură şi facilităţi de wellness."
      },
      {
        id: "3",
        image: "hotel3",
        hotel: "Complex Hotelier Felix - Perla Marii",
        location: "Eforie Nord",
        text:"Situat în Eforie Nord, la 850 de metri de parcul acvatic Eforie, Complexul Hotelier Felix - Perla Mării are un loc de joacă pentru copii, o cantină cu autoservire şi un restaurant."
      },
      {
        id: "4",
        image: "hotel4",
        hotel: "Hotel Padiş",
        location: "Băile Felix",
        text:"Situat în staţiunea Băile Felix, la aproximativ 700 de metri de piscinele publice, Hotelul Padiş oferă unităţi de cazare cu acces gratuit la internet WiFi şi parcare gratuită."
      },
      {
        id: "5",
        image: "hotel5",
        hotel: "Hotel Aurelius Imparatul Romanilor",
        location: "Poiana Braşov",
        text:"Hotelul Aurelius Împăratul Romanilor, de 4 stele, oferă unități de cazare elegante într-o locaţie pitorească pe malul lacului Mioriţa în staţiunea montană Poiana Braşov."
      },
      
     ]
    } 
  }

  render() { //arrayul este intializat intr-un card
    return ( 
      <div>
        {
          this.state.data.map((card)=>
      <Container key={card.id} className="gap">
        <Row >
          <Col >
              <img className="image" src={require("./images/" + card.image + ".jpg")} />
              <CardBody className="Cbody">
                <CardTitle >{card.hotel}</CardTitle>
                <CardSubtitle >{card.location}</CardSubtitle>
                <CardText >{card.text}</CardText>
                <Link className="button" to={{ pathname: '/FormH', state: { foo : card.hotel} }}>Submit</Link>
              </CardBody>
          </Col>
        </Row>
      </Container>
     ) 
     }
      </div>
    )
  }
}

export default Hotels