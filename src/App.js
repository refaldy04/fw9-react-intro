import React from 'react';
import { Container, Col, Row, Figure } from 'react-bootstrap';
const axios = require('axios').default;

// axios
//   .get('https://rickandmortyapi.com/api/character')
//   .then(function (response) {
//     // handle success
//     console.log(response.data.results[0].image);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });
// .then(function () {
//   // always executed
// });

// class Series extends React.Component {
//   render() {
//     return <li>{this.props.name}</li>;
//   }
// }

class Image extends React.Component {
  state = {
    image: [],
    char: [],
    name: [],
  };

  componentDidMount() {
    axios.get(`https://rickandmortyapi.com/api/character`).then((res) => {
      // console.log(res.results);

      const val = [];
      res.data.results.map((e) => {
        val.push(e);
      });

      this.setState({ char: val });
    });
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            {this.state.char.map((char) => (
              <Col key={char.id} lg="4" className="mt-5 d-flex justify-content-center align-items-center">
                <Figure className="text-center">
                  <Figure.Image width={171} height={180} alt="171x180" src={char.image} />
                  <Figure.Caption>{char.name}</Figure.Caption>
                </Figure>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <Image />
        </div>
      </>
    );
  }
}

export default App;
