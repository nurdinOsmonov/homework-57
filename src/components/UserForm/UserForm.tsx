import React, {useState} from 'react';
import './Form.css';
import {User, UserMutation} from "../../types";

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    active: false,
    role: '',
  });

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...user
    })
  };

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;
    setUser(prev => ({...prev, [name]: checked}));
  };

  return (
    <form onSubmit={onFormSubmit} className="Form">
      <h4>Add new User</h4>

      <div className="form-group">
        <p><label htmlFor="name"><input
          name="name"
          type="text"
          className="form-control"
          required
          placeholder="Name"
          value={user.name}
          onChange={onTextFieldChange}
        /></label></p>
      </div>

      <div className="form-group">
        <p><label htmlFor="email"><input
          name="email"
          className="form-control"
          required
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={onTextFieldChange}
        /></label></p>
      </div>

      <div className="form-group">
      <p><label><input
        type="checkbox"
        name="active"
        checked={user.active}
        onChange={onCheckboxChange}
      /> Active</label></p>
      </div>

      <div className="form-group mb-2">
      <p>
        <label>
          <select
            name="role"
            required
            value={user.role}
            onChange={onTextFieldChange}
          >
            <option disabled value="">Select role</option>
            <option>user</option>
            <option>editor</option>
            <option>admin</option>
          </select>
        </label>
      </p>
      </div>

      <button type="submit">Create User</button>

    </form>
  );
};

export default UserForm;