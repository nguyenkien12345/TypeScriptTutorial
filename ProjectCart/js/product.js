"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(id, name, price, description, image) {
        this._id = 0;
        this._name = '';
        this._price = 0;
        this._description = false;
        this._image = '';
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
        this._image = image;
    }
    Object.defineProperty(Product.prototype, "Id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Image", {
        get: function () {
            return this._image;
        },
        set: function (value) {
            this._image = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.default = Product;
