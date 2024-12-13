-- creating Artist table

CREATE TABLE artists (
  artistId INT AUTO_INCREMENT PRIMARY KEY,
  artistName VARCHAR(255) NOT NULL UNIQUE,
  artistImage TEXT,
  artistBio TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- creating Albums table

CREATE TABLE albums (
  albumId INT AUTO_INCREMENT PRIMARY KEY,
  artistId INT NOT NULL,
  albumTitle VARCHAR(255) NOT NULL,
  year INT NOT NULL CHECK (year >= 1900 AND year <= YEAR(CURDATE())),
  genre VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (artistId) REFERENCES artists(artistId) ON DELETE CASCADE ON UPDATE CASCADE
);

-- creating Users table

CREATE TABLE users (
  userId INT AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(255) NOT NULL,
  age INT CHECK (age >= 13), 
  gender CHAR(1),
  emailId VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  profileImage TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- creating Reviews table

CREATE TABLE reviews (
  reviewId INT AUTO_INCREMENT PRIMARY KEY,
  albumId INT NOT NULL,
  userId INT NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5), -- Ensures rating is between 1 and 5
  review TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (albumId) REFERENCES albums(albumId) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE ON UPDATE CASCADE
);

-- examples

-- Insert artists
INSERT INTO artists (artistName, artistImage, artistBio)
VALUES 
('Miles Davis', 'url-to-image', 'Famous jazz musician'),
('John Coltrane', 'url-to-image', 'Innovative saxophonist');

-- Insert albums
INSERT INTO albums (artistId, albumTitle, year, genre)
VALUES
(1, 'Kind of Blue', 1959, 'Jazz'),
(2, 'Blue Train', 1957, 'Jazz');

-- Insert users
INSERT INTO users (userName, age, gender, emailId, password, profileImage)
VALUES
('Max', 34, 'M', 'max@email.com', 'password', 'profile-picture-url'),

-- Insert reviews
INSERT INTO reviews (albumId, userId, rating, review)
VALUES
(1, 1, 5, 'Incredible jazz.'),
(2, 2, 4, 'Iconic Jazz');