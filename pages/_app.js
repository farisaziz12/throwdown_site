import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import { AuthProvider } from "../hooks/useAuth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
