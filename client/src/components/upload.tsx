import React, { useState } from "react";
import axios from "axios";

export const Upload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const onUpload = async () => {
        if (file) {
            setUploading(true);
            setUploadError(null);

            const formData = new FormData();
            formData.append("image", file);

            try {
                await axios.post("http://localhost:3001/api/image/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
            } catch (error: any) {
                setUploadError(error.message);
            } finally {
                setUploading(false);
            }
        }
    };

    return (
        <div>
            <h1>Upload</h1>
            <input type="file" onChange={onFileChange} />
            <button onClick={onUpload} disabled={uploading}>
                {uploading ? "Uploading..." : "Upload"}
            </button>
            {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
        </div>
    );
};
