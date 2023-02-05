import Background from '../../components/background';
import Header from '../../components/header';
import Publications from '../../components/publications';
import Footer from '../../components/footer';
import Slide from '../../components/slide';
import NewMini from '../../components/new-mini';
import ReadMore from '../../components/read-more';
import Services from '../../services';
import { useState } from 'react';

export default function Home() {

  const images = ['https://classic.exame.com/wp-content/uploads/2023/01/BRASIL-3.jpg', 'https://i.imgur.com/hERRz3a_d.webp?maxwidth=520&shape=thumb&fidelity=high'];
  const [news, setNews] = useState([]);

  Services.findAllNews().then((response) => {
    console.log(response);
    setNews(response);
  }).catch((error) => {
    console.log(error);
  });


  return (
    <div className="home">

      <Background />

      <Header />

      <p className='title'>Últimas Notícias</p>

      <div className='container'>

        {news.map((item) => {
          return (
            <Publications id={item.id} title={item.title} description={item.description} image={item.image} imageRef={item.imageRef} content={item.content} />
          )
        })}
      </div>


      {/* <div className='grid-mobile'>
        <Slide images={images} />

        <div className="new-minis">
          <NewMini />
          <NewMini />
          <NewMini />
          <NewMini />
          <NewMini />

        </div>
      </div> */}


      <ReadMore />
      <Footer />


    </div >
  );
}

