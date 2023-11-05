import GetMessages from "./GetMessages"

export default function Inbox(){
    return ( 
         <main className="pt-80">



<section className="services section-padding">
        <div className="container with-pad">
            <div className="sec-head mb-80">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="d-inline-block">
                            <div className="sub-title-icon d-flex align-items-center">
                                <span className="icon pe-7s-bell"></span>
                                <h6>Inbox</h6>
                            </div>
                        </div>
                        <h3>Messages</h3>
                    </div>
                </div>
            </div>
            <div className="row">
               <GetMessages />
              
            </div>
        </div>
    </section>
            

            </main>)
}