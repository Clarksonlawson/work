import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/ui/images/logo.svg'
export default function Footer(){
    return(
        <footer className="footer-area">
            <div className="container">
                <div className="footer-content text-center">
                    <Link href="" className="logo">
                        <Image src={logo} alt="Logo" />
                    </Link>
                    <ul className="footer-menu">
                        <li><Link href="index">Home</Link></li>
                        <li><Link href="about">About</Link></li>
                        <li><Link href="works">Works</Link></li>
                        <li><Link href="contact">Contact</Link></li>
                    </ul>
                    <p className="copyright">
                        &copy; All rights reserved by <span>Clarkson Awomu</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}