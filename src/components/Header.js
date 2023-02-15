import { Link } from "react-router-dom";
import { Col,Row,Container, Form } from "reactstrap";


const Header = () =>{
    return(
        <Container>
            <Row>
                <Col className="text-center" md='3'>
                    <Link to='/'><img ></img></Link>
                </Col>
            </Row>
        </Container>
    );
}
export default Header