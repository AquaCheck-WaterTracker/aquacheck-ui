import { useState, useEffect } from "react";

const UseGetRequest = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if(!response.ok) {
          throw new Error("GET response was not OK");
        }

        const json = await response.json();
        setData(json);
        
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
   

    fetchData();
 }, [url]);

  return { data };
  
};

export default UseGetRequest;