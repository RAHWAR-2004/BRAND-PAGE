const HeroSection = () => (
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
                YOUR FEET DESERVE THE BEST  AND WE'RE HERE TO 
                HELP YOU WITH OUR SHOES.Nike is a globally 
                recognized brand known for its high-performance
                 athletic footwear. Established in 1964,
            </p>

            <div className="hero-btn">
                < a href="https://www.nike.com/in/"><button>Shop Now</button></a>
                <a href="https://en.wikipedia.org/wiki/Category:Nike_brands"><button className="secondary-btn">Category</button></a>
            </div>

            <div className="shopping">
                <p>Also Available On</p>

                <div className="brand-icons ">
                   <a href="https://www.amazon.in/"><img src="/images/amazon.png" alt="amazon-logo" /></a>
                   <a href="https://www.flipkart.com/"><img src="/images/flipkart.png" alt="flipkart-logo" /></a> 

                </div>
            </div>
        </div>
        <div className="hero-image"></div>
        <img src="/images/hero-image.png" alt="hero-image" />
    </main>
);

export default HeroSection;