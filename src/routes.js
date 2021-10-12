import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './Home'
import Login from '../src/components/Login/Login'
import Registration from "./components/Registration/Registration";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Page_404 from "./components/Page_404";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
// Routes
// siteurl/route-path
// Home/Landing Page - /
// Login Page - /login
// Registration - /signup
// All Products - /products
// All Categories /categories
// Specific Category Products - /categories/<category-id>
// Specific Product - /product/<product-id>
// Cart /cart
// Favourites /favourites
// Order Page /orders

export default function Routes() {
    return (
            <Router>
                <Header />
                <Categories />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/signup" component={Registration} exact />
                    <Route path="/category/:name" component={Category} exact />
                    <Route path="/products" component={Products} exact />
                    <Route path="/:others" component={Page_404} exact />
                </Switch>
                <Footer />
            </Router>
    )
}