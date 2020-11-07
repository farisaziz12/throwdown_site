import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "../hooks/useAuth";

function App({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default App;
