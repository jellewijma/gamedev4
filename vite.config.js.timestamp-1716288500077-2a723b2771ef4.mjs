// vite.config.js
import { VitePWA } from "file:///home/jelle/school/gamedev4/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = {
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
        "start_url": "https://jellewijma.github.io/gamedev4/index.html",
        "display": "fullscreen"
      }
    })
  ]
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9qZWxsZS9zY2hvb2wvZ2FtZWRldjRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2plbGxlL3NjaG9vbC9nYW1lZGV2NC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9qZWxsZS9zY2hvb2wvZ2FtZWRldjQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgVml0ZVBXQSh7XG4gICAgICAgICAgICAvLyBnZW5lcmF0ZXMgJ21hbmlmZXN0LndlYm1hbmlmZXN0JyBmaWxlIG9uIGJ1aWxkXG4gICAgICAgICAgICBtYW5pZmVzdDoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBpY2sgTWUgVXBcIixcbiAgICAgICAgICAgICAgICBcInNob3J0X25hbWVcIjogXCJQTVVcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUGljayBtZSB1cCBpcyBhIHJwZyBnYW1lXCIsXG4gICAgICAgICAgICAgICAgXCJpY29uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemVzXCI6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJzdGFydF91cmxcIjogXCJodHRwczovL2plbGxld2lqbWEuZ2l0aHViLmlvL2dhbWVkZXY0L2luZGV4Lmh0bWxcIixcbiAgICAgICAgICAgICAgICBcImRpc3BsYXlcIjogXCJmdWxsc2NyZWVuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBdXG59OyJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVEsU0FBUyxlQUFlO0FBRTNSLElBQU8sc0JBQVE7QUFBQSxFQUNYLFNBQVM7QUFBQSxJQUNMLFFBQVE7QUFBQTtBQUFBLE1BRUosVUFBVTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLFFBQ2YsU0FBUztBQUFBLFVBQ0w7QUFBQSxZQUNJLE9BQU87QUFBQSxZQUNQLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNaO0FBQUEsUUFDSjtBQUFBLFFBQ0EsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLE1BQ2Y7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMO0FBQ0o7IiwKICAibmFtZXMiOiBbXQp9Cg==
