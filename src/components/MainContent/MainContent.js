import Products from "../Products/Products";
import TitleBar from "../TitleBar";

export default function MainContent() {
    return (
        <div className="main-content">
            <TitleBar title="Featured Products" />
            <Products />
        </div>
    );
}