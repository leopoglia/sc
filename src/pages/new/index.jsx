import Background from '../../components/background';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ReadMore from '../../components/read-more';
import Services from '../../services';
import HtmlReactParser from 'html-react-parser';
import { useState, useEffect } from 'react';

export default function New() {

    const url = window.location.href.split('/')[4];
    const [news, setNews] = useState([]);

    useEffect(() => {
        Services.findByIdNew(url).then((response) => {
            console.log(response);
            setNews(response);
        }).catch((error) => {
            console.log(error);
        });
    }, []);


    return (
        <div className="new">

            <Header />

            <div className="content">
                <div className='display-block'>
                    {/* <h1>{news.title}</h1>
                    <div className='desc'>
                        <p>{news.description}</p>

                        <div className='display-flex'>
                            <span>{news.date}</span>
                            <i className="fi fi-rr-share"></i>
                        </div>
                    </div>



                    <img src={news.image} alt="" />
 */}
                    {HtmlReactParser(news.content)}

                </div>
            </div>

            <ReadMore />

            <Footer />
        </div>
    )
}