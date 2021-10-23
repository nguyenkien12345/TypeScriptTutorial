import Product from './product';

class ProductManagement {
    private _productList: Product[] = [];

    constructor(){
        var product1 = new Product(1,"Điện thoại Samsung S20",10490000,true,"images/dien-thoai-samsung-galaxy-s20-fe-8gb-256gb-xanh.jpg");
        var product2 = new Product(2,"Điện thoại Samsung S21",25290000,true,"images/dien-thoai-samsung-galaxy-s21-ultra-12gb-128gb-bac-1.jpg");
        var product3 = new Product(3,"Điện thoại Iphone Pro 12 vàng",28990000,true,"images/dien-thoai-iphone-12-pro-256gb-vang-1.jpg");
        var product4 = new Product(4,"Điện thoại Iphone Pro 12 xanh",28990000,true,"images/dien-thoai-iphone-12-pro-256gb-xanh-1.jpg");
        var product5 = new Product(5,"Điện thoại Nokia 2.4 xanh",2290000,false,"images/dien-thoai-nokia-2-4-xanh-1.jpg");
        var product6 = new Product(6,"Điện thoại Nokia 110 xanh",479000,false,"images/dien-thoai-nokia-110-ds-xanh-1.jpg");

        this.addProduct(product1);
        this.addProduct(product2);
        this.addProduct(product3);
        this.addProduct(product4);
        this.addProduct(product5);
        this.addProduct(product6);
    }
    
    public get ProductList() : Product[] {
        return this._productList;
    }

    public set ProductList(value: Product[]) {
        this._productList = value;
    }

    public getAllProduct() : Product[] {
        return this._productList;
    }

    public getProduct(id: number) : any {
        for(let i = 0; i < this._productList.length; i++){
            if(this._productList[i].Id == id){
                var product: Product = this._productList[i];
                return product;
            }
        }
    }

    public addProduct(product: Product) : void {
        // Cách 1
        this._productList.push(product);

        // Cách 2
        // this._productList[this._productList.length] = product;
    }

    public showProductList(): string {
        var html = '';
        if(this._productList.length > 0){
            for(let i = 0; i < this._productList.length; i++){
                html += `<div class='col-sm-4 col-md-4 spk'>
                            <div class='card sanphamcuahang id-${this._productList[i].Id}'>
                                <img src='${this._productList[i].Image}' alt='${this._productList[i].Name}' class='img-fluid'>
                                <div class='card-block'>
                                    <a href='' class='card-title tieudespkhac'>${this._productList[i].Name}</a>
                                    <p class='card-text motaspkhac'>${this._productList[i].Description ? "Còn hàng" : "Hết hàng"}</p>
                                    <span class='giaspkhac'><b>${(this._productList[i].Price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</b> VNĐ</span>`

                                    if(!this._productList[i].Description){
                                        html += `<button class='btn disabled btn-outline-info btn-block btnBuy' data-idsp='${this._productList[i].Id}'>Hết hàng</button>` 
                                    }
                                    else{
                                        html += `<button class='btn btn-outline-info btn-block btnBuy' data-idsp='${this._productList[i].Id}'>Mua ngay</button>` 
                                    }

                html +=         `</div>
                            </div> 
                        </div>`
            }
            return html;
        }
        else {
            return "<span>Sản phẩm đang được cập nhật</span>";
        }
    }
}

export default ProductManagement;