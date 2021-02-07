import Link from 'next/link'
import styles from './navbar.module.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useEffect, useState } from 'react'


const NavigationBar = () => {
    const [scrolling, setScrolling] = useState(false)
    const handleScroll = () => {
        if (window.scrollY > 30) {
            setScrolling(true)
        }
        else {
            setScrolling(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => { window.removeEventListener("scroll", handleScroll) }
    }, [])
    console.log(scrolling)
    return (
        <>
            <Navbar fixed="top" variant="dark" className={scrolling ? styles.scrollingNav : styles.navbar} collapseOnSelect expand="lg">
                <Navbar.Brand href="/"><img src='./whiteLogo.svg' alt="KBL logo" style={{ width: 100, height: 100 }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Item>
                            <Link href="/"><a className="nav-link" style={{ color: 'white' }}>Hem</a></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/om-oss"><a className="nav-link" style={{ color: 'white' }}>Om oss</a></Link>
                        </Nav.Item>
                        <NavDropdown title="Hundar" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link href="/om-oss"><a>Om oss</a></Link></NavDropdown.Item>
                            <NavDropdown.Item><Link href="/om-oss"><a>Om oss</a></Link></NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Item>
                            <Link href="/"><a className="nav-link">Hund himmelen</a></Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}
export default NavigationBar