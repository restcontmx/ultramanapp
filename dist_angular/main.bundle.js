webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'UltraMan App';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_dashboard_component__ = __webpack_require__("../../../../../src/app/auth/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_navbar_component__ = __webpack_require__("../../../../../src/app/menu/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_sidebar_component__ = __webpack_require__("../../../../../src/app/menu/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_login_component__ = __webpack_require__("../../../../../src/app/auth/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_alwaysonwarth_service__ = __webpack_require__("../../../../../src/app/auth/alwaysonwarth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__competitions_competition_service__ = __webpack_require__("../../../../../src/app/competitions/competition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__competitions_competitions_component__ = __webpack_require__("../../../../../src/app/competitions/competitions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__competitions_competitions_list_component__ = __webpack_require__("../../../../../src/app/competitions/competitions.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__competitions_competitions_new_component__ = __webpack_require__("../../../../../src/app/competitions/competitions.new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__competitions_competitions_detail_component__ = __webpack_require__("../../../../../src/app/competitions/competitions.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__competitions_competition_registration_component__ = __webpack_require__("../../../../../src/app/competitions/competition.registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__competitions_competitions_results_component__ = __webpack_require__("../../../../../src/app/competitions/competitions.results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__competitions_competitions_stage_component__ = __webpack_require__("../../../../../src/app/competitions/competitions.stage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__categories_category_service__ = __webpack_require__("../../../../../src/app/categories/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__categories_categories_list_component__ = __webpack_require__("../../../../../src/app/categories/categories.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__categories_categories_new_component__ = __webpack_require__("../../../../../src/app/categories/categories.new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__competition_types_competition_types_service__ = __webpack_require__("../../../../../src/app/competition_types/competition_types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__competitions_registration_service__ = __webpack_require__("../../../../../src/app/competitions/registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__auth_login_component__["a" /* LoginComponent */] },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_6__auth_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_alwaysonwarth_service__["a" /* AlwaysAuthGuard */]],
        children: [
            {
                path: 'competitions',
                component: __WEBPACK_IMPORTED_MODULE_13__competitions_competitions_component__["a" /* CompetitionsComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__competitions_competitions_list_component__["a" /* CompetitionsListComponent */] },
                    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_15__competitions_competitions_new_component__["a" /* CompetitionsNewComponent */] },
                    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_16__competitions_competitions_detail_component__["a" /* CompetitionsDetailComponent */] },
                    { path: 'stage/:id', component: __WEBPACK_IMPORTED_MODULE_16__competitions_competitions_detail_component__["a" /* CompetitionsDetailComponent */] },
                    { path: 'stage/:id', component: __WEBPACK_IMPORTED_MODULE_16__competitions_competitions_detail_component__["a" /* CompetitionsDetailComponent */] },
                    { path: 'registration/:id', component: __WEBPACK_IMPORTED_MODULE_17__competitions_competition_registration_component__["a" /* CompetitionsRegistrationComponent */] },
                    { path: 'results/:id', component: __WEBPACK_IMPORTED_MODULE_18__competitions_competitions_results_component__["a" /* CompetitionsResultsComponent */] },
                    { path: 'stage/:id/:stageId', component: __WEBPACK_IMPORTED_MODULE_19__competitions_competitions_stage_component__["a" /* CompetitionsStageComponent */] }
                ]
            },
            {
                path: 'categories',
                component: __WEBPACK_IMPORTED_MODULE_21__categories_categories_component__["a" /* CategoriesComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_22__categories_categories_list_component__["a" /* CategoriesListComponent */] },
                    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_23__categories_categories_new_component__["a" /* CategoriesNewComponent */] }
                ]
            },
        ]
    },
];
// ng module
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__menu_navbar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__menu_sidebar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__auth_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__auth_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__competitions_competitions_component__["a" /* CompetitionsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__competitions_competitions_list_component__["a" /* CompetitionsListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__competitions_competitions_new_component__["a" /* CompetitionsNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__competitions_competitions_detail_component__["a" /* CompetitionsDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_21__categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_22__categories_categories_list_component__["a" /* CategoriesListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__categories_categories_new_component__["a" /* CategoriesNewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__competitions_competition_registration_component__["a" /* CompetitionsRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_18__competitions_competitions_results_component__["a" /* CompetitionsResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__competitions_competitions_stage_component__["a" /* CompetitionsStageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_26__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_27_ng_pick_datetime__["DateTimePickerModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_10__auth_alwaysonwarth_service__["a" /* AlwaysAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_12__competitions_competition_service__["a" /* CompetitionService */],
            __WEBPACK_IMPORTED_MODULE_24__competition_types_competition_types_service__["a" /* CompetitionTypeService */],
            __WEBPACK_IMPORTED_MODULE_20__categories_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_25__competitions_registration_service__["a" /* RegistrationService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/alwaysonwarth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlwaysAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlwaysAuthGuard = (function () {
    // constructor function
    // @param auth_service: Authentication service
    // @param router: router service
    // @returns none
    function AlwaysAuthGuard(auth_service, router) {
        this.auth_service = auth_service;
        this.router = router;
    }
    // can activate
    // Verification of the login
    // @params none
    // @returns boolean
    AlwaysAuthGuard.prototype.canActivate = function () {
        if (this.auth_service.viewVerification()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AlwaysAuthGuard;
}());
AlwaysAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AlwaysAuthGuard);

var _a, _b;
//# sourceMappingURL=alwaysonwarth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import RxJs required methods


var AuthService = (function () {
    // Constructor function
    // @param http_service:Http serivce
    // @param cookie_service:Cookie service 
    // @returns none
    function AuthService(http_service, cookie_service) {
        var _this = this;
        this.http_service = http_service;
        this.cookie_service = cookie_service;
        // View validation
        // Verifies that the user is logged in
        // @params none
        // @return boolean
        this.viewVerification = function () {
            //let userData = this.cookie_service.get( 'userdata' ) || null;
            //return userData ? true : false;
            return true;
        };
        // Log out function
        // This will handle the http pettition to log out
        // @params none
        // @returns a logout pettition
        this.logout = function () {
            return _this.http_service.post('/api/auth/logout/', {});
        };
    }
    // Login function
    // This will handle the http pettiton to login on the server side
    // @param email : string - user email for auth
    // @param password : string - user password for auth
    // @returns a login pettition
    AuthService.prototype.login = function (email, password) {
        return this.http_service.post('/api/auth/login/', { 'email': email, 'password': password });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<ultra-navbar></ultra-navbar>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <ultra-sidebar></ultra-sidebar>\n        <main class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    function DashboardComponent(auth_service, router) {
        this.auth_service = auth_service;
        this.router = router;
    }
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    DashboardComponent.prototype.ngOnInit = function () {
        console.log("Is in dasboard");
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/auth/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    padding-top: 40px;\n    padding-bottom: 40px;\n    background-color: #eee;\n}\n.container {\n    margin-top: 70px;\n}\n.form-signin {\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n    margin-bottom: 10px;\n}\n.form-signin .checkbox {\n    font-weight: normal;\n}\n.form-signin .form-control {\n    position: relative;\n    height: auto;\n    box-sizing: border-box;\n    padding: 10px;\n    font-size: 16px;\n}\n.form-signin .form-control:focus {\n    z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n    margin-bottom: -1px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #log=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"login(log)\">\n        <h2 class=\"form-signin-heading\">Camaleon Reports Control Panel</h2>\n        <br>\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" name=\"email\" required autofocus ngModel>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" name=\"password\" required ngModel>\n        <br>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n    </form>\n</div>\n<!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/auth/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    function LoginComponent(authservice, router) {
        var _this = this;
        this.authservice = authservice;
        this.router = router;
        // Login function
        // This uses the authentication service to validate the user and password
        // @params none
        // @returns void
        this.login = function (log) {
            if (log.valid) {
                /**
                this.authservice.login( log.value.email, log.value.password )
                    .map( res => res.json() )
                    .subscribe( ( response ) => {
                        if( !response.error ) {
                            console.log( "Valid credentials" );
                            this.router.navigateByUrl( '/' );
                        } else {
                            console.log( "Not valid login", response.message )
                            alert( response.message )
                        }
                    });*/
                _this.router.navigateByUrl('/');
            }
        };
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/auth/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/login.component.css")]
    })
    // Login component is the main login view
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n<hr>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n        <div class=\"list-group\">\n            <a [routerLink]=\"['/categories']\" class=\"list-group-item list-group-item-action\"><i class=\"fa fa-list\" aria-hidden=\"true\"></i> List</a>\n            <a [routerLink]=\"['/categories/new']\" class=\"list-group-item list-group-item-action\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> New</a>\n        </div>\n    </div>\n    <div class=\"col-md-9\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__("../../../../../src/app/categories/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = (function () {
    // constructor
    // @params service: competition service
    // @returns none
    function CategoriesComponent(service) {
        this.service = service;
        this.title = "Categories";
    }
    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    CategoriesComponent.prototype.ngOnInit = function () { };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'categories',
        template: __webpack_require__("../../../../../src/app/categories/categories.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */]) === "function" && _a || Object])
], CategoriesComponent);

var _a;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/categories/categories.list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n\n<hr>\n<table class=\"table table-inverse\">\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n            <th>Age 1</th>\n            <th>Age 2</th>\n            <th>Edit</th>\n            <th>Delete</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let category of categories\">\n            <td><a [routerLink]=\"['/categories/detail/', category._id ]\">{{category.name}}</a></td>\n            <td>{{category.description}}</td>\n            <td>{{category.age_1}}</td>\n            <td>{{category.age_2}}</td>\n            <td><a [routerLink]=\"['/categories/detail/', category._id ]\"><button class=\"btn btn-block btn-warning\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></a></td>\n            <td><a [routerLink]=\"['/categories/detail/', category._id ]\"><button class=\"btn btn-block btn-danger\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button></a></td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/categories/categories.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__("../../../../../src/app/categories/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesListComponent = (function () {
    // constructor
    // @params service: category service
    // @returns none
    function CategoriesListComponent(service) {
        this.service = service;
        this.title = "Categories";
        this.categories = [];
    }
    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    CategoriesListComponent.prototype.ngOnInit = function () {
        this.getAllCategories();
    };
    // Ng on destroy
    // When view ends
    // @params none
    // @returns none
    CategoriesListComponent.prototype.ngOnDestroy = function () {
        // when view destroy
    };
    // Gets all categories from the service
    // @params none
    // @returns none
    CategoriesListComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.service.getAll()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            _this.categories = response.data;
        });
    };
    return CategoriesListComponent;
}());
CategoriesListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'categories-list',
        template: __webpack_require__("../../../../../src/app/categories/categories.list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */]) === "function" && _a || Object])
], CategoriesListComponent);

