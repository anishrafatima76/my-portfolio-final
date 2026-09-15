
export default function Products() {

    const products = [
        {
            id: 1,
            name: "Classic Leather Journal",
            category: "JOURNAL",
            description: "A timeless journal for thoughts, notes and everyday writing.",
            price: "Rs. 2,499",
            icon: "📓"
        },

        {
            id: 2,
            name: "Daily Planner",
            category: "PLANNER",
            description: "A simple planner to organize your days, goals and priorities.",
            price: "Rs. 1,899",
            icon: "📔"
        },

        {
            id: 3,
            name: "Vintage Journal",
            category: "JOURNAL",
            description: "A vintage-inspired journal made for stories, memories and ideas.",
            price: "Rs. 2,799",
            icon: "📖"
        },

        {
            id: 4,
            name: "Study Journal",
            category: "STUDY",
            description: "A practical notebook designed for notes, learning and planning.",
            price: "Rs. 1,699",
            icon: "📚"
        },

        {
            id: 5,
            name: "Travel Journal",
            category: "TRAVEL",
            description: "Keep your favorite travel memories, plans and little moments together.",
            price: "Rs. 2,199",
            icon: "✈️"
        },

        {
            id: 6,
            name: "Gratitude Journal",
            category: "WELLNESS",
            description: "A peaceful space for reflections, gratitude and everyday thoughts.",
            price: "Rs. 1,799",
            icon: "♡"
        }
    ];


    return (
        <div className="products-page">

            {/* ================= HERO ================= */}

            <section className="products-hero">

                <div className="products-hero-content">

                    <p className="products-label">
                        THE JOURNAL COLLECTION
                    </p>

                    <h1>
                        Put Your Thoughts
                        <span> On Paper.</span>
                    </h1>

                    <p className="products-hero-description">
                        Thoughtfully designed journals for ideas,
                        plans, memories and everyday moments.
                    </p>

                </div>

            </section>


            {/* ================= COLLECTION ================= */}

            <section className="products-section">

                <div className="products-heading">

                    <div>
                        <p>OUR COLLECTION</p>

                        <h2>
                            Find Your Journal
                        </h2>
                    </div>

                    <div className="product-count">
                        06 PRODUCTS
                    </div>

                </div>


                <div className="products-grid">

                    {products.map((product) => (

                        <div
                            className="product-card"
                            key={product.id}
                        >

                            {/* Product visual */}

                            <div className="product-visual">

                                <span className="product-category">
                                    {product.category}
                                </span>

                                <div className="product-icon">
                                    {product.icon}
                                </div>

                            </div>


                            {/* Product details */}

                            <div className="product-details">

                                <p className="product-small-title">
                                    {product.category}
                                </p>

                                <h3>
                                    {product.name}
                                </h3>

                                <p className="product-description">
                                    {product.description}
                                </p>


                                <div className="product-bottom">

                                    <strong>
                                        {product.price}
                                    </strong>

                                    <button>
                                        View Details →
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* ================= BOTTOM FEATURE ================= */}

            <section className="products-feature">

                <div className="feature-content">

                    <p>
                        WRITE • PLAN • REMEMBER
                    </p>

                    <h2>
                        Every thought deserves
                        <span> a place.</span>
                    </h2>

                    <p className="feature-description">
                        Whether you're planning your day, recording
                        your ideas or keeping your memories alive,
                        choose a journal that feels like yours.
                    </p>

                </div>

            </section>

        </div>
    );
}

