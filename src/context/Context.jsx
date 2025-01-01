import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const toastId = "unique-toast-id"; // Benzersiz bir ID tanımlandı

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", data)
      .then(() => {
        if (!toast.isActive(toastId)) { // Aynı ID'deki mesajın aktif olup olmadığını kontrol et
          toast.success("Bilgiler başarıyla API'a iletildi 👍", {
            toastId: toastId, // Benzersiz ID atanıyor
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((err) => {
        if (!toast.isActive(toastId)) {
          toast.error(`Bir hata oluştu: ${err.message}`, {
            toastId: toastId,
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  }, []); // Sadece ilk yüklemede çalıştırılır

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};
