import React from 'react';

const Book = ({ title, author, coverID }) => {
  const coverUrl = `https://covers.openlibrary.org/b/id/${coverID}-M.jpg`; // Medium-sized cover image

  return (
    <div className="book-item">
      <img src={coverUrl} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Book;
