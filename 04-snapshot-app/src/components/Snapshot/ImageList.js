import { useContext } from "react";
import { SnapshotContext } from "../context/snapshot-context";
import { Card, Image } from "../UI/UI";

import classes from "./ImageList.module.css";

export const ImageList = (props) => {
  const images = props.images;
  const { zoomImage, closeImage } = useContext(SnapshotContext);

  let content = "";
  if (images && images.length > 0) {
    console.log(images);
    content = images.map((image) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return (
        <Image
          key={id}
          className={classes["image__detail"]}
          src={url}
          alt={title}
          isZoom={image.isZoom}
          onZoom={() => {
            zoomImage(id);
          }}
          onClose={closeImage}
        />
      );
    });
  }

  return <Card className={classes["image__area"]}>{content}</Card>;
};
