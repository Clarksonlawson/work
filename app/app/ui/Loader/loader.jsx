export default function Loader(){
    return ( <div class="loader-wrap">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                </svg>

                <div className="loader-wrap-heading">
                    <div className="load-text">
                        <span>C</span>
                        <span>l</span>
                        <span>a</span>
                        <span>r</span>
                        <span>k</span>
                        <span>s</span>
                        <span>o</span>
                        <span>n</span>
                    </div>
                </div>
            </div>
        )
}