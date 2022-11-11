import React from 'react';
import {User} from "../../types"

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xSz0eMW7GmpKukczOHvPWWGDqaBCqWA-Mw&usqp=CAU';
  const image = imageUrl;
  const imageStyle = {
    background: `url(${image}) no-repeat center center / 50%`
  }

  return (
    <div>
      <div className="card mb-2">
        <div className="row no-gutters">
          <div className="col-sm-4 rounded-start" style={imageStyle}/>
          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text small">{user.email}</p>
              <p className="card-text">{user.active}</p>
              <p className="card-text">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;