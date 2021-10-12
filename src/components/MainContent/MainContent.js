import Products from "../Products/Products";
export default function MainContent() {
    return (
        <div className="main-content">
            <h1 style={{ padding: '0 24px' }} className="f-exo">Featured Products</h1>
            <Products />
        </div>
    );
}