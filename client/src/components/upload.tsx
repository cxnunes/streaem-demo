import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../services/constants";

export type UploadProps = {
    image: string;
    setImage: (fileName: string) => void;
};

export const Upload: FC<UploadProps> = ({ image, setImage }) => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    useEffect(() => {
        if (file) {
            onUpload();
        }
    }, [file]);

    const onUpload = async () => {
        if (file) {
            setUploading(true);
            setUploadError(null);

            const formData = new FormData();
            formData.append("image", file);

            try {
                const result = await axios.post(`${BACKEND_URL}/api/image/upload`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                setImage(result.data.filename);
            } catch (error: any) {
                setUploadError(error.message);
            } finally {
                setUploading(false);
            }
        }
    };

    return (
        <div className="columns mt-4 mb-4">
            <div className="column is-6">
                <div className="file has-name is-boxed">
                    <label className="file-label">
                        <input
                            className="file-input"
                            type="file"
                            name="image"
                            onChange={onFileChange}
                        />
                        <span className="file-cta">
                            <span className="file-label"> Choose a image.. </span>
                        </span>
                        <span className="file-name">{file?.name}</span>
                    </label>
                    {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
                </div>
            </div>
            <div className="column is-6">
                {image && (
                    <figure className="image is-128x128">
                        <img src={`${BACKEND_URL}/${image}`} />
                    </figure>
                )}
            </div>
        </div>
    );
};