var _a;
//# sourceMappingURL=categories.list.component.js.map

/***/ }),

/***/ "../../../../../src/app/categories/categories.new.component.html":
/***/ (function(module, exports) {

module.exports = "<form #categoryForm=\"ngForm\" (ngSubmit)=\"add(categoryForm)\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input  type=\"text\"\n                        class=\"form-control\"\n                        name=\"name\"\n                        placeholder=\"Name\"\n                        required autofocus ngModel>\n            </div>\n        </div>\n\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n                <label for=\"description\">Description</label>\n                <input  type=\"text\"\n                        class=\"form-control\"\n                        name=\"description\"\n                        placeholder=\"Description\"\n                        required autofocus ngModel>\n            </div>\n        </div>\n        \n        <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                <label for=\"age_1\">Age 1</label>\n                <input  type=\"number\"\n                        class=\"form-control\"\n                        name=\"age_1\"\n                        placeholder=\"Age 1\"\n                        required autofocus ngModel> \n            </div>         \n        </div>\n        \n        <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                <label for=\"age_2\">Age 2</label>\n                <input  type=\"number\"\n                        class=\"form-control\"\n                        name=\"age_2\"\n                        placeholder=\"Age 2\"\n                        required autofocus ngModel>\n            </div>         \n        </div>\n\n        <div class=\"col-md-4\">\n            <div class=\"form-group\">\n                <label for=\"age_2\">Sex</label>\n                <select name=\"sex\" class=\"form-control\" required ngModel>\n                    <option value=\"0\">MALE</option>\n                    <option value=\"1\">FEMALE</option>\n                </select>\n            </div>         \n        </div>\n\n        <div class=\"col-md-6\">\n            <button [routerLink]=\"['categories']\" class=\"btn btn-block btn-default\">Cancel</button>                \n        </div>\n\n        <div class=\"col-md-6\">\n            <button type=\"submit\" class=\"btn btn-block btn-primary\">Submit</button>                \n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/categories/categories.new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_service__ = __webpack_require__("../../../../../src/app/categories/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesNewComponent = (function () {
    // constructor
    // @params service: categories service
    // @returns none
    function CategoriesNewComponent(service, router) {
        this.service = service;
        this.router = router;
        this.title = "New Category";
        this.competition_types = [];
        this.errors = [];
        this.messages = [];
    }
    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    CategoriesNewComponent.prototype.ngOnInit = function () {
    };
    // Ng on destroy
    // When view ends
    // @params none
    // @returns none
    CategoriesNewComponent.prototype.ngOnDestroy = function () {
        // Code when view ends
    };
    // Add new competition
    // Add new competition with form
    // @params competitionForm : NgForm
    // @returns none
    CategoriesNewComponent.prototype.add = function (categoryForm) {
        var _this = this;
        if (categoryForm.valid) {
            this.service.add(categoryForm.value)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                if (response.error) {
                    console.log("There was an error adding model");
                    console.log(response.message);
                }
                else {
                    console.log(response.data);
                    _this.router.navigateByUrl('categories');
                }
            });
        }
    };
    return CategoriesNewComponent;
}());
CategoriesNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'categories-new',
        template: __webpack_require__("../../../../../src/app/categories/categories.new.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CategoriesNewComponent);

var _a, _b;
//# sourceMappingURL=categories.new.component.js.map

/***/ }),

