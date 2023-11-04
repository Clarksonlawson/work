import Image from "next/image"
import profile from "@/public/assets/imgs/header/me.jpg"
import Link from "next/link"
import main from "@/public/main.png"
import arrow from "@/public/arrow.png"
export default function Home() {
  return (
   
  
    <main className="pt-80">
        <section className="hero section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="intro">
                            <div className="lg-box">
                                <div className="box1">
                                    <div className="tow-items">
                                        <div className="item1 box-shadwo">
                                            <div className="circle-item d-flex align-items-center justify-content-center">
                                                <h6><Link href="about">About Us</Link></h6>
                                            </div>
                                            <div className="text-center mt-30">
                                                <Link href="">
                                                    <Image src={main} alt="Mainsvg" />
                                                    <p className="fz-13 mt-15">Dwonload CV</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="item2">
                                            <div
                                                className="sub-item1 box-shadwo d-flex align-items-center justify-content-center">
                                                <div className="text-center">
                                                    <h2 className="fw-700">8</h2>
                                                    <p className="fz-13">Years <br /> of Experaince</p>
                                                </div>
                                            </div>
                                            <div className="sub-item2 box-shadwo"></div>
                                        </div>
                                    </div>
                                    <div className="item-down box-shadwo d-flex align-items-center">
                                        <div>
                                            <div className="circle-item d-flex align-items-center justify-content-center">
                                                <Link href="services">
                                                   <Image src={arrow} alt="arrow
                                                   " />
                                                </Link>
                                            </div>
                                        </div>
                                        <h6 className="ml-15"><Link href="services">Our Services</Link></h6>
                                    </div>
                                </div>

                                <div className="box2">
                                    <div className="item3 box-shadwo"></div>
                                    <div className="item4 box-shadwo d-flex align-items-center">
                                        <h6><Link href="portfolio">Our Portfolio</Link></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-boxs">
                                <div className="item5 box-shadwo d-flex align-items-center justify-content-center">
                                    <Link href="#0" className="icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                </div>
                                <div className="item6 box-shadwo d-flex align-items-center justify-content-center">
                                    <Link href="#0" className="icon">
                                        <i className="fab fa-behance"></i>
                                    </Link>
                                </div>
                                <div className="item7 box-shadwo d-flex align-items-center justify-content-center">
                                    <Link href="#0" className="icon">
                                        <i className="fab fa-dribbble"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="author-profile">
                            <div className="author-Image">
                                <div className="Image">
                                    <Image src={profile} alt="Profile pic" />
                                </div>
                            </div>
                            <div className="author-info">
                                <div className="text-center">
                                    <span className="main-color sub-title mb-10">UI / UX Designer</span>
                                    <h4 className="fw-500">Hi, I&apos;m Clarkson Awomu</h4>
                                </div>
                                <div className="social mt-20">
                                    <Link href="#0" className="icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                    <Link href="#0" className="icon">
                                        <i className="fab fa-behance"></i>
                                    </Link>
                                    <Link href="#0" className="icon">
                                        <i className="fab fa-dribbble"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="butns mt-30">
                                <Link href="#0" className="inf-butn" data-scroll-nav="4">
                                    <span>Contact Us</span>
                                </Link>
                                <Link href="#0" className="inf-butn">
                                    <span>Dwonload CV</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 valign">
                        <div className="content">
                            <h5 className="cd-headline slide">
                                <span>Hello, I&apos;m </span>
                                <span className="cd-words-wrapper main-color">
                                    <b className="is-visible"> Clarkson Awomu</b>
                                    <b>Front-End Developer</b>
                                    <b>UI/UX Designer</b>
                                </span>
                            </h5>
                            <h1>I&apos;m a Fullstack  Developer and <span className="bord">Software Engineer</span> Based in
                                Nigeria.</h1>
                            <p className="text">I&apos;ve done remote work for agencies, consulted for startups, and collaborated
                                with talented people to create digital products for both business and consumer use.</p>
                            <div className="stauts mt-50 pt-50 bord-thin-top">
                                <div className="d-flex align-items-center">
                                    <div className="mr-40">
                                        <div className="d-flex align-items-center">
                                            <h2>150+</h2>
                                            <p>Completed <br /> Projects</p>
                                        </div>
                                    </div>
                                    <div className="mr-40">
                                        <div className="d-flex align-items-center">
                                            <h2>120+</h2>
                                            <p>Clients <br /> Worldwide</p>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="butn-presv">
                                            <Link href="contact" className="butn butn-md butn-bord radius-5 skew">
                                                <span>Hire Me!</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      


    </main>

  
  )
}
