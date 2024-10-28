import NavigationBar from '../components/navbar';
import Footer from '../components/footer';

const Layout = ({ children }) => {

    return (
        <>
            <NavigationBar />
            {children}
            <Footer />
        </>)
}

export default Layout