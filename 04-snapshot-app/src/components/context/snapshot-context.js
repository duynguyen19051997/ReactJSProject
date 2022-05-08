import React, { useState } from "react";
import { apiKey } from "../config/config";

export const SnapshotContext = React.createContext({
  history: [],
  images: [],
  searchImages: (search) => {},
  zoomImage: (id) => {},
  closeImage: () => {},
});

export const SnapshotContextProvider = (props) => {
  const [history, setHistory] = useState(["cars", "money", "love", "house"]);
  const [images, setImages] = useState([]);

  const searchHandler = (search) => {
    if (search.trim() !== "") {
      if (!history.includes(search)) {
        setHistory((currentHistory) => {
          currentHistory.pop();
          currentHistory.unshift(search);
          return currentHistory;
        });
      }
      fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
        .then((response) => response.json())
        .then((data) => {
          const dataResult = [];
          data.photos.photo.forEach((element) => {
            dataResult.push({ ...element, isZoom: false });
          });
          setImages(dataResult);
        })
        .catch((err) => {
          throw new Error(err);
        });
    } else {
      setImages([]);
    }
  };

  const zoomImageHandler = (id) => {
    setImages((currentImages) => {
      const updatedImages = [];
      currentImages.forEach((i) => {
        if (i.id === id) {
          i.isZoom = true;
        } else {
          i.isZoom = false;
        }
        updatedImages.push(i);
      });
      return updatedImages;
    });
  };

  const closeImageHandler = () => {
    setImages((currentImages) => {
      const updatedImages = [];
      currentImages.forEach((i) => {
        i.isZoom = false;
        updatedImages.push(i);
      });
      return updatedImages;
    });
  };

  return (
    <SnapshotContext.Provider
      value={{
        history: history,
        images: images,
        searchImages: searchHandler,
        zoomImage: zoomImageHandler,
        closeImage: closeImageHandler,
      }}
    >
      {props.children}
    </SnapshotContext.Provider>
  );
};
