import { useEffect, useRef } from 'react'

export default function Upload(props) {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        console.log(props.backgroundImage)
        cloudinaryRef.current = window.cloudinary;
        console.log("cloud:",cloudinaryRef.current)
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'subarasuy',
            uploadPreset: 'o4umo4il'
        }, function (error, result) {
            console.log(result.info)
            //props.setAvatarUrl(result.info.url)
        })
        console.log(cloudinaryRef.current)
    }, [])

    

    return (
        <button
            onClick={() => {widgetRef.current.open()}}
        >
            <img src={props.backgroundImage}></img>
        </button>
    )
}
