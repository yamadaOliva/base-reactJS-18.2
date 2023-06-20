import { useState, useRef, useEffect } from "react";

export default function UploadWidget() {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/global/all.js";
    script.async = true;
    document.body.appendChild(script);
  
    cloudinaryRef.current = window.cloudinary;
    console.log(cloudinaryRef.current);
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "subarasuy",
        uploadPreset: "o4umo4il",
      },
      function (error, result) {
        console.log("res",result);
      }
    );
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <button onClick={() => widgetRef.current.open()}>UploadWidget</button>
    </>
  );
}
