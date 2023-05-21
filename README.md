# Booking App

This project is designed search flight between routes and select the flight ticket based on the date

## Installation

```bash
npm install
npm run dev
```

# Technologies Used

This project was built using React along with vite, Tailwind.
For api, mock the api data and store into data folder
for storing data , used local storage insted of database

# Features:

`*` user can book flight by date and once try to book the same seat in same flight at same date, it will show " seat already booked".

`*` You can see the today's num of total booked seat, num of empty seats and also filter it by flight

`1` Using rudex for global state management.

`2` Used react with tailwind for lucrative UI with vite.

`3` React router dom for routing.

`4` Used Shimmer effect in preloading stage.

`5` Used local storage for storing data.

`8` Used necessary hooks such as useEffect, useState and also "custom hooks" for performing necessary tasks.

# routes:

"/" -> home page

"/booking" -> booking page

"/invoice" -> invoice page

"/login" -> login page

"/dashboard" -> dashboard page

#live link

https://flight-booking-18.netlify.app/
