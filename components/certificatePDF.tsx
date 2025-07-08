import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    page: { padding: 30 },
    heading: { fontSize: 20, marginBottom: 20 },
    heading2: { fontSize: 15, marginBottom: 15 },
    text: { fontSize: 12, marginBottom: 10 },
    logo: { width: 120, marginBottom: 20 },
    italics: { fontStyle: "italic", fontSize: 10, marginBottom: 10, color: "gray" }
})

export default function CertificatePDF({ productId, blockRate, transmittence }: { productId: string, blockRate: number, transmittence: number }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.heading}>LuminoLens Product Certification</Text>

                <Text style={styles.text}>
                    This document certifies that the LuminoLens product identified by <Text style={{ fontWeight: 700 }}>{productId}</Text> has undergone comprehensive spectral testing using the UV-VIS-IR LambdaScan™ 4200 Spectrometer.
                </Text>

                <Text style={styles.text}>
                    The lenses were tested for blue light attenuation in the 400–470 nm wavelength range, which is commonly associated with digital eye strain and circadian rhythm disruption.
                </Text>

                <Text style={styles.text}>Results Summary:</Text>
                <Text style={styles.text}>- Blue Light Block Rate (400–450 nm): {blockRate}%</Text>
                <Text style={styles.text}>- Transmittance (450–500 nm): {transmittence}%</Text>

                <Text style={styles.text}>
                    Testing was conducted in accordance with ISO 12312-1:2013(E) and certified under batch reference LUM-BATCH-A1.
                </Text>

                <Text style={styles.text}>
                    All lenses meet the criteria for safe prolonged screen exposure, recommended for 8–12 hour daily use.
                </Text>

                <Text style={[styles.italics]}>
                    This certificate is digitally issued and verified by the LuminoLens Optical Science Lab.
                    Unauthorized duplication or distribution is prohibited.
                </Text>

                <Text style={[styles.text, { marginTop: 10, fontSize: 12 }]}>
                    — Dr. Mukesh Badamwala, Chief Optical Analyst, LuminoLens Labs
                </Text>
            </Page>
        </Document>
    )
}
