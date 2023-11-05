async function getInbox(id){
    const res = await fetch('http://localhost:4000/messages/' + id, {
        next: {
            revalidate: 0
        }
    })

    return res.json();
}

export default async function GetMessage({params}){
    const id = params.id;
    const res = await getInbox(id);

    return(
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
                        <h3>Message from {res.name} </h3>
                    </div>
                </div>
            </div>
            <div className="row">
                
            <div className="col-lg-12 col-md-12" key={res.id}>
             <div className="item mb-30">
                 <div className="cont">
                     <div className="d-flex align-items-center mb-30">
                         
                         <div>
                             <span className=" fz-13 mb-5">{res.email}</span>
                         </div>
                     </div>
                     <p>{res.message}</p>
                     
                    
                 </div>
             </div>
         </div>
              
            </div>
        </div>
    </section>
    
        </main>
    )
}