/***/ "../../../../../src/app/categories/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import RxJs required methods


var CategoryService = (function () {
    // Constructor function
    // @param http: http_service
    // @returns none
    function CategoryService(http_service) {
        this.http_service = http_service;
    }
    // Get all
    // Get all category
    // @params none
    // @returns Observable response
    CategoryService.prototype.getAll = function () {
        return this.http_service.get('/api/category');
    };
    // Add new category
    // @params data : a category
    // @returns Observable response
    CategoryService.prototype.add = function (data) {
        return this.http_service.post('/api/category', data);
    };
    // Update object
    // @params data : a category
    // @returns Observable response
    CategoryService.prototype.update = function (data) {
        return this.http_service.put("/api/category/" + data.id, data);
    };
    // find by id category
    // @params id : number
    // @returns Observable response
    CategoryService.prototype.detail = function (id) {
        return this.http_service.get("/api/category/" + id);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/competition_types/competition_types.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import RxJs required methods


var CompetitionTypeService = (function () {
    // Constructor function
    // @param http: http_service
    // @returns none
    function CompetitionTypeService(http_service) {
        this.http_service = http_service;
    }
    // Get all
    // Get all competition types
    // @params none
    // @returns http pettition
    CompetitionTypeService.prototype.getAll = function () {
        return this.http_service.get('/api/competition_type/');
    };
    return CompetitionTypeService;
}());
CompetitionTypeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CompetitionTypeService);

var _a;
//# sourceMappingURL=competition_types.service.js.map

/***/ }),

/***/ "../../../../../src/app/competitions/competition.registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionsRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__competition_service__ = __webpack_require__("../../../../../src/app/competitions/competition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_category_service__ = __webpack_require__("../../../../../src/app/categories/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registration_service__ = __webpack_require__("../../../../../src/app/competitions/registration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompetitionsRegistrationComponent = (function () {
    // Constructor function
    // @param service : competition service
    // @param router : router service
    // @param activated_route : Activated router service
    function CompetitionsRegistrationComponent(service, registration_service, category_service, router, activated_route) {
        this.service = service;
        this.registration_service = registration_service;
        this.category_service = category_service;
        this.router = router;
        this.activated_route = activated_route;
        this.registration = {
            sex: { id: 0, value: 0, name: 'None' },
            age: 0,
            category: undefined,
            first_name: "",
            last_name: "",
            bio: "",
            team: "",
            competition: 0,
            competitor_number: 0
        };
    }
    // Ng on init function of initialization
    // @params none
    // @returns none
    CompetitionsRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activated_route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getCompetition(id);
        });
        this.setSexes();
        this.getAllCategories();
    };
    // Register on the db the register model
    // @param none
    // @returns none
    CompetitionsRegistrationComponent.prototype.register = function () {
        var _this = this;
        if (this.validateRegister(this.registration)) {
            this.registration.competition = this.competition;
            this.registration_service.add(this.registration)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                if (response.error) {
                    console.log(response.message);
                }
                else {
                    console.log(response.data);
                    _this.router.navigateByUrl('/competitions');
                }
            });
        }
    };
    // Get competition
    // @params id : competition id string
    // @returns none
    CompetitionsRegistrationComponent.prototype.getCompetition = function (id) {
        var _this = this;
        this.service.detail(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                console.log("There was an error getting the competition");
            }
            else {
                _this.competition = response.data;
            }
        });
    };
    // Get all the categories
    // @params none
    // @returns none
    CompetitionsRegistrationComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.category_service.getAll()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                console.log(response.message);
            }
            else {
                _this.categories = response.data;
            }
        });
    };
    // Set sexes, inits the sexes array
    // @params none
    // @returns none
    CompetitionsRegistrationComponent.prototype.setSexes = function () {
        this.sexes = [
            { id: 1, value: 1, name: 'Male' },
            { id: 2, value: 2, name: 'Female' }
        ];
    };
    // Category select trigger
    // This is when the sex or age changes of value then the categories get filtered 
    // @params none
    // @returns none
    CompetitionsRegistrationComponent.prototype.selectCategoryTriggerChange = function () {
        var _this = this;
        if (this.registration.age > 0 && this.registration.sex.id > 0) {
            this.categories_cb = this.categories.filter(function (c) { return c.age_1 <= _this.registration.age && c.age_2 >= _this.registration.age && (_this.registration.sex.value - 1) == c.sex; });
        }
        else {
            this.categories_cb = [];
        }
    };
    // Validates register form
    // This is because am a shitty programer
    // @params register : a register 
    // @returns Boolean - if valid
    CompetitionsRegistrationComponent.prototype.validateRegister = function (register) {
        return (register.age > 0
            && register.sex.id > 0
            && register.first_name != ""
            && register.last_name != ""
            && register.category);
    };
    return CompetitionsRegistrationComponent;
}());
CompetitionsRegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'competitions-registration',
        template: __webpack_require__("../../../../../src/app/competitions/competitions.registration.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__competition_service__["a" /* CompetitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__competition_service__["a" /* CompetitionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__registration_service__["a" /* RegistrationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__categories_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__categories_category_service__["a" /* CategoryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], CompetitionsRegistrationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=competition.registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/competitions/competition.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompetitionService = (function () {
    // Constructor function
    // @param http: http_service
    // @returns none
    function CompetitionService(http_service) {
        this.http_service = http_service;
    }
    // Get all
    // Get all competitions
    // @params none
    // @returns Observable response
    CompetitionService.prototype.getAll = function () {
        return this.http_service.get('/api/competition');
    };
    // Add new compettition
    // @params data : a competition
    // @returns Observable response
    CompetitionService.prototype.add = function (data) {
        return this.http_service.post('/api/competition', data);
    };
    // Update object
    // @params data : a competition
    // @returns Observable response
    CompetitionService.prototype.update = function (data) {
        return this.http_service.put("/api/competition/" + data.id, data);
    };
    // find by id competition
    // @params id : number
    // @returns Observable response
    CompetitionService.prototype.detail = function (id) {
        return this.http_service.get("/api/competition/" + id);
    };
    // delete by id competition
    // @params id : number
    // @returns Observable response
    CompetitionService.prototype.delete = function (id) {
        return this.http_service.delete("/api/competition/" + id);
    };
    // Start ttmes and update 
    // @param data : competition
    // @return observable response
    CompetitionService.prototype.startTimesUpdate = function (data) {
        return this.http_service.put('/api/competition/starttimes/', data);
    };
    return CompetitionService;
}());
CompetitionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CompetitionService);

