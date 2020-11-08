import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "../hooks/useAuth";

Bugsnag.start({
    apiKey: process.env.NEXT_PUBLIC_BUGSNAG_API_KEY,
    plugins: [new BugsnagPluginReact()],
});

const ErrorBoundary = Bugsnag.getPlugin("react").createErrorBoundary(React);

function App({ Component, pageProps }) {
    Bugsnag.notify(new Error("Test error"));
    return (
        <ErrorBoundary>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </ErrorBoundary>
    );
}

export default App;
