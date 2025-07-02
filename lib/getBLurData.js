import { getPlaiceholder } from "plaiceholder";

export async function getBlurData(imageUrl) {
    try {
        const buffer = await fetch(imageUrl).then(async (res) =>
            Buffer.from(await res.arrayBuffer())
        );

        const { base64 } = await getPlaiceholder(buffer);
        return base64;
    } catch (err) {
        return err;
    }
}
