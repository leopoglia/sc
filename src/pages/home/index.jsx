import Background from '../../components/background';
import Header from '../../components/header';
import Publications from '../../components/publications';
import Footer from '../../components/footer';

export default function Home() {
  return (
    <div className="home">

      <Background />

      <Header />

      <p className='title'>Últimas Notícias</p>

      <div className='container'>
        <Publications />
        <Publications />
        <Publications />
      </div>

      <div className='container'>
        <Publications />
        <Publications />
        <Publications />
      </div>

      <Footer />


    </div>
  );
}
