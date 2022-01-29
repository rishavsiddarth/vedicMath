import { useEffect } from 'react'

import '../styles/globals.css'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/quiz.css'
import "bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle')
    }, [])
    return (
        <Layout>
            <Component {...pageProps } />
        </Layout>
    )
    
}

export default MyApp