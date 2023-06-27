import {useEffect, useLayoutEffect, useRef, useState} from 'react'

export default function Upload({ ...uploadStyle }) {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const [ avatar, setAvatar ] = useState();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dn1pbep3e',
            uploadPreset: 'bhdixbmd'
        }, function (error, result) {
            if (!error && result && result.event === "success") {
                console.log("Done! Here is the image info: ", result.info)
                setAvatar(result.info.url)
            }
        })

    }, [])

    console.log(uploadStyle)
    useEffect(() => {
        return () => {
            uploadStyle.children = {
                ...uploadStyle.children,
                backgroundImage: 'url("'+avatar+'")'
            }
        }
    }, [avatar])

    return (
        <button
            style={uploadStyle.children}
            onClick={() => {widgetRef.current.open()}}
        >
        </button>
    )
}
