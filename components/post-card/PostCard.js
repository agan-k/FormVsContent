import Link from 'next/link'
import {
  Container, 
  Description, 
  Heading,
  Arrow,
  Mask,
} from './styled';

export default function PostCard({post, recentPosts}) {
  
  return (
    <Link href={post.link}>
      <Container>
        <Arrow>&#8599;</Arrow>
        <Mask><img src={post.img} /></Mask>
        <>
          <Heading>{post.title}</Heading>
          <Description>{post.description}</Description>
        </>
      </Container>
    </Link>
  );
}