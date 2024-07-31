import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../logo.svg"

export default function Headers() {
    return (
        <headers class="container text-center" id="containerHeader">
            <section class="row justify-content-start">
                        <div class="col-12">
                        <h1><img src={logo}
                         width={85}
                         className="coracao" 
                         alt="logo" />
                        Galeria do amor
                        <img src={logo}
                         width={85}
                         className="coracao" 
                         alt="logo" />
                        </h1>
                        </div>
            </section>
        </headers>
    )
}