var _a;
//# sourceMappingURL=competition.service.js.map

/***/ }),

/***/ "../../../../../src/app/competitions/competitions.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n<hr>\n<div class=\"row\">\n    <div class=\"col-md-2\">\n        <div class=\"list-group\">\n            <a [routerLink]=\"['/competitions']\" class=\"list-group-item list-group-item-action\"><i class=\"fa fa-list\" aria-hidden=\"true\"></i> &nbsp;List</a>\n            <a [routerLink]=\"['/competitions/new']\" class=\"list-group-item list-group-item-action\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>&nbsp; New</a>\n        </div>\n    </div>\n    <div class=\"col-md-10\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/competitions/competitions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__competition_service__ = __webpack_require__("../../../../../src/app/competitions/competition.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompetitionsComponent = (function () {
    // constructor
    // @params service: competition service
    // @returns none
    function CompetitionsComponent(service) {
        this.service = service;
        this.title = "Competitions";
    }
    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    CompetitionsComponent.prototype.ngOnInit = function () { };
    return CompetitionsComponent;
}());
CompetitionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'competitions',
        template: __webpack_require__("../../../../../src/app/competitions/competitions.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__competition_service__["a" /* CompetitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__competition_service__["a" /* CompetitionService */]) === "function" && _a || Object])
], CompetitionsComponent);

var _a;
//# sourceMappingURL=competitions.component.js.map

/***/ }),

