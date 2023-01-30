import Background from '../../components/background';
import Header from '../../components/header';
import Publications from '../../components/publications';
import Footer from '../../components/footer';
import Slide from '../../components/slide';
import NewMini from '../../components/new-mini';
import ReadMore from '../../components/read-more';

export default function Home() {

  const images = ['https://classic.exame.com/wp-content/uploads/2023/01/BRASIL-3.jpg', 'https://i.imgur.com/hERRz3a_d.webp?maxwidth=520&shape=thumb&fidelity=high'];

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

      <div className='grid-mobile'>
        <Slide images={images} />

        <div className="new-minis">
          <NewMini />
          <NewMini />
          <NewMini />
          <NewMini />
          <NewMini />

        </div>
      </div>


      <ReadMore />
      <Footer />


    </div >
  );
}

