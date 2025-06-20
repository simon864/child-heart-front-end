import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Title from "../../components/Title/title";
import { useNews } from "../../hooks/useNews";
import newsStyle from "./newPage.module.css";
import { Link } from "react-router-dom";

export default function NewsPage() {
  return (
    <ScrollToTop>
      <Title text="Новости" />
      <NewsContent />
    </ScrollToTop>
  );
}

export const NewsContent = () => {
  const { news, isLoading, error, total, loadMore, refreshNews } = useNews({
    initialLimit: 10,
  });

  if (isLoading && news.length === 0) {
    return (
      <div className={newsStyle.loadingContainer}>
        <div className={newsStyle.spinner}></div>
        <p>Загрузка новостей...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={newsStyle.errorContainer}>
        <p>{error}</p>
        <button onClick={refreshNews} className={newsStyle.retryButton}>
          Попробовать снова
        </button>
      </div>
    );
  }

  return (
    <div className={newsStyle.container}>
      <div className={newsStyle.newsGrid}>
        {news.map((item) => (
          <Link
            to={`/news-page/${item._id}`}
            key={item._id}
            className={newsStyle.newsLink}
          >
            <article key={item._id} className={newsStyle.newsCard}>
              {item.coverImageUrl && (
                <img
                  src={item.coverImageUrl}
                  alt={item.title}
                  className={newsStyle.newsImage}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}

              <p className={newsStyle.newsDate}>
                <time dateTime={item.createdAt} className={newsStyle.newsDate}>
                  {new Date(item.createdAt).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </p>

              <p className={newsStyle.newsTitle}>{item.title}</p>
            </article>
          </Link>
        ))}
      </div>

      {news.length < total && (
        <button
          onClick={loadMore}
          className={newsStyle.loadMoreButton}
          disabled={isLoading}
        >
          {isLoading ? "Загрузка..." : "Загрузить еще"}
        </button>
      )}
    </div>
  );
};
