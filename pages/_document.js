import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="fa" dir="rtl">
            <Head/>
            <body>
            <section className="container m-auto max-w-[1280px] px-2">
                <Main/>
                <NextScript/>
            </section>
            </body>
        </Html>
    )
}