/***/ "../../../../../src/app/competitions/competitions.detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"competition\">\n    <div class=\"col-md-12\">\n        <div class=\"jumbotron jumbotron-fluid text-center\">\n            <div class=\"container text-center\">\n                <h1 class=\"display-3\">{{competition.name}}</h1>\n                <p class=\"lead\">{{competition.description}}</p>\n                <p>Type : <span class=\"badge badge-pill badge-info\">{{competition.competition_type.name}}</span> | Date : <span class=\"badge badge-pill badge-success\">{{competition.start_date | date : 'MM/dd/y H:mm:ss'}}</span></p>\n                <h4 *ngIf=\"!competition.isOn\">Not Running</h4>\n                <h4 *ngIf=\"competition.isOn\">On Course</h4>\n                <p>\n                    <button type=\"button\" class=\"btn btn-warning\" [routerLink]=\"['/competitions/edit', competition._id]\">Edit</button>\n                    <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/competitions/registration', competition._id]\">Register</button>\n                    <button type=\"button\" class=\"btn btn-info\" [routerLink]=\"['/competitions/results', competition._id]\">Results</button>\n                </p>\n            </div>\n        </div>\n    </div>\n    <hr>    \n    <div class=\"col-md-4\">\n        <h3>Stages</h3>\n        <table class=\"table table-hover\">\n            <thead>\n                <tr class=\"table-danger\">\n                    <th>Stage</th>\n                    <th>Checks</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let s of competition.stages\" [routerLink]=\"['/competitions/stage', competition._id, s._id ]\">\n                    <td>{{s.name}}</td>\n                    <td>{{s.rounds}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"col-md-8\">\n        <h3>Start Times</h3>\n        <table class=\"table table-hover\">\n            <thead>\n                <tr class=\"table-success\">\n                    <th>Day</th>\n                    <th>State</th>                    \n                    <th>Time</th>\n                    <th>Custom Start</th>\n                    <th>Quick Start</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let st of competition.start_times; let i = index\">\n                    <td>{{st.name}}</td>\n                    <td>{{st.state? 'ON' : 'OFF' }}</td>\n                    <td>\n                        <div contenteditable=\"true\"\n                            [textContent]=\"competition.start_times[i].date\"\n                            (input)=\"competition.start_times[i].date = $event.target.textContent\">00:00:00</div>    \n                    </td>\n                    <td>\n                        <button class=\"btn btn-sm btn-success\" *ngIf=\"!st.state\" (click)=\"start(st)\" [disabled]=\"!st.active\">Start</button>\n                        <button class=\"btn btn-sm btn-danger\" *ngIf=\"st.state\" (click)=\"stopSartTime(st)\" >Stop</button>\n                    </td>\n                    <td>\n                        <button class=\"btn btn-sm btn-info\" *ngIf=\"!st.state\" (click)=\"quickStart(st)\" [disabled]=\"!st.active\">Start</button>\n                        <button class=\"btn btn-sm btn-danger\" *ngIf=\"st.state\" (click)=\"stopSartTime(st)\" >Stop</button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <hr>\n    <div class=\"col-md-12\">\n        <h3>Competitors</h3>\n        <table class=\"table table-hover\">\n            <thead>\n                <tr class=\"table-info\">\n                    <th>No.</th>\n                    <th>Name</th>\n                    <th>Team</th>\n                    <th>Category</th>\n                    <th>Age</th>\n                    <th>Sex</th>\n                    <th>Edit</th>\n                    <th>Delete</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let registration of registrations\">\n                    <td>{{registration.competitor_number}}</td>\n                    <td>{{registration.first_name}} {{registration.last_name}}</td>\n                    <td>{{registration.team}}</td>\n                    <td>{{registration.category.name}}</td>\n                    <td>{{registration.age}}</td>\n                    <td>{{registration.sex == 0 ? 'Male' : 'Female' }}</td>\n                    <td>\n                        <a href=\"\" [routerLink]=\"['/registration/detail/', registration._id ]\">\n                            <button class=\"btn btn-block btn-warning\">\n                                <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                            </button>\n                        </a>\n                    </td>\n                    <td>\n                        <a (click)=\"delete( registration._id )\">\n                            <button class=\"btn btn-block btn-danger\">\n                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                            </button>\n                        </a>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/competitions/competitions.detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionsDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__competition_service__ = __webpack_require__("../../../../../src/app/competitions/competition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_service__ = __webpack_require__("../../../../../src/app/competitions/registration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompetitionsDetailComponent = (function () {
    // Constructor function
    // @param service : competition service
    // @param router : router service
    // @param activated_route : Activated router service
    function CompetitionsDetailComponent(service, registration_service, router, activated_route) {
        this.service = service;
        this.registration_service = registration_service;
        this.router = router;
        this.activated_route = activated_route;
    }
    // Ng on init function of initialization
    // @params none
    // @returns none
    CompetitionsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activated_route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getCompetition(id);
            _this.getRegistrationsByCompetitionId(id);
        });
    };
    // Get competition
    // @params id : competition id string
    // @returns none
    CompetitionsDetailComponent.prototype.getCompetition = function (id) {
        var _this = this;
        this.service.detail(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                console.log("There was an error getting the competition");
            }
            else {
                _this.competition = response.data;
                if (_this.competition.start_times.find(function (element) { return element.state == true; })) {
                    _this.activeAllStartTimes();
                }
                else {
                    _this.competition.start_times.forEach(function (element) { return element.active = true; });
                }
            }
        });
    };
    CompetitionsDetailComponent.prototype.getRegistrationsByCompetitionId = function (id) {
        var _this = this;
        this.registration_service.getAllByCompetitionId(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                console.log("There was an error getting the registrations");
            }
            else {
                _this.registrations = response.data;
            }
        });
    };
    // Start function
    // this will set the state of the day to on 
    // @param start time
    // @return none
    CompetitionsDetailComponent.prototype.start = function (start_time) {
        var _this = this;
        start_time.state = true;
        this.competition.isOn = true;
        this.service.startTimesUpdate(this.competition)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                console.log(response.message);
            }
            else {
                _this.activeStartTime(start_time);
                console.log("Updated");
            }
        });
    };
    // quick start function
    // This will set the date just in the moment it was pressed
    // @params start time
    // @return none
    CompetitionsDetailComponent.prototype.quickStart = function (start_time) {
        var _this = this;
        var now_date = new Date();
        start_time.date = now_date.getHours() + ":" + now_date.getMinutes() + ":" + now_date.getSeconds();
        start_time.state = true;
        this.competition.isOn = true;
        this.service.startTimesUpdate(this.competition)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                console.log(response.message);
            }
            else {
                _this.activeStartTime(start_time);
                console.log("Updated");
            }
        });
    };
    // Stop start time
    // @param start_time 
    // @returns none
    CompetitionsDetailComponent.prototype.stopSartTime = function (start_time) {
        var _this = this;
        start_time.state = false;
        this.competition.isOn = false;
        this.service.startTimesUpdate(this.competition)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                console.log(response.message);
            }
            else {
                _this.competition.start_times.forEach(function (element) { return element.active = true; });
                console.log("Updated");
            }
        });
    };
    // Active start time and disable the others
    // @param start_time 
    // @returns none
    CompetitionsDetailComponent.prototype.activeStartTime = function (start_time) {
        start_time.active = true;
        this.competition.start_times.forEach(function (element) {
            if (element._id != start_time._id) {
                element.active = false;
            }
        });
    };
    // Active all start times
    // @params none
    // @returns none
    CompetitionsDetailComponent.prototype.activeAllStartTimes = function () {
        this.competition.start_times.forEach(function (element) {
            element.active = element.state;
        });
    };
    return CompetitionsDetailComponent;
}());
CompetitionsDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'competitions-detail',
        template: __webpack_require__("../../../../../src/app/competitions/competitions.detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__competition_service__["a" /* CompetitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__competition_service__["a" /* CompetitionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__registration_service__["a" /* RegistrationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], CompetitionsDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=competitions.detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/competitions/competitions.list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n\n<hr>\n<table class=\"table table-hover\">\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n            <th>Start Date</th>\n            <th>Type</th>\n            <th>IsOn</th>\n            <th>Results</th>\n            <th>Registration</th>\n            <th>Edit</th>\n            <th>Delete</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let competition of competitions\">\n            <td><a [routerLink]=\"['/competitions/detail/', competition._id ]\">{{competition.name}}</a></td>\n            <td>{{competition.description}}</td>\n            <td>{{competition.start_date | date : 'MM/dd/y'}}</td>\n            <td>{{competition.competition_type.name}}</td>\n            <td>{{competition.isOn ? 'On Course' : 'Stopped'}}</td>\n            <td><a href=\"\" [routerLink]=\"['/competitions/results/', competition._id ]\"><button class=\"btn btn-block btn-info\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i></button></a></td>\n            <td><a href=\"\" [routerLink]=\"['/competitions/registration/', competition._id ]\"><button class=\"btn btn-block btn-info\"><i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i></button></a></td>\n            <td><a href=\"\" [routerLink]=\"['/competitions/detail/', competition._id ]\"><button class=\"btn btn-block btn-warning\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></a></td>\n            <td><a (click)=\"delete( competition._id )\"><button class=\"btn btn-block btn-danger\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button></a></td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/competitions/competitions.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__competition_service__ = __webpack_require__("../../../../../src/app/competitions/competition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompetitionsListComponent = (function () {
    // constructor
    // @params service: competition service
    // @returns none
    function CompetitionsListComponent(service) {
        this.service = service;
        this.title = "Competitions";
        this.competitions = [];
    }
    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    CompetitionsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllCompetitions();
        var now = __WEBPACK_IMPORTED_MODULE_3_moment__();
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["TimerObservable"].create(2000, 1000);
        var difference = __WEBPACK_IMPORTED_MODULE_3_moment__["duration"](now.diff(__WEBPACK_IMPORTED_MODULE_3_moment__("10/08/2017 13:00:00")));
        var seconds = difference.asSeconds();
        this.subscription = timer.subscribe(function (t) {
            difference.add(1, 'seconds');
            _this.tick = difference.hours() + ':' + difference.minutes() + ':' + difference.seconds();
        });
    };
    // Ng on destroy
    // When view ends
    // @params none
    // @returns none
    CompetitionsListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    // Gets all competitions from the service
    // @params none
    // @returns none
    CompetitionsListComponent.prototype.getAllCompetitions = function () {
        var _this = this;
        this.service.getAll()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.competitions = response.data;
        });
    };
    // Delete competition
    // @params id
    // @returns none
    CompetitionsListComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.delete(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (!response.error) {
                console.log("Competition deleted");
                _this.getAllCompetitions();
            }
            else {
                console.log("There was an error deleting " + response.message);
            }
        });
    };
    return CompetitionsListComponent;
}());
CompetitionsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'competitions-list',
        template: __webpack_require__("../../../../../src/app/competitions/competitions.list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__competition_service__["a" /* CompetitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__competition_service__["a" /* CompetitionService */]) === "function" && _a || Object])
], CompetitionsListComponent);

