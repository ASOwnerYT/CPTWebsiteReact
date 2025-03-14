import bgimage from "./assets/header-bg.jpg";

export default function Carousel() {
    const images = [
        bgimage,
        bgimage,
        bgimage,
        bgimage,
        bgimage
    ]

    return (
        <div class="slider">
            <div class="slides">
                {images.map((image, index) => (
                    <div class="slide" key={index}>
                        <img src={image} alt="slide" />
                    </div>
                ))}
            </div>
        </div>
    )
}