
import Head from 'next/head';
import styles from '../../styles/Layout.module.css';

const Layout = ({ children, title = 'Qatar Prode' }) => {
    return (
        <div className={styles.layout__container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Qatar Fixtures" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </div>
    )
}

export default Layout