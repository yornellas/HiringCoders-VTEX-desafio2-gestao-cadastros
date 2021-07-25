import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
import * as s from './styled';

export default function Client() {

    const initialState = {
        name: '',
        email: '',
        birthdate: '',
        adress: '',
        city: '',
        state: ''
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
        history.push('/Clients');
    }

    return(
        <>
            <Nav />
            <s.Title>Cadastrar novo cliente</s.Title>
            <s.Form onSubmit={handleSubmit}>
                <s.Fieldset>
                    <label htmlFor="name">Nome: </label>
                    <s.Input id="name" type="text" name="name" value={fields.name} onChange={handleChange} />
                </s.Fieldset>
                <s.Fieldset>
                    <label htmlFor="email">E-mail: </label>
                    <s.Input id="email" type="email" name="email" value={fields.email} onChange={handleChange} />
                </s.Fieldset>
                <s.Fieldset>
                    <label htmlFor="birthdate">Data Nasc.: </label>
                    <s.Input id="birthdate" type="date" name="birthdate" value={fields.birthdate} onChange={handleChange} />
                </s.Fieldset>
                <s.Fieldset>
                    <label htmlFor="adress">Endereço: </label>
                    <s.Input id="adress" type="text" name="adress" value={fields.adress} onChange={handleChange} />
                </s.Fieldset>
                <s.Fieldset>
                    <label htmlFor="city">Cidade: </label>
                    <s.Input id="city" type="text" name="city" value={fields.city} onChange={handleChange} />
                </s.Fieldset>
                <s.Fieldset>
                    <label htmlFor="state">Estado: </label>
                    <s.Input id="state" type="text" name="state" value={fields.state} onChange={handleChange} />
                </s.Fieldset>
                <s.Fieldset>
                    <s.SubmitButton type="submit" value="Salvar" />
                    <Link to='/Clients'>
                        <s.CancelButton>Cancelar</s.CancelButton>
                    </Link>
                </s.Fieldset>

            </s.Form>
            <Footer />
        </>
    );
}