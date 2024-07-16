from db import mycursor

mycursor.execute('''CREATE TABLE _users (
                    id int NOT NULL AUTO_INCREMENT,
                    providerId varchar(255) NOT NULL,
                    password varchar(255),
                    provider varchar(255),
                    role varchar(255),
                    PRIMARY KEY(id)
                 )''')

mycursor.execute('''CREATE TABLE _projects (
                    id int NOT NULL AUTO_INCREMENT,
                    userId int,
                    projectName varchar(255) NOT NULL,
                    githubUrl varchar(255) NOT NULL,
                    FOREIGN KEY(userId) REFERENCES _users(id),
                    PRIMARY KEY(id)
                 )''')

mycursor.execute('''CREATE TABLE _deployments (
                    id int NOT NULL AUTO_INCREMENT,
                    projectId int,
                    userId int,
                    status varchar(255),
                    FOREIGN KEY(projectId) REFERENCES _projects(id),
                    FOREIGN KEY(userId) REFERENCES _users(id),
                    PRIMARY KEY(id)
                 )''')