-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: Books
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookAuthors`
--

DROP TABLE IF EXISTS `bookAuthors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookAuthors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookId` int DEFAULT NULL,
  `authorId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `bookAuthors_uk` (`authorId`,`bookId`),
  KEY `bookAuthors_books_bookId_fk` (`bookId`),
  CONSTRAINT `bookAuthors_books_bookId_fk` FOREIGN KEY (`bookId`) REFERENCES `books` (`bookId`),
  CONSTRAINT `bookAuthors_users_userId_fk` FOREIGN KEY (`authorId`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookAuthors`
--

LOCK TABLES `bookAuthors` WRITE;
/*!40000 ALTER TABLE `bookAuthors` DISABLE KEYS */;
INSERT INTO `bookAuthors` VALUES (4,8,4),(5,8,5);
/*!40000 ALTER TABLE `bookAuthors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `bookId` int NOT NULL AUTO_INCREMENT,
  `bookName` varchar(100) NOT NULL,
  `bookPrice` int DEFAULT NULL,
  `bookGenre` enum('Novel','Fiction','Mystery','Travel','Life') NOT NULL,
  `yearPublished` year NOT NULL,
  `isPublished?` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`bookId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (6,'Prince of Persia',35,'Fiction',2024,1),(7,'Expedition Canada',50,'Travel',2011,1),(8,'The American Dream',40,'Life',2024,1);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `emailAddress` varchar(100) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'Devang','Parekh','devangparekh2014@gmail.com','$2b$10$kqJKxbhh4UOOX9jigaSLoOGepDClZYu2tfXznjb8FYa5r2femp0Bu'),(5,'Yushan','Cui','yushancui@apple.com','$2b$10$TDWH.6ApEMF0814hsJsBIuLNNDd/IIgXtrRZXQ1eBhlpK17dy94wK');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

INSERT INTO Books.books (bookId, bookName, bookPrice, bookGenre, yearPublished, `isPublished?`) VALUES (6, 'Prince of Persia', 35, 'Fiction', 2024, 1);
INSERT INTO Books.books (bookId, bookName, bookPrice, bookGenre, yearPublished, `isPublished?`) VALUES (7, 'Expedition Canada', 50, 'Travel', 2011, 1);
INSERT INTO Books.books (bookId, bookName, bookPrice, bookGenre, yearPublished, `isPublished?`) VALUES (8, 'The American Dream', 40, 'Life', 2024, 1);

INSERT INTO Books.users (userId, firstName, lastName, emailAddress, password) VALUES (4, 'Devang', 'Parekh', 'devangparekh2014@gmail.com', '$2b$10$kqJKxbhh4UOOX9jigaSLoOGepDClZYu2tfXznjb8FYa5r2femp0Bu');
INSERT INTO Books.users (userId, firstName, lastName, emailAddress, password) VALUES (5, 'Yushan', 'Cui', 'yushancui@apple.com', '$2b$10$TDWH.6ApEMF0814hsJsBIuLNNDd/IIgXtrRZXQ1eBhlpK17dy94wK');


INSERT INTO Books.bookAuthors (id, bookId, authorId) VALUES (4, 8, 4);
INSERT INTO Books.bookAuthors (id, bookId, authorId) VALUES (5, 8, 5);


-- Dump completed on 2024-01-07 16:42:31
