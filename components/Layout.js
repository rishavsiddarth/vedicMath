
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'
import Sidebar from './Sidebar'

function Layout({children}) {
    return (
        <div>
            <Meta/>
            <Header/>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <Sidebar />
                    <div className="col py-3">
                    {children}
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
