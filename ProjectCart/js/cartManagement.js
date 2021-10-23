"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CartManagement = /** @class */ (function () {
    function CartManagement() {
        this._productCartList = [];
    }
    Object.defineProperty(CartManagement.prototype, "productCartList", {
        get: function () {
            return this._productCartList;
        },
        set: function (value) {
            this._productCartList = value;
        },
        enumerable: false,
        configurable: true
    });
    CartManagement.prototype.getAll = function () {
        return this._productCartList;
    };
    CartManagement.prototype.addProductCart = function (productCart) {
        this._productCartList.push(productCart);
    };
    CartManagement.prototype.checkProductExist = function (product) {
        if (product !== null) {
            for (var i = 0; i < this._productCartList.length; i++) {
                if (this._productCartList[i].Product.Id === product.Id) {
                    return i;
                }
            }
        }
        return -1;
    };
    CartManagement.prototype.updateQuantity = function (product) {
        if (product !== null) {
            var position = this.checkProductExist(product);
            var quantity = this._productCartList[position].Quantity;
            quantity = quantity + 1;
            this._productCartList[position].Quantity = quantity;
        }
    };
    CartManagement.prototype.updateProductCart = function (product, number) {
        for (var i = 0; i < this._productCartList.length; i++) {
            if (this._productCartList[i].Product.Id === product.Id) {
                this._productCartList[i].Quantity = number;
                this.showCart();
            }
        }
    };
    CartManagement.prototype.deleteProductCart = function (id) {
        for (var i = 0; i < this._productCartList.length; i++) {
            if (this._productCartList[i].Product.Id == id) {
                this._productCartList.splice(i, 1);
            }
        }
    };
    CartManagement.prototype.getAllQuantityProduct = function () {
        var sum = 0;
        for (var i = 0; i < this._productCartList.length; i++) {
            sum += this._productCartList[i].Quantity;
        }
        return sum;
    };
    CartManagement.prototype.checkOut = function () {
        var sum = 0;
        for (var i = 0; i < this._productCartList.length; i++) {
            sum += this._productCartList[i].getPrice();
        }
        return sum;
    };
    CartManagement.prototype.showCart = function () {
        var html = '';
        if (this._productCartList.length > 0) {
            for (var i = 0; i < this._productCartList.length; i++) {
                html += "<div class='row sanpham card-block' data-id='" + this._productCartList[i].Product.Id + "'>\n                        <div class='col-sm-2 col-md-2'>\n                            <img src='" + this._productCartList[i].Product.Image + "' alt='" + this._productCartList[i].Product.Name + "' class='img-fluid'>\n                        </div>\n                        <div class='col-sm-4 col-md-4'>\n                            <a href='' class='tieudesanpham'><span>" + this._productCartList[i].Product.Name + "</span></a>\n                            <p class='noidungsp'><span>" + (this._productCartList[i].Product.Description ? "Còn hàng" : "Hết hàng") + "</span></p>\n                        </div>\n                        <div class='col-sm-2 col-md-2'>\n                            <span class='gia'>" + this._productCartList[i].getPrice() + " VN\u0110</span>\n                            <span class='sales badge badge-warning'>12%</span>\n                        </div>\n                        <div class='col-sm-1 col-md-1'>\n                            <input type='number' name='' class='soluongsp' data-idslsp='" + this._productCartList[i].Product.Id + "' min='1' value='" + this._productCartList[i].Quantity + "'>\n                        </div>\n                        <div class='col-sm-3 col-md-3'>\n                            <div class='btn-group'>\n                                <div class='btn btn-outline-danger btnXoa' data-iddelete='" + this._productCartList[i].Product.Id + "'>Delete</div>\n                            </div>\n                        </div>\n\t\t\t\t    </div>";
            }
            return html;
        }
        else {
            return "<span>Giỏ hàng trống</span>";
        }
    };
    return CartManagement;
}());
exports.default = CartManagement;
