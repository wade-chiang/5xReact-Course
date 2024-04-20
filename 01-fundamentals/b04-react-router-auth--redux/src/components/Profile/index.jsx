/*
type ProfileType = {
  user: {
    name: string,
    email: string,
  },
};
*/

const Profile = (props) => {
  const { user } = props;
  const isLoggin = !!user.name;

  return (
    <section data-name="Profile">
      {isLoggin ? (
        <>
          <h1>{user?.name}</h1>
          <h1>{user?.email}</h1>
        </>
      ) : (
        <h1>Signup</h1>
      )}
    </section>
  );
};
export default Profile;
