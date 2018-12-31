export default function getUserNameOfId(users, userId) {
  const user = users.find(user => user.id === userId);
  return user ? user.name : "";
}
