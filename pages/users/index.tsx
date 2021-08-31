import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import styles from '../../styles/Users.module.css'

interface userProps {
  dataUsers: Array<any>;
}

export default function Users(props: userProps) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <Layout pageTitle="Users Page">
      {
       dataUsers.map(data => {
        return (
          <div key={data.id} onClick={() => router.push(`/users/${data.id}`)} className={`${styles.card} ${styles.poin}`}>
            <p>{data.name}</p>
            <p>{data.email}</p>
          </div>
        )
       })
      }
    </Layout>
  )
}

// GET STATIC PROPS (API CALL STATIC)
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers: dataUsers,
    },
  };
}