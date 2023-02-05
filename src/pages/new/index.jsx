import Background from '../../components/background';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ReadMore from '../../components/read-more';
import Services from '../../services';
import HtmlReactParser from 'html-react-parser';
import Date from './date'
import { Helmet } from "react-helmet";
import { Suspense, useState, useEffect } from 'react';

export default function New() {

    const url = window.location.href.split('/')[4];
    const [news, setNews] = useState([]);

    useEffect(() => {
        Services.findByIdNew(url).then((response) => {
            setNews(response);
        }).catch((error) => {
            console.log(error);
        });
    }, [url]);

    function handleShareButtonClick() {
        const link = window.location.href;
        copyToClipboard(link);
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function () {
        }, function (err) {
            console.error('Failed to copy: ', err);
        });
    }


    return (
        <div className="new">
            <Suspense fallback={<div>Loading...</div>}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{news.title}</title>
                    <meta property="og:image" content={news.image} />
                    <meta property="og:title" content={news.title} />
                    <meta name="description" content={news.description} />
                    <meta property="og:url" content={`https://sensoc.vercel.app/new/${url}`} />
                </Helmet>
            </Suspense>

            <Header />

            <div className="content">
                <div className='display-block'>
                    <h1>{news.title}</h1>
                    <div className='desc'>
                        <p>{news.description}</p>

                        <div className='display-flex'>
                            <span><Date postedAt={news.date}></Date></span>

                            <i onClick={handleShareButtonClick} className="fi fi-rr-share"></i>
                        </div>
                    </div>



                    <img src={news.image} alt="" />
                    <div className='ref'>
                        <span>{news.imageRef}</span>
                    </div>

                    {news.content !== undefined &&
                        <div className='html-react'>
                            {HtmlReactParser(news.content)}
                        </div>
                    }

                </div>
            </div>

            <ReadMore />

            <Footer />
        </div>
    )
}