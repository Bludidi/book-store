import React from 'react';
import Book from './book';
import Addbook from './addBook';

const Books = () => (
  <>
    <ul>

      <Book bookData={
          {
            title: 'The Hunger Games',
            category: 'Action',
            author: 'Suzanne Collins',
            percent: '64',
            chapter: 'Chapter 17',
          }
          }
      />

      <Book bookData={
          {
            title: 'Dune',
            category: 'Science Fiction',
            author: 'Frank Herbert',
            percent: '8',
            chapter: 'Chapter 3: "A Lesson Learned',
          }
          }
      />

      <Book bookData={
          {
            title: 'Capital in the Twenty-First Century',
            category: 'Economy',
            author: 'Suzanne Collins',
            percent: '0',
            chapter: 'Introduction',
          }
          }
      />

    </ul>
    <Addbook />
  </>
);

export default Books;
