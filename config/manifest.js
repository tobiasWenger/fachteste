/*jshint node:true*/
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Wertungstabellen",
    short_name: "Wertungstabellen",
    description: "App um die Noten von den STV Fachteste und PS 80m zu berechnen.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/app-icons/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png"
      },
      {
        src: "/app-icons/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png"
      },
      {
        src: "/app-icons/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        src: "/app-icons/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "/app-icons/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "/app-icons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/app-icons/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
        targets: ['apple']
      },
      {
        src: "/app-icons/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
        targets: ['apple']
      },
      {
        src: "/app-icons/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        targets: ['apple']
      },
      {
        src: "/app-icons/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
        targets: ['apple']
      },
      {
        src: "/app-icons/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
        targets: ['apple']
      },
      {
        src: "/app-icons/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
        targets: ['apple']
      },
      {
        src: "/app-icons/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        targets: ['apple']
      },
      {
        src: "/app-icons/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
        targets: ['apple']
      },
      {
        src: "/app-icons/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
        targets: ['apple']
      }
    ],

    apple: {
      statusBarStyle: 'black'
    }
  };
}
