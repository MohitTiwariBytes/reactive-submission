import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const DogImage = forwardRef((props, ref) => {
    const [imageSrc, setImageSrc] = useState("");

    const fetchImage = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => setImageSrc(data.message))
            .catch((error) => console.error("Error fetching dog image:", error));
    };

    useEffect(() => {
        fetchImage();
    }, []);

    useImperativeHandle(ref, () => ({
        refetch: fetchImage,
    }));

    return <img src={imageSrc} alt="Random Dog" />;
});

export default DogImage;
