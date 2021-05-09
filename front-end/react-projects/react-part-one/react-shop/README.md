# React Shop

Live: https://react-shop-gold.vercel.app/

## Vue Shop
A version of react shop but powered by vuejs (in progress)

Repo: https://git.io/JYfdQ

## Stack

- React: hooks, reducer pattern, context
- Styled components
- Axios
- Auth0
- Vercel

## Research

User Stories

![diagram 1](https://raw.githubusercontent.com/nguyentuan1696/tiny-projects/main/react-projects/react-shop/diagram/linh-tinh-Page-13.png)

Featured

![diagram 1](https://raw.githubusercontent.com/nguyentuan1696/tiny-projects/main/react-projects/react-shop/diagram/linh-tinh-Page-14.png)


## Structure
In ```src/``` folder
```
├── actions.js
├── App.js
├── assets
│   ├── hero-bcg-2.jpeg
│   ├── hero-bcg.jpeg
│   └── logo.svg
├── components
│   ├── AddToCart.js
│   ├── AmountButtons.js
│   ├── CarContent.js
│   ├── CartButtons.js
│   ├── CartColumns.js
│   ├── CartItem.js
│   ├── CartTotals.js
│   ├── Contact.js
│   ├── Error.js
│   ├── FeaturedProducts.js
│   ├── Filters.js
│   ├── Footer.js
│   ├── GridView.js
│   ├── Hero.js
│   ├── index.js
│   ├── ListView.js
│   ├── Loading.js
│   ├── Navbar.js
│   ├── PageHero.js
│   ├── ProductImages.js
│   ├── Product.js
│   ├── ProductList.js
│   ├── Services.js
│   ├── Sidebar.js
│   ├── Sort.js
│   ├── Stars.js
│   └── StripeCheckout.js
├── context
│   ├── cart_context.js
│   ├── filter_context.js
│   ├── products_context.js
│   └── user_context.js
├── index.css
├── index.js
├── pages
│   ├── AboutPage.js
│   ├── AuthWrapper.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── ErrorPage.js
│   ├── HomePage.js
│   ├── index.js
│   ├── PrivateRoute.js
│   ├── ProductsPage.js
│   └── SingleProductPage.js
├── reducers
│   ├── cart_reducer.js
│   ├── filter_reducer.js
│   └── products_reducer.js
└── utils
    ├── constants.js
    └── helpers.js

6 directories, 53 files

```

## Docs
React hook context api, replace redux

Get more: 
- https://www.sitepoint.com/replace-redux-react-hooks-context-api/

![diagram 5](https://raw.githubusercontent.com/nguyentuan1696/tiny-projects/main/react-projects/react-shop/diagram/linh-tinh-Page-15.png)

## Note

Using this react version to fix Hot Reloading

```
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-scripts": "3.4.3",
```

Tricky in App.js line 35
Fix Invalid hook call 
```
<Route path='/products/:id' children={<SingleProduct />}></Route>

```

Logic display stars reviews

```
// @param: stars is number of star review
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    // index 0 - 4
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
```
