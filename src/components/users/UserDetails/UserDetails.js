function UserDetails({user}) {

  return (
      <div>
          <h3>Id - {user.id}</h3>
          <p>Name - {user.name} <br/>
          Phone - {user.phone} <br/>
          Email - {user.email}</p>
      </div>
  );
}

export {UserDetails};
