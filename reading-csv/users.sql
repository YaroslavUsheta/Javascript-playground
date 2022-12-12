CREATE TABLE Users (
    UserID int,
    LastName varchar(255),
    FirstName varchar(255),
    Title varchar(255)
);

INSERT INTO Users (UserID, LastName, FirstName, Title)
VALUES (1, 'Hunter', 'Scott', 'VP of Azure Development');

INSERT INTO Users (UserID, LastName, FirstName, Title)
VALUES (2, 'Guthrie', 'Scott', 'EVP of Azure & AI');

INSERT INTO Users (UserID, LastName, FirstName, Title)
VALUES (3, 'Hanselman', 'Scott', 'Director of Azure');

select LastName, Title from Users where FirstName = 'Scott'