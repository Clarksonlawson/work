import Image from 'next/image';
import Link from 'next/link';
import bg1 from '@/app/ui/images/bg1.png'


//Import image resources
// import blog1 from '@/app/ui/images/blog1.jpg'
// import blog2 from '@/app/ui/images/blog2.jpg'
//import comment from '@/app/ui/images/comment.png'
import gfonts from '@/app/ui/images/gfonts.png'
import icon from '@/app/ui/images/icon.svg'
import icon2 from '@/app/ui/images/icon2.png'
// import icon3 from '@/app/ui/images/icon3'
// import logo from '@/app/ui/images/logo'
 import me from '@/app/ui/images/me.jpg'

import mywork from '@/app/ui/images/my-works.png'
// import me2 from '@/app/ui/images/me2'
// import projectdt from '@/app/ui/images/project-dt'
// import project1 from '@/app/ui/images/project1'
// import project2 from '@/app/ui/images/project2'
// import project3 from '@/app/ui/images/project3'
// import project4 from '@/app/ui/images/project4'
// import project5 from '@/app/ui/images/project5'
// import project6 from '@/app/ui/images/project6'
import sign from '@/app/ui/images/sign.png'
// import star2 from '@/app/ui/images/star-2'
import star1 from '@/app/ui/images/star1.svg'




export default  function Section(){
    return (
    <section className="about-area">
        <div className="container">
            <div className="row">
                <div className="col-md-6" data-aos="zoom-in">
                    <div className="about-me-box shadow-box">
                        <Link className="overlay-link" href="about"></Link>
                        <Image src={bg1} alt="BG" className="bg-img" />
                        <div className="img-box">
                            <Image src={me} alt="About Me" />
                        </div>
                        <div className="infos">
                            <h4>A SOFTWARE ENGINEER</h4>
                            <h1>CLARKSON AWOMU.</h1>
                            <p>I am a Web Designer based in san francisco.</p>
                            <Link href="#" className="about-btn">
                                <Image src={icon} alt="Button" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 text-center">
                    <div className="about-credentials-wrap">
                        <div data-aos="zoom-in">
                            <div className="banner shadow-box">
                                <div className="marquee">
                                    <div>
                                      <span>LATEST WORK AND <b>FEATURED</b> <Image src={star1} alt="Star" /> LATEST WORK AND <b>FEATURED</b> <Image src={star1} alt="Star" /> LATEST WORK AND <b>FEATURED</b> <Image src={star1} alt="Star" /> LATEST WORK AND <b>FEATURED</b> LATEST WORK AND <Image src={star1} alt="Star" /> LATEST WORK AND <b>FEATURED</b> LATEST WORK AND <Image src={star1} alt="Star" /></span>
                                    </div>
                                  </div>
                            </div>

                        </div>

                        <div className="gx-row d-flex gap-24">
                            <div data-aos="zoom-in">
                                <div className="about-crenditials-box info-box shadow-box h-full">
                                    <Link className="overlay-link" href="credentials"></Link>
                                    <Image src={bg1} alt="BG" className="bg-img" />
                                    <Image src={sign} alt="Sign" />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="infos">
                                            <h4>more about me</h4>
                                            <h1>Credentials</h1>
                                        </div>

                                        <Link href="credentials" className="about-btn">
                                            <Image src={icon} alt="Button" />
                                        </Link>

                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-in">
                                <div className="about-project-box info-box shadow-box h-full">
                                    <Link className="overlay-link" href="works"></Link>
                                    <Image src={bg1} alt="BG" className="bg-img" />
                                    <Image src={mywork} alt="My Works" />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="infos">
                                            <h4>SHOWCASE</h4>
                                            <h1>Projects</h1>
                                        </div>

                                        <Link href="#" className="about-btn">
                                            <Image src={icon} alt="Button" />
                                        </Link>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-24">
                <div className="col-md-12">
                    <div className="blog-service-profile-wrap d-flex gap-24">
                        <div data-aos="zoom-in">
                            <div className="about-blog-box info-box shadow-box h-full">
                                <Link href="blog" className="overlay-link"></Link>
                                <Image src={bg1} alt="BG" className="bg-img" />
                                <Image src={gfonts} alt="GFonts" />
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>Blog</h4>
                                        <h1>GFonts</h1>
                                    </div>

                                    <Link href="blog" className="about-btn">
                                        <Image src={icon} alt="Button" />
                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="flex-1">
                            <div className="about-services-box info-box shadow-box h-full">
                                <Link href="service" className="overlay-link"></Link>
                                <Image src={bg1} alt="BG" className="bg-img" />
                                <div className="icon-boxes">
                                    <i className="iconoir-camera"></i>
                                    <i className="iconoir-design-pencil"></i>
                                    <i className="iconoir-color-filter"></i>
                                    <i className="iconoir-dev-mode-phone"></i>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>specialization</h4>
                                        <h1>Services Offering</h1>
                                    </div>

                                    <Link href="service" className="about-btn">
                                        <Image src={icon} alt="Button" />
                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in">
                            <div className="about-profile-box info-box shadow-box h-full">
                                <Image src={bg1} alt="BG" className="bg-img" />
                                <div className="inner-profile-icons shadow-box">
                                    <Link href="#">
                                        <i className="iconoir-dribbble"></i>
                                    </Link>
                                    <Link href="#">
                                        <i className="iconoir-twitter"></i>
                                    </Link>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>Stay with me</h4>
                                        <h1>Profiles</h1>
                                    </div>

                                    <Link href="contact" className="about-btn">
                                        <Image src={icon} alt="Button" />
                                    </Link>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>

            <div className="row mt-24">
                <div className="col-md-6" data-aos="zoom-in">
                        
                    <div className="about-client-box info-box shadow-box">
                        <Image src={bg1} alt="BG" className="bg-img" />
                        <div className="clients d-flex align-items-start gap-24 justify-content-center">
                            <div className="client-item">
                                <h1>07</h1>
                                <p>Years <br />Experience</p>
                            </div>

                            <div className="client-item">
                                <h1>+125</h1>
                                <p>CLIENTS <br />WORLDWIDE</p>
                            </div>

                            <div className="client-item">
                                <h1>+210</h1>
                                <p>Total <br />Projects</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-6" data-aos="zoom-in">
                        
                    <div className="about-contact-box info-box shadow-box">
                        <Link className="overlay-link" href="contact"></Link>
                        <Image src={bg1} alt="BG" className="bg-img" />
                        <Image src={icon2} alt="Icon" className="star-icon" />
                        <h1>Let&apos;s <br />work <span>together.</span></h1>
                        <Link href="#" className="about-btn">
                            <Image src={icon} alt="Button" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </section>
    );
} 