import {Button, Card} from 'react-bootstrap';
function Country(props) { 

  function goToCountry(){
  props.setCenter(props.location[0],props.location[1]);
  console.log(props.location[0],props.location[1])
  }
return ( 
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.flag} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Capital : {props.capital}</Card.Text>
          <Card.Text> Population: {props.population.toLocaleString("en-US")}</Card.Text>
        <Button onClick={goToCountry}
        >Go somewhere</Button>
      </Card.Body>
    </Card>
      );
}
      export default Country;