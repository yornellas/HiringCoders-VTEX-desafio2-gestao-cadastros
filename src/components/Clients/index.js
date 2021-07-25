import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
import * as s from './styled';

export default function Clients() {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        let list = localStorage.getItem('data');

        if(list != null) {
            list = JSON.parse(list);
            setClients(list);
        }
    }, []);

    return(
        <>
            <Nav />
            <s.Container>
                <s.Table>
                    <thead>
                        <tr>
                            <s.TableHead>Nome</s.TableHead>
                            <s.TableHead>E-mail</s.TableHead>
                            <s.TableHead>Data Nasc.</s.TableHead>
                            <s.TableHead>Endereço</s.TableHead>
                            <s.TableHead>Cidade</s.TableHead>
                            <s.TableHead>Estado</s.TableHead>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <s.TableCell>{clients.name}</s.TableCell>
                            <s.TableCell>{clients.email}</s.TableCell>
                            <s.TableCell>{clients.birthdate}</s.TableCell>
                            <s.TableCell>{clients.adress}</s.TableCell>
                            <s.TableCell>{clients.city}</s.TableCell>
                            <s.TableCell>{clients.state}</s.TableCell>
                        </tr>
                    </tbody>
                </s.Table>
            </s.Container>
            <s.LinkContainer>
                <Link to='/Client'>
                    <s.Button type="button">Cadastrar Novo Cliente</s.Button>
                </Link>
            </s.LinkContainer>
            <Footer />
        </>
    );
}

