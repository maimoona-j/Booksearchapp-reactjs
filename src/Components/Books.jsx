import React from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import book1 from "../Assets/book1.jpg";
import book2 from "../Assets/book2.jpg";
import book3 from "../Assets/book3.jpg";
import book4 from "../Assets/book4.jpg";
import book5 from "../Assets/book5.jpg";
import book6 from "../Assets/book6.jpg";
import book7 from "../Assets/book7.jpg";
import book8 from "../Assets/book8.jpg";
import book9 from "../Assets/book9.jpg";

export default function Books({ searchTerm }) {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const [bookData, setBookData] = useState([
    {
      img: book1,
      author: "Kai Bird  ",
      title: "American Prometheus: The Inspiration ",
      id: 1,
    },
    {
      img: book2,
      author: "Heather Cox Richardson  ",
      title: "Democracy Awakening: Notes on the State  ",
      id: 2,
    },
    {
      img: book3,
      author: "James Clear  ",
      title: "Atomic Habits: An Easy & Proven Way  ",
      id: 3,
    },
    {
      img: book4,
      author: "Bonnie Garmus   ",
      title: "Lessons in Chemistry: A Novel",
      id: 4,
    },
    {
      img: book5,
      author: "Peter Attia MD  ",
      title: "Outlive: The Science and Art  ",
      id: 5,
    },
    {
      img: book6,
      author: "Bessel van der Kolk M.D.   ",
      title: "The Body Keeps the Score ",
      id: 6,
    },
    {
      img: book7,
      author: " Robert T. Kiyosaki  ",
      title: "Rich Dad Poor Dad",
      id: 7,
    },
    {
      img: book8,
      author: " Rebecca Yarros  ",
      title: "Fourth Wing (The Empyrean, 1)",
      id: 8,
    },
    {
      img: book9,
      author: " Sarah J. Maas   ",
      title: "A Court of Thorns and Roses",
      id: 9,
    },
  ]);

  const filterData = bookData.filter((item) => {
    const lowerSearchTerm = searchTerm.toLowerCase().trim();
    const lowerTitle = item.title.toLowerCase();
    const lowerAuthor = item.author.toLowerCase();

    return (
      lowerTitle.includes(lowerSearchTerm) ||
      lowerAuthor.includes(lowerSearchTerm)
    );
  });

  const filteredBooks = searchTerm.trim() === "" ? bookData : filterData;

  return (
    <div>
      {filteredBooks.length === 0 && searchTerm.trim() !== "" && (
        <p className="text-red-500 font-bold lg:h-96 h-[500px] mt-2">
          Book not found
        </p>
      )}
      <div className="grid grid-cols-1 lg:w-[1000px] w-[300px] lg:ml-0 ml-3 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {filteredBooks.map((item) => (
          <div
            key={item.id}
            className="border border-teal-800 rounded p-3 shadow-md "
            data-aos="fade-up"
          >
            <img
              src={item.img}
              alt="book"
              className="w-full h-56 object-cover rounded-t"
            />
            <div className="p-2">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-blue-400">{item.author}</p>
              <button className="bg-teal-700 hover:bg-gray-500 hover:text-black text-white py-1 w-56 ml-6 px-4 mt-2 rounded">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
