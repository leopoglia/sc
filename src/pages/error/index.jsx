import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import "./style.css";

export default function Error() {
    return (
        <div className="error">
            <Header />

            <div className="content">
                <div className="e404">
                    <h1>404</h1>
                    <h2>Página não encontrada</h2>

                    <div className="display-flex-center">
                        <Link to="/">
                            <button>
                                Voltar para a página inicial
                            </button>
                        </Link>
                    </div>
                </div>
                
            </div>

            <Footer />

        </div>
    );
}