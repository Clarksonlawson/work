
import { useFormState } from "react-dom"
import { useFormStatus } from "react-dom"
const initialState = {
    message: null
}
function SubmitButton(){
    const { pending }  = useFormStatus()

    return (<button type="submit" aria-disabled={pending} >
        <span className="text">Submit form</span>
    </button>)
}

export function Form(){

    return (<form id="contact-form" action={formAction}>

    <div className="messages"></div>

    <div className="controls row">

        <div className="col-lg-6">
            <div className="form-group mb-30">
                <label>Your Name</label>
                <input id="form_name" type="text" name="name" required="required"   />
            </div>
        </div>

        <div className="col-lg-6">
            <div className="form-group mb-30">
                <label>Your Email</label>
                <input id="form_email" type="email" name="email" required="required"  />
            </div>
        </div>

        <div className="col-12">
            <div className="form-group">
                <label>Your Message</label>
                <textarea id="form_message" name="message" required="required" ></textarea>
            </div>
            <div className="mt-30">
               <SubmitButton />
            </div>
            <p aria-live="polite" className="sr-only" role="status" >
                {state?.message} kk
            </p>
        </div>

    </div>
</form>)
}