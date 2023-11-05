import Link from "next/link";


async function getInbox(){
    const res = await fetch('http://localhost:4000/messages', {
        next: {
            revalidate: 0
        }
    })

    return res.json();
}
export default async function GetMessages(){
    const inbox = await getInbox();
    console.log(inbox);

    return (
        <>
        { inbox.map((message) => (
             <div className="col-lg-4 col-md-6" key={message.id}>
             <div className="item mb-30">
                 <div className="cont">
                     <div className="d-flex align-items-center mb-30">
                         
                         <div>
                             <span className="opacity-7 fz-13 mb-5">{message.name}</span>
                             <h5 className="fz-20">{message.email}</h5>
                         </div>
                     </div>
                     <p>{message.message.slice(0, 100)} ...</p>
                     
                     <Link href={`/inbox/${message.id}`} className="mt-30">
                         <span>Read More</span>
                     </Link>
                 </div>
             </div>
         </div>
         
        
        ))}
        {inbox.length === 0 && (
            <p classNameName="text-center">Wow such empty!</p>
        )}
       
        </>
    )
}