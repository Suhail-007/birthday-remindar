import React from 'react';

const List = (props) => {
  const users = props.usersList.map(user => {
    return (
      <li key={user.id} className='person'>
        <img src={user.image} />
        
        <div>
          <h4>Name: {user.name}</h4>
          <p>Age: {user.age}</p>
        </div>
     </li>
    )
  })


  return (
    <ul>
      {users}
    </ul>
  );
};

export default List;