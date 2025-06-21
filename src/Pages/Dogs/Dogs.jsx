import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Card from "../../Components/Cards/Card";

gsap.registerPlugin(SplitText);

export default function Dogs() {
    const [dogImages, setDogImages] = useState([]);
    const cardsRef = useRef([]);

    useEffect(() => {
        const fetchDogs = async () => {
            const res = await fetch("https://dog.ceo/api/breeds/image/random/4");
            const data = await res.json();
            setDogImages(data.message);
        };
        fetchDogs();
    }, []);

    useEffect(() => {
        const split1 = new SplitText(".dogs-page h1", {
            type: "words",
            mask: "words",
            wordsClass: "word",
        });

        gsap.fromTo(
            ".word",
            {
                y: "100%",
                color: "brown",
            },
            {
                y: "0",
                color: "white",
                duration: 1,
                ease: "elastic.inOut(0.6)",
                stagger: 0.03,
            }
        );
    }, []);

    useEffect(() => {
        if (cardsRef.current.length === 0) return;

        gsap.fromTo(
            cardsRef.current,
            {
                opacity: 0,
                scale: 0.8,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2,
                delay: 0.3,
            }
        );
    }, [dogImages]);

    return (
        <div className="main-dogs-page">
            <div className="dogs-page">
                <div className="text">
                    <h1>I LOVE DOGS YAY :3</h1>
                </div>
                <div className="main-dogs-grid-hello">
                    {dogImages.map((img, idx) => (
                        <Card key={idx}>
                            <img
                                src={img}
                                alt="dog"
                                className="dog-img"
                                ref={(el) => (cardsRef.current[idx] = el)}
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
