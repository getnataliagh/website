import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.png" media="(prefers-color-scheme: light)"/>
                    <link rel="icon" href="/favicon-dark.png" media="(prefers-color-scheme: dark)"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
