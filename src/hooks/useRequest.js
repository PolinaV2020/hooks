import React, { useState, useEffect } from "react";

export const useRequest = (request) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    request()
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return [data, isLoading, isError];
};
