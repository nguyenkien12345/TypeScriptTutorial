(()=>{"use strict";var t={66:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){this._quantity=0,this._product=t,this._quantity=e}return Object.defineProperty(t.prototype,"Product",{get:function(){return this._product},set:function(t){this._product=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Quantity",{get:function(){return this._quantity},set:function(t){this._quantity=t},enumerable:!1,configurable:!0}),t.prototype.getPrice=function(){var t=0;return t=this.Product.Price*this.Quantity,parseFloat(t.toLocaleString("it-IT",{style:"currency",currency:"VND"}))},t}();e.default=i},414:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){this._productCartList=[]}return Object.defineProperty(t.prototype,"productCartList",{get:function(){return this._productCartList},set:function(t){this._productCartList=t},enumerable:!1,configurable:!0}),t.prototype.getAll=function(){return this._productCartList},t.prototype.addProductCart=function(t){this._productCartList.push(t)},t.prototype.checkProductExist=function(t){if(null!==t)for(var e=0;e<this._productCartList.length;e++)if(this._productCartList[e].Product.Id===t.Id)return e;return-1},t.prototype.updateQuantity=function(t){if(null!==t){var e=this.checkProductExist(t),i=this._productCartList[e].Quantity;i+=1,this._productCartList[e].Quantity=i}},t.prototype.updateProductCart=function(t,e){for(var i=0;i<this._productCartList.length;i++)this._productCartList[i].Product.Id===t.Id&&(this._productCartList[i].Quantity=e,this.showCart())},t.prototype.deleteProductCart=function(t){for(var e=0;e<this._productCartList.length;e++)this._productCartList[e].Product.Id==t&&this._productCartList.splice(e,1)},t.prototype.getAllQuantityProduct=function(){for(var t=0,e=0;e<this._productCartList.length;e++)t+=this._productCartList[e].Quantity;return t},t.prototype.checkOut=function(){for(var t=0,e=0;e<this._productCartList.length;e++)t+=this._productCartList[e].getPrice();return t},t.prototype.showCart=function(){var t="";if(this._productCartList.length>0){for(var e=0;e<this._productCartList.length;e++)t+="<div class='row sanpham card-block' data-id='"+this._productCartList[e].Product.Id+"'>\n                        <div class='col-sm-2 col-md-2'>\n                            <img src='"+this._productCartList[e].Product.Image+"' alt='"+this._productCartList[e].Product.Name+"' class='img-fluid'>\n                        </div>\n                        <div class='col-sm-4 col-md-4'>\n                            <a href='' class='tieudesanpham'><span>"+this._productCartList[e].Product.Name+"</span></a>\n                            <p class='noidungsp'><span>"+(this._productCartList[e].Product.Description?"Còn hàng":"Hết hàng")+"</span></p>\n                        </div>\n                        <div class='col-sm-2 col-md-2'>\n                            <span class='gia'>"+this._productCartList[e].getPrice()+" VNĐ</span>\n                            <span class='sales badge badge-warning'>12%</span>\n                        </div>\n                        <div class='col-sm-1 col-md-1'>\n                            <input type='number' name='' class='soluongsp' data-idslsp='"+this._productCartList[e].Product.Id+"' min='1' value='"+this._productCartList[e].Quantity+"'>\n                        </div>\n                        <div class='col-sm-3 col-md-3'>\n                            <div class='btn-group'>\n                                <div class='btn btn-outline-danger btnXoa' data-iddelete='"+this._productCartList[e].Product.Id+"'>Delete</div>\n                            </div>\n                        </div>\n\t\t\t\t    </div>";return t}return"<span>Giỏ hàng trống</span>"},t}();e.default=i},367:function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(i(501)),o=r(i(66)),s=r(i(414)),a=new n.default,u=new s.default;document.querySelector(".data_sanpham").innerHTML=a.showProductList();for(var c=document.querySelectorAll(".btnBuy"),d=0;d<c.length;d++)c[d].addEventListener("click",(function(){var t=this.getAttribute("data-idsp"),e=a.getProduct(t);if(-1===u.checkProductExist(e)){var i=new o.default(e,1);u.addProductCart(i)}else u.updateQuantity(e);document.querySelector(".dssanphamgiohang").innerHTML=u.showCart(),h(),l('<div class="alert alert-success" role="alert"><i class="fa fa-check-square-o"></i><strong id="thongbao">Sản phẩm</strong>&nbsp;đã được thêm vào giỏ hàng</div>');for(var r=document.querySelectorAll(".soluongsp"),n=0;n<r.length;n++)r[n].addEventListener("change",(function(){var t=this.getAttribute("data-idslsp"),e=a.getProduct(t),i=parseFloat(this.value);u.updateProductCart(e,i),h(),l('<div class="alert alert-info" role="alert"><i class="fa fa-check-square-o"></i><strong id="thongbao">Sản phẩm</strong>&nbsp;đã được cập nhật vào giỏ hàng</div>')}))}));var p=document.querySelectorAll(".btnXoa");for(d=0;d<p.length;d++)p[d].addEventListener("click",(function(){var t=this.getAttribute("data-iddelete"),e=a.getProduct(t);e&&u.deleteProductCart(e.Id)}));function h(){var t=document.querySelector("#slgh"),e=document.querySelector("#thanhtien"),i=document.querySelector("#tongtien");t.innerHTML=u.getAllQuantityProduct().toString()+" sản phẩm",e.innerHTML=u.checkOut().toString()+" VNĐ",i.innerHTML=u.checkOut().toString()+" VNĐ"}function l(t){document.querySelector(".thongbao").innerHTML=t}},663:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,i,r,n){this._id=0,this._name="",this._price=0,this._description=!1,this._image="",this._id=t,this._name=e,this._price=i,this._description=r,this._image=n}return Object.defineProperty(t.prototype,"Id",{get:function(){return this._id},set:function(t){this._id=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Name",{get:function(){return this._name},set:function(t){this._name=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Price",{get:function(){return this._price},set:function(t){this._price=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Description",{get:function(){return this._description},set:function(t){this._description=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Image",{get:function(){return this._image},set:function(t){this._image=t},enumerable:!1,configurable:!0}),t}();e.default=i},501:function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(i(663)),o=function(){function t(){this._productList=[];var t=new n.default(1,"Điện thoại Samsung S20",1049e4,!0,"images/dien-thoai-samsung-galaxy-s20-fe-8gb-256gb-xanh.jpg"),e=new n.default(2,"Điện thoại Samsung S21",2529e4,!0,"images/dien-thoai-samsung-galaxy-s21-ultra-12gb-128gb-bac-1.jpg"),i=new n.default(3,"Điện thoại Iphone Pro 12 vàng",2899e4,!0,"images/dien-thoai-iphone-12-pro-256gb-vang-1.jpg"),r=new n.default(4,"Điện thoại Iphone Pro 12 xanh",2899e4,!0,"images/dien-thoai-iphone-12-pro-256gb-xanh-1.jpg"),o=new n.default(5,"Điện thoại Nokia 2.4 xanh",229e4,!1,"images/dien-thoai-nokia-2-4-xanh-1.jpg"),s=new n.default(6,"Điện thoại Nokia 110 xanh",479e3,!1,"images/dien-thoai-nokia-110-ds-xanh-1.jpg");this.addProduct(t),this.addProduct(e),this.addProduct(i),this.addProduct(r),this.addProduct(o),this.addProduct(s)}return Object.defineProperty(t.prototype,"ProductList",{get:function(){return this._productList},set:function(t){this._productList=t},enumerable:!1,configurable:!0}),t.prototype.getAllProduct=function(){return this._productList},t.prototype.getProduct=function(t){for(var e=0;e<this._productList.length;e++)if(this._productList[e].Id==t)return this._productList[e]},t.prototype.addProduct=function(t){this._productList.push(t)},t.prototype.showProductList=function(){var t="";if(this._productList.length>0){for(var e=0;e<this._productList.length;e++)t+="<div class='col-sm-4 col-md-4 spk'>\n                            <div class='card sanphamcuahang id-"+this._productList[e].Id+"'>\n                                <img src='"+this._productList[e].Image+"' alt='"+this._productList[e].Name+"' class='img-fluid'>\n                                <div class='card-block'>\n                                    <a href='' class='card-title tieudespkhac'>"+this._productList[e].Name+"</a>\n                                    <p class='card-text motaspkhac'>"+(this._productList[e].Description?"Còn hàng":"Hết hàng")+"</p>\n                                    <span class='giaspkhac'><b>"+this._productList[e].Price.toLocaleString("it-IT",{style:"currency",currency:"VND"})+"</b> VNĐ</span>",this._productList[e].Description?t+="<button class='btn btn-outline-info btn-block btnBuy' data-idsp='"+this._productList[e].Id+"'>Mua ngay</button>":t+="<button class='btn disabled btn-outline-info btn-block btnBuy' data-idsp='"+this._productList[e].Id+"'>Hết hàng</button>",t+="</div>\n                            </div> \n                        </div>";return t}return"<span>Sản phẩm đang được cập nhật</span>"},t}();e.default=o}},e={};!function i(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,i),o.exports}(367)})();