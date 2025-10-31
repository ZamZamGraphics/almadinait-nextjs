import { getPlaiceholder } from "plaiceholder";

export async function getBlurData(imageUrl) {
    try {
        const res = await fetch(imageUrl, { cache: "no-store" });
        const buffer = Buffer.from(await res.arrayBuffer());

        const { base64 } = await getPlaiceholder(buffer);
        return base64;
    } catch (err) {
        return err;
    }
}
