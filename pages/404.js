import Link from "next/link"

const errorPage = () =>  {
    return (
        <>
        <div className="container mt-3" id="middlecontent">
            <div id="not-found">
                <div className="not-found">
                    <div className="not-found-404">
                        <h1>404</h1>
                    </div>
                    <h2>Hi, We are sorry, Page not found!</h2>
                    <p>The page you are looking for might have been removed had its name changed or it temporarily unavailable.</p>
                    <Link href="/">
                        <a>Back to Homepage</a>
                    </Link>
                </div>
            </div>

        </div>
            
        </>
    )
}

export default errorPage

