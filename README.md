# E-Commerce Product List Application

### Say hello to the future.

This is a simple and efficient e-commerce product list application built with **React**, **TypeScript**, and **Redux Toolkit**. The application enables users to browse products, search by keyword, and manage their shopping cart with state persistence. It incorporates infinite scrolling for a seamless user experience and is fully responsive to adapt to various screen sizes.

## Project Overview

The application showcases a product listing page where users can:
- View a catalog of products fetched from a mock API.
- Load more products dynamically as they scroll (infinite scrolling).
- Search for specific products using a search bar.
- Add products to a shopping cart with a summary showing total items and price.
- Persist cart data across page reloads, ensuring that items remain in the cart until manually removed.

## Tech Stack
- **React**: For building user interfaces with functional components and hooks.
- **TypeScript**: For ensuring type safety throughout the codebase.
- **Redux Toolkit**: To manage global state and facilitate the cart functionality.
- **RTK Query**: For fetching and caching API data.
- **Redux Persist**: To store the cart data in localStorage for persistence.
- **React Infinite Scroll Component**: To handle the infinite scrolling feature.
- **React Loader Spinner**, **React Loading Skeleton**: For visually appealing loading states.
- **SweetAlert2**: To provide smooth and intuitive user alerts.

## Key Architectural Choices
- **Component-based design**: The UI is broken down into small, reusable components, ensuring maintainability and scalability.
- **State management with Redux Toolkit**: Redux Toolkit is used to handle the application’s state efficiently, particularly for managing cart items and API calls.
- **RTK Query for API interactions**: The application leverages RTK Query for easy and optimized fetching of product data from the mock API.
- **Cart persistence with Redux Persist**: Cart data is stored in localStorage, allowing users to maintain their cart state even after refreshing the page.
- **Mobile-first, responsive design**: The application is designed to be responsive, ensuring that it works well on both mobile and desktop devices.
- **Type safety with TypeScript**: TypeScript is used throughout the project to enforce robust type-checking and reduce runtime errors.

## Setup Instructions

### Prerequisites
- Node.js (version >= 14.x)
- npm (version >= 6.x) or yarn (version >= 1.x)

### Steps to Run Locally

```1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-pixfar.git```

```2.Navigate to the project directory:

cd task-pixfar```

```3.Install the required dependencies:

npm install```

```4.Start the development server:

npm start```


## Environment Setup

This application does not require any additional environment variables. It uses the FakeStore API as the product data source.

## Key Features

- **Product Listing with Infinite Scroll**: Products are fetched and displayed in batches, loading more as the user scrolls.
- **Search Functionality**: A search bar enables users to filter products dynamically based on their search query.
- **Cart Management**: Users can add items to the cart, with a summary of total items and price displayed at the top.
- **Cart Persistence**: The cart state is persisted in `localStorage`, ensuring that the cart remains intact after page reloads.
- **Responsive Design**: The application is fully responsive, offering an optimal experience on both mobile and desktop devices.