var _a;
//# sourceMappingURL=competitions.list.component.js.map

/***/ }),

/***/ "../../../../../src/app/competitions/competitions.new.component.html":
/***/ (function(module, exports) {

module.exports = "<form #competitionForm=\"ngForm\" (ngSubmit)=\"add(competitionForm)\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input  type=\"text\"\n                        class=\"form-control\"\n                        name=\"name\"\n                        placeholder=\"Name\"\n                        required autofocus ngModel>\n            </div>\n        </div>\n\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n                <label for=\"description\">Description</label>\n                <input  type=\"text\"\n                        class=\"form-control\"\n                        name=\"description\"\n                        placeholder=\"Description\"\n                        required autofocus ngModel>\n            </div>\n        </div>\n        \n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"start_date\">Start Date</label>\n                <owl-date-time class=\"form-control\" name=\"start_date\" required autofocus ngModel></owl-date-time>   \n            </div>         \n        </div>\n        \n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"competition_type\">Competition Type</label>\n                <select name=\"competition_type\" class=\"form-control\" required ngModel>\n                    <option *ngFor=\"let t of competition_types\" [ngValue]=\"t\">{{t.name}}</option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <button [routerLink]=\"['/competitions']\" class=\"btn btn-block btn-default\">Cancel</button>                \n        </div>\n\n        <div class=\"col-md-6\">\n            <button type=\"submit\" class=\"btn btn-block btn-primary\">Submit</button>                \n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/competitions/competitions.new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionsNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__competition_service__ = __webpack_require__("../../../../../src/app/competitions/competition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__competition_types_competition_types_service__ = __webpack_require__("../../../../../src/app/competition_types/competition_types.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompetitionsNewComponent = (function () {
    // constructor
    // @params service: competition service
    // @returns none
    function CompetitionsNewComponent(service, competition_type_service, router) {
        this.service = service;
        this.competition_type_service = competition_type_service;
        this.router = router;
        this.title = "New Competition";
        this.competition_types = [];
        this.errors = [];
        this.messages = [];
    }
    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    CompetitionsNewComponent.prototype.ngOnInit = function () {
        // Code when view starts
        this.getAllCompetitionTypes();
    };
    // Ng on destroy
    // When view ends
    // @params none
    // @returns none
    CompetitionsNewComponent.prototype.ngOnDestroy = function () {
        // Code when view ends
    };
    // Add new competition
    // Add new competition with form
    // @params competitionForm : NgForm
    // @returns none
    CompetitionsNewComponent.prototype.add = function (competitionForm) {
        var _this = this;
        if (competitionForm.valid) {
            this.service.add(competitionForm.value)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                if (response.error) {
                    console.log("There was an error adding model");
                    console.log(response.message);
                }
                else {
                    _this.router.navigateByUrl('competitions');
                }
            });
        }
    };
    // Get all competition types
    // @params none 
    // @returns none 
    CompetitionsNewComponent.prototype.getAllCompetitionTypes = function () {
        var _this = this;
        this.competition_type_service.getAll()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                console.log("There was an error getting comp types");
                console.log(response.message);
            }
            else {
                _this.competition_types = response.data;
            }
        });
    };
    return CompetitionsNewComponent;
}());
CompetitionsNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'competitions-new',
        template: __webpack_require__("../../../../../src/app/competitions/competitions.new.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__competition_service__["a" /* CompetitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__competition_service__["a" /* CompetitionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__competition_types_competition_types_service__["a" /* CompetitionTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__competition_types_competition_types_service__["a" /* CompetitionTypeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CompetitionsNewComponent);

var _a, _b, _c;
//# sourceMappingURL=competitions.new.component.js.map

/***/ }),

/***/ "../../../../../src/app/competitions/competitions.registration.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"register()\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"first_name\">First Name</label>\n                    <input  type=\"text\"\n                            class=\"form-control\"\n                            name=\"first_name\"\n                            placeholder=\"First Name\"\n                            required autofocus \n                            [(ngModel)]=\"registration.first_name\">\n                </div>\n            </div>\n    \n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"last_name\">Last Name</label>\n                    <input  type=\"text\"\n                            class=\"form-control\"\n                            name=\"last_name\"\n                            placeholder=\"Last Name\"\n                            required autofocus\n                            [(ngModel)]=\"registration.last_name\">\n                </div>\n            </div>\n\n            <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                    <label for=\"bio\">Bio.</label>\n                    <textarea   type=\"text\"\n                                class=\"form-control\"\n                                name=\"bio\"\n                                placeholder=\"Bio.\"\n                                required autofocus\n                                [(ngModel)]=\"registration.bio\"></textarea>\n                </div>\n            </div>\n            \n            <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                    <label for=\"team\">Team</label>\n                    <input  type=\"text\"\n                            class=\"form-control\"\n                            name=\"team\"\n                            placeholder=\"Team\"\n                            required autofocus\n                            [(ngModel)]=\"registration.team\">\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"age\">Age</label>\n                    <input  type=\"number\"\n                            class=\"form-control\"\n                            name=\"age\"\n                            placeholder=\"Number\"\n                            required autofocus\n                            [(ngModel)]=\"registration.age\"\n                            (ngModelChange)=\"selectCategoryTriggerChange()\">\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"sex\">Sex</label>\n                    <select name=\"sex\" class=\"form-control\" \n                        required \n                        [(ngModel)]=\"registration.sex\" \n                        (ngModelChange)=\"selectCategoryTriggerChange()\">\n                            <option *ngFor=\"let s of sexes\" [ngValue]=\"s\">{{s.name}}</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"category\">Category</label>\n                    <select name=\"category\" class=\"form-control\" required [(ngModel)]=\"registration.category\">\n                        <option *ngFor=\"let c of categories_cb\" [ngValue]=\"c\">{{c.name}} {{c.age_1}}-{{c.age_2}} años {{c.sex == 0 ?'MALE':'FEMALE'}}</option>\n                    </select>\n                </div>\n            </div>\n            \n            <div class=\"col-md-6\">\n                <button [routerLink]=\"['/competitions']\" class=\"btn btn-block btn-default\">Cancel</button>                \n            </div>\n            \n            <div class=\"col-md-6\">\n                <button type=\"submit\" class=\"btn btn-block btn-primary\">Submit</button>                \n            </div>\n        </div>\n    </form>"

