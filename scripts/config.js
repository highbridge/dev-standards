requirejs.config({
    "paths": {
      "jquery": "vendor/jquery"
    },
    
    "shim": {
        "plugins/hbGallery": ["jquery"],
        "ui/gallery": ["plugins/hbGallery"]
    }
});

// Load the main app module to start the app
requirejs(["main"]);