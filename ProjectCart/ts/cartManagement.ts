import Product from './product';
import Cart from './cart';

class CartManagement {

    private _productCartList : Cart[] = []
    
    constructor(){
    }

    public get productCartList() : Cart[] {
        return this._productCartList;
    }

    public set productCartList(value: Cart[]) {
        this._productCartList = value;
    }

    public getAll() : Cart[] {
        return this._productCartList;
    }

    public addProductCart(productCart: Cart) : void {
        this._productCartList.push(productCart)
    }

    public checkProductExist(product: Product) : number {
        if(product !== null){
            for(let i = 0; i < this._productCartList.length; i++){
                if(this._productCartList[i].Product.Id === product.Id){
                    return i;
                }
            }
        }
        return -1;
    }

    public updateQuantity(product: Product) : void {
        if(product !== null){
            var position : number = this.checkProductExist(product);
            var quantity : number = this._productCartList[position].Quantity;
            quantity = quantity + 1;
            this._productCartList[position].Quantity = quantity;
        }
    }

    public updateProductCart(product: Product, number: number) : void {
        for(let i = 0; i < this._productCartList.length; i++){
            if(this._productCartList[i].Product.Id === product.Id){
                this._productCartList[i].Quantity = number;
                this.showCart();
            }
        }
    }

    public deleteProductCart(id: number) : void {
        for(let i = 0; i < this._productCartList.length; i++){
            if(this._productCartList[i].Product.Id == id){
                this._productCartList.splice(i,1);
            }
        }
    }

    public getAllQuantityProduct() : number {
        let sum: number = 0;
        for(let i = 0; i < this._productCartList.length; i++){
            sum += this._productCartList[i].Quantity;
        }
        return sum;
    }

    public checkOut() : number {
        let sum = 0;
        for(let i = 0; i < this._productCartList.length; i++){
            sum += this._productCartList[i].getPrice();
        }
        return sum;
    }
    
    public showCart() : string {
        var html = '';
        if(this._productCartList.length > 0){
            for(let i = 0; i < this._productCartList.length; i++){
            html += `<div class='row sanpham card-block' data-id='${this._productCartList[i].Product.Id}'>
                        <div class='col-sm-2 col-md-2'>
                            <img src='${this._productCartList[i].Product.Image}' alt='${this._productCartList[i].Product.Name}' class='img-fluid'>
                        </div>
                        <div class='col-sm-4 col-md-4'>
                            <a href='' class='tieudesanpham'><span>${this._productCartList[i].Product.Name}</span></a>
                            <p class='noidungsp'><span>${this._productCartList[i].Product.Description ? "Còn hàng" : "Hết hàng"}</span></p>
                        </div>
                        <div class='col-sm-2 col-md-2'>
                            <span class='gia'>${this._productCartList[i].getPrice()} VNĐ</span>
                            <span class='sales badge badge-warning'>12%</span>
                        </div>
                        <div class='col-sm-1 col-md-1'>
                            <input type='number' name='' class='soluongsp' data-idslsp='${this._productCartList[i].Product.Id}' min='1' value='${this._productCartList[i].Quantity}'>
                        </div>
                        <div class='col-sm-3 col-md-3'>
                            <div class='btn-group'>
                                <div class='btn btn-outline-danger btnXoa' data-iddelete='${this._productCartList[i].Product.Id}'>Delete</div>
                            </div>
                        </div>
				    </div>`;
            }
            return html;
        }
        else{
            return "<span>Giỏ hàng trống</span>";
        }
    }
}

export default CartManagement;