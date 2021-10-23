import Product from "./product";
import ProductManagement from "./productManagement";
import Cart from "./cart";
import CartManagement from "./cartManagement";

const productManagement = new ProductManagement();
const cartManagement = new CartManagement();

var dssanphamcuahang  = <HTMLElement>document.querySelector(".data_sanpham");
dssanphamcuahang.innerHTML = productManagement.showProductList();

var btnMuaNgays = document.querySelectorAll(".btnBuy");
for(let i = 0; i < btnMuaNgays.length; i++) {
    btnMuaNgays[i].addEventListener("click",function(){
        const id : number = this.getAttribute('data-idsp');
        const product : Product = productManagement.getProduct(id);
        
        if(cartManagement.checkProductExist(product) === -1){
            const productCart : Cart = new Cart(product,1);
            cartManagement.addProductCart(productCart);
        }
        else{
            cartManagement.updateQuantity(product);
        }

        var dssanphamgiohang  = <HTMLElement>document.querySelector(".dssanphamgiohang");
        dssanphamgiohang.innerHTML = cartManagement.showCart();

        showInfomations();
        
        thongbao('<div class="alert alert-success" role="alert">' +
        '<i class="fa fa-check-square-o"></i>' +
        '<strong id="thongbao">Sản phẩm</strong>&nbsp;đã được thêm vào giỏ hàng' +
        '</div>');
        

        var numberInputs = document.querySelectorAll(".soluongsp");
        for(let i = 0; i < numberInputs.length; i++){
            numberInputs[i].addEventListener("change",function(){
                var idsanphamgiohang : any = this.getAttribute("data-idslsp");
                var sanpham : Product = productManagement.getProduct(idsanphamgiohang);
                var soluongsp : number = parseFloat(this.value);
                cartManagement.updateProductCart(sanpham,soluongsp);
                showInfomations();
                thongbao('<div class="alert alert-info" role="alert">' +
                '<i class="fa fa-check-square-o"></i>' +
                '<strong id="thongbao">Sản phẩm</strong>&nbsp;đã được cập nhật vào giỏ hàng' +
                '</div>');
            })
        }
    });
}

var btnXoas = document.querySelectorAll('.btnXoa');
for(let i = 0; i < btnXoas.length; i++){
    btnXoas[i].addEventListener("click",function(){
        var idsp : number = this.getAttribute('data-iddelete');
        var sp : Product = productManagement.getProduct(idsp);
        if(sp){
            cartManagement.deleteProductCart(sp.Id);
        }
    })
}

function showInfomations() : void {
    var slgh  = <HTMLElement>document.querySelector("#slgh");
    var thanhtien  = <HTMLElement>document.querySelector("#thanhtien");
    var tongtien   = <HTMLElement>document.querySelector("#tongtien");
    slgh.innerHTML = cartManagement.getAllQuantityProduct().toString() + ' sản phẩm';
    thanhtien.innerHTML = cartManagement.checkOut().toString() + " VNĐ";
    tongtien.innerHTML = cartManagement.checkOut().toString() + " VNĐ";
}

function thongbao(noidung: string) : void {
    var thongbao = <HTMLElement>document.querySelector(".thongbao");
    thongbao.innerHTML = noidung;
}

