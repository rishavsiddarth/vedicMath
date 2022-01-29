import Image from 'next/image'
import Link from 'next/link'

const Nav = () =>  {
    return (
        <>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link href="/" passHref>
                    <Image src="/img_avatar1.png" alt="Avatar Logo"  className="rounded-pill" width="40" height="40"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link" >Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about_us">
                                <a className="nav-link" >About Us</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact_us">
                                <a className="nav-link" >Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  
        </>
    )
}

export default Nav

