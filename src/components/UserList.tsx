import React, { useEffect } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/actions";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypeSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}
    </div>
  );
};

export default UserList;
