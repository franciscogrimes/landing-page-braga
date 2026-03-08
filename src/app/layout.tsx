import "./globals.css";
import Script from 'next/script'


export default function RootLayout({
  children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}

        {/* Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PT5KJGJ92J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PT5KJGJ92J');
          `}
        </Script>
      </body>
    </html>
  );
}
