import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ bookData }) => (
  <>
    <div>
      <h2>{bookData.title}</h2>
      <q>{bookData.author}</q>
      <div>
        <button type="submit">Remove</button>
        <br />
        <br />
        <br />
      </div>
    </div>
  </>
);

Book.propTypes = {
  bookData: PropTypes.shape.isRequired,
};

export default Book;
