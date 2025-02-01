"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const PEXELS_API_KEY = "utPefUeG4YHExQqmFfamk8iIo0w5mE5EmP2ACheQkNcK3YmqQbdKqGzB"
const CHANGE_INTERVAL = 8000 // Change image every 8 seconds

// Fallback images in case the API fails
const FALLBACK_IMAGES = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

export function ChangingBackground() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.pexels.com/v1/search?query=technology+coding&per_page=5", {
          headers: {
            Authorization: PEXELS_API_KEY,
          },
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        if (data.photos && data.photos.length > 0) {
          setImages(data.photos.map(photo => photo.src.large2x))
        } else {
          console.warn("No images returned from Pexels API, using fallback images")
          setImages(FALLBACK_IMAGES)
        }
      } catch (error) {
        console.error("Error fetching images:", error)
        setImages(FALLBACK_IMAGES)
      }
    }

    fetchImages()
  }, [])

  useEffect(() => {
    if (images.length < 2) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
        setNextImageIndex((prev) => (prev + 1) % images.length)
        setIsTransitioning(false)
      }, 1000)
    }, CHANGE_INTERVAL)

    return () => clearInterval(interval)
  }, [images])

  if (images.length < 2) return null

  return (
    <div className="fixed inset-0 z-0">
      {/* Current Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Next Image (preloaded) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image src={images[nextImageIndex] || "/placeholder.svg"} alt="Background" fill className="object-cover" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30" />
    </div>
  )
}

