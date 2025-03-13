"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
    HeartIcon,
    ListPlusIcon,
    MessageCircleMoreIcon,
    XIcon,
} from "lucide-react";

const data = [
    { name: "Сравнение  объектов", icon: <ListPlusIcon /> },
    { name: "Сообщения", icon: <MessageCircleMoreIcon /> },
    { name: "Избранные", icon: <HeartIcon /> },
];

export const Header = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [open, setOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const menuRef = useRef(null);
    const chatRef = useRef(null);

    const handleMouseEnter = () => setOpen(true);

    const handleMouseLeave = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.relatedTarget)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (chatRef.current && !chatRef.current.contains(event.target)) {
                setIsChatOpen(false);
            }
        };

        if (isChatOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isChatOpen]);

    return (
        <>
            <header className="container mx-auto flex justify-between items-center relative py-3">
                <div className="w-32 h-auto">
                    <Link href="/">
                        <img
                            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 110 40'%3E%3Cpath fill='%230468FF' fill-rule='evenodd' d='M19.5 9.13c-1.547 0-2.8-1.264-2.8-2.824s1.253-2.825 2.8-2.825c1.545 0 2.799 1.265 2.799 2.825s-1.254 2.824-2.8 2.824zm0-8.97c-3.373 0-6.107 2.757-6.107 6.16a6.17 6.17 0 0 0 1.24 3.72l.406.567 4.46 5.427 4.867-5.995a6.17 6.17 0 0 0 1.239-3.72c0-3.402-2.734-6.16-6.106-6.16zm2.33 28.62V18.443h-4.523v4.855l-4.52-5.479L.2 33.075l4.187 3.516 8.4-10.18 8.4 10.18 4.186-3.516z' clip-rule='evenodd'/%3E%3Cpath fill='%23152242' fill-rule='evenodd' d='M49.57 18.429h-4.011v14.09H37.63V18.43h-4.01v17.833h14.77v3.578h3.634v-7.32H49.57zm9.27 12.006V18.429h-4.01v17.833h4.01l8.4-12.006v12.006h4.011V18.429h-4.01zm46.973-12.006v7.007h-8.188v-7.007h-4.011v17.833h4.011v-7.058h8.188v7.058h3.987V18.429zM85.74 28.732c0 1.4-.393 2.495-1.167 3.256-.784.77-1.922 1.16-3.382 1.16-1.827 0-2.833-.83-2.833-2.339 0-1.573 1.316-2.512 3.519-2.512h3.862v.435zm-3.348-10.644c-2.096 0-3.901.566-5.221 1.637-1.235 1-1.966 2.399-2.065 3.94h3.954c.18-.828 1.057-2.119 3.332-2.119 2.096 0 3.347 1.263 3.347 3.378v.088h-4.034c-2.388 0-4.233.545-5.484 1.62-1.198 1.03-1.805 2.493-1.805 4.35 0 1.601.624 3.038 1.76 4.045 1.162 1.033 2.778 1.579 4.672 1.579 2.966 0 4.58-1.46 5.135-2.086l.275 1.528.038.211h3.386V24.924c0-4.216-2.794-6.836-7.29-6.836' clip-rule='evenodd'/%3E%3C/svg%3E"
                            alt="main logo"
                            className="w-32 h-auto object-contain"
                        />
                    </Link>
                </div>
                <div className="flex items-center justify-between gap-5">
                    <div
                        className="md:hover:underline duration-300"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        ref={menuRef}
                    >
                        Аренда
                        {open && (
                            <div className="absolute top-9 left-0 bg-white shadow-lg p-4 w-full border rounded-lg">
                                <p>Контент меню</p>
                            </div>
                        )}
                    </div>

                    {/* Кнопка для открытия чата */}
                    <span
                        className="bg-slate-200 rounded-xl px-4 py-1 text-blue-500 cursor-pointer md:hover:bg-gray-100 duration-300"
                        onClick={() => setIsChatOpen(!isChatOpen)}
                    >
            умный помощник
          </span>

                    <ul className="flex justify-between items-center gap-6 relative">
                        {data.map((item, index) => (
                            <li
                                key={index}
                                className="relative flex flex-col items-center cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {item.icon}
                                {hoveredIndex === index && (
                                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white rounded-md px-2 py-1 text-sm mt-2 whitespace-nowrap shadow-lg">
                    {item.name}
                  </span>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        <button className="bg-blue-600 text-white rounded-md px-3 py-1">
                            + Подать за 0 сом
                        </button>
                        <button className="text-blue-600 bg-blue-200 rounded-md px-3 py-1 md:hover:bg-blue-300 duration-300">
                            Войти
                        </button>
                    </div>
                </div>
            </header>

            {/* Чат-бот */}
            {isChatOpen && (
                <div
                    ref={chatRef}
                    className="fixed bottom-5 right-5 bg-white shadow-lg border rounded-lg w-80 h-96 flex flex-col"
                >
                    <div className="p-3 flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
                        <span>Чат-бот</span>
                        <button onClick={() => setIsChatOpen(false)}>
                            <XIcon />
                        </button>
                    </div>
                    <div className="p-3 flex-1 overflow-auto">Сообщения чата...</div>
                    <input
                        type="text"
                        className="border-t p-2 w-full"
                        placeholder="Напишите сообщение..."
                    />
                </div>
            )}
        </>
    );
};
