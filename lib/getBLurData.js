import { getPlaiceholder } from "plaiceholder";
import fs from "fs/promises";
import path from "path";

export async function getBlurData(imageUrl) {
    // const buffer = await fs.readFile(path.join(process.cwd(), imagePath));
    // const { base64 } = await getPlaiceholder(buffer);
    const res = await fetch(imageUrl);
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
}
