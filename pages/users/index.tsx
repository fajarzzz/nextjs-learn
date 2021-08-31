/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/extensions */
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
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
       dataUsers.map((data) => {
         return (
           // eslint-disable-next-line jsx-a11y/click-events-have-key-events
           <div key={data.id} onClick={() => { return router.push(`/users/${data.id}`) }} className={`${styles.card} ${styles.poin}`}>
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
      dataUsers,
    },
  };
}
