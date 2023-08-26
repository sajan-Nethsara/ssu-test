import { useEffect } from "react";
import { Cloudinary } from "cloudinary-core";
import axios from "axios";
import { CloudinaryTransformable } from "@cloudinary/url-gen/assets/CloudinaryTransformable";
import { mode } from "@cloudinary/url-gen/actions/rotate";

const SingleArticle = () => {
  useEffect(() => {
    const cloudName = import.meta.env.VITE_CLD_NAME;
    const apiKey = import.meta.env.VITE_CLD_API_KEY;
    const apiSecret = import.meta.env.VITE_CLD_API_SECRET;

    const url = `https://api.cloudinary.com/v1_1/dkgklh8uk/resources/by_asset_folder?asset_folder=ssu-anual-cricket`;

    axios
      .get(url,{
        headers: {
          Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
        },
      })
      .then((response) => {
        const imageUrls = response.data.resources.map(
          (resource) => resource.url
        );
        console.log("Image URLs:", imageUrls);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  const cld = new Cloudinary

  return <div>Hi</div>;
};

export default SingleArticle;

//https://api.cloudinary.com/v1_1/${}/resources/by_asset_folder?asset_folder=ssu-anual-cricket
//import.meta.env.VITE_CLD_API_KEY + ':' + import.meta.env.VITE_CLD_API_SECRET import.meta.env.VITE_CLD_NAME
