import React, { useEffect, useState } from "react";
import Card from "../../Components/Cards/Card";

function DogCard({ imageUrl }) {
    return (
        <Card>
            <img src={imageUrl} alt="Dog" className="dog-img" />
        </Card>
    );
}

export default function MegaDogs() {
    const [dogImages, setDogImages] = useState([]);

    const fetchDogImages = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random/20");
            const data = await response.json();
            setDogImages(data.message);
        } catch (error) {
            console.error("Failed to fetch dog images", error);
        }
    };

    useEffect(() => {
        fetchDogImages();
    }, []);

    return (
        <div className="mega-dogs-page">
            <div className="dogs-page">
                <h1>MULTI MEGA DOGS SUMMIT LESS GOOOO!</h1>
                <div className="dog-grid">
                    {dogImages.map((img, idx) => (
                        <DogCard key={idx} imageUrl={img} />
                    ))}
                </div>
            </div>
        </div>
    );
}
