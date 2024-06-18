import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteProduct } from "../redux/productSlice";

const ListProduct: React.FC = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>giá</th>
            <th>sooa lượng</th>
            <th>chức năng</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button>Sửa</button>
                <button onClick={() => handleDelete(product.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
