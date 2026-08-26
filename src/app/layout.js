import "./globals.css";

export const metadata = {
  title: "Freedom Financial Services",
  description: "Digital visiting card for Freedom Financial Services"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
