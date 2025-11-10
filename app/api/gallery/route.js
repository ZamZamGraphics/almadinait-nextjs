import { getBlurData } from "@/lib/getBLurData";
import { NextResponse } from "next/server";
import { imageSize } from 'image-size'
import crypto from 'crypto';
import path from 'path';
import fs from 'fs';

export function generateUUID() {
    return crypto.randomUUID();
}

export async function GET() {
    const publicDirPath = path.join(process.cwd(), 'public');
    const imagesDirPath = path.join(publicDirPath, 'gallery'); // e.g., 'public/gallery'

    try {
        const filenames = await fs.promises.readdir(imagesDirPath);

        const images = await Promise.all(
            filenames.map(async (filename) => {
                const imagePath = path.join(imagesDirPath, filename);
                const fileBuffer = fs.readFileSync(imagePath);
                const dimensions = imageSize(fileBuffer);
                const blurDataURL = await getBlurData(imagePath);

                return {
                    id: generateUUID(),
                    imageUrl: `/gallery/${filename}`, // Public URL for the image
                    blurDataURL,
                    width: dimensions?.width,
                    height: dimensions?.height,
                };
            })
        );

        return NextResponse.json(images, { status: 200 });
    } catch (error) {
        console.error('Failed to read image directory:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
