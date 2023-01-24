import "./style.css";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="display-flex">
                <img src="img/logo.png" alt="logo" style={{ width: '30px' }} />
                <p>© 2023 - Todos os direitos reservados</p>
            </div>

            <div className="icons">
                <i class="fi fi-brands-twitter" />
                <i class="fi fi-brands-youtube" />
                <i class="fi fi-brands-discord" />
            </div>
        </div>
    );
}