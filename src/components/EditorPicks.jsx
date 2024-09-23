import React from 'react';
import Book from './Book';

const EditorPicks = () => (
  <section className="editor-picks">
    <h2>Editor's Picks</h2>
    <div className="books-grid">
      <Book title="The Great Gatsby" author="F. Scott Fitzgerald" coverID="7434" />
      <Book title="To Kill a Mockingbird" author="Harper Lee" coverID="103831" />
      <Book title="1984" author="George Orwell" coverID="45140" />
      <Book title="Pride and Prejudice" author="Jane Austen" coverID="8582" />
      <Book title="The Catcher in the Rye" author="J.D. Salinger" coverID="504996" />
      <Book title="The Hobbit" author="J.R.R. Tolkien" coverID="4303" />
      <Book title="Moby-Dick" author="Herman Melville" coverID="12239" />
      <Book title="War and Peace" author="Leo Tolstoy" coverID="12" />
      <Book title="Brave New World" author="Aldous Huxley" coverID="19" />
      <Book title="The Picture of Dorian Gray" author="Oscar Wilde" coverID="5696" />
      <Book title="Fahrenheit 451" author="Ray Bradbury" coverID="39419" />  {/* New book */}
      <Book title="The Grapes of Wrath" author="John Steinbeck" coverID="37059" />  {/* New book */}
      <Book title="The Alchemist" author="Paulo Coelho" coverID="16164" />  {/* New book */}
      <Book title="The Road" author="Cormac McCarthy" coverID="26704" />  {/* New book */}
    </div>
  </section>
);

export default EditorPicks;
