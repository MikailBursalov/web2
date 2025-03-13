import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
        <body className={``}>{children}</body>
        </html>
    );
}
