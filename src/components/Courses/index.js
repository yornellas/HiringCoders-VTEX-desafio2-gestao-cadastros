import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
import * as s from './styled';

export default function Courses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        let list = localStorage.getItem('data');

        if(list != null) {
            list = JSON.parse(list);
            setCourses(list);
        }
    }, []);

    return(
        <>
            <Nav />
            <s.Container>
                <s.Table>
                    <thead>
                        <tr>
                            <s.TableHead>Curso</s.TableHead>
                            <s.TableHead>Horas</s.TableHead>
                            <s.TableHead>Preço</s.TableHead>
                            <s.TableHead>Professor</s.TableHead>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>      
                            <s.TableCell>{courses.course}</s.TableCell>
                            <s.TableCell>{courses.hours}</s.TableCell>
                            <s.TableCell>{courses.price}</s.TableCell>
                            <s.TableCell>{courses.professor}</s.TableCell>
                        </tr>
                    </tbody>
                </s.Table>
            </s.Container>
            <s.LinkContainer>
                <Link to='/Course'>
                    <s.Button type="button">Cadastrar Novo Curso</s.Button>
                </Link>
            </s.LinkContainer>
            <Footer />
        </>
    );
}

