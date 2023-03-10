import { Col,Row,Container } from "reactstrap";
import { NavLink } from "react-router-dom";
const Footer = () =>{
    return (
        <Container className="footer">
            <Row>
                <Col xs='4'>
                    <h5>Links</h5>
                        <ul className="links list-group list-unstyled">
                            <NavLink className='nav-link' to='/'>
                                <li>Home</li>
                            </NavLink>
                            <NavLink className='nav-link' to='/about'>
                                <li>About</li>
                            </NavLink>
                            <NavLink className='nav-link' to='/contact'>
                                <li>Contact</li>
                            </NavLink>
                        </ul>
                </Col>
                <Col xs='4'>
                    <h5>Follow us</h5>
                    <a className='btn btn-social-icon btn-instagram' target='_blank' href='https://www.instagram.com/twincitiesrelief/?hl=en'><i className='fa fa-instagram' /></a>
                    <a className='btn btn-social-icon btn-facebook' target='_blank' href='https://www.facebook.com/TwinCitiesRelief'><i className='fa fa-facebook'/></a>                
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