/***/ }),

/***/ "../../../../../src/app/competitions/competitions.results.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n<hr>\n<div class=\"row\">\n    <div class=\"col-md-12\" *ngIf=\"competition && competition.competition_type.value == 1\">\n        <table class=\"table table-sm table-bordered table-hover table-responsive\" >\n            <thead class=\"thead-inverse\">\n                <tr>\n                    <th colspan=\"3\"></th>\n                    <th colspan=\"3\" class=\"table-info\">Day 1</th>\n                    <th class=\"table-danger\">Day 2</th>\n                    <th class=\"table-success\">Day 3</th>\n                    <th colspan=\"4\">Totals</th>\n                </tr>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                    <th>Category</th>\n                    <th class=\"table-info\">\n                        Natación\n                    </th>\n                    <th class=\"table-info\">\n                        Ciclismo\n                    </th>\n                    <th class=\"table-info\">\n                        Total\n                    </th>\n                    <th class=\"table-danger\">\n                        Ciclismo\n                    </th>\n                    <th class=\"table-success\">\n                        Carrera\n                    </th>\n                    <th>\n                        <i class=\"fa fa-tint\" aria-hidden=\"true\"></i>\n                    </th>\n                    <th>\n                        <i class=\"fa fa-bicycle\" aria-hidden=\"true\"></i>\n                    </th>\n                    <th>\n                        <i class=\"fa fa-road\" aria-hidden=\"true\"></i>\n                    </th>\n                    <th>Global</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let reg of registrations\">\n                    <td>{{reg.competitor_number}}</td>\n                    <td>{{reg.first_name}} {{reg.last_name}}</td>\n                    <td>{{reg.category.name}}</td>\n                    <td>00:00:00</td>\n                    <td>00:00:00</td>\n                    <td>00:00:00</td>\n                    <td>00:00:00</td>\n                    <td>00:00:00</td>\n                    <td>00:00:00</td>\n                    <td>00:00:00</td>\n                    <td>00:00:00</td>\n                    <td>00:00:00</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/competitions/competitions.results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionsResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__competition_service__ = __webpack_require__("../../../../../src/app/competitions/competition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_service__ = __webpack_require__("../../../../../src/app/competitions/registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompetitionsResultsComponent = (function () {
    // constructor
    // @params service: competition service
    // @returns none
    function CompetitionsResultsComponent(service, registration_service, router, activated_route) {
        this.service = service;
        this.registration_service = registration_service;
        this.router = router;
        this.activated_route = activated_route;
        this.title = "Results";
    }
    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    CompetitionsResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activated_route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getCompetition(id);
            _this.getAllRegistrations(id);
        });
    };
    // Ng on destroy
    // When view ends
    // @params none
    // @returns none
    CompetitionsResultsComponent.prototype.ngOnDestroy = function () { };
    // Get competition
    // Get competition by id
    // @param id : competitors id
    // @returns none
    CompetitionsResultsComponent.prototype.getCompetition = function (id) {
        var _this = this;
        this.service.detail(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                console.log(response.message);
            }
            else {
                _this.competition = response.data;
                console.log(_this.competition);
            }
        });
    };
    // Gets all competitions from the service
    // @params none
    // @returns none
    CompetitionsResultsComponent.prototype.getAllRegistrations = function (id) {
        var _this = this;
        this.registration_service.getAllByCompetitionId(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.registrations = response.data;
        });
    };
    CompetitionsResultsComponent.prototype.rangeOfStages = function (the_stages) {
        console.log(the_stages);
        var numbers = [];
        the_stages.forEach(function (s) {
            for (var i = 0; i < s.rounds; i++) {
                numbers.push(i + 1);
            }
        });
        return numbers;
    };
    return CompetitionsResultsComponent;
}());
CompetitionsResultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'competitions-results',
        template: __webpack_require__("../../../../../src/app/competitions/competitions.results.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__competition_service__["a" /* CompetitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__competition_service__["a" /* CompetitionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__registration_service__["a" /* RegistrationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], CompetitionsResultsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=competitions.results.component.js.map

/***/ }),

/***/ "../../../../../src/app/competitions/competitions.stage.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n<div class=\"row\"  *ngIf=\"competition\">\n    <div class=\"col-md-12\">\n        <ul class=\"nav justify-content-end\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/competitions/detail', competition._id]\" href=\"\">Go Back</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"saveRounds()\" href=\"\">Save</a>\n            </li>\n        </ul>\n    </div>\n</div>\n<br>\n<div class=\"row\" *ngIf=\"registrations && rounds\">\n    <div class=\"col-md-12\">\n        <table class=\"table table-sm table-hover\">\n            <thead>\n                <tr class=\"table-success\">\n                    <th>#</th>\n                    <th>Name</th>\n                    <th *ngFor=\"let i of rounds\">{{i}}</th>\n                    <th>Total</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let reg of registrations\">\n                    <td>{{reg.competitor_number}}</td>\n                    <td>{{reg.first_name}} {{reg.last_name}}</td>\n                    <td *ngFor=\"let round of reg.rounds; let i = index\">\n                        <div contenteditable=\"true\"\n                            [textContent]=\"reg.rounds[i].time\"\n                            (input)=\"reg.rounds[i].time = $event.target.textContent\"></div>\n                    </td>\n                    <td>{{reg.total}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/competitions/competitions.stage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionsStageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__competition_service__ = __webpack_require__("../../../../../src/app/competitions/competition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_service__ = __webpack_require__("../../../../../src/app/competitions/registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompetitionsStageComponent = (function () {
    // constructor
    // @params service: competition service
    // @returns none
    function CompetitionsStageComponent(service, registration_service, router, activated_route) {
        this.service = service;
        this.registration_service = registration_service;
        this.router = router;
        this.activated_route = activated_route;
        this.rounds = [];
    }
    // ng on init function
    // initialize stuff on the component
    // @params none
    // @returns none
    CompetitionsStageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activated_route.params.subscribe(function (params) {
            var id = params['id'];
            _this.stage_id = params['stageId'];
            _this.getCompetition(id, _this.stage_id);
            _this.getAllRegistrations(id);
        });
    };
    // Ng on destroy
    // When view ends
    // @params none
    // @returns none
    CompetitionsStageComponent.prototype.ngOnDestroy = function () { };
    // Get competition
    // Get competition by id
    // @param id : competitors id
    // @param stage_id : satage id
    // @returns none
    CompetitionsStageComponent.prototype.getCompetition = function (id, stage_id) {
        var _this = this;
        this.service.detail(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.error) {
                console.log(response.message);
            }
            else {
                _this.competition = response.data;
                _this.stage = _this.competition.stages.filter(function (s) { return s._id == stage_id; })[0];
                _this.title = _this.stage.name + " results";
                for (var i = 0; i < _this.stage.rounds; i++) {
                    _this.rounds.push(i + 1);
                }
            }
        });
    };
    // Gets all competitions from the service
    // @params none
    // @returns none
    CompetitionsStageComponent.prototype.getAllRegistrations = function (id) {
        var _this = this;
        this.registration_service.getAllByCompetitionId(id)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.registrations = response.data;
            _this.registrations.forEach(function (r) {
                r.rounds = r.rounds.filter(function (round) { return round.stage == _this.stage_id; });
            });
        });
    };
    // Saves all the registration rounds
    // @params none
    // @returns none
    CompetitionsStageComponent.prototype.saveRounds = function () {
        this.registration_service.saveRounds(this.registrations)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log("This was saved on registration; Server says " + response.message + ".");
        });
    };
    return CompetitionsStageComponent;
}());
CompetitionsStageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'competitions-stage',
        template: __webpack_require__("../../../../../src/app/competitions/competitions.stage.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__competition_service__["a" /* CompetitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__competition_service__["a" /* CompetitionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__registration_service__["a" /* RegistrationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], CompetitionsStageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=competitions.stage.component.js.map

/***/ }),

/***/ "../../../../../src/app/competitions/registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationService = (function () {
    // Constructor function
    // @param http: http_service
    // @returns none
    function RegistrationService(http_service) {
        this.http_service = http_service;
    }
    // Get all
    // Get all registrations
    // @params none
    // @returns Observable response
    RegistrationService.prototype.getAll = function () {
        return this.http_service.get('/api/registration');
    };
    // Get all by competition id
    // @params id : number
    // @returns Observable response
    RegistrationService.prototype.getAllByCompetitionId = function (id) {
        return this.http_service.get("/api/registration/bycompetition/" + id);
    };
    // Add new registration
    // @params data : a registration
    // @returns Observable response
    RegistrationService.prototype.add = function (data) {
        return this.http_service.post('/api/registration', data);
    };
    // Update object
    // @params data : a registration
    // @returns Observable response
    RegistrationService.prototype.update = function (data) {
        return this.http_service.put("/api/registration/" + data.id, data);
    };
    // find by id registration
    // @params id : number
    // @returns Observable response
    RegistrationService.prototype.detail = function (id) {
        return this.http_service.get("/api/registration/" + id);
    };
    // delete by id registration
    // @params id : number
    // @returns Observable response
    RegistrationService.prototype.delete = function (id) {
        return this.http_service.delete("/api/registration/" + id);
    };
    // This will save all the rounds of the registration
    // They are obviously filtered by satage
    // @params data : a registration object
    RegistrationService.prototype.saveRounds = function (data) {
        console.log(data);
        return this.http_service.put('/api/registration/rounds', data);
    };
    return RegistrationService;
}());
RegistrationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], RegistrationService);

var _a;
//# sourceMappingURL=registration.service.js.map

/***/ }),

/***/ "../../../../../src/app/menu/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top custom_navbar\">\n    <button class=\"navbar-toggler navbar-toggler-right hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n        aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    <a class=\"navbar-brand\" href=\"/\">Race Control System</a>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/settings\">Settings</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/help\">Help</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"\" (click)=\"logout()\">logout</a>\n            </li>\n        </ul>\n        <form class=\"form-inline mt-2 mt-md-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/menu/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = (function () {
    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    function NavBarComponent(auth_service, router) {
        var _this = this;
        this.auth_service = auth_service;
        this.router = router;
        // Log out funtion
        // Will logout and clean the cookie on the serve side of the app
        // @params none
        // @returns none
        this.logout = function () {
            _this.auth_service.logout()
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                _this.router.navigateByUrl('/login');
                console.log("Log out succesful");
            });
        };
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ultra-navbar',
        template: __webpack_require__("../../../../../src/app/menu/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavBarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\n    <ul class=\"nav nav-pills flex-column\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/']\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Overview</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/competitions']\"><i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i> Competitions</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/categories']\"><i class=\"fa fa-cubes\" aria-hidden=\"true\"></i> Categories</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/reports']\"><i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i> Reports</a>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/menu/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarComponent = (function () {
    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    function SideBarComponent(auth_service, router) {
        var _this = this;
        this.auth_service = auth_service;
        this.router = router;
        // Log out funtion
        // Will logout and clean the cookie on the serve side of the app
        // @params none
        // @returns none
        this.logout = function (log) {
            /**
            this.auth_service.logout()
                .map( res => res.json() )
                .subscribe( ( response ) => {
                    console.log( "Log out succesful" )
                })**/
            if (log.valid) {
                console.log(log.value);
                _this.router.navigateByUrl('/login');
            }
        };
    }
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ultra-sidebar',
        template: __webpack_require__("../../../../../src/app/menu/sidebar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SideBarComponent);

var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map