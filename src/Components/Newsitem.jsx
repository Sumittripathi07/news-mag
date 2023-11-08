import React from "react";

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 ml-2 d-inline-block my-3 mx-2 py-2 px-2"
      style={{ maxWidth: "329px" }}
    >
      <img
        src={src}
        style={{ height: "150px", width: "300px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : ""}
        </p>
        <a href={url} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
