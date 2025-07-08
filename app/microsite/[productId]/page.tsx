type Props = {
 	 	params: { productId: string }
}

export default function MicrositePage({ params }: Props) {
  	const id = params.productId
  	const pdfUrl = `/api/certificate/${id}`

	if(!id) return <h1 className="md:text-5xl text-3xl justify-center items-center flex">Loading...</h1>

  	return (
  	  	<iframe
  	    	src={pdfUrl}
  	    	style={{ border: "none" }}
			className="h-screen w-full"
  	    	title={`Certificate for ${id}`}
  	  	/>
  	)
}
