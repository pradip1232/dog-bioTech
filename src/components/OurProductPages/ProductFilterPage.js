import React, { useEffect, useState } from "react";

const ProductFilterPage = () => {
    const [categories, setCategories] = useState([]); // To store categories
    const [products, setProducts] = useState([]); // To store products
    const [selectedCategory, setSelectedCategory] = useState("All"); // Filter category
    const [searchTerm, setSearchTerm] = useState(""); // Search term
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Fetch categories and products from the API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("http://localhost/pbt/get_categories.php");
                const Cate_text = await response.text();
                console.log("Raw Response category:", Cate_text);
                const data = JSON.parse(Cate_text); // Parse manually
                setCategories(data);
            } catch (err) {
                console.error("Error parsing categories:", err.message);
                setError("Failed to fetch or parse categories.");
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost/pbt/get_products.php");
                const text = await response.text(); // Log raw text
                console.log("Raw Response products :  ", text);
                const data = JSON.parse(text); // Parse manually
                setProducts(data);
            } catch (err) {
                console.error("Error parsing products:", err.message);
                setError("Failed to fetch or parse products.");
            }
        };

        // Run both fetch functions and set loading to false when both are completed
        const fetchData = async () => {
            await fetchCategories();
            await fetchProducts();
            setLoading(false); // Set loading to false after both API calls
        };

        fetchData(); // Call the fetch function
    }, []); // Empty dependency array to run once when component mounts

    // Filter products based on selected category and search term
    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            selectedCategory === "All" || product.category_id === selectedCategory;
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Display loading, error, or the actual UI
    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-danger text-center">Error: {error}</div>;
    }

    return (
        <div className="container mt-4 product-filter-page">
            {/* Category Buttons */}
            <div className="category-buttons mb-4 text-center">
                {/* <button
                    className={`btn btn-primary mx-2 ${selectedCategory === "All" ? "active" : ""}`}
                    onClick={() => setSelectedCategory("All")}
                >
                    All
                </button> */}
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`btn btn-outline-primary mx-2 ${selectedCategory === category.id ? "active" : ""}`}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Row 2: Search Bar */}
            <div className="search-bar d-flex justify-content-end mb-4">
                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search for Products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Product Cards */}
            <div className="row">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="card product-card">
                                <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt={product.name}
                                    onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback image
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.category_name}</p>
                                    {/* <p className="card-text">{product.description}</p> */}
                                    <button className="btn btn-primary">Know More</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">No products found</div>
                )}
            </div>
        </div>
    );
};

export default ProductFilterPage;
