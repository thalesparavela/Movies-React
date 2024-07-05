import { Container } from './styles';
import { Button } from '../../components/button';
import { FiPlus } from 'react-icons/fi';
import { Card } from '../../components/card';
import { movies } from '../../mocks';
import { Header } from '../../components/header';
export function Home() {
  return (
    <Container>
          <Header />
      <main>
        <div>
          <h2>Meus filmes</h2>
          <Button className="Button" title={'Adicionar filme'} icon={FiPlus} />
        </div>
        <div className="movies">
          {movies.map((movie) => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      </main>
    </Container>
  );
}
