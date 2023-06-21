import { useEffect, useRef } from 'react'

export default function Upload({ ...uploadStyle }) {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dn1pbep3e',
            uploadPreset: 'bhdixbmd'
        }, function (error, result) {
            console.log(result)
        })

    }, [])

    console.log(uploadStyle.children)

    return (
        <button
            style={uploadStyle.children}
            onClick={() => {widgetRef.current.open()}}
        >
        </button>
    )
}
