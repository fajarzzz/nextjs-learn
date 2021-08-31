import { GetStaticProps } from 'next';
import Layout from '../../components/Layout';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  user: User;
}

export default function UserDetail(props: UserDetailProps) {
  const { user } = props;
  return (
    <Layout pageTitle={user.name}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  )
}

// GET STATIC PATH FOR DETAIL
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers= await res.json();
  const paths = dataUsers.map((data:User) => {
    return {
      params: {
        id: `${data.id}`,
      },
    }
  });
  return {
    paths,
    fallback: false,
  };
}


interface getStaticProps {
  params: {
    id: string;
  }
}

export async function getStaticProps(context: getStaticProps) {
  const { id } = context.params;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const user = await res.json();

  return{
    props: {
      user,
    },
  };
}
