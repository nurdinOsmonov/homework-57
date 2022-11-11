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

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  }

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;
    setUser(prev => ({...prev, [name]: checked}));
  }

  return (
    <form onSubmit={onFormSubmit}>
      <p><input
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={onTextFieldChange}
      /></p>
      <p><input
        name="email"
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={onTextFieldChange}
      /></p>
      <p><label><input
        type="checkbox"
        name="active"
        checked={user.active}
        onChange={onCheckboxChange}
      />
        Active</label></p>
      <p>
        <label>
          <select
            name="role"
            value={user.role}
            onChange={onTextFieldChange}
          >
            <option disabled value=''>Select role</option>
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