import { useState, useRef } from 'react'

export const NavigationMenu = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  return (
    <div
      className="md:hover:underline duration-300"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      ref={menuRef}
    >
      Аренда
      {open && (
        <div className="absolute top-12 left-0 bg-white shadow-lg p-4 w-screen border rounded-lg">
          <p>Контент меню</p>
        </div>
      )}
    </div>
  )
}
