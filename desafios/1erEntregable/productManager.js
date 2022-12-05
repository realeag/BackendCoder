class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        let producto = {
            title: title != "",
            description: description != "",
            price: price != null,
            thumbnail: thumbnail != "",
            code: code != "",
            stock: stock != null
        };

        if (!title || !description || !price || !thumbnail || !code || !stock === false) {
            console.log('FATAL ERROR: at least 1 item is missing');
            if (this.products.find((producto) => producto.code) === code) {
                this.products.push(producto);
            } else {
                console.log("This product already exists");
            };
        }

        if (this.products.length === 0) {
            producto["id"] = 1;
        } else {
            producto["id"] = this.products[this.products.length - 1]["id"] + 1;
        };
        this.products.push(producto)

    }

    getProducts = () => {
        return this.products;
    }


    getProductById = (id) => {
        let producto = this.products.find(res => res.id === id)
        if (producto) {
            console.log('Not Found');
        } else {
            return producto;
        };
    }
}



