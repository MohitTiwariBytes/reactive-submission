import React, { useEffect, useState } from "react";
import Card from "../../Components/Cards/Card";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Button from "../../Components/Buttons/Button";

gsap.registerPlugin(ScrollTrigger, SplitText)

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
        window.scrollTo(0, 0)
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random/50");
            const data = await response.json();
            setDogImages(data.message);
        } catch (error) {
            console.error("Failed to fetch dog images", error);
        }
    };

    useEffect(() => {
        fetchDogImages();
    }, []);

    useEffect(() => {

        const split1 = new SplitText(".dogs-page h1", {
            type: "words",
            mask: 'words',
            wordsClass: "word"
        })

        gsap.fromTo(".word", {
            y: "100%",
            color: "brown"
        }, {
            y: "0",
            color: "white",
            ease: "elastic.inOut(0.6)",
            stagger: 0.03,
            duration: 1
        })

        if (dogImages.length > 0) {
            gsap.utils.toArray(".card").forEach((card, i) => {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        }
    }, [dogImages]);






    return (
        <div className="mega-dogs-page">
            <div className="dogs-page">
                <h1>MULTI MEGA DOGS SUMMIT LESS GOOOO!</h1>
                <div className="dog-grid">
                    {dogImages.map((img, idx) => (
                        <DogCard key={idx} imageUrl={img} />
                    ))}
                </div>
                <div className="buttonsNext">
                    <Button text={"I WANT TO SEEE MORE DOGS!!"} onClick={fetchDogImages}></Button>
                </div>
            </div>
        </div>
    );
}
