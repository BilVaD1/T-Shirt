import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader'

async function startApp() {
    // Record all sessions on localhost, staging stacks and preview URLs
    if (!isProduction()) {
      // Start the Meticulous recorder before you initialise your app.
      // Note: all errors are caught and logged, so no need to surround with try/catch
      await tryLoadAndStartRecorder({
        projectId: 'Gx3HocHD9DZL4cNMUwKOl1aIMB5zeeDKnbf6EjVP',
        isProduction: false,
      });
    }

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
}

function isProduction() {
    // TODO: Update me with your production hostname
    return window.location.hostname.indexOf("your-production-site.com") > -1;
}

startApp();


