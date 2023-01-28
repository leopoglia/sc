import "./style.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="display-flex-center">
                <img src="img/logo.png" alt="logo" style={{ width: '30px' }} />
                <p>© 2023 - Todos os direitos reservados</p>
            </div>

            <div className="icons">
                <i className="fi fi-brands-twitter" />
                <i className="fi fi-brands-youtube" />
                <i className="fi fi-brands-discord" />
            </div>
        </div>
    );
}