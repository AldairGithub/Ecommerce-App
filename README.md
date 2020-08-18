# Ecommerce-App

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_A student project meant to improve online shopping experience in this day and age._


<br>

## MVP

_The use will be able to see items listed on a screen, capable of adding them to a cart, the user will be able to order items to their respective address. The user will be able to add their own items to the list of items, as well as update and delete these items._

<br>

### Goals

- _Users will create, enter, and update their account._
- _Users will see a list of items and click on them to see them up close._
- _Users can select items and send them to a cart for purchase._
- _Cart can be used to purchase items._
- _Users can add their own items to the list, as well as update and delete them._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Display items and user information._ |
| React Router Dom | _Links components together._ |
|      Axios       | _Provides single API for database._ |
|   Ruby on Rails  | _Structures database, provides CRUD methods._ |

<br>

### Client (Front End)

#### Wireframes

[Desktop/Mobile/Tablet](https://whimsical.com/8go8vrW5LGxzsRNxPzsYj1)

#### Component Tree

[Component Tree](https://viewer.diagrams.net/?target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=My-Ecommerce-App-Parent%3AChild.drawio#R7ZrRcqIwFIafxst2gIDgZavd2hk7O6PT2d3eZeQUcIAwIQru02%2BoQcFYtTvV0zq9UfKTQPL9JydE7JB%2BUt5zmoWPzIe4Yxl%2B2SGDjmW5nic%2FK2G5EmxXCQGP%2FJVkboRJ9BeUaCh1HvmQtyoKxmIRZW1xytIUpqKlUc5Z0a72wuL2XTMagCZMpjTW1V%2BRL8KV6jnGRh9CFIT1nU1DnUloXVkJeUh9VjQkctchfc6YWB0lZR%2Fiil3NZdXuxxtn1x3jkIpjGhT3QTkbDZbTh%2FHPcTG7Kl8Gz1e26ptY1gPmbJ76ULUxOuSWcRGygKU0HjGWSdGU4gyEWCqr6FwwKYUiidVZ2R2%2B%2FN0s%2FFEXey0MylZpqUqzeZJNVC9Slsqv21XXwNcM2oxYSTmb8ynsGWYdOZQHIPbUI2tfZDwDS0B2UbbjEFMRLdr9oCqygnW9DXx5oPi%2FwwtH86Ia%2BxaUtj07qP2HYwigLUzQ6roLGs%2FVnW6yTIcfxzLJVEiLMBIwyejryAuZ5nbhWwAXUO4HqA9YNSA9lSRUliSqWGxSjq2ksJFt6mofT8i6gFi0jozFLmosEizS6zxtXDvvydQIDrmoDulr5OXOBQ%2BV9CWsgMeS7qGSdr%2BzzkGHTNSFwUJbGDBQo84GCy3Df6HZ0NizYliEtjR8JYve2GScyaLut0WHLULd%2BKpeNja%2BjzRKddsQd76mjbz1JRqjIVAfOC4lo02pq0NydkCyTwWpq0EasUAKD7jBZFptTJbr4AaTq3EaQxDlAjmcnG1MyOHkaZj6HKiAKqIEJLisyGFY7g5Yzqlg9TRYT5n%2FSWB1tQmIDMvUM9VTXs0%2BfFb29iz0dFbds%2F7oq0fWUF4aFdKawJ6A2pXRT5aq6gBvQEKPJLO3Dcm9Pm7hq7dVH49Jf8fSp1ygYiKf7enA0p%2FHb3yfQ57jcvLO9nggi5sX4K%2FnGv8iIHf%2FAA%3D%3D)

#### Component Hierarchy

``` structure

src
|__ components/
      |__ Header.jsx
      |__ Main.jsx
      |__ LogIn.jsx
      |__ Register.jsx
      |__ Home.jsx
      |__ Item.jsx
      |__ Cart.jsx
      |__ Adddress.jsx
      |__ UserItem.jsx
      |__ CreateItem.jsx
      |__ UpdateItem.jsx
|__ services/
      |__ api-helper.js
      |__ auth.js
      |__ users.js
      |__ items.js
      |__ categories.js

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   y   |   y   | _The header will contain the navigation to the business section of the app, the cart, and the user update component._               |
|  Cart  | functional |   y   |   y   | _Holds items the user has chosen to purchase._       |
|   Main    |   class    |   y   |   y   | _The main component will call for user data, as well as pass down items._ |
| Login | functional |   n   |   y   | _Logs the user in._                 |
|    Register    | functional |   n   |   n   | _Adds an user to the database._ |
| Home | functional | y | y | _Displays all the items from the database._ |
| Item | functional | y | y | _Displays one item clicked from the Home component._ |
| Address | functional | y | y | _Allows the user to select a destination for their items._ |
| UserItem | functional | y | y | _User can create, update, delete an item from the database._ |
| CreateItem | functional | y | y | _User creates an item, adds to database._ |
| UpdateItem | functional | y | y | _User can update an item._ |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add log in and register actions | M | 4 hrs | 2 hrs | 2 hrs |
| Create CRUD Actions for Items | H | 6 hrs | 4 hrs | 4 hrs |
| Create cart component | H | 4 hrs | 7 hrs | 7 hrs |
| Add a display all and display one component | H | 2 hrs | 2 hrs |2 hrs |
| Connect backend to frontend | H | 4 hrs | 6 hrs | 6 hrs |
| Add links to components | M | 2 hr | 3 hrs | 3 hrs |
| Add CSS | L | 2 hrs | 12 hrs | 12 hrs |
| TOTAL               |          |     24 hrs      |     36 hrs     |     36 hrs     |

<br>

### Server (Back End)

#### ERD Model

[ERD Model](https://viewer.diagrams.net/?target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=My-Ecommerce-App.drawio#R7VnfU9swDP5r%2BlguSZNAH2kpY8e42439eORMrCbeOXHmONDy10%2BOnaRp2h4woJTbAyX5JMuyJEtfr4PRNF18kiRPrgQFPvAcuhiMzgaeFwYefmpgaYDRODBALBk1kNsC1%2BwBLOhYtGQUio6iEoIrlnfBSGQZRKqDESnFfVdtLnh315zE0AOuI8L76C9GVWLQk8Bp8QtgcVLv7DpWkpJa2QJFQqi4X4FGs8FoKoVQ5ildTIHr2NVxMevOt0gbxyRk6jELrrKz%2BGc08jxOiBpf%2Bnw8c4ZuaJ1Ty%2FrEQDEA9lVIlYhYZITPWnQiRZlR0GYdfGt1vgiRI%2Bgi%2BBuUWtpsklIJhBKVcistFJHqVGcHgdk3kUENnjPOrV3IaKvyAFJ8F1ckWxqJ1dPGzAG011sDY6FClDKCHdGwpYmOxKB26IVN%2BrDsQaSg5BLXSeBEsbuuH8QWYNzotTnCB5ump6Ts2Bi%2BI7y0WwlJQRYbM%2FmF3OKF7ESfcBZn%2BBxhfEAicAdSMSz5UytIGaUm0VCwB3Jb2dMpyQXLVHWeYDIIzprgawOw2HQf7eL2FqymZUdF9oNrzQ%2BdI8cZ26q1PcW2mEeH3xr%2Fqk%2BzoiLm8wLTvp6fxofnpyzoZWzghVzpiHYyFv4pdTeYpFiADDNxilInX%2BBnFWrH4EOlr5mW%2BSsyTIAa2tRqmc1uR0whEhJjJKyOvsaSM7x%2Bzdb4FNv%2FlYO3NfCjqErMoBiF23VNxPJ1LJHryLMOzGGujPBEC9d9xdh7zhD%2Frr9eNn43O5foeEZSsDo%2FiZwmRPb1ICWMb1badLTXOAihFK9csV8nclIU99hRbiiLoVD7dSaSQBTQG1L78Z2l6BRJ87f2pMzpO%2FGkX7rv1YO1ebQ%2BZ6o%2B1owjs%2BdEoNacV2N%2FXg35yVxkylIJ17Pv5yRlXLf%2FC%2BB3oK12Z9zWudSjBVsnjVuPLDtl3Jrz3bc80A0tlqxyQN95rdF%2F8j7YWsPEdnI2Q%2Btasua8LFkLH0nWXP8f2Vq1FI9FlisKlgr12YStnpHfrR7%2FeI2dP00fH4wHL8pL3HGPmCTko%2FDIk5232zkKHDfohHxY7%2FlcIllTVD848sabTb8%2B1ww%2FANf8rCA9SK65nWe%2BGXuTLNqzCyyNb0q5ZyqtWf9Nk6zzb5dv7cDhMtcPxdp8Z%2F%2Bszf8ALXmKJRQLyeAg%2B3JkvF9u7kmtHsPB879rHOj33YPuW3743L7lPr1v4Wv7u4Mhnu2PN6PZXw%3D%3D)

<br>

***

## Post-MVP

- User can filter items based on alphabet, price, or category.
- User can hold more information credit card or addresses for future purchases.
- Users can click on add to cart without going to page.
- Users can add to the profiles with images and a series of preselected images will be available to the user.

***

## Code Showcase




## Code Issues & Resolutions
