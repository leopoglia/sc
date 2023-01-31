import Background from '../../components/background';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ReadMore from '../../components/read-more';

export default function New() {
    return (
        <div className="new">

            <Header />

            <div className="content">
                <div className='display-block'>
                    <h1>Deputado diz que bancada do agronegócio está ‘receosa’ e ‘assustada’ com governo Lula</h1>
                    <div className='desc'>
                        <p>Futuro da Petrobras e quedas do setor bancário diminuíram os ganhos da bolsa na semanaaaaaaaaaaaa</p>

                        <div className='display-flex'>
                            <span> 29 jan 2023 - 20h45 </span>
                            <i class="fi fi-rr-share"></i>
                        </div>
                    </div>



                    <img src="https://classic.exame.com/wp-content/uploads/2023/01/BRASIL-3.jpg" alt="" />
                </div>
            </div>

            <ReadMore />

            <Footer />
        </div>
    )
}