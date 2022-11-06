import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Login from "./components/Login";
import Update from "./components/Update";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "update/:id",
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
    element: <Update />,
  },
]);

function App() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const url = `http://localhost:5000/products?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setCount(data.count);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);
  console.log(page);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* {products.map((product) => (
        <>
          <h2>{product.name}</h2>
          <img src={product.img} alt="" />
        </>
      ))}
      <div className="flex justify-center space-x-1 dark:text-gray-100 my-20">
        <button
          title="previous"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        {[...Array(pages).keys()].map((number) => (
          <button
            onClick={() => setPage(number)}
            key={number}
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
            title="Page 2"
          >
            {number + 1}
          </button>
        ))}
        <button
          title="next"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div> */}
    </div>
  );
}

export default App;
