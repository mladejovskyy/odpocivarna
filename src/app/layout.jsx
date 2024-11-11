export default function RootLayout({children}) {
    return (
        <html lang="cs" translate="no" suppressHydrationWarning={true}>
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" href="/favicon.ico"/>
            <title>Otevření odpočívárny</title>
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}
