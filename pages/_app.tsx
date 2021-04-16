import { AppProps } from 'next/app'
import { useEffect } from "react"
import { useRouter } from "next/router"
import "../assets/styles/index.css"
import "../assets/styles/main.scss"
import * as gtag from "../lib/gtag";
import '@fortawesome/fontawesome-free/css/all.min.css'
function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            console.log('handleRouteChange');
            gtag.pageview(url);
        };
        // handleRouteChange('/');
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <Component {...pageProps} />
    )
}

export default App