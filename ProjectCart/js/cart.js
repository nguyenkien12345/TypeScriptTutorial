"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart(product, quantity) {
        this._quantity = 0;
        this._product = product;
        this._quantity = quantity;
    }
    Object.defineProperty(Cart.prototype, "Product", {
        get: function () {
            return this._product;
        },
        set: function (value) {
            this._product = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cart.prototype, "Quantity", {
        get: function () {
            return this._quantity;
        },
        set: function (value) {
            this._quantity = value;
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.getPrice = function () {
        var tongtien = 0;
        tongtien = this.Product.Price * this.Quantity;
        tongtien = parseFloat(tongtien.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
        return tongtien;
    };
    return Cart;
}());
exports.default = Cart;
