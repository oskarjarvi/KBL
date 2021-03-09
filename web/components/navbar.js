import Link from 'next/link'
import styles from '../styles/navbar.module.scss'
import { Navbar, Nav, NavDropdown, Dropdown, NavItem, NavLink } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import client from '../client'



const NavigationBar = () => {
    const [scrolling, setScrolling] = useState(false)
    const handleScroll = () => {
        if (window.scrollY > 200) {
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

    const query = '*[_type == "litter"]{ title, slug, status}'
    const [data, setData] = useState(null)
    const [plannedData, setPlannedData] = useState(null)
    const [activeData, setActiveData] = useState(null)

    useEffect(() => {
        client.fetch(query).then(info => {
            setData(info)
        })
    }, [])
    useEffect(() => {
        if (data) {

            setPlannedData(data.filter(i => i.status === 'planned'))
            setActiveData(data.filter(i => i.status === 'active'))
        }
    }, [data])

    return (
        <>
            <Navbar sticky="top" variant="dark" className={scrolling ? styles.scrollingNav : styles.navbar} collapseOnSelect expand="lg">
                <Navbar.Brand href="/"><img src='/whiteLogo.svg' alt="KBL logo" style={{ width: 250, height: 60 }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                    <Nav style={{ paddingLeft: 10 }}>

                        <Nav.Item>
                            <Link href="/"><a className="nav-link" style={{ color: 'white' }}>Hem</a></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/om-oss"><a className="nav-link" style={{ color: 'white' }}>Om oss</a></Link>
                        </Nav.Item>
                        <NavDropdown title="Hundar">
                            <Link href="/dogs" passHref><NavDropdown.Item>Våra hundar</NavDropdown.Item></Link>
                            <Link href="/previous" passHref><NavDropdown.Item>Tidigare kullar</NavDropdown.Item></Link>
                            <Link href="/foder" passHref><NavDropdown.Item>Foderhundar</NavDropdown.Item></Link>
                            <Link href="/dogHeaven" passHref><NavDropdown.Item>Hund himmelen</NavDropdown.Item></Link>
                        </NavDropdown>
                        {
                            plannedData && plannedData.length === 0 ? <Nav.Item><Link href="/noPuppies"><a className="nav-link" style={{ color: 'white' }}>Planerade kullar</a></Link>
                            </Nav.Item> :
                                <Dropdown as={NavItem}>
                                    <Dropdown.Toggle as={NavLink}>Planerade kullar</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {
                                            plannedData && plannedData.map((link, i) =>
                                                <Link href={{
                                                    pathname: "planned/[planned]",
                                                    query: { slug: link.slug.current }
                                                }} key={i} as={`planned/${link.slug.current}`} passHref><Dropdown.Item>{link.title}</Dropdown.Item></Link>)
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                        }
                        {
                            activeData && activeData.length === 0 ? <Nav.Item><Link href="/noPuppies"><a className="nav-link" style={{ color: 'white' }}>Valpar</a></Link>

                            </Nav.Item> :
                                <Dropdown as={NavItem}>
                                    <Dropdown.Toggle as={NavLink}>Valpar</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {
                                            activeData && activeData.map((link, i) =>
                                                <Link href={{
                                                    pathname: "/puppies/[puppies]",
                                                    query: { slug: link.slug.current }
                                                }} key={i} as={`/${link.slug.current}`} passHref><Dropdown.Item>{link.title}</Dropdown.Item></Link>)
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar >

        </>
    )
}
export default NavigationBar