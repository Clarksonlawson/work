import Link from "next/link"
export default function Footer(){
    return (
        <footer>
        <div className="container pb-30 pt-30 bord-thin-top">
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <p className="fz-13">© 2023 Clarkson Awomu<span className="underline main-color"><Link
                                    href="https://themeforest.net/user/ui-themez" target="_blank">Clarksonx Dev</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>)
}