import { Row,Col,Container } from "reactstrap";
import volunteers from '../app/img/volunteers.png'
import food from '../app/img/Donated food.png'
import people from '../app/img/people.png'
import served from '../app/img/served.png'

const HomePage = () =>{
    return(
        <Container>
            <Row>
                <Col className="helpedRaise rounded">
                    <i className="fa-solid fa-people-group fa-xl"/>
                    <h2>102 volunteers</h2>
                    <p>From the homeless to those who have no where else to turn, we are committed to providing our resources across all communities</p>
                    <img className="img img-fluid rounded" src={volunteers} alt='volunteer image' />
                </Col>
                <Col className="foodDonated rounded"><i className="fa-solid fa-dumbbell fa-xl"/>
                    <h2>95,700 LBS Donated</h2>
                    <p>Thousands of people and organizations in the community who have donated essential items or food</p>
                    <img className="img img-fluid rounded" src={food} alt='food image' /></Col>
                <Col className="peopleServed rounded"><i className="fa-solid fa-hand-holding-dollar fa-xl"/>
                    <h2>$ 5,600 Raised</h2>
                    <p>Donations are how we are able to keep our mission going. You will be able to see first hand of how and where your generous donation is being used.</p>
                    <img className="img img-fluid rounded" src={people} alt='donating people image' /></Col>
                <Col className="volunteers rounded"><i className="fa-solid fa-people-carry-box fa-xl"/>
                    <h2>37,000+ SERVED</h2>
                    <p>From the homeless to those who have no where else to turn, we are committed to providing our resources across all communities</p>
                    <img className="img img-fluid rounded" src={served} alt='serving people image' /></Col>
            </Row>
            <Row className="donate rounded">
                <Col><h3>row 2</h3></Col>
            </Row>
            <Row className="volunteer rounded">
                <Col><h3>row 3</h3></Col>
            </Row>
        </Container>
    );
}

export default HomePage;