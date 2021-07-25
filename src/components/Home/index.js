import Nav from '../Nav';
import Footer from '../Footer';
import clipboard from '../../img/clipboard.png';
import * as s from './styled';


export default function Home() {
    return(
        <>
        <Nav />
        <s.MainContainer>
          <s.TextContainer>
            <s.Title>
              Inventário de cursos e clientes TechCurso
            </s.Title>
            <s.Text>
              Acesse o menu de navegação para visualizar o inventário e/ou fazer novos cadastros.
            </s.Text>
          </s.TextContainer>
          <s.MainImage src={clipboard} alt="desenho de uma prancheta" />
        </s.MainContainer>
        <Footer />
      </>
    );
}
