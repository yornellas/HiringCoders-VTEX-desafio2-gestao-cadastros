import React from 'react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import * as s from './styled'

export default function Footer() {
    return(
        <s.Footer>
            <s.Text>Criado por Yolanda Ornellas</s.Text>
            <s.Link href="https://www.linkedin.com/in/yolandaornellas/" target="_blank" rel="noreferrer">
                | <FaLinkedinIn />
            </s.Link>
            <s.Link href="https://github.com/yornellas" target="_blank" rel="noreferrer">
                <FaGithubAlt /> |
            </s.Link>
        </s.Footer>
    );
}


