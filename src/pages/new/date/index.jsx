import React from "react";

const formatTimeDifference = postedAt => {
    const now = new Date();
    const postedTime = new Date(postedAt);
    const timeDifference = now - postedTime;
    const hours = Math.round(timeDifference / (1000 * 60 * 60));

    if (hours < 1) {
        return `há ${Math.round(timeDifference / (1000 * 60))} minutos`;
    } else if (hours < 24) {
        return `há ${hours} horas`;
    }

    return postedTime.toLocaleDateString();
};

const NewsItem = ({ postedAt }) => (
    <div>
        <p>{formatTimeDifference(postedAt)}</p>
    </div>
);

export default NewsItem;