import React, {useEffect, Suspense, lazy, Fragment} from "react";
import {useLocation} from "react-router-dom";
import MetaTags from "react-meta-tags";
import NavbarCommon from "./common/components/navigation-bar/navigation-bar-common/navbar-common";
import {Route, Switch} from "react-router-dom";
import NavigationBarDrawer from "./common/components/navigation-bar/navigation-bar-drawer/navigation-bar-drawer";
import ProductView from "./features/product/ProductView";
import SingleOrderDetails from "./features/profile/components/SingleOrderDetails";
import Footer from "./common/components/footer/footer";
import { useAuth } from "./app/hooks";
import Avatar from "@material-ui/core/Avatar";
import {clearCurrent, getProducts, setClearAllData} from "./features/shop/shopSlice";
import {useDispatch, useSelector} from "react-redux";

const TestLandingPage = () => {
    let location = useLocation();
    const dispatch = useDispatch();
    const isAuthenticated = useAuth();
    const login = lazy(() => import("./features/auth/auth-view/auth-view-login"));
    const register = lazy(() => import("./features/auth/auth-view/auth-view-register"));
    // const nav = lazy(() => import("./common/components/navigation-bar/navigation-bar-common/navbar-common"));
    const nav2 = lazy(() => import("./common/components/navigation-bar/navigation-bar-drawer/navigation-bar-drawer"));
    const home = lazy(() => import("./features/home/homeView"));
    const shop = lazy(() => import("./features/shop/ShopView"));
    const cart = lazy(() => import("./features/cart/CartView"));
    const contactUs = lazy(() => import("./common/components/contactUs/contact-us-view"));
    const forgotPassword = lazy(() => import("./features/auth/auth-view/forgot-password"));
    const confirmforgotPassword = lazy(() => import("./features/auth/auth-view/forgot-password-confirm"));
    const checkout = lazy(() => import("./features/checkout/CheckoutView"));
    const product = lazy(() => import("./features/product/ProductView"));
    const profile = lazy(() => import("./features/profile/ProfileView"));
    const order = lazy(() => import("./features/profile/orderView"));
    const confirmSignup = lazy(() => import("./features/auth/auth-view/confirm-sign-up"));
    const wishlist = lazy(()=> import("./features/wishlist/WishListView"));
    const compare = lazy(()=>import("./features/compare/CompareView"))
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    useEffect(()=>{
        if (location.pathname === "/"){
            let limit = 8;
            let offset = 0;
            let order = "createdAt";
            let direction="DESC"
            dispatch(getProducts({limit,offset,order,direction}));
        }
    },[pathname])

    return (
        <div>
            <MetaTags>
                <title>Nova Ecommerce | Official Merch Shop - Royal College</title>
                <meta
                    name="description"
                    content="Fashion home of flone react minimalist eCommerce template."
                />
            </MetaTags>
            <header>
                {
                    location.pathname === "/" ?  <NavigationBarDrawer /> :    <NavbarCommon/>
                }
            </header>
            <main>
                <Switch>
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/"}
                        component={home}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/shop"}
                        component={shop}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/login"}
                        component={login}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/register"}
                        component={register}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/forgot-password"}
                        component={forgotPassword}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/confirm-forgot-password"}
                        component={confirmforgotPassword}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/compare"}
                        component={compare}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/wishlist"}
                        component={wishlist}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/cart"}
                        component={cart}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/contact-Us"}
                        component={contactUs}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/checkout"}
                        component={checkout}
                    /> <Route
                        exact
                        path={process.env.PUBLIC_URL + "/confirm-signup"}
                        component={confirmSignup}
                    />
                    <Route
                        path={process.env.PUBLIC_URL + "/product/:id"}
                        render={(routeProps) => (
                            <ProductView {...routeProps} key={routeProps.match.params.id} />
                        )}
                    />
                    <Route
                        path={process.env.PUBLIC_URL + "/order/:id"}
                        render={(routeProps) => (
                            <SingleOrderDetails {...routeProps} key={routeProps.match.params.id} />
                        )}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/profile"}
                        component={profile}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + "/order"}
                        component={order}
                    />
                </Switch>
            </main>
            <Footer/>
        </div>
    );
};

export default TestLandingPage;