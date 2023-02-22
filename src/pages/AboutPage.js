import { Col, Row, Container } from "reactstrap";

const AboutPage = () =>{
    return(
        <Container>
            <Row>
                <Col className="about rounded mt-1" xs='12'>
                    <h1>About Us</h1>
                    <p>We began as two sisters and a couple of close friends, with a passion to help the community during a time of unrest, injustice and lack of stability for many in our community. We started with a small folding table with a few essential needs, a single small grill for hamburgers and brats, and set up at 38th & Chicago. Fast forward several months, we have now grown into a 100+ volunteer non-profit 501(c)(3) organization. We continue to hand out thousands in donations every week. WE NEED YOUR HELP! Our hope is to continue to provide mobile relief to various communities and continue to be operational into the winter months. In order to do so we are looking for help from others through financial contributions, fresh / canned produce, warm clothing for the winter, and essential household items.</p>
                </Col>
                {/* <Col xs='12'>
                    <dl>
                        <dt class="col-6">Founded</dt>
                        <dd class="col-6">July, 2019</dd>
                        <br />
                        <dt class="col-6">No. of volunteers</dt>
                        <dd class="col-6">102</dd>
                        <br />
                        <dt class="col-6">Amount raised</dt>
                        <dd class="col-6">&#36;5&#44;600</dd>
                        <br />
                        <dt class="col-6">Pounds donated</dt>
                        <dd class="col-6">95&#44;700 lbs</dd>
                        <br />
                        <dt class="col-6">Served</dt>
                        <dd class="col-6">37&#44;000&#43;</dd>
                    </dl>
                </Col> */}
            </Row>
        </Container>
    );
}

export default AboutPage