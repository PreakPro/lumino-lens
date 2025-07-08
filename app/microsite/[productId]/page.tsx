"use client"

import { useParams } from "next/navigation";

export default function MicrositePage() {
    const { productId } = useParams() as { productId: string };

    if (!productId) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-3xl md:text-5xl font-semibold">Loading...</h1>
            </div>
        );
    }

    const pdfUrl = `/api/certificate/${productId}`;

    return (
        <iframe
            src={pdfUrl}
            style={{ border: "none" }}
            className="h-screen w-full"
            title={`Certificate for ${productId}`}
        />
    );
}
