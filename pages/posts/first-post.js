import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import style from './first-post.module.scss';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <h2 className={style.test}>
        <Link href="/">
          <a>Back to home</a>  
        </Link>  
      </h2>
    </Layout>
  )
}