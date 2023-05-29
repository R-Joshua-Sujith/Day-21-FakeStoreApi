const getData = function () {
    for (let i = 0; i < 16; i++) {
        fetch(`https://fakestoreapi.com/products/${i}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const products = document.querySelector("#products");

                const product = document.createElement("div");
                product.classList.add("product");
                const img = document.createElement("img");
                img.classList.add("image");
                img.src = data.image;
                const title = document.createElement("h4");
                title.innerText = data.title;
                const price = document.createElement("h4");
                price.innerText = `Price:${data.price}`;
                const category = document.createElement("h4");
                category.innerText = `Category:${data.category}`;

                product.appendChild(category);
                product.appendChild(img);
                product.appendChild(price);

                product.appendChild(title);

                products.appendChild(product);
                console.log(data);
            })
    }
}

getData();