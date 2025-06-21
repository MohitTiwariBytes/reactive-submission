
import React, { useRef } from "react";
import "./Home.css";
import Card from "../../Components/Cards/Card";
import DogImage from "../../Components/DogImage";
import LinkText from "../../Components/LinkText/LinkText";
import Button from "../../Components/Buttons/Button";

export default function Home() {
    const dogRef = useRef();

    const handleRefetch = () => {
        dogRef.current?.refetch();
    };

    return (
        <div className="main-home-page">
            <div className="homepage">
                <div className="info">
                    <h1>Hello and welcome to Random Dogs.net</h1>
                    <span>
                        Here you will find one image of a random dog at a time. If you want to see a lot of dogs, head over to the{" "}
                        <LinkText to={"/dogs/multi-dogs"} text={"MEGA DOG SUMMIT"}></LinkText>
                    </span>
                    <Button text={"Get New dog Image"} onClick={handleRefetch}></Button>
                </div>
                <Card>
                    <DogImage ref={dogRef} />
                </Card>
            </div>
        </div>
    );
}
