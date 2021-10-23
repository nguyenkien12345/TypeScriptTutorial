import Product from "./product";

class Cart {
    private _product: Product;
    private _quantity: number = 0;

    constructor(product: Product, quantity: number){
        this._product = product;
        this._quantity = quantity;
    }

    public get Product() : Product {
        return this._product;
    }

    public set Product(value : Product) {
        this._product = value;
    }

    public get Quantity() : number {
        return this._quantity;
    }

    public set Quantity(value : number) {
        this._quantity = value;
    }

    public getPrice() : number {
        let tongtien : number = 0;
        tongtien = this.Product.Price * this.Quantity;
        tongtien = parseFloat(tongtien.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));
        return tongtien;
    }
}

export default Cart;