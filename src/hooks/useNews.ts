import { useEffect, useState } from "react";
import { NewsItem } from "../types/news";
import { NewsApi } from "../api/news";

interface UseNewsOptions {
  initialLimit?: number;
}

export const useNews = (options: UseNewsOptions = {}) => {
  const { initialLimit = 10 } = options;
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(initialLimit);

  const loadNews = async (params: { limit?: number; page?: number } = {}) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await NewsApi.getNews({
        status: "published",
        order: "desc",
        sortBy: "createdAt",
        limit: params.limit || limit,
        page: params.page || 1,
      });
      console.log("Полученные новости:", {
        data: response.data,
        total: response.total,
        firstItemId: response.data[0]?.id, // Проверяем наличие ID
      });

      console.log("Полученные новости в хуке:", {
        data: response.data,
        totalCount: response.total,
        newsCount: response.data.length,
        firstNews: response.data[0]
          ? {
              title: response.data[0].title,
              content: response.data[0].content,
              status: response.data[0].status,
            }
          : null,
      });
      setNews(response.data);
      setTotal(response.total);
    } catch (err) {
      setError("Не удалось загрузить новости");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    const newLimit = limit + 10;
    setLimit(newLimit);
    await loadNews({ limit: newLimit });
  };

  const refreshNews = async () => {
    await loadNews();
  };

  useEffect(() => {
    loadNews();

    const interval = setInterval(refreshNews, 300000);
    return () => clearInterval(interval);
  }, []);

  return {
    news,
    isLoading,
    error,
    total,
    limit,
    loadMore,
    refreshNews,
  };
};
