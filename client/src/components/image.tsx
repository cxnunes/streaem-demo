import React, { useEffect } from "react";

export const Image = () => {
    const [image, setImage] = React.useState<string>("");

    const fetchImage = async () => {
        const response = await fetch("http://localhost:3001/api/images/1712994100627");
        setImage(await response.text());
    };

    useEffect(() => {
        fetchImage();
    }, []);

    if (!image) return null;

    return (
        <div>
            <h1>Image</h1>
            <div dangerouslySetInnerHTML={{ __html: image }} />
        </div>
    );
};
