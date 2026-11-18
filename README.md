# Movie Gold – Frontend

Movie Gold is a movie discovery web application developed using React.js. It provides an interactive interface for browsing movies, watching trailers, and reading and submitting movie reviews.

The frontend communicates with a Spring Boot REST API using Axios to retrieve movie information and submit reviews.

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router DOM
- Axios
- React Bootstrap
- Material UI
- Font Awesome
- React Player

## Features

- Browse and explore movies.
- Display movie posters and background images.
- Watch movie trailers.
- Navigate between application pages.
- Read existing movie reviews.
- Submit new movie reviews.
- Integrate with Spring Boot REST APIs.

## Project Structure

```text
movie-gold-frontend/
├── public/
├── src/
│   ├── api/
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── home/
│   │   ├── reviews/
│   │   ├── reviewForm/
│   │   ├── trailer/
│   │   └── notFound/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Installation and Setup

1. Clone the repository.
2. Install dependencies:

   `npm install`

3. Configure the backend API URL in the Axios configuration file.
4. Start the development server:

   `npm start`

## Backend

The application communicates with a Java Spring Boot backend and MongoDB database.

## Project Type

Frontend Web Application

## Author

Sandeep Kumar
