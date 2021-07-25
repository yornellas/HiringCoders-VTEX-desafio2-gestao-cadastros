import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import * as s from './styled';

export default function Nav(props) {
    return(
        <s.Nav>
            <s.ContainerLink>
                <Link to='/'>
                    <s.Logo src={logo}alt="Logotipo TechCurso"/>
                </Link>
                <Link to='/Courses'>
                    CURSOS
                </Link>
                <Link to='/Clients'> 
                    CLIENTES
                </Link>
            </s.ContainerLink>
        </s.Nav>
    );
}