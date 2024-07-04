import { Container } from './styles';
import { Input } from '../input';
import { ButtonText } from '../buttonText';
export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" />
      <div className="profile">
        <div>
          <h2>Thales Paravela</h2>
          <ButtonText title={'sair'} />
        </div>
        <img src="https://github.com/thalesparavela.png" alt="Foto de perfil" />
      </div>
    </Container>
  );
}
