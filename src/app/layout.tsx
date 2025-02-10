// app/layout.tsx
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* You can add meta tags here */}
      </head>
      <body>{children}</body>
    </html>
  );
}
