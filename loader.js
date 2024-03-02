'use client'
 
export default function myImageLoader({ src, width, quality }) {
    if(src.startsWith('https://images.pexels.com'))return src
    if(src.startsWith('https://res.cloudinary.com'))return src
  return `https://dinirudev.com/${src}?w=${width}&q=${quality || 75}`
}
