import { useEffect, useCallback, useState } from "react" ;
import { getBlogsWithParams } from "@services/blogsAPI";
import dateFormat from "dateformat";
import NewsCard from "@components/NewsCard";
import { STATIC_BLOGS } from "../constants";

export const useGetNews = (Styles) => {
    const [bookmark, setBookmark] = useState("news");
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function getNews() {
            const params = bookmark === "blogs" ? { is_blog: true } : {is_blog: false};
            const newsData = await getBlogsWithParams(params, 10);
            const newsList = newsData.map(article => {
                const imageRef = article.images_refs[0] ? `${STATIC_BLOGS}/${article.images_refs[0]}` : "";
                const header = article.header;
                const promotext = article.text.introduction;
                const date = dateFormat(article.created_at, "yyyy.mm.dd");
                const id = article._id;
                return (
                    <NewsCard
                        imageRef={imageRef}
                        header={header}
                        promotext={promotext}
                        date={date}
                        id={id}
                        key={id}
                    />
                )
            })
            setNews(newsList)
        }
        getNews()
    }, [bookmark])


    const clickHandler = useCallback((value) => {
        return function () {
            setBookmark(value);
        };
    }, [])

    const classNameHandler = useCallback((value) => {
        const classNames = [Styles["bookmark"]];
        if (value === bookmark) {
            classNames.push(Styles["bookmark--active"]);
        }
        return classNames.join(" ");
    }, [bookmark, Styles]);

    return { classNameHandler, clickHandler, news }

}