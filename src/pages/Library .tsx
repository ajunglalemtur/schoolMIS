// Library Management Page with Add, Edit & Delete Functionality
import React, { useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
}

const Library: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "React for Beginners", author: "John Doe" },
    { id: 2, title: "Advanced TypeScript", author: "Jane Smith" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });
  const [editBook, setEditBook] = useState<Book | null>(null);

  const addBook = () => {
    if (newBook.title && newBook.author) {
      setBooks((prev) => [
        ...prev,
        { id: Date.now(), title: newBook.title, author: newBook.author },
      ]);
      setNewBook({ title: "", author: "" });
    }
  };

  const deleteBook = (id: number) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const updateBook = () => {
    if (editBook) {
      setBooks((prev) => prev.map((book) => (book.id === editBook.id ? editBook : book)));
      setEditBook(null);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Library Management</h2>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="border p-2 rounded w-1/3"
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="border p-2 rounded w-1/3"
        />
        <button
          onClick={addBook}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Book
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Author</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="text-center border">
              <td className="p-2 border">{book.title}</td>
              <td className="p-2 border">{book.author}</td>
              <td className="p-2 border flex gap-2 justify-center">
                <button
                  onClick={() => setEditBook(book)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editBook && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-bold">Edit Book</h3>
          <input
            type="text"
            value={editBook.title}
            onChange={(e) => setEditBook({ ...editBook, title: e.target.value })}
            className="border p-2 rounded w-1/3 mr-2"
          />
          <input
            type="text"
            value={editBook.author}
            onChange={(e) => setEditBook({ ...editBook, author: e.target.value })}
            className="border p-2 rounded w-1/3 mr-2"
          />
          <button
            onClick={updateBook}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update Book
          </button>
        </div>
      )}
    </div>
  );
};

export default Library;