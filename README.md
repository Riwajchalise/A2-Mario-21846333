# Full Stack Application - Bonus Task
# Repo Link: https://github.com/Riwajchalise/A2-Riwaj-21846333
### Developer: Riwaj Chalise  
### Student ID: 21846333


## Overview

This project is a full-stack web application developed as part of the Assignment 2 bonus task. The application features a back-end API built with **Node.js** and **Sequelize ORM**, as well as a front-end interface built with **React**. It manages three tables: **Items**, **Customers**, and **Orders**, and supports full CRUD operations (Create, Read, Update, Delete) across all entities. Data persistence is ensured using **PostgreSQL**, and the front-end allows for real-time interaction with the data.

## Features

### 1. Database Design
The application contains three tables:
- **items**: Stores details about the items, with attributes such as `item_id`, `item_name`, `price`, and `quantity`.
- **customers**: Contains customer information, including `customer_id`, `customer_name`, and `email`.
- **orders**: Represents purchase orders, associating `item_id` with `customer_id` along with an `order_date`.

### 2. API Implementation
The following 12 APIs have been implemented to perform CRUD operations on the three tables:

- **Items API**:  
  - `POST /items`: Create a new item.  
  - `GET /items`: Retrieve all items.  
  - `GET /items/:item_id`: Retrieve an item by ID.  
  - `PUT /items/:item_id`: Update an item by ID.  
  - `DELETE /items/:item_id`: Delete an item by ID.

- **Customers API**:  
  - `POST /customers`: Create a new customer.  
  - `GET /customers`: Retrieve all customers.  
  - `GET /customers/:customer_id`: Retrieve a customer by ID.  
  - `PUT /customers/:customer_id`: Update a customer by ID.  
  - `DELETE /customers/:customer_id`: Delete a customer by ID.

- **Orders API**:  
  - `POST /orders`: Create a new order.  
  - `GET /orders`: Retrieve all orders.  
  - `GET /orders/:order_id`: Retrieve an order by ID.

### 3. Data Persistence
The application uses **Sequelize ORM** to interact with a **PostgreSQL** database. This ensures data integrity and persistence across all operations, including creation, update, and deletion of records. Relationships between tables (such as customer and order data) are properly managed using foreign keys to ensure consistency.
<img width="468" alt="image" src="https://github.com/user-attachments/assets/7a0c86c7-7805-451b-967a-3c97d85a5a98">


### 4. Front-End Implementation
A responsive front-end interface was developed using **React**. The interface allows users to:
- **View and manage customers**: Add, update, and delete customer records.
- **Manage phone records**: Create, update, and delete associated phone numbers for each customer.
- **View order and item data**: Create and view orders in relation to customers and items.
- **View statistics**: A statistics component provides an overview of the total number of customers, items, and orders, along with the newest and oldest records.
<img width="468" alt="image" src="https://github.com/user-attachments/assets/57351e43-713f-4c27-a344-47d7d912ed89">

<img width="468" alt="image" src="https://github.com/user-attachments/assets/40956d13-8e6b-4fee-9220-f82a779acd6b">
<img width="468" alt="image" src="https://github.com/user-attachments/assets/9c8f7e27-c2ac-48fc-b538-c8f2148587df">
<img width="468" alt="image" src="https://github.com/user-attachments/assets/44b9e85a-d9bc-4ad4-a9d0-19ab230a987e">
<img width="468" alt="image" src="https://github.com/user-attachments/assets/3fb4aa56-f4f4-44ec-80bf-77ef49193ffd">
<img width="468" alt="image" src="https://github.com/user-attachments/assets/88af95fc-fd0a-4b7f-a1e7-4a4bd956a26b">
<img width="468" alt="image" src="https://github.com/user-attachments/assets/89032c60-4304-4092-b04b-02f0a3e03dd6">

### 5. How to Run the Application
1. Clone the repository.
docker-compose up



### 6. Conclusion
This application demonstrates the implementation of a full-stack solution, combining database design, API development, and front-end interaction. It offers robust data management capabilities, ensuring data integrity and a user-friendly interface for managing records.
