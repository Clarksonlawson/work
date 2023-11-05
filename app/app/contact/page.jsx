'use client'

import { Form } from "../ui/Form/Form"

export default function Contact(){
    return (  
                <main className="pt-80">



                <section className="contact section-padding">
                    <div className="container">
                        <div className="sec-head mb-80">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <div className="d-inline-block">
                                        <div className="sub-title-icon d-flex align-items-center">
                                            <span className="icon pe-7s-map-marker"></span>
                                            <h6>Contact Me</h6>
                                        </div>
                                    </div>
                                    <h3>Lets Get in Touch!</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            
                            <div className="col-lg-5 valign">
                                <div className="info full-width md-mb80">
                                    <div className="item mb-30 d-flex align-items-center">
                                        <div className="mr-15">
                                            <span className="icon fz-40 main-color pe-7s-call"></span>
                                        </div>
                                        <div className="mr-10">
                                            <h6 className="opacity-7">Phone</h6>
                                        </div>
                                        <div className="ml-auto">
                                            <h4>+234 807 425 1316</h4>
                                        </div>
                                        <div className="ml-auto">
                                            <h4>+234 903 547 1375</h4>
                                        </div>
                                    </div>
                                    <div className="item mb-30 d-flex align-items-center">
                                        <div className="mr-15">
                                            <span className="icon fz-40 main-color pe-7s-mail"></span>
                                        </div>
                                        <div className="mr-10">
                                            <h6 className="opacity-7">Email</h6>
                                        </div>
                                        <div className="ml-auto">
                                            <h4>
                                                <a href="mailto:abc@example.com">clarksonlawson1@Gmail.com</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="item d-flex align-items-center">
                                        <div className="mr-15">
                                            <span className="icon fz-40 main-color pe-7s-map-marker"></span>
                                        </div>
                                        <div className="mr-10">
                                            <h6 className="opacity-7">Address</h6>
                                        </div>
                                        <div className="ml-auto">
                                            <h4>Nigeria</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 valign">
                                <div className="full-width">
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            

            </main>

)
}