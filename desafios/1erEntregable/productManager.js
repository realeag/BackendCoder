class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts = () => {
        this.products.map(({ title }) => title.join(", "));
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        let producto = {
            title: title || "producto prueba",
            description: description || "este es un producto prueba",
            price: price || 200,
            thumbnail: thumbnail || "sin img",
            code,
            stock: stock || 25
        }; 

        if (this.products.length === 0) {
            producto["id"] = 1;
        } else {
            producto["id"] = this.products[this.products.length - 1]["id"] + 1;
        };
        this.products.push(producto)
    }

    getProductById = (idProd,) => {
        let resultado;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === idProd){
                
            }
        }
    }
}

    const nuevoProd = new ProductManager();

nuevoProd.addProduct('Iphone', 'Este es el Iphone', 200051, "sin img", "CODEprod1", 5);
nuevoProd.addProduct('Placa de video', 'Acá la placa', 15000, "sin img", "CODEprod2", 7);
nuevoProd.addProduct('Monitor', 'También tenemos monitor', 24599, "sin img", "CODEprod3", 10);


