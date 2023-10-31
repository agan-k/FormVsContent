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
    <Container>
       <Link href={post.link}>
          <Arrow>&#8599;</Arrow>
          <Mask><img src={post.img} /></Mask>
          <>
            <Heading>{post.title}</Heading>
            <Description>{post.description}</Description>
          </>
       </Link>
    </Container>
  );
}