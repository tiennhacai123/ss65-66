// // Bài 2
// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import ListUser from "./components/ListUser";
// import { setUsers } from "./redux/userSlice";
// import { AppDispatch } from "./redux/store";

// const App: React.FC = () => {
//   const dispatch: AppDispatch = useDispatch();

//   useEffect(() => {
//     // Giả lập dữ liệu user
//     const userData = [
//       {
//         id: 1,
//         userName: "John Doe",
//         gender: "Male",
//         dateBirth: "1990-01-01",
//         address: "123 Main St",
//       },
//       {
//         id: 2,
//         userName: "Jane Smith",
//         gender: "Female",
//         dateBirth: "1992-02-02",
//         address: "456 Elm St",
//       },
//     ];

//     // Cập nhật store với dữ liệu user
//     dispatch(setUsers(userData));
//   }, [dispatch]);

//   return (
//     <div className="App">
//       <ListUser />
//     </div>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListProduct from "./components/ListProduct";
import { setProducts } from "./redux/productSlice";
import { AppDispatch } from "./redux/store";

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    // Giả lập dữ liệu product
    const productData = [
      {
        id: 1,
        productName: "Product 1",
        price: 100,
        quantity: 10,
      },
      {
        id: 2,
        productName: "Product 2",
        price: 200,
        quantity: 20,
      },
    ];

    // Cập nhật store với dữ liệu product
    dispatch(setProducts(productData));
  }, [dispatch]);

  return (
    <div className="App">
      <ListProduct />
    </div>
  );
};

export default App;
