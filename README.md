        Name                                   Id
1.	 Abdulaziz Nejib-----------------------UGR/22802/13
2.	 Abubeker Murad---------------------UGR/22685/13
3.	 Arefat Akream-------------------------UGR/22976/13
4.	Hamza Musema-----------------------UGR/22699/13
5.	Ashenafi Mulugeta --------------------UGR/22703/13


Gebeya E-commerce webapp

This is a fully functional e-commerce web application developed to provide a platform for users to browse, search, and purchase products. The application includes features such as user authentication, product management, shopping cart, order management.


Features
-User registration and login
-Product listing and details view
-Product search and filtering
-Shopping cart management
-Order placement and checkout
# React App with PHP Backend and Database

Welcome to the React App with PHP Backend and Database! This README file will guide you through the steps to set up and run the project.

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Installation](#installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Contact](#contact)

## Overview

This project consists of a React frontend, a PHP backend, and a MySQL database. 

## Requirements

Before you begin, ensure you have the following installed on your machine:

- Node.js 
- npm 
- PHP 
- MySQL 
- Apache or Nginx web server
- Composer (for dependency management)

## Installation

### Frontend Setup

1. **Clone the repository**:
    ```sh
    git clone [repository-url]
    cd [repository-folder]
    ```

2. **Navigate to the frontend directory**:
    ```sh
    cd frontend
    ```

3. **Install the dependencies**:
    ```sh
    npm install
    ```

4. **Build the project** (optional for development):
    ```sh
    npm run build
    ```

### Backend Setup

1. **Navigate to the backend directory**:
    ```sh
    cd ../backend
    ```

2. **Install the dependencies using Composer**:
    ```sh
    composer install
    ```

3. **Move the backend files to the hotdocs folder**:
    Copy all the backend files into your server's `hotdocs` folder. Ensure the directory structure remains intact.

    ```sh
    cp -r * /path/to/hotdocs/
    ```

## Database Setup

### Important Warning
**Ensure you import the database correctly to avoid any issues with the application.**

1. **Create a new database** in your MySQL server:
    ```sql
    CREATE DATABASE [database-name];
    ```

2. **Import the database schema** and data:
    ```sh
    mysql -u [username] -p [database-name] < /path/to/hotdocs/database.sql
    ```
    Replace `[username]` with your MySQL username and `[database-name]` with the name of your database.

3. **Update the database configuration** in the backend:
    Edit the `config.php` (or similar configuration file) to match your database credentials:
    ```php
    define('DB_HOST', 'localhost');
    define('DB_USER', '[username]');
    define('DB_PASS', '[password]');
    define('DB_NAME', '[database-name]');
    ```

## Running the Application

### Frontend

1. **Start the frontend development server**:
    ```sh
    cd frontend
    npm start
    ```

2. Open your web browser and navigate to `http://localhost:3000`.

### Backend

1. **Ensure your web server (Apache or Nginx) is running** and configured to serve files from the `hotdocs` directory.

2. **Access the backend** via `http://localhost/hotdocs/` (or the configured URL).

## Contact

If you have any questions or need further assistance, feel free to reach out:

- **Email:** hamzamusema26@gmail.com
- **LinkedIn:** (https://www.linkedin.com/in/hamza-musema-bb2b34230/)

