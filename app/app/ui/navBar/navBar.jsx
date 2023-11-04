import Image from 'next/image';
import logoLight from '@/public/assets/imgs/logo-light.png'  
import Link from 'next/link';
export default function navBar(){
    return (   
         <nav className="navbar navbar-chang navbar-expand-lg">
        <div className="container position-re">
            <div className="row">
                <div className="col-lg-3 col-6 order1">
                    <div className="bord">
                       
                        <Link className="logo icon-img-70" href="#">
                            <Image src={logoLight} alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 order3">
                    <div className="bg">
                       
                        <div className="full-width">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/"><span
                                            className="rolling-text">Home</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="./about"><span
                                            className="rolling-text">About</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="./services"><span
                                            className="rolling-text">Services</span></Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" href="./portfolio"><span
                                            className="rolling-text">Portfolio</span></Link>
                                </li> */}
                               
                                <li className="nav-item">
                                    <Link className="nav-link" href="contact"><span
                                            className="rolling-text">Contact</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-6 order2">
                    <div className="bord d-flex justify-content-end">
                        <ul className="social d-flex rest">
                            <li>
                                <Link href="#0"><i className="fab fa-linkedin-in"></i></Link>
                            </li>
                            <li>
                                <Link href="#0"><i className="fab fa-behance"></i></Link>
                            </li>
                            <li>
                                <Link href="#0"><i className="fab fa-dribbble"></i></Link>
                            </li>
                        </ul>
                        <button className="navbar-toggler" type="button">
                            <span className="icon-bar"><i className="fas fa-bars"></i></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>);
}