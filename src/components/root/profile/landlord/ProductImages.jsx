'use client'
import { useRef } from 'react'

export const ProductImages = ({ images, setImages }) => {
  const inputRef = useRef()

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    const filePreviews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }))

    setImages((prev) => ({
      ...prev,
      images: [...prev.images, ...filePreviews],
    }))
  }

  const handleRemove = (url) => {
    setImages((prev) => {
      const filteredImages = prev.images.filter((image) => image.url !== url)
      return { ...prev, images: filteredImages }
    })
  }

  return (
    <div className="space-y-2">
      <label className="text-gray-600 text-xs ml-1">Выбрать фотографии</label>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="block w-full text-sm file:bg-blue-500 file:text-white file:rounded-md file:px-4 file:py-1 file:border-0 file:cursor-pointer"
      />

      <div className="flex flex-wrap gap-2 mt-2">
        {Array.isArray(images) &&
          images.map((image, index) => (
            <div
              key={index}
              className="relative w-[150px] h-[150px] border border-gray-300 rounded overflow-hidden"
            >
              <img
                src={image.url}
                alt={`img-${index}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => handleRemove(image.url)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}
