
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setUsers } from "../redux/userSlice";

const ListUser: React.FC = () => {
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    const newUsers = users.filter((user) => user.id !== id);
    dispatch(setUsers(newUsers));
  };

  const handleEdit = (id: number) => {
    // Implement edit functionality here
    console.log(`Edit user with id: ${id}`);
  };

  return (
    <div>
      <h1>User List</h1>
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.gender}</td>
              <td>{user.dateBirth}</td>
              <td>{user.address}</td>
              <td>
                <button onClick={() => handleEdit(user.id)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
