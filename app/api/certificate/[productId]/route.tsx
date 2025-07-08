import { pdf } from "@react-pdf/renderer";
import CertificatePDF from "@/components/certificatePDF";
import { supabase } from "@/lib/initSupabase";
import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const pathParts = url.pathname.split("/");
    const productId = pathParts[pathParts.length - 1]; 

    const { data, error } = await supabase
        .from("product_registrations")
        .select("blue_light_block_rate, transmittence")
        .eq("product_id", productId)
        .maybeSingle();

    if (error || !data) {
        return new Response("Product not found", { status: 404 });
    }

    const blob = await pdf(
        <CertificatePDF
            productId={productId}
            blockRate={data.blue_light_block_rate}
            transmittence={data.transmittence}
        />
    ).toBlob();

    return new Response(blob, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": "inline",
        },
    });
}
