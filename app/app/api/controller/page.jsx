
export default function handler(req, res){
    const {method, body} = req;
    if(method === "POST"){
        const formData  = JSON.parse(body);

        console.log(formData);


        res.status(200).json(formData);
    }else{
        res.status(405).json({message: "This method is not allowed"})
    }
}