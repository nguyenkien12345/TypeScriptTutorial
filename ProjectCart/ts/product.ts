class Product {
    private _id: number = 0;
    private _name: string = '';
    private _price: number = 0;
    private _description: boolean = false;
    private _image: string = '';

    constructor(id: number, name: string, price: number, description: boolean, image: string){
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
        this._image = image;
    }

    public get Id() : number {
        return this._id;
    }

    public set Id(value: number) {
        this._id = value;
    }

    public get Name() : string {
        return this._name;
    }

    public set Name(value: string) {
        this._name = value;
    }

    public get Price() : number {
        return this._price;
    }

    public set Price(value: number) {
        this._price = value;
    }

    public get Description() : boolean {
        return this._description;
    }

    public set Description(value: boolean) {
        this._description = value;
    }

    public get Image() : string {
        return this._image;
    }

    public set Image(value: string) {
        this._image = value;
    }
}

export default Product;