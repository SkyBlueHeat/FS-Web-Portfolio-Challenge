import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("https://reqres.in/api/workintech", data);
        setData(response.data);
        if (!toastShown) { 
          setToastShown(true);
          toast.success("Bilgiler başarıyla API'a iletildi 👍", {
            toastId: 'success1',
            position: "top-right",
            theme: "dark",
            autoClose: 2000,
          });
        }
      } catch (error) {
        toast.error("Bir hata oluştu:", error, {
          toastId: 'success1',
          position: "top-right",
          autoClose: 2000,
        });
      }
    };

    fetchData();
  }, [data]);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};