import Link from "next/link"

const Sidebar = () =>  {
    return (
        <>
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white " style={{minHeight: "88vh"}}>
                {/* <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a> */}
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link href="/">
                            <a  className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house"></i> 
                                <span className="ms-1 d-none d-sm-inline">Home</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/settings">
                        <a  className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-gear"></i> 
                            <span className="ms-1 d-none d-sm-inline">Settings</span> 
                        </a>
                    </Link>
                        
                    </li>
                    <li>
                    <Link href="/multiply9">
                        <a  className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-info-square"></i> 
                            <span className="ms-1 d-none d-sm-inline">Multiply 99..</span> 
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/multiply11">
                        <a  className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-explicit"></i> 
                            <span className="ms-1 d-none d-sm-inline">Multiply 11...</span> 
                        </a>
                    </Link>
                    </li>
                    {/* <li>
                    <Link href="/square_end_5">
                        <a  className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-explicit"></i> 
                            <span className="ms-1 d-none d-sm-inline">Square ending with 5</span> 
                        </a>
                    </Link>
                    </li> */}
                    
                    
                    
                    {/* <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li> */}
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Ekadiken Purven</span> </a>
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">                  <li className="w-100">
                                <Link href="/ekadiken_purven">
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Sum of Unit Digit</span> 10</a>
                                </Link>
                            </li>
                            <li className="w-100">
                                <Link href="/square_end_5">
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Square ending with</span> 5 </a>
                                </Link>
                            </li>
                            <li className="w-100">
                                <Link href="/division_fraction_end_with_9">
                                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Fraction Division Denominator ending with</span> 9 </a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr/>
            </div>
        </div>
        </>
    )
}

export default Sidebar

