import React, { useContext } from "react";
import { Icon } from '@iconify/react';
import { MovieContext } from "../../../Context";

const AddToFavouritesIcon = ({ movie }) => {
  const {
    setFavourites,
    favourites
  } = useContext(MovieContext);
  return (
    <div className="tooltip" data-tip="favourite movie">
    {
    favourites.includes(movie) ? (
<button className="btn btn-error" onClick={() => setFavourites(movie)}><Icon icon="heroicons-solid:heart" /></button>
) : <button className="btn" onClick={() => setFavourites(movie)}><Icon icon="heroicons-solid:heart" /></button>
}
</div>
  );
};

export default AddToFavouritesIcon;