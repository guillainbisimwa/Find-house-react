const authHeader = () => {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.auth_token) {
    const header = { authorization: `${user.auth_token}` };
    return header;
  }
  return {};
};

export default authHeader;
