import { Container, Tag } from './styles';
import { Stars } from '../stars';
export function Card({ ranking = 1, title, tags, description }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Stars ranking={ranking} />
      <p>{description}</p>

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
