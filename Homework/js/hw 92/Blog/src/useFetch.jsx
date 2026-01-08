import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);  // default empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  // ✅ Just return values, no JSX
  return { data, loading, error };
}

export default useFetch;
