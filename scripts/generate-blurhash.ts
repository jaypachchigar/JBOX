import { createCanvas, loadImage } from '@napi-rs/canvas';
import { encode } from 'blurhash';
import * as fs from 'fs';
import * as path from 'path';

async function generateBlurhash(imagePath: string): Promise<string> {
    const absolutePath = path.resolve(imagePath);
    const image = await loadImage(absolutePath);
    
    // Create a canvas with the same dimensions
    const width = 32; // Small size for blurhash
    const height = Math.round((image.height / image.width) * width);
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // Draw the image
    ctx.drawImage(image, 0, 0, width, height);
    
    // Get image data
    const imageData = ctx.getImageData(0, 0, width, height);
    
    // Generate blurhash (4x4 components is standard)
    return encode(
        new Uint8ClampedArray(imageData.data),
        width,
        height,
        4,
        4
    );
}

async function main() {
    try {
        console.log("Generating blurhash for Desktop GIF...");
        const desktopHash = await generateBlurhash('./public/assets/Final_video.gif');
        console.log(`Desktop Blurhash: ${desktopHash}\n`);

        console.log("Generating blurhash for Mobile GIF...");
        const mobileHash = await generateBlurhash('./public/assets/Mobile-video.gif');
        console.log(`Mobile Blurhash: ${mobileHash}\n`);

    } catch (err) {
        console.error("Error generating blurhash:", err);
    }
}

main();
