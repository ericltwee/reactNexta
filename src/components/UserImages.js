import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "react-graceful-image";
import Loader from "./Loader";

const UserImages = ({ userId }) => {
  const [images, setImages] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`https://insta.nextacademy.com/api/v2/images?userId=${userId}`)
      .then(result => {
        setImages(result.data);
        setIsFetching(false);
      });
  }, [userId]);

  if (isFetching) {
    return <Loader size="150px" />;
  }

  return (
    <>
      {images.map(image => {
        return (
          <Image
            className="Userpics"
            key={image.id}
            style={{
              display: "inline-block",
              margin: "0 0 1em"
            }}
            src={image.url}
            alt="pic"
          />
        );
      })}
    </>
  );
};

export default UserImages;
