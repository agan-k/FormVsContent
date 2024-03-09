import Link from 'next/link';
import {
  Container, 
  Description, 
  Heading,
  Mask,
} from './styled';

type Post = {
  id: number
  title: string
  description: string
  link: string
  img: string
}

interface PostCardProps {
  post: Post
}

export const PostCard: React.FC<PostCardProps> = ({post}) => {
  return (
    <Link href={post.link}>
      <Container>
        <Mask><img src={post.img} /></Mask>
        <>
          <Heading>{post.title}</Heading>
          <Description>{post.description}</Description>
        </>
      </Container>
    </Link>
  );
}