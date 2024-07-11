import { Container, Avatar, UserManagement } from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';

import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';
export function Profile() {
  return (
    <Container>
      <header>
        <FiArrowLeft />
        <p>Voltar</p>
      </header>
      <Avatar>
        <label htmlFor="Avatar">
          <img
            src="https://github.com/thalesparavela.png"
            alt="Foto de perfil"
          />
          <Button icon={FiCamera} />
        </label>
      </Avatar>
      <UserManagement>
        <div>
          <Input placeholder={'Nome'} icon={FiUser} />
          <Input placeholder={'E-Mail'} icon={FiMail} />
        </div>
        <div>
          <Input placeholder={'Senha atual'} icon={FiLock} />
          <Input placeholder={'Nova senha'} icon={FiLock} />
        </div>
        <div className="buttons">
          <Button title={'Salvar'} />
        </div>
      </UserManagement>
    </Container>
  );
}
