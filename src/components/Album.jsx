import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainPhoto from "./MainPhoto";
import Pagination from "./Pagination";
import PhotoIcons from "./PhotoIcons";
import { paginate } from "./paginate/paginate";

const Album = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    fetch("https://cataas.com/api/cats?tags=cute")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        setCurrentPhoto(data[0].id);
      });
  }, []);

  const handleMainPhoto = (photo) => {
    setCurrentPhoto(photo);
  };

  const handlePageChange = (item) => {
    setCurrentPage(item);
  };

  const photoCrop = paginate(photos, currentPage, pageSize);

  return (
    photos[0] && (
      <div className="container pt-3">
        <h3>
          <span className="badge bg-success">Cat Photobook</span>
        </h3>

        <MainPhoto photo={"https://cataas.com/cat/" + currentPhoto} />
        <PhotoIcons
          photos={photoCrop}
          currentPhoto={currentPhoto}
          onChangeMainPhoto={handleMainPhoto}
          pageSize={pageSize}
        />
        <Pagination
          itemsCount={photos.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          onCurrentPhoto={handleMainPhoto}
          photos={photos}
        />
      </div>
    )
  );
};

export default Album;
