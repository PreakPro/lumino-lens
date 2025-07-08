export default function MicrositePage({
    params,
}: {
    params: { productId: string };
}) {
    const id = params.productId;
    const pdfUrl = `/api/certificate/${id}`;

    return (
        <iframe
            src={pdfUrl}
            style={{ border: "none" }}
            className="h-screen w-full"
            title={`Certificate for ${id}`}
        />
    );
}
