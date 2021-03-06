import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'


function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>

    )
}

export default MyApp