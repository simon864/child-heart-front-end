import axios from "axios";
import { NewsItem, NewsResponse, SortOrder } from "../types/news";
import { API_BASE_URL } from "./config";

interface GetNewsParams {
  order?: SortOrder;
  sortBy?: string;
  status?: "draft" | "published";
  limit?: number;
  page?: number;
}

export const NewsApi = {
  /**
   * Получение новостей с пагинацией и фильтрацией
   */
  async getNews(params: GetNewsParams = {}): Promise<NewsResponse> {
    const defaultParams: GetNewsParams = {
      order: "desc",
      sortBy: "createdAt",
      status: "published",
      limit: 10,
      page: 1,
      ...params,
    };

    try {
      const response = await axios.get<NewsResponse>(`${API_BASE_URL}/news`, {
        params: {
          order: defaultParams.order,
          sortBy: defaultParams.sortBy,
          status: defaultParams.status,
          limit: defaultParams.limit,
          page: defaultParams.page,
        },
        paramsSerializer: {
          indexes: null, // Для правильной сериализации массивов
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching news:", error);
      throw error;
    }
  },

  /**
   * Получение всех опубликованных новостей
   */
  async getAllPublishedNews(): Promise<NewsItem[]> {
    try {
      const allNews: NewsItem[] = [];
      let currentPage = 1;
      let totalItems = 0;

      do {
        const response = await this.getNews({
          status: "published",
          page: currentPage,
          limit: 100, // Максимальное количество на странице
        });

        allNews.push(...response.data);
        totalItems = response.total;
        currentPage++;
      } while (allNews.length < totalItems);

      return allNews;
    } catch (error) {
      console.error("Error fetching all published news:", error);
      return [];
    }
  },
  async getNewsById(id: string): Promise<NewsItem> {
    try {
      console.log({ id });
      const response = await axios.get<NewsItem>(`${API_BASE_URL}/news/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      return response.data;
    } catch (error) {
      console.error(`Error fetching news with id ${id}:`, error);
      throw new Error(
        "Не удалось загрузить новость. Пожалуйста, попробуйте позже."
      );
    }
  },
};
