import { Container, Tag } from './styles';
import { FiStar } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

export function Card({ ranking = 1, title, tags, description }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div className="stars">
        {Array.from({ length: 5 }).map((_, index) =>
          index < ranking ? <AiFillStar key={index} /> : <FiStar key={index} />,
        )}
      </div>
      <p>
        {description}
      </p>

      {tags && (
        <Tag>
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </Tag>
      )}
    </Container>
  );
}
