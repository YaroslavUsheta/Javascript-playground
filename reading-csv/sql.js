/** User should have id, name, last name, and the title. */
function userToInsertStatement(user) {
  return `INSERT INTO table_name (UserID, LastName, FirstName, Title) VALUES (${user.id}, '${user.lastName}', '${user.fistName}', '${user.title}')`;
}
