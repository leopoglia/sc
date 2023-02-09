import Background from '../../components/background';
import Header from '../../components/header';
import Publications from '../../components/publications';
import Footer from '../../components/footer';
import Slide from '../../components/slide';
import NewMini from '../../components/new-mini';
import ReadMore from '../../components/read-more';
import Services from '../../services';
import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

export default function Home() {

  // const images = ['https://classic.exame.com/wp-content/uploads/2023/01/BRASIL-3.jpg', 'https://i.imgur.com/hERRz3a_d.webp?maxwidth=520&shape=thumb&fidelity=high'];
  const [news, setNews] = useState([]);


  useEffect(() => {
    Services.findAllNews().then((response) => {
      setNews(response);
    }).catch((error) => {
      console.log(error);
    });
  }, []);


  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Senso Crítico</title>
        <meta name='description' content="Senso Crítico, notícias e análises sobre política, economia, cultura e sociedade." />
        <meta name="keywords" content="Senso Crítico, notícias, análises, política, economia, cultura, sociedade" />
        <meta name="author" content="Senso Crítico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <Background />

      <Header />

      <p className='title'>Últimas Notícias</p>

      <div className='container'>

        {news.map((item) => {
          return (
            <Publications id={item.id} date={item.date} title={item.title} description={item.description} image={item.image} imageRef={item.imageRef} content={item.content} />
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

