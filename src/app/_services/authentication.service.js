"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var alert_service_1 = require("./alert.service");
var user_service_1 = require("./user.service");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, userService, alertService) {
        this.http = http;
        this.userService = userService;
        this.alertService = alertService;
        this.root_url = "http://localhost:57055";
    }
    AuthenticationService.prototype.login = function (email, passcode) {
        var _this = this;
        var headers = new http_1.HttpHeaders().set('content-type', 'application/json');
        return this.http.post(this.root_url + '/api/Owner', { email: email, passcode: passcode }, { headers: headers })
            .map(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.alertService.success('Login successful', true);
            }
            else {
                _this.alertService.error("Failed");
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            user_service_1.UserService,
            alert_service_1.AlertService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map