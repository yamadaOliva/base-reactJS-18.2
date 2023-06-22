import { useEffect, useRef, useState } from "react";

export default function Upload(props) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [currentImage, setCurrentImage] = useState(props.backgroundImage);
  useEffect(() => {
    console.log(props.backgroundImage);
    cloudinaryRef.current = window.cloudinary;
    console.log("cloud:", cloudinaryRef.current);
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "subarasuy",
        uploadPreset: "o4umo4il",
      },
      function (error, result) {
        console.log(result.info.secure_url);
        console.log(result?.info?.secure_url?.startsWith("http"))
        if (result.info?.secure_url?.startsWith("http")) {
          setCurrentImage(result.info.secure_url);
        }
      }
    );
    console.log(cloudinaryRef.current);
  }, []);
  useEffect(() => {
    props.setAvatarUrl(currentImage);
  }, [currentImage]);
  return (
    <button
      onClick={() => {
        widgetRef.current.open();
      }}
    >
      <img src={props.backgroundImage}></img>
    </button>
  );
}
