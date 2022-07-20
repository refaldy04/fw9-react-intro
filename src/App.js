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
    name: '',
  };

  componentDidMount() {
    axios.get(`https://rickandmortyapi.com/api/character`).then((res) => {
      // console.log(res.results);
      res.data.results.map((e) => {
        return this.state.image.push(e.image);
      });
      // const image = res.data.results[0].image;
      const name = res.data.results[0].name;
      // this.setState({ image });
      this.setState({ name });

      // console.log(this.state.image[1]);
    });
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col className="vh-100 d-flex justify-content-center align-items-center">
              <Figure className="text-center">
                <Figure.Image width={171} height={180} alt="171x180" src={this.state.image[1]} />
                <Figure.Caption>{this.state.name}</Figure.Caption>
              </Figure>
            </Col>
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
