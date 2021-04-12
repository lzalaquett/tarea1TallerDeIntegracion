import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Navbar, Form, FormControl, Nav, Button, Container, CardGroup, Collapse, CardDeck } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PersonajeDetalleMini from './PersonajeDetalleMini'

const HomeNavbar = () => {


    const [personajes, setPersonajes] = useState([])
    const [personajesBackup, setPersonajesBackup] = useState([])
    const [open, setOpen] = useState(false);

    useEffect(() => {
        consultaAPI('https://tarea-1-breaking-bad.herokuapp.com/api/characters')
        setPersonajesBackup(personajes)
    }, [])

    const consultaAPI = (link) => {
        axios.get(link)
            .then(result => {
                setPersonajes(result.data)
            }).catch(
                setPersonajes([personajesBackup])
            )
    }

    const handleChange = e => {
        consultaAPI('https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=' + e.target.value)
    }

    return (
        <div>

            <Navbar bg="dark" variant="dark" expand="lg">
                <Link to="/"><Navbar.Brand>METHWORL</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>

            <div style={{ backgroundColor: '#5A5A5A' }} >
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        onChange={handleChange}
                        className="mr-sm-2"
                        style={{ backgroundColor: 'darkgrey', color: 'white' }}
                    />
                    <Button
                        variant="danger"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}>
                        Mostrar/Ocultar
                </Button>
                </Form>

                <Collapse in={open}>
                    <div id="example-collapse-text" style={{ minHeight: '400px' }}>
                        {personajes.map((p) => {
                            p && <p>{p.name}</p>
                        })}
                        <CardDeck>
                            {personajes[0] && <PersonajeDetalleMini personaje={personajes[0]} />}
                            {personajes[1] && <PersonajeDetalleMini personaje={personajes[1]} />}
                            {personajes[2] && <PersonajeDetalleMini personaje={personajes[2]} />}
                            {personajes[3] && <PersonajeDetalleMini personaje={personajes[3]} />}
                            {personajes[4] && <PersonajeDetalleMini personaje={personajes[4]} />}
                            {personajes[5] && <PersonajeDetalleMini personaje={personajes[5]} />}
                            {personajes[6] && <PersonajeDetalleMini personaje={personajes[6]} />}
                            {personajes[7] && <PersonajeDetalleMini personaje={personajes[7]} />}
                            {personajes[8] && <PersonajeDetalleMini personaje={personajes[8]} />}
                            {personajes[9] && <PersonajeDetalleMini personaje={personajes[9]} />}
                            {personajes[10] && <PersonajeDetalleMini personaje={personajes[10]} />}
                        </CardDeck>
                    </div>
                </Collapse>
            </div>
        </div>


    )
}

export default HomeNavbar