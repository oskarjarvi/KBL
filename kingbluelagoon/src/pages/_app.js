import Layout from './layout';
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'


function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>

    )
}

export default MyApp