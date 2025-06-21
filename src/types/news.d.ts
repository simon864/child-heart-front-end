export interface NewsItem {
  _id: string;
  title: string;
  content: string;
  status: "draft" | "published";
  coverImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewsResponse {
  data: NewsItem[];
  total: number;
}

export type SortOrder = "asc" | "desc";
