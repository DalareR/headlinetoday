import { CanceledError } from "axios";
import { apiClient } from "../services/apiClient";
import { useEffect, useState } from "react";

interface Source {
  id: string | null;
  name: string | null;
}

export interface Article {
  title: string;
  author: string;
  description: string;
  publishedAt: string;
  source: Source;
  urlToImage: string;
}

function useGetArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article>({
    title: "",
    author: "",
    description: "",
    publishedAt: "",
    source: { id: "", name: "" },
    urlToImage: "",
  });

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("", {
        signal: controller.signal,
      })
      .then((res) => {
        setArticles(res.data.articles);
        setSelectedArticle(res.data.articles[0]);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { articles, error, selectedArticle, setSelectedArticle };
}

export default useGetArticles;
