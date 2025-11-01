import fs from "fs/promises";
import { getPlaiceholder } from "plaiceholder";

export async function getBlurData(imagePathOrUrl) {
  try {
    let buffer;

    const isRemote =
      imagePathOrUrl.startsWith("http://") ||
      imagePathOrUrl.startsWith("https://");

    if (isRemote) {
      const res = await fetch(imagePathOrUrl, { cache: "no-store" });
      if (!res.ok) throw new Error(`Failed to fetch image: ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
    } else {
      buffer = await fs.readFile(imagePathOrUrl);
    }

    const { base64 } = await getPlaiceholder(buffer);
    return base64;
  } catch (err) {
    return null;
  }
}
