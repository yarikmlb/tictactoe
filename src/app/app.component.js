"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var square_component_1 = require("./square/square.component");
var AppComponent = (function () {
    function AppComponent() {
        this.matrix = [];
        this.generateMatrix(4);
    }
    AppComponent.prototype.generateMatrix = function (count) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(this.createElem());
        }
        for (var i = 0; i < count; i++) {
            this.matrix.push(arr);
        }
    };
    AppComponent.prototype.createElem = function () {
        return ({ value: '' });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [square_component_1.SquareComponent]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map