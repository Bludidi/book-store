import React from 'react';

const Addbook = () => (
  <>
    <h3>ADD NEW BOOK</h3>
    <form>
      <input type="text" placeholder="Book title..." />
      <input type="text" placeholder="Author name..." />
      <button type="submit">Add book</button>
    </form>
  </>
);

export default Addbook;
