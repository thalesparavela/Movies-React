import { Container } from './styles';
import { Input } from '../../components/input';
import { FiLock, FiMail } from 'react-icons/fi';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/buttonText';

export function SignIn() {
  return (
    <Container>
      <div>
        <div className="slogan">
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Faça seu login</h2>
        <div className="login">
          <div className="inputs">
            <Input placeholder={'E-mail'} icon={FiMail} />
            <Input placeholder={'Senha'} icon={FiLock} />
          </div>
          <div className="buttons">
            <Button title={'Entrar'} />
            <ButtonText title={'Criar conta'} />
          </div>
        </div>
      </div>
      <img src="/background.png" alt="" />
    </Container>
  );
}
