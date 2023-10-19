import { IUser } from "./user.interface";

export const USER_DATA: Array<IUser> = [{
  firstName: "bill",
  lastName: "gates",
  income: 50000,
  isWorking: true,
  company: "Microsoft",
  dob: new Date("Dec 21, 1964"),
  img: "./assets/bill.jpg",
  votes: 120,
  comments: [
    { stars: 5, body: "I like it ♥", author: "test@test.com" },
    { stars: 4, body: "Great job 👍", author: "john@test.com" },
    { stars: 3, body: "Not Bad", author: "jenny@test.com" },
  ]
}, {
  firstName: "steve",
  lastName: "jobs",
  income: 0,
  isWorking: false,
  company: "Apple",
  dob: new Date("Jan 2, 1968"),
  img: "./assets/steve.jpg",
  votes: 180,
  comments: [
    { stars: 5, body: "Luv it 👍", author: "joey@test.com" },
  ]
}, {
  firstName: "tim b.",
  lastName: "lee",
  income: 30000,
  isWorking: true,
  company: "World Wide Web",
  dob: new Date("Dec 30, 1961"),
  img: "./assets/tim.jpg",
  votes: 110,
  comments: []
},
]
