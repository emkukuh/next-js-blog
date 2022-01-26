import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello hehe</p>
        <p>(This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://www.google.com'>GuluGulu</a>
          )
        </p>
      </section>
    </Layout>
  )
}
