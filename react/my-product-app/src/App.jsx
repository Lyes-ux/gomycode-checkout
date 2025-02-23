import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductName from "./components/Name";
import ProductPrice from "./components/Price";
import ProductDescription from "./components/Description";
import ProductImage from "./components/Image";
import product from "./product";

function App() {
  const name = "Lyes La3ziz";
  return (
    <Container>
      <Row className="justify-content-center ">
        <Col md={6}>
          <Card>
            <Card.Body>
              <ProductName name={product.name}/>
              <ProductPrice price={product.price}/>
              <ProductDescription description={product.description}/>
              <ProductImage image={product.image}/>
            </Card.Body>
          </Card>
          <div className="mt-3">
            {name ? (
              <>
                <p>SALAM 3LIKOM !!!, {name}!!!!!</p>
              </>
            ) : (
              <p>SALAM !!</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
