# Google-Books-Search

## Introduction
This is a React application. From the Search page Users can search for any book, save it or Users can go view more about the book when they click on "view". From the Saved page users can view all their saved books and delete them if they want.

I used: React, Node, Express and MongoDB

## Code Samples

const bookSchema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    authors: { type: [String], required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    googleId: { type: String, required: true, unique: true }
});


## Installation

npm i and then npm start

Here are screenshots of my app:
https://imagizer.imageshack.com/img924/8792/i0mopc.png
https://imagizer.imageshack.com/img922/3200/y93LbJ.png
https://imagizer.imageshack.com/img923/2568/Udrabe.png
https://imagizer.imageshack.com/img923/5033/sWXG7q.png

Here is the GitHub link: https://github.com/cnperkins/Google-Books-Search

Here is the deployed link: https://floating-ocean-44749.herokuapp.com/

Here is my portfolio link: https://cnperkins.github.io/React-Portfolio/


Chloe Perkins




