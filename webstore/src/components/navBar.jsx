import '../css/navBar.css'
import { Link } from 'react-router-dom'
import React, {useState, useEffect, useRef} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'

export default function NavBar() {
    return (
    <>
        <nav className='navbar'>
            <div className='wrapper'>
                <h3 className='name'>Tienda Web</h3>
                <ul className='list'>
                    <li className='item'>Inicio</li>
                    <li className='item'>Catalogo</li>
                    <li className='item'>Contacto</li>
                    <li className='item'>Busqueda</li>
                    <li className='item'>Carrito</li>
                </ul>
            </div>
        </nav>
    </>
    );
}