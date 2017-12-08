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

module.exports = "  <dashboard>It is loading..</dashboard>\n"

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
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_dashboard_game_dashboard_component__ = __webpack_require__("../../../../../src/app/game-dashboard/game-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gamesppservice_service__ = __webpack_require__("../../../../../src/app/gamesppservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ROUTES = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'gamesDashboard',
        component: __WEBPACK_IMPORTED_MODULE_5__game_dashboard_game_dashboard_component__["a" /* GameDashboardComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__game_dashboard_game_dashboard_component__["a" /* GameDashboardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__gamesppservice_service__["a" /* GamesAppService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/Constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Column */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Columns; });
var Column = (function () {
    function Column() {
    }
    return Column;
}());

var Columns = [
    { id: 'Id', name: 'Id', width: '20px' },
    { id: 'UserName', name: 'User Name', width: '200px' },
    { id: 'Game', name: 'Game', width: '100px' },
    { id: 'Level', name: 'Level', width: '100px' },
    { id: 'StartTime', name: 'Start Time', width: '100px' },
    { id: 'EndTime', name: 'End Time', width: '100px' },
    { id: 'Score', name: 'Score', width: '80px' },
];
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ "../../../../../src/app/game-dashboard/game-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#UsersBody {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    font-size: 12px;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n#UsersBody tbody td, #UsersBody thead td {\r\n    border: 1px solid #ddd;\r\n    padding: 5px;\r\n}\r\n\r\n#UsersBody tbody tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#UsersBody tbody tr:hover {background-color: #ddd;}\r\n\r\n#UsersBody thead td {\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: black;\r\n}\r\n\r\n.divPaging{\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n}\r\n\r\n.divGrid{\r\n    height: 50%;\r\n    padding: 12px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-dashboard/game-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3><b><u>Mini Game Analytics</u></b></h3>\n<div style=\"display: inline-block;padding:12px;\">\n  <div style=\"float: left\">\n    Goto: <input type=\"number\" name=\"currpage\" [(ngModel)]=\"currentPage\" style=\"width:35px\">\n    <input type=\"button\" value=\"Go\" (click)=\"changePage()\">\n    Page Limit : <select id=\"PageSize\" [(ngModel)] = \"pageSize\" (change)=\"changePage()\">\n      <option value=\"15\">15</option>\n      <option value=\"30\">30</option>\n      <option value=\"50\">50</option>\n      <option value=\"100\">100</option>\n    </select>\n  </div>\n  <div style=\"float: right; padding-left:150px\">\n      Showing {{startRecord}} - {{CurrPageRecords}} of {{totalRecords}}\n  </div>\n  <div style=\"float: right; padding-left:150px\">\n    <input type=\"radio\" name=\"groupby\" value = \"name\" (click)=\"setGroupBy('UserName')\"> User Name\n    <input type=\"radio\" name=\"groupby\" value = \"game\"  (click)=\"setGroupBy('game')\"> Game\n    <input type=\"button\" value=\"Group By\" (click)=\"this.LoadGroupByGridData()\">\n    <input type=\"button\" value =\"Clear Group By\" (click)=\"this.resetGridData()\">\n  </div>\n</div>\n<div style=\"padding:12px;height:300px\">\n  <!-- <table id = 'Users'>\n    <tr>\n        <td  *ngFor=\"let constant of constants\" \n            id={{constant.id}} \n            [style.width] = \"constant.width\"\n            (click)=\"SortData(constant.id)\"><b>{{constant.name}}</b></td>\n    </tr>\n  </table>\n  <table id = 'UsersBody'>\n    <tr *ngFor=\"let gameData of gameData\" id={{gameData.id}}>\n      <td style=\"width:24px\">{{gameData.id}}</td>\n      <td style=\"width:194px\">{{gameData.username}}</td>\n      <td style=\"width:100px\">{{gameData.game}}</td>\n      <td style=\"width:100px\">{{gameData[\"difficult level\"]}}</td>\n      <td style=\"width:100px\">{{gameData[\"start time\"]}}</td>\n      <td style=\"width:100px\">{{gameData[\"end time\"]  }}</td>\n      <td style=\"width:80px\">{{gameData.score}}</td>\n    </tr>\n  </table> -->\n  <table id = 'UsersBody'>\n    <thead>\n        <td *ngFor=\"let column of this.Columns\" (click)=\"sortData(column)\">\n            <b>{{column | uppercase}}</b>\n        </td>\n    </thead>\n    <tbody *ngFor=\"let data of this.UserData\">\n        <tr *ngIf=\"this.groupBySelected\" >\n            <td [attr.colspan]=\"this.Columns.length\">\n               <b> {{data[this.Columns[0]] | uppercase }} </b>\n            </td>\n        </tr>\n        <tr>\n            <td *ngFor=\"let column of this.Columns\">\n                {{data[column]}}\n            </td>\n        </tr>\n        <tr *ngIf=\"this.groupBySelected\" >\n            <td [attr.colspan]=\"this.Columns.length - 1\" style=\"text-align:right\">\n               <b> TotalCount </b>\n            </td>\n            <td>\n                <b> {{data[this.Columns[this.Columns.length-1]]}} </b>\n             </td>\n        </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/game-dashboard/game-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Constants__ = __webpack_require__("../../../../../src/app/common/Constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gamesppservice_service__ = __webpack_require__("../../../../../src/app/gamesppservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameDashboardComponent = (function () {
    function GameDashboardComponent(gamesService) {
        this.gamesService = gamesService;
        this.constants = __WEBPACK_IMPORTED_MODULE_1__common_Constants__["a" /* Columns */];
        this.currentPage = 1;
        this.pageSize = 15;
        this.UserData = [];
        this.Columns = [];
        this.groupBySelected = false;
    }
    GameDashboardComponent.prototype.ngOnInit = function () {
        this.loadGridData();
    };
    GameDashboardComponent.prototype.SortData = function (event) {
        console.log(event);
    };
    GameDashboardComponent.prototype.changePage = function () {
        if (!this.groupBySelected) {
            this.loadGridData();
        }
        else {
            this.LoadGroupByGridData();
        }
    };
    GameDashboardComponent.prototype.loadGridData = function () {
        var _this = this;
        this.startRecord = this.currentPage <= 1 ? 1 : (this.currentPage - 1) * this.pageSize + 1;
        this.CurrPageRecords = (this.startRecord + this.pageSize) - 1;
        //console.log(this.startRecord + ' ' + this.pageSize + ' ' + this.CurrPageRecords);
        this.gamesService.getAllUsers(this.currentPage, this.pageSize).subscribe(function (gameData) {
            _this.totalRecords = gameData.TotalRows;
            _this.UserData = gameData.gamesdata;
            console.log(_this.UserData);
            _this.Columns = [];
            for (var k in _this.UserData[0]) {
                if (k != '_id')
                    _this.Columns.push(k);
            }
            _this.groupBySelected = false;
            console.log(_this.Columns);
        });
    };
    GameDashboardComponent.prototype.LoadGroupByGridData = function () {
        var _this = this;
        if (this.groupByKey == '')
            this.groupByKey = 'UserName';
        this.gamesService.getUserGroupData(this.groupByKey, this.currentPage, this.pageSize).subscribe(function (gameData) {
            _this.totalRecords = gameData.TotalRows;
            _this.UserData = gameData.gamesdata;
            console.log(_this.UserData);
            _this.Columns = [];
            for (var k in _this.UserData[0]) {
                if (k != '_id')
                    _this.Columns.push(k);
            }
            _this.groupBySelected = true;
            //console.log(this.Columns);
        });
    };
    GameDashboardComponent.prototype.setGroupBy = function (groupbyKey) {
        this.groupByKey = groupbyKey;
    };
    GameDashboardComponent.prototype.resetGridData = function () {
        this.groupByKey = '';
        //this.groupBySelected = false;
        this.currentPage = 1;
        this.pageSize = 15;
        this.loadGridData();
    };
    return GameDashboardComponent;
}());
GameDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/game-dashboard/game-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/game-dashboard/game-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__gamesppservice_service__["a" /* GamesAppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__gamesppservice_service__["a" /* GamesAppService */]) === "function" && _a || Object])
], GameDashboardComponent);

var _a;
//# sourceMappingURL=game-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/gamesppservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesAppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GamesAppService = (function () {
    function GamesAppService(http) {
        this.http = http;
        this.serverUrl = "http://localhost:3000";
    }
    // Get all data from the API
    GamesAppService.prototype.getAllUsers = function (currentPage, pageSize) {
        //console.log(currentPage + ' ' + pageSize);
        var url = this.serverUrl + '/api/games/' + currentPage + '/' + pageSize;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    // Get all data from the API
    GamesAppService.prototype.getUserGroupData = function (GroupBy, currentPage, pageSize) {
        console.log(GroupBy + ' ' + currentPage + ' ' + pageSize);
        var url = this.serverUrl + '/api/games/' + GroupBy + '/' + currentPage + '/' + pageSize;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    return GamesAppService;
}());
GamesAppService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GamesAppService);

var _a;
//# sourceMappingURL=gamesppservice.service.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map