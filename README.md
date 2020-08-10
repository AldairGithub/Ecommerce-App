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

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

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

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

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

[Component Tree](shorturl.at/owxQ3)

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

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

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

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add log in and register actions | M | 4 hrs | TBD | TBD |
| Create CRUD Actions for Items | H | 6 hrs | TBD | TBD |
| Create cart component | H | 4 hrs | TBD | TBD |
| Add a display all and display one component | H | 2 hrs | TBD | TBD |
| Connect backend to frontend | H | 4 hrs | TBD | TBD |
| Add links to components | M | 2 hr | TBD | TBD |
| Add CSS | L | 2 hrs | TBD | TBD |
| TOTAL               |          |     24 hrs      |     TBD     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[ERD Model](shorturl.at/avwMR)

<br>

***

## Post-MVP

- _User can filter items based on alphabet, price, or category.
- _User can hold more information credit card or addresses for future purchases.
- _Users can click on add to cart without going to page.
- _Users can add to the profiles with images and a series of preselected images will be available to the user.

***

## Code Showcase


## Code Issues & Resolutions
