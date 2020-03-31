function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotel-food/hotel-food.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotel-food/hotel-food.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotelFoodHotelFoodComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"nav\" id=\"menu\">\n  <div class=\"wrap\">\n    <div class=\"brand\">\n      <span>\n        <img src=\"../assets/images/hut2.jpg\" height=\"30px\" width=\"45px\"> &nbsp;\n        <b>KnightsInn</b>\n      </span>\n    </div>\n    <ul class=\"top-menu\" id=\"top-menu\">\n      <li><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a></li>\n      <li routerLink=\"/homepage\">Home</li>\n      <li routerLink=\"/about\">About</li>\n      <li routerLink=\"/rooms\">Rooms</li>\n      <li routerLink=\"/food\">Eat & Dinner</li>\n      <li routerLink=\"/contact\">Contact</li>\n      <li routerLink=\"/register\">Sign Up</li>\n    </ul>\n  </div>\n</nav>\n\n <header class=\"hero\" [ngStyle]=\"{'background-image': getUrl(), 'height' : '600px' ,'width' : '100%'}\">\n  <div class=\"content\">\n    <p>The pleasure of variety on your plate.</p>\n    \n  </div>\n</header>\n\n <main class=\"main\">\n  <section>\n    <div class=\"tab-row\">\n      <div class=\"col-12\">\n       <h2>Passion For Food</h2><br>\n        <img class=\"abc\" src=\"../assets/images/eat1.jpg\" height=\"300px\" width=\"600px\">\n        <br>\n        <br>\n        <p>Knights Inn is located in the heart of the historic center of Florence in an extremely characteristic, quite and lively area within short walk distance to all sites and is surrounded by the extraordinary beauty of churches, buildings, shops and monuments. Cellai Hotel is part of a lovingly restored 1800 palace.</p>\n      </div>\n    </div>\n    </section>\n </main> \n <header class=\"hero\" [ngStyle]=\"{'background-image': getUrl1(), 'height' : '600px' ,'width' : '100%'}\">\n  <div class=\"content\">\n    <div class=\"container\">\n    \n      <div class=\"centered\">\n        <div class=\"text-block\"><h1>Make A Reservation</h1>\n          <br>\n          <br>\n          <input type=\"text\" name=\"Date\" placeholder=\"Date\" [(ngModel)]=\"food.date\">\n          <br> \n          <br>\n          <input type=\"text\" name=\"Time\" placeholder=\"Time\" [(ngModel)]=\"food.time\">\n          <br><br>\n          <input type=\"text\" name=\"Party Size\" placeholder=\"Party Size\" [(ngModel)]=\"food.size\">\n          <br><br>\n         <input type=\"button\" value =\"Book Now\" (click)=\"booktable()\">\n        </div>\n      </div>\n    </div>\n    \n  </div>\n</header>\n\n\n <div class=\"c1\"  [ngStyle]=\"{'background-image': getUrl2(), 'height' : '400px'}\">\n<div class=\"wrapper\">\n<div class=\"card\"><img src=\"../assets/images/eat6.jpg\">\n<div class=\"info\">\n  <h1>Food Lovers</h1>\n  <p>When planning your perfect day, look no further than us. Food lovers beware...you're in for a tasty surprise.</p>\n  <button routerLink=\"/menu\">Menu Peek</button>\n</div>\n</div>\n<div class=\"card\"><img src=\"../assets/images/eat8.jpg\">\n<div class=\"info\">\n  <h1>Meet Our Chef</h1>\n  <p>Food is my passion - my art is creating a delicious and surprising menu that will overwhelm your every sense.</p>\n  <button><a href=\"https://en.wikipedia.org/wiki/Vikas_Khanna\">Read More</a></button>\n</div>\n</div>\n<div class=\"card\"><img src=\"../assets/images/eat7.jpg\">\n<div class=\"info\">\n  <h1>Say Hello</h1>\n  <p>We love to meet people who want to share their love of food at events, private parties and more. Drop us a line or give us a call.</p>\n  <button routerLink=\"/contact\">Contact Us</button>\n</div>\n</div>\n  </div>\n</div> \n\n<footer class=\"footer-distributed\">\n\n  <div class=\"footer-left\">\n\n    <h3><span>KnightsInn</span></h3>\n\n    <p class=\"footer-links\">\n      <a href=\"#\" class=\"link-1\" routerLink=\"/homepage\">Home</a>\n      \n      <a href=\"#\" routerLink=\"/homepage\">About</a>\n    \n      <a href=\"#\" routerLink=\"/rooms\">Rooms</a>\n    \n      <a href=\"#\"  routerLink=\"/food\">Eat & Dinner</a>\n      \n      <a href=\"#\" routerLink=\"/contact\">Contact</a>\n      \n    </p>\n\n    <p class=\"footer-company-name\">Company Name © 2020</p>\n  </div>\n\n  <div class=\"footer-center\">\n    \n    <div>\n     <h3> Contact us at</h3>\n      <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>\n    </div>\n\n    <div>\n      <p>+1.555.555.5555</p>\n    </div>\n\n    <div>\n      \n      <p><a href=\"mailto:support@company.com\">support@company.com</a></p>\n    </div>\n\n  </div>\n\n  <div class=\"footer-right\">\n     <h3>About hotel</h3>\n    <p class=\"footer-company-about\">\n    \n      KnightsInn is located in the heart of the historic center of Florence \n        in an extremely characteristic, quite and lively area within short walk distance.\n    </p>\n\n    \n  </div>\n\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelabout/hotelabout.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotelabout/hotelabout.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotelaboutHotelaboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg\">\n<nav class=\"nav\" id=\"menu\">\n    <div class=\"wrap\">\n      <div class=\"brand\">\n        <span>\n          <img src=\"../assets/images/hut2.jpg\" height=\"30px\" width=\"45px\"> &nbsp;\n          <b>KnightsInn</b>\n        </span>\n      </div>\n      <ul class=\"top-menu\" id=\"top-menu\">\n        <li><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a></li>\n        <li routerLink=\"/homepage\">Home</li>\n        <li routerLink=\"/about\">About</li>\n        <li routerLink=\"/rooms\">Rooms</li>\n        <li routerLink=\"/food\">Eat & Dinner</li>\n        <li routerLink=\"/contact\">Contact</li>\n        <li routerLink=\"/register\">Sign Up</li>\n      </ul>\n    </div>\n  </nav>\n\n  <header class=\"hero\" [ngStyle]=\"{'background-image': getUrl1(), 'height' : '600px'}\">\n    <div class=\"content\">\n      <h1>ABOUT US</h1>\n    </div>\n  </header>\n  <br>\n\n  <div class=\"pr\"><b>KnightsInn</b></div>\n  <br>\n  <div class=\"para\">\n    If what you're looking for is a conveniently located hotel in Dubai, \n    look no further than KnightsInn Hotel Dubai Deira Creek. From here, \n    guests can enjoy easy access to all that the lively city has to offer. \n    This modern hotel is in the vicinity of popular city attractions such as Meydan Racecourse, \n    Emirates Golf club, Twin Towers Shopping Mall.\n<br>\nThe facilities and services provided by KnightsInn Hotel Dubai Deira Creek ensure a\n pleasant stay for guests. This hotel offers numerous on-site facilities to satisfy even\n  the most discerning guest.\n<br>\nIn addition, all guestrooms feature a variety of comforts. Many rooms even provide \ntelevision LCD/plasma screen, bathroom phone, complimentary instant coffee, complimentary tea, \nfree welcome drink to please the most discerning guest. The hotel offers many unique recreational \nopportunities such as hot tub, fitness center, sauna, outdoor pool, spa. Whatever your purpose of \nvisit, KnightsInn Hotel Dubai Deira Creek is an excellent choice for your stay in Dubai.\n<br>\n<br>\n<br>\n\n  </div>\n<div class=\"serv\">\n  <img src=\"../assets/images/ab1.jpg\" height=\"430px\" width=\"690px\">\n  <br><br><br>\n  <h4>Amenities & Services</h4>\n  <br>\n  <h5>\n    Free Wi-Fi access \n<br><br>\n Bar & restaurant\n <br><br>\nIn-room dining\n<br><br>\nConcierge services\n<br><br>\nPet-friendly accommodations\n<br><br>\nSmall business perks\n<br><br>\nValet parking\n<br><br>\nDaily domestic newspaper delivery\n  </h5>\n</div>\n  <br>\n  <br>\n  <h4>Gallery</h4>\n  <br>\n  <div class=\"im\">\n      <img src=\"../assets/images/3.jpg\" alt=''>\n<img src=\"../assets/images/pool.jpg\" alt=''>\n<img src=\"../assets/images/jsuit.jpg\" alt=''>\n<img src=\"../assets/images/ab2.jpg\" alt=''>\n<img src=\"../assets/images/eat4.jpg\" alt=''>\n<img src=\"../assets/images/eat8.jpg\" alt=''>\n<img src=\"../assets/images/eat6.jpg\" alt=''>\n<img src=\"../assets/images/ab3.jpg\" alt=''>\n<img src=\"../assets/images/ab5.jpg\" alt=''>\n<img src=\"../assets/images/ab4.jpg\" alt=''>\n    </div>\n  <br><br><br><br>\n  </div>\n  <footer class=\"footer-distributed\">\n\n    <div class=\"footer-left\">\n  \n      <h3><span>KnightsInn</span></h3>\n  \n      <p class=\"footer-links\">\n        <a href=\"#\" class=\"link-1\" routerLink=\"/homepage\">Home</a>\n        \n        <a href=\"#\" routerLink=\"/homepage\">About</a>\n      \n        <a href=\"#\" routerLink=\"/rooms\">Rooms</a>\n      \n        <a href=\"#\"  routerLink=\"/food\">Eat & Dinner</a>\n        \n        <a href=\"#\" routerLink=\"/contact\">Contact</a>\n        \n      </p>\n\n\n  \n      <p class=\"footer-company-name\">Company Name © 2020</p>\n    </div>\n  \n    <div class=\"footer-center\">\n      \n      <div>\n       <h3> Contact us at</h3>\n        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>\n      </div>\n  \n      <div>\n        <p>+1.555.555.5555</p>\n      </div>\n  \n      <div>\n        \n        <p><a href=\"mailto:support@company.com\">support@company.com</a></p>\n      </div>\n  \n    </div>\n  \n    <div class=\"footer-right\">\n       <h3>About hotel</h3>\n      <p class=\"footer-company-about\">\n      \n        KnightsInn is located in the heart of the historic center of Florence \n          in an extremely characteristic, quite and lively area within short walk distance.\n      </p>\n  \n      \n    </div>\n  \n  </footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelcontact/hotelcontact.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotelcontact/hotelcontact.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotelcontactHotelcontactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"nav\" id=\"menu\">\n  <div class=\"wrap\">\n    <div class=\"brand\">\n      <span>\n        <img src=\"../assets/images/hut2.jpg\" height=\"30px\" width=\"45px\"> &nbsp;\n        <b>KnightsInn</b>\n      </span>\n    </div>\n    <ul class=\"top-menu\" id=\"top-menu\">\n      <li><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a></li>\n      <li routerLink=\"/homepage\">Home</li>\n      <li routerLink=\"/about\">About</li>\n      <li routerLink=\"/rooms\">Rooms</li>\n      <li routerLink=\"/food\">Eat & Dinner</li>\n      <li routerLink=\"/contact\">Contact</li>\n      <li routerLink=\"/register\">Sign Up</li>\n    </ul>\n  </div>\n</nav>\n\n<header class=\"hero\" [ngStyle]=\"{'background-image': getUrl1(), 'height' : '600px'}\">\n  <div class=\"content\">\n    <h1>CONTACT US</h1>\n  </div>\n</header>\n\n<main class=\"main\">\n\n      <div class=\"col-12\">\n\t\t\t\t<br><br><br>\n      <h3><b>FOR QUESTIONS OR INQUIRIES<br>\n1-800-000-0000</b></h3>\n<p class=\"c\">Great Hotel is located in San Francisco<br>\n  \n500 Terry Francois Street<br>\n\nCA 94158 / info@mysite.com</p>\n\n<br><br><br><br>\n<br><br>\n<br><br>\n<br><br>\n<br>\n</div>\n</main>\n<section class=\"get-in-touch\">\n\n   <form class=\"contact-form row\">\n      <div class=\"form-field col x-50\">\n         <input  class=\"input-text js-input\" type=\"text\" placeholder=\"Name\" [(ngModel)]=\"contact.name\"> \n      </div>\n      <div class=\"form-field col x-50\">\n         <input  class=\"input-text js-input\" type=\"text\" placeholder=\"E-mail\" [(ngModel)]=\"contact.email\" >\n      </div>\n      <div class=\"form-field col x-100\">\n         <input  class=\"input-text js-input\" type=\"text\" placeholder=\"Message\" [(ngModel)]=\"contact.message\">\n      </div>\n      <div class=\"form-field col x-100 align-center\">\n         <input class=\"submit-btn\" type=\"button\" value=\"Submit\" (click)=\"cont()\">\n      </div> \n   </form>\n</section>\n<br>\n<br>\n<footer class=\"footer-distributed\">\n\n  <div class=\"footer-left\">\n\n    <h3><span>KnightsInn</span></h3>\n\n    <p class=\"footer-links\">\n      <a href=\"#\" class=\"link-1\" routerLink=\"/homepage\">Home</a>\n      \n      <a href=\"#\" routerLink=\"/homepage\">About</a>\n    \n      <a href=\"#\" routerLink=\"/rooms\">Rooms</a>\n    \n      <a href=\"#\"  routerLink=\"/food\">Eat & Dinner</a>\n      \n      <a href=\"#\" routerLink=\"/contact\">Contact</a>\n      \n    </p>\n\n    <p class=\"footer-company-name\">Company Name © 2020</p>\n  </div>\n\n  <div class=\"footer-center\">\n    \n    <div>\n     <h3>Contact us at</h3>\n      <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>\n    </div>\n\n    <div>\n      <p>+1.555.555.5555</p>\n    </div>\n\n    <div>\n      \n      <p><a href=\"mailto:support@company.com\">support@company.com</a></p>\n    </div>\n\n  </div>\n\n  <div class=\"footer-right\">\n     <h3>About hotel</h3>\n    <p class=\"footer-company-about\">\n    \n      KnightsInn is located in the heart of the historic center of Florence \n        in an extremely characteristic, quite and lively area within short walk distance.\n    </p>\n\n    \n  </div>\n\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelhome/hotelhome.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotelhome/hotelhome.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotelhomeHotelhomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"nav\" id=\"menu\">\n  <div class=\"wrap\">\n    <div class=\"brand\">\n      <span>\n        <img src=\"../assets/images/hut2.jpg\" height=\"30px\" width=\"45px\"> &nbsp;\n        <b>KnightsInn</b>\n      </span>\n    </div>\n    <ul class=\"top-menu\" id=\"top-menu\">\n      <li><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a></li>\n      <li routerLink=\"/homepage\">Home</li>\n      <li routerLink=\"/about\">About</li>\n      <li routerLink=\"/rooms\">Rooms</li>\n      <li routerLink=\"/food\">Eat & Dinner</li>\n      <li routerLink=\"/contact\">Contact</li>\n      <li routerLink=\"/register\">Sign Up</li>\n    </ul>\n  </div>\n</nav>\n\n<header class=\"hero\" [ngStyle]=\"{'background-image': getUrl(), 'height' : '600px'}\">\n  <div class=\"content\">\n    <p><b>At the Heart of Low Country Style,Culture and Cuisine.</b></p>\n    <input type=\"button\" value=\"Learn More\" routerLink=\"/about\">\n    </div>\n</header>\n\n<br>\n  <br>\n  <br>\n  <main class=\"main\">\n    <section>\n      <div class=\"tab-row\">\n        <div class=\"col-12\">\n          <h2>Description</h2>\n          <p>Knights Inn is located in the heart of the historic center of Florence \n            in an extremely characteristic, quite and lively area within short walk distance to \n            all sites and is surrounded by the extraordinary beauty of churches, buildings, shops \n            and monuments. Cellai Hotel is part of a lovingly restored 1800 palace.</p>\n        </div>\n        </div>\n        <br>\n        <br>\n        <br>\n      </section>\n    </main>\n    <div\n    >\n    <section class=\"feature\" [ngStyle]=\"{'background-image': getUrl1(), 'height' : '350px'}\">\n      <div class=\"tab-row\">\n        <div class=\"col-12\">\n          <h2>Feature Section</h2>\n          <p>Knights Inn Hotel offers ultimate comfort and luxury. This 4-storied hotel is a beautiful combination of traditional grandeur and modern facilities. The 255 exclusive guest rooms are furnished with a range of modern amenities such as television and internet access. International direct-dial phone and safe are also available in any of these rooms. Wake-up call facility is also available in these rooms.</p>\n        </div>\n      </div>\n  </section>\n  </div>\n  <div>\n    <h1 class=\"main-title\">Our Services</h1>\n  <div class=\"container\">\n    <h3 class=\"title\">Free Wi-Fi</h3>\n    <div class=\"content\">\n        <div class=\"content-overlay\"></div>\n        <img class=\"content-image\" src=\"../assets/images/wifi.jpg\" height=\"240px\" width=\"300px\">\n        <div class=\"content-details fadeIn-bottom\">\n          <h3 class=\"content-title\">Free Wi-Fi</h3>\n        </div>\n    \n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <h3 class=\"title\">Room Service</h3>\n    <div class=\"content\">\n      \n        <div class=\"content-overlay\"></div>\n        <img class=\"content-image\" src=\"../assets/images/ab4.jpg\" height=\"240px\" width=\"300px\">\n        <div class=\"content-details fadeIn-top\">\n          <h3>Room Service</h3>\n         \n        </div>\n      \n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <h3 class=\"title\">Food Beverage</h3>\n    <div class=\"content\">\n      \n        <div class=\"content-overlay\"></div>\n        <img class=\"content-image\" src=\"../assets/images/eat4.jpg\" height=\"240px\" width=\"300px\">\n        <div class=\"content-details fadeIn-left\">\n          <h3>Food Beverage</h3>\n          \n        </div>\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <h3 class=\"title\">Parking Space</h3>\n    <div class=\"content\">\n      \n        <div class=\"content-overlay\"></div>\n        <img class=\"content-image\" src=\"../assets/images/park2.jpg\" height=\"240px\" width=\"300px\">\n        <div class=\"content-details fadeIn-right\">\n          <h3>Parking Space</h3>\n          \n        </div>\n     \n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <h3 class=\"title\">Fitness center</h3>\n    <div class=\"content\">\n     \n        <div class=\"content-overlay\"></div>\n        <img class=\"content-image\" src=\"../assets/images/fitness.jpg\" height=\"240px\" width=\"280px\">\n        <div class=\"content-details fadeIn-top fadeIn-left\">\n          <h3>Fitness center</h3>\n         \n        </div>\n      \n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <h3 class=\"title\">Pool</h3>\n    <div class=\"content\">\n\n        <div class=\"content-overlay\"></div>\n        <img class=\"content-image\" src=\"../assets/images/pool.jpg\" height=\"240px\" width=\"280px\">\n        <div class=\"content-details fadeIn-top fadeIn-right\">\n          <h3>Pool</h3>\n          \n        </div>\n      \n    </div>\n  </div>\n  \n  <br>\n  <br> <br>\n  <br> <br>\n  <br> <br>\n  <br><br>\n  <br> <br>\n  <br> <br>\n  <br> <br>\n  <br><br>\n  <br> <br>\n  <br> <br>\n  <br> <br>\n  <br><br>\n  <br> <br>\n\n  <br>\n  </div>\n  <footer class=\"footer-distributed\">\n\n    <div class=\"footer-left\">\n\n      <h3><span>KnightsInn</span></h3>\n\n      <p class=\"footer-links\">\n        <a href=\"#\" class=\"link-1\" routerLink=\"/homepage\">Home</a>\n        \n        <a href=\"#\" routerLink=\"/homepage\">About</a>\n      \n        <a href=\"#\" routerLink=\"/rooms\">Rooms</a>\n      \n        <a href=\"#\"  routerLink=\"/food\">Eat & Dinner</a>\n        \n        <a href=\"#\" routerLink=\"/contact\">Contact</a>\n        \n      </p>\n\n      <p class=\"footer-company-name\">Company Name © 2020</p>\n    </div>\n\n    <div class=\"footer-center\">\n      \n      <div>\n       <h3> Contact us at</h3>\n        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>\n      </div>\n\n      <div>\n        <p>+1.555.555.5555</p>\n      </div>\n\n      <div>\n        \n        <p><a href=\"mailto:support@company.com\">support@company.com</a></p>\n      </div>\n\n    </div>\n\n    <div class=\"footer-right\">\n       <h3>About hotel</h3>\n      <p class=\"footer-company-about\">\n      \n        KnightsInn is located in the heart of the historic center of Florence \n          in an extremely characteristic, quite and lively area within short walk distance.\n      </p>\n\n      \n    </div>\n\n  </footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hoteljunior/hoteljunior.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hoteljunior/hoteljunior.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHoteljuniorHoteljuniorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"nav\" id=\"menu\">\n    <div class=\"wrap\">\n      <div class=\"brand\">\n        <span>\n          <img src=\"../assets/images/hut2.jpg\" height=\"30px\" width=\"45px\"> &nbsp;\n          <b>KnightsInn</b>\n        </span>\n      </div>\n      <ul class=\"top-menu\" id=\"top-menu\">\n        <li><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a></li>\n        <li routerLink=\"/homepage\">Home</li>\n        <li routerLink=\"/about\">About</li>\n        <li routerLink=\"/rooms\">Rooms</li>\n        <li routerLink=\"/food\">Eat & Dinner</li>\n        <li routerLink=\"/contact\">Contact</li>\n        <li routerLink=\"/register\">Sign Up</li>\n      </ul>\n    </div>\n  </nav>\n  <header class=\"hero\" [ngStyle]=\"{'background-image': getUrl(), 'height' : '600px'}\">\n    <div class=\"content\">\n      <h1>ROOMS</h1>\n    </div>\n  </header>\n  \n  <div class=\"abc\">\n    <h2>JUNIOR ROOM</h2>\n   <img class =\"i\" src=\"../assets/images/room5.jpg\" height=\"300px\" width=\"600px\">\n   <br>\n   <br>\n   <br>\n   <h3>Enter details to book now</h3>\n   \n   <input type=\"text\" placeholder=\"Check-In(dd/mm/yy/)\" [(ngModel)]=\"room.checkin\"> &nbsp;&nbsp;&nbsp;\n   <input type=\"text\" placeholder=\"Check-Out(dd/mm/yy/)\" [(ngModel)]=\"room.checkout\">&nbsp;&nbsp;&nbsp;\n   <input type=\"text\" placeholder=\"Adults(max 2)\" [(ngModel)]=\"room.adults\"> &nbsp;&nbsp;&nbsp;\n   <input type=\"text\" placeholder=\"Kids(max 2)\" [(ngModel)]=\"room.kids\"> <br>\n   \n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n   <input type=\"button\" value=\"Book\" (click)=\"roomready()\"> \n   <br>\n   <br>\n   <br>\n  <hr>\n  <br>\n  <div class=\"prop\">Properties: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    Accomodates:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;\n    &nbsp;&nbsp;\n    Size: 260 sq ft\n  <br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beds: 2 Double(s)\n  <br>\n  <hr>\n  More Info:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;\n  Affordable luxury. Our Junior Suites are the perfect option if you’re looking <br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for a little extra \n  luxury. With an open 400 square foot floor plan, the Junior <br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suites \n  offer the extra space you need to spread out and enjoy the breathtaking <br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;views of the city skyline.\n  <hr>\n  <br>\n  <br>\n  <br><br><br>\n  </div>\n  </div>\n  \n  <footer class=\"footer-distributed\">\n  \n              <div class=\"footer-left\">\n  \n                  <h3><span>KnightsInn</span></h3>\n  \n                  <p class=\"footer-links\">\n                      <a href=\"#\" class=\"link-1\" routerLink=\"/homepage\">Home</a>\n                      \n                      <a href=\"#\" routerLink=\"/homepage\">About</a>\n                  \n                      <a href=\"#\" routerLink=\"/rooms\">Rooms</a>\n                  \n                      <a href=\"#\"  routerLink=\"/food\">Eat & Dinner</a>\n                      \n                      <a href=\"#\" routerLink=\"/contact\">Contact</a>\n                      \n                  </p>\n  \n                  <p class=\"footer-company-name\">Company Name © 2020</p>\n              </div>\n  \n              <div class=\"footer-center\">\n          \n                  <div>\n           <h3> Contact us at</h3>\n                      <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>\n                  </div>\n  \n                  <div>\n                      <p>+1.555.555.5555</p>\n                  </div>\n  \n                  <div>\n                      \n                      <p><a href=\"mailto:support@company.com\">support@company.com</a></p>\n                  </div>\n  \n              </div>\n  \n              <div class=\"footer-right\">\n           <h3>About hotel</h3>\n                  <p class=\"footer-company-about\">\n                  \n                      KnightsInn is located in the heart of the historic center of Florence \n              in an extremely characteristic, quite and lively area within short walk distance.\n                  </p>\n  \n                  \n              </div>\n  \n          </footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelmenu/hotelmenu.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotelmenu/hotelmenu.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotelmenuHotelmenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"nav\" id=\"menu\">\n  <div class=\"wrap\">\n    <div class=\"brand\">\n      <span>\n        <img src=\"../assets/images/hut2.jpg\" height=\"30px\" width=\"45px\"> &nbsp;\n        <b>KnightsInn</b>\n      </span>\n    </div>\n    <ul class=\"top-menu\" id=\"top-menu\">\n      <li><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a></li>\n      <li routerLink=\"/homepage\">Home</li>\n      <li routerLink=\"/about\">About</li>\n      <li routerLink=\"/rooms\">Rooms</li>\n      <li routerLink=\"/food\">Eat & Dinner</li>\n      <li routerLink=\"/contact\">Contact</li>\n      <li routerLink=\"/register\">Sign Up</li>\n    </ul>\n  </div>\n</nav>\n\n<header class=\"hero\" [ngStyle]=\"{'background-image': getUrl1(), 'height' : '2000px' ,'width' : '100%'}\">\n  \n    <div class=\"content\">\n        \n      <div class=\"container\">\n     \n        <div class=\"centered\">\n          <div class=\"text-block\"><h1>Our Menu</h1>\n            <br>\n            <hr>\n            <div class=\"p1\">Breakfast</div>\n            <hr>\n           <div class=\"item\">California Eggwich.................................................................................$19</div>\n          <div class=\"par\"> No substitutions. Scrambled eggs, jack and cheddar, lettuce, tomato, avocado, chipotle aioli, \n            sourdough bread</div>\n            <br>\n            <div class=\"item\">Fried Chicken Sandwich.......................................................................$16</div>\n            <div class=\"par\"> bacon, cheddar, pickles, chipotle aioli, over medium egg, local arugula, fried chicken \n                thighs, sriracha, brioche bun</div> <br>\n            <div class=\"item\">California Omelette.................................................................................$14</div>\n            <div class=\"par\"> bacon, cheddar, mushroom, avocado, choice of toast and a side of sour cream and \n                    salsa verde</div>\n                        <br>\n                        <hr>\n            <div class=\"p1\">Lunch</div>\n                        <hr>\n            <div class=\"item\">Caramelized Apple Salad..........................................................................$9.95</div>\n            <div class=\"par\"> Crisp fresh mixed greens topped with caramelized walnuts, apples, and goat \n                            cheese drizzled</div> <br>\n            <div class=\"item\">Multigrain Salad..............................................................................................$10.95</div>\n            <div class=\"par\"> Fresh mixed greens tossed with garbanzo beans, pink lentils, red beans, barley, black rice\n                                , celery, persian cucumber</div> <br>\n            <div class=\"item\">Chopped Vegetable Salad.........................................................................$9.95</div>\n            <div class=\"par\"> Fresh romaine topped with roasted corn, green beans, zucchini, yellow squash, red & yellow bell peppers,\n                                     broccoli, red onion</div>\n                                   \n                                        <br>\n                                    <hr>\n            <div class=\"p1\">Dinner</div>\n                        <hr>\n            <div class=\"item\">Bruschetta.....................................................................................................$11</div>\n            <div class=\"par\"> grilled pita bread, spread of hummus topped with diced tomatoes, herbs, fresh garlic, olive oil \n                            and local arugula</div> <br>\n            <div class=\"item\">Fried Cauliflower........................................................................................$12</div>\n            <div class=\"par\"> served with a side of spicy mint aioli,bacon, cheddar, pickles, chipotle aioli, over medium egg, local arugula\n                              </div> <br>\n            <div class=\"item\">Nachos................................................................................................................$13.50</div>\n            <div class=\"par\"> tortilla chips, cilantro yogurt, serrano chili, pico de gallo, \n                                    queso fresco, scallions, pulled roasted chicken</div><br>\n      </div>                              \n  </div>\n   </div>\n   </div>\n  </header>\n  \n  <footer class=\"footer-distributed\">\n\n\t\t\t<div class=\"footer-left\">\n\n\t\t\t\t<h3><span>KnightsInn</span></h3>\n\n\t\t\t\t<p class=\"footer-links\">\n\t\t\t\t\t<a href=\"#\" class=\"link-1\" routerLink=\"/homepage\">Home</a>\n\t\t\t\t\t\n\t\t\t\t\t<a href=\"#\" routerLink=\"/homepage\">About</a>\n\t\t\t\t\n\t\t\t\t\t<a href=\"#\" routerLink=\"/rooms\">Rooms</a>\n\t\t\t\t\n\t\t\t\t\t<a href=\"#\"  routerLink=\"/food\">Eat & Dinner</a>\n\t\t\t\t\t\n\t\t\t\t\t<a href=\"#\" routerLink=\"/contact\">Contact</a>\n\t\t\t\t\t\n\t\t\t\t</p>\n\n\t\t\t\t<p class=\"footer-company-name\">Company Name © 2020</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"footer-center\">\n        \n\t\t\t\t<div>\n         <h3> Contact us at</h3>\n\t\t\t\t\t<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<p>+1.555.555.5555</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t\n\t\t\t\t\t<p><a href=\"mailto:support@company.com\">support@company.com</a></p>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"footer-right\">\n         <h3>About hotel</h3>\n\t\t\t\t<p class=\"footer-company-about\">\n\t\t\t\t\n\t\t\t\t\tKnightsInn is located in the heart of the historic center of Florence \n            in an extremely characteristic, quite and lively area within short walk distance.\n\t\t\t\t</p>\n\n\t\t\t\t\n\t\t\t</div>\n\n\t\t</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelrooms/hotelrooms.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotelrooms/hotelrooms.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotelroomsHotelroomsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"nav\" id=\"menu\">\n  <div class=\"wrap\">\n    <div class=\"brand\">\n      <span>\n        <img src=\"../assets/images/hut2.jpg\" height=\"30px\" width=\"45px\"> &nbsp;\n        <b>KnightsInn</b>\n      </span>\n    </div>\n    <ul class=\"top-menu\" id=\"top-menu\">\n      <li><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a></li>\n      <li routerLink=\"/homepage\">Home</li>\n      <li routerLink=\"/about\">About</li>\n      <li routerLink=\"/rooms\">Rooms</li>\n      <li routerLink=\"/food\">Eat & Dinner</li>\n      <li routerLink=\"/contact\">Contact</li>\n      <li routerLink=\"/register\">Sign Up</li>\n    </ul>\n  </div>\n</nav>\n\n<header class=\"hero\" [ngStyle]=\"{'background-image': getUrl(), 'height' : '600px'}\">\n  <div class=\"content\">\n    <h1>ROOMS</h1>\n  </div>\n</header>\n\n<div class=\"demo\">\n<div class=\"\">\n  <h2>OUR ROOMS</h2>\n</div>\n<hr class=\"check2\">\n<div class=\"booking\">\n  <input type=\"text\" placeholder=\"Check-In(dd/mm/yy/)\" [(ngModel)]=\"room.checkin\"> &nbsp;\n  <input type=\"text\" placeholder=\"Check-Out(dd/mm/yy/)\" [(ngModel)]=\"room.checkout\">&nbsp;\n  <input type=\"text\" placeholder=\"Adults(max 2)\" [(ngModel)]=\"room.adults\"> &nbsp;\n  <input type=\"text\" placeholder=\"Kids(max 2)\" [(ngModel)]=\"room.kids\"> &nbsp;\n  <input type=\"button\" value=\"Book\" (click)=\"roomready()\"> &nbsp;\n  </div>\n</div>\n  <hr>\n\n  <main>\n    <div class=\"portfolio-container\">\n\n      <div class=\"portfolio-card\">\n        <div class=\"portfolioImage\">\n          <img class =\"a\" src=\"../assets/images/room3.jpg\" alt=\"Thrift Score\">\n          <div class=\"middle\" routerLink=\"/superior\">\n            <p>Book Now</p>\n          </div>\n        </div>\n        <div class=\"portfolioContent\">\n          <h5 class=\"cardCategory\"></h5>\n          <h2 class=\"portfolioTitle\">SUPERIOR ROOM</h2>\n          <p>\n            Our Superior Rooms are comfortable, roomy and elegant.\n            <br/>\n            <!-- View on Github. -->\n          </p>\n          <h5 class=\"tags\">Size: 280 sq ft</h5>\n          <br>\n          <h5 class=\"tags\">Beds: 1 King(s)</h5>\n          \n        </div>\n      </div>\n    </div>\n\n    <div class=\"portfolio-container\">\n\n      <div class=\"portfolio-card\">\n        <div class=\"portfolioImage\">\n          <img class =\"a\" src=\"../assets/images/room5.jpg\" alt=\"Thrift Score\" srcset=\"\"  />\n          <div class=\"middle\"  routerLink=\"/junior\">\n            <p>Book Now</p>\n          </div>\n        </div>\n        <div class=\"portfolioContent\">\n          <h5 class=\"cardCategory\"></h5>\n          <h2 class=\"portfolioTitle\">JUNIOR SUITE</h2>\n          <p>\n            Our Junior Suites offer breathtaking views of the city skyline.\n            <br />\n            <!-- View on Github. -->\n          </p>\n          <h5 class=\"tags\">Size: 260 sq ft</h5>\n          <br>\n          <h5 class=\"tags\">Beds: 2 Double(s)</h5>\n          \n        </div>\n      </div>\n    </div>\n    <div class=\"portfolio-container\">\n\n      <div class=\"portfolio-card\">\n        <div class=\"portfolioImage\">\n          <img class =\"a\" src=\"../assets/images/room6.jpg\" alt=\"Thrift Score\" srcset=\"\"  />\n          <div class=\"middle\"  routerLink=\"/standard\">\n            <p>Book Now</p>\n          </div>\n        </div>\n        <div class=\"portfolioContent\">\n          <h5 class=\"cardCategory\"></h5>\n          <h2 class=\"portfolioTitle\">STANDARD ROOM</h2>\n          <p>\n            Our Standard Rooms are the perfect combination of function and comfort.\n            <br />\n            <!-- View on Github. -->\n          </p>\n          <h5 class=\"tags\">Size: 230 sq ft</h5>\n          <br>\n          <h5 class=\"tags\">Beds: 1 Double(s)</h5>\n          \n        </div>\n      </div>\n    </div>\n\n\n  </main>\n<br>\n<br>\n\n  <footer class=\"footer-distributed\">\n\n    <div class=\"footer-left\">\n\n      <h3><span>KnightsInn</span></h3>\n\n      <p class=\"footer-links\">\n        <a href=\"#\" class=\"link-1\" routerLink=\"/homepage\">Home</a>\n        \n        <a href=\"#\" routerLink=\"/homepage\">About</a>\n      \n        <a href=\"#\" routerLink=\"/rooms\">Rooms</a>\n      \n        <a href=\"#\"  routerLink=\"/food\">Eat & Dinner</a>\n        \n        <a href=\"#\" routerLink=\"/contact\">Contact</a>\n        \n      </p>\n\n      <p class=\"footer-company-name\">Company Name © 2020</p>\n    </div>\n\n    <div class=\"footer-center\">\n      \n      <div>\n       <h3> Contact us at</h3>\n        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>\n      </div>\n\n      <div>\n        <p>+1.555.555.5555</p>\n      </div>\n\n      <div>\n        \n        <p><a href=\"mailto:support@company.com\">support@company.com</a></p>\n      </div>\n\n    </div>\n\n    <div class=\"footer-right\">\n       <h3>About hotel</h3>\n      <p class=\"footer-company-about\">\n      \n        KnightsInn is located in the heart of the historic center of Florence \n          in an extremely characteristic, quite and lively area within short walk distance.\n      </p>\n\n      \n    </div>\n\n  </footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelstandard/hotelstandard.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotelstandard/hotelstandard.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotelstandardHotelstandardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"nav\" id=\"menu\">\n    <div class=\"wrap\">\n      <div class=\"brand\">\n        <span>\n          <img src=\"../assets/images/hut2.jpg\" height=\"30px\" width=\"45px\"> &nbsp;\n          <b>KnightsInn</b>\n        </span>\n      </div>\n      <ul class=\"top-menu\" id=\"top-menu\">\n        <li><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a></li>\n        <li routerLink=\"/homepage\">Home</li>\n        <li routerLink=\"/about\">About</li>\n        <li routerLink=\"/rooms\">Rooms</li>\n        <li routerLink=\"/food\">Eat & Dinner</li>\n        <li routerLink=\"/contact\">Contact</li>\n        <li routerLink=\"/register\">Sign Up</li>\n      </ul>\n    </div>\n  </nav>\n  <header class=\"hero\" [ngStyle]=\"{'background-image': getUrl(), 'height' : '600px'}\">\n    <div class=\"content\">\n      <h1>ROOMS</h1>\n    </div>\n  </header>\n  \n  <div class=\"abc\">\n    <h2>Standard ROOM</h2>\n   <img class =\"i\" src=\"../assets/images/room6.jpg\" height=\"300px\" width=\"600px\">\n   <br>\n   <br>\n   <br>\n   <h3>Enter details to book now</h3>\n   \n   <input type=\"text\" placeholder=\"Check-In(dd/mm/yy/)\" [(ngModel)]=\"room.checkin\"> &nbsp;&nbsp;&nbsp;\n   <input type=\"text\" placeholder=\"Check-Out(dd/mm/yy/)\" [(ngModel)]=\"room.checkout\">&nbsp;&nbsp;&nbsp;\n   <input type=\"text\" placeholder=\"Adults(max 2)\" [(ngModel)]=\"room.adults\"> &nbsp;&nbsp;&nbsp;\n   <input type=\"text\" placeholder=\"Kids(max 2)\" [(ngModel)]=\"room.kids\"> <br>\n   \n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n   <input type=\"button\" value=\"Book\" (click)=\"roomready()\"> \n   <br>\n   <br>\n   <br>\n  <hr>\n  <br>\n  <div class=\"prop\">Properties: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    Accomodates:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;\n    &nbsp;&nbsp;\n    Size: 230 sq ft\n  <br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beds: 1 Double(s)\n  <br>\n  <hr>\n  More Info:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;\n  Affordable luxury. Our Standard Suites are the perfect option if you’re looking <br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for a little extra \n  luxury. With an open 400 square foot floor plan, the Junior <br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suites \n  offer the extra space you need to spread out and enjoy the breathtaking <br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;views of the city skyline.\n  <hr>\n  <br>\n  <br>\n  <br><br><br>\n  </div>\n  </div>\n  \n  <footer class=\"footer-distributed\">\n  \n              <div class=\"footer-left\">\n  \n                  <h3><span>KnightsInn</span></h3>\n  \n                  <p class=\"footer-links\">\n                      <a href=\"#\" class=\"link-1\" routerLink=\"/homepage\">Home</a>\n                      \n                      <a href=\"#\" routerLink=\"/homepage\">About</a>\n                  \n                      <a href=\"#\" routerLink=\"/rooms\">Rooms</a>\n                  \n                      <a href=\"#\"  routerLink=\"/food\">Eat & Dinner</a>\n                      \n                      <a href=\"#\" routerLink=\"/contact\">Contact</a>\n                      \n                  </p>\n  \n                  <p class=\"footer-company-name\">Company Name © 2020</p>\n              </div>\n  \n              <div class=\"footer-center\">\n          \n                  <div>\n           <h3> Contact us at</h3>\n                      <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>\n                  </div>\n  \n                  <div>\n                      <p>+1.555.555.5555</p>\n                  </div>\n  \n                  <div>\n                      \n                      <p><a href=\"mailto:support@company.com\">support@company.com</a></p>\n                  </div>\n  \n              </div>\n  \n              <div class=\"footer-right\">\n           <h3>About hotel</h3>\n                  <p class=\"footer-company-about\">\n                  \n                      KnightsInn is located in the heart of the historic center of Florence \n              in an extremely characteristic, quite and lively area within short walk distance.\n                  </p>\n  \n                  \n              </div>\n  \n          </footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelsuperior/hotelsuperior.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hotelsuperior/hotelsuperior.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotelsuperiorHotelsuperiorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"nav\" id=\"menu\">\n  <div class=\"wrap\">\n    <div class=\"brand\">\n      <span>\n        <img src=\"../assets/images/hut2.jpg\" height=\"30px\" width=\"45px\"> &nbsp;\n        <b>KnightsInn</b>\n      </span>\n    </div>\n    <ul class=\"top-menu\" id=\"top-menu\">\n      <li><a href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a></li>\n      <li routerLink=\"/homepage\">Home</li>\n      <li routerLink=\"/about\">About</li>\n      <li routerLink=\"/rooms\">Rooms</li>\n      <li routerLink=\"/food\">Eat & Dinner</li>\n      <li routerLink=\"/contact\">Contact</li>\n      <li routerLink=\"/register\">Sign Up</li>\n    </ul>\n  </div>\n</nav>\n<header class=\"hero\" [ngStyle]=\"{'background-image': getUrl(), 'height' : '600px'}\">\n  <div class=\"content\">\n    <h1>ROOMS</h1>\n  </div>\n</header>\n\n<div class=\"abc\">\n  <h2>SUPERIOR ROOM</h2>\n <img class =\"i\" src=\"../assets/images/room3.jpg\" height=\"300px\" width=\"600px\">\n <br>\n <br>\n <br>\n <h3>Enter details to book now</h3>\n \n <input type=\"text\" placeholder=\"Check-In(dd/mm/yy/)\" [(ngModel)]=\"room.checkin\"> &nbsp;&nbsp;&nbsp;\n <input type=\"text\" placeholder=\"Check-Out(dd/mm/yy/)\" [(ngModel)]=\"room.checkout\">&nbsp;&nbsp;&nbsp;\n <input type=\"text\" placeholder=\"Adults(max 2)\" [(ngModel)]=\"room.adults\"> &nbsp;&nbsp;&nbsp;\n <input type=\"text\" placeholder=\"Kids(max 2)\" [(ngModel)]=\"room.kids\"> <br>\n \n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n <input type=\"button\" value=\"Book\" (click)=\"roomready()\"> \n <br>\n <br>\n <br>\n<hr>\n<br>\n<div class=\"prop\">Properties: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  Accomodates:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;\n  &nbsp;&nbsp;\n  Size: 280 sq ft\n<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beds: 1 King(s)\n<br>\n<hr>\nMore Info:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;\nAffordable luxury. Our Superior Suites are the perfect option if you’re looking <br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for a little extra \nluxury. With an open 400 square foot floor plan, the Junior <br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suites \noffer the extra space you need to spread out and enjoy the breathtaking <br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;views of the city skyline.\n<hr>\n<br>\n<br>\n<br><br><br>\n</div>\n</div>\n\n<footer class=\"footer-distributed\">\n\n\t\t\t<div class=\"footer-left\">\n\n\t\t\t\t<h3><span>KnightsInn</span></h3>\n\n\t\t\t\t<p class=\"footer-links\">\n\t\t\t\t\t<a href=\"#\" class=\"link-1\" routerLink=\"/homepage\">Home</a>\n\t\t\t\t\t\n\t\t\t\t\t<a href=\"#\" routerLink=\"/homepage\">About</a>\n\t\t\t\t\n\t\t\t\t\t<a href=\"#\" routerLink=\"/rooms\">Rooms</a>\n\t\t\t\t\n\t\t\t\t\t<a href=\"#\"  routerLink=\"/food\">Eat & Dinner</a>\n\t\t\t\t\t\n\t\t\t\t\t<a href=\"#\" routerLink=\"/contact\">Contact</a>\n\t\t\t\t\t\n\t\t\t\t</p>\n\n\t\t\t\t<p class=\"footer-company-name\">Company Name © 2020</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"footer-center\">\n        \n\t\t\t\t<div>\n         <h3> Contact us at</h3>\n\t\t\t\t\t<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<p>+1.555.555.5555</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t\n\t\t\t\t\t<p><a href=\"mailto:support@company.com\">support@company.com</a></p>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"footer-right\">\n         <h3>About hotel</h3>\n\t\t\t\t<p class=\"footer-company-about\">\n\t\t\t\t\n\t\t\t\t\tKnightsInn is located in the heart of the historic center of Florence \n            in an extremely characteristic, quite and lively area within short walk distance.\n\t\t\t\t</p>\n\n\t\t\t\t\n\t\t\t</div>\n\n\t\t</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"democheck\">\n    <br>\n  <div class=\"cont\">\n    <div class=\"form sign-in\">\n      <h2>Welcome back,</h2>\n      <label>\n        <span>Email</span>\n        <input type=\"email\" [(ngModel)]=\"user1.email\"/>\n      </label>\n      <label>\n        <span>Password</span>\n        <input type=\"password\" [(ngModel)]=\"user1.password\"/>\n      </label>\n      <label>\n        <p style=\"color: red;\">{{message}}</p>\n      </label>\n      <!-- <p class=\"forgot-pass\">Forgot password?</p> -->\n      <button type=\"button\" class=\"submit\" (click)=\"doLogin()\" routerLink=\"/homepage\">Sign In</button>\n      <a href=\"hotelhome.html\"><button type=\"button\" class=\"fb-btn\">Login as guest</button></a>\n    </div>\n    <div class=\"sub-cont\">\n      <div class=\"img\">\n        <div class=\"img__text m--up\">\n          <h2>New here?</h2>\n          <p>Sign up and discover great amount of new opportunities!</p>\n        </div>\n        <div class=\"img__text m--in\">\n          <h2>One of us?</h2>\n          <p>If you already has an account, just sign in. We've missed you!</p>\n        </div>\n        <div class=\"img__btn\">\n          <span class=\"m--up\">Sign Up</span>\n          <span class=\"m--in\">Sign In</span>\n        </div>\n      </div>\n      <!-- <script>\n       document.querySelector('.img__btn').addEventListener('click', function() {\n    document.querySelector('.cont').classList.toggle('s--signup');\n  });\n   </script> -->\n      <div class=\"form sign-up\">\n        <h2>Time to feel like home,</h2>\n        <label>\n          <span>First Name</span>\n          <input type=\"text\"  [(ngModel)]=\"user.firstName\" [ngModelOptions]=\"{standalone: true}\" required/>\n        </label>\n        <label>\n          <span>Last Name</span>\n          <input type=\"text\"  [(ngModel)]=\"user.lastName\" [ngModelOptions]=\"{standalone: true}\"/>\n        </label>\n        <label>\n          <span>Phone Number</span>\n          <input type=\"text\"  [(ngModel)]=\"user.phone\" [ngModelOptions]=\"{standalone: true}\" required/>\n        </label>\n        <label>\n          <span>City</span> \n          <input type=\"text\"  [(ngModel)]=\"user.city\" [ngModelOptions]=\"{standalone: true}\" required/>\n        </label>\n        <label>\n          <span>Email</span>\n          <input type=\"email\"  [(ngModel)]=\"user.email\" [ngModelOptions]=\"{standalone: true}\" required/>\n        </label>\n        <label>\n          <span>Password</span>\n          <input type=\"password\"  [(ngModel)]=\"user.password\" [ngModelOptions]=\"{standalone: true}\" required/>\n        </label>\n        <button type=\"button\" class=\"submit\" (click)=\"registerProcess()\" routerLink=\"/homepage\">Sign Up</button>\n       <!--  <button type=\"button\" class=\"fb-btn\">Join with <span>facebook</span></button> -->\n      </div>\n    </div>\n  </div>\n  \n  </div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-route.ts":
  /*!******************************!*\
    !*** ./src/app/app-route.ts ***!
    \******************************/

  /*! exports provided: Main_routes */

  /***/
  function srcAppAppRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Main_routes", function () {
      return Main_routes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _hotelhome_hotelhome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./hotelhome/hotelhome.component */
    "./src/app/hotelhome/hotelhome.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _hotelcontact_hotelcontact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./hotelcontact/hotelcontact.component */
    "./src/app/hotelcontact/hotelcontact.component.ts");
    /* harmony import */


    var _hotelrooms_hotelrooms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./hotelrooms/hotelrooms.component */
    "./src/app/hotelrooms/hotelrooms.component.ts");
    /* harmony import */


    var _hotel_food_hotel_food_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./hotel-food/hotel-food.component */
    "./src/app/hotel-food/hotel-food.component.ts");
    /* harmony import */


    var _hotelmenu_hotelmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./hotelmenu/hotelmenu.component */
    "./src/app/hotelmenu/hotelmenu.component.ts");
    /* harmony import */


    var _hotelsuperior_hotelsuperior_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hotelsuperior/hotelsuperior.component */
    "./src/app/hotelsuperior/hotelsuperior.component.ts");
    /* harmony import */


    var _hoteljunior_hoteljunior_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./hoteljunior/hoteljunior.component */
    "./src/app/hoteljunior/hoteljunior.component.ts");
    /* harmony import */


    var _hotelstandard_hotelstandard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./hotelstandard/hotelstandard.component */
    "./src/app/hotelstandard/hotelstandard.component.ts");
    /* harmony import */


    var _hotelabout_hotelabout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./hotelabout/hotelabout.component */
    "./src/app/hotelabout/hotelabout.component.ts");

    var Main_routes = [{
      path: '',
      redirectTo: '/register',
      pathMatch: 'full'
    }, {
      path: 'homepage',
      component: _hotelhome_hotelhome_component__WEBPACK_IMPORTED_MODULE_1__["HotelhomeComponent"]
    }, {
      path: 'rooms',
      component: _hotelrooms_hotelrooms_component__WEBPACK_IMPORTED_MODULE_4__["HotelroomsComponent"]
    }, {
      path: 'contact',
      component: _hotelcontact_hotelcontact_component__WEBPACK_IMPORTED_MODULE_3__["HotelcontactComponent"]
    }, {
      path: 'food',
      component: _hotel_food_hotel_food_component__WEBPACK_IMPORTED_MODULE_5__["HotelFoodComponent"]
    }, {
      path: 'menu',
      component: _hotelmenu_hotelmenu_component__WEBPACK_IMPORTED_MODULE_6__["HotelmenuComponent"]
    }, {
      path: 'superior',
      component: _hotelsuperior_hotelsuperior_component__WEBPACK_IMPORTED_MODULE_7__["HotelsuperiorComponent"]
    }, {
      path: 'junior',
      component: _hoteljunior_hoteljunior_component__WEBPACK_IMPORTED_MODULE_8__["HoteljuniorComponent"]
    }, {
      path: 'standard',
      component: _hotelstandard_hotelstandard_component__WEBPACK_IMPORTED_MODULE_9__["HotelstandardComponent"]
    }, {
      path: 'about',
      component: _hotelabout_hotelabout_component__WEBPACK_IMPORTED_MODULE_10__["HotelaboutComponent"]
    }, {
      path: '**',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'hotelApp';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _hotelhome_hotelhome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./hotelhome/hotelhome.component */
    "./src/app/hotelhome/hotelhome.component.ts");
    /* harmony import */


    var _hotel_food_hotel_food_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hotel-food/hotel-food.component */
    "./src/app/hotel-food/hotel-food.component.ts");
    /* harmony import */


    var _hotelrooms_hotelrooms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./hotelrooms/hotelrooms.component */
    "./src/app/hotelrooms/hotelrooms.component.ts");
    /* harmony import */


    var _hotelcontact_hotelcontact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./hotelcontact/hotelcontact.component */
    "./src/app/hotelcontact/hotelcontact.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _hotelmenu_hotelmenu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./hotelmenu/hotelmenu.component */
    "./src/app/hotelmenu/hotelmenu.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-route */
    "./src/app/app-route.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _hotelsuperior_hotelsuperior_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./hotelsuperior/hotelsuperior.component */
    "./src/app/hotelsuperior/hotelsuperior.component.ts");
    /* harmony import */


    var _hoteljunior_hoteljunior_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./hoteljunior/hoteljunior.component */
    "./src/app/hoteljunior/hoteljunior.component.ts");
    /* harmony import */


    var _hotelstandard_hotelstandard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./hotelstandard/hotelstandard.component */
    "./src/app/hotelstandard/hotelstandard.component.ts");
    /* harmony import */


    var _hotelabout_hotelabout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./hotelabout/hotelabout.component */
    "./src/app/hotelabout/hotelabout.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _hotelhome_hotelhome_component__WEBPACK_IMPORTED_MODULE_6__["HotelhomeComponent"], _hotel_food_hotel_food_component__WEBPACK_IMPORTED_MODULE_7__["HotelFoodComponent"], _hotelrooms_hotelrooms_component__WEBPACK_IMPORTED_MODULE_8__["HotelroomsComponent"], _hotelcontact_hotelcontact_component__WEBPACK_IMPORTED_MODULE_9__["HotelcontactComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _hotelmenu_hotelmenu_component__WEBPACK_IMPORTED_MODULE_11__["HotelmenuComponent"], _hotelsuperior_hotelsuperior_component__WEBPACK_IMPORTED_MODULE_15__["HotelsuperiorComponent"], _hoteljunior_hoteljunior_component__WEBPACK_IMPORTED_MODULE_16__["HoteljuniorComponent"], _hotelstandard_hotelstandard_component__WEBPACK_IMPORTED_MODULE_17__["HotelstandardComponent"], _hotelabout_hotelabout_component__WEBPACK_IMPORTED_MODULE_18__["HotelaboutComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_13__["Main_routes"])],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/contact.ts":
  /*!****************************!*\
    !*** ./src/app/contact.ts ***!
    \****************************/

  /*! exports provided: Contact */

  /***/
  function srcAppContactTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return Contact;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Contact = function Contact(name, email, message) {
      _classCallCheck(this, Contact);
    };
    /***/

  },

  /***/
  "./src/app/food.ts":
  /*!*************************!*\
    !*** ./src/app/food.ts ***!
    \*************************/

  /*! exports provided: Food */

  /***/
  function srcAppFoodTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Food", function () {
      return Food;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Food = function Food(date, time, size) {
      _classCallCheck(this, Food);
    };
    /***/

  },

  /***/
  "./src/app/hotel-food/hotel-food.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/hotel-food/hotel-food.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotelFoodHotelFoodComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrap, .row, .tab-row {\r\n  margin: 3px 89px;\r\n  max-width: 1000px;\r\n }\r\n \r\n .nav {\r\n  position: fixed;\r\n  background-color: black;\r\n  z-index: 3;\r\n  height: 50px;\r\n  width: 100%;\r\n  -webkit-transition: 300ms ease;\r\n  transition: 300ms ease;\r\n }\r\n \r\n .brand {\r\n   display: block;\r\n  float: left;\r\n  height: 40px;\r\n  color: orange;\r\n  padding: 7px;\r\n  margin-left: 2px;\r\n \r\n  /* float: left;\r\n  line-height: 60px;\r\n  \r\n  color: white;\r\n  font-weight: 500;\r\n  padding-left: 1rem;\r\n   */\r\n }\r\n \r\n .brand span {\r\n   display: block;\r\n  margin-left: 30px;\r\n  height: 40px;\r\n  line-height: 24px;\r\n  text-decoration: none;\r\n  color: orange;\r\n  padding: 0 1em;\r\n }\r\n \r\n .top-menu {\r\n  display: none;\r\n  position: relative;\r\n  float: right;\r\n  -webkit-transition: 200ms ease;\r\n  transition: 200ms ease;\r\n  font-weight: 300;\r\n  height: 40px;\r\n }\r\n \r\n @media screen and (min-width: 640px) {\r\n  .top-menu {\r\n    display: block;\r\n  }\r\n }\r\n \r\n .top-menu li {\r\n  display: block;\r\n  float: left;\r\n  height: 40px;\r\n  color: white;\r\n  padding: 6px 12px;\r\n }\r\n \r\n .top-menu li a {\r\n  display: block;\r\n  margin-left: 250px;\r\n  height: 40px;\r\n  line-height: 20px;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  /* padding: 1em; */\r\n }\r\n \r\n .scroll {\r\n  background: white;\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\r\n }\r\n \r\n .scroll .top-menu li a, .scroll .brand {\r\n  color: black;\r\n }\r\n \r\n .scroll .hamburger-line {\r\n  background: #000;\r\n }\r\n \r\n .hero {\r\n    position: relative;\r\n    z-index: 1;\r\n    height: 100vh;\r\n    max-height: 1080px;\r\n    /* background-image: url(eat5.jpg); */\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    color: #fff;\r\n    display: table;\r\n    width: 100%;\r\n    text-align: center;\r\n    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\r\n  }\r\n \r\n .hero:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    /*background: -webkit-gradient(linear, left top, right bottom, from(#28e), to(#e14));\r\n    background: linear-gradient(to bottom right, #28e, #e14);*/\r\n    opacity: 0.9;\r\n    z-index: -1;\r\n  }\r\n \r\n .hero h1 {\r\n    font-size: 4em;\r\n    margin-bottom: 1rem;\r\n  }\r\n \r\n .hero p {\r\n    font-size: 2em;\r\n    max-width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-weight: 300;\r\n  }\r\n \r\n .hero .content {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n  }\r\n \r\n h1, h2, p {\r\n    margin: 1em 0;\r\n  }\r\n \r\n h2 {\r\n    font-size: 2rem;\r\n    line-height: 0.5;\r\n  }\r\n \r\n a {\r\n    color: #e14;\r\n    text-decoration: none;\r\n  }\r\n \r\n a:hover {\r\n    text-decoration: underline;\r\n  }\r\n \r\n .row:after, .tab-row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n \r\n .row, .tab-row {\r\n    display: block;\r\n  }\r\n \r\n .tab-row {\r\n    display: table;\r\n    height: 100%;\r\n    vertical-align: middle;\r\n  }\r\n \r\n .main {\r\n    background: #f8f8f8;\r\n    text-align: center;\r\n    \r\n  }\r\n \r\n .main .row, .main .tab-row {\r\n    min-height: 200px;\r\n  }\r\n \r\n /* .tab-row h2\r\n {\r\n     margin-left: 250px;;\r\n }  */\r\n \r\n .abc \r\n {\r\n     margin-left: 80px;\r\n }\r\n \r\n .container{\r\n    padding: 1em 0;\r\n    float: left;\r\n     width: 100%; \r\n  }\r\n \r\n @media screen and (max-width: 640px){\r\n    .container{\r\n      display: block;\r\n      width: 100%;\r\n    }\r\n  }\r\n \r\n @media screen and (min-width: 900px){\r\n    .container{\r\n      width: 33.33333%;\r\n    }\r\n  }\r\n \r\n .container .title{\r\n    color: #1a1a1a;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n  }\r\n \r\n .container {\r\n    position: relative;\r\n    text-align: center;\r\n    height: 500px;\r\n    width: 100%;\r\n    margin-left: 60px;\r\n  }\r\n \r\n .centered {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n \r\n .text-block h1\r\n  {\r\n    \r\n    margin: 0;\r\n    font-size: 40px;\r\n    text-align: center;\r\n  }\r\n \r\n .text-block {\r\n    margin-left: 130px;\r\n    margin-top: 150px;\r\n    height: 450px;\r\n    width: 490px;\r\n    background-color: black;\r\n    color: white;\r\n    padding: 40px;\r\n    opacity: 1;\r\n    font-size: 10px\r\n  }\r\n \r\n input[type=text] {\r\n    background-color: black;\r\n    color: white;\r\n    width: 70%;\r\n    padding: 9px 20px;\r\n    margin: 3px 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid white;\r\n    border-radius: 4px;\r\n    font-size: 12px;\r\n\r\n  }\r\n \r\n input[type=button]{\r\n    width: 70%;\r\n    background-color: white;\r\n    border: none;\r\n    color: black;\r\n    padding: 16px 32px;\r\n    text-decoration: none;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n  }\r\n \r\n .wrapper {\r\n   display: -webkit-box;\r\n   display: flex;\r\n    width: 95%;\r\n    justify-content: space-around;\r\n  }\r\n \r\n .card {\r\n    margin-top: 50px;\r\n    margin-left: 30px;\r\n    width: 400px;\r\n    height: 280px;\r\n    border-radius: 15px;\r\n    padding: 1.5rem;\r\n    background: white;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: end;\r\n            align-items: flex-end;\r\n    -webkit-transition: 0.4s ease-out;\r\n    transition: 0.4s ease-out;\r\n    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);\r\n  }\r\n \r\n .card:hover {\r\n    -webkit-transform: translateY(20px);\r\n            transform: translateY(20px);\r\n  }\r\n \r\n .card:hover:before {\r\n    opacity: 1;\r\n  }\r\n \r\n .card:hover .info {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0px);\r\n            transform: translateY(0px);\r\n  }\r\n \r\n .card:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 15px;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    z-index: 2;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    opacity: 0;\r\n  }\r\n \r\n .card img {\r\n    width: 100%;\r\n    height: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 15px;\r\n  }\r\n \r\n .card .info {\r\n    position: relative;\r\n    z-index: 3;\r\n    color: white;\r\n    opacity: 0;\r\n    -webkit-transform: translateY(30px);\r\n            transform: translateY(30px);\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n \r\n .card .info h1 {\r\n    margin: 0px;\r\n  }\r\n \r\n .card .info p {\r\n    letter-spacing: 1px;\r\n    font-size: 15px;\r\n    margin-top: 8px;\r\n  }\r\n \r\n .card .info button {\r\n    padding: 0.6rem;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background: white;\r\n    color: black;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    -webkit-transition: 0.4s ease;\r\n    transition: 0.4s ease;\r\n  }\r\n \r\n .card .info button:hover {\r\n    background: dodgerblue;\r\n    color: white;\r\n  }\r\n \r\n .footer-distributed{\r\n    background:black;\r\n    opacity: 0.9;\r\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    text-align: left;\r\n    font: bold 16px sans-serif;\r\n    padding: 55px 50px;\r\n  }\r\n \r\n .footer-distributed .footer-left,\r\n  .footer-distributed .footer-center,\r\n  .footer-distributed .footer-right{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n  }\r\n \r\n .footer-distributed .footer-left{\r\n    width: 40%;\r\n  }\r\n \r\n .footer-distributed h3{\r\n    color:  #ffffff;\r\n    font: normal 36px 'Open Sans', cursive;\r\n    margin: 0;\r\n  }\r\n \r\n .footer-distributed h3 span{\r\n    color:  orange\r\n  }\r\n \r\n .footer-distributed .footer-links{\r\n    color:  #ffffff;\r\n    margin: 20px 0 12px;\r\n    padding: 0;\r\n  }\r\n \r\n .footer-distributed .footer-links a{\r\n    display:inline-block;\r\n    line-height: 1.8;\r\n    font-weight:400;\r\n    text-decoration: none;\r\n    color:  inherit;\r\n  }\r\n \r\n .footer-distributed .footer-company-name{\r\n    color:  #222;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    margin: 0;\r\n  }\r\n \r\n .footer-distributed .footer-center{\r\n    width: 35%;\r\n  }\r\n \r\n .footer-distributed .footer-center i{\r\n    background-color:  #33383b;\r\n    color: #ffffff;\r\n    font-size: 25px;\r\n    width: 38px;\r\n    height: 38px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    line-height: 42px;\r\n    margin: 10px 15px;\r\n    vertical-align: middle;\r\n  }\r\n \r\n /* .footer-center h3\r\n  {\r\n    color: black;\r\n  } */\r\n \r\n .footer-distributed .footer-center i.fa-envelope{\r\n    font-size: 17px;\r\n    line-height: 38px;\r\n  }\r\n \r\n .footer-distributed .footer-center p{\r\n    display: inline-block;\r\n    color: #ffffff;\r\n    font-weight:400;\r\n    vertical-align: middle;\r\n    margin:0;\r\n  }\r\n \r\n .footer-distributed .footer-center p span{\r\n    display:block;\r\n    font-weight: normal;\r\n    font-size:14px;\r\n    line-height:2;\r\n  }\r\n \r\n .footer-distributed .footer-center p a{\r\n    color:  lightseagreen;\r\n    text-decoration: none;;\r\n  }\r\n \r\n .footer-distributed .footer-links a:before {\r\n    content: \"|\";\r\n    font-weight:300;\r\n    font-size: 20px;\r\n    left: 0;\r\n    color: #fff;\r\n    display: inline-block;\r\n    padding-right: 5px;\r\n  }\r\n \r\n .footer-distributed .footer-links .link-1:before {\r\n    content: none;\r\n  }\r\n \r\n .footer-distributed .footer-right{\r\n    width: 20%;\r\n  }\r\n \r\n .footer-distributed .footer-company-about{\r\n    line-height: 20px;\r\n    color:  #92999f;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    margin: 0;\r\n  }\r\n \r\n .footer-distributed .footer-company-about span{\r\n    display: block;\r\n    color:  #ffffff;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    margin-bottom: 20px;\r\n  }\r\n \r\n @media (max-width: 880px) {\r\n  \r\n    .footer-distributed{\r\n      font: bold 14px sans-serif;\r\n    }\r\n  \r\n    .footer-distributed .footer-left,\r\n    .footer-distributed .footer-center,\r\n    .footer-distributed .footer-right{\r\n      display: block;\r\n      width: 100%;\r\n      margin-bottom: 40px;\r\n      text-align: center;\r\n    }\r\n    .footer-right h2 \r\n    {\r\n      color:black;\r\n    }\r\n  \r\n    .footer-distributed .footer-center i{\r\n      margin-left: 0;\r\n    }\r\n  \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWwtZm9vZC9ob3RlbC1mb29kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsc0JBQXNCO0NBQ3ZCOztDQUVBO0dBQ0UsY0FBYztFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7O0VBRWhCOzs7Ozs7SUFNRTtDQUNIOztDQUNBO0dBQ0UsY0FBYztFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsY0FBYztDQUNmOztDQUVBO0VBQ0MsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiOztDQUNBO0VBQ0M7SUFDRSxjQUFjO0VBQ2hCO0NBQ0Q7O0NBQ0E7RUFDQyxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCOztDQUNBO0VBQ0MsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsaUJBQWlCO0VBQ2pCLHdDQUF3QztDQUN6Qzs7Q0FDQTtFQUNDLFlBQVk7Q0FDYjs7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjs7Q0FHQztJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lB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O0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4Qjs7Q0FDQTs7O0tBR0c7O0NBQ0g7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztDQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFFBQVE7RUFDVjs7Q0FFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGFBQWE7RUFDZjs7Q0FFQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7RUFDdkI7O0NBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixPQUFPO0lBQ1AsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7O0NBRUE7SUFDRSxhQUFhO0VBQ2Y7O0NBR0E7SUFDRSxVQUFVO0VBQ1o7O0NBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsU0FBUztFQUNYOztDQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7Q0FJQTs7SUFFRTtNQUNFLDBCQUEwQjtJQUM1Qjs7SUFFQTs7O01BR0UsY0FBYztNQUNkLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsa0JBQWtCO0lBQ3BCO0lBQ0E7O01BRUUsV0FBVztJQUNiOztJQUVBO01BQ0UsY0FBYztJQUNoQjs7RUFFRiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsLWZvb2QvaG90ZWwtZm9vZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAsIC5yb3csIC50YWItcm93IHtcclxuICBtYXJnaW46IDNweCA4OXB4O1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gfVxyXG4gXHJcbiAubmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgei1pbmRleDogMztcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2U7XHJcbiB9XHJcbiBcclxuIC5icmFuZCB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogb3JhbmdlO1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gXHJcbiAgLyogZmxvYXQ6IGxlZnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAqL1xyXG4gfVxyXG4gLmJyYW5kIHNwYW4ge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbiB9XHJcbiBcclxuIC50b3AtbWVudSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMjAwbXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gfVxyXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAudG9wLW1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gfVxyXG4gLnRvcC1tZW51IGxpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gfVxyXG4gLnRvcC1tZW51IGxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC8qIHBhZGRpbmc6IDFlbTsgKi9cclxuIH1cclxuXHJcbiAuc2Nyb2xsIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gfVxyXG4gLnNjcm9sbCAudG9wLW1lbnUgbGkgYSwgLnNjcm9sbCAuYnJhbmQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuIH1cclxuIC5zY3JvbGwgLmhhbWJ1cmdlci1saW5lIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gfVxyXG5cclxuICBcclxuICAuaGVybyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC1oZWlnaHQ6IDEwODBweDtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChlYXQ1LmpwZyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG4gIC5oZXJvOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICAvKmJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKCMyOGUpLCB0bygjZTE0KSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMjhlLCAjZTE0KTsqL1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIC5oZXJvIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgLmhlcm8gcCB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAuaGVybyAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgXHJcbiAgaDEsIGgyLCBwIHtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6ICNlMTQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3c6YWZ0ZXIsIC50YWItcm93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAucm93LCAudGFiLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnRhYi1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBcclxuICAubWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5tYWluIC5yb3csIC5tYWluIC50YWItcm93IHtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuIC8qIC50YWItcm93IGgyXHJcbiB7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDI1MHB4OztcclxuIH0gICovXHJcblxyXG4gXHJcbiAuYWJjIFxyXG4ge1xyXG4gICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIHdpZHRoOiAxMDAlOyBcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpe1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCl7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICB3aWR0aDogMzMuMzMzMzMlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIC50aXRsZXtcclxuICAgIGNvbG9yOiAjMWExYTFhO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICB9XHJcbiAgXHJcblxyXG4gIC5jZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICAudGV4dC1ibG9jayBoMVxyXG4gIHtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudGV4dC1ibG9jayB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB3aWR0aDogNDkwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAxMHB4XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcGFkZGluZzogOXB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDNweCAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25de1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlciB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA3cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG4gIC5jYXJkOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgfVxyXG4gIC5jYXJkOmhvdmVyOmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuY2FyZDpob3ZlciAuaW5mbyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG4gIC5jYXJkOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuY2FyZCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIC5jYXJkIC5pbmZvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIC5jYXJkIC5pbmZvIGgxIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuICAuY2FyZCAuaW5mbyBwIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG4gIC5jYXJkIC5pbmZvIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICB9XHJcbiAgLmNhcmQgLmluZm8gYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVke1xyXG4gICAgYmFja2dyb3VuZDpibGFjaztcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udDogYm9sZCAxNnB4IHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiA1NXB4IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIsXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcbiBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGVmdHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgaDN7XHJcbiAgICBjb2xvcjogICNmZmZmZmY7XHJcbiAgICBmb250OiBub3JtYWwgMzZweCAnT3BlbiBTYW5zJywgY3Vyc2l2ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCBoMyBzcGFue1xyXG4gICAgY29sb3I6ICBvcmFuZ2VcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtze1xyXG4gICAgY29sb3I6ICAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMTJweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyBhe1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1uYW1le1xyXG4gICAgY29sb3I6ICAjMjIyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVye1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMzMzM4M2I7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIC8qIC5mb290ZXItY2VudGVyIGgzXHJcbiAge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH0gKi9cclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGkuZmEtZW52ZWxvcGV7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCBzcGFue1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OjI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCBhe1xyXG4gICAgY29sb3I6ICBsaWdodHNlYWdyZWVuO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOztcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtzIGE6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwifFwiO1xyXG4gICAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgLmxpbmstMTpiZWZvcmUge1xyXG4gICAgY29udGVudDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXR7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAgIzkyOTk5ZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LWFib3V0IHNwYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAgI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcbiAgXHJcbiAgICAuZm9vdGVyLWRpc3RyaWJ1dGVke1xyXG4gICAgICBmb250OiBib2xkIDE0cHggc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICBcclxuICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4gICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlcixcclxuICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1yaWdodHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLXJpZ2h0IGgyIFxyXG4gICAge1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICBcclxuICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgaXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/hotel-food/hotel-food.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/hotel-food/hotel-food.component.ts ***!
    \****************************************************/

  /*! exports provided: HotelFoodComponent */

  /***/
  function srcAppHotelFoodHotelFoodComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelFoodComponent", function () {
      return HotelFoodComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../food */
    "./src/app/food.ts");
    /* harmony import */


    var _user_food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-food.service */
    "./src/app/user-food.service.ts");

    var HotelFoodComponent = /*#__PURE__*/function () {
      function HotelFoodComponent(service) {
        _classCallCheck(this, HotelFoodComponent);

        this.service = service;
        this.food = new _food__WEBPACK_IMPORTED_MODULE_2__["Food"]("", "", 0);
      }

      _createClass(HotelFoodComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUrl",
        value: function getUrl() {
          return "url('../../assets/images/eat5.jpg')";
        }
      }, {
        key: "getUrl1",
        value: function getUrl1() {
          return "url('../../assets/images/eat9.jpg')";
        }
      }, {
        key: "getUrl2",
        value: function getUrl2() {
          return "url('../../assets/images/eat2.jpg')";
        }
      }, {
        key: "booktable",
        value: function booktable() {
          var _this = this;

          var response = this.service.doReservation(this.food);
          response.subscribe(function (data) {
            return _this.message = data;
          });
        }
      }]);

      return HotelFoodComponent;
    }();

    HotelFoodComponent.ctorParameters = function () {
      return [{
        type: _user_food_service__WEBPACK_IMPORTED_MODULE_3__["UserFoodService"]
      }];
    };

    HotelFoodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotel-food',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotel-food.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotel-food/hotel-food.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotel-food.component.css */
      "./src/app/hotel-food/hotel-food.component.css")).default]
    })], HotelFoodComponent);
    /***/
  },

  /***/
  "./src/app/hotelabout/hotelabout.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/hotelabout/hotelabout.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotelaboutHotelaboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg \r\n{\r\n  background-color: lightpink;\r\n}\r\n.wrap, .row, .tab-row {\r\n    margin: 3px 89px;\r\n    max-width: 1000px;\r\n   }\r\n.nav {\r\n    position: fixed;\r\n    background-color: black;\r\n    z-index: 3;\r\n    height: 50px;\r\n    width: 100%;\r\n    -webkit-transition: 300ms ease;\r\n    transition: 300ms ease;\r\n   }\r\n.brand {\r\n     display: block;\r\n    float: left;\r\n    height: 40px;\r\n    color: orange;\r\n    padding: 7px;\r\n    margin-left: 2px;\r\n   \r\n    /* float: left;\r\n    line-height: 60px;\r\n    \r\n    color: white;\r\n    font-weight: 500;\r\n    padding-left: 1rem;\r\n     */\r\n   }\r\n.brand span {\r\n     display: block;\r\n    margin-left: 30px;\r\n    height: 40px;\r\n    line-height: 24px;\r\n    text-decoration: none;\r\n    color: orange;\r\n    padding: 0 1em;\r\n   }\r\n.top-menu {\r\n    display: none;\r\n    position: relative;\r\n    float: right;\r\n    -webkit-transition: 200ms ease;\r\n    transition: 200ms ease;\r\n    font-weight: 300;\r\n    height: 40px;\r\n   }\r\n@media screen and (min-width: 640px) {\r\n    .top-menu {\r\n      display: block;\r\n    }\r\n   }\r\n.top-menu li {\r\n    display: block;\r\n    float: left;\r\n    height: 40px;\r\n    color: white;\r\n    padding: 6px 12px;\r\n   }\r\n.top-menu li a {\r\n    display: block;\r\n    margin-left: 250px;\r\n    height: 40px;\r\n    line-height: 20px;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    /* padding: 1em; */\r\n   }\r\n.scroll {\r\n    background: white;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\r\n   }\r\n.scroll .top-menu li a, .scroll .brand {\r\n    color: black;\r\n   }\r\n.scroll .hamburger-line {\r\n    background: #000;\r\n   }\r\n.hero {\r\n    position: relative;\r\n    z-index: 1;\r\n    height: 100vh;\r\n    max-height: 1080px;\r\n    /* background-image: url(2.jpg); */\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    color: #fff;\r\n    display: table;\r\n    width: 100%;\r\n    text-align: center;\r\n    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\r\n   }\r\n.hero:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    /*background: -webkit-gradient(linear, left top, right bottom, from(#28e), to(#e14));\r\n    background: linear-gradient(to bottom right, #28e, #e14);*/\r\n    opacity: 0.9;\r\n    z-index: -1;\r\n   }\r\n.hero h1 {\r\n    font-size: 4em;\r\n    margin-bottom: 1rem;\r\n   }\r\n.hero p {\r\n    font-size: 2em;\r\n    max-width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-weight: 300;\r\n   }\r\n.hero .content {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n   }\r\n.hero .content h1\r\n   {\r\n     text-shadow: 3px 2px black;\r\n   }\r\nh1, h2 {\r\n    margin: 1em 0;\r\n   }\r\nh2 {\r\n    font-size: 2rem;\r\n    line-height: 0.5;\r\n   }\r\n.pr \r\n   {\r\n     text-align: center;\r\n     color: orange;\r\n     font-size: 40px;;\r\n   }\r\n.para \r\n   {\r\n     /* text-align: center; */\r\n     font-size: 20px;\r\n     margin-left: 120px;\r\n     margin-right: 120px;\r\n   }\r\n.serv\r\n   {\r\n     text-align: center;\r\n   }\r\nh4\r\n    {\r\n      text-align: center;\r\n      font-size: 40px;\r\n      color:blue;\r\n    }\r\n.im {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));\r\n    grid-gap: 1rem;\r\n  }\r\n.im img {\r\n    height: 15rem;\r\n    width: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n  }\r\n.footer-distributed{\r\n    background:black;\r\n    opacity: 0.9;\r\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    text-align: left;\r\n    font: bold 16px sans-serif;\r\n    padding: 55px 50px;\r\n  }\r\n.footer-distributed .footer-left,\r\n  .footer-distributed .footer-center,\r\n  .footer-distributed .footer-right{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n  }\r\n.footer-distributed .footer-left{\r\n    width: 40%;\r\n  }\r\n.footer-distributed h3{\r\n    color:  #ffffff;\r\n    font: normal 36px 'Open Sans', cursive;\r\n    margin: 0;\r\n  }\r\n.footer-distributed h3 span{\r\n    color:  orange\r\n  }\r\n.footer-distributed .footer-links{\r\n    color:  #ffffff;\r\n    margin: 20px 0 12px;\r\n    padding: 0;\r\n  }\r\n.footer-distributed .footer-links a{\r\n    display:inline-block;\r\n    line-height: 1.8;\r\n    font-weight:400;\r\n    text-decoration: none;\r\n    color:  inherit;\r\n  }\r\n.footer-distributed .footer-company-name{\r\n    color:  #222;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    margin: 0;\r\n  }\r\n.footer-distributed .footer-center{\r\n    width: 35%;\r\n  }\r\n.footer-distributed .footer-center i{\r\n    background-color:  #33383b;\r\n    color: #ffffff;\r\n    font-size: 25px;\r\n    width: 38px;\r\n    height: 38px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    line-height: 42px;\r\n    margin: 10px 15px;\r\n    vertical-align: middle;\r\n  }\r\n/* .footer-center h3\r\n  {\r\n    color: black;\r\n  } */\r\n.footer-distributed .footer-center i.fa-envelope{\r\n    font-size: 17px;\r\n    line-height: 38px;\r\n  }\r\n.footer-distributed .footer-center p{\r\n    display: inline-block;\r\n    color: #ffffff;\r\n    font-weight:400;\r\n    vertical-align: middle;\r\n    margin:0;\r\n  }\r\n.footer-distributed .footer-center p span{\r\n    display:block;\r\n    font-weight: normal;\r\n    font-size:14px;\r\n    line-height:2;\r\n  }\r\n.footer-distributed .footer-center p a{\r\n    color:  lightseagreen;\r\n    text-decoration: none;;\r\n  }\r\n.footer-distributed .footer-links a:before {\r\n    content: \"|\";\r\n    font-weight:300;\r\n    font-size: 20px;\r\n    left: 0;\r\n    color: #fff;\r\n    display: inline-block;\r\n    padding-right: 5px;\r\n  }\r\n.footer-distributed .footer-links .link-1:before {\r\n    content: none;\r\n  }\r\n.footer-distributed .footer-right{\r\n    width: 20%;\r\n  }\r\n.footer-distributed .footer-company-about{\r\n    line-height: 20px;\r\n    color:  #92999f;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    margin: 0;\r\n  }\r\n.footer-distributed .footer-company-about span{\r\n    display: block;\r\n    color:  #ffffff;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    margin-bottom: 20px;\r\n  }\r\n@media (max-width: 880px) {\r\n  \r\n    .footer-distributed{\r\n      font: bold 14px sans-serif;\r\n    }\r\n  \r\n    .footer-distributed .footer-left,\r\n    .footer-distributed .footer-center,\r\n    .footer-distributed .footer-right{\r\n      display: block;\r\n      width: 100%;\r\n      margin-bottom: 40px;\r\n      text-align: center;\r\n    }\r\n    .footer-right h2 \r\n    {\r\n      color:black;\r\n    }\r\n  \r\n    .footer-distributed .footer-center i{\r\n      margin-left: 0;\r\n    }\r\n  \r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWxhYm91dC9ob3RlbGFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsMkJBQTJCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0dBQ2xCO0FBRUE7SUFDQyxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4QjtJQUM5QixzQkFBc0I7R0FDdkI7QUFFQTtLQUNFLGNBQWM7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCOztJQUVoQjs7Ozs7O01BTUU7R0FDSDtBQUNBO0tBQ0UsY0FBYztJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsY0FBYztHQUNmO0FBRUE7SUFDQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixZQUFZO0dBQ2I7QUFDQTtJQUNDO01BQ0UsY0FBYztJQUNoQjtHQUNEO0FBQ0E7SUFDQyxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0dBQ2xCO0FBQ0E7SUFDQyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7R0FDbkI7QUFFQTtJQUNDLGlCQUFpQjtJQUNqQix3Q0FBd0M7R0FDekM7QUFDQTtJQUNDLFlBQVk7R0FDYjtBQUNBO0lBQ0MsZ0JBQWdCO0dBQ2pCO0FBRUE7SUFDQyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxjQUFj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ZWxhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIFxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xyXG59XHJcbi53cmFwLCAucm93LCAudGFiLXJvdyB7XHJcbiAgICBtYXJnaW46IDNweCA4OXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5uYXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuYnJhbmQge1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgXHJcbiAgICAvKiBmbG9hdDogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICovXHJcbiAgIH1cclxuICAgLmJyYW5kIHNwYW4ge1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxuICAgfVxyXG4gICBcclxuICAgLnRvcC1tZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDIwMG1zIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgfVxyXG4gICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgLnRvcC1tZW51IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgIH1cclxuICAgLnRvcC1tZW51IGxpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgfVxyXG4gICAudG9wLW1lbnUgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvKiBwYWRkaW5nOiAxZW07ICovXHJcbiAgIH1cclxuICBcclxuICAgLnNjcm9sbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgIH1cclxuICAgLnNjcm9sbCAudG9wLW1lbnUgbGkgYSwgLnNjcm9sbCAuYnJhbmQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICB9XHJcbiAgIC5zY3JvbGwgLmhhbWJ1cmdlci1saW5lIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgIH1cclxuXHJcbiAgIC5oZXJvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LWhlaWdodDogMTA4MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKDIuanBnKTsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgfVxyXG4gICAuaGVybzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgLypiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSgjMjhlKSwgdG8oI2UxNCkpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzI4ZSwgI2UxNCk7Ki9cclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICB9XHJcbiAgIC5oZXJvIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgfVxyXG4gICAuaGVybyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgIH1cclxuICAgLmhlcm8gLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5oZXJvIC5jb250ZW50IGgxXHJcbiAgIHtcclxuICAgICB0ZXh0LXNoYWRvdzogM3B4IDJweCBibGFjaztcclxuICAgfVxyXG4gICBcclxuICAgXHJcbiAgIGgxLCBoMiB7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICB9XHJcbiAgIFxyXG4gICBoMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMC41O1xyXG4gICB9XHJcbiAgIFxyXG4gICAucHIgXHJcbiAgIHtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgY29sb3I6IG9yYW5nZTtcclxuICAgICBmb250LXNpemU6IDQwcHg7O1xyXG4gICB9XHJcbiAgIC5wYXJhIFxyXG4gICB7XHJcbiAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICBtYXJnaW4tbGVmdDogMTIwcHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAxMjBweDtcclxuICAgfVxyXG5cclxuICAgLnNlcnZcclxuICAge1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgfVxyXG4gICAgaDRcclxuICAgIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIGNvbG9yOmJsdWU7XHJcbiAgICB9XHJcbiAgIC5pbSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTVyZW0sIDFmcikpO1xyXG4gICAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgfVxyXG4gIC5pbSBpbWcge1xyXG4gICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gICAuZm9vdGVyLWRpc3RyaWJ1dGVke1xyXG4gICAgYmFja2dyb3VuZDpibGFjaztcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udDogYm9sZCAxNnB4IHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiA1NXB4IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIsXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcbiBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGVmdHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgaDN7XHJcbiAgICBjb2xvcjogICNmZmZmZmY7XHJcbiAgICBmb250OiBub3JtYWwgMzZweCAnT3BlbiBTYW5zJywgY3Vyc2l2ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCBoMyBzcGFue1xyXG4gICAgY29sb3I6ICBvcmFuZ2VcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtze1xyXG4gICAgY29sb3I6ICAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMTJweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyBhe1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1uYW1le1xyXG4gICAgY29sb3I6ICAjMjIyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVye1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMzMzM4M2I7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIC8qIC5mb290ZXItY2VudGVyIGgzXHJcbiAge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH0gKi9cclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGkuZmEtZW52ZWxvcGV7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCBzcGFue1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OjI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCBhe1xyXG4gICAgY29sb3I6ICBsaWdodHNlYWdyZWVuO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOztcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtzIGE6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwifFwiO1xyXG4gICAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgLmxpbmstMTpiZWZvcmUge1xyXG4gICAgY29udGVudDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXR7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAgIzkyOTk5ZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LWFib3V0IHNwYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAgI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcbiAgXHJcbiAgICAuZm9vdGVyLWRpc3RyaWJ1dGVke1xyXG4gICAgICBmb250OiBib2xkIDE0cHggc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICBcclxuICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4gICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlcixcclxuICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1yaWdodHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLXJpZ2h0IGgyIFxyXG4gICAge1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICBcclxuICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgaXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/hotelabout/hotelabout.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/hotelabout/hotelabout.component.ts ***!
    \****************************************************/

  /*! exports provided: HotelaboutComponent */

  /***/
  function srcAppHotelaboutHotelaboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelaboutComponent", function () {
      return HotelaboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HotelaboutComponent = /*#__PURE__*/function () {
      function HotelaboutComponent() {
        _classCallCheck(this, HotelaboutComponent);
      }

      _createClass(HotelaboutComponent, [{
        key: "getUrl1",
        value: function getUrl1() {
          return "url('../../assets/images/1.jpg')";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HotelaboutComponent;
    }();

    HotelaboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotelabout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotelabout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelabout/hotelabout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotelabout.component.css */
      "./src/app/hotelabout/hotelabout.component.css")).default]
    })], HotelaboutComponent);
    /***/
  },

  /***/
  "./src/app/hotelcontact/hotelcontact.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/hotelcontact/hotelcontact.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotelcontactHotelcontactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrap, .row, .tab-row {\r\n  margin: 3px 89px;\r\n  max-width: 1000px;\r\n }\r\n \r\n .nav {\r\n  position: fixed;\r\n  background-color: black;\r\n  z-index: 3;\r\n  height: 50px;\r\n  width: 100%;\r\n  -webkit-transition: 300ms ease;\r\n  transition: 300ms ease;\r\n }\r\n \r\n .brand {\r\n   display: block;\r\n  float: left;\r\n  height: 40px;\r\n  color: orange;\r\n  padding: 7px;\r\n  margin-left: 2px;\r\n \r\n  /* float: left;\r\n  line-height: 60px;\r\n  \r\n  color: white;\r\n  font-weight: 500;\r\n  padding-left: 1rem;\r\n   */\r\n }\r\n \r\n .brand span {\r\n   display: block;\r\n  margin-left: 30px;\r\n  height: 40px;\r\n  line-height: 24px;\r\n  text-decoration: none;\r\n  color: orange;\r\n  padding: 0 1em;\r\n }\r\n \r\n .top-menu {\r\n  display: none;\r\n  position: relative;\r\n  float: right;\r\n  -webkit-transition: 200ms ease;\r\n  transition: 200ms ease;\r\n  font-weight: 300;\r\n  height: 40px;\r\n }\r\n \r\n @media screen and (min-width: 640px) {\r\n  .top-menu {\r\n    display: block;\r\n  }\r\n }\r\n \r\n .top-menu li {\r\n  display: block;\r\n  float: left;\r\n  height: 40px;\r\n  color: white;\r\n  padding: 6px 12px;\r\n }\r\n \r\n .top-menu li a {\r\n  display: block;\r\n  margin-left: 250px;\r\n  height: 40px;\r\n  line-height: 20px;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  /* padding: 1em; */\r\n }\r\n \r\n .scroll {\r\n  background: white;\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\r\n }\r\n \r\n .scroll .top-menu li a, .scroll .brand {\r\n  color: black;\r\n }\r\n \r\n .scroll .hamburger-line {\r\n  background: #000;\r\n }\r\n \r\n .hero {\r\n    position: relative;\r\n    z-index: 1;\r\n    height: 100vh;\r\n    max-height: 1080px;\r\n    /* background-image: url(2.jpg); */\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    color: #fff;\r\n    display: table;\r\n    width: 100%;\r\n    text-align: center;\r\n    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\r\n   }\r\n \r\n .hero:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    /*background: -webkit-gradient(linear, left top, right bottom, from(#28e), to(#e14));\r\n    background: linear-gradient(to bottom right, #28e, #e14);*/\r\n    opacity: 0.9;\r\n    z-index: -1;\r\n   }\r\n \r\n .hero h1 {\r\n    font-size: 4em;\r\n    margin-bottom: 1rem;\r\n   }\r\n \r\n .hero p {\r\n    font-size: 2em;\r\n    max-width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-weight: 300;\r\n   }\r\n \r\n .hero .content {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n   }\r\n \r\n .hero .content h1\r\n   {\r\n     text-shadow: 3px 2px black;\r\n   }\r\n \r\n h1, h2 {\r\n    margin: 1em 0;\r\n   }\r\n \r\n h2 {\r\n    font-size: 2rem;\r\n    line-height: 0.5;\r\n   }\r\n \r\n a {\r\n    color: #e14;\r\n    text-decoration: none;\r\n   }\r\n \r\n a:hover {\r\n    text-decoration: underline;\r\n   }\r\n \r\n .row:after, .tab-row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n   }\r\n \r\n .row, .tab-row {\r\n    display: block;\r\n   }\r\n \r\n .tab-row {\r\n    display: table;\r\n    height: 100%;\r\n    vertical-align: middle;\r\n   }\r\n \r\n .main {\r\n        text-align: center;\r\n   \r\n   }\r\n \r\n .col-12\r\n   {\r\n       text-align: center;\r\n   }\r\n \r\n /* h3\r\n   {\r\n       text-align: center;\r\n   } */\r\n \r\n .c\r\n  {\r\n      text-align: center;\r\n  }\r\n \r\n .demo\r\n   {\r\n    margin-left: 250px;\r\n   }\r\n \r\n .align-center {\r\n     text-align: center;\r\n   }\r\n \r\n .row {\r\n     margin: -20px 0;\r\n   }\r\n \r\n .row:after {\r\n     content: \"\";\r\n     display: table;\r\n     clear: both;\r\n   }\r\n \r\n .row .col {\r\n     padding: 0 20px;\r\n     float: left;\r\n     box-sizing: border-box;\r\n   }\r\n \r\n .row .col.x-50 {\r\n     width: 50%;\r\n   }\r\n \r\n .row .col.x-100 {\r\n     width: 100%;\r\n   }\r\n \r\n .content-wrapper {\r\n     min-height: 100%;\r\n     position: relative;\r\n   }\r\n \r\n .get-in-touch {\r\n     max-width: 650px;\r\n     margin: 0 auto;\r\n     position: relative;\r\n     top: 50%;\r\n     -webkit-transform: translateY(-50%);\r\n             transform: translateY(-50%);\r\n   }\r\n \r\n .get-in-touch .title {\r\n     text-align: center;\r\n     font-family: Raleway, sans-serif;\r\n     text-transform: uppercase;\r\n     letter-spacing: 3px;\r\n     font-size: 36px;\r\n     line-height: 48px;\r\n     padding-bottom: 48px;\r\n   }\r\n \r\n .contact-form .form-field {\r\n     position: relative;\r\n     margin: 32px 0;\r\n   }\r\n \r\n .contact-form .input-text {\r\n     display: block;\r\n     width: 100%;\r\n     height: 36px;\r\n     border-width: 0 0 2px 0;\r\n     border-color: #000;\r\n     font-family: Lusitana, serif;\r\n     font-size: 18px;\r\n     line-height: 26px;\r\n     font-weight: 400;\r\n   }\r\n \r\n .contact-form .input-text:focus {\r\n     outline: none;\r\n   }\r\n \r\n .contact-form .input-text:focus + .label, .contact-form .input-text.not-empty + .label {\r\n     -webkit-transform: translateY(-24px);\r\n             transform: translateY(-24px);\r\n   }\r\n \r\n .contact-form .label {\r\n     position: absolute;\r\n     left: 20px;\r\n     bottom: 11px;\r\n     font-family: Lusitana, serif;\r\n     font-size: 18px;\r\n     line-height: 26px;\r\n     font-weight: 400;\r\n     color: #888;\r\n     cursor: text;\r\n     -webkit-transition: -webkit-transform .2s ease-in-out;\r\n     transition: -webkit-transform .2s ease-in-out;\r\n     transition: transform .2s ease-in-out;\r\n     transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;\r\n   }\r\n \r\n .contact-form .submit-btn {\r\n     display: inline-block;\r\n     background-color: #000;\r\n     color: #fff;\r\n     font-family: Raleway, sans-serif;\r\n     text-transform: uppercase;\r\n     letter-spacing: 2px;\r\n     font-size: 16px;\r\n     line-height: 24px;\r\n     padding: 8px 16px;\r\n     border: none;\r\n     cursor: pointer;\r\n   }\r\n \r\n .note {\r\n     position: absolute;\r\n     left: 0;\r\n     bottom: 10px;\r\n     width: 100%;\r\n     text-align: center;\r\n     font-family: Lusitana, serif;\r\n     font-size: 16px;\r\n     line-height: 21px;\r\n   }\r\n \r\n .note .link {\r\n     color: #888;\r\n     text-decoration: none;\r\n   }\r\n \r\n .note .link:hover {\r\n     text-decoration: underline;\r\n   }\r\n \r\n .footer-distributed{\r\n  background:black;\r\n  opacity: 0.9;\r\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  text-align: left;\r\n  font: bold 16px sans-serif;\r\n  padding: 55px 50px;\r\n}\r\n \r\n .footer-distributed .footer-left,\r\n.footer-distributed .footer-center,\r\n.footer-distributed .footer-right{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n \r\n .footer-distributed .footer-left{\r\n  width: 40%;\r\n}\r\n \r\n .footer-distributed h3{\r\n  color:  #ffffff;\r\n  font: normal 36px 'Open Sans', cursive;\r\n  margin: 0;\r\n}\r\n \r\n .footer-distributed h3 span{\r\n  color:  orange\r\n}\r\n \r\n .footer-distributed .footer-links{\r\n  color:  #ffffff;\r\n  margin: 20px 0 12px;\r\n  padding: 0;\r\n}\r\n \r\n .footer-distributed .footer-links a{\r\n  display:inline-block;\r\n  line-height: 1.8;\r\n  font-weight:400;\r\n  text-decoration: none;\r\n  color:  inherit;\r\n}\r\n \r\n .footer-distributed .footer-company-name{\r\n  color:  #222;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0;\r\n}\r\n \r\n .footer-distributed .footer-center{\r\n  width: 35%;\r\n}\r\n \r\n .footer-distributed .footer-center i{\r\n  background-color:  #33383b;\r\n  color: #ffffff;\r\n  font-size: 25px;\r\n  width: 38px;\r\n  height: 38px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  line-height: 42px;\r\n  margin: 10px 15px;\r\n  vertical-align: middle;\r\n}\r\n \r\n /* .footer-center h3\r\n{\r\n  color: black;\r\n} */\r\n \r\n .footer-distributed .footer-center i.fa-envelope{\r\n  font-size: 17px;\r\n  line-height: 38px;\r\n}\r\n \r\n .footer-distributed .footer-center p{\r\n  display: inline-block;\r\n  color: #ffffff;\r\n  font-weight:400;\r\n  vertical-align: middle;\r\n  margin:0;\r\n}\r\n \r\n .footer-distributed .footer-center p span{\r\n  display:block;\r\n  font-weight: normal;\r\n  font-size:14px;\r\n  line-height:2;\r\n}\r\n \r\n .footer-distributed .footer-center p a{\r\n  color:  lightseagreen;\r\n  text-decoration: none;;\r\n}\r\n \r\n .footer-distributed .footer-links a:before {\r\n  content: \"|\";\r\n  font-weight:300;\r\n  font-size: 20px;\r\n  left: 0;\r\n  color: #fff;\r\n  display: inline-block;\r\n  padding-right: 5px;\r\n}\r\n \r\n .footer-distributed .footer-links .link-1:before {\r\n  content: none;\r\n}\r\n \r\n .footer-distributed .footer-right{\r\n  width: 20%;\r\n}\r\n \r\n .footer-distributed .footer-company-about{\r\n  line-height: 20px;\r\n  color:  #92999f;\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  margin: 0;\r\n}\r\n \r\n .footer-distributed .footer-company-about span{\r\n  display: block;\r\n  color:  #ffffff;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  margin-bottom: 20px;\r\n}\r\n \r\n @media (max-width: 880px) {\r\n\r\n  .footer-distributed{\r\n    font: bold 14px sans-serif;\r\n  }\r\n\r\n  .footer-distributed .footer-left,\r\n  .footer-distributed .footer-center,\r\n  .footer-distributed .footer-right{\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 40px;\r\n    text-align: center;\r\n  }\r\n  .footer-right h2 \r\n  {\r\n    color:black;\r\n  }\r\n\r\n  .footer-distributed .footer-center i{\r\n    margin-left: 0;\r\n  }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWxjb250YWN0L2hvdGVsY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLHNCQUFzQjtDQUN2Qjs7Q0FFQTtHQUNFLGNBQWM7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCOztFQUVoQjs7Ozs7O0lBTUU7Q0FDSDs7Q0FDQTtHQUNFLGNBQWM7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7Q0FDQTtFQUNDO0lBQ0UsY0FBYztFQUNoQjtDQUNEOztDQUNBO0VBQ0MsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7Q0FDQTtFQUNDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGlCQUFpQjtFQUNqQix3Q0FBd0M7Q0FDekM7O0NBQ0E7RUFDQyxZQUFZO0NBQ2I7O0NBQ0E7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBR0U7SUFDQyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FB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QUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0NBSUE7O0VBRUU7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7OztJQUdFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtFQUNBOztJQUVFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9ob3RlbGNvbnRhY3QvaG90ZWxjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCwgLnJvdywgLnRhYi1yb3cge1xyXG4gIG1hcmdpbjogM3B4IDg5cHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiB9XHJcbiBcclxuIC5uYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB6LWluZGV4OiAzO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZTtcclxuIH1cclxuIFxyXG4gLmJyYW5kIHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiBcclxuICAvKiBmbG9hdDogbGVmdDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICovXHJcbiB9XHJcbiAuYnJhbmQgc3BhbiB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxuICBwYWRkaW5nOiAwIDFlbTtcclxuIH1cclxuIFxyXG4gLnRvcC1tZW51IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiB9XHJcbiBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gIC50b3AtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiB9XHJcbiAudG9wLW1lbnUgbGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiB9XHJcbiAudG9wLW1lbnUgbGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLyogcGFkZGluZzogMWVtOyAqL1xyXG4gfVxyXG5cclxuIC5zY3JvbGwge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiB9XHJcbiAuc2Nyb2xsIC50b3AtbWVudSBsaSBhLCAuc2Nyb2xsIC5icmFuZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG4gLnNjcm9sbCAuaGFtYnVyZ2VyLWxpbmUge1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiB9XHJcblxyXG4gICBcclxuICAgLmhlcm8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDgwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoMi5qcGcpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICB9XHJcbiAgIC5oZXJvOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICAvKmJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKCMyOGUpLCB0bygjZTE0KSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMjhlLCAjZTE0KTsqL1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgIH1cclxuICAgLmhlcm8gaDEge1xyXG4gICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICB9XHJcbiAgIC5oZXJvIHAge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgfVxyXG4gICAuaGVybyAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgfVxyXG4gICBcclxuICAgLmhlcm8gLmNvbnRlbnQgaDFcclxuICAge1xyXG4gICAgIHRleHQtc2hhZG93OiAzcHggMnB4IGJsYWNrO1xyXG4gICB9XHJcbiAgIFxyXG4gICBcclxuICAgaDEsIGgyIHtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgIH1cclxuICAgXHJcbiAgIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbiAgIH1cclxuICAgXHJcbiAgIGEge1xyXG4gICAgY29sb3I6ICNlMTQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIH1cclxuICAgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgfVxyXG4gICBcclxuICAgLnJvdzphZnRlciwgLnRhYi1yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5yb3csIC50YWItcm93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcbiAgIFxyXG4gICAudGFiLXJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgIH1cclxuICAgXHJcbiAgICAubWFpbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxuICAgfSBcclxuICAgLmNvbC0xMlxyXG4gICB7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIH1cclxuICAgLyogaDNcclxuICAge1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB9ICovXHJcbiAgLmNcclxuICB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICAuZGVtb1xyXG4gICB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgIH1cclxuICBcclxuICAgLmFsaWduLWNlbnRlciB7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB9XHJcblxyXG4gICAucm93IHtcclxuICAgICBtYXJnaW46IC0yMHB4IDA7XHJcbiAgIH1cclxuICAgLnJvdzphZnRlciB7XHJcbiAgICAgY29udGVudDogXCJcIjtcclxuICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICBjbGVhcjogYm90aDtcclxuICAgfVxyXG4gICAucm93IC5jb2wge1xyXG4gICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICB9XHJcbiAgIC5yb3cgLmNvbC54LTUwIHtcclxuICAgICB3aWR0aDogNTAlO1xyXG4gICB9XHJcbiAgIC5yb3cgLmNvbC54LTEwMCB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuZ2V0LWluLXRvdWNoIHtcclxuICAgICBtYXgtd2lkdGg6IDY1MHB4O1xyXG4gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICB0b3A6IDUwJTtcclxuICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgfVxyXG4gICAuZ2V0LWluLXRvdWNoIC50aXRsZSB7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDQ4cHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5jb250YWN0LWZvcm0gLmZvcm0tZmllbGQge1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBtYXJnaW46IDMycHggMDtcclxuICAgfVxyXG4gICAuY29udGFjdC1mb3JtIC5pbnB1dC10ZXh0IHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XHJcbiAgICAgYm9yZGVyLWNvbG9yOiAjMDAwO1xyXG4gICAgIGZvbnQtZmFtaWx5OiBMdXNpdGFuYSwgc2VyaWY7XHJcbiAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgIH1cclxuICAgLmNvbnRhY3QtZm9ybSAuaW5wdXQtdGV4dDpmb2N1cyB7XHJcbiAgICAgb3V0bGluZTogbm9uZTtcclxuICAgfVxyXG4gICAuY29udGFjdC1mb3JtIC5pbnB1dC10ZXh0OmZvY3VzICsgLmxhYmVsLCAuY29udGFjdC1mb3JtIC5pbnB1dC10ZXh0Lm5vdC1lbXB0eSArIC5sYWJlbCB7XHJcbiAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI0cHgpO1xyXG4gICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNHB4KTtcclxuICAgfVxyXG4gICAuY29udGFjdC1mb3JtIC5sYWJlbCB7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgYm90dG9tOiAxMXB4O1xyXG4gICAgIGZvbnQtZmFtaWx5OiBMdXNpdGFuYSwgc2VyaWY7XHJcbiAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcclxuICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcclxuICAgfVxyXG4gICAuY29udGFjdC1mb3JtIC5zdWJtaXQtYnRuIHtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICBjb2xvcjogI2ZmZjtcclxuICAgICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgIGJvcmRlcjogbm9uZTtcclxuICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5ub3RlIHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgbGVmdDogMDtcclxuICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGZvbnQtZmFtaWx5OiBMdXNpdGFuYSwgc2VyaWY7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICB9XHJcbiAgIC5ub3RlIC5saW5rIHtcclxuICAgICBjb2xvcjogIzg4ODtcclxuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIH1cclxuICAgLm5vdGUgLmxpbms6aG92ZXIge1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICB9XHJcblxyXG4gICBcclxuLmZvb3Rlci1kaXN0cmlidXRlZHtcclxuICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250OiBib2xkIDE2cHggc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiA1NXB4IDUwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyLFxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHR7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0e1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIGgze1xyXG4gIGNvbG9yOiAgI2ZmZmZmZjtcclxuICBmb250OiBub3JtYWwgMzZweCAnT3BlbiBTYW5zJywgY3Vyc2l2ZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgaDMgc3BhbntcclxuICBjb2xvcjogIG9yYW5nZVxyXG59XHJcblxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtze1xyXG4gIGNvbG9yOiAgI2ZmZmZmZjtcclxuICBtYXJnaW46IDIwcHggMCAxMnB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyBhe1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIGluaGVyaXQ7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LW5hbWV7XHJcbiAgY29sb3I6ICAjMjIyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXJ7XHJcbiAgd2lkdGg6IDM1JTtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjMzMzODNiO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB3aWR0aDogMzhweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNDJweDtcclxuICBtYXJnaW46IDEwcHggMTVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi8qIC5mb290ZXItY2VudGVyIGgzXHJcbntcclxuICBjb2xvcjogYmxhY2s7XHJcbn0gKi9cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpLmZhLWVudmVsb3Ble1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMzhweDtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDo0MDA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW46MDtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwIHNwYW57XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjI7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCBhe1xyXG4gIGNvbG9yOiAgbGlnaHRzZWFncmVlbjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7O1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwifFwiO1xyXG4gIGZvbnQtd2VpZ2h0OjMwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGVmdDogMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgLmxpbmstMTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHR7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXR7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICAjOTI5OTlmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXQgc3BhbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcblxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWR7XHJcbiAgICBmb250OiBib2xkIDE0cHggc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIsXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mb290ZXItcmlnaHQgaDIgXHJcbiAge1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGl7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/hotelcontact/hotelcontact.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/hotelcontact/hotelcontact.component.ts ***!
    \********************************************************/

  /*! exports provided: HotelcontactComponent */

  /***/
  function srcAppHotelcontactHotelcontactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelcontactComponent", function () {
      return HotelcontactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../contact */
    "./src/app/contact.ts");
    /* harmony import */


    var _user_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-contact.service */
    "./src/app/user-contact.service.ts");

    var HotelcontactComponent = /*#__PURE__*/function () {
      function HotelcontactComponent(service) {
        _classCallCheck(this, HotelcontactComponent);

        this.service = service;
        this.contact = new _contact__WEBPACK_IMPORTED_MODULE_2__["Contact"]("", "", "");
      }

      _createClass(HotelcontactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUrl1",
        value: function getUrl1() {
          return "url('../../assets/images/contact.jpg')";
        }
      }, {
        key: "cont",
        value: function cont() {
          var _this2 = this;

          var response = this.service.doContact(this.contact);
          response.subscribe(function (data) {
            return _this2.message = data;
          });
        }
      }]);

      return HotelcontactComponent;
    }();

    HotelcontactComponent.ctorParameters = function () {
      return [{
        type: _user_contact_service__WEBPACK_IMPORTED_MODULE_3__["UserContactService"]
      }];
    };

    HotelcontactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotelcontact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotelcontact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelcontact/hotelcontact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotelcontact.component.css */
      "./src/app/hotelcontact/hotelcontact.component.css")).default]
    })], HotelcontactComponent);
    /***/
  },

  /***/
  "./src/app/hotelhome/hotelhome.component.css":
  /*!***************************************************!*\
    !*** ./src/app/hotelhome/hotelhome.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotelhomeHotelhomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrap, .row, .tab-row {\r\n  margin: 3px 89px;\r\n  max-width: 1000px;\r\n }\r\n \r\n .nav {\r\n  position: fixed;\r\n  background-color: black;\r\n  z-index: 3;\r\n  height: 50px;\r\n  width: 100%;\r\n  -webkit-transition: 300ms ease;\r\n  transition: 300ms ease;\r\n }\r\n \r\n .brand {\r\n   display: block;\r\n  float: left;\r\n  height: 40px;\r\n  color: orange;\r\n  padding: 7px;\r\n  margin-left: 2px;\r\n \r\n  /* float: left;\r\n  line-height: 60px;\r\n  \r\n  color: white;\r\n  font-weight: 500;\r\n  padding-left: 1rem;\r\n   */\r\n }\r\n \r\n .brand span {\r\n   display: block;\r\n  margin-left: 30px;\r\n  height: 40px;\r\n  line-height: 24px;\r\n  text-decoration: none;\r\n  color: orange;\r\n  padding: 0 1em;\r\n }\r\n \r\n .top-menu {\r\n  display: none;\r\n  position: relative;\r\n  float: right;\r\n  -webkit-transition: 200ms ease;\r\n  transition: 200ms ease;\r\n  font-weight: 300;\r\n  height: 40px;\r\n }\r\n \r\n @media screen and (min-width: 640px) {\r\n  .top-menu {\r\n    display: block;\r\n  }\r\n }\r\n \r\n .top-menu li {\r\n  display: block;\r\n  float: left;\r\n  height: 40px;\r\n  color: white;\r\n  padding: 6px 12px;\r\n }\r\n \r\n .top-menu li a {\r\n  display: block;\r\n  margin-left: 250px;\r\n  height: 40px;\r\n  line-height: 20px;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  /* padding: 1em; */\r\n }\r\n \r\n .scroll {\r\n  background: white;\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\r\n }\r\n \r\n .scroll .top-menu li a, .scroll .brand {\r\n  color: black;\r\n }\r\n \r\n .scroll .hamburger-line {\r\n  background: #000;\r\n }\r\n \r\n .hero {\r\n   position: relative;\r\n   z-index: 1;\r\n   height: 100vh;\r\n   max-height: 1080px;\r\n   /* background-image: url(2.jpg); */\r\n   background-size: cover;\r\n   background-attachment: fixed;\r\n   background-position: center;\r\n   color: #fff;\r\n   display: table;\r\n   width: 100%;\r\n   text-align: center;\r\n   text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\r\n  }\r\n \r\n .hero:after {\r\n   content: \"\";\r\n   position: absolute;\r\n   top: 0;\r\n   left: 0;\r\n   right: 0;\r\n   bottom: 0;\r\n   /*background: -webkit-gradient(linear, left top, right bottom, from(#28e), to(#e14));\r\n   background: linear-gradient(to bottom right, #28e, #e14);*/\r\n   opacity: 0.9;\r\n   z-index: -1;\r\n  }\r\n \r\n .hero h1 {\r\n   font-size: 4em;\r\n   margin-bottom: 1rem;\r\n  }\r\n \r\n .hero p {\r\n   font-size: 2em;\r\n   max-width: 80%;\r\n   margin-left: auto;\r\n   margin-right: auto;\r\n   font-weight: 300;\r\n  }\r\n \r\n .hero .content {\r\n   display: table-cell;\r\n   vertical-align: middle;\r\n  }\r\n \r\n .hero .content h1\r\n  {\r\n    text-shadow: 3px 2px black;\r\n  }\r\n \r\n h1, h2, p {\r\n   margin: 1em 0;\r\n  }\r\n \r\n h2 {\r\n   font-size: 2rem;\r\n   line-height: 0.5;\r\n  }\r\n \r\n a {\r\n   color: #e14;\r\n   text-decoration: none;\r\n  }\r\n \r\n a:hover {\r\n   text-decoration: underline;\r\n  }\r\n \r\n .row:after, .tab-row:after {\r\n   content: \"\";\r\n   display: table;\r\n   clear: both;\r\n  }\r\n \r\n .row, .tab-row {\r\n   display: block;\r\n  }\r\n \r\n .tab-row {\r\n   display: table;\r\n   height: 100%;\r\n   vertical-align: middle;\r\n  }\r\n \r\n input[type=button]{\r\n    width: 15%;\r\n    background-color:white;\r\n    color:black;\r\n    padding: 9px 20px;\r\n    text-decoration: none;\r\n    margin: 3px 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid white;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n    opacity: 0.9;\r\n  }\r\n \r\n /* @media screen and (max-width: 640px){\r\n .container{\r\n   display: block;\r\n   width: 100%;\r\n }\r\n}\r\n\r\n@media screen and (min-width: 900px){\r\n .container{\r\n   width: 33.33333%;\r\n }\r\n}\r\n@media screen and (min-width: 640px) {\r\n .col-4, .col-6, .col-12 {\r\n   float: left;\r\n }\r\n}\r\n@media screen and (min-width: 640px) {\r\n .col-4 {\r\n   width: 33%;\r\n }\r\n}\r\n\r\n@media screen and (min-width: 640px) {\r\n .col-6 {\r\n   width: 50%;\r\n }\r\n} */\r\n \r\n .hero {\r\n  position: relative;\r\n  z-index: 1;\r\n  height: 100vh;\r\n  max-height: 1080px;\r\n  background-color: black;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  color: #fff;\r\n  display: table;\r\n  width: 100%;\r\n  text-align: center;\r\n  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n \r\n .hero:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  /*background: -webkit-gradient(linear, left top, right bottom, from(#28e), to(#e14));\r\n  background: linear-gradient(to bottom right, #28e, #e14);*/\r\n  opacity: 0.9;\r\n  z-index: -1;\r\n}\r\n \r\n .hero h1 {\r\n  font-size: 4em;\r\n  margin-bottom: 1rem;\r\n}\r\n \r\n .hero p {\r\n  font-size: 2em;\r\n  max-width: 80%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  font-weight: 300;\r\n}\r\n \r\n .hero .content {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n \r\n h1, h2, p {\r\n  margin: 1em 0;\r\n}\r\n \r\n h2 {\r\n  font-size: 2rem;\r\n  line-height: 0.5;\r\n}\r\n \r\n .feature {\r\n  position: relative;\r\n  z-index: 1;\r\n  /* height: 40vh;\r\n  max-height: 1080px; */\r\n  /* background-color: black; */\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  color: #fff;\r\n  display: table;\r\n  width: 100%;\r\n  text-align: center;\r\n  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n \r\n .feature:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  /*background: -webkit-gradient(linear, left top, right bottom, from(#28e), to(#e14));\r\n  background: linear-gradient(to bottom right, #28e, #e14);*/\r\n  opacity: 0.9;\r\n  z-index: -1;\r\n}\r\n \r\n .feature h{\r\n  font-size: 50px;\r\n  \r\n}\r\n \r\n .feature p {\r\n  font-size: 20px;\r\n  max-width: 80%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  font-weight: 300;\r\n}\r\n \r\n .main-title{\r\n  color: #2d2d2d;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n  padding: 0.7em 0;\r\n}\r\n \r\n .container{\r\n  padding: 1em 0;\r\n  float: left;\r\n  width: 50%;\r\n}\r\n \r\n @media screen and (max-width: 640px){\r\n  .container{\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n}\r\n \r\n @media screen and (min-width: 900px){\r\n  .container{\r\n    width: 33.33333%;\r\n  }\r\n}\r\n \r\n .container .title{\r\n  color: #1a1a1a;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n \r\n .content {\r\n  position: relative;\r\n  width: 90%;\r\n  max-width: 400px;\r\n  margin: auto;\r\n  overflow: hidden;\r\n}\r\n \r\n .content .content-overlay {\r\n  background: rgba(0,0,0,0.7);\r\n  position: absolute;\r\n  height: 99%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.4s ease-in-out 0s;\r\n  transition: all 0.4s ease-in-out 0s;\r\n}\r\n \r\n .content:hover .content-overlay{\r\n  opacity: 1;\r\n}\r\n \r\n .content-image{\r\n  width: 100%;\r\n}\r\n \r\n .content-details {\r\n  position: absolute;\r\n  text-align: center;\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 0;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  -webkit-transition: all 0.3s ease-in-out 0s;\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n \r\n .content:hover .content-details{\r\n  top: 50%;\r\n  left: 50%;\r\n  opacity: 1;\r\n}\r\n \r\n .content-details h3{\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 0.15em;\r\n  margin-bottom: 0.5em;\r\n  text-transform: uppercase;\r\n}\r\n \r\n .content-details p{\r\n  color: #fff;\r\n  font-size: 0.8em;\r\n}\r\n \r\n .fadeIn-bottom{\r\n  top: 80%;\r\n}\r\n \r\n .fadeIn-top{\r\n  top: 20%;\r\n}\r\n \r\n .fadeIn-left{\r\n  left: 20%;\r\n}\r\n \r\n .fadeIn-right{\r\n  left: 80%;\r\n}\r\n \r\n .footer-distributed{\r\n  background:black;\r\n  opacity: 0.9;\r\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  text-align: left;\r\n  font: bold 16px sans-serif;\r\n  padding: 55px 50px;\r\n}\r\n \r\n .footer-distributed .footer-left,\r\n.footer-distributed .footer-center,\r\n.footer-distributed .footer-right{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n \r\n .footer-distributed .footer-left{\r\n  width: 40%;\r\n}\r\n \r\n .footer-distributed h3{\r\n  color:  #ffffff;\r\n  font: normal 36px 'Open Sans', cursive;\r\n  margin: 0;\r\n}\r\n \r\n .footer-distributed h3 span{\r\n  color:  orange\r\n}\r\n \r\n .footer-distributed .footer-links{\r\n  color:  #ffffff;\r\n  margin: 20px 0 12px;\r\n  padding: 0;\r\n}\r\n \r\n .footer-distributed .footer-links a{\r\n  display:inline-block;\r\n  line-height: 1.8;\r\n  font-weight:400;\r\n  text-decoration: none;\r\n  color:  inherit;\r\n}\r\n \r\n .footer-distributed .footer-company-name{\r\n  color:  #222;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin: 0;\r\n}\r\n \r\n .footer-distributed .footer-center{\r\n  width: 35%;\r\n}\r\n \r\n .footer-distributed .footer-center i{\r\n  background-color:  #33383b;\r\n  color: #ffffff;\r\n  font-size: 25px;\r\n  width: 38px;\r\n  height: 38px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  line-height: 42px;\r\n  margin: 10px 15px;\r\n  vertical-align: middle;\r\n}\r\n \r\n /* .footer-center h3\r\n{\r\n  color: black;\r\n} */\r\n \r\n .footer-distributed .footer-center i.fa-envelope{\r\n  font-size: 17px;\r\n  line-height: 38px;\r\n}\r\n \r\n .footer-distributed .footer-center p{\r\n  display: inline-block;\r\n  color: #ffffff;\r\n  font-weight:400;\r\n  vertical-align: middle;\r\n  margin:0;\r\n}\r\n \r\n .footer-distributed .footer-center p span{\r\n  display:block;\r\n  font-weight: normal;\r\n  font-size:14px;\r\n  line-height:2;\r\n}\r\n \r\n .footer-distributed .footer-center p a{\r\n  color:  lightseagreen;\r\n  text-decoration: none;;\r\n}\r\n \r\n .footer-distributed .footer-links a:before {\r\n  content: \"|\";\r\n  font-weight:300;\r\n  font-size: 20px;\r\n  left: 0;\r\n  color: #fff;\r\n  display: inline-block;\r\n  padding-right: 5px;\r\n}\r\n \r\n .footer-distributed .footer-links .link-1:before {\r\n  content: none;\r\n}\r\n \r\n .footer-distributed .footer-right{\r\n  width: 20%;\r\n}\r\n \r\n .footer-distributed .footer-company-about{\r\n  line-height: 20px;\r\n  color:  #92999f;\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  margin: 0;\r\n}\r\n \r\n .footer-distributed .footer-company-about span{\r\n  display: block;\r\n  color:  #ffffff;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  margin-bottom: 20px;\r\n}\r\n \r\n @media (max-width: 880px) {\r\n\r\n  .footer-distributed{\r\n    font: bold 14px sans-serif;\r\n  }\r\n\r\n  .footer-distributed .footer-left,\r\n  .footer-distributed .footer-center,\r\n  .footer-distributed .footer-right{\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 40px;\r\n    text-align: center;\r\n  }\r\n  .footer-right h2 \r\n  {\r\n    color:black;\r\n  }\r\n\r\n  .footer-distributed .footer-center i{\r\n    margin-left: 0;\r\n  }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWxob21lL2hvdGVsaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLHNCQUFzQjtDQUN2Qjs7Q0FFQTtHQUNFLGNBQWM7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCOztFQUVoQjs7Ozs7O0lBTUU7Q0FDSDs7Q0FDQTtHQUNFLGNBQWM7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7Q0FDQTtFQUNDO0lBQ0UsY0FBYztFQUNoQjtDQUNEOztDQUNBO0VBQ0MsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7Q0FDQTtFQUNDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGlCQUFpQjtFQUNqQix3Q0FBd0M7Q0FDekM7O0NBQ0E7RUFDQyxZQUFZO0NBQ2I7O0NBQ0E7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBR0M7R0FDQyxrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLGFBQWE7R0FDYixrQkFBa0I7R0FDbEIsa0NBQWtDO0dBQ2xDLHNCQUFzQjtHQUN0Qiw0QkFBNEI7R0FDNUIsMkJBQTJCO0dBQzNCLFdBQVc7R0FDWCxjQUFjO0dBQ2QsV0FBVztHQUNY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bnRlbnQiOlsiLndyYXAsIC5yb3csIC50YWItcm93IHtcclxuICBtYXJnaW46IDNweCA4OXB4O1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gfVxyXG4gXHJcbiAubmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgei1pbmRleDogMztcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2U7XHJcbiB9XHJcbiBcclxuIC5icmFuZCB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogb3JhbmdlO1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gXHJcbiAgLyogZmxvYXQ6IGxlZnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAqL1xyXG4gfVxyXG4gLmJyYW5kIHNwYW4ge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbiB9XHJcbiBcclxuIC50b3AtbWVudSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMjAwbXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gfVxyXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAudG9wLW1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gfVxyXG4gLnRvcC1tZW51IGxpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gfVxyXG4gLnRvcC1tZW51IGxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC8qIHBhZGRpbmc6IDFlbTsgKi9cclxuIH1cclxuXHJcbiAuc2Nyb2xsIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gfVxyXG4gLnNjcm9sbCAudG9wLW1lbnUgbGkgYSwgLnNjcm9sbCAuYnJhbmQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuIH1cclxuIC5zY3JvbGwgLmhhbWJ1cmdlci1saW5lIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gfVxyXG5cclxuICBcclxuICAuaGVybyB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgei1pbmRleDogMTtcclxuICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgbWF4LWhlaWdodDogMTA4MHB4O1xyXG4gICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoMi5qcGcpOyAqL1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG4gICBkaXNwbGF5OiB0YWJsZTtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgdGV4dC1zaGFkb3c6IDFweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgLmhlcm86YWZ0ZXIge1xyXG4gICBjb250ZW50OiBcIlwiO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHRvcDogMDtcclxuICAgbGVmdDogMDtcclxuICAgcmlnaHQ6IDA7XHJcbiAgIGJvdHRvbTogMDtcclxuICAgLypiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSgjMjhlKSwgdG8oI2UxNCkpO1xyXG4gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMjhlLCAjZTE0KTsqL1xyXG4gICBvcGFjaXR5OiAwLjk7XHJcbiAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICAuaGVybyBoMSB7XHJcbiAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICAuaGVybyBwIHtcclxuICAgZm9udC1zaXplOiAyZW07XHJcbiAgIG1heC13aWR0aDogODAlO1xyXG4gICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAuaGVybyAuY29udGVudCB7XHJcbiAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZXJvIC5jb250ZW50IGgxXHJcbiAge1xyXG4gICAgdGV4dC1zaGFkb3c6IDNweCAycHggYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGgxLCBoMiwgcCB7XHJcbiAgIG1hcmdpbjogMWVtIDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgZm9udC1zaXplOiAycmVtO1xyXG4gICBsaW5lLWhlaWdodDogMC41O1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgY29sb3I6ICNlMTQ7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuICBcclxuICAucm93OmFmdGVyLCAudGFiLXJvdzphZnRlciB7XHJcbiAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdywgLnRhYi1yb3cge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnRhYi1yb3cge1xyXG4gICBkaXNwbGF5OiB0YWJsZTtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1idXR0b25de1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOiAzcHggMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICB9XHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KXtcclxuIC5jb250YWluZXJ7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB3aWR0aDogMTAwJTtcclxuIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpe1xyXG4gLmNvbnRhaW5lcntcclxuICAgd2lkdGg6IDMzLjMzMzMzJTtcclxuIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gLmNvbC00LCAuY29sLTYsIC5jb2wtMTIge1xyXG4gICBmbG9hdDogbGVmdDtcclxuIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gLmNvbC00IHtcclxuICAgd2lkdGg6IDMzJTtcclxuIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuIC5jb2wtNiB7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbiB9XHJcbn0gKi9cclxuIC5oZXJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1heC1oZWlnaHQ6IDEwODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbi5oZXJvOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgLypiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSgjMjhlKSwgdG8oI2UxNCkpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyOGUsICNlMTQpOyovXHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbi5oZXJvIGgxIHtcclxuICBmb250LXNpemU6IDRlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi5oZXJvIHAge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5oZXJvIC5jb250ZW50IHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbmgxLCBoMiwgcCB7XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMC41O1xyXG59XHJcblxyXG4uZmVhdHVyZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgLyogaGVpZ2h0OiA0MHZoO1xyXG4gIG1heC1oZWlnaHQ6IDEwODBweDsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbi5mZWF0dXJlOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgLypiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSgjMjhlKSwgdG8oI2UxNCkpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyOGUsICNlMTQpOyovXHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbi5mZWF0dXJlIGh7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIFxyXG59XHJcbi5mZWF0dXJlIHAge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4ubWFpbi10aXRsZXtcclxuICBjb2xvcjogIzJkMmQyZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgcGFkZGluZzogMC43ZW0gMDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBwYWRkaW5nOiAxZW0gMDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDMzLjMzMzMzJTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIgLnRpdGxle1xyXG4gIGNvbG9yOiAjMWExYTFhO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRlbnQgLmNvbnRlbnQtb3ZlcmxheSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDk5JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LW92ZXJsYXl7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbnRlbnQtaW1hZ2V7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50LWRldGFpbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LWRldGFpbHN7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jb250ZW50LWRldGFpbHMgaDN7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jb250ZW50LWRldGFpbHMgcHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4uZmFkZUluLWJvdHRvbXtcclxuICB0b3A6IDgwJTtcclxufVxyXG5cclxuLmZhZGVJbi10b3B7XHJcbiAgdG9wOiAyMCU7XHJcbn1cclxuXHJcbi5mYWRlSW4tbGVmdHtcclxuICBsZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5mYWRlSW4tcmlnaHR7XHJcbiAgbGVmdDogODAlO1xyXG59XHJcblxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZHtcclxuICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250OiBib2xkIDE2cHggc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiA1NXB4IDUwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyLFxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHR7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0e1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIGgze1xyXG4gIGNvbG9yOiAgI2ZmZmZmZjtcclxuICBmb250OiBub3JtYWwgMzZweCAnT3BlbiBTYW5zJywgY3Vyc2l2ZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgaDMgc3BhbntcclxuICBjb2xvcjogIG9yYW5nZVxyXG59XHJcblxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtze1xyXG4gIGNvbG9yOiAgI2ZmZmZmZjtcclxuICBtYXJnaW46IDIwcHggMCAxMnB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyBhe1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIGluaGVyaXQ7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LW5hbWV7XHJcbiAgY29sb3I6ICAjMjIyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXJ7XHJcbiAgd2lkdGg6IDM1JTtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjMzMzODNiO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB3aWR0aDogMzhweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNDJweDtcclxuICBtYXJnaW46IDEwcHggMTVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi8qIC5mb290ZXItY2VudGVyIGgzXHJcbntcclxuICBjb2xvcjogYmxhY2s7XHJcbn0gKi9cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpLmZhLWVudmVsb3Ble1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMzhweDtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDo0MDA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW46MDtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwIHNwYW57XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjI7XHJcbn1cclxuXHJcbi5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCBhe1xyXG4gIGNvbG9yOiAgbGlnaHRzZWFncmVlbjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7O1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwifFwiO1xyXG4gIGZvbnQtd2VpZ2h0OjMwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGVmdDogMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgLmxpbmstMTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHR7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXR7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICAjOTI5OTlmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXQgc3BhbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcblxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWR7XHJcbiAgICBmb250OiBib2xkIDE0cHggc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIsXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mb290ZXItcmlnaHQgaDIgXHJcbiAge1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGl7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/hotelhome/hotelhome.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/hotelhome/hotelhome.component.ts ***!
    \**************************************************/

  /*! exports provided: HotelhomeComponent */

  /***/
  function srcAppHotelhomeHotelhomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelhomeComponent", function () {
      return HotelhomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HotelhomeComponent = /*#__PURE__*/function () {
      function HotelhomeComponent() {
        _classCallCheck(this, HotelhomeComponent);
      }

      _createClass(HotelhomeComponent, [{
        key: "getUrl",
        value: function getUrl() {
          return "url('../../assets/images/2.jpg')";
        }
      }, {
        key: "getUrl1",
        value: function getUrl1() {
          return "url('../../assets/images/3.jpg')";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HotelhomeComponent;
    }();

    HotelhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotelhome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotelhome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelhome/hotelhome.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotelhome.component.css */
      "./src/app/hotelhome/hotelhome.component.css")).default]
    })], HotelhomeComponent);
    /***/
  },

  /***/
  "./src/app/hoteljunior/hoteljunior.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/hoteljunior/hoteljunior.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHoteljuniorHoteljuniorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* import '~@fortawesome/fontawesome-free/css/all.min.css' */\r\n    \r\n    /* button, input {\r\n     font-family: Hind, sans-serif;\r\n     font-size: 1rem;\r\n     outline: none;\r\n    }\r\n     */\r\n    \r\n    .wrap, .row, .tab-row {\r\n        margin: 3px 89px;\r\n        max-width: 1000px;\r\n       }\r\n    \r\n    .nav {\r\n        position: fixed;\r\n        background-color: black;\r\n        z-index: 3;\r\n        height: 50px;\r\n        width: 100%;\r\n        -webkit-transition: 300ms ease;\r\n        transition: 300ms ease;\r\n       }\r\n    \r\n    .brand {\r\n         display: block;\r\n        float: left;\r\n        height: 40px;\r\n        color: orange;\r\n        padding: 7px;\r\n        margin-left: 2px;\r\n       \r\n        /* float: left;\r\n        line-height: 60px;\r\n        \r\n        color: white;\r\n        font-weight: 500;\r\n        padding-left: 1rem;\r\n         */\r\n       }\r\n    \r\n    .brand span {\r\n         display: block;\r\n        margin-left: 30px;\r\n        height: 40px;\r\n        line-height: 24px;\r\n        text-decoration: none;\r\n        color: orange;\r\n        padding: 0 1em;\r\n       }\r\n    \r\n    .top-menu {\r\n        display: none;\r\n        position: relative;\r\n        float: right;\r\n        -webkit-transition: 200ms ease;\r\n        transition: 200ms ease;\r\n        font-weight: 300;\r\n        height: 40px;\r\n       }\r\n    \r\n    @media screen and (min-width: 640px) {\r\n        .top-menu {\r\n          display: block;\r\n        }\r\n       }\r\n    \r\n    .top-menu li {\r\n        display: block;\r\n        float: left;\r\n        height: 40px;\r\n        color: white;\r\n        padding: 6px 12px;\r\n       }\r\n    \r\n    .top-menu li a {\r\n        display: block;\r\n        margin-left: 250px;\r\n        height: 40px;\r\n        line-height: 20px;\r\n        text-decoration: none;\r\n        color: #fff;\r\n        /* padding: 1em; */\r\n       }\r\n    \r\n    .scroll {\r\n        background: white;\r\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\r\n       }\r\n    \r\n    .scroll .top-menu li a, .scroll .brand {\r\n        color: black;\r\n       }\r\n    \r\n    .scroll .hamburger-line {\r\n        background: #000;\r\n       }\r\n    \r\n    .hero {\r\n           position: relative;\r\n           z-index: 1;\r\n           height: 100vh;\r\n           max-height: 1080px;\r\n           /* background-image: url(2.jpg); */\r\n           background-size: cover;\r\n           background-attachment: fixed;\r\n           background-position: center;\r\n           color: #fff;\r\n           display: table;\r\n           width: 100%;\r\n           text-align: center;\r\n           text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\r\n          }\r\n    \r\n    .hero:after {\r\n           content: \"\";\r\n           position: absolute;\r\n           top: 0;\r\n           left: 0;\r\n           right: 0;\r\n           bottom: 0;\r\n           /*background: -webkit-gradient(linear, left top, right bottom, from(#28e), to(#e14));\r\n           background: linear-gradient(to bottom right, #28e, #e14);*/\r\n           opacity: 0.9;\r\n           z-index: -1;\r\n          }\r\n    \r\n    .hero h1 {\r\n           font-size: 4em;\r\n           margin-bottom: 1rem;\r\n          }\r\n    \r\n    .hero p {\r\n           font-size: 2em;\r\n           max-width: 80%;\r\n           margin-left: auto;\r\n           margin-right: auto;\r\n           font-weight: 300;\r\n          }\r\n    \r\n    .hero .content {\r\n           display: table-cell;\r\n           vertical-align: middle;\r\n          }\r\n    \r\n    .hero .content h1\r\n          {\r\n            text-shadow: 3px 2px black;\r\n          }\r\n    \r\n    h1, h2, p {\r\n           margin: 1em 0;\r\n          }\r\n    \r\n    h2 {\r\n           font-size: 2rem;\r\n           line-height: 0.5;\r\n          }\r\n    \r\n    a {\r\n           color: #e14;\r\n           text-decoration: none;\r\n          }\r\n    \r\n    a:hover {\r\n           text-decoration: underline;\r\n          }\r\n    \r\n    .row:after, .tab-row:after {\r\n           content: \"\";\r\n           display: table;\r\n           clear: both;\r\n          }\r\n    \r\n    .row, .tab-row {\r\n           display: block;\r\n          }\r\n    \r\n    .tab-row {\r\n           display: table;\r\n           height: 100%;\r\n           vertical-align: middle;\r\n          }\r\n    \r\n    .abc\r\n          {\r\n            margin-left: 200px;\r\n          }\r\n    \r\n    .abc h2\r\n          {\r\n           font-size: 40px;\r\n          }\r\n    \r\n    .i \r\n          {\r\n            display: -webkit-box;\r\n            display: flex;\r\n          }\r\n    \r\n    input[type=text] {\r\n           background-color:black;\r\n           opacity: 0.7;\r\n           color: white;\r\n           width: 17%;\r\n           padding: 9px 20px;\r\n           margin: 3px 0;\r\n           box-sizing: border-box;\r\n           border: 1px solid black;\r\n           border-radius: 4px;\r\n           font-size: 16px;\r\n       \r\n         }\r\n    \r\n    input[type=button]{\r\n           width: 15%;\r\n           background-color:blue;\r\n           color:white;\r\n           padding: 9px 20px;\r\n           text-decoration: none;\r\n           margin: 3px 0;\r\n           box-sizing: border-box;\r\n           border: 2px solid white;\r\n           border-radius: 4px;\r\n           cursor: pointer;\r\n           font-size: 16px;\r\n         }\r\n    \r\n    .prop\r\n         {\r\n           font-size: 21px;\r\n         }\r\n    \r\n    .footer-distributed{\r\n           background:black;\r\n           opacity: 0.9;\r\n           box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n           box-sizing: border-box;\r\n           width: 100%;\r\n           text-align: left;\r\n           font: bold 16px sans-serif;\r\n           padding: 55px 50px;\r\n         }\r\n    \r\n    .footer-distributed .footer-left,\r\n         .footer-distributed .footer-center,\r\n         .footer-distributed .footer-right{\r\n           display: inline-block;\r\n           vertical-align: top;\r\n         }\r\n    \r\n    .footer-distributed .footer-left{\r\n           width: 40%;\r\n         }\r\n    \r\n    .footer-distributed h3{\r\n           color:  #ffffff;\r\n           font: normal 36px 'Open Sans', cursive;\r\n           margin: 0;\r\n         }\r\n    \r\n    .footer-distributed h3 span{\r\n           color:  orange\r\n         }\r\n    \r\n    .footer-distributed .footer-links{\r\n           color:  #ffffff;\r\n           margin: 20px 0 12px;\r\n           padding: 0;\r\n         }\r\n    \r\n    .footer-distributed .footer-links a{\r\n           display:inline-block;\r\n           line-height: 1.8;\r\n           font-weight:400;\r\n           text-decoration: none;\r\n           color:  inherit;\r\n         }\r\n    \r\n    .footer-distributed .footer-company-name{\r\n           color:  #222;\r\n           font-size: 14px;\r\n           font-weight: normal;\r\n           margin: 0;\r\n         }\r\n    \r\n    .footer-distributed .footer-center{\r\n           width: 35%;\r\n         }\r\n    \r\n    .footer-distributed .footer-center i{\r\n           background-color:  #33383b;\r\n           color: #ffffff;\r\n           font-size: 25px;\r\n           width: 38px;\r\n           height: 38px;\r\n           border-radius: 50%;\r\n           text-align: center;\r\n           line-height: 42px;\r\n           margin: 10px 15px;\r\n           vertical-align: middle;\r\n         }\r\n    \r\n    /* .footer-center h3\r\n         {\r\n           color: black;\r\n         } */\r\n    \r\n    .footer-distributed .footer-center i.fa-envelope{\r\n           font-size: 17px;\r\n           line-height: 38px;\r\n         }\r\n    \r\n    .footer-distributed .footer-center p{\r\n           display: inline-block;\r\n           color: #ffffff;\r\n           font-weight:400;\r\n           vertical-align: middle;\r\n           margin:0;\r\n         }\r\n    \r\n    .footer-distributed .footer-center p span{\r\n           display:block;\r\n           font-weight: normal;\r\n           font-size:14px;\r\n           line-height:2;\r\n         }\r\n    \r\n    .footer-distributed .footer-center p a{\r\n           color:  lightseagreen;\r\n           text-decoration: none;;\r\n         }\r\n    \r\n    .footer-distributed .footer-links a:before {\r\n           content: \"|\";\r\n           font-weight:300;\r\n           font-size: 20px;\r\n           left: 0;\r\n           color: #fff;\r\n           display: inline-block;\r\n           padding-right: 5px;\r\n         }\r\n    \r\n    .footer-distributed .footer-links .link-1:before {\r\n           content: none;\r\n         }\r\n    \r\n    .footer-distributed .footer-right{\r\n           width: 20%;\r\n         }\r\n    \r\n    .footer-distributed .footer-company-about{\r\n           line-height: 20px;\r\n           color:  #92999f;\r\n           font-size: 13px;\r\n           font-weight: normal;\r\n           margin: 0;\r\n         }\r\n    \r\n    .footer-distributed .footer-company-about span{\r\n           display: block;\r\n           color:  #ffffff;\r\n           font-size: 14px;\r\n           font-weight: bold;\r\n           margin-bottom: 20px;\r\n         }\r\n    \r\n    @media (max-width: 880px) {\r\n         \r\n           .footer-distributed{\r\n             font: bold 14px sans-serif;\r\n           }\r\n         \r\n           .footer-distributed .footer-left,\r\n           .footer-distributed .footer-center,\r\n           .footer-distributed .footer-right{\r\n             display: block;\r\n             width: 100%;\r\n             margin-bottom: 40px;\r\n             text-align: center;\r\n           }\r\n           .footer-right h2 \r\n           {\r\n             color:black;\r\n           }\r\n         \r\n           .footer-distributed .footer-center i{\r\n             margin-left: 0;\r\n           }\r\n         \r\n         }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWxqdW5pb3IvaG90ZWxqdW5pb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0lBRXhEOzs7OztNQUtFOztJQUNEO1FBQ0csZ0JBQWdCO1FBQ2hCLGlCQUFpQjtPQUNsQjs7SUFFQTtRQUNDLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLFlBQVk7UUFDWixXQUFXO1FBQ1gsOEJBQThCO1FBQzlCLHNCQUFzQjtPQUN2Qjs7SUFFQTtTQUNFLGNBQWM7UUFDZixXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZO1FBQ1osZ0JBQWdCOztRQUVoQjs7Ozs7O1VBTUU7T0FDSDs7SUFDQTtTQUNFLGNBQWM7UUFDZixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLGNBQWM7T0FDZjs7SUFFQTtRQUNDLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLDhCQUE4QjtRQUM5QixzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLFlBQVk7T0FDYjs7SUFDQTtRQUNDO1VBQ0UsY0FBYztRQUNoQjtPQUNEOztJQUNBO1FBQ0MsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLGlCQUFpQjtPQUNsQjs7SUFDQTtRQUNDLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsV0FBVztRQUNYLGtCQUFrQjtPQUNuQjs7SUFFQTtRQUNDLGlCQUFpQjtRQUNqQix3Q0FBd0M7T0FDekM7O0lBQ0E7UUFDQyxZQUFZO09BQ2I7O0lBQ0E7UUFDQyxnQkFBZ0I7T0FDakI7O0lBR0c7V0FDQyxrQkFBa0I7V0FDbEIsVUFBVTtXQUNWLGFBQWE7V0FDYixrQkFBa0I7V0FDbEIsa0NBQWtDO1dBQ2xDLHNCQUFzQjtXQUN0Qiw0QkFBNEI7V0FDNUIsMkJBQTJCO1dB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O1NBQ1o7O0lBRUE7V0FDRSxpQkFBaUI7V0FDakIsZUFBZTtXQUNmLGVBQWU7V0FDZixtQkFBbUI7V0FDbkIsU0FBUztTQUNYOztJQUVBO1dBQ0UsY0FBYztXQUNkLGVBQWU7V0FDZixlQUFlO1dBQ2YsaUJBQWlCO1dBQ2pCLG1CQUFtQjtTQUNyQjs7SUFJQTs7V0FFRTthQUNFLDBCQUEwQjtXQUM1Qjs7V0FFQTs7O2FBR0UsY0FBYzthQUNkLFdBQVc7YUFDWCxtQkFBbUI7YUFDbkIsa0JBQWtCO1dBQ3BCO1dBQ0E7O2FBRUUsV0FBVztXQUNiOztXQUVBO2FBQ0UsY0FBYztXQUNoQjs7U0FFRiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsanVuaW9yL2hvdGVsanVuaW9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpbXBvcnQgJ35AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnICovXHJcbiAgICBcclxuICAgIC8qIGJ1dHRvbiwgaW5wdXQge1xyXG4gICAgIGZvbnQtZmFtaWx5OiBIaW5kLCBzYW5zLXNlcmlmO1xyXG4gICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgICovXHJcbiAgICAgLndyYXAsIC5yb3csIC50YWItcm93IHtcclxuICAgICAgICBtYXJnaW46IDNweCA4OXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAubmF2IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2U7XHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIC5icmFuZCB7XHJcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgICAgXHJcbiAgICAgICAgLyogZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgfVxyXG4gICAgICAgLmJyYW5kIHNwYW4ge1xyXG4gICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgcGFkZGluZzogMCAxZW07XHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIC50b3AtbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMjAwbXMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgfVxyXG4gICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAudG9wLW1lbnUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgICAgLnRvcC1tZW51IGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICAgfVxyXG4gICAgICAgLnRvcC1tZW51IGxpIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC8qIHBhZGRpbmc6IDFlbTsgKi9cclxuICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAuc2Nyb2xsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgfVxyXG4gICAgICAgLnNjcm9sbCAudG9wLW1lbnUgbGkgYSwgLnNjcm9sbCAuYnJhbmQge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgIH1cclxuICAgICAgIC5zY3JvbGwgLmhhbWJ1cmdlci1saW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgfVxyXG4gICBcclxuICAgXHJcbiAgICAgICAgICAuaGVybyB7XHJcbiAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDgwcHg7XHJcbiAgICAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKDIuanBnKTsgKi9cclxuICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlcm86YWZ0ZXIge1xyXG4gICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAvKmJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKCMyOGUpLCB0bygjZTE0KSk7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzI4ZSwgI2UxNCk7Ki9cclxuICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVybyBoMSB7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZXJvIHAge1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlcm8gLmNvbnRlbnQge1xyXG4gICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmhlcm8gLmNvbnRlbnQgaDFcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAycHggYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaDEsIGgyLCBwIHtcclxuICAgICAgICAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgIGNvbG9yOiAjZTE0O1xyXG4gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAucm93OmFmdGVyLCAudGFiLXJvdzphZnRlciB7XHJcbiAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLnJvdywgLnRhYi1yb3cge1xyXG4gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAudGFiLXJvdyB7XHJcbiAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgLmFiY1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgICAgLmFiYyBoMlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgICAuaSBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgd2lkdGg6IDE3JTtcclxuICAgICAgICAgICBwYWRkaW5nOiA5cHggMjBweDtcclxuICAgICAgICAgICBtYXJnaW46IDNweCAwO1xyXG4gICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAgaW5wdXRbdHlwZT1idXR0b25de1xyXG4gICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibHVlO1xyXG4gICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgIHBhZGRpbmc6IDlweCAyMHB4O1xyXG4gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICBtYXJnaW46IDNweCAwO1xyXG4gICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgIH1cclxuICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgIC5wcm9wXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZHtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICBmb250OiBib2xkIDE2cHggc2Fucy1zZXJpZjtcclxuICAgICAgICAgICBwYWRkaW5nOiA1NXB4IDUwcHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4gICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyLFxyXG4gICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHR7XHJcbiAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnR7XHJcbiAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgaDN7XHJcbiAgICAgICAgICAgY29sb3I6ICAjZmZmZmZmO1xyXG4gICAgICAgICAgIGZvbnQ6IG5vcm1hbCAzNnB4ICdPcGVuIFNhbnMnLCBjdXJzaXZlO1xyXG4gICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCBoMyBzcGFue1xyXG4gICAgICAgICAgIGNvbG9yOiAgb3JhbmdlXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3N7XHJcbiAgICAgICAgICAgY29sb3I6ICAjZmZmZmZmO1xyXG4gICAgICAgICAgIG1hcmdpbjogMjBweCAwIDEycHg7XHJcbiAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtzIGF7XHJcbiAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgIGNvbG9yOiAgaW5oZXJpdDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktbmFtZXtcclxuICAgICAgICAgICBjb2xvcjogICMyMjI7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVye1xyXG4gICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgaXtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzMzMzgzYjtcclxuICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgd2lkdGg6IDM4cHg7XHJcbiAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAvKiAuZm9vdGVyLWNlbnRlciBoM1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICB9ICovXHJcbiAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgaS5mYS1lbnZlbG9wZXtcclxuICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcHtcclxuICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCBzcGFue1xyXG4gICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICBsaW5lLWhlaWdodDoyO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHAgYXtcclxuICAgICAgICAgICBjb2xvcjogIGxpZ2h0c2VhZ3JlZW47XHJcbiAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOztcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtzIGE6YmVmb3JlIHtcclxuICAgICAgICAgICBjb250ZW50OiBcInxcIjtcclxuICAgICAgICAgICBmb250LXdlaWdodDozMDA7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtzIC5saW5rLTE6YmVmb3JlIHtcclxuICAgICAgICAgICBjb250ZW50OiBub25lO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xyXG4gICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LWFib3V0e1xyXG4gICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgIGNvbG9yOiAgIzkyOTk5ZjtcclxuICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LWFib3V0IHNwYW57XHJcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgY29sb3I6ICAjZmZmZmZmO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVke1xyXG4gICAgICAgICAgICAgZm9udDogYm9sZCAxNHB4IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGVmdCxcclxuICAgICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyLFxyXG4gICAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1yaWdodHtcclxuICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAuZm9vdGVyLXJpZ2h0IGgyIFxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpe1xyXG4gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/hoteljunior/hoteljunior.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/hoteljunior/hoteljunior.component.ts ***!
    \******************************************************/

  /*! exports provided: HoteljuniorComponent */

  /***/
  function srcAppHoteljuniorHoteljuniorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoteljuniorComponent", function () {
      return HoteljuniorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HoteljuniorComponent = /*#__PURE__*/function () {
      function HoteljuniorComponent() {
        _classCallCheck(this, HoteljuniorComponent);
      }

      _createClass(HoteljuniorComponent, [{
        key: "getUrl",
        value: function getUrl() {
          return "url('../../assets/images/room1.jpg')";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HoteljuniorComponent;
    }();

    HoteljuniorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hoteljunior',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hoteljunior.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hoteljunior/hoteljunior.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hoteljunior.component.css */
      "./src/app/hoteljunior/hoteljunior.component.css")).default]
    })], HoteljuniorComponent);
    /***/
  },

  /***/
  "./src/app/hotelmenu/hotelmenu.component.css":
  /*!***************************************************!*\
    !*** ./src/app/hotelmenu/hotelmenu.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotelmenuHotelmenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrap, .row, .tab-row {\r\n  margin: 3px 89px;\r\n  max-width: 1000px;\r\n }\r\n \r\n .nav {\r\n  position: fixed;\r\n  background-color: black;\r\n  z-index: 3;\r\n  height: 50px;\r\n  width: 100%;\r\n  -webkit-transition: 300ms ease;\r\n  transition: 300ms ease;\r\n }\r\n \r\n .brand {\r\n   display: block;\r\n  float: left;\r\n  height: 40px;\r\n  color: orange;\r\n  padding: 7px;\r\n  margin-left: 2px;\r\n \r\n  /* float: left;\r\n  line-height: 60px;\r\n  \r\n  color: white;\r\n  font-weight: 500;\r\n  padding-left: 1rem;\r\n   */\r\n }\r\n \r\n .brand span {\r\n   display: block;\r\n  margin-left: 30px;\r\n  height: 40px;\r\n  line-height: 24px;\r\n  text-decoration: none;\r\n  color: orange;\r\n  padding: 0 1em;\r\n }\r\n \r\n .top-menu {\r\n  display: none;\r\n  position: relative;\r\n  float: right;\r\n  -webkit-transition: 200ms ease;\r\n  transition: 200ms ease;\r\n  font-weight: 300;\r\n  height: 40px;\r\n }\r\n \r\n @media screen and (min-width: 640px) {\r\n  .top-menu {\r\n    display: block;\r\n  }\r\n }\r\n \r\n .top-menu li {\r\n  display: block;\r\n  float: left;\r\n  height: 40px;\r\n  color: white;\r\n  padding: 6px 12px;\r\n }\r\n \r\n .top-menu li a {\r\n  display: block;\r\n  margin-left: 250px;\r\n  height: 40px;\r\n  line-height: 20px;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  /* padding: 1em; */\r\n }\r\n \r\n .scroll {\r\n  background: white;\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\r\n }\r\n \r\n .scroll .top-menu li a, .scroll .brand {\r\n  color: black;\r\n }\r\n \r\n .scroll .hamburger-line {\r\n  background: #000;\r\n }\r\n \r\n .hero {\r\n        position: relative;\r\n        z-index: 1;\r\n        height: 100vh;\r\n        max-height: 1080px;\r\n        /* background-image: url(eat5.jpg); */\r\n        background-size: cover;\r\n        background-attachment: fixed;\r\n        background-position: center;\r\n        color: #fff;\r\n        display: table;\r\n        width: 100%;\r\n        text-align: center;\r\n        text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\r\n      }\r\n \r\n .hero:after {\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        /*background: -webkit-gradient(linear, left top, right bottom, from(#28e), to(#e14));\r\n        background: linear-gradient(to bottom right, #28e, #e14);*/\r\n        opacity: 0.9;\r\n        z-index: -1;\r\n      }\r\n \r\n .hero h1 {\r\n        font-size: 4em;\r\n        margin-bottom: 1rem;\r\n      }\r\n \r\n .hero p {\r\n        font-size: 2em;\r\n        max-width: 80%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        font-weight: 300;\r\n      }\r\n \r\n .hero .content {\r\n        display: table-cell;\r\n        vertical-align: middle;\r\n      }\r\n \r\n h1, h2, p {\r\n        margin: 1em 0;\r\n      }\r\n \r\n h2 {\r\n        font-size: 2rem;\r\n        line-height: 0.5;\r\n      }\r\n \r\n a {\r\n        color: black;\r\n        text-decoration: none;\r\n      }\r\n \r\n .row:after, .tab-row:after {\r\n        content: \"\";\r\n        display: table;\r\n        clear: both;\r\n      }\r\n \r\n .row, .tab-row {\r\n        display: block;\r\n      }\r\n \r\n .tab-row {\r\n        display: table;\r\n        height: 100%;\r\n        vertical-align: middle;\r\n      }\r\n \r\n .abc \r\n      {\r\n          margin-left: 80px;\r\n      }\r\n \r\n .container{\r\n         padding: 1em 0;\r\n         float: left;\r\n          width: 100%; \r\n       }\r\n \r\n @media screen and (max-width: 640px){\r\n         .container{\r\n           display: block;\r\n           width: 100%;\r\n         }\r\n       }\r\n \r\n @media screen and (min-width: 900px){\r\n         .container{\r\n           width: 33.33333%;\r\n         }\r\n       }\r\n \r\n .container .title{\r\n         color: #1a1a1a;\r\n         text-align: center;\r\n         margin-bottom: 10px;\r\n       }\r\n \r\n .container {\r\n         /* position: relative; */\r\n         text-align: center;\r\n         height: 500px;\r\n         width: 100%;\r\n         \r\n       }\r\n \r\n .centered {\r\n           text-align: center;\r\n           /* top: 0%;\r\n          */\r\n        \r\n           -webkit-transform: translate(-1%, -28%);\r\n        \r\n                   transform: translate(-1%, -28%);  \r\n           margin-left: 70px;\r\n       }\r\n \r\n .text-block h1\r\n       {\r\n          margin-top: 10px; \r\n        \r\n         font-size: 40px;\r\n         text-align: center;\r\n       }\r\n \r\n .text-block {\r\n         margin-left: 130px;\r\n         margin-top: 60px; \r\n         height: 940px;\r\n         width: 940px;\r\n         background-color:white;\r\n         color: black;\r\n         /* padding: 40px; */\r\n         /* opacity: 0.9; */\r\n         font-size: 10px\r\n       }\r\n \r\n .p1\r\n     {\r\n         font-size: 20px;\r\n     }\r\n \r\n .item\r\n      {\r\n          font-size: 17px;\r\n      }\r\n \r\n .par\r\n      {\r\n          font-size: 13px;\r\n      }\r\n \r\n .footer-distributed{\r\n        background:black;\r\n        opacity: 0.9;\r\n        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n        box-sizing: border-box;\r\n        width: 100%;\r\n        text-align: left;\r\n        font: bold 16px sans-serif;\r\n        padding: 55px 50px;\r\n      }\r\n \r\n .footer-distributed .footer-left,\r\n      .footer-distributed .footer-center,\r\n      .footer-distributed .footer-right{\r\n        display: inline-block;\r\n        vertical-align: top;\r\n      }\r\n \r\n .footer-distributed .footer-left{\r\n        width: 40%;\r\n      }\r\n \r\n .footer-distributed h3{\r\n        color:  #ffffff;\r\n        font: normal 36px 'Open Sans', cursive;\r\n        margin: 0;\r\n      }\r\n \r\n .footer-distributed h3 span{\r\n        color:  orange\r\n      }\r\n \r\n .footer-distributed .footer-links{\r\n        color:  #ffffff;\r\n        margin: 20px 0 12px;\r\n        padding: 0;\r\n      }\r\n \r\n .footer-distributed .footer-links a{\r\n        display:inline-block;\r\n        line-height: 1.8;\r\n        font-weight:400;\r\n        text-decoration: none;\r\n        color:  inherit;\r\n      }\r\n \r\n .footer-distributed .footer-company-name{\r\n        color:  #222;\r\n        font-size: 14px;\r\n        font-weight: normal;\r\n        margin: 0;\r\n      }\r\n \r\n .footer-distributed .footer-center{\r\n        width: 35%;\r\n      }\r\n \r\n .footer-distributed .footer-center i{\r\n        background-color:  #33383b;\r\n        color: #ffffff;\r\n        font-size: 25px;\r\n        width: 38px;\r\n        height: 38px;\r\n        border-radius: 50%;\r\n        text-align: center;\r\n        line-height: 42px;\r\n        margin: 10px 15px;\r\n        vertical-align: middle;\r\n      }\r\n \r\n /* .footer-center h3\r\n      {\r\n        color: black;\r\n      } */\r\n \r\n .footer-distributed .footer-center i.fa-envelope{\r\n        font-size: 17px;\r\n        line-height: 38px;\r\n      }\r\n \r\n .footer-distributed .footer-center p{\r\n        display: inline-block;\r\n        color: #ffffff;\r\n        font-weight:400;\r\n        vertical-align: middle;\r\n        margin:0;\r\n      }\r\n \r\n .footer-distributed .footer-center p span{\r\n        display:block;\r\n        font-weight: normal;\r\n        font-size:14px;\r\n        line-height:2;\r\n      }\r\n \r\n .footer-distributed .footer-center p a{\r\n        color:  lightseagreen;\r\n        text-decoration: none;;\r\n      }\r\n \r\n .footer-distributed .footer-links a:before {\r\n        content: \"|\";\r\n        font-weight:300;\r\n        font-size: 20px;\r\n        left: 0;\r\n        color: #fff;\r\n        display: inline-block;\r\n        padding-right: 5px;\r\n      }\r\n \r\n .footer-distributed .footer-links .link-1:before {\r\n        content: none;\r\n      }\r\n \r\n .footer-distributed .footer-right{\r\n        width: 20%;\r\n      }\r\n \r\n .footer-distributed .footer-company-about{\r\n        line-height: 20px;\r\n        color:  #92999f;\r\n        font-size: 13px;\r\n        font-weight: normal;\r\n        margin: 0;\r\n      }\r\n \r\n .footer-distributed .footer-company-about span{\r\n        display: block;\r\n        color:  #ffffff;\r\n        font-size: 14px;\r\n        font-weight: bold;\r\n        margin-bottom: 20px;\r\n      }\r\n \r\n @media (max-width: 880px) {\r\n      \r\n        .footer-distributed{\r\n          font: bold 14px sans-serif;\r\n        }\r\n      \r\n        .footer-distributed .footer-left,\r\n        .footer-distributed .footer-center,\r\n        .footer-distributed .footer-right{\r\n          display: block;\r\n          width: 100%;\r\n          margin-bottom: 40px;\r\n          text-align: center;\r\n        }\r\n        .footer-right h2 \r\n        {\r\n          color:black;\r\n        }\r\n      \r\n        .footer-distributed .footer-center i{\r\n          margin-left: 0;\r\n        }\r\n      \r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWxtZW51L2hvdGVsbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLHNCQUFzQjtDQUN2Qjs7Q0FFQTtHQUNFLGNBQWM7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCOztFQUVoQjs7Ozs7O0lBTUU7Q0FDSDs7Q0FDQTtHQUNFLGNBQWM7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7Q0FDQTtFQUNDO0lBQ0UsY0FBYztFQUNoQjtDQUNEOztDQUNBO0VBQ0MsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7Q0FDQTtFQUNDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGlCQUFpQjtFQUNqQix3Q0FBd0M7Q0FDekM7O0NBQ0E7RUFDQyxZQUFZO0NBQ2I7O0NBQ0E7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBR0c7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIscUNBQXFDO1FBQ3JDLHNCQUFzQjtRQUN0Qiw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLFdBQVc7UUFDWCxjQUFjO1FBQ2QsV0FBVztRQUNY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O1FBQ2YsZUFBZTtRQUNmLE9BQU87UUFDUCxXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLGtCQUFrQjtNQUNwQjs7Q0FFQTtRQUNFLGFBQWE7TUFDZjs7Q0FHQTtRQUNFLFVBQVU7TUFDWjs7Q0FFQTtRQUNFLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixTQUFTO01BQ1g7O0NBRUE7UUFDRSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsbUJBQW1CO01BQ3JCOztDQUlBOztRQUVFO1VBQ0UsMEJBQTBCO1FBQzVCOztRQUVBOzs7VUFHRSxjQUFjO1VBQ2QsV0FBVztVQUNYLG1CQUFtQjtVQUNuQixrQkFBa0I7UUFDcEI7UUFDQTs7VUFFRSxXQUFXO1FBQ2I7O1FBRUE7VUFDRSxjQUFjO1FBQ2hCOztNQUVGIiwiZmlsZSI6InNyYy9hcHAvaG90ZWxtZW51L2hvdGVsbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAsIC5yb3csIC50YWItcm93IHtcclxuICBtYXJnaW46IDNweCA4OXB4O1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gfVxyXG4gXHJcbiAubmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgei1pbmRleDogMztcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2U7XHJcbiB9XHJcbiBcclxuIC5icmFuZCB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogb3JhbmdlO1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gXHJcbiAgLyogZmxvYXQ6IGxlZnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAqL1xyXG4gfVxyXG4gLmJyYW5kIHNwYW4ge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbiB9XHJcbiBcclxuIC50b3AtbWVudSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMjAwbXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gfVxyXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAudG9wLW1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gfVxyXG4gLnRvcC1tZW51IGxpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gfVxyXG4gLnRvcC1tZW51IGxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC8qIHBhZGRpbmc6IDFlbTsgKi9cclxuIH1cclxuXHJcbiAuc2Nyb2xsIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gfVxyXG4gLnNjcm9sbCAudG9wLW1lbnUgbGkgYSwgLnNjcm9sbCAuYnJhbmQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuIH1cclxuIC5zY3JvbGwgLmhhbWJ1cmdlci1saW5lIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gfVxyXG5cclxuXHJcbiAgICAuaGVybyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDgwcHg7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKGVhdDUuanBnKTsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZXJvOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgLypiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSgjMjhlKSwgdG8oI2UxNCkpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyOGUsICNlMTQpOyovXHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZXJvIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZXJvIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZXJvIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGgxLCBoMiwgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMC41O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucm93OmFmdGVyLCAudGFiLXJvdzphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnJvdywgLnRhYi1yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudGFiLXJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hYmMgXHJcbiAgICAgIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgICB9XHJcbiAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICAgICB9XHJcbiAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCl7XHJcbiAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpe1xyXG4gICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgIHdpZHRoOiAzMy4zMzMzMyU7XHJcbiAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgLmNvbnRhaW5lciAudGl0bGV7XHJcbiAgICAgICAgIGNvbG9yOiAjMWExYTFhO1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgXHJcbiAgICAgICAuY2VudGVyZWQge1xyXG4gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAvKiB0b3A6IDAlO1xyXG4gICAgICAgICAgKi9cclxuICAgICAgICBcclxuICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMSUsIC0yOCUpOyAgXHJcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgICAgICB9XHJcbiAgICAgICAudGV4dC1ibG9jayBoMVxyXG4gICAgICAge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgfVxyXG4gICAgICAgLnRleHQtYmxvY2sge1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogMTMwcHg7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7IFxyXG4gICAgICAgICBoZWlnaHQ6IDk0MHB4O1xyXG4gICAgICAgICB3aWR0aDogOTQwcHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgLyogcGFkZGluZzogNDBweDsgKi9cclxuICAgICAgICAgLyogb3BhY2l0eTogMC45OyAqL1xyXG4gICAgICAgICBmb250LXNpemU6IDEwcHhcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgIC5wMVxyXG4gICAgIHtcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgIH1cclxuICAgICAgLml0ZW1cclxuICAgICAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5wYXJcclxuICAgICAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVke1xyXG4gICAgICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQ6IGJvbGQgMTZweCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHBhZGRpbmc6IDU1cHggNTBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnQsXHJcbiAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIsXHJcbiAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1yaWdodHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGVmdHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCBoM3tcclxuICAgICAgICBjb2xvcjogICNmZmZmZmY7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIDM2cHggJ09wZW4gU2FucycsIGN1cnNpdmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIGgzIHNwYW57XHJcbiAgICAgICAgY29sb3I6ICBvcmFuZ2VcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rc3tcclxuICAgICAgICBjb2xvcjogICNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgYXtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICBpbmhlcml0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1uYW1le1xyXG4gICAgICAgIGNvbG9yOiAgIzIyMjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgXHJcbiAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXJ7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjMzMzODNiO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICB3aWR0aDogMzhweDtcclxuICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIC5mb290ZXItY2VudGVyIGgzXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH0gKi9cclxuICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpLmZhLWVudmVsb3Ble1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwe1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwIHNwYW57XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OjI7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCBhe1xyXG4gICAgICAgIGNvbG9yOiAgbGlnaHRzZWFncmVlbjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgYTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwifFwiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjMwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgLmxpbmstMTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHR7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXR7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICAjOTI5OTlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXQgc3BhbntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcbiAgICAgIFxyXG4gICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWR7XHJcbiAgICAgICAgICBmb250OiBib2xkIDE0cHggc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4gICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIsXHJcbiAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXItcmlnaHQgaDIgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGl7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/hotelmenu/hotelmenu.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/hotelmenu/hotelmenu.component.ts ***!
    \**************************************************/

  /*! exports provided: HotelmenuComponent */

  /***/
  function srcAppHotelmenuHotelmenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelmenuComponent", function () {
      return HotelmenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HotelmenuComponent = /*#__PURE__*/function () {
      function HotelmenuComponent() {
        _classCallCheck(this, HotelmenuComponent);
      }

      _createClass(HotelmenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUrl1",
        value: function getUrl1() {
          return "url('../../assets/images/eat9.jpg')";
        }
      }]);

      return HotelmenuComponent;
    }();

    HotelmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotelmenu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotelmenu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelmenu/hotelmenu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotelmenu.component.css */
      "./src/app/hotelmenu/hotelmenu.component.css")).default]
    })], HotelmenuComponent);
    /***/
  },

  /***/
  "./src/app/hotelrooms/hotelrooms.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/hotelrooms/hotelrooms.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotelroomsHotelroomsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrap, .row, .tab-row {\r\n  margin: 3px 89px;\r\n  max-width: 1000px;\r\n }\r\n \r\n .nav {\r\n  position: fixed;\r\n  background-color: black;\r\n  z-index: 3;\r\n  height: 50px;\r\n  width: 100%;\r\n  -webkit-transition: 300ms ease;\r\n  transition: 300ms ease;\r\n }\r\n \r\n .brand {\r\n   display: block;\r\n  float: left;\r\n  height: 40px;\r\n  color: orange;\r\n  padding: 7px;\r\n  margin-left: 2px;\r\n \r\n  /* float: left;\r\n  line-height: 60px;\r\n  \r\n  color: white;\r\n  font-weight: 500;\r\n  padding-left: 1rem;\r\n   */\r\n }\r\n \r\n .brand span {\r\n   display: block;\r\n  margin-left: 30px;\r\n  height: 40px;\r\n  line-height: 24px;\r\n  text-decoration: none;\r\n  color: orange;\r\n  padding: 0 1em;\r\n }\r\n \r\n .top-menu {\r\n  display: none;\r\n  position: relative;\r\n  float: right;\r\n  -webkit-transition: 200ms ease;\r\n  transition: 200ms ease;\r\n  font-weight: 300;\r\n  height: 40px;\r\n }\r\n \r\n @media screen and (min-width: 640px) {\r\n  .top-menu {\r\n    display: block;\r\n  }\r\n }\r\n \r\n .top-menu li {\r\n  display: block;\r\n  float: left;\r\n  height: 40px;\r\n  color: white;\r\n  padding: 6px 12px;\r\n }\r\n \r\n .top-menu li a {\r\n  display: block;\r\n  margin-left: 250px;\r\n  height: 40px;\r\n  line-height: 20px;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  /* padding: 1em; */\r\n }\r\n \r\n .scroll {\r\n  background: white;\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\r\n }\r\n \r\n .scroll .top-menu li a, .scroll .brand {\r\n  color: black;\r\n }\r\n \r\n .scroll .hamburger-line {\r\n  background: #000;\r\n }\r\n \r\n .hero {\r\n   position: relative;\r\n   z-index: 1;\r\n   height: 100vh;\r\n   max-height: 1080px;\r\n   /* background-image: url(2.jpg); */\r\n   background-size: cover;\r\n   background-attachment: fixed;\r\n   background-position: center;\r\n   color: #fff;\r\n   display: table;\r\n   width: 100%;\r\n   text-align: center;\r\n   text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\r\n  }\r\n \r\n .hero:after {\r\n   content: \"\";\r\n   position: absolute;\r\n   top: 0;\r\n   left: 0;\r\n   right: 0;\r\n   bottom: 0;\r\n   /*background: -webkit-gradient(linear, left top, right bottom, from(#28e), to(#e14));\r\n   background: linear-gradient(to bottom right, #28e, #e14);*/\r\n   opacity: 0.9;\r\n   z-index: -1;\r\n  }\r\n \r\n .hero h1 {\r\n   font-size: 4em;\r\n   margin-bottom: 1rem;\r\n  }\r\n \r\n .hero p {\r\n   font-size: 2em;\r\n   max-width: 80%;\r\n   margin-left: auto;\r\n   margin-right: auto;\r\n   font-weight: 300;\r\n  }\r\n \r\n .hero .content {\r\n   display: table-cell;\r\n   vertical-align: middle;\r\n  }\r\n \r\n .hero .content h1\r\n  {\r\n    text-shadow: 3px 2px black;\r\n  }\r\n \r\n h1, h2 {\r\n   margin: 1em 0;\r\n  }\r\n \r\n h2 {\r\n   font-size: 2rem;\r\n   line-height: 0.5;\r\n  }\r\n \r\n a {\r\n   color: #e14;\r\n   text-decoration: none;\r\n  }\r\n \r\n a:hover {\r\n   text-decoration: underline;\r\n  }\r\n \r\n .row:after, .tab-row:after {\r\n   content: \"\";\r\n   display: table;\r\n   clear: both;\r\n  }\r\n \r\n .row, .tab-row {\r\n   display: block;\r\n  }\r\n \r\n .tab-row {\r\n   display: table;\r\n   height: 100%;\r\n   vertical-align: middle;\r\n  }\r\n \r\n .demo\r\n   {\r\n       margin-left: 150px;\r\n   }\r\n \r\n input[type=text] {\r\n    background-color:black;\r\n    opacity: 0.7;\r\n    color: white;\r\n    width: 17%;\r\n    padding: 9px 20px;\r\n    margin: 3px 0;\r\n    box-sizing: border-box;\r\n    border: 1px solid black;\r\n    border-radius: 4px;\r\n    font-size: 16px;\r\n\r\n  }\r\n \r\n input[type=button]{\r\n    width: 15%;\r\n    background-color:blue;\r\n    color:white;\r\n    padding: 9px 20px;\r\n    text-decoration: none;\r\n    margin: 3px 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid white;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n  }\r\n \r\n h1, h2, h3 {\r\n     font-family: 'Averia Serif Libre', cursive;\r\n   }\r\n \r\n .Rooms {\r\n     display: -webkit-inline-box;\r\n     display: inline-flex;\r\n   \r\n   }\r\n \r\n .a {\r\n    width: 500px;\r\n    height: 300px;\r\n  }\r\n \r\n .portfolio-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    \r\n  }\r\n \r\n .portfolio-card {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height: 100%;\r\n    flex-wrap: wrap;\r\n    margin: 0 0 50px 0;\r\n    border: 1px solid rgba(111, 197, 231, 0.336);\r\n    max-width: 1500px;\r\n    min-width: 1000px;\r\n    padding: 20px 20px;\r\n    flex-shrink: 2;\r\n  }\r\n \r\n @media only screen and (max-width: 820px) {\r\n    .portfolio-card {\r\n      max-width: 900px;\r\n    }\r\n  }\r\n \r\n .portfolioImage {\r\n    /* width: 500px;\r\n    height: 340px; */\r\n    max-width: 700px;\r\n    max-height: 340px;\r\n    margin: 10px 10px;\r\n    position: relative;\r\n    flex-shrink: 2; \r\n    box-shadow: 0px 0px 17px -2px rgba(0,0,0,0.48);\r\n  }\r\n \r\n .portfolioImage:hover img {\r\n    cursor: pointer;\r\n    background-color: black;\r\n    opacity: 0.4;\r\n  }\r\n \r\n .portfolioImage:hover .middle {\r\n    opacity: 1;\r\n    display: block;\r\n  }\r\n \r\n .portfolioContent {\r\n    width: 350px;\r\n    padding: 10px 10px;\r\n    text-align: left;\r\n    height: 100%;\r\n    max-height: 300px;\r\n    flex-shrink: 2;\r\n    /* border: 0.1px solid rgb(225, 221, 221); */\r\n  }\r\n \r\n .portfolioContent p {\r\n    font-size: 0.8rem;\r\n  }\r\n \r\n .middle {\r\n    opacity: 1;\r\n    position: absolute;\r\n    background-color: rgb(24, 104, 223);\r\n    color: white;\r\n    left: 41%;\r\n    top: 46%;\r\n    width: 75px;\r\n    text-align: center;\r\n    display: none;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n  }\r\n \r\n .tags {\r\n    background-color: rgb(114, 179, 194);\r\n    display: inline-block;\r\n    padding: 5px;\r\n    color: white;\r\n    border-radius: 3px;\r\n  }\r\n \r\n .cardCategory {\r\n    text-transform: uppercase;\r\n    color: rgb(122, 139, 164);\r\n  }\r\n \r\n .footer-distributed{\r\n    background:black;\r\n    opacity: 0.9;\r\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    text-align: left;\r\n    font: bold 16px sans-serif;\r\n    padding: 55px 50px;\r\n  }\r\n \r\n .footer-distributed .footer-left,\r\n  .footer-distributed .footer-center,\r\n  .footer-distributed .footer-right{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n  }\r\n \r\n .footer-distributed .footer-left{\r\n    width: 40%;\r\n  }\r\n \r\n .footer-distributed h3{\r\n    color:  #ffffff;\r\n    font: normal 36px 'Open Sans', cursive;\r\n    margin: 0;\r\n  }\r\n \r\n .footer-distributed h3 span{\r\n    color:  orange\r\n  }\r\n \r\n .footer-distributed .footer-links{\r\n    color:  #ffffff;\r\n    margin: 20px 0 12px;\r\n    padding: 0;\r\n  }\r\n \r\n .footer-distributed .footer-links a{\r\n    display:inline-block;\r\n    line-height: 1.8;\r\n    font-weight:400;\r\n    text-decoration: none;\r\n    color:  inherit;\r\n  }\r\n \r\n .footer-distributed .footer-company-name{\r\n    color:  #222;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    margin: 0;\r\n  }\r\n \r\n .footer-distributed .footer-center{\r\n    width: 35%;\r\n  }\r\n \r\n .footer-distributed .footer-center i{\r\n    background-color:  #33383b;\r\n    color: #ffffff;\r\n    font-size: 25px;\r\n    width: 38px;\r\n    height: 38px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    line-height: 42px;\r\n    margin: 10px 15px;\r\n    vertical-align: middle;\r\n  }\r\n \r\n /* .footer-center h3\r\n  {\r\n    color: black;\r\n  } */\r\n \r\n .footer-distributed .footer-center i.fa-envelope{\r\n    font-size: 17px;\r\n    line-height: 38px;\r\n  }\r\n \r\n .footer-distributed .footer-center p{\r\n    display: inline-block;\r\n    color: #ffffff;\r\n    font-weight:400;\r\n    vertical-align: middle;\r\n    margin:0;\r\n  }\r\n \r\n .footer-distributed .footer-center p span{\r\n    display:block;\r\n    font-weight: normal;\r\n    font-size:14px;\r\n    line-height:2;\r\n  }\r\n \r\n .footer-distributed .footer-center p a{\r\n    color:  lightseagreen;\r\n    text-decoration: none;;\r\n  }\r\n \r\n .footer-distributed .footer-links a:before {\r\n    content: \"|\";\r\n    font-weight:300;\r\n    font-size: 20px;\r\n    left: 0;\r\n    color: #fff;\r\n    display: inline-block;\r\n    padding-right: 5px;\r\n  }\r\n \r\n .footer-distributed .footer-links .link-1:before {\r\n    content: none;\r\n  }\r\n \r\n .footer-distributed .footer-right{\r\n    width: 20%;\r\n  }\r\n \r\n .footer-distributed .footer-company-about{\r\n    line-height: 20px;\r\n    color:  #92999f;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    margin: 0;\r\n  }\r\n \r\n .footer-distributed .footer-company-about span{\r\n    display: block;\r\n    color:  #ffffff;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    margin-bottom: 20px;\r\n  }\r\n \r\n @media (max-width: 880px) {\r\n  \r\n    .footer-distributed{\r\n      font: bold 14px sans-serif;\r\n    }\r\n  \r\n    .footer-distributed .footer-left,\r\n    .footer-distributed .footer-center,\r\n    .footer-distributed .footer-right{\r\n      display: block;\r\n      width: 100%;\r\n      margin-bottom: 40px;\r\n      text-align: center;\r\n    }\r\n    .footer-right h2 \r\n    {\r\n      color:black;\r\n    }\r\n  \r\n    .footer-distributed .footer-center i{\r\n      margin-left: 0;\r\n    }\r\n  \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWxyb29tcy9ob3RlbHJvb21zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsc0JBQXNCO0NBQ3ZCOztDQUVBO0dBQ0UsY0FBYztFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7O0VBRWhCOzs7Ozs7SUFNRTtDQUNIOztDQUNBO0dBQ0UsY0FBYztFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsY0FBYztDQUNmOztDQUVBO0VBQ0MsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiOztDQUNBO0VBQ0M7SUFDRSxjQUFjO0VBQ2hCO0NBQ0Q7O0NBQ0E7RUFDQyxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCOztDQUNBO0VBQ0MsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsaUJBQWlCO0VBQ2pCLHdDQUF3QztDQUN6Qzs7Q0FDQTtFQUNDLFlBQVk7Q0FDYjs7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjs7Q0FHQztHQUNDLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsYUFBYTtHQUNiLGtCQUFrQjtHQUNsQixrQ0FBa0M7R0FDbEMsc0JBQXNCO0dBQ3RCLDRCQUE0QjtHQUM1QiwyQkFBMkI7R0FDM0IsV0FBVztHQUNYLGNBQWM7R0FDZCxXQUFXO0dB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O0NBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztDQUlBOztJQUVFO01BQ0UsMEJBQTBCO0lBQzVCOztJQUVBOzs7TUFHRSxjQUFjO01BQ2QsV0FBVztNQUNYLG1CQUFtQjtNQUNuQixrQkFBa0I7SUFDcEI7SUFDQTs7TUFFRSxXQUFXO0lBQ2I7O0lBRUE7TUFDRSxjQUFjO0lBQ2hCOztFQUVGIiwiZmlsZSI6InNyYy9hcHAvaG90ZWxyb29tcy9ob3RlbHJvb21zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCwgLnJvdywgLnRhYi1yb3cge1xyXG4gIG1hcmdpbjogM3B4IDg5cHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiB9XHJcbiBcclxuIC5uYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB6LWluZGV4OiAzO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZTtcclxuIH1cclxuIFxyXG4gLmJyYW5kIHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiBcclxuICAvKiBmbG9hdDogbGVmdDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICovXHJcbiB9XHJcbiAuYnJhbmQgc3BhbiB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxuICBwYWRkaW5nOiAwIDFlbTtcclxuIH1cclxuIFxyXG4gLnRvcC1tZW51IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiB9XHJcbiBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gIC50b3AtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiB9XHJcbiAudG9wLW1lbnUgbGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiB9XHJcbiAudG9wLW1lbnUgbGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLyogcGFkZGluZzogMWVtOyAqL1xyXG4gfVxyXG5cclxuIC5zY3JvbGwge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiB9XHJcbiAuc2Nyb2xsIC50b3AtbWVudSBsaSBhLCAuc2Nyb2xsIC5icmFuZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG4gLnNjcm9sbCAuaGFtYnVyZ2VyLWxpbmUge1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiB9XHJcblxyXG4gIFxyXG4gIC5oZXJvIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICB6LWluZGV4OiAxO1xyXG4gICBoZWlnaHQ6IDEwMHZoO1xyXG4gICBtYXgtaGVpZ2h0OiAxMDgwcHg7XHJcbiAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgyLmpwZyk7ICovXHJcbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgY29sb3I6ICNmZmY7XHJcbiAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB0ZXh0LXNoYWRvdzogMXB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICAuaGVybzphZnRlciB7XHJcbiAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgdG9wOiAwO1xyXG4gICBsZWZ0OiAwO1xyXG4gICByaWdodDogMDtcclxuICAgYm90dG9tOiAwO1xyXG4gICAvKmJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKCMyOGUpLCB0bygjZTE0KSk7XHJcbiAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyOGUsICNlMTQpOyovXHJcbiAgIG9wYWNpdHk6IDAuOTtcclxuICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIC5oZXJvIGgxIHtcclxuICAgZm9udC1zaXplOiA0ZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIC5oZXJvIHAge1xyXG4gICBmb250LXNpemU6IDJlbTtcclxuICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5oZXJvIC5jb250ZW50IHtcclxuICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgXHJcbiAgLmhlcm8gLmNvbnRlbnQgaDFcclxuICB7XHJcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDJweCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaDEsIGgyIHtcclxuICAgbWFyZ2luOiAxZW0gMDtcclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICBmb250LXNpemU6IDJyZW07XHJcbiAgIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICBjb2xvcjogI2UxNDtcclxuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBhOmhvdmVyIHtcclxuICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3c6YWZ0ZXIsIC50YWItcm93OmFmdGVyIHtcclxuICAgY29udGVudDogXCJcIjtcclxuICAgZGlzcGxheTogdGFibGU7XHJcbiAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAucm93LCAudGFiLXJvdyB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAudGFiLXJvdyB7XHJcbiAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gXHJcbiAgIC5kZW1vXHJcbiAgIHtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICAgfVxyXG4gICBcclxuICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDE3JTtcclxuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xyXG4gICAgbWFyZ2luOiAzcHggMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPWJ1dHRvbl17XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibHVlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbjogM3B4IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gXHJcbiBcclxuICAgXHJcbiAgIGgxLCBoMiwgaDMge1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnQXZlcmlhIFNlcmlmIExpYnJlJywgY3Vyc2l2ZTtcclxuICAgfVxyXG4gICBcclxuICAgXHJcbiAgIFxyXG4gICAuUm9vbXMge1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICBcclxuICAgfVxyXG4gICAuYSB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuIFxyXG4gICAucG9ydGZvbGlvLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnBvcnRmb2xpby1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luOiAwIDAgNTBweCAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTEsIDE5NywgMjMxLCAwLjMzNik7XHJcbiAgICBtYXgtd2lkdGg6IDE1MDBweDtcclxuICAgIG1pbi13aWR0aDogMTAwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgIC5wb3J0Zm9saW8tY2FyZCB7XHJcbiAgICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5wb3J0Zm9saW9JbWFnZSB7XHJcbiAgICAvKiB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM0MHB4OyAqL1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDM0MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4LXNocmluazogMjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxN3B4IC0ycHggcmdiYSgwLDAsMCwwLjQ4KTsgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE3cHggLTJweCByZ2JhKDAsMCwwLDAuNDgpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAucG9ydGZvbGlvSW1hZ2U6aG92ZXIgaW1nIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvSW1hZ2U6aG92ZXIgLm1pZGRsZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5wb3J0Zm9saW9Db250ZW50IHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIGZsZXgtc2hyaW5rOiAyO1xyXG4gICAgLyogYm9yZGVyOiAwLjFweCBzb2xpZCByZ2IoMjI1LCAyMjEsIDIyMSk7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW9Db250ZW50IHAge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5taWRkbGUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTA0LCAyMjMpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGVmdDogNDElO1xyXG4gICAgdG9wOiA0NiU7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC50YWdzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDE3OSwgMTk0KTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmRDYXRlZ29yeSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHJnYigxMjIsIDEzOSwgMTY0KTtcclxuICB9XHJcblxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWR7XHJcbiAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250OiBib2xkIDE2cHggc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDU1cHggNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnQsXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlcixcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxuIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0e1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCBoM3tcclxuICAgIGNvbG9yOiAgI2ZmZmZmZjtcclxuICAgIGZvbnQ6IG5vcm1hbCAzNnB4ICdPcGVuIFNhbnMnLCBjdXJzaXZlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIGgzIHNwYW57XHJcbiAgICBjb2xvcjogIG9yYW5nZVxyXG4gIH1cclxuICBcclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3N7XHJcbiAgICBjb2xvcjogICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDIwcHggMCAxMnB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtzIGF7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LW5hbWV7XHJcbiAgICBjb2xvcjogICMyMjI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXJ7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzMzMzgzYjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgd2lkdGg6IDM4cHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgLyogLmZvb3Rlci1jZW50ZXIgaDNcclxuICB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfSAqL1xyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgaS5mYS1lbnZlbG9wZXtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW46MDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwIHNwYW57XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MjtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwIGF7XHJcbiAgICBjb2xvcjogIGxpZ2h0c2VhZ3JlZW47XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgYTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJ8XCI7XHJcbiAgICBmb250LXdlaWdodDozMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyAubGluay0xOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHR7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1hYm91dHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICAjOTI5OTlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXQgc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogODgwcHgpIHtcclxuICBcclxuICAgIC5mb290ZXItZGlzdHJpYnV0ZWR7XHJcbiAgICAgIGZvbnQ6IGJvbGQgMTRweCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnQsXHJcbiAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyLFxyXG4gICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5mb290ZXItcmlnaHQgaDIgXHJcbiAgICB7XHJcbiAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpe1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICBcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/hotelrooms/hotelrooms.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/hotelrooms/hotelrooms.component.ts ***!
    \****************************************************/

  /*! exports provided: HotelroomsComponent */

  /***/
  function srcAppHotelroomsHotelroomsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelroomsComponent", function () {
      return HotelroomsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../room */
    "./src/app/room.ts");
    /* harmony import */


    var _user_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-room.service */
    "./src/app/user-room.service.ts");

    var HotelroomsComponent = /*#__PURE__*/function () {
      function HotelroomsComponent(service) {
        _classCallCheck(this, HotelroomsComponent);

        this.service = service;
        this.room = new _room__WEBPACK_IMPORTED_MODULE_2__["Room"]("", "", 0, 0);
      }

      _createClass(HotelroomsComponent, [{
        key: "roomready",
        value: function roomready() {
          var _this3 = this;

          var response = this.service.doReservationRoom(this.room);
          response.subscribe(function (data) {
            return _this3.message = data;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUrl",
        value: function getUrl() {
          return "url('../../assets/images/room1.jpg')";
        }
      }]);

      return HotelroomsComponent;
    }();

    HotelroomsComponent.ctorParameters = function () {
      return [{
        type: _user_room_service__WEBPACK_IMPORTED_MODULE_3__["UserRoomService"]
      }];
    };

    HotelroomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotelrooms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotelrooms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelrooms/hotelrooms.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotelrooms.component.css */
      "./src/app/hotelrooms/hotelrooms.component.css")).default]
    })], HotelroomsComponent);
    /***/
  },

  /***/
  "./src/app/hotelstandard/hotelstandard.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/hotelstandard/hotelstandard.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotelstandardHotelstandardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* import '~@fortawesome/fontawesome-free/css/all.min.css' */\r\n    \r\n    /* button, input {\r\n     font-family: Hind, sans-serif;\r\n     font-size: 1rem;\r\n     outline: none;\r\n    }\r\n     */\r\n    \r\n    .wrap, .row, .tab-row {\r\n        margin: 3px 89px;\r\n        max-width: 1000px;\r\n       }\r\n    \r\n    .nav {\r\n        position: fixed;\r\n        background-color: black;\r\n        z-index: 3;\r\n        height: 50px;\r\n        width: 100%;\r\n        -webkit-transition: 300ms ease;\r\n        transition: 300ms ease;\r\n       }\r\n    \r\n    .brand {\r\n         display: block;\r\n        float: left;\r\n        height: 40px;\r\n        color: orange;\r\n        padding: 7px;\r\n        margin-left: 2px;\r\n       \r\n        /* float: left;\r\n        line-height: 60px;\r\n        \r\n        color: white;\r\n        font-weight: 500;\r\n        padding-left: 1rem;\r\n         */\r\n       }\r\n    \r\n    .brand span {\r\n         display: block;\r\n        margin-left: 30px;\r\n        height: 40px;\r\n        line-height: 24px;\r\n        text-decoration: none;\r\n        color: orange;\r\n        padding: 0 1em;\r\n       }\r\n    \r\n    .top-menu {\r\n        display: none;\r\n        position: relative;\r\n        float: right;\r\n        -webkit-transition: 200ms ease;\r\n        transition: 200ms ease;\r\n        font-weight: 300;\r\n        height: 40px;\r\n       }\r\n    \r\n    @media screen and (min-width: 640px) {\r\n        .top-menu {\r\n          display: block;\r\n        }\r\n       }\r\n    \r\n    .top-menu li {\r\n        display: block;\r\n        float: left;\r\n        height: 40px;\r\n        color: white;\r\n        padding: 6px 12px;\r\n       }\r\n    \r\n    .top-menu li a {\r\n        display: block;\r\n        margin-left: 250px;\r\n        height: 40px;\r\n        line-height: 20px;\r\n        text-decoration: none;\r\n        color: #fff;\r\n        /* padding: 1em; */\r\n       }\r\n    \r\n    .scroll {\r\n        background: white;\r\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\r\n       }\r\n    \r\n    .scroll .top-menu li a, .scroll .brand {\r\n        color: black;\r\n       }\r\n    \r\n    .scroll .hamburger-line {\r\n        background: #000;\r\n       }\r\n    \r\n    .hero {\r\n           position: relative;\r\n           z-index: 1;\r\n           height: 100vh;\r\n           max-height: 1080px;\r\n           /* background-image: url(2.jpg); */\r\n           background-size: cover;\r\n           background-attachment: fixed;\r\n           background-position: center;\r\n           color: #fff;\r\n           display: table;\r\n           width: 100%;\r\n           text-align: center;\r\n           text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\r\n          }\r\n    \r\n    .hero:after {\r\n           content: \"\";\r\n           position: absolute;\r\n           top: 0;\r\n           left: 0;\r\n           right: 0;\r\n           bottom: 0;\r\n           /*background: -webkit-gradient(linear, left top, right bottom, from(#28e), to(#e14));\r\n           background: linear-gradient(to bottom right, #28e, #e14);*/\r\n           opacity: 0.9;\r\n           z-index: -1;\r\n          }\r\n    \r\n    .hero h1 {\r\n           font-size: 4em;\r\n           margin-bottom: 1rem;\r\n          }\r\n    \r\n    .hero p {\r\n           font-size: 2em;\r\n           max-width: 80%;\r\n           margin-left: auto;\r\n           margin-right: auto;\r\n           font-weight: 300;\r\n          }\r\n    \r\n    .hero .content {\r\n           display: table-cell;\r\n           vertical-align: middle;\r\n          }\r\n    \r\n    .hero .content h1\r\n          {\r\n            text-shadow: 3px 2px black;\r\n          }\r\n    \r\n    h1, h2, p {\r\n           margin: 1em 0;\r\n          }\r\n    \r\n    h2 {\r\n           font-size: 2rem;\r\n           line-height: 0.5;\r\n          }\r\n    \r\n    a {\r\n           color: #e14;\r\n           text-decoration: none;\r\n          }\r\n    \r\n    a:hover {\r\n           text-decoration: underline;\r\n          }\r\n    \r\n    .row:after, .tab-row:after {\r\n           content: \"\";\r\n           display: table;\r\n           clear: both;\r\n          }\r\n    \r\n    .row, .tab-row {\r\n           display: block;\r\n          }\r\n    \r\n    .tab-row {\r\n           display: table;\r\n           height: 100%;\r\n           vertical-align: middle;\r\n          }\r\n    \r\n    .abc\r\n          {\r\n            margin-left: 200px;\r\n          }\r\n    \r\n    .abc h2\r\n          {\r\n           font-size: 40px;\r\n          }\r\n    \r\n    .i \r\n          {\r\n            display: -webkit-box;\r\n            display: flex;\r\n          }\r\n    \r\n    input[type=text] {\r\n           background-color:black;\r\n           opacity: 0.7;\r\n           color: white;\r\n           width: 17%;\r\n           padding: 9px 20px;\r\n           margin: 3px 0;\r\n           box-sizing: border-box;\r\n           border: 1px solid black;\r\n           border-radius: 4px;\r\n           font-size: 16px;\r\n       \r\n         }\r\n    \r\n    input[type=button]{\r\n           width: 15%;\r\n           background-color:blue;\r\n           color:white;\r\n           padding: 9px 20px;\r\n           text-decoration: none;\r\n           margin: 3px 0;\r\n           box-sizing: border-box;\r\n           border: 2px solid white;\r\n           border-radius: 4px;\r\n           cursor: pointer;\r\n           font-size: 16px;\r\n         }\r\n    \r\n    .prop\r\n         {\r\n           font-size: 21px;\r\n         }\r\n    \r\n    .footer-distributed{\r\n           background:black;\r\n           opacity: 0.9;\r\n           box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n           box-sizing: border-box;\r\n           width: 100%;\r\n           text-align: left;\r\n           font: bold 16px sans-serif;\r\n           padding: 55px 50px;\r\n         }\r\n    \r\n    .footer-distributed .footer-left,\r\n         .footer-distributed .footer-center,\r\n         .footer-distributed .footer-right{\r\n           display: inline-block;\r\n           vertical-align: top;\r\n         }\r\n    \r\n    .footer-distributed .footer-left{\r\n           width: 40%;\r\n         }\r\n    \r\n    .footer-distributed h3{\r\n           color:  #ffffff;\r\n           font: normal 36px 'Open Sans', cursive;\r\n           margin: 0;\r\n         }\r\n    \r\n    .footer-distributed h3 span{\r\n           color:  orange\r\n         }\r\n    \r\n    .footer-distributed .footer-links{\r\n           color:  #ffffff;\r\n           margin: 20px 0 12px;\r\n           padding: 0;\r\n         }\r\n    \r\n    .footer-distributed .footer-links a{\r\n           display:inline-block;\r\n           line-height: 1.8;\r\n           font-weight:400;\r\n           text-decoration: none;\r\n           color:  inherit;\r\n         }\r\n    \r\n    .footer-distributed .footer-company-name{\r\n           color:  #222;\r\n           font-size: 14px;\r\n           font-weight: normal;\r\n           margin: 0;\r\n         }\r\n    \r\n    .footer-distributed .footer-center{\r\n           width: 35%;\r\n         }\r\n    \r\n    .footer-distributed .footer-center i{\r\n           background-color:  #33383b;\r\n           color: #ffffff;\r\n           font-size: 25px;\r\n           width: 38px;\r\n           height: 38px;\r\n           border-radius: 50%;\r\n           text-align: center;\r\n           line-height: 42px;\r\n           margin: 10px 15px;\r\n           vertical-align: middle;\r\n         }\r\n    \r\n    /* .footer-center h3\r\n         {\r\n           color: black;\r\n         } */\r\n    \r\n    .footer-distributed .footer-center i.fa-envelope{\r\n           font-size: 17px;\r\n           line-height: 38px;\r\n         }\r\n    \r\n    .footer-distributed .footer-center p{\r\n           display: inline-block;\r\n           color: #ffffff;\r\n           font-weight:400;\r\n           vertical-align: middle;\r\n           margin:0;\r\n         }\r\n    \r\n    .footer-distributed .footer-center p span{\r\n           display:block;\r\n           font-weight: normal;\r\n           font-size:14px;\r\n           line-height:2;\r\n         }\r\n    \r\n    .footer-distributed .footer-center p a{\r\n           color:  lightseagreen;\r\n           text-decoration: none;;\r\n         }\r\n    \r\n    .footer-distributed .footer-links a:before {\r\n           content: \"|\";\r\n           font-weight:300;\r\n           font-size: 20px;\r\n           left: 0;\r\n           color: #fff;\r\n           display: inline-block;\r\n           padding-right: 5px;\r\n         }\r\n    \r\n    .footer-distributed .footer-links .link-1:before {\r\n           content: none;\r\n         }\r\n    \r\n    .footer-distributed .footer-right{\r\n           width: 20%;\r\n         }\r\n    \r\n    .footer-distributed .footer-company-about{\r\n           line-height: 20px;\r\n           color:  #92999f;\r\n           font-size: 13px;\r\n           font-weight: normal;\r\n           margin: 0;\r\n         }\r\n    \r\n    .footer-distributed .footer-company-about span{\r\n           display: block;\r\n           color:  #ffffff;\r\n           font-size: 14px;\r\n           font-weight: bold;\r\n           margin-bottom: 20px;\r\n         }\r\n    \r\n    @media (max-width: 880px) {\r\n         \r\n           .footer-distributed{\r\n             font: bold 14px sans-serif;\r\n           }\r\n         \r\n           .footer-distributed .footer-left,\r\n           .footer-distributed .footer-center,\r\n           .footer-distributed .footer-right{\r\n             display: block;\r\n             width: 100%;\r\n             margin-bottom: 40px;\r\n             text-align: center;\r\n           }\r\n           .footer-right h2 \r\n           {\r\n             color:black;\r\n           }\r\n         \r\n           .footer-distributed .footer-center i{\r\n             margin-left: 0;\r\n           }\r\n         \r\n         }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWxzdGFuZGFyZC9ob3RlbHN0YW5kYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNERBQTREOztJQUV4RDs7Ozs7TUFLRTs7SUFDRDtRQUNHLGdCQUFnQjtRQUNoQixpQkFBaUI7T0FDbEI7O0lBRUE7UUFDQyxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLDhCQUE4QjtRQUM5QixzQkFBc0I7T0FDdkI7O0lBRUE7U0FDRSxjQUFjO1FBQ2YsV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO1FBQ2IsWUFBWTtRQUNaLGdCQUFnQjs7UUFFaEI7Ozs7OztVQU1FO09BQ0g7O0lBQ0E7U0FDRSxjQUFjO1FBQ2YsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixjQUFjO09BQ2Y7O0lBRUE7UUFDQyxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWiw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixZQUFZO09BQ2I7O0lBQ0E7UUFDQztVQUNFLGNBQWM7UUFDaEI7T0FDRDs7SUFDQTtRQUNDLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUI7T0FDbEI7O0lBQ0E7UUFDQyxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLFdBQVc7UUFDWCxrQkFBa0I7T0FDbkI7O0lBRUE7UUFDQyxpQkFBaUI7UUFDakIsd0NBQXdDO09BQ3pDOztJQUNBO1FBQ0MsWUFBWTtPQUNiOztJQUNBO1FBQ0MsZ0JBQWdCO09BQ2pCOztJQUdHO1dBQ0Msa0JBQWtCO1dBQ2xCLFVBQVU7V0FDVixhQUFhO1dBQ2Isa0JBQWtCO1dBQ2xCLGtDQUFrQztXQUNsQyxzQkFBc0I7V0FDdEIsNEJBQTRCO1dBQzVCLDJCQUEy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VUFBVTtTQUNaOztJQUVBO1dBQ0UsaUJBQWlCO1dBQ2pCLGVBQWU7V0FDZixlQUFlO1dBQ2YsbUJBQW1CO1dBQ25CLFNBQVM7U0FDWDs7SUFFQTtXQUNFLGNBQWM7V0FDZCxlQUFlO1dBQ2YsZUFBZTtXQUNmLGlCQUFpQjtXQUNqQixtQkFBbUI7U0FDckI7O0lBSUE7O1dBRUU7YUFDRSwwQkFBMEI7V0FDNUI7O1dBRUE7OzthQUdFLGNBQWM7YUFDZCxXQUFXO2FBQ1gsbUJBQW1CO2FBQ25CLGtCQUFrQjtXQUNwQjtXQUNBOzthQUVFLFdBQVc7V0FDYjs7V0FFQTthQUNFLGNBQWM7V0FDaEI7O1NBRUYiLCJmaWxlIjoic3JjL2FwcC9ob3RlbHN0YW5kYXJkL2hvdGVsc3RhbmRhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCAnfkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycgKi9cclxuICAgIFxyXG4gICAgLyogYnV0dG9uLCBpbnB1dCB7XHJcbiAgICAgZm9udC1mYW1pbHk6IEhpbmQsIHNhbnMtc2VyaWY7XHJcbiAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAgKi9cclxuICAgICAud3JhcCwgLnJvdywgLnRhYi1yb3cge1xyXG4gICAgICAgIG1hcmdpbjogM3B4IDg5cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIC5uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZTtcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgLmJyYW5kIHtcclxuICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICAgICBcclxuICAgICAgICAvKiBmbG9hdDogbGVmdDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgICBcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICovXHJcbiAgICAgICB9XHJcbiAgICAgICAuYnJhbmQgc3BhbiB7XHJcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IG9yYW5nZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDFlbTtcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgLnRvcC1tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICB9XHJcbiAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgICAgIC50b3AtbWVudSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgICAudG9wLW1lbnUgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICB9XHJcbiAgICAgICAudG9wLW1lbnUgbGkgYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLyogcGFkZGluZzogMWVtOyAqL1xyXG4gICAgICAgfVxyXG4gICAgICBcclxuICAgICAgIC5zY3JvbGwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICB9XHJcbiAgICAgICAuc2Nyb2xsIC50b3AtbWVudSBsaSBhLCAuc2Nyb2xsIC5icmFuZCB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgfVxyXG4gICAgICAgLnNjcm9sbCAuaGFtYnVyZ2VyLWxpbmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICB9XHJcbiAgIFxyXG4gICBcclxuICAgICAgICAgIC5oZXJvIHtcclxuICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgIG1heC1oZWlnaHQ6IDEwODBweDtcclxuICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoMi5qcGcpOyAqL1xyXG4gICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVybzphZnRlciB7XHJcbiAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgIC8qYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCBib3R0b20sIGZyb20oIzI4ZSksIHRvKCNlMTQpKTtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMjhlLCAjZTE0KTsqL1xyXG4gICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZXJvIGgxIHtcclxuICAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlcm8gcCB7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVybyAuY29udGVudCB7XHJcbiAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuaGVybyAuY29udGVudCBoMVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDJweCBibGFjaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBoMSwgaDIsIHAge1xyXG4gICAgICAgICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgY29sb3I6ICNlMTQ7XHJcbiAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5yb3c6YWZ0ZXIsIC50YWItcm93OmFmdGVyIHtcclxuICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAucm93LCAudGFiLXJvdyB7XHJcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC50YWItcm93IHtcclxuICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgICAuYWJjXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgICAuYWJjIGgyXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgIC5pIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICB3aWR0aDogMTclO1xyXG4gICAgICAgICAgIHBhZGRpbmc6IDlweCAyMHB4O1xyXG4gICAgICAgICAgIG1hcmdpbjogM3B4IDA7XHJcbiAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgICBpbnB1dFt0eXBlPWJ1dHRvbl17XHJcbiAgICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7XHJcbiAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgcGFkZGluZzogOXB4IDIwcHg7XHJcbiAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgIG1hcmdpbjogM3B4IDA7XHJcbiAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgLnByb3BcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVke1xyXG4gICAgICAgICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgIGZvbnQ6IGJvbGQgMTZweCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgIHBhZGRpbmc6IDU1cHggNTBweDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnQsXHJcbiAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIsXHJcbiAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1yaWdodHtcclxuICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGVmdHtcclxuICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCBoM3tcclxuICAgICAgICAgICBjb2xvcjogICNmZmZmZmY7XHJcbiAgICAgICAgICAgZm9udDogbm9ybWFsIDM2cHggJ09wZW4gU2FucycsIGN1cnNpdmU7XHJcbiAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIGgzIHNwYW57XHJcbiAgICAgICAgICAgY29sb3I6ICBvcmFuZ2VcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rc3tcclxuICAgICAgICAgICBjb2xvcjogICNmZmZmZmY7XHJcbiAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMTJweDtcclxuICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgYXtcclxuICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgY29sb3I6ICBpbmhlcml0O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1uYW1le1xyXG4gICAgICAgICAgIGNvbG9yOiAgIzIyMjtcclxuICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXJ7XHJcbiAgICAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpe1xyXG4gICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjMzMzODNiO1xyXG4gICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICB3aWR0aDogMzhweDtcclxuICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgICAgICAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC8qIC5mb290ZXItY2VudGVyIGgzXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgIH0gKi9cclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBpLmZhLWVudmVsb3Ble1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwe1xyXG4gICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwIHNwYW57XHJcbiAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgIGxpbmUtaGVpZ2h0OjI7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgcCBhe1xyXG4gICAgICAgICAgIGNvbG9yOiAgbGlnaHRzZWFncmVlbjtcclxuICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgYTpiZWZvcmUge1xyXG4gICAgICAgICAgIGNvbnRlbnQ6IFwifFwiO1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OjMwMDtcclxuICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGlua3MgLmxpbmstMTpiZWZvcmUge1xyXG4gICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHR7XHJcbiAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXR7XHJcbiAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgY29sb3I6ICAjOTI5OTlmO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNvbXBhbnktYWJvdXQgc3BhbntcclxuICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICBjb2xvcjogICNmZmZmZmY7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWR7XHJcbiAgICAgICAgICAgICBmb250OiBib2xkIDE0cHggc2Fucy1zZXJpZjtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0LFxyXG4gICAgICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIsXHJcbiAgICAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xyXG4gICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5mb290ZXItcmlnaHQgaDIgXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGl7XHJcbiAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/hotelstandard/hotelstandard.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/hotelstandard/hotelstandard.component.ts ***!
    \**********************************************************/

  /*! exports provided: HotelstandardComponent */

  /***/
  function srcAppHotelstandardHotelstandardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelstandardComponent", function () {
      return HotelstandardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HotelstandardComponent = /*#__PURE__*/function () {
      function HotelstandardComponent() {
        _classCallCheck(this, HotelstandardComponent);
      }

      _createClass(HotelstandardComponent, [{
        key: "getUrl",
        value: function getUrl() {
          return "url('../../assets/images/room1.jpg')";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HotelstandardComponent;
    }();

    HotelstandardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotelstandard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotelstandard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelstandard/hotelstandard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotelstandard.component.css */
      "./src/app/hotelstandard/hotelstandard.component.css")).default]
    })], HotelstandardComponent);
    /***/
  },

  /***/
  "./src/app/hotelsuperior/hotelsuperior.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/hotelsuperior/hotelsuperior.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHotelsuperiorHotelsuperiorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* import '~@fortawesome/fontawesome-free/css/all.min.css' */\r\n    \r\n    /* button, input {\r\n     font-family: Hind, sans-serif;\r\n     font-size: 1rem;\r\n     outline: none;\r\n    }\r\n     */\r\n    \r\n    .wrap, .row, .tab-row {\r\n     margin: 3px 89px;\r\n     max-width: 1000px;\r\n    }\r\n    \r\n    .nav {\r\n     position: fixed;\r\n     background-color: black;\r\n     z-index: 3;\r\n     height: 50px;\r\n     width: 100%;\r\n     -webkit-transition: 300ms ease;\r\n     transition: 300ms ease;\r\n    }\r\n    \r\n    .brand {\r\n      display: block;\r\n     float: left;\r\n     height: 40px;\r\n     color: orange;\r\n     padding: 7px;\r\n     margin-left: 2px;\r\n    \r\n     /* float: left;\r\n     line-height: 60px;\r\n     \r\n     color: white;\r\n     font-weight: 500;\r\n     padding-left: 1rem;\r\n      */\r\n    }\r\n    \r\n    .brand span {\r\n      display: block;\r\n     margin-left: 30px;\r\n     height: 40px;\r\n     line-height: 24px;\r\n     text-decoration: none;\r\n     color: orange;\r\n     padding: 0 1em;\r\n    }\r\n    \r\n    .top-menu {\r\n     display: none;\r\n     position: relative;\r\n     float: right;\r\n     -webkit-transition: 200ms ease;\r\n     transition: 200ms ease;\r\n     font-weight: 300;\r\n     height: 40px;\r\n    }\r\n    \r\n    @media screen and (min-width: 640px) {\r\n     .top-menu {\r\n       display: block;\r\n     }\r\n    }\r\n    \r\n    .top-menu li {\r\n     display: block;\r\n     float: left;\r\n     height: 40px;\r\n     color: white;\r\n     padding: 6px 12px;\r\n    }\r\n    \r\n    .top-menu li a {\r\n     display: block;\r\n     margin-left: 250px;\r\n     height: 40px;\r\n     line-height: 20px;\r\n     text-decoration: none;\r\n     color: #fff;\r\n     /* padding: 1em; */\r\n    }\r\n    \r\n    .scroll {\r\n     background: white;\r\n     box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\r\n    }\r\n    \r\n    .scroll .top-menu li a, .scroll .brand {\r\n     color: black;\r\n    }\r\n    \r\n    .scroll .hamburger-line {\r\n     background: #000;\r\n    }\r\n    \r\n    .hero {\r\n        position: relative;\r\n        z-index: 1;\r\n        height: 100vh;\r\n        max-height: 1080px;\r\n        /* background-image: url(2.jpg); */\r\n        background-size: cover;\r\n        background-attachment: fixed;\r\n        background-position: center;\r\n        color: #fff;\r\n        display: table;\r\n        width: 100%;\r\n        text-align: center;\r\n        text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\r\n       }\r\n    \r\n    .hero:after {\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        /*background: -webkit-gradient(linear, left top, right bottom, from(#28e), to(#e14));\r\n        background: linear-gradient(to bottom right, #28e, #e14);*/\r\n        opacity: 0.9;\r\n        z-index: -1;\r\n       }\r\n    \r\n    .hero h1 {\r\n        font-size: 4em;\r\n        margin-bottom: 1rem;\r\n       }\r\n    \r\n    .hero p {\r\n        font-size: 2em;\r\n        max-width: 80%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        font-weight: 300;\r\n       }\r\n    \r\n    .hero .content {\r\n        display: table-cell;\r\n        vertical-align: middle;\r\n       }\r\n    \r\n    .hero .content h1\r\n       {\r\n         text-shadow: 3px 2px black;\r\n       }\r\n    \r\n    h1, h2, p {\r\n        margin: 1em 0;\r\n       }\r\n    \r\n    h2 {\r\n        font-size: 2rem;\r\n        line-height: 0.5;\r\n       }\r\n    \r\n    a {\r\n        color: #e14;\r\n        text-decoration: none;\r\n       }\r\n    \r\n    a:hover {\r\n        text-decoration: underline;\r\n       }\r\n    \r\n    .row:after, .tab-row:after {\r\n        content: \"\";\r\n        display: table;\r\n        clear: both;\r\n       }\r\n    \r\n    .row, .tab-row {\r\n        display: block;\r\n       }\r\n    \r\n    .tab-row {\r\n        display: table;\r\n        height: 100%;\r\n        vertical-align: middle;\r\n       }\r\n    \r\n    .abc\r\n       {\r\n         margin-left: 200px;\r\n       }\r\n    \r\n    .abc h2\r\n       {\r\n        font-size: 40px;\r\n       }\r\n    \r\n    .i \r\n       {\r\n         display: -webkit-box;\r\n         display: flex;\r\n       }\r\n    \r\n    input[type=text] {\r\n        background-color:black;\r\n        opacity: 0.7;\r\n        color: white;\r\n        width: 17%;\r\n        padding: 9px 20px;\r\n        margin: 3px 0;\r\n        box-sizing: border-box;\r\n        border: 1px solid black;\r\n        border-radius: 4px;\r\n        font-size: 16px;\r\n    \r\n      }\r\n    \r\n    input[type=button]{\r\n        width: 15%;\r\n        background-color:blue;\r\n        color:white;\r\n        padding: 9px 20px;\r\n        text-decoration: none;\r\n        margin: 3px 0;\r\n        box-sizing: border-box;\r\n        border: 2px solid white;\r\n        border-radius: 4px;\r\n        cursor: pointer;\r\n        font-size: 16px;\r\n      }\r\n    \r\n    .prop\r\n      {\r\n        font-size: 21px;\r\n      }\r\n    \r\n    .footer-distributed{\r\n        background:black;\r\n        opacity: 0.9;\r\n        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n        box-sizing: border-box;\r\n        width: 100%;\r\n        text-align: left;\r\n        font: bold 16px sans-serif;\r\n        padding: 55px 50px;\r\n      }\r\n    \r\n    .footer-distributed .footer-left,\r\n      .footer-distributed .footer-center,\r\n      .footer-distributed .footer-right{\r\n        display: inline-block;\r\n        vertical-align: top;\r\n      }\r\n    \r\n    .footer-distributed .footer-left{\r\n        width: 40%;\r\n      }\r\n    \r\n    .footer-distributed h3{\r\n        color:  #ffffff;\r\n        font: normal 36px 'Open Sans', cursive;\r\n        margin: 0;\r\n      }\r\n    \r\n    .footer-distributed h3 span{\r\n        color:  orange\r\n      }\r\n    \r\n    .footer-distributed .footer-links{\r\n        color:  #ffffff;\r\n        margin: 20px 0 12px;\r\n        padding: 0;\r\n      }\r\n    \r\n    .footer-distributed .footer-links a{\r\n        display:inline-block;\r\n        line-height: 1.8;\r\n        font-weight:400;\r\n        text-decoration: none;\r\n        color:  inherit;\r\n      }\r\n    \r\n    .footer-distributed .footer-company-name{\r\n        color:  #222;\r\n        font-size: 14px;\r\n        font-weight: normal;\r\n        margin: 0;\r\n      }\r\n    \r\n    .footer-distributed .footer-center{\r\n        width: 35%;\r\n      }\r\n    \r\n    .footer-distributed .footer-center i{\r\n        background-color:  #33383b;\r\n        color: #ffffff;\r\n        font-size: 25px;\r\n        width: 38px;\r\n        height: 38px;\r\n        border-radius: 50%;\r\n        text-align: center;\r\n        line-height: 42px;\r\n        margin: 10px 15px;\r\n        vertical-align: middle;\r\n      }\r\n    \r\n    /* .footer-center h3\r\n      {\r\n        color: black;\r\n      } */\r\n    \r\n    .footer-distributed .footer-center i.fa-envelope{\r\n        font-size: 17px;\r\n        line-height: 38px;\r\n      }\r\n    \r\n    .footer-distributed .footer-center p{\r\n        display: inline-block;\r\n        color: #ffffff;\r\n        font-weight:400;\r\n        vertical-align: middle;\r\n        margin:0;\r\n      }\r\n    \r\n    .footer-distributed .footer-center p span{\r\n        display:block;\r\n        font-weight: normal;\r\n        font-size:14px;\r\n        line-height:2;\r\n      }\r\n    \r\n    .footer-distributed .footer-center p a{\r\n        color:  lightseagreen;\r\n        text-decoration: none;;\r\n      }\r\n    \r\n    .footer-distributed .footer-links a:before {\r\n        content: \"|\";\r\n        font-weight:300;\r\n        font-size: 20px;\r\n        left: 0;\r\n        color: #fff;\r\n        display: inline-block;\r\n        padding-right: 5px;\r\n      }\r\n    \r\n    .footer-distributed .footer-links .link-1:before {\r\n        content: none;\r\n      }\r\n    \r\n    .footer-distributed .footer-right{\r\n        width: 20%;\r\n      }\r\n    \r\n    .footer-distributed .footer-company-about{\r\n        line-height: 20px;\r\n        color:  #92999f;\r\n        font-size: 13px;\r\n        font-weight: normal;\r\n        margin: 0;\r\n      }\r\n    \r\n    .footer-distributed .footer-company-about span{\r\n        display: block;\r\n        color:  #ffffff;\r\n        font-size: 14px;\r\n        font-weight: bold;\r\n        margin-bottom: 20px;\r\n      }\r\n    \r\n    @media (max-width: 880px) {\r\n      \r\n        .footer-distributed{\r\n          font: bold 14px sans-serif;\r\n        }\r\n      \r\n        .footer-distributed .footer-left,\r\n        .footer-distributed .footer-center,\r\n        .footer-distributed .footer-right{\r\n          display: block;\r\n          width: 100%;\r\n          margin-bottom: 40px;\r\n          text-align: center;\r\n        }\r\n        .footer-right h2 \r\n        {\r\n          color:black;\r\n        }\r\n      \r\n        .footer-distributed .footer-center i{\r\n          margin-left: 0;\r\n        }\r\n      \r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWxzdXBlcmlvci9ob3RlbHN1cGVyaW9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNERBQTREOztJQUV4RDs7Ozs7TUFLRTs7SUFDRjtLQUNDLGdCQUFnQjtLQUNoQixpQkFBaUI7SUFDbEI7O0lBRUE7S0FDQyxlQUFlO0tBQ2YsdUJBQXVCO0tBQ3ZCLFVBQVU7S0FDVixZQUFZO0tBQ1osV0FBVztLQUNYLDhCQUE4QjtLQUM5QixzQkFBc0I7SUFDdkI7O0lBRUE7TUFDRSxjQUFjO0tBQ2YsV0FBVztLQUNYLFlBQVk7S0FDWixhQUFhO0tBQ2IsWUFBWTtLQUNaLGdCQUFnQjs7S0FFaEI7Ozs7OztPQU1FO0lBQ0g7O0lBQ0E7TUFDRSxjQUFjO0tBQ2YsaUJBQWlCO0tBQ2pCLFlBQVk7S0FDWixpQkFBaUI7S0FDakIscUJBQXFCO0tBQ3JCLGFBQWE7S0FDYixjQUFjO0lBQ2Y7O0lBRUE7S0FDQyxhQUFhO0tBQ2Isa0JBQWtCO0tBQ2xCLFlBQVk7S0FDWiw4QkFBOEI7S0FDOUIsc0JBQXNCO0tBQ3RCLGdCQUFnQjtLQUNoQixZQUFZO0lBQ2I7O0lBQ0E7S0FDQztPQUNFLGNBQWM7S0FDaEI7SUFDRDs7SUFDQTtLQUNDLGNBQWM7S0FDZCxXQUFXO0tBQ1gsWUFBWTtLQUNaLFlBQVk7S0FDWixpQkFBaUI7SUFDbEI7O0lBQ0E7S0FDQyxjQUFjO0tBQ2Qsa0JBQWtCO0tBQ2xCLFlBQVk7S0FDWixpQkFBaUI7S0FDakIscUJBQXFCO0tBQ3JCLFdBQVc7S0FDWCxrQkFBa0I7SUFDbkI7O0lBRUE7S0FDQyxpQkFBaUI7S0FDakIsd0NBQXdDO0lBQ3pDOztJQUNBO0tBQ0MsWUFBWTtJQUNiOztJQUNBO0tBQ0MsZ0JBQWdCO0lBQ2pCOztJQUdHO1FBQ0Msa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGtDQUFrQztRQUNsQyxzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCLDJCQUEy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VUFBVTtNQUNaOztJQUVBO1FBQ0UsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFNBQVM7TUFDWDs7SUFFQTtRQUNFLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7TUFDckI7O0lBSUE7O1FBRUU7VUFDRSwwQkFBMEI7UUFDNUI7O1FBRUE7OztVQUdFLGNBQWM7VUFDZCxXQUFXO1VBQ1gsbUJBQW1CO1VBQ25CLGtCQUFrQjtRQUNwQjtRQUNBOztVQUVFLFdBQVc7UUFDYjs7UUFFQTtVQUNFLGNBQWM7UUFDaEI7O01BRUYiLCJmaWxlIjoic3JjL2FwcC9ob3RlbHN1cGVyaW9yL2hvdGVsc3VwZXJpb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCAnfkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycgKi9cclxuICAgIFxyXG4gICAgLyogYnV0dG9uLCBpbnB1dCB7XHJcbiAgICAgZm9udC1mYW1pbHk6IEhpbmQsIHNhbnMtc2VyaWY7XHJcbiAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAgKi9cclxuICAgIC53cmFwLCAucm93LCAudGFiLXJvdyB7XHJcbiAgICAgbWFyZ2luOiAzcHggODlweDtcclxuICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5hdiB7XHJcbiAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgIHotaW5kZXg6IDM7XHJcbiAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgZWFzZTtcclxuICAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnJhbmQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgY29sb3I6IG9yYW5nZTtcclxuICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIFxyXG4gICAgIC8qIGZsb2F0OiBsZWZ0O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgIFxyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgKi9cclxuICAgIH1cclxuICAgIC5icmFuZCBzcGFuIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudG9wLW1lbnUge1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGZsb2F0OiByaWdodDtcclxuICAgICAtd2Via2l0LXRyYW5zaXRpb246IDIwMG1zIGVhc2U7XHJcbiAgICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZTtcclxuICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgLnRvcC1tZW51IHtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIH1cclxuICAgIH1cclxuICAgIC50b3AtbWVudSBsaSB7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIH1cclxuICAgIC50b3AtbWVudSBsaSBhIHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAvKiBwYWRkaW5nOiAxZW07ICovXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLnNjcm9sbCB7XHJcbiAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuICAgIC5zY3JvbGwgLnRvcC1tZW51IGxpIGEsIC5zY3JvbGwgLmJyYW5kIHtcclxuICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICAuc2Nyb2xsIC5oYW1idXJnZXItbGluZSB7XHJcbiAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgICAgLmhlcm8ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTA4MHB4O1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgyLmpwZyk7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgIH1cclxuICAgICAgIC5oZXJvOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgLypiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbSgjMjhlKSwgdG8oI2UxNCkpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyOGUsICNlMTQpOyovXHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgfVxyXG4gICAgICAgLmhlcm8gaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICB9XHJcbiAgICAgICAuaGVybyBwIHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgIH1cclxuICAgICAgIC5oZXJvIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIC5oZXJvIC5jb250ZW50IGgxXHJcbiAgICAgICB7XHJcbiAgICAgICAgIHRleHQtc2hhZG93OiAzcHggMnB4IGJsYWNrO1xyXG4gICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIGgxLCBoMiwgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMC41O1xyXG4gICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2UxNDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICB9XHJcbiAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgLnJvdzphZnRlciwgLnRhYi1yb3c6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIC5yb3csIC50YWItcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgLnRhYi1yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgfVxyXG4gICAgICBcclxuICAgICAgIC5hYmNcclxuICAgICAgIHtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIC5hYmMgaDJcclxuICAgICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgLmkgXHJcbiAgICAgICB7XHJcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNyU7XHJcbiAgICAgICAgcGFkZGluZzogOXB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAzcHggMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGlucHV0W3R5cGU9YnV0dG9uXXtcclxuICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6Ymx1ZTtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiA5cHggMjBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAzcHggMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIFxyXG4gICAgICAucHJvcFxyXG4gICAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAgXHJcbiAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWR7XHJcbiAgICAgICAgYmFja2dyb3VuZDpibGFjaztcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udDogYm9sZCAxNnB4IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgcGFkZGluZzogNTVweCA1MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItbGVmdCxcclxuICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlcixcclxuICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLXJpZ2h0e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1sZWZ0e1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIGgze1xyXG4gICAgICAgIGNvbG9yOiAgI2ZmZmZmZjtcclxuICAgICAgICBmb250OiBub3JtYWwgMzZweCAnT3BlbiBTYW5zJywgY3Vyc2l2ZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgaDMgc3BhbntcclxuICAgICAgICBjb2xvcjogIG9yYW5nZVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxpbmtze1xyXG4gICAgICAgIGNvbG9yOiAgI2ZmZmZmZjtcclxuICAgICAgICBtYXJnaW46IDIwcHggMCAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyBhe1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIGluaGVyaXQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jb21wYW55LW5hbWV7XHJcbiAgICAgICAgY29sb3I6ICAjMjIyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICBcclxuICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlcntcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGl7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICMzMzM4M2I7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuICAgICAgLyogLmZvb3Rlci1jZW50ZXIgaDNcclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfSAqL1xyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIGkuZmEtZW52ZWxvcGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY2VudGVyIHAgc3BhbntcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6MjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlciBwIGF7XHJcbiAgICAgICAgY29sb3I6ICBsaWdodHNlYWdyZWVuO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTs7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyBhOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJ8XCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1saW5rcyAubGluay0xOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1yaWdodHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1hYm91dHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjogICM5Mjk5OWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItY29tcGFueS1hYm91dCBzcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAgI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogODgwcHgpIHtcclxuICAgICAgXHJcbiAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZHtcclxuICAgICAgICAgIGZvbnQ6IGJvbGQgMTRweCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWxlZnQsXHJcbiAgICAgICAgLmZvb3Rlci1kaXN0cmlidXRlZCAuZm9vdGVyLWNlbnRlcixcclxuICAgICAgICAuZm9vdGVyLWRpc3RyaWJ1dGVkIC5mb290ZXItcmlnaHR7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3Rlci1yaWdodCBoMiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5mb290ZXItZGlzdHJpYnV0ZWQgLmZvb3Rlci1jZW50ZXIgaXtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/hotelsuperior/hotelsuperior.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/hotelsuperior/hotelsuperior.component.ts ***!
    \**********************************************************/

  /*! exports provided: HotelsuperiorComponent */

  /***/
  function srcAppHotelsuperiorHotelsuperiorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelsuperiorComponent", function () {
      return HotelsuperiorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HotelsuperiorComponent = /*#__PURE__*/function () {
      function HotelsuperiorComponent() {
        _classCallCheck(this, HotelsuperiorComponent);
      }

      _createClass(HotelsuperiorComponent, [{
        key: "getUrl",
        value: function getUrl() {
          return "url('../../assets/images/room1.jpg')";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HotelsuperiorComponent;
    }();

    HotelsuperiorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hotelsuperior',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hotelsuperior.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hotelsuperior/hotelsuperior.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hotelsuperior.component.css */
      "./src/app/hotelsuperior/hotelsuperior.component.css")).default]
    })], HotelsuperiorComponent);
    /***/
  },

  /***/
  "./src/app/loger.ts":
  /*!**************************!*\
    !*** ./src/app/loger.ts ***!
    \**************************/

  /*! exports provided: Loger */

  /***/
  function srcAppLogerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Loger", function () {
      return Loger;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Loger = function Loger(email, password) {
      _classCallCheck(this, Loger);
    };
    /***/

  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "*, *:before, *:after {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  .democheck\r\n  {\r\n    background-color: black;\r\n    height: 700px;\r\n  }\r\n  input, button {\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\r\n  }\r\n  .tip {\r\n    font-size: 20px;\r\n    margin: 40px auto 50px;\r\n    text-align: center;\r\n  }\r\n  .cont {\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 900px;\r\n    height: 650px;\r\n    margin: 0 auto 100px;\r\n    background: white;\r\n    \r\n  }\r\n  .form {\r\n    position: relative;\r\n    width: 640px;\r\n    height: 100%;\r\n    -webkit-transition: -webkit-transform 1.2s ease-in-out;\r\n    transition: -webkit-transform 1.2s ease-in-out;\r\n    transition: transform 1.2s ease-in-out;\r\n    transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;\r\n    padding: 50px 30px 0;\r\n  }\r\n  .sub-cont {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    left: 640px;\r\n    top: 0;\r\n    width: 900px;\r\n    height: 100%;\r\n    padding-left: 260px;\r\n    background: #fff;\r\n    -webkit-transition: -webkit-transform 1.2s ease-in-out;\r\n    transition: -webkit-transform 1.2s ease-in-out;\r\n    transition: transform 1.2s ease-in-out;\r\n    transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;\r\n  }\r\n  .cont.s--signup .sub-cont {\r\n    -webkit-transform: translate3d(-640px, 0, 0);\r\n            transform: translate3d(-640px, 0, 0);\r\n  }\r\n  button {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 260px;\r\n    height: 36px;\r\n    border-radius: 30px;\r\n    color: #fff;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n  }\r\n  .img {\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 260px;\r\n    height: 100%;\r\n    padding-top: 360px;\r\n  }\r\n  .img:before {\r\n    content: '';\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 900px;\r\n    height: 100%;\r\n    background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg\");\r\n    background-size: cover;\r\n    -webkit-transition: -webkit-transform 1.2s ease-in-out;\r\n    transition: -webkit-transform 1.2s ease-in-out;\r\n    transition: transform 1.2s ease-in-out;\r\n    transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;\r\n  }\r\n  .img:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.6);\r\n  }\r\n  .cont.s--signup .img:before {\r\n    -webkit-transform: translate3d(640px, 0, 0);\r\n            transform: translate3d(640px, 0, 0);\r\n  }\r\n  .img__text {\r\n    z-index: 2;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 50px;\r\n    width: 100%;\r\n    padding: 0 20px;\r\n    text-align: center;\r\n    color: #fff;\r\n    -webkit-transition: -webkit-transform 1.2s ease-in-out;\r\n    transition: -webkit-transform 1.2s ease-in-out;\r\n    transition: transform 1.2s ease-in-out;\r\n    transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;\r\n  }\r\n  .img__text h2 {\r\n    margin-bottom: 10px;\r\n    font-weight: normal;\r\n  }\r\n  .img__text p {\r\n    font-size: 14px;\r\n    line-height: 1.5;\r\n  }\r\n  .cont.s--signup .img__text.m--up {\r\n    -webkit-transform: translateX(520px);\r\n            transform: translateX(520px);\r\n  }\r\n  .img__text.m--in {\r\n    -webkit-transform: translateX(-520px);\r\n            transform: translateX(-520px);\r\n  }\r\n  .cont.s--signup .img__text.m--in {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n  .img__btn {\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    position: relative;\r\n    width: 100px;\r\n    height: 36px;\r\n    margin: 0 auto;\r\n    background: transparent;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n  }\r\n  .img__btn:after {\r\n    content: '';\r\n    z-index: 2;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #fff;\r\n    border-radius: 30px;\r\n  }\r\n  .img__btn span {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-transition: -webkit-transform 1.2s;\r\n    transition: -webkit-transform 1.2s;\r\n    transition: transform 1.2s;\r\n    transition: transform 1.2s, -webkit-transform 1.2s;\r\n  }\r\n  .img__btn span.m--in {\r\n    -webkit-transform: translateY(-72px);\r\n            transform: translateY(-72px);\r\n  }\r\n  .cont.s--signup .img__btn span.m--in {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n  }\r\n  .cont.s--signup .img__btn span.m--up {\r\n    -webkit-transform: translateY(72px);\r\n            transform: translateY(72px);\r\n  }\r\n  h2 {\r\n    width: 100%;\r\n    font-size: 26px;\r\n    text-align: center;\r\n  }\r\n  label {\r\n    display: block;\r\n    width: 260px;\r\n    margin: 25px auto 0;\r\n    text-align: center;\r\n  }\r\n  label span {\r\n    font-size: 12px;\r\n    color: #cfcfcf;\r\n    text-transform: uppercase;\r\n  }\r\n  input {\r\n    display: block;\r\n    width: 100%;\r\n    margin-top: 5px;\r\n    padding-bottom: 5px;\r\n    font-size: 16px;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.4);\r\n    text-align: center;\r\n  }\r\n  .forgot-pass {\r\n    margin-top: 15px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    color: #cfcfcf;\r\n  }\r\n  .submit {\r\n    margin-top: 40px;\r\n    margin-bottom: 20px;\r\n    background: #d4af7a;\r\n    text-transform: uppercase;\r\n  }\r\n  .fb-btn {\r\n    border: 2px solid #d3dae9;\r\n    color: #8fa1c7;\r\n  \r\n  }\r\n  a \r\n  {\r\n    text-decoration: none !important;\r\n  }\r\n  /*.fb-btn span {\r\n    font-weight: bold;\r\n    color: #455a81;\r\n  }*/\r\n  .sign-in {\r\n    -webkit-transition-timing-function: ease-out;\r\n            transition-timing-function: ease-out;\r\n  }\r\n  .cont.s--signup .sign-in {\r\n    -webkit-transition-timing-function: ease-in-out;\r\n            transition-timing-function: ease-in-out;\r\n    -webkit-transition-duration: 1.2s;\r\n            transition-duration: 1.2s;\r\n    -webkit-transform: translate3d(640px, 0, 0);\r\n            transform: translate3d(640px, 0, 0);\r\n  }\r\n  .sign-up {\r\n    -webkit-transform: translate3d(-900px, 0, 0);\r\n            transform: translate3d(-900px, 0, 0);\r\n  }\r\n  .cont.s--signup .sign-up {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n  .icon-link {\r\n    position: absolute;\r\n    left: 5px;\r\n    bottom: 5px;\r\n    width: 32px;\r\n  }\r\n  .icon-link img {\r\n    width: 100%;\r\n    vertical-align: top;\r\n  }\r\n  .icon-link--twitter {\r\n    left: auto;\r\n    right: 5px;\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7O0lBRUUsdUJBQXVCO0lBQ3ZCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsc0RBQXNEO0VBQ3hEO0VBRUE7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQkFBaUI7O0VBRW5CO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixzREFBc0Q7SUFDdEQsOENBQThDO0lBQzlDLHNDQUFzQztJQUN0QywwRUFBMEU7SUFDMUUsb0JBQW9CO0VBQ3RCO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNEQUFzRDtJQUN0RCw4Q0FBOEM7SUFDOUMsc0NBQXNDO0lBQ3RDLDBFQUEwRTtFQUM1RTtFQUNBO0lBQ0UsNENBQTRDO1lBQ3BDLG9DQUFvQztFQUM5QztFQUVBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7RUFDakI7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZ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QUNWLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLmRlbW9jaGVja1xyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICB9XHJcbiAgaW5wdXQsIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLnRpcCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0byA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY29udCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDY0MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLnN1Yi1jb250IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2NDBweDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMjYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5jb250LnMtLXNpZ251cCAuc3ViLWNvbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC02NDBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTY0MHB4LCAwLCAwKTtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWcge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDM2MHB4O1xyXG4gIH1cclxuICAuaW1nOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQyOTk2L3NlY3Rpb25zLTMuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuaW1nOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIH1cclxuICAuY29udC5zLS1zaWdudXAgLmltZzpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDY0MHB4LCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2NDBweCwgMCwgMCk7XHJcbiAgfVxyXG4gIC5pbWdfX3RleHQge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5pbWdfX3RleHQgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIC5pbWdfX3RleHQgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuICAuY29udC5zLS1zaWdudXAgLmltZ19fdGV4dC5tLS11cCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MjBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MjBweCk7XHJcbiAgfVxyXG4gIC5pbWdfX3RleHQubS0taW4ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUyMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MjBweCk7XHJcbiAgfVxyXG4gIC5jb250LnMtLXNpZ251cCAuaW1nX190ZXh0Lm0tLWluIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIC5pbWdfX2J0biB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5pbWdfX2J0bjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB9XHJcbiAgLmltZ19fYnRuIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDEuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAxLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4ycywgLXdlYmtpdC10cmFuc2Zvcm0gMS4ycztcclxuICB9XHJcbiAgLmltZ19fYnRuIHNwYW4ubS0taW4ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcycHgpO1xyXG4gIH1cclxuICAuY29udC5zLS1zaWdudXAgLmltZ19fYnRuIHNwYW4ubS0taW4ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgLmNvbnQucy0tc2lnbnVwIC5pbWdfX2J0biBzcGFuLm0tLXVwIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzJweCk7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIG1hcmdpbjogMjVweCBhdXRvIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGxhYmVsIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNjZmNmY2Y7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3Jnb3QtcGFzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNjZmNmY2Y7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJtaXQge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDRhZjdhO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgLmZiLWJ0biB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDNkYWU5O1xyXG4gICAgY29sb3I6ICM4ZmExYzc7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gICBhIFxyXG4gIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKi5mYi1idG4gc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNDU1YTgxO1xyXG4gIH0qL1xyXG4gIFxyXG4gIC5zaWduLWluIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIC5jb250LnMtLXNpZ251cCAuc2lnbi1pbiB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjJzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjJzO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDY0MHB4LCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2NDBweCwgMCwgMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWduLXVwIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOTAwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC05MDBweCwgMCwgMCk7XHJcbiAgfVxyXG4gIC5jb250LnMtLXNpZ251cCAuc2lnbi11cCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uLWxpbmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICB9XHJcbiAgLmljb24tbGluayBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxuICAuaWNvbi1saW5rLS10d2l0dGVyIHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogNXB4O1xyXG4gIH1cclxuICBcclxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../user-register.service */
    "./src/app/user-register.service.ts");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../user */
    "./src/app/user.ts");
    /* harmony import */


    var _loger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../loger */
    "./src/app/loger.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(router, service) {
        _classCallCheck(this, RegisterComponent);

        this.router = router;
        this.service = service;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]("", "", "", "", "", "");
        this.user1 = new _loger__WEBPACK_IMPORTED_MODULE_4__["Loger"]("", "");
        this.flag = 0;
        this.page = {
          title: 'Register Yourself',
          image: '2.jpg'
        };
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.querySelector('.img__btn').addEventListener('click', function () {
            document.querySelector('.cont').classList.toggle('s--signup');
          });
        }
      }, {
        key: "registerProcess",
        value: function registerProcess() {
          var _this4 = this;

          var response = this.service.doRegistration(this.user);
          response.subscribe(function (data) {
            return _this4.message = data;
          });
        }
      }, {
        key: "doLogin",
        value: function doLogin() {
          var _this5 = this;

          var response = this.service.gettingCredentials();
          response.subscribe(function (data) {
            return _this5.credentials = data;
          });

          for (var i in this.credentials) {
            if (this.user1.email == this.credentials[i].email && this.user1.password == this.credentials[i].password) {
              this.router.navigateByUrl('/homepage');
              this.flag = 1;
              break;
            }
          }

          if (this.flag == 0) {
            this.message = "*Invalid credentials";
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _user_register_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/room.ts":
  /*!*************************!*\
    !*** ./src/app/room.ts ***!
    \*************************/

  /*! exports provided: Room */

  /***/
  function srcAppRoomTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Room", function () {
      return Room;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Room = function Room(checkin, checkout, adults, kids) {
      _classCallCheck(this, Room);
    };
    /***/

  },

  /***/
  "./src/app/user-contact.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/user-contact.service.ts ***!
    \*****************************************/

  /*! exports provided: UserContactService */

  /***/
  function srcAppUserContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserContactService", function () {
      return UserContactService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserContactService = /*#__PURE__*/function () {
      function UserContactService(http) {
        _classCallCheck(this, UserContactService);

        this.http = http;
      } //Does a API Call using POST Http Method


      _createClass(UserContactService, [{
        key: "doContact",
        value: function doContact(contact) {
          return this.http.post("http://localhost:8080/create1", contact, {
            responseType: 'text'
          });
        }
      }]);

      return UserContactService;
    }();

    UserContactService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserContactService);
    /***/
  },

  /***/
  "./src/app/user-food.service.ts":
  /*!**************************************!*\
    !*** ./src/app/user-food.service.ts ***!
    \**************************************/

  /*! exports provided: UserFoodService */

  /***/
  function srcAppUserFoodServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFoodService", function () {
      return UserFoodService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserFoodService = /*#__PURE__*/function () {
      function UserFoodService(http) {
        _classCallCheck(this, UserFoodService);

        this.http = http;
      } //Does a API Call using POST Http Method


      _createClass(UserFoodService, [{
        key: "doReservation",
        value: function doReservation(food) {
          return this.http.post("http://localhost:8080/create2", food, {
            responseType: 'text'
          });
        }
      }]);

      return UserFoodService;
    }();

    UserFoodService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserFoodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserFoodService);
    /***/
  },

  /***/
  "./src/app/user-register.service.ts":
  /*!******************************************!*\
    !*** ./src/app/user-register.service.ts ***!
    \******************************************/

  /*! exports provided: UserRegistrationService */

  /***/
  function srcAppUserRegisterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function () {
      return UserRegistrationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserRegistrationService = /*#__PURE__*/function () {
      function UserRegistrationService(http) {
        _classCallCheck(this, UserRegistrationService);

        this.http = http;
      } //Does a API Call using POST Http Method


      _createClass(UserRegistrationService, [{
        key: "doRegistration",
        value: function doRegistration(user) {
          return this.http.post("http://localhost:8080/create", user, {
            responseType: 'text'
          });
        }
      }, {
        key: "gettingCredentials",
        value: function gettingCredentials() {
          return this.http.get("http://localhost:8080/getAll");
        }
      }]);

      return UserRegistrationService;
    }();

    UserRegistrationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserRegistrationService);
    /***/
  },

  /***/
  "./src/app/user-room.service.ts":
  /*!**************************************!*\
    !*** ./src/app/user-room.service.ts ***!
    \**************************************/

  /*! exports provided: UserRoomService */

  /***/
  function srcAppUserRoomServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoomService", function () {
      return UserRoomService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserRoomService = /*#__PURE__*/function () {
      function UserRoomService(http) {
        _classCallCheck(this, UserRoomService);

        this.http = http;
      } //Does a API Call using POST Http Method


      _createClass(UserRoomService, [{
        key: "doReservationRoom",
        value: function doReservationRoom(room) {
          return this.http.post("http://localhost:8080/create3", room, {
            responseType: 'text'
          });
        }
      }]);

      return UserRoomService;
    }();

    UserRoomService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserRoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserRoomService);
    /***/
  },

  /***/
  "./src/app/user.ts":
  /*!*************************!*\
    !*** ./src/app/user.ts ***!
    \*************************/

  /*! exports provided: User */

  /***/
  function srcAppUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User(firstName, lastName, phone, city, email, password) {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\hp\hotelApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map