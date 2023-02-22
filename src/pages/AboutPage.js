import { Col, Row, Container, Card, CardHeader, CardBody } from "reactstrap";

const AboutPage = () =>{
    return(
        <Container>
            <Row>
                <Col className="about rounded mt-1" xs='12'>
                    <h1>About Us</h1>
                    <p>We began as two sisters and a couple of close friends, with a passion to help the community during a time of unrest, injustice and lack of stability for many in our community. We started with a small folding table with a few essential needs, a single small grill for hamburgers and brats, and set up at 38th & Chicago. Fast forward several months, we have now grown into a 100+ volunteer non-profit 501(c)(3) organization. We continue to hand out thousands in donations every week. WE NEED YOUR HELP! Our hope is to continue to provide mobile relief to various communities and continue to be operational into the winter months. In order to do so we are looking for help from others through financial contributions, fresh / canned produce, warm clothing for the winter, and essential household items.</p>
                </Col>
                <Col className='mt-1' xs='12'>
                    <Card className="factscard">
                        <CardHeader className='factsheader d-flex justify-items-start'><h3>Facts at a Glance</h3>
                        </CardHeader>
                        <CardBody><dl className="row">
                        <dt class="col-6 d-flex justify-items-start">Founded</dt>
                            <dd className="col-6 d-flex justify-items-start">July, 2019</dd>
                            <dt className="col-6 d-flex justify-items-start">No. of Volunteers</dt>
                            <dd className="col-6 d-flex justify-items-start">102</dd>
                            <dt className="col-6 d-flex justify-items-start">Amount raised</dt>
                            <dd className="col-6 d-flex justify-items-start">$5,600</dd>
                            <dt className="col-6 d-flex justify-items-start">Pounds Donated</dt>
                            <dd className="col-6 d-flex justify-items-start">95,700 LBS</dd>
                            <dt className="col-6 d-flex justify-items-start">Served</dt>
                            <dd className="col-6 d-flex justify-items-start">37,000+</dd>
                            </dl></CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutPage