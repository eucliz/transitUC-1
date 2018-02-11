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
var core_1 = require("@angular/core");
var device_service_1 = require("../../services/device.service");
var core_2 = require("@agm/core");
var PositionsComponent = (function () {
    function PositionsComponent(deviceService) {
        this.deviceService = deviceService;
        this.latitude = -33.45694;
        this.longitude = -70.64827;
        this.zoom = 9;
    }
    PositionsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.device) {
            this.deviceService.getPositionsByIMEI(this.device)
                .subscribe(function (positions) {
                _this.positions = positions;
                _this.centerMap();
            });
        }
    };
    PositionsComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    PositionsComponent.prototype.centerMap = function () {
        var X = 0.0, Y = 0.0, Z = 0.0;
        for (var _i = 0, _a = this.positions; _i < _a.length; _i++) {
            var pos = _a[_i];
            var lat_1 = pos.latitude * Math.PI / 180;
            var lon_1 = pos.longitude * Math.PI / 180;
            var a = Math.cos(lat_1) * Math.cos(lon_1);
            var b = Math.cos(lat_1) * Math.sin(lon_1);
            var c = Math.sin(lat_1);
            X += a;
            Y += b;
            Z += c;
        }
        X /= this.positions.length;
        Y /= this.positions.length;
        Z /= this.positions.length;
        var lon = Math.atan2(Y, X);
        var hyp = Math.sqrt(X * X + Y * Y);
        var lat = Math.atan2(Z, hyp);
        this.latitude = (lat * 180 / Math.PI);
        this.longitude = (lon * 180 / Math.PI);
    };
    return PositionsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PositionsComponent.prototype, "device", void 0);
__decorate([
    core_1.ViewChild(core_2.AgmMap),
    __metadata("design:type", core_2.AgmMap)
], PositionsComponent.prototype, "agmMap", void 0);
PositionsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'positions',
        templateUrl: 'positions.component.html'
    }),
    __metadata("design:paramtypes", [device_service_1.DeviceService])
], PositionsComponent);
exports.PositionsComponent = PositionsComponent;
//# sourceMappingURL=positions.component.js.map