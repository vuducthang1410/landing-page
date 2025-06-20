import React from "react";
import { ChevronRightIcon } from "lucide-react";

interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
    description2?: string;
    positionLeft: number;
    extraImages?: { src: string; top: number; left: number; width: number; height: number }[];
    scaled: (value: number) => number;
    onClick?: () => void;
}

const LuckyDraw: React.FC<ServiceCardProps> = ({
    image,
    title,
    description,
    description2,
    extraImages,
    scaled,
    onClick
}) => {
    return (
        <div
            style={{
                position: "relative",
                background: "white",
                width: scaled(512),
                height: scaled(693),
                borderRadius: scaled(20),
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
        >
            <img
                style={{
                    position: "absolute",
                    width: scaled(466),
                    height: scaled(438),
                    top: scaled(22),
                    left: scaled(23),
                    objectFit: "cover",
                    borderRadius: scaled(20),
                }}
                alt="Rectangle"
                src={image}
            />

            <div
                style={{
                    position: "absolute",
                    width: scaled(514),
                    top: scaled(474),
                    left: 0,
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 700,
                    color: "#2239bb",
                    fontSize: scaled(32),
                    textAlign: "center",
                    letterSpacing: scaled(-0.96),
                    lineHeight: "normal",
                    height: scaled(77),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {title}
            </div>

            <div
                style={{
                    position: "absolute",
                    width: scaled(466),
                    top: scaled(556),
                    left: scaled(23),
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 400,
                    color: "#333333",
                    fontSize: scaled(16),
                    textAlign: "left",
                    letterSpacing: 0,
                    lineHeight: "normal",
                }}
            >
                {description}
                <br />
                {description2}
            </div>

            <button
                style={{
                    position: "absolute",
                    width: scaled(83),
                    height: scaled(20),
                    top: scaled(646),
                    left: scaled(23),
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: scaled(8),
                    backgroundColor: "white",
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                    color: "#333333",
                    fontSize: scaled(16),
                }}
                onClick={onClick}
            >
                <span
                    style={{
                        fontFamily: "Montserrat, Helvetica",
                        fontWeight: 400,
                        fontSize: scaled(16),
                    }}
                >
                    Chi tiết
                </span>
                <ChevronRightIcon
                    style={{
                        height: scaled(16),
                        width: scaled(16),
                        background: "#2239bb",
                        borderRadius: "50%",
                        color: "white",
                    }}
                />
            </button>

            {extraImages?.map((img, idx) => (
                <img
                    key={idx}
                    style={{
                        position: "absolute",
                        width: scaled(img.width),
                        height: scaled(img.height),
                        top: scaled(img.top),
                        left: scaled(img.left),
                        objectFit: "cover",
                        borderRadius: scaled(20),
                    }}
                    alt={`Extra-${idx}`}
                    src={img.src}
                />
            ))}
        </div>
    );
};

export default LuckyDraw;
