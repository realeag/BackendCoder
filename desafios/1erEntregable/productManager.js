class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        let producto = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };

        if (this.products.length ===0) {
            producto['id'] = 1;
            this.products.push(producto);
        } else {
            let codigo = this.products.find(producto => producto.code === code)
            if(codigo) {
                producto['id'] = this.products[this.products.length -1]['id'] + 1;
                this.products.push(producto);
            } else {
                console.log("This product already exists");
            }
        }
    }

    getProducts = () => {
        return this.products;
    }


    getProductById = (id) => {
        let producto = this.products.find(res => res.id === id)
        if (producto >= 1) {
            return producto;
        } else {
            console.log('Not Found');
        };
    }
}



