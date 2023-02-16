import { Col,Row,Container } from "reactstrap";

const Footer = () =>{
    return (
        <Container className="footer">
            <Row>
                <Col xs='4'>
                    <h5>Links</h5>
                        <ul className="links list-group list-unstyled">
                            <a href="/"><li>Home</li></a>
                            <a href="/"><li>About</li></a>
                            <a href="/"><li>Contact</li></a>
                        </ul>
                </Col>
                <Col xs='4'>
                    <h5>Follow us</h5>
                    <a className='btn btn-social-icon btn-instagram' href='https://www.instagram.com/twincitiesrelief/?hl=en'><i className='fa fa-instagram' /></a>
                    <a className='btn btn-social-icon btn-facebook' href='https://www.facebook.com/TwinCitiesRelief'><i className='fa fa-facebook'/></a>                
                </Col>
                <Col xs='4'>
                    <a role='button' className='btn btn-link' href='tel:+16123641129'><i className='fa fa-phone'/> +1 612-364-1129</a><br />
                    <a role='button' className='btn btn-link' href='mailto:twincitiesstandtogether2020@gmail.com'><i className='fa fa-envelope-o' /> <br/>Email Us</a>
                </Col>
            </Row>
        </Container>
    );
}
export default Footer