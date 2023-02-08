import Background from '../../components/background';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ReadMore from '../../components/read-more';
import HtmlReactParser from 'html-react-parser';
import Date from './date'
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from 'react';

export default function New() {

    const url = window.location.href.split('/')[4];
    const [news, setNews] = useState([]);

    useEffect(() => {
        const n = JSON.parse(localStorage.getItem('new'));
        setNews(n);
    }, [news]);

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
            <Helmet>
                <meta charSet="utf-8" />
                <title>{news.title}</title>
                <meta name='description' content={news.description} />

                <meta property="og:title" content={news.title} />
                <meta property="og:image" content={news.image} />
                <meta property="og:title" content={news.title} />

                <meta property="twitter:title" content={news.title} />
                <meta property="twitter:image" content={news.image} />
                <meta property="twitter:description" content={news.description} />
            </Helmet>

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