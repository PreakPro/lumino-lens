type Props = {
    params: { productId: string }
}

export default function MicrositePage({ params }: Props) {
    const id = params.productId
    const pdfUrl = `/api/certificate/${id}`

    return (
        <iframe
            src={pdfUrl}
            style={{ border: "none" }}
            className="h-screen w-full"
            title={`Certificate for ${id}`}
        />
    )
}
