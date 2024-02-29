# MovieBookingApp Backend

Welcome to the MovieBookingApp Backend project! This project serves as the backend for a movie booking application, providing APIs to handle the selection of movies, choosing the number of seats, and specifying the preferred timing.

## Table of Contents

- Endpoints
  - POST /booking
  - GET /booking
- API Reference
- Usage/Examples
- Technologies Used
- Installation
- License

## API Reference

#### Get latest movie details

```http
  GET /api/v1/booking
```

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `none`    | `object` | **Return**. Latest movie object |

#### Get item

```http
  POST /api/v1/booking
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `movie`   | `string` | **Required**. Movie name                       |
| `slot`    | `string` | **Required**. time slot                        |
| `seats`   | `object` | **Required**. number of seats in different row |

## Usage/Examples

```javascript
/* Post Request and for get detail no need to pass any parameter
simpliy hit url for latest booking details */

{
  "movie": "Movie Name",
  "seats": {A1:5},
  "slot": "10:00Am"
}

Response
Status Code: 200 OK
Body:

{
  "success": true,
  "message": "Booking successful!",

}

```

## Technologies Used

- Node Js
- Express Js
- Mongo DB

## Installation

To set up the project locally, follow these steps:

1, Clone the repository: git clone https://github.com/itmejayesh/B_MovieBookingAPP-MERN.git.

2, Navigate to the project directory: cd MovieBookingApp-Backend.

3, Install dependencies: npm install

```bash
  git clone <url>
  npm install
```
