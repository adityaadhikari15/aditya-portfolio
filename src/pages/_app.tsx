import "@styles/globals.scss";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "@styles/prime-react-custom.scss";

//core
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-100">
      <Component {...pageProps} />
    </div>
  );
}
