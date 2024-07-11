import { Container } from './styles';
import { AiFillStar } from 'react-icons/ai';
import { FiStar } from 'react-icons/fi';
export function Stars({ ranking }) {
  return (
    <Container>
      {console.log(ranking)}
      {Array.from({ length: 5 }).map((_, index) =>
        index < ranking ? <AiFillStar key={index} /> : <FiStar key={index} />,
      )}
    </Container>
  );
}
