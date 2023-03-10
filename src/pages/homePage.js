import { Row,Col,Container } from "reactstrap";
import volunteers from '../app/img/volunteers.png'
import food from '../app/img/Donated food.png'
import people from '../app/img/people.png'
import served from '../app/img/served.png'
import formula from '../app/img/formula.png'
import groupPhoto from '../app/img/group photo.png'
import { NavLink } from "react-router-dom";
const HomePage = () =>{
    return(
        <Container className="midsec">
            <Row className="midsec1">
                <Col xs='12' md='3' className="helpedRaise rounded pt-5 pb-5">
                    <i className="fa-solid fa-people-group fa-xl"/>
                    <h2>102 volunteers</h2>
                    <p>From the homeless to those who have no where else to turn, we are committed to providing our resources across all communities</p>
                    <img className="img img-fluid rounded" src={volunteers} alt='volunteer image' />
                </Col>
                <Col xs='12' md='3' className="foodDonated rounded pt-5 pb-5"><i className="fa-solid fa-dumbbell fa-xl"/>
                    <h2>95,700 LBS Donated</h2>
                    <p>Thousands of people and organizations in the community who have donated essential items or food</p>
                    <img className="img img-fluid rounded" src={food} alt='food image' /></Col>
                <Col xs='12' md='3' className="peopleServed rounded pt-5 pb-5"><i className="fa-solid fa-hand-holding-dollar fa-xl"/>
                    <h2>$ 5,600 Raised</h2>
                    <p>Donations are how we are able to keep our mission going. You will be able to see first hand of how and where your generous donation is being used.</p>
                    <img className="img img-fluid rounded" src={people} alt='donating people image' /></Col>
                <Col xs='12' md='3' className="volunteers rounded pt-5 pb-5"><i className="fa-solid fa-people-carry-box fa-xl"/>
                    <h2>37,000+ SERVED</h2>
                    <p>From the homeless to those who have no where else to turn, we are committed to providing our resources across all communities</p>
                    <img className="img img-fluid rounded" src={served} alt='serving people image' /></Col>
            </Row>
            <Row className="donate rounded">
                <Col className="pt-4 pt-md-3 pb-3"><img className="img1 img-fluid rounded" src={formula} /> </Col>
                <Col className="pb-2"><p>Your contribution helps buy tents, tables, fresh meat, and much more! Consider making a donation today. Every dollar counts.</p><a className="btn rounded-circle" type="btn-primary">Donate</a></Col>
            </Row>
            <Row className="volunteer rounded">
                <Col className="pb-2"><p>We could not succeed without the generous time of all of our volunteers. We have people driving in from over an hour away to help out. Want to donate your time? Please contact us!</p><NavLink to='/contact' className="btn btn-navlink rounded-circle nav-link" type="btn-primary">volunteer</NavLink></Col>
                <Col className="pt-5 pt-md-2"> 
                    <img className="img2 img-fluid rounded" src={groupPhoto} />
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;