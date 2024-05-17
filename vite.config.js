import { VitePWA } from 'vite-plugin-pwa';

export default {
    plugins: [
        VitePWA({
            // generates 'manifest.webmanifest' file on build
            manifest: {
                "name": "Pick Me Up",
                "short_name": "PMU",
                "description": "Pick me up is a rpg game",
                "icons": [
                    {
                        "src": "assets/logo.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    }
                ],
                "start_url": "http://jellewijma.github.io/gamedev4/index.html",
                "display": "fullscreen"
            }
        })
    ]
};