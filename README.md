# E-Commerce Website

## Overview

This GitHub repository contains the code for a simple e-commerce website that focuses on cart management and implements the following features:

- Cart management using React's `useContext` API.
- A cart page for reviewing and updating cart items.
- A checkout process that includes Stripe payments.

## Getting Started

Follow these steps to get the e-commerce website up and running on your local machine:

1. **Clone the Repository**: Use the following command to clone this repository to your local machine:

   ```shell
   git clone https://github.com/aryanMore07/totalitycorp-frontend-challenge.git
   ```

2. **Navigate to the Project Directory**: Change your current directory to the project folder:

   ```shell
   cd totalitycorp-frontend-challenge
   ```

3. **Install Dependencies**: Install the project dependencies using npm or yarn:

   ```shell
   npm install
   # OR
   yarn install
   ```

4. **Start the Development Server**: Run the following command to start the development server:

   ```shell
   npm start
   # OR
   yarn start
   ```

5. **Access the Website**: Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the e-commerce website.

## Usage

### Cart Management

- Browse the website and add products to your cart by clicking the "Add to Cart" button on product pages.
- View and manage your cart by clicking the cart icon or navigating to the cart page.
- On the cart page, you can:
  - Remove items from the cart.

### Checkout and Stripe Payments

- When you're ready to complete your purchase, click the "Pay with card" button on the cart page.
- Enter your shipping information and payment details. For testing purposes, you can use the following information:
  - Card Number: 4242 4242 4242 4242
  - Expiry Date: Any future date
  - CVV: Any 3-digit number
  - Email: Any valid email address
- Click the "Place Order" button to process the payment using Stripe.

## Technology Stack

- React: Front-end library for building user interfaces.
- React Context API: Used for cart state management.
- Stripe: For processing payments in a secure and convenient manner.
- CSS: Styling of components.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the React and Stripe communities for their excellent documentation and resources that made this project possible.