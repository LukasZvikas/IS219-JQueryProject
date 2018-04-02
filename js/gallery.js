// requestAnim shim layer by Paul Irish
window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(/* function */ callback, /* DOMElement */ element) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
  requestAnimFrame(animate);
  var currentTime = new Date().getTime();
  if (mLastFrameTime === 0) {
    mLastFrameTime = currentTime;
  }

  if (currentTime - mLastFrameTime > mWaitTime) {
    swapPhoto();
    mLastFrameTime = currentTime;
  }
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {
  //Add code here to access the #slideShow element.
  //Access the img element and replace its source
  //with a new image from your images array which is loaded
  //from the JSON string
<<<<<<< HEAD
<<<<<<< HEAD
=======
  console.log(mImages[0][mCurrentIndex].imgLocation);
  $(".location").text("Location: " + mImages[0][mCurrentIndex].imgLocation);
  $(".description").text("Description: " + mImages[0][mCurrentIndex].description);
  $(".date").text("Date: " + mImages[0][mCurrentIndex].date);
>>>>>>> Part3
=======
>>>>>>> Part4/5

  if (mCurrentIndex > mImages[0].length - 1) {
    mCurrentIndex = 0;
  }

  $(".location").text("Location: " + mImages[0][mCurrentIndex].imgLocation);
  $(".description").text(
    "Description: " + mImages[0][mCurrentIndex].description
  );
  $(".date").text("Date: " + mImages[0][mCurrentIndex].date);
  $("#photo").attr("src", `${mImages[0][mCurrentIndex].imgPath}`);

  mCurrentIndex += 1;
}

// Counter for the mImages array
var mCurrentIndex = 0;

var mImages = [];

//checks the url for the parameter and returns the value of it
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);

  if (sPageURL == "") {
    return "extra.json";
  }

  var url = sPageURL.split("=");
  return url[1];
}


var mRequest = new XMLHttpRequest();
var url = GetURLParameter("json");
mRequest.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    var images = JSON.parse(this.responseText);

    $.each(images, function(key, value) {
      var img = value;

      GalleryImage(img);

      mImages.push(img);
    });

    return mImages;
  }
};

mRequest.open("GET", url, true);
mRequest.send();

// Array holding GalleryImage objects (see below).
var mImages = [];

// Holds the retrived JSON information
var mJson;

// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = "";

//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).
function makeGalleryImageOnloadCallback(galleryImage) {
  return function(e) {
    galleryImage.img = e.target;
    mImages.push(galleryImage);
  };
}

$(document).ready(function() {
  $(document).on("click", "#nextPhoto", function() {
    swapPhoto();
  });
  $(document).on("click", "#prevPhoto", function() {
    mCurrentIndex -= 2;

    if (mCurrentIndex < 0) {
      mCurrentIndex = 0;
    }
<<<<<<< HEAD

    swapPhoto();
  });
});

// $('#nav, #nextPhoto').click(function(){
// 		mImages += 1;
// 		console.log('yes')
// 	})
=======

    swapPhoto();
  });
});
>>>>>>> Part3

$(document).ready(function() {
  // This initially hides the photos' metadata information
  $(".details")
    .eq(0)
    .hide();
<<<<<<< HEAD
=======

  $(".moreIndicator").on("click", function() {
    if ($(this).data("clicked")) {
      $(".rot90").toggleClass("active");
      $(".details").hide();
      $(this).data("clicked", false);
    } else {
      $(".rot90").toggleClass("active");
      $(".details").show();
      $(this).data("clicked", true);
    }
  });
>>>>>>> Part3
});

window.addEventListener(
  "load",
  function() {
    console.log("window loaded");
  },
  false
);

function GalleryImage(image) {
  return {
    location: image.imgLocation,
    description: image.description,
    date: image.date,
    imageSrc: image.imgPath
  };

  //implement me as an object to hold the following data about an image:
  //1. location where photo was taken
  //2. description of photo
  //3. the date when the photo was taken
  //4. either a String (src URL) or an an HTMLImageObject (bitmap of the photo. https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
}
