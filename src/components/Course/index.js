import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
import * as s from './styled';


export default function Course() {

    const initialState = {
        course: '',
        hours: '',
        price: '',
        professor: ''
    }

    const [fields, setFields] = useState(initialState);
    const history = useHistory();

    const handleChange = (e) => setFields({
        ...fields,
        [e.target.name]: e.target.value
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = fields;

        localStorage.setItem('data', JSON.stringify(data));
        setFields(initialState);
        history.push('/Courses');
    }

    return(
        <>
            <Nav /> 
            <s.Title>Cadastrar novo curso</s.Title>
            <s.Form onSubmit={handleSubmit}>
                <s.Fieldset>
                    <label htmlFor="course">Curso: </label>
                    <s.Input id="course" type="text" name="course" value={fields.course} onChange={handleChange} />
                </s.Fieldset>
                <s.Fieldset>
                    <label htmlFor="hours">Horas: </label>
                    <s.Input id="hours" type="number" name= "hours" value={fields.hours} onChange={handleChange}/>
                </s.Fieldset>
                <s.Fieldset>
                    <label htmlFor="price">Preço: </label>
                    <s.Input id="price" type="number" name= "price" value={fields.price} onChange={handleChange}/>
                </s.Fieldset>
                <s.Fieldset>
                    <label htmlFor="professor">Prof.: </label>
                    <s.Input id="professor" type="text" name= "professor" value={fields.professor} onChange={handleChange}/>
                </s.Fieldset>
                <s.Fieldset>
                    <s.SubmitButton type="submit" value="Salvar"/>
                    <Link to='/Courses'>
                        <s.CancelButton>Cancelar</s.CancelButton>
                    </Link>
                </s.Fieldset>
            </s.Form>
            <Footer />
        </>
    );
}