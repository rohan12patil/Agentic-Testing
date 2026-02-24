# SauceDemo Test Plan

## Application Overview

This test plan covers the functional testing of the SauceDemo e-commerce website, including user authentication, product browsing, shopping cart management, and checkout processes. The site simulates an online store where users can log in, view products, add items to cart, and complete purchases. Different user accounts are available for testing various scenarios, including standard users and those with specific issues.

## Test Scenarios

### 1. User Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful Login with Standard User

**File:** `tests/authentication/standard-login.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com
    - expect: Login page displays username and password fields
    - expect: Accepted usernames and password are shown
  2. Enter invalid username 'invalid_user' and password 'secret_sauce', click Login
    - expect: Page remains on login with no error
  3. Verify error handling
    - expect: Error message 'Epic sadface: Username and password do not match any user in this service' appears
  4. Enter valid username 'standard_user' and password 'secret_sauce', click Login
    - expect: Page remains on login with no error
  5. Verify successful login
    - expect: Redirected to inventory page with products displayed

#### 1.2. Login Attempt with Locked Out User

**File:** `tests/authentication/locked-user.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com
    - expect: Login page displays
  2. Enter username 'locked_out_user' and password 'secret_sauce', click Login
    - expect: Page remains on login
  3. Verify locked account handling
    - expect: Error message 'Epic sadface: Sorry, this user has been locked out.' appears

#### 1.3. Login with Empty Credentials

**File:** `tests/authentication/empty-credentials.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com
    - expect: Login page displays
  2. Leave username and password empty, click Login
    - expect: Page remains on login
  3. Verify required field validation
    - expect: Error message 'Epic sadface: Username is required' appears

#### 1.4. User Logout

**File:** `tests/authentication/logout.spec.ts`

**Steps:**
  1. Login with standard_user
    - expect: Logged in as standard_user
  2. Click Open Menu button
    - expect: Side menu opens
  3. Click Logout link
    - expect: Redirected back to login page
  4. Verify logout functionality
    - expect: Login page displays

### 2. Product Browsing

**Seed:** `tests/seed.spec.ts`

#### 2.1. View Product Inventory

**File:** `tests/products/view-products.spec.ts`

**Steps:**
  1. Login with standard_user
    - expect: Logged in to inventory page
  2. Verify all products are visible
    - expect: 6 products displayed with images, names, descriptions, prices
  3. Click on a product name or image
    - expect: Product details page opens
  4. Verify product information
    - expect: Product details shown correctly

#### 2.2. Sort Products

**File:** `tests/products/sort-products.spec.ts`

**Steps:**
  1. Login with standard_user
    - expect: Logged in to inventory page
  2. Select 'Name (A to Z)' from sort dropdown
    - expect: Products sorted alphabetically A-Z
  3. Select 'Name (Z to A)' from sort dropdown
    - expect: Products sorted alphabetically Z-A
  4. Select 'Price (low to high)' from sort dropdown
    - expect: Products sorted by price low to high
  5. Select 'Price (high to low)' from sort dropdown
    - expect: Products sorted by price high to low

#### 2.3. Product Display Issues with Problem User

**File:** `tests/products/problem-user.spec.ts`

**Steps:**
  1. Login with problem_user
    - expect: Logged in to inventory page
  2. Check for visual issues in product display
    - expect: Some product images may not load or display incorrectly
  3. Attempt to add products to cart and verify behavior
    - expect: Add to cart functionality may behave unexpectedly

### 3. Shopping Cart Management

**Seed:** `tests/seed.spec.ts`

#### 3.1. Add Products to Cart

**File:** `tests/cart/add-to-cart.spec.ts`

**Steps:**
  1. Login with standard_user
    - expect: Logged in to inventory page
  2. Click 'Add to cart' on first product
    - expect: Cart badge shows '1'
  3. Verify button state change
    - expect: Button changes to 'Remove'
  4. Add another product to cart
    - expect: Cart badge updates to '2'

#### 3.2. Remove Products from Cart

**File:** `tests/cart/remove-from-cart.spec.ts`

**Steps:**
  1. Add a product to cart
    - expect: Products added to cart
  2. Click 'Remove' on the product
    - expect: Button changes back to 'Add to cart'
  3. Verify cart badge update
    - expect: Cart badge disappears or decrements

#### 3.3. View Cart Contents

**File:** `tests/cart/view-cart.spec.ts`

**Steps:**
  1. Add products to cart
    - expect: Products in cart
  2. Navigate to cart page
    - expect: Cart page displays with items, quantities, and remove options
  3. Click 'Continue Shopping'
    - expect: Back to inventory page
  4. Return to cart and verify items
    - expect: Cart contents persist

#### 3.4. Reset Application State

**File:** `tests/cart/reset-app-state.spec.ts`

**Steps:**
  1. Add products to cart
    - expect: Products in cart
  2. Click Open Menu
    - expect: Side menu opens
  3. Click 'Reset App State'
    - expect: Cart is empty, app state reset
  4. Verify cart reset
    - expect: Cart badge gone

### 4. Checkout Process

**Seed:** `tests/seed.spec.ts`

#### 4.1. Complete Checkout with Items

**File:** `tests/checkout/full-checkout.spec.ts`

**Steps:**
  1. Add products to cart
    - expect: Products in cart
  2. Navigate to cart and click 'Checkout'
    - expect: Checkout step one page displays
  3. Verify checkout information form
    - expect: Form fields for first name, last name, zip code
  4. Fill first name and zip, leave last name empty, click Continue
    - expect: Error for missing last name
  5. Fill all required fields and click Continue
    - expect: Checkout overview page displays with item details, payment, shipping, totals
  6. Click 'Finish'
    - expect: Checkout complete page with success message
  7. Click 'Back Home'
    - expect: Back to inventory page

#### 4.2. Attempt Checkout with Empty Cart

**File:** `tests/checkout/empty-cart-checkout.spec.ts`

**Steps:**
  1. Ensure no items in cart
    - expect: Cart is empty
  2. Attempt to access checkout
    - expect: Cannot proceed to checkout or checkout button disabled
  3. Verify handling of empty cart
    - expect: Appropriate message or behavior

#### 4.3. Cancel Checkout

**File:** `tests/checkout/cancel-checkout.spec.ts`

**Steps:**
  1. Start checkout with items
    - expect: In checkout process
  2. Click 'Cancel' at any checkout step
    - expect: Back to cart page
  3. Verify cart state
    - expect: Cart contents preserved

#### 4.4. Checkout with Visual User

**File:** `tests/checkout/visual-user.spec.ts`

**Steps:**
  1. Login with visual_user
    - expect: Logged in as visual_user
  2. Proceed through checkout and note any visual discrepancies
    - expect: Visual differences in checkout UI
  3. Complete checkout successfully
    - expect: Functionality remains intact despite visual changes
