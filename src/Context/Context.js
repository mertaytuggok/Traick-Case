import { createContext, useContext, useState } from "react";

export const cloudContext = createContext();

const Provider = ({ children }) => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState();
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Traick");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dsfbibgxq/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };
  const data = {
    image,
    setImage,
    loading,
    setLoading,
    uploadImage,
  };
  return <cloudContext.Provider value={data}>{children}</cloudContext.Provider>;
};

export default Provider;
