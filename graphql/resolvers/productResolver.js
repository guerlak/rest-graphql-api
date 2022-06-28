const productsResolvers = {
    Query: {
        getAllProducts: () => [{ id: "1", name: "Prancha Surf" }]
    },
    Mutation: {
        createProduct: (id, name) => {
            return id, name;
        }
    }
}

module.exports = { productsResolvers }