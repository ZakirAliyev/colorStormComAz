import React from "react";
import { useFormik } from "formik";

function Zakir() {
    const formik = useFormik({
        initialValues: {
            file: null,
        },
        onSubmit: async (values) => {
            if (!values.file) {
                console.log("No file selected.");
                return;
            }

            const formData = new FormData();
            formData.append("file", values.file);

            try {
                const response = await post("https://your-api-endpoint.com/upload", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                console.log("File uploaded successfully:", response.data);
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                type="file"
                onChange={(event) => {
                    formik.setFieldValue("file", event.currentTarget.files[0]);
                }}
            />
            <button type="submit">Upload</button>
        </form>
    );
}

export default Zakir;
