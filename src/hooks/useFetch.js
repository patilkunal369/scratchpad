import { useCallback, useState } from "react";
import axiosInstance from "./axios";

const useFetch = (url, method) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  return { data, isLoading, isError, error, fetchData };
};

export default useFetch;
