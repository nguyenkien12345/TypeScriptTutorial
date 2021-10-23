"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = __importDefault(require("./product"));
var ProductManagement = /** @class */ (function () {
    function ProductManagement() {
        this._productList = [];
        var product1 = new product_1.default(1, "Điện thoại Samsung S20", 10490000, true, "images/dien-thoai-samsung-galaxy-s20-fe-8gb-256gb-xanh.jpg");
        var product2 = new product_1.default(2, "Điện thoại Samsung S21", 25290000, true, "images/dien-thoai-samsung-galaxy-s21-ultra-12gb-128gb-bac-1.jpg");
        var product3 = new product_1.default(3, "Điện thoại Iphone Pro 12 vàng", 28990000, true, "images/dien-thoai-iphone-12-pro-256gb-vang-1.jpg");
        var product4 = new product_1.default(4, "Điện thoại Iphone Pro 12 xanh", 28990000, true, "images/dien-thoai-iphone-12-pro-256gb-xanh-1.jpg");
        var product5 = new product_1.default(5, "Điện thoại Nokia 2.4 xanh", 2290000, false, "images/dien-thoai-nokia-2-4-xanh-1.jpg");
        var product6 = new product_1.default(6, "Điện thoại Nokia 110 xanh", 479000, false, "images/dien-thoai-nokia-110-ds-xanh-1.jpg");
        this.addProduct(product1);
        this.addProduct(product2);
        this.addProduct(product3);
        this.addProduct(product4);
        this.addProduct(product5);
        this.addProduct(product6);
    }
    Object.defineProperty(ProductManagement.prototype, "ProductList", {
        get: function () {
            return this._productList;
        },
        set: function (value) {
            this._productList = value;
        },
        enumerable: false,
        configurable: true
    });
    ProductManagement.prototype.getAllProduct = function () {
        return this._productList;
    };
    ProductManagement.prototype.getProduct = function (id) {
        for (var i = 0; i < this._productList.length; i++) {
            if (this._productList[i].Id == id) {
                var product = this._productList[i];
                return product;
            }
        }
    };
    ProductManagement.prototype.addProduct = function (product) {
        // Cách 1
        this._productList.push(product);
        // Cách 2
        // this._productList[this._productList.length] = product;
    };
    ProductManagement.prototype.showProductList = function () {
        var html = '';
        if (this._productList.length > 0) {
            for (var i = 0; i < this._productList.length; i++) {
                html += "<div class='col-sm-4 col-md-4 spk'>\n                            <div class='card sanphamcuahang id-" + this._productList[i].Id + "'>\n                                <img src='" + this._productList[i].Image + "' alt='" + this._productList[i].Name + "' class='img-fluid'>\n                                <div class='card-block'>\n                                    <a href='' class='card-title tieudespkhac'>" + this._productList[i].Name + "</a>\n                                    <p class='card-text motaspkhac'>" + (this._productList[i].Description ? "Còn hàng" : "Hết hàng") + "</p>\n                                    <span class='giaspkhac'><b>" + (this._productList[i].Price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) + "</b> VN\u0110</span>";
                if (!this._productList[i].Description) {
                    html += "<button class='btn disabled btn-outline-info btn-block btnBuy' data-idsp='" + this._productList[i].Id + "'>H\u1EBFt h\u00E0ng</button>";
                }
                else {
                    html += "<button class='btn btn-outline-info btn-block btnBuy' data-idsp='" + this._productList[i].Id + "'>Mua ngay</button>";
                }
                html += "</div>\n                            </div> \n                        </div>";
            }
            return html;
        }
        else {
            return "<span>Sản phẩm đang được cập nhật</span>";
        }
    };
    return ProductManagement;
}());
exports.default = ProductManagement;
