requirejs.config({
    "paths": {
      "jquery": "vendor/jquery"
    },
    
    "shim": {
        "ui/hbGallery": ["jquery"],
    }
});

// Load the main app module to start the app
requirejs(["main"]);