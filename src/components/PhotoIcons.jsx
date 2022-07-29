import React from "react";

const PhotoIcons = ({ photos, currentPhoto, onChangeMainPhoto, pageSize }) => {
  return (
    <div className="images-pagination-container">
      {photos.map((photo) => {
        return (
          <div key={photo.id} className="img-icon">
            <img
              src={"https://cataas.com/cat/" + photo.id}
              alt="cat"
              className={
                "img-pagination" +
                (photo.id === currentPhoto
                  ? " shadow-lg mb-5 bg-body rounded"
                  : "")
              }
              role="button"
              onClick={() => onChangeMainPhoto(photo.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PhotoIcons;
