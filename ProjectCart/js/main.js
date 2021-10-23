"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var productManagement_1 = __importDefault(require("./productManagement"));
var cart_1 = __importDefault(require("./cart"));
var cartManagement_1 = __importDefault(require("./cartManagement"));
var productManagement = new productManagement_1.default();
var cartManagement = new cartManagement_1.default();
var dssanphamcuahang = document.querySelector(".data_sanpham");
dssanphamcuahang.innerHTML = productManagement.showProductList();
var btnMuaNgays = document.querySelectorAll(".btnBuy");
for (var i = 0; i < btnMuaNgays.length; i++) {
    btnMuaNgays[i].addEventListener("click", function () {
        var id = this.getAttribute('data-idsp');
        var product = productManagement.getProduct(id);
        if (cartManagement.checkProductExist(product) === -1) {
            var productCart = new cart_1.default(product, 1);
            cartManagement.addProductCart(productCart);
        }
        else {
            cartManagement.updateQuantity(product);
        }
        var dssanphamgiohang = document.querySelector(".dssanphamgiohang");
        dssanphamgiohang.innerHTML = cartManagement.showCart();
        showInfomations();
        thongbao('<div class="alert alert-success" role="alert">' +
            '<i class="fa fa-check-square-o"></i>' +
            '<strong id="thongbao">Sản phẩm</strong>&nbsp;đã được thêm vào giỏ hàng' +
            '</div>');
        var numberInputs = document.querySelectorAll(".soluongsp");
        for (var i_1 = 0; i_1 < numberInputs.length; i_1++) {
            numberInputs[i_1].addEventListener("change", function () {
                var idsanphamgiohang = this.getAttribute("data-idslsp");
                var sanpham = productManagement.getProduct(idsanphamgiohang);
                var soluongsp = parseFloat(this.value);
                cartManagement.updateProductCart(sanpham, soluongsp);
                showInfomations();
                thongbao('<div class="alert alert-info" role="alert">' +
                    '<i class="fa fa-check-square-o"></i>' +
                    '<strong id="thongbao">Sản phẩm</strong>&nbsp;đã được cập nhật vào giỏ hàng' +
                    '</div>');
            });
        }
    });
}
var btnXoas = document.querySelectorAll('.btnXoa');
for (var i = 0; i < btnXoas.length; i++) {
    btnXoas[i].addEventListener("click", function () {
        var idsp = this.getAttribute('data-iddelete');
        var sp = productManagement.getProduct(idsp);
        if (sp) {
            cartManagement.deleteProductCart(sp.Id);
        }
    });
}
function showInfomations() {
    var slgh = document.querySelector("#slgh");
    var thanhtien = document.querySelector("#thanhtien");
    var tongtien = document.querySelector("#tongtien");
    slgh.innerHTML = cartManagement.getAllQuantityProduct().toString() + ' sản phẩm';
    thanhtien.innerHTML = cartManagement.checkOut().toString() + " VNĐ";
    tongtien.innerHTML = cartManagement.checkOut().toString() + " VNĐ";
}
function thongbao(noidung) {
    var thongbao = document.querySelector(".thongbao");
    thongbao.innerHTML = noidung;
}
