const fetchProducts = async () => {
    const response = await fetch('https://shop-cart-4ff9a.firebaseio.com/products.json');
    const data = await response.json();

    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    
    return data;
}

export { fetchProducts };