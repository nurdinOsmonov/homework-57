import React, {useState} from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  active: boolean;
  role: string;
}

interface UserMutation {
  name: string;
  email: string;
  active: boolean;
  role: string;
}

const UserForm = () => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    active: false,
    role: '',
  });

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <p><input name="name" placeholder="Name"/></p>
      <p><input name="email" placeholder="Email"/></p>
      <p><label><input type="checkbox" name="active"/> Active</label></p>
      <p>
        <label>
          <select name="role">
            <option>user</option>
            <option>editor</option>
            <option>admin</option>
          </select>
        </label>
      </p>
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;