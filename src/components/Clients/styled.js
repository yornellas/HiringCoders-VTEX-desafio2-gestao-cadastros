import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem;
`;

export const Table = styled.table`
    border-spacing: .8rem;
`;

export const TableHead = styled.th`
    color: #382F60;
    font-weight: 700;
    font-size: 20px;
    text-shadow: .04rem .04rem #FEFF89;
    -webkit-text-stroke: .02rem #382F60;  

    text-align: left;
`;

export const TableCell = styled.td`
    padding: .3rem .3rem .2rem 0;
`;

export const LinkContainer= styled.div`
    margin-left: 2.3rem;
    
    a {
        text-decoration: none;
        color: #382F60;
    }
`;

export const Button = styled.button`
    width: 12rem;
    height: 2.5rem;
    background-color: #FEFF89;
    border-radius: .3rem;

    &:hover {
        background-color: #FF9F68;
    }


`;

