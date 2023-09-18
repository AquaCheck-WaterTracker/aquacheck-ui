import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(e => console.log(`Error: ${e}`))
  }, [url]);

  return { data };
};

export default useFetch;