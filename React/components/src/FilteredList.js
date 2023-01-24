import React, { useMemo } from "react";

function FilteredList({ users }) {
  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);
  return (
    <div>
      {filteredUsers.map((user) => {
        return (
          <h2>{`Name: ${user.name} - Email: ${user.email} - Age: ${user.age}`}</h2>
        );
      })}
    </div>
  );
}

export default FilteredList;
