import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../api/config";
import { NewsItem } from "../../types/news";
import newsStyle from "./newPage.module.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Title from "../../components/Title/title";

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log({ id });
    const fetchNewsItem = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<NewsItem>(
          `${API_BASE_URL}/news/${id}`
        );
        setNewsItem(response.data);
      } catch (err) {
        setError("Не удалось загрузить новость");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (isLoading) {
    return (
      <div className={newsStyle.loadingContainer}>
        <div className={newsStyle.spinner}></div>
        <p>Загрузка новости...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={newsStyle.errorContainer}>
        <p>{error}</p>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className={newsStyle.errorContainer}>
        <p>Новость не найдена</p>
      </div>
    );
  }

  return (
    <ScrollToTop>
      <div className={newsStyle.container}>
        <Title text={newsItem.title} />
        <div className={newsStyle.newsDetailContainer}>
          {newsItem.coverImageUrl && (
            <div className={newsStyle.newsDetailImageContainer}>
              <img
                src={newsItem.coverImageUrl}
                alt={newsItem.title}
                className={newsStyle.newsDetailImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          )}
          <div className={newsStyle.newsDetailContent}>
            <time dateTime={newsItem.createdAt} className={newsStyle.newsDate}>
              {new Date(newsItem.createdAt).toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <div
              className={newsStyle.newsDescription}
              dangerouslySetInnerHTML={{ __html: newsItem.content }}
            />
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
}
