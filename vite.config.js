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
                        "src": "img/logo-s.png",
                        "sizes": "32x32",
                        "type": "image/png"
                    },
                    {
                        "src": "img/logo-l.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    }
                ],
                "start_url": "https://jellewijma.github.io/gamedev4",
                "display": "fullscreen"

            }
        })
    ]
};