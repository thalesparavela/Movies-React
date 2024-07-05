import { Container } from './styles';
import { Input } from '../../components/input';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/buttonText';

export function SignOut() {
  return (
    <Container>
      <div>
        <div className="slogan">
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Crie sua conta</h2>
        <div className="login">
          <div className="inputs">
            <Input placeholder={'Nome'} icon={FiUser} />
            <Input placeholder={'E-Mail'} icon={FiMail} />
            <Input placeholder={'Senha'} icon={FiLock} />
          </div>
          <div className="buttons">
            <Button title={'Cadastrar'} />
            <ButtonText title={'Voltar para o login'} />
          </div>
        </div>
      </div>
      <img src="/background.png" alt="" />
    </Container>
  );
}
