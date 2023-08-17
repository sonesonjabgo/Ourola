-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: ourola
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `announcement`
--

DROP TABLE IF EXISTS `announcement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `announcement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `content` varchar(5000) DEFAULT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_group_channel_TO_announcement_1` (`group_id`),
  KEY `FK_artist_user_TO_announcement_1` (`artist_id`),
  CONSTRAINT `FK_artist_user_TO_announcement_1` FOREIGN KEY (`artist_id`) REFERENCES `artist_user` (`id`),
  CONSTRAINT `FK_group_channel_TO_announcement_1` FOREIGN KEY (`group_id`) REFERENCES `group_channel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcement`
--

LOCK TABLES `announcement` WRITE;
/*!40000 ALTER TABLE `announcement` DISABLE KEYS */;
INSERT INTO `announcement` VALUES (1,6,5,'안녕하세요','소개입니다.','2023-08-02 01:17:12'),(2,6,5,'두번 안녕하세요','두번째 소개입니다.','2023-08-02 01:17:16'),(3,6,5,'세번 안녕하세요','세번째 소개입니다.','2023-08-02 17:15:14'),(4,6,5,'n번 안녕하세요','n번째 소개입니다.','2023-08-02 17:31:55'),(5,6,5,'n번 안녕하세요','n번째 소개입니다.','2023-08-02 17:31:56'),(6,6,5,'n번 안녕하세요','n번째 소개입니다.','2023-08-02 17:31:56'),(7,6,5,'n번 안녕하세요','n번째 소개입니다.','2023-08-02 17:31:57'),(8,6,5,'n번 안녕하세요','n번째 소개입니다.','2023-08-02 17:31:57'),(9,6,5,'n번 안녕하세요','n번째 소개입니다.','2023-08-02 17:31:57'),(10,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다. n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.','2023-08-02 17:33:24'),(11,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다. n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다. n번째 소개입니다. n번째 소개입니다. n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다. n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다. n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다. n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다. n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다. n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.n번째 소개입니다. n번째 소개입니다.','2023-08-02 17:33:40'),(12,6,5,'시간 테스트','시간 테스트 용입니다.','2023-08-03 00:35:19'),(13,6,5,'시간 테스트 2','시간 테스트 용입니다. 2','2023-08-03 00:44:05'),(14,6,5,'시간 테스트 3','시간 테스트 용입니다. 3','2023-08-03 00:54:44'),(15,6,5,'시간 테스트 4','시간 테스트 용입니다. 4','2023-08-03 10:57:01'),(16,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:52:58'),(17,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:52:58'),(18,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:52:58'),(19,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:52:59'),(20,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:52:59'),(21,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:52:59'),(22,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:52:59'),(23,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:52:59'),(24,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:52:59'),(25,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:52:59'),(26,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:00'),(27,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:00'),(28,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:00'),(29,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:00'),(30,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:00'),(31,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:00'),(32,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:01'),(33,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:01'),(34,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:01'),(35,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:01'),(36,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:01'),(37,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:03'),(38,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:03'),(39,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:03'),(40,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:03'),(41,6,5,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-03 14:53:03'),(42,1,9,'안녕하세요','소개입니다.','2023-08-03 17:14:51'),(43,1,9,'두번 안녕하세요','두번째 소개입니다.','2023-08-03 17:15:11'),(44,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:26'),(45,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:27'),(46,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:27'),(47,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:27'),(48,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:27'),(49,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:28'),(50,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:28'),(51,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:28'),(52,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:28'),(53,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:28'),(54,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:29'),(55,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:29'),(56,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:29'),(57,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:29'),(58,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:40:29'),(59,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:49'),(60,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:50'),(61,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:50'),(62,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:50'),(63,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:50'),(64,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:51'),(65,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:51'),(66,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:51'),(67,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:51'),(68,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:51'),(69,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:51'),(70,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:52'),(71,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:52'),(72,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:52'),(73,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:52'),(74,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:52'),(75,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:53'),(76,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:53'),(77,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:53'),(78,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:53'),(79,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:54'),(80,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:54'),(81,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:54'),(82,1,9,'n번 안녕하세요','n번째 소개입니다. n번째 소개입니다.','2023-08-04 00:51:54'),(83,1,9,'두번 안녕하세요','두번째 소개입니다. 두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.두번째 소개입니다.','2023-08-04 13:24:17'),(84,1,9,'안녕하세요','소개입니다.','2023-08-04 13:41:58'),(85,3,9,'오마이걸 테스팅','테-스팅','2023-08-08 09:32:50'),(86,18,28,'ourola 채널에 오신것을 환영합니다',' ','2023-08-16 20:31:37'),(87,18,28,'[NOTICE] ourola 커뮤니티 오픈 및 이용 안내','\n안녕하세요.\nourola 커뮤니티입니다. \n\nourola 커뮤니티가 드디어 오픈되었습니다. \n\nourola 멤버들과 팬 여러분들이 ourola 커뮤니티를 통해 더 즐겁게 소통할 수 있도록 안내해드립니다.\n\n\n[팬 피드]\n\n팬 여러분이 작성해 주시는 글들이 보이는 공간입니다. 그룹과 아티스트에 대한 팬 여러분의 의견을 자유롭게 남길 수 있습니다.\n\n글 작성 팝업창의 좌측 하단의 이미지 등록 기능을 통해 ourola와 관련된 사진을 등록하여 피드를 작성할 수 있습니다.\n\n* 자유롭게 피드를 작성할 수 있지만 그룹이나 아티스트와 관련이 없는 내용은 금지합니다.\n* 타인을 비방하거나 거래 유도 등의 부적절한 내용의 피드 작성은 해당 피드와 작성자 계정 모두에 적절한 조치가 가해질 수 있습니다.\n\n\n[아티스트 피드]\n\nourola 멤버들이 직접 쓴 피드를 볼 수 있는 공간입니다.\n\n아티스트의 피드에 댓글을 남기고 응원을 할 수 있습니다.\n\n상단 아티스트의 프로필을 선택하여 해당 아티스트가 작성한 피드만 볼 수 있습니다.\n\n\n각 피드 페이지의 상단에서는 공지사항을 확인할 수 있습니다.\n\nourola 그룹과 ourola 커뮤니티에 많은 관심 부탁드립니다.\n감사합니다.','2023-08-16 21:00:00'),(88,NULL,NULL,'[notice] OUROLA 커뮤니티 오픈 및 이용 안내','안녕하세요.\nourola 커뮤니티입니다.\nourola 커뮤니티가 드디어 오픈되었습니다.\nourola 멤버들과 팬 여러분들이 ourola 커뮤니티를 통해 더 즐겁게 소통할 수 있도록 안내해드립니다.\n[팬 피드]\n팬 여러분이 작성해 주시는 글들이 보이는 공간입니다. 그룹과 아티스트에 대한 팬 여러분의 의견을 자유롭게 남길 수 있습니다.\n글 작성 팝업창의 좌측 하단의 이미지 등록 기능을 통해 ourola와 관련된 사진을 등록하여 피드를 작성할 수 있습니다.\n* 자유롭게 피드를 작성할 수 있지만 그룹이나 아티스트와 관련이 없는 내용은 금지합니다.\n* 타인을 비방하거나 거래 유도 등의 부적절한 내용의 피드 작성은 해당 피드와 작성자 계정 모두에 적절한 조치가 가해질 수 있습니다.\n[아티스트 피드]\nourola 멤버들이 직접 쓴 피드를 볼 수 있는 공간입니다.\n아티스트의 피드에 댓글을 남기고 응원을 할 수 있습니다.\n상단 아티스트의 프로필을 선택하여 해당 아티스트가 작성한 피드만 볼 수 있습니다.\n각 피드 페이지의 상단에서는 공지사항을 확인할 수 있습니다.\nourola 그룹과 ourola 커뮤니티에 많은 관심 부탁드립니다.\n감사합니다.','2023-08-16 21:00:33'),(89,18,28,'[이벤트] ourola 채널 오픈 기념 이벤트! 피드를 작성해주세요!','\n안녕하세요.\nourola 커뮤니티입니다.\n\n?? ourola 커뮤니티 오픈 기념으로 피드 작성 이벤트가 열립니다! ??\n\nourola 채널 [팬 피드] 에 팬 여러분들의 인사를 남겨주세요!\n\n참여해 주신 분들 중 추첨을 통해 마음을 담아 감사하다는 멘트를 전해드려요?\n\n\n\n[이벤트 참여 방법]\n\n이벤트 기간동안 ourola 채널 팬 피드에 ourola 멤버들에게 인사와 응원을 전하는 피드를 작성해주세요\n\n* 같은 내용 도배 또는 의미 없는 내용의 피드는 이벤트 당첨에서 제외 및 제재를 받을 수 있습니다.\n\n\n[이벤트 기간]\n\n2023년 8월 16일 (수) 18:00 ~ 8월 20일 (일) 23:59 (KST)\n\n\n[증정 선물]\n\n추첨 및 추가 심사를 통해 총 N분께 멤버들이 감사의 마음을 담아 인사를 전해드립니다.\n\n\n[당첨자 선정 기준]\n\n다양한 사진과 글 내용으로 이벤트에 참여할수록 당첨에 유리합니다.\n나의 피드가 응원이나 댓글을 많이 받을수록 당첨이 유리합니다.\n\n* 단, 부정한 방법으로 참여할 경우 당첨 제외 및 제재가 가해질 수 있습니다.\n\n\n[당첨자 발표]\n2023년 8월 21일 (월) ourola 채널 공지사항을 통해 당첨자가 발표됩니다.\n\n','2023-08-16 21:02:09'),(90,18,28,'[이벤트] ourola 채널 오픈 기념 이벤트! 댓글을 달아주세요!','\n 안녕하세요.\n ourola 커뮤니티입니다.\n \n ?? ourola 커뮤니티 오픈 기념으로 피드 작성 이벤트가 열립니다! ??\n \n ourola 채널 [팬 피드], [아티스트 피드] 에 팬 여러분들의 댓글을 남겨주세요\n \n 참여해 주신 분들 중 추첨을 통해 마음을 담아 감사하다는 멘트를 전해드려요?\n \n \n \n [이벤트 참여 방법]\n \n 이벤트 기간동안 ourola 채널 팬 피드와 아티스트 피드에 댓글을 남겨주세요!\n \n * 같은 내용 도배 또는 의미 없는 내용의 댓글은 이벤트 당첨에서 제외 및 제재를 받을 수 있습니다.\n \n \n [이벤트 기간]\n \n 2023년 8월 16일 (수) 18:00 ~ 8월 20일 (일) 23:59 (KST)\n \n \n [증정 선물]\n \n 추첨 및 추가 심사를 통해 총 N분께 멤버들이 감사의 마음을 담아 인사를 전해드립니다.\n \n \n [당첨자 선정 기준]\n \n 다양한 피드에 댓글을 달아 이벤트에 참여할수록 당첨에 유리합니다.\n 나의 댓글이 응원을 많이 받을수록 당첨이 유리합니다.\n \n * 단, 부정한 방법으로 참여할 경우 당첨 제외 및 제재가 가해질 수 있습니다.\n \n \n [당첨자 발표]\n 2023년 8월 21일 (월) ourola 채널 공지사항을 통해 당첨자가 발표됩니다.\n \n ','2023-08-16 21:15:58'),(92,NULL,NULL,'230820 SBS 인기가','안녕하세요.\nourola 그룹 담당자입니다.\n \n \n8월 20일 (일요일) SBS 인기가요 사전녹화 참여 안내입니다.\n많은 팬 분들의 신청 부탁드립니다.\n\n \n \n ▶ SBS 인기가요 사전녹화\n - 일시 : 2023년 8월 20일(일) 9:50 AM\n - 장소 : 등촌동 SBS 공개홀 (서울 강서구 양천로 442)\n - 인원 체크 장소 : 등촌동 SBS 공개홀\n - 인원 체크 시간 : 2023년 8월 20일 (일) 8:40 AM (KST)\n \n\n * 녹화 시간 관련해서 현장에서 수시로 변경될 가능성이 있어, 현장에서 상황에 따라 안내 드릴 예정입니다.\n \n * 해당 공연은 만 15세 이상 부터 참여가 가능합니다.\n \n * 모든 녹화 현장에는 인원체크 시 배부받은 팔찌를 반드시 지참하셔야 합니다. 훼손, 분실의 경우 입장이 제한됩니다.\n \n * 당일 공연 좌석은 인원 체크 순서와는 무관하므로 임의로 대기줄 생성하는 행위는 금합니다.\n \n \n <신청 방법 안내>\n \n ▶ SBS 인기가요 사전녹화 신청\n - 신청일시 : 2023년 8월 18일(금) 9:00 AM ~ 9:00 PM (KST)\n \n ** 해당 일시에 신청 페이지 새로고침이 필요합니다. 미리 로그인 해서 접속한 후 신청 시간에 맞춰 참여 신청을 완료해주시기 바랍니다.\n \n ** 신청 페이지는 서버 시간을 기준으로 합니다.\n ** 신청 인원이 마감된 경우 신청 버튼이 비활성화됩니다.\n ** 신청 마감 후 버튼 좌측 신청 인원수와 함께 신청한 순서(입장 번호)가 표시됩니다.\n \n ** 신청 취소 시에는 신청 내용(신청 내역 및 입장번호)을 복구해드리지 않습니다.\n \n\n <주의 사항>\n\n* 부정한 프로그램을 통한 신청자, 금전 거래를 통해 대리 신청을 하는 신청자, 본인이 아닌 타인(친구, 지인 등)을 통해 신청하는 신청자, 배부받은 번호를 양도하는 신청자 또는 양도받은 신청자 등 부정한 방법이 발견되면, 어떠한 경우에도 배부받은 입장 번호는 인정되지 않으며 해당 공개방송 참여 불가 및 공개방송 불참자와 동일한 불이익이 적용 됩니다.\n \n\n\n<공개방송 참여 팬 확인 준비물 안내>\n\n** 확인 준비물 중 한 가지라도 없을 시, 당일 공개방송 입장이 불가합니다.\n\n\n1) 신분증 (본인 확인 가능한 사진 필수)\n\n- 대한민국 국적 : 여권, 주민등록증, 운전면허증, 청소년증(주민센터 발급)\n- 대한민국 국적 외 : 여권, 외국인등록증\n\n** 사진, 프린트물, 모바일 화면 캡쳐 등은 인정되지 않습니다.\n\n** 신분증에 부착된 사진이 본인 증명사진이 아니거나, 스티커 또는 낙서 등으로 훼손되어 사진 확인이 어려운 경우 해당 신분증으로 본인 확인이 불가합니다.\n\n** 현장에서 신분증과 실제 얼굴이 일치하지 않을 경우 추가 확인 요청을 드릴 수 있습니다.\n\n** ourola 가입자 정보와 신분증 상의 정보가 상이한 경우 추가 확인 요청을 드릴 수 있습니다.\n\n** 모바일 신분증은 캡처 파일을 인정하지 않습니다. 현장에서 모바일 신분증 앱 실행을 요청할 수 있습니다.\n\n** 학생증으로는 본인 확인 불가합니다.\n\n** 유효기간이 만료된 신분증으로는 본인 확인이 불가합니다.\n\n** 영문 외로 가입하여 여권의 영문명으로 확인이 불가할 경우, 현장에서 사진과 영문 외 이름이 기입된 신분증을 추가 확인 요청드릴 수 있습니다. 사전 준비 및 협조 부탁드립니다.\n\n** 추가 확인 요청시 협조 부탁드립니다.\n\n\n2) 공식 응원봉\n\n\n\n<공개방송 참여 시 주의 사항>\n\n1) 공개방송 현장에서의 퇴장은 모든 공연이 끝난 뒤 가능합니다. 중도 퇴장 등 방송국 경호팀과의 마찰이 발생할 경우 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 여러분들의 즐거운 공개방송 참여를 위하여 현장 스태프의 통솔에 따라 주시기 바랍니다.\n\n2) 각 방송 프로그램에 따라 입장 연령이나 신청이 제한될 수 있습니다. 신청 전에 반드시 프로그램 정보를 확인해 주십시오.\n\n3) 공개방송이 진행되는 스튜디오 내 사진·동영상 촬영 및 녹음은 엄격하게 금지되어 있으며, 촬영 및 녹음이 가능한 장비의 반입 역시 금지되어 있습니다. 공개방송 현장에서 사진, 영상 촬영 및 녹음 적발 시 방송국 경호팀 또는 방송국 스태프의 재량으로 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 공개방송에 참여한 모든 여러분의 안전과 즐거운 공연 관람을 위한 부분으로 양해와 협조 부탁드립니다.\n\n** 적발 시 즉시 퇴장 조치 후, 촬영한 사진, 영상, 녹음은 전부 현장에서 삭제 처리됩니다. 퇴장 조치 시 발생하는 기기 파손에 대해 당사에서는 일체 책임을 지지 않습니다.\n\n** 촬영 적발 시, 추후 진행되는 공개방송에 참여하실 수 없습니다.\n\n4) ourola 공식 응원봉을 제외한 개인 응원도구(플랜카드, 슬로건, 핸드폰 전광판 앱, 인형, 부채 등)의 사용은 금지되어 있습니다.\n\n5) ourola 멤버들의 출·퇴근 시 멤버들의 차량으로 달려들거나 하는 등의 행위는 매우 위험합니다. 해당 행동이 발견되는 경우, 해당 회원은 추후 진행되는 공개방송에 참여하실 수 없습니다. 모두의 안전을 위해 서로 배려하여 안전한 공개방송 현장이 될 수 있도록 부탁드립니다.\n\n6) 팬클럽석이 지정된 경우, 임의로 자리를 이탈하는 행동은 금지되어 있습니다.\n\n7) 공개방송 현장에서 ourola 멤버들에게 편지 전달이 가능합니다. 현장 스태프에게 준비한 편지를 전달해주시면 ourola 멤버들에게 전달합니다.\n\n** 편지를 제외한 모든 선물은 전달 불가합니다.\n\n\n\n공개방송에 참여한 모두가 안전하고 즐거운 공연을 관람할 수 있도록 해당 공지를 참여 전 꼼꼼하게 읽어주시길 부탁드립니다.\n\n공지 내용 일부가 수정, 추가될 수 있습니다.\n\n공지 미확인으로 인한 불이익은 책임지지 않으니 유의 바랍니다.\n \n\n\nourola  여러분의 많은 관심과 성원 부탁드립니다.\n \n 감사합니다.','2023-08-16 21:39:57'),(93,18,28,'[NOTICE] ourola 멤버십 판매 안내',NULL,'2023-08-17 11:00:43'),(94,18,28,'[NOTICE] ourola 팬싸인회 신청 안내',NULL,'2023-08-17 11:00:43'),(95,18,28,'[이벤트] ourola 베스트 포토카드를 찾아라! 이벤트 안내',' 안녕하세요.\n ourola 커뮤니티입니다.\n \n ?? ourola 커뮤니티에서 베스트 포토카드를 찾아라!  이벤트가 개최됩니다!! ??\n \n ourola 채널 [팬 피드] 에 ourola 멤버의 포토카드 인증을 올려주세요!! 희귀한 포토카드일수록 이벤트 당첨 확률이 올라갑니다!\n\n \n \n 참여해 주신 분들 중 추첨을 통해 마음을 담아 감사하다는 멘트를 전해드려요?\n \n \n \n [이벤트 참여 방법]\n \n 이벤트 기간 동안 팬 피드에 ourola 멤버의 (있을리 없는) 포토카드 인증글을 올려주세요!\n \n \n [이벤트 기간]\n \n 2023년 8월 16일 (수) 18:00 ~ 8월 20일 (일) 23:59 (KST)\n \n \n [증정 선물]\n \n 추첨 및 추가 심사를 통해 총 N분께 멤버들이 감사의 마음을 담아 인사를 전해드립니다.\n \n \n [당첨자 선정 기준]\n \n ourola 멤버들이 각자 가장 마음에 드는 포토카드를 선정할 예정입니다. 당첨자 선정의 모든 과정은 블라인드로 진행될 예정입니다.\n \n * 단, 부정한 방법으로 참여할 경우 당첨 제외 및 제재가 가해질 수 있습니다.\n \n \n [당첨자 발표]\n 2023년 8월 21일 (월) ourola 채널 공지사항을 통해 당첨자가 발표됩니다.\n \n ','2023-08-17 12:50:38'),(96,18,28,'[공지] ourola 팬클럽 에티켓 관련 안내','\n안녕하세요.\nourola 커뮤니티입니다.\n\n\n항상 ourola를 향해 사랑과 응원을 보내주시는 팬 여러분께 감사드리며, 아티스트와 팬 여러분 모두의 안전을 위한 팬클럽 에티켓 관련 안내드립니다.\n\n※ 공식 참여 안내 등의 공지가 나가지 않은 스케줄은 모두 비공식 스케줄이며 참여가 불가능합니다.\n※ 팬레터는 회사로 보내주시면 아티스트에게 전달 가능하며, 팬레터를 제외한 모든 선물 및 서포트는 전달이 불가능합니다.\n\n\n1. 공식 스케줄 출·퇴근길 관련\nourola의 스케줄 출·퇴근길을 동행하여 차도로 끼어들거나 차량을 향해 접근하는 행동, 팬레터 및 선물을 전달하는 행동은 멤버와 팬분들의 이동 동선에서 안전상의 문제가 발생할 수 있으니 삼가 주시기 바랍니다.\n\n\n2. 공항 에티켓 관련\n티켓팅 이후의 공항 내부는 법규상 촬영이 금지되어 있습니다.\n개인적으로 아티스트의 항공 관련 정보를 취득하여 동일 항공편을 이용하려는 행위, 아티스트에게 접근, 대화, 신체 접촉 등을 시도하거나 아티스트의 사진 및 동영상 촬영을 위해 멤버들과 공항 이용객들의 이동에 피해를 주는 행동은 삼가 주시기 바랍니다.\n\n* 아티스트와 스태프, 국내외 경호팀 등의 업무를 방해하거나 협조 요청에 응하지 않을 경우 제재가 있을 수 있습니다.\n\n\n3. ourola 개인 공간 및 비공식 스케줄 장소 방문\n팬분들의 참여 가능한 스케줄 (공개 방송, 행사, 팬사인회 등) 은 사전 공지되고 있습니다.\n이밖에 ourola의 출·퇴근 및 개인적인 공간 (회사, 연습실, 숙소, 샵 등), 비공식 스케줄 이동 시 대기하거나 동행하는 행위, 팬레터나 선물을 전달하는 행동은 삼가 주시기 바랍니다.\n\n\n\n위와 같은 행위는 모두 팬클럽 에티켓 위반 사례로 엄격히 금지합니다.\n팬클럽 에티켓을 위반했을 경우 사전 고지 없이 경고 명단으로 안내될 수 있으며, 명단에 오른 분들은 팬클럽 활동에 불이익을 받을 수 있습니다.\n\n\n안전하고 건강한 팬클럽 문화를 만들어 나갈 수 있도록 팬 여러분의 많은 협조를 부탁드립니다.\n\n감사합니다.','2023-08-17 13:08:29');
/*!40000 ALTER TABLE `announcement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artist_user`
--

DROP TABLE IF EXISTS `artist_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artist_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int DEFAULT NULL,
  `profile_id` int DEFAULT '1',
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(1000) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `regist_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `resign` tinyint(1) DEFAULT '0',
  `is_admin` tinyint(1) DEFAULT '0',
  `tel` varchar(15) DEFAULT NULL,
  `refresh_token` varchar(1000) DEFAULT NULL,
  `role` varchar(30) DEFAULT 'ARTIST',
  `birthday` date DEFAULT NULL,
  `nickname` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_group_channel_TO_artist_user_1` (`group_id`),
  KEY `FK_profile_file_TO_artist_user_1` (`profile_id`),
  CONSTRAINT `FK_group_channel_TO_artist_user_1` FOREIGN KEY (`group_id`) REFERENCES `group_channel` (`id`),
  CONSTRAINT `FK_profile_file_TO_artist_user_1` FOREIGN KEY (`profile_id`) REFERENCES `profile_file` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist_user`
--

LOCK TABLES `artist_user` WRITE;
/*!40000 ALTER TABLE `artist_user` DISABLE KEYS */;
INSERT INTO `artist_user` VALUES (1,1,1,'asdf@asdf.com','{bcrypt}$2a$10$4NjcSl6qF2hTYuRhpISBb.GydoYvQaDUgi/KNn9PbhJbMrcQLwUay','aaa',123,'2023-07-25 15:02:28',0,1,NULL,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTI3NzM5NDF9.eG6dchywa9cL8YsAdiva4cWRBRPBJNBgEH5dfwNRpBC3spPx02iE04Q4nLRCY_7Wfu-nO8hflJzcPQJmEScekQ','CHANNEL_ADMIN',NULL,'aaa'),(2,NULL,1,'asdf1@asdf1.com','{bcrypt}$2a$10$2DtJ8P/qFxB5fvN63baRMeLtfp/HhOtr6gU.DH1DhFgIjTLr8nFT2','아티스트1',123,'2023-07-26 16:29:01',0,0,'01033334444',NULL,'ARTIST',NULL,'아티스트1'),(3,1,1,'asdf2@asdf2.com','{bcrypt}$2a$10$fvmfLRmkbXesXs7bnr7.3uKNyZmEadlAdcK8GvsAdgcJRdvpNosJC','아티스트2',123,'2023-07-27 13:08:25',0,0,'01033334444','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTMxMTQwMjF9.VEKpHv5igdDiA2mBiaAOUMtT0g02aJqSkZm4fFU5Qv2k6OHLCcv1IYyOJIxQvQToNLlw8_rvTw9FPeSRZCbREQ','ARTIST',NULL,'아티스트2'),(4,1,1,'asdf3@asdf3.com','{bcrypt}$2a$10$qgqTY5ocPNW8rJlSJg9VieUNoGBHrB0zSOL4RA1kaXCC3GUD.Edvu','세븐틴',123,'2023-07-27 13:08:47',0,1,'01033334444','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTMyNDExODJ9.Z0lSHm2SbC-Ia7zAwWC375c3CczOJoU8PhihVlX-q5OKZg1i4MlCUSjo4Z78sYQoWRrvb3RjyE2bxOAThUdokQ','CHANNEL_ADMIN',NULL,'세븐틴'),(5,6,1,'BTS@naver.com','{bcrypt}$2a$10$KU02Tfs.jlszAym2eHSiKe4SlXpyeFDGbCjinpJzOzoi0v8cNGl1W','BTS관리자',26,'2023-08-02 01:14:26',0,1,NULL,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTI0OTY3NTV9.J_iOLG971DAgoRjctg7jnWpdtrYhcVEQqP4X_a0gpB6ydXDkhmrhLYwPDQ7B2yOwc_fUeybTTgXHyi20k4v0WA','CHANNEL_ADMIN',NULL,'BTS관리자'),(6,6,1,'JIN@naver.com','{bcrypt}$2a$10$hj.nXyWSgqtdbQLXozR0u.MLd40yxpB6t/817i3BXnrNGLeSrGB5O','진',28,'2023-08-02 01:15:39',0,0,NULL,NULL,'ARTIST',NULL,'진'),(7,6,1,'JIMIN@naver.com','{bcrypt}$2a$10$76iaXWNl9Jq6bSuV5HA8Iu3AqaNM2FRloO4yhEkN3J1aeF.z0Y4u6','용원',29,'2023-08-02 01:16:17',0,0,NULL,NULL,'ARTIST',NULL,'지민'),(9,1,1,'SEVENTEEN@naver.com','{bcrypt}$2a$10$bJUcvnt6NNoCQPrIAIasge3lJzJZxn0x9jYUffhQri.Ve5qBELG7O','세븐틴관리자',70,'2023-08-03 01:38:24',0,1,'01012345678','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTM0ODQ2NTZ9.X5YMKc0Hr_2YOFnz0G67V9EHSeAguXOdYUXE4IyQEfNFhOJhaRPvYSrTPHI0ENkphU9zBJT4aaVMFshNap91Eg','CHANNEL_ADMIN',NULL,'세븐틴관리자'),(10,1,1,'JIN@naver.com','{bcrypt}$2a$10$hj.nXyWSgqtdbQLXozR0u.MLd40yxpB6t/817i3BXnrNGLeSrGB5O','진',28,'2023-08-04 00:57:02',0,0,NULL,NULL,'ARTIST',NULL,'진'),(11,1,1,'JIMIN@naver.com','{bcrypt}$2a$10$76iaXWNl9Jq6bSuV5HA8Iu3AqaNM2FRloO4yhEkN3J1aeF.z0Y4u6','용원',29,'2023-08-04 00:57:03',0,0,NULL,NULL,'ARTIST',NULL,'지민'),(12,1,1,'asdf4@naver.com','{bcrypt}$2a$10$fvmfLRmkbXesXs7bnr7.3uKNyZmEadlAdcK8GvsAdgcJRdvpNosJC','아티스트4',31,'2023-08-04 00:59:10',0,0,NULL,NULL,'ARTIST',NULL,'아티스트4'),(13,1,1,'asdf5@naver.com','{bcrypt}$2a$10$fvmfLRmkbXesXs7bnr7.3uKNyZmEadlAdcK8GvsAdgcJRdvpNosJC','아티스트5',31,'2023-08-04 00:59:11',0,0,NULL,NULL,'ARTIST',NULL,'아티스트5'),(14,1,1,'asdf6@naver.com','{bcrypt}$2a$10$fvmfLRmkbXesXs7bnr7.3uKNyZmEadlAdcK8GvsAdgcJRdvpNosJC','아티스트6',31,'2023-08-04 00:59:12',0,0,NULL,NULL,'ARTIST',NULL,'아티스트6'),(15,1,1,'asdf7@naver.com','{bcrypt}$2a$10$fvmfLRmkbXesXs7bnr7.3uKNyZmEadlAdcK8GvsAdgcJRdvpNosJC','아티스트7',31,'2023-08-04 00:59:13',0,0,NULL,NULL,'ARTIST',NULL,'아티스트7'),(16,1,1,'asdf8@naver.com','{bcrypt}$2a$10$fvmfLRmkbXesXs7bnr7.3uKNyZmEadlAdcK8GvsAdgcJRdvpNosJC','아티스트8',31,'2023-08-04 00:59:13',0,0,NULL,NULL,'ARTIST',NULL,'아티스트8'),(17,1,1,'asdf9@naver.com','{bcrypt}$2a$10$fvmfLRmkbXesXs7bnr7.3uKNyZmEadlAdcK8GvsAdgcJRdvpNosJC','아티스트9',31,'2023-08-04 03:00:57',0,0,NULL,NULL,'ARTIST',NULL,'아티스트9'),(18,1,1,'asdf10@naver.com','{bcrypt}$2a$10$fvmfLRmkbXesXs7bnr7.3uKNyZmEadlAdcK8GvsAdgcJRdvpNosJC','아티스트10',31,'2023-08-04 03:00:58',0,0,NULL,NULL,'ARTIST',NULL,'아티스트10'),(19,1,1,'asdf11@naver.com','{bcrypt}$2a$10$fvmfLRmkbXesXs7bnr7.3uKNyZmEadlAdcK8GvsAdgcJRdvpNosJC','아티스트11',31,'2023-08-04 03:00:58',0,0,NULL,NULL,'ARTIST',NULL,'아티스트11'),(20,1,1,'asdf12@naver.com','{bcrypt}$2a$10$fvmfLRmkbXesXs7bnr7.3uKNyZmEadlAdcK8GvsAdgcJRdvpNosJC','아티스트12',31,'2023-08-04 03:00:59',0,0,NULL,NULL,'ARTIST',NULL,'아티스트12'),(21,1,1,'asdf13@naver.com','{bcrypt}$2a$10$fvmfLRmkbXesXs7bnr7.3uKNyZmEadlAdcK8GvsAdgcJRdvpNosJC','아티스트13',31,'2023-08-04 03:10:02',0,0,NULL,NULL,'ARTIST',NULL,'아티스트13'),(22,18,13,'thswogud@ggmail.com','{bcrypt}$2a$10$YxQ04S4j4p4M8DeLWuvEbuwfT5c3E7itvcYgkxJl4DKL2WKynjYFe','손재형',NULL,'2023-08-16 16:49:27',0,0,NULL,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTM0MDg5NzB9.GA9B2IELgZDeUANwasDTRVpBJ7zyWJmtp85IkbN9HesCtZCeHpyz6umR2k5N8iKSVK9wpsVRetM-tTiJUl8NIw','ARTIST',NULL,'손재형'),(23,18,14,'wlsckdgh@ggmail.com','{bcrypt}$2a$10$Y19H7gCFYJEPQx0ts0iuduxvsOTsOGpdBrb.I5uwPLlrs8L7e6RUu','진창호',NULL,'2023-08-16 16:49:44',0,0,NULL,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTM0NTExOTV9.7gtnmNiiZWLAhBp-IXNqvihJddN2KSGuh64Ky8kVrNA_99jAG6g7AjtoqkRibTXeox9ui1A_uqQF6Yh0t5PyKw','ARTIST',NULL,'진창호'),(24,18,12,'wjdwnsdn@ggmail.com','{bcrypt}$2a$10$uLiC0wsyZc5f4UpNi/hj2OCaqNzhfiwVA2cbkfKS0k/SCtyj8ctK6','정준우',NULL,'2023-08-16 16:49:57',0,0,NULL,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTM0NjgwODB9.lGYnM-PbeJBCTbzYFdOVvJ9Mr3QOeJqqW3ThPQKxuGU7MD5F96ldcnTEK4gHuREGjMWp8rIJgRv2RiVnrrwLaQ','ARTIST',NULL,'정준우'),(25,18,15,'chldudckd@ggmail.com','{bcrypt}$2a$10$2r8RfLARcsQ1zpTcucxunOwo2/n1e2F3yxhuxfPK8nTcxjFqi1L0C','최영창',NULL,'2023-08-16 16:50:12',0,0,NULL,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTM0NjE3NjV9.9WVed7P0_eMA26KO5YcfdVRUTn7CWYusvMLZs6Uowc9xAkXzyYlAojyhO02k88P73T7mvjlpSP5uIoTFdc90eg','ARTIST',NULL,'최영창'),(26,18,16,'rlarudtnr@ggmail.com','{bcrypt}$2a$10$5K2Gucpp94jZrbUyzEAITOiDz4QuhDPkFDS3XHW8KwD.bFPFxx58m','김경숙',NULL,'2023-08-16 16:50:22',0,0,NULL,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTM0NDk2ODJ9.Da5sR7fqg3-6p0YRa-luSwp9BmHfPIXI6BdpI9eCxYCJhFd7_BBRlMia_gMfoCwCwkt8lq4vEkv7FZSKNetM3g','ARTIST',NULL,'김경숙'),(27,18,11,'chlrkdus@ggmail.com','{bcrypt}$2a$10$647xTL/TKSGsUSWgHHeiPujkH7m3MuWDUf7lLZwI05H1tLX1mRaGi','최가연',NULL,'2023-08-16 16:50:33',0,0,NULL,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTM0NTU4MzR9.NK2B89e04wF-eo7TYK-2OnU9Pr6S6S52oUimawwTza-ai_iLbx4rziUfsd14zRdUU_-_NydbobGV6xZaTqc-fA','ARTIST',NULL,'최가연'),(28,18,1,'ourola@ggmail.com','{bcrypt}$2a$10$jXETPbPufSBFs5WOkmBaOupAiaGcBAW6OQIv/WUYO/q4RgZTX8Gvi','ourola',NULL,'2023-08-16 17:02:54',0,1,NULL,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTM0ODQzMDR9.PKrU-fNBb-5iqzNt9qjquqU82v3Xn90GDmdjTFn_xmAmgEIz7dwk3evs3-4NULVmWVyR0MY2kz-ubNlSY9J5gg','CHANNEL_ADMIN',NULL,NULL);
/*!40000 ALTER TABLE `artist_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `membership_id` int DEFAULT NULL,
  `concert_id` int DEFAULT NULL,
  `payment_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_fan_user_TO_bill_1` (`user_id`),
  KEY `FK_membership_pay_TO_bill_1` (`membership_id`),
  KEY `FK_online_concert_TO_bill_1` (`concert_id`),
  CONSTRAINT `FK_fan_user_TO_bill_1` FOREIGN KEY (`user_id`) REFERENCES `fan_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_membership_pay_TO_bill_1` FOREIGN KEY (`membership_id`) REFERENCES `membership_pay` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_online_concert_TO_bill_1` FOREIGN KEY (`concert_id`) REFERENCES `online_concert` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
INSERT INTO `bill` VALUES (1,17,1,NULL,'2023-08-02 05:32:03'),(4,17,NULL,4,'2023-07-07 15:00:00'),(6,17,NULL,1,'2023-08-17 17:36:41'),(7,16,NULL,2,'2023-08-17 18:00:36'),(8,1,8,NULL,'2023-08-17 19:42:10');
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookmark`
--

DROP TABLE IF EXISTS `bookmark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookmark` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `feed_id` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_fan_user_TO_bookmark_1` (`user_id`),
  KEY `FK_feed_TO_bookmark_1` (`feed_id`),
  KEY `artist_id` (`artist_id`),
  CONSTRAINT `FK_fan_user_TO_bookmark_1` FOREIGN KEY (`user_id`) REFERENCES `fan_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_feed_TO_bookmark_1` FOREIGN KEY (`feed_id`) REFERENCES `feed` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookmark`
--

LOCK TABLES `bookmark` WRITE;
/*!40000 ALTER TABLE `bookmark` DISABLE KEYS */;
INSERT INTO `bookmark` VALUES (18,16,29,NULL),(31,16,26,NULL),(63,1,101,NULL),(76,1,117,NULL),(79,17,117,NULL),(80,NULL,119,9),(81,17,119,NULL),(82,1,129,NULL),(85,1,118,NULL),(102,16,135,NULL),(105,17,110,NULL),(106,17,152,NULL),(109,1,168,NULL);
/*!40000 ALTER TABLE `bookmark` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chatting`
--

DROP TABLE IF EXISTS `chatting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chatting` (
  `id` int NOT NULL AUTO_INCREMENT,
  `live_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `chat_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `content` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_live_TO_chatting_1` (`live_id`),
  KEY `FK_fan_user_TO_chatting_1` (`user_id`),
  CONSTRAINT `FK_fan_user_TO_chatting_1` FOREIGN KEY (`user_id`) REFERENCES `fan_user` (`id`),
  CONSTRAINT `FK_live_TO_chatting_1` FOREIGN KEY (`live_id`) REFERENCES `live` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chatting`
--

LOCK TABLES `chatting` WRITE;
/*!40000 ALTER TABLE `chatting` DISABLE KEYS */;
/*!40000 ALTER TABLE `chatting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  `feed_id` int DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `re_comment_count` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_fan_user_TO_comment_1` (`user_id`),
  KEY `FK_artist_user_TO_comment_1` (`artist_id`),
  KEY `FK_feed_TO_comment_1` (`feed_id`),
  CONSTRAINT `FK_artist_user_TO_comment_1` FOREIGN KEY (`artist_id`) REFERENCES `artist_user` (`id`),
  CONSTRAINT `FK_fan_user_TO_comment_1` FOREIGN KEY (`user_id`) REFERENCES `fan_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_feed_TO_comment_1` FOREIGN KEY (`feed_id`) REFERENCES `feed` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,1,NULL,1,'111111111111111111111111','2023-07-25 15:44:22','2023-07-25 06:51:58',0),(2,NULL,NULL,1,'fdjskafjdsklafjdklsafj','2023-07-27 15:47:32','2023-07-27 15:47:32',2),(6,16,NULL,6,'와','2023-08-02 05:02:02','2023-08-02 05:02:02',0),(12,16,NULL,15,'헤헤','2023-08-02 06:21:45','2023-08-02 06:21:45',0),(14,16,NULL,15,'안녕히 가세요~~','2023-08-02 06:33:41','2023-08-02 06:33:41',0),(17,1,NULL,15,'aa가 왔습니다.','2023-08-02 06:40:36','2023-08-02 06:40:36',0),(18,1,NULL,15,'진을 진짜로 좋아하는 진창호입니다','2023-08-02 08:09:26','2023-08-02 08:09:26',0),(29,16,NULL,15,'헤헤','2023-08-03 00:24:33','2023-08-03 00:24:33',0),(31,16,NULL,15,'안녕하세요','2023-08-03 15:16:18','2023-08-03 15:16:18',0),(32,16,NULL,15,'안녕하세요','2023-08-03 15:52:24','2023-08-03 15:52:24',0),(33,16,NULL,15,'헤헤','2023-08-03 16:03:59','2023-08-03 16:03:59',0),(34,16,NULL,15,'zzzzzzzzzzzzzzzzzzzzzz','2023-08-03 16:06:15','2023-08-03 16:06:15',0),(35,16,NULL,26,'멋져요!!','2023-08-03 17:29:16','2023-08-03 17:29:16',0),(36,16,NULL,26,'멋져용!!','2023-08-03 17:32:20','2023-08-03 17:32:20',0),(37,16,NULL,25,'안녕하세요','2023-08-04 01:41:53','2023-08-04 01:41:53',0),(40,16,NULL,30,'서에번쩍','2023-08-04 13:16:48','2023-08-04 13:16:48',0),(41,16,NULL,30,'@홍길동 대댓글 흉내~','2023-08-04 13:19:03','2023-08-04 13:19:03',0),(42,16,NULL,30,'','2023-08-04 13:35:14','2023-08-04 13:35:14',0),(46,16,NULL,30,'안녕하세요','2023-08-04 13:37:06','2023-08-04 13:37:06',0),(60,16,NULL,28,'안녕하세요','2023-08-04 15:56:42','2023-08-04 15:56:42',0),(61,16,NULL,28,'안녕하세요','2023-08-04 15:59:20','2023-08-04 15:59:20',0),(66,16,NULL,28,'안녕하세요','2023-08-04 16:06:54','2023-08-04 16:06:54',0),(69,16,NULL,31,'안녕하세요','2023-08-04 16:08:21','2023-08-04 16:08:21',0),(70,16,NULL,31,'안녕하세요','2023-08-04 16:08:31','2023-08-04 16:08:31',0),(72,16,NULL,31,'배고파요','2023-08-04 16:08:59','2023-08-04 16:08:59',0),(73,16,NULL,30,'안녕하세요','2023-08-04 16:13:53','2023-08-04 16:13:53',0),(74,16,NULL,28,'헤헷','2023-08-04 16:14:34','2023-08-04 16:14:34',0),(75,16,NULL,30,'ㅋ','2023-08-04 16:47:37','2023-08-04 16:47:37',0),(76,16,NULL,27,'하이하이','2023-08-05 14:33:02','2023-08-05 14:33:02',0),(82,17,NULL,39,'안ㄴ여하세요','2023-08-11 12:32:20','2023-08-11 12:32:20',0),(92,17,NULL,42,'cfmhmfr','2023-08-12 15:57:49','2023-08-12 15:57:49',0),(96,17,NULL,44,'다','2023-08-13 17:14:43','2023-08-13 17:14:43',0),(97,17,NULL,44,'환영해','2023-08-13 17:14:47','2023-08-13 17:14:47',0),(98,17,NULL,44,'히히','2023-08-13 23:02:06','2023-08-13 23:02:06',0),(101,17,NULL,44,'헤헤','2023-08-13 23:17:22','2023-08-13 23:17:22',0),(102,17,NULL,44,'배고파용','2023-08-13 23:17:27','2023-08-13 23:17:27',0),(103,17,NULL,44,'안녕하세요 너무 배고픈데 어떻게 해야할 지 모르겠네요 ㅎ헤ㅐ헤헤헤헿','2023-08-13 23:17:43','2023-08-13 23:17:43',0),(104,17,NULL,95,'헤이','2023-08-13 23:35:10','2023-08-13 23:35:10',0),(105,17,NULL,95,'헤이헤이','2023-08-13 23:35:11','2023-08-13 23:35:11',0),(106,17,NULL,95,'헤이헤이헤이','2023-08-13 23:35:13','2023-08-13 23:35:13',0),(107,17,NULL,95,'헤이헤이헤이','2023-08-13 23:35:16','2023-08-13 23:35:16',0),(108,17,NULL,95,'헤이헤이헤이','2023-08-13 23:35:18','2023-08-13 23:35:18',0),(109,17,NULL,95,'헤이헤이헤이','2023-08-13 23:35:21','2023-08-13 23:35:21',0),(110,17,NULL,95,'gpgp','2023-08-14 00:05:37','2023-08-14 00:05:37',0),(114,17,NULL,100,'헤헤','2023-08-15 01:05:14','2023-08-15 01:05:14',0),(116,1,NULL,101,'ㄱㅇㅇ','2023-08-15 23:22:11','2023-08-15 23:22:11',0),(117,1,NULL,100,'헤헿','2023-08-15 23:23:01','2023-08-15 23:23:01',0),(118,1,NULL,100,'헤헷','2023-08-15 23:23:16','2023-08-15 23:23:16',0),(120,1,NULL,100,'헤헹','2023-08-15 23:25:00','2023-08-15 23:25:00',0),(130,17,NULL,118,'멋져요','2023-08-16 10:34:51','2023-08-16 10:34:51',0),(131,NULL,9,117,'내감사합 니다','2023-08-16 10:39:56','2023-08-16 10:39:56',0),(135,1,NULL,118,'와 진짜 여기서 못나가겠음','2023-08-16 12:11:06','2023-08-16 12:11:06',0),(136,2,NULL,127,'dfsafdsa','2023-08-16 13:08:18','2023-08-16 13:08:18',0),(137,1,NULL,129,'옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! 옥냥이! ','2023-08-16 13:13:49','2023-08-16 13:13:49',0),(138,1,NULL,129,'아아 당신의 넓은 이마가 갖고싶어요','2023-08-16 13:14:01','2023-08-16 13:14:01',0),(140,1,NULL,130,'볼때마다 개안하는중','2023-08-16 13:19:50','2023-08-16 13:19:50',0),(141,1,NULL,129,'이마 주름 핥고싶다','2023-08-16 13:20:11','2023-08-16 13:20:11',0),(142,1,NULL,118,'좋은건 크게 봐야지','2023-08-16 13:21:11','2023-08-16 13:21:11',0),(156,1,NULL,140,'사이트 오타 난거 같아요. 메이트리님인데 킨더조이로 되어있네요 ㅠㅠ','2023-08-16 14:10:59','2023-08-16 14:10:59',0),(157,17,NULL,135,'sdafasdf','2023-08-16 14:14:16','2023-08-16 14:14:16',0),(167,1,NULL,118,'나건씨의 신상을 찾습니다 ㅎㅎ','2023-08-17 12:00:28','2023-08-17 12:00:28',0),(168,NULL,27,152,'냥이 귀엽','2023-08-17 12:02:44','2023-08-17 12:02:44',0),(169,NULL,23,151,'예쁘네용','2023-08-17 12:04:31','2023-08-17 12:04:31',0),(170,NULL,27,156,'러키더키~','2023-08-17 12:05:21','2023-08-17 12:05:21',0),(171,1,NULL,168,'정말 좋아요!','2023-08-17 15:31:24','2023-08-17 15:31:24',0),(172,67,NULL,159,'하하하','2023-08-17 15:40:31','2023-08-17 15:40:31',0),(173,67,NULL,159,'담엔 움짤도 같이 올려주세요~~','2023-08-17 15:40:44','2023-08-17 15:40:44',0),(174,67,NULL,157,'나도 봐야겠다!!','2023-08-17 15:41:07','2023-08-17 15:41:07',0),(175,67,NULL,156,'여기 가면 만날 수 있어?','2023-08-17 15:41:27','2023-08-17 15:41:27',0),(176,16,NULL,171,'테스트','2023-08-17 15:41:27','2023-08-17 15:41:27',0),(177,67,NULL,154,'??','2023-08-17 15:41:46','2023-08-17 15:41:46',0),(178,67,NULL,152,'꺄ㅑㅑㅑㅑㅑ','2023-08-17 15:41:58','2023-08-17 15:41:58',0),(179,67,NULL,151,'푹 쉬어요','2023-08-17 15:42:09','2023-08-17 15:42:09',0),(180,67,NULL,150,'기대할게요ㅎㅎ','2023-08-17 15:42:19','2023-08-17 15:42:19',0),(181,67,NULL,147,'조심조심!','2023-08-17 15:42:29','2023-08-17 15:42:29',0),(182,67,NULL,167,'생일 축하해요!','2023-08-17 15:47:58','2023-08-17 15:47:58',0);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emailtoken`
--

DROP TABLE IF EXISTS `emailtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emailtoken` (
  `id` varchar(45) NOT NULL,
  `expired` tinyint(1) DEFAULT '1',
  `expiration_date` datetime DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emailtoken`
--

LOCK TABLES `emailtoken` WRITE;
/*!40000 ALTER TABLE `emailtoken` DISABLE KEYS */;
INSERT INTO `emailtoken` VALUES ('075abff7-d4d3-4eb5-900d-84b797bf8814',1,'2023-08-03 07:39:19',18),('0bfb7b62-8124-4648-a88b-f11c2b175e2d',0,'2023-08-03 07:55:53',18),('17c66cd4-0077-44d3-ba02-533276dfa5a8',1,'2023-08-03 09:57:00',18),('1b5e0768-74a5-422b-9616-b2705dcd54dd',1,'2023-08-03 10:01:24',18),('2ee354a3-791b-4cbc-86d5-e1fea65249a6',1,'2023-08-03 07:56:42',18),('34812ca5-1998-449f-9ae3-1028486a16d9',0,'2023-08-02 07:29:19',18),('44c9590e-1e07-46f5-8c16-7ea844d657e8',0,'2023-08-01 03:53:19',11),('46e752cf-a935-408f-a633-dfc36267623c',1,'2023-08-03 07:08:36',18),('55f06272-e4a2-4758-9cbe-45af6abdab25',0,'2023-08-01 03:54:12',11),('5d678dea-6f2b-4cef-b0f8-faafa96f187f',1,'2023-08-03 07:14:53',18),('626d04f8-60ed-43a8-8831-0b3175026d46',0,'2023-08-02 07:29:50',18),('6d449263-89b6-4995-8278-efeb1b62f231',1,'2023-08-03 10:25:24',18),('6e5c2568-77e2-4a0a-8232-d2fdddeb3fcd',1,'2023-08-03 07:15:32',18),('76d24754-ec27-4660-8ea9-833109c08c3b',1,'2023-08-02 08:19:58',18),('8188ad46-80f3-4179-b0ff-7cb856b05fc4',1,'2023-08-03 10:32:56',18),('883e84a4-3767-4a11-ad97-dc466c44ec40',1,'2023-08-02 07:42:02',18),('a2f47404-b6d0-4272-8946-a8e711753833',1,'2023-08-03 07:47:17',18),('ad348e2b-6185-43f9-96ba-1518bb295cd5',1,'2023-08-03 10:10:05',18),('b355e292-85d6-4f5d-9889-45fc5eb5bc5e',1,'2023-08-03 08:18:10',21),('b55c0d06-1ea7-495a-a847-bf3da2766a7b',1,'2023-08-03 07:48:13',18),('b650d4e8-33f7-4485-891d-7130d52e72b6',1,'2023-08-03 07:40:18',18),('c9ac0390-8bcd-4b38-9cf0-8cd83679c901',1,'2023-08-02 07:43:34',18),('ce0b6599-1ca7-4071-9622-6aad97e8579c',1,'2023-08-03 09:56:18',18),('d8b7601a-30d3-4e73-b548-441565b43c0e',0,'2023-08-03 00:47:56',16),('fa3d183c-ea06-41ec-999c-f897c44398cc',1,'2023-08-02 08:30:08',18),('ff943dfd-7ef4-4643-bc80-f1bf9e0d785f',1,'2023-08-03 07:58:45',18);
/*!40000 ALTER TABLE `emailtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fan_user`
--

DROP TABLE IF EXISTS `fan_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fan_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `profile_id` int DEFAULT '1',
  `email` varchar(1000) DEFAULT NULL,
  `password` varchar(1000) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `regist_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `resign` tinyint(1) DEFAULT '0',
  `is_admin` tinyint(1) DEFAULT '0',
  `refresh_token` varchar(1000) DEFAULT NULL,
  `tel` varchar(15) DEFAULT NULL,
  `role` varchar(30) DEFAULT 'USER',
  `nickname` varchar(100) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `social_id` varchar(45) DEFAULT NULL,
  `social_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_profile_file_TO_fan_user_1` (`profile_id`),
  CONSTRAINT `FK_profile_file_TO_fan_user_1` FOREIGN KEY (`profile_id`) REFERENCES `profile_file` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fan_user`
--

LOCK TABLES `fan_user` WRITE;
/*!40000 ALTER TABLE `fan_user` DISABLE KEYS */;
INSERT INTO `fan_user` VALUES (1,1,'aa@aa.com','{bcrypt}$2a$10$AbU6DOm7sMPZed/vTY6WcO63NQPVeAj.JoZi69gS5XKW95O3Jmoc6','김싸피',123,'2023-07-25 13:39:43',0,0,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTM0ODI2MzF9.kIM-Psor1DtLbp0nrd_ZhEZ2GBFUDsVdV5dMR1Biv-GvJjdQqEGog8NhHh2JALnkVEjWwjAbEcppaC1kiAtfxw','01011112222','USER','오로라 팬','2000-07-22',NULL,NULL),(2,1,'bb@bb.com','{bcrypt}$2a$10$co3bFZbM5cFHSp.MPfhOWO.I/wWlCsLVhmPE61H25820K7.68nGOm','이싸피',123,'2023-07-25 13:40:18',0,1,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTIxNzI2NDF9.yqaN47aCO0D_4s9ufm0ZwE_bSxCnOwpHrkynBv_pAy3ZnVOhrPswcqcE1oYt89_gUzX18Mj0u8rKXdAMLntZkw','01022223333','ADMIN','admin',NULL,NULL,NULL),(3,1,'cc@cc.com','{bcrypt}$2a$10$G9NPD31pEJAjbbdIKV56qu2WuTN1b1bcneg3NoPppYVLe6mucOKQy','최싸피',123,'2023-07-25 13:40:56',0,0,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTMzNzk3NTR9.1Y8l0pBzcqD9LJORSnmSQ2QbtSr7KibqQEjwHrnshYdHSxoZXuUm-udgb-WqlHp5HBDOh9TXUjE4soeE2UO5ww','01033334444','USER',NULL,NULL,NULL,NULL),(4,1,'dddd@dd.com','{bcrypt}$2a$10$4NjcSl6qF2hTYuRhpISBb.GydoYvQaDUgi/KNn9PbhJbMrcQLwUay','진싸피',123,'2023-07-25 14:57:21',0,1,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTMzNjYxMzh9.p7xdM3PlHgOYPsKhp_M-wbwLFq6P1s45T0zbzdVX-Y4fzMCPyjYSz_flYRcXAdrRcK9ITsD4ljmWxzZnX8wLxA','01033334444','USER',NULL,NULL,NULL,NULL),(5,1,'eeee@ee.com','{bcrypt}$2a$10$gTiigJ/P0MKs.ShUGbAMy.XhfFF39rsj5ZLCgZC8B5KBRSbUzOKTa','손싸피',123,'2023-07-26 13:41:12',0,0,NULL,'01033334444','USER',NULL,NULL,NULL,NULL),(6,1,'fffff@ff.com','{bcrypt}$2a$10$epThXQucdIwojSMq.5e.PeOeqKiEK8KEn7iuMY40SaRKxHAd.Icji','정싸피',123,'2023-07-26 14:37:21',0,0,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTE2Mzg3NDV9.5FB62IMRTFepi_oniN7KOVjmksX1SARXGvPitLnwnzogahGx8r295dRIrkY2kq6hTl6dO3BXY5542r6F-mkQsA','01033334444','USER',NULL,NULL,NULL,NULL),(13,1,'gg@gg.com','{bcrypt}$2a$10$LmMgCs.2sL3dpaA/ACleIeUXRxT//NCssyn9RuCyvYyi2mxXj3fju','세븐틴',123,'2023-08-01 13:51:06',0,0,NULL,'01033334444','USER','세븐티','2000-01-01',NULL,NULL),(16,3,'test123@gmail.com','{bcrypt}$2a$10$2xtcW2v3/xqWI2H22IdLcuhtoEwyYkn1EdRqiq.kxy02hGwB.SeWG','홍길동',18,'2023-08-02 01:35:50',0,0,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTM0ODYyMTR9.MYNhP40tcaaYeqvCLkFCrqdidRLB5CArgifkWKbNOwE-3b-ABitT5JqF7BVxHkXdGRUe4zy37xNKTZYz5Z0_YQ','01012345678','USER','동에번쩍서에번쩍','1998-05-06',NULL,NULL),(17,10,'wonwoo@naver.com','{bcrypt}$2a$10$XIQkLbF5AI46XB3UAoeEFue4GL.nLvJtiSlHOyMG5a06ZxiMNLBeu','전원우',28,'2023-08-02 03:20:00',0,0,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTM0NzEyMzB9.zxvzPXT_j_C33hdTExQzJrAhIDPXgCUg6LqhVInf2b8UfTqPoC9F557Xz8tkmF_024v5bCkReiKOh31Uv-FAGw','01012345678','USER','Vv전원우vV','1996-07-17',NULL,NULL),(18,1,'thswogud02@naver.com','{bcrypt}$2a$10$qLJvmvJE8HDDcQoq.V4mouVyowqrtWWLDOjmR1WyvizM3d.5yCyp6','테스트',NULL,'2023-08-02 07:23:44',0,0,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTM0NjA5NTJ9.d6Aj3oRvNYdq3BirUNWjg3AiCn0fqXMGB99G3hwP5eSJNa3VAkjNHwHPq5FmO2Jo9ATFuX3oD65r2lU6Nforhw',NULL,'USER','21333aa','2023-08-01',NULL,NULL),(49,1,'ssafy@ruu.kr','{bcrypt}$2a$10$hQGsMsuQSGnzsIDQ.J/F4.Minf6gMYt9c7WlPL4k8.9tmGf9kuVN2','김싸피',NULL,'2023-08-11 12:56:06',0,0,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTI5MzU3ODJ9.7I19xzepjSH2HyfP2DnNCDRWVRpbi-2133c385dsBPO3ROyRwm0oTjmn-uKN6BWgqfT1BHuixMoggbjESe6Fmw',NULL,'USER','ssafy','2023-08-02',NULL,NULL),(67,1,'rola@ggmail.com','{bcrypt}$2a$10$hRhQ0yIpor/6OBXbIdmRJeQFPnxhtwULt8WaFWU5.tycZ08c1qs72','옥 암스트롱',NULL,'2023-08-17 15:37:19',0,0,'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE2OTM0ODcyOTd9.YfqsknCF3f1XXHveOpCO4UQObCProeohWjkHkjnMxoUM_thMJ1gOt_r2WXMk3PcvqFs_Oqlr5K-YRMmtuK2Kbw',NULL,'USER','옥 암스트롱','2000-08-17',NULL,NULL);
/*!40000 ALTER TABLE `fan_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feed`
--

DROP TABLE IF EXISTS `feed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feed` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `content` varchar(2000) DEFAULT NULL,
  `read_count` int DEFAULT '0',
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `like` int DEFAULT '0',
  `type` int DEFAULT NULL,
  `comment_count` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_group_channel_TO_feed_1` (`group_id`),
  KEY `FK_fan_user_TO_feed_1` (`user_id`),
  KEY `FK_artist_user_TO_feed_1` (`artist_id`),
  CONSTRAINT `FK_artist_user_TO_feed_1` FOREIGN KEY (`artist_id`) REFERENCES `artist_user` (`id`),
  CONSTRAINT `FK_fan_user_TO_feed_1` FOREIGN KEY (`user_id`) REFERENCES `fan_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_group_channel_TO_feed_1` FOREIGN KEY (`group_id`) REFERENCES `group_channel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=177 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feed`
--

LOCK TABLES `feed` WRITE;
/*!40000 ALTER TABLE `feed` DISABLE KEYS */;
INSERT INTO `feed` VALUES (1,1,1,NULL,'1111','세븐틴 피드',NULL,NULL,NULL,NULL,NULL,0),(5,2,1,NULL,'eeeeeee','뉴-진스 피드',0,'2023-07-25 13:42:37','2023-07-25 13:42:37',1,1,0),(6,3,1,1,'djfkdlajfdklsafj','오마이걸 피드',0,'2023-07-25 15:34:22','2023-07-25 15:34:22',0,1,0),(7,3,1,1,'1111','22222222',0,'2023-07-25 15:37:34','2023-07-25 15:37:34',0,1,0),(11,1,1,NULL,'제목111111','내용11111',0,'2023-07-31 15:16:42','2023-07-31 15:16:42',0,NULL,0),(15,6,NULL,6,'진이에요','진입니다',0,'2023-08-02 01:21:27','2023-08-02 01:21:27',2,2,9),(16,6,NULL,7,'지민이에요','지민입니다',0,'2023-08-02 01:34:08','2023-08-02 01:34:08',1,2,0),(21,6,16,NULL,'이미지','없지',0,'2023-08-02 05:53:48','2023-08-02 05:53:48',0,1,0),(22,6,16,NULL,'이미지','있',0,'2023-08-02 05:54:36','2023-08-02 05:54:36',0,1,0),(23,6,NULL,7,'지민 두번째에요','지민 두번째입니다.',0,'2023-08-02 16:57:47','2023-08-02 16:57:47',1,2,0),(24,6,NULL,7,'지민 세번째에요','지민 세번째입니다.',0,'2023-08-03 00:46:46','2023-08-03 00:46:46',1,2,0),(25,1,NULL,3,'에스쿱스에요','에스쿱스입니다',0,'2023-08-03 17:21:47','2023-08-03 17:21:47',1,2,1),(26,1,NULL,3,'에스쿱스이에요','에스쿱스입니다',0,'2023-08-03 17:21:48','2023-08-03 17:21:48',1,2,2),(27,1,NULL,3,'에스쿱스이에에요','에스쿱스입니다아',0,'2023-08-03 17:30:53','2023-08-03 17:30:53',1,2,1),(28,1,NULL,10,'진이에요','진입니다',0,'2023-08-04 01:00:46','2023-08-04 01:00:46',1,2,4),(29,1,NULL,10,'진이에요','진입니다',0,'2023-08-04 01:00:48','2023-08-04 01:00:48',1,2,0),(30,1,NULL,10,'진이에요','진입니다',0,'2023-08-04 01:00:49','2023-08-04 01:00:49',1,2,5),(31,1,NULL,10,'진이에요','진입니다',0,'2023-08-04 13:42:24','2023-08-04 13:42:24',1,2,3),(39,1,NULL,10,'진이에요','진입니다',0,'2023-08-05 23:59:59','2023-08-06 02:17:04',2,2,1),(40,6,NULL,7,'지민 세번째에요','지민 세번째입니다.',0,'2023-08-06 02:18:34','2023-08-06 02:18:34',0,2,0),(41,6,NULL,7,'지민 세번째에요','지민 세번째입니다.',0,'2023-08-06 13:43:56','2023-08-06 13:43:56',0,2,0),(42,1,NULL,11,'지민 세번째에요','지민 세번째입니다.',0,'2023-08-06 14:39:13','2023-08-06 14:39:13',1,2,1),(43,1,NULL,11,'지민 세번째에요','지민 세번째입니다.',0,'2023-08-06 14:39:14','2023-08-06 14:39:14',0,2,0),(44,1,NULL,10,'진 세번째에요','진 세번째입니다.',0,'2023-08-06 15:03:53','2023-08-06 15:03:53',1,2,7),(45,1,NULL,9,NULL,'dsfdsafsdaf',0,'2023-08-10 10:44:47','2023-08-10 10:44:47',0,NULL,0),(46,1,NULL,9,NULL,NULL,0,'2023-08-10 10:45:00','2023-08-10 10:45:00',0,NULL,0),(47,1,NULL,9,NULL,NULL,0,'2023-08-10 10:47:43','2023-08-10 10:47:43',0,NULL,0),(48,1,NULL,9,NULL,NULL,0,'2023-08-10 10:47:54','2023-08-10 10:47:54',0,NULL,0),(94,1,NULL,10,NULL,'진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.',0,'2023-08-13 23:22:44','2023-08-13 23:22:44',0,2,0),(95,1,NULL,10,NULL,'진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진',0,'2023-08-13 23:31:11','2023-08-13 23:31:11',0,2,7),(98,1,NULL,9,NULL,'123213',0,'2023-08-14 15:44:52','2023-08-14 15:44:52',0,2,0),(99,1,NULL,10,NULL,'진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진',0,'2023-08-14 23:17:19','2023-08-14 23:17:19',0,2,0),(100,1,NULL,10,NULL,'진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진',0,'2023-08-14 23:17:20','2023-08-14 23:17:20',1,2,4),(101,2,1,NULL,NULL,'팜하니 귀엽당',0,'2023-08-15 23:21:08','2023-08-15 23:21:08',2,1,1),(109,13,16,NULL,NULL,'gdgd',0,'2023-08-16 09:35:49','2023-08-16 09:35:49',0,1,0),(110,1,NULL,9,NULL,'날짜 필터 체크\r\n',0,'2023-08-16 10:15:49','2023-08-16 10:15:49',1,2,0),(117,1,16,NULL,NULL,'진짜 세븐틴 너무 좋지 않아요?',0,'2023-08-16 10:30:36','2023-08-16 10:30:36',1,1,1),(118,2,1,NULL,NULL,'팜하니 움짤도좀ㅠㅠ',0,'2023-08-16 10:33:56','2023-08-16 10:33:56',4,1,6),(119,1,NULL,9,NULL,'아! 뭐가! 문젠데!',0,'2023-08-16 10:44:32','2023-08-16 10:44:32',1,2,0),(125,1,2,NULL,NULL,'bb 관리자로 작성중',0,'2023-08-16 13:02:35','2023-08-16 13:02:35',0,1,0),(126,1,2,NULL,NULL,'여러분 눈이 좋은 사슴을 뭐라하는지 아세요?\r\n굿 아이(eye) 디어~~',0,'2023-08-16 13:02:38','2023-08-16 13:02:38',0,1,0),(127,1,2,NULL,NULL,'ㅠㅠ',0,'2023-08-16 13:02:47','2023-08-16 13:02:47',0,1,1),(128,1,1,NULL,NULL,'실수로피드를지워버렸더니또다시날짜피드가작동하지않는다.\r\n나는여전히이유를알수가없다.',0,'2023-08-16 13:04:54','2023-08-16 13:04:54',1,1,0),(129,1,2,NULL,NULL,'눈이 좋은 사슴은 굿 아이디어, 그런 당신의 눈동자에 치얼스~',0,'2023-08-16 13:12:54','2023-08-16 13:12:54',2,1,3),(130,2,1,NULL,NULL,'미모 돌았',0,'2023-08-16 13:19:08','2023-08-16 13:19:08',3,1,1),(135,1,NULL,9,NULL,'지금부터 여기는 옥체스터 유나이티드 게시판이다.',0,'2023-08-16 13:29:29','2023-08-16 13:29:29',1,2,1),(136,1,2,NULL,NULL,'바카미타이...',0,'2023-08-16 13:30:27','2023-08-16 13:30:27',1,1,0),(140,14,1,NULL,NULL,'여기가 메이트리님 팬피드인가요?',0,'2023-08-16 14:10:33','2023-08-16 14:10:33',0,1,1),(142,1,17,NULL,NULL,'맨 유 차 이',0,'2023-08-16 14:52:33','2023-08-16 14:52:33',0,1,0),(144,13,1,NULL,NULL,'노래가 계속 맴돌아...',0,'2023-08-16 15:36:06','2023-08-16 15:36:06',0,1,0),(147,18,NULL,27,NULL,'안녕!! 첫 피드!!\r\n비 오는데 다들 조심해요?',0,'2023-08-16 00:00:16','2023-08-17 00:00:16',1,2,1),(149,18,NULL,22,NULL,'두두둥장!!! 그냥 이렇게 써도 되나?ㅋㅋㅋㅋ\r\n다들 반가워용?',0,'2023-08-16 00:33:22','2023-08-17 00:33:22',1,2,0),(150,18,NULL,24,NULL,'오늘 UCC 촬영 너무 재밌었어요!  맛있는것도 잔뜩 먹구 힘이 납니당?\r\n곧 볼 수 있을거야!',0,'2023-08-17 00:48:25','2023-08-17 00:48:25',1,2,1),(151,18,NULL,23,NULL,'오늘 휴식날!!',0,'2023-08-17 09:12:12','2023-08-17 09:12:12',1,2,2),(152,18,NULL,25,NULL,'첫글 작성하러 두두둥장! \r\n무슨 글을 써야하지? 무슨 사진을 올리지? 하면서 갤러리를 보다가 대학교에서 항상 보이던 고양이사진을 발견!\r\n나만 볼수 없어서 바로 올립니다!!!',0,'2023-08-17 09:19:14','2023-08-17 09:19:14',4,2,2),(154,18,NULL,26,NULL,'도라방스....',0,'2023-08-17 11:44:10','2023-08-17 11:44:10',1,2,1),(156,18,NULL,23,NULL,'구미의 러키더키라는 카페입니다!! 귀엽죠 ㅎㅎ?',0,'2023-08-17 11:52:55','2023-08-17 11:52:55',3,2,2),(157,18,NULL,27,NULL,'어제 더글로리 봤어요ㅎㅎ?',0,'2023-08-17 13:25:41','2023-08-17 13:25:41',2,2,1),(159,18,NULL,27,NULL,'눈이 좋은 사슴은???\r\n\r\n\r\n\r\n\r\n\r\n굿 아이디어~~~\r\n\r\n??????????',0,'2023-08-17 13:43:33','2023-08-17 13:43:33',2,2,2),(161,18,1,NULL,NULL,'재형이한테 햄버거 사주고싶다ㅠㅠ 밥 먹고다녀??',0,'2023-08-16 13:51:13','2023-08-17 13:51:13',0,1,0),(162,18,1,NULL,NULL,'퇴근하는 창호짤',0,'2023-08-16 13:53:39','2023-08-17 13:53:39',0,1,0),(163,18,1,NULL,NULL,'포토카드 어디서 구할 수 있나요?',0,'2023-08-17 13:54:17','2023-08-17 13:54:17',0,1,0),(164,18,1,NULL,NULL,'준우야 여기서 머해ㅋㅋㅋㅋㅋ',0,'2023-08-17 13:56:16','2023-08-17 13:56:16',0,1,0),(165,18,1,NULL,NULL,'이번에 뮤지컬 보러 가는데 주변에 맛집 있을까요?\r\n\r\n공연장 가보신분들 알려주세요ㅎㅎ',0,'2023-08-17 14:07:40','2023-08-17 14:07:40',0,1,0),(166,18,1,NULL,NULL,'더글로리는 이미 봤는데 다른 드라마 볼거 추천해주세요~',0,'2023-08-17 14:08:44','2023-08-17 14:08:44',0,1,0),(167,18,1,NULL,NULL,'오늘 내 생일이야 :) 다들 오늘도 힘냉',0,'2023-08-17 14:12:58','2023-08-17 14:12:58',1,1,1),(168,18,1,NULL,NULL,'오로라 사이트 기능 너무 좋아요~~~',0,'2023-08-17 15:31:11','2023-08-17 15:31:11',1,1,1),(170,18,67,NULL,NULL,'지금 다들 뭐하나요? 저는 퇴근각ㅋㅋㅋㅋ',0,'2023-08-17 15:39:53','2023-08-17 15:39:53',0,1,0),(171,1,16,NULL,NULL,' 작성테스트',0,'2023-08-17 15:40:56','2023-08-17 15:40:56',1,1,1),(172,18,67,NULL,NULL,'공지에 있는 포토카드 이벤트 어떻게 참여하나요?? 포토카드 있는곳 알려주세요ㅠㅠ',0,'2023-08-17 15:48:40','2023-08-17 15:48:40',2,1,0);
/*!40000 ALTER TABLE `feed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file` (
  `id` int NOT NULL AUTO_INCREMENT,
  `feed_id` int DEFAULT NULL,
  `file_path` varchar(100) DEFAULT NULL,
  `file_extension` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_feed_TO_file_1` (`feed_id`),
  CONSTRAINT `FK_feed_TO_file_1` FOREIGN KEY (`feed_id`) REFERENCES `feed` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (11,98,'641e68f29f96a04b1c308bd40477f0058b253fda77df818ce57bbc7496d07962','png'),(12,101,'6f9f6e69ea0d13a2bfe24c1516cc3e193383dcac54e26eff7dd2916e9a89a74c','jfif'),(15,117,'32525b9cee64115a022098f003ecdd2382cb0a5868e458959d57bc76f599417f','gif'),(16,118,'74e50d7761945e58fcd0b79887f33b09b70814d7964076309486c19885f3b5a6','gif'),(17,119,'641e68f29f96a04b1c308bd40477f0058b253fda77df818ce57bbc7496d07962','png'),(21,126,'8bdc8ac9ea2806aaa2f2916f8297d78f7532e6c84029a379a114ef5324bd9f8d','gif'),(22,128,'8f504bdf7ddc23899a805c8d9dc558072cff5ee2e54d2f04a400c2b76d02972a','jpg'),(23,129,'c5a32a111bd71396b40f3e11fa4a0a9bbca0043cec0fbc92f94839744c22d1b6','gif'),(24,130,'34a3736fafd14a738bb3a8fefef2b68d0e74542ed15c7457236c20fe14c35be0','jpg'),(26,135,'59528f56a0a1d4dd2119fa6a49e8dbedea538ca3bab8cd5df6f3bc55cdc92738','png'),(27,136,'6194159e6dbdcbf8592376c63899b81ae4833cb43a61c58ff16341ae86103d7c','gif'),(30,142,'dffc504aa55359b9265cbebe1e4032fe600b64475ae3fd29c07d23223334d0af','png'),(31,151,'df818da8028ecfb393026c2d9a972fb5654e1515210f5184024326896d911846','jpg'),(32,152,'9df4d9b84942753cdcf61337c25dd47303db7b37f22843a1b849cf0db202ee5e','jpg'),(34,156,'cc4dc2416e06e837ba59997ac9e2567e65f4caa493f7197db4a8e33e9569f7c7','jpg'),(35,157,'75f602e6604980d1525d1681f0eb03444ed9f1b5841246ec4d878e545e4c7fab','gif'),(36,162,'ab4d2be03a485d02c12be6500a4a1d1be752cc26104b8d0cfcfb0f5d441c1921','gif'),(37,164,'ed968e840d10d2d313a870bc131a4e2c311d7ad09bdf32b3418147221f51a6e2','jpg');
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_channel`
--

DROP TABLE IF EXISTS `group_channel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group_channel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `file_path` varchar(1000) DEFAULT NULL,
  `file_extension` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_channel`
--

LOCK TABLES `group_channel` WRITE;
/*!40000 ALTER TABLE `group_channel` DISABLE KEYS */;
INSERT INTO `group_channel` VALUES (1,'seventeen','seventeen',NULL),(2,'newjeans','newjeans',NULL),(3,'ohmygirl','omygirl',NULL),(4,'akmu','akmu','example'),(5,'winner','winner',NULL),(6,'BTS','bts',NULL),(8,'레드벨벳','81a7ab9b01d09a74aa77b8214231d67eda5a936fb887c87259529911dac979d2','jpg'),(9,'임영웅','719aa4943cac959caf25b191ad04ae1bf08ebceb352ca73d92c12aab62051f24','jpg'),(11,'아이브','02fdae8ceaf45aecc392a14e69f7b141952643e47e65ff4844baa1c05023df13','jpg'),(12,'최예나','a1357c8553d858b4ad36725b274f5a0d19072896b4f8620928cd53a809c2dd16','jpg'),(13,'요아소비','fa3032a64488f38fe4d87e3b3a2d2c804e47f8f5b17e2354583ce3ca89c4099f','jpg'),(14,'킨더조이','1190ba4bf50b9ccf83928169b11f94830dd16906c8336eaa2a31062295fbb4c3','jpg'),(15,'르세라핌','e498a6bc174c4e7c1c53022008d515ae07a9f76d18bb2dcdd832fa3164968821','jpg'),(16,'몬스타엑스','2c41cccf42c76b4929223cd23ce7d43789373c3036b20825c4c6706fc4de816f','jpg'),(17,'호시노겐','8a4fdbb8ac5d68ca1880a5870da4622d373aa5166ce7ba49b5b0bf820e02188e','jpg'),(18,'ourola','ourola','png');
/*!40000 ALTER TABLE `group_channel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_subscribe`
--

DROP TABLE IF EXISTS `group_subscribe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group_subscribe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `group_id` int DEFAULT NULL,
  `nickname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_fan_user_TO_group_subscribe_1` (`user_id`),
  KEY `FK_group_channel_TO_group_subscribe_1` (`group_id`),
  CONSTRAINT `FK_fan_user_TO_group_subscribe_1` FOREIGN KEY (`user_id`) REFERENCES `fan_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_group_channel_TO_group_subscribe_1` FOREIGN KEY (`group_id`) REFERENCES `group_channel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_subscribe`
--

LOCK TABLES `group_subscribe` WRITE;
/*!40000 ALTER TABLE `group_subscribe` DISABLE KEYS */;
INSERT INTO `group_subscribe` VALUES (1,1,1,NULL),(2,1,2,NULL),(3,1,3,NULL),(4,2,1,NULL),(5,3,1,NULL),(7,1,4,'악뮤팬'),(9,1,6,NULL),(10,17,1,'Vv전원우vV'),(12,1,5,NULL),(13,18,1,NULL),(14,18,2,NULL),(18,16,1,NULL),(19,16,2,NULL),(20,16,3,NULL),(21,16,6,NULL),(22,18,3,NULL),(23,17,6,NULL),(26,16,4,NULL),(28,17,2,NULL),(29,16,13,NULL),(30,1,8,NULL),(31,17,17,NULL),(32,17,3,NULL),(33,1,13,NULL),(37,16,14,NULL),(39,16,16,NULL),(40,16,5,NULL),(41,16,9,NULL),(44,16,8,NULL),(49,2,2,NULL),(54,1,9,NULL),(55,1,14,NULL),(57,1,11,NULL),(60,16,18,NULL),(61,17,4,NULL),(66,17,18,NULL),(75,1,18,NULL),(76,18,18,NULL),(77,67,18,NULL),(78,67,2,NULL),(79,17,5,NULL),(80,17,8,NULL);
/*!40000 ALTER TABLE `group_subscribe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like`
--

DROP TABLE IF EXISTS `like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `like` (
  `like_id` int NOT NULL AUTO_INCREMENT,
  `feed_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  PRIMARY KEY (`like_id`),
  KEY `FK_feed_TO_like_1` (`feed_id`),
  KEY `FK_fan_user_TO_like_1` (`user_id`),
  KEY `FK_artist_user_TO_like_1` (`artist_id`),
  CONSTRAINT `FK_artist_user_TO_like_1` FOREIGN KEY (`artist_id`) REFERENCES `artist_user` (`id`),
  CONSTRAINT `FK_fan_user_TO_like_1` FOREIGN KEY (`user_id`) REFERENCES `fan_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_feed_TO_like_1` FOREIGN KEY (`feed_id`) REFERENCES `feed` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=230 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like`
--

LOCK TABLES `like` WRITE;
/*!40000 ALTER TABLE `like` DISABLE KEYS */;
INSERT INTO `like` VALUES (2,1,1,NULL),(19,15,2,NULL),(36,16,16,NULL),(39,23,16,NULL),(40,15,16,NULL),(42,24,16,NULL),(84,26,16,NULL),(85,25,16,NULL),(95,28,16,NULL),(96,31,16,NULL),(98,30,16,NULL),(100,39,16,NULL),(104,29,17,NULL),(114,44,17,NULL),(120,39,17,NULL),(125,42,17,NULL),(146,27,16,NULL),(150,101,1,NULL),(160,117,17,NULL),(162,119,17,NULL),(163,129,1,NULL),(164,130,1,NULL),(165,118,1,NULL),(190,100,17,NULL),(191,135,16,NULL),(196,110,17,NULL),(197,152,NULL,25),(205,152,NULL,27),(206,156,NULL,27),(207,118,17,NULL),(208,156,1,NULL),(209,147,1,NULL),(210,149,1,NULL),(211,150,1,NULL),(212,151,1,NULL),(213,152,1,NULL),(214,154,1,NULL),(215,157,1,NULL),(217,168,1,NULL),(218,171,16,NULL),(219,167,67,NULL),(220,159,67,NULL),(221,157,67,NULL),(222,156,67,NULL),(223,152,67,NULL),(225,172,1,NULL),(226,159,1,NULL),(227,172,16,NULL);
/*!40000 ALTER TABLE `like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `live`
--

DROP TABLE IF EXISTS `live`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `live` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `start_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `membership` tinyint(1) DEFAULT '0',
  `session_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_group_channel_TO_live_1` (`group_id`),
  KEY `FK_artist_user_TO_live_1` (`artist_id`),
  CONSTRAINT `FK_artist_user_TO_live_1` FOREIGN KEY (`artist_id`) REFERENCES `artist_user` (`id`),
  CONSTRAINT `FK_group_channel_TO_live_1` FOREIGN KEY (`group_id`) REFERENCES `group_channel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `live`
--

LOCK TABLES `live` WRITE;
/*!40000 ALTER TABLE `live` DISABLE KEYS */;
/*!40000 ALTER TABLE `live` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `live_like`
--

DROP TABLE IF EXISTS `live_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `live_like` (
  `like_id` int NOT NULL AUTO_INCREMENT,
  `live_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`like_id`),
  KEY `FK_live_TO_live_like_1` (`live_id`),
  KEY `FK_fan_user_TO_live_like_1` (`user_id`),
  CONSTRAINT `FK_fan_user_TO_live_like_1` FOREIGN KEY (`user_id`) REFERENCES `fan_user` (`id`),
  CONSTRAINT `FK_live_TO_live_like_1` FOREIGN KEY (`live_id`) REFERENCES `live` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `live_like`
--

LOCK TABLES `live_like` WRITE;
/*!40000 ALTER TABLE `live_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `live_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membership_contents`
--

DROP TABLE IF EXISTS `membership_contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `membership_contents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `file_path` varchar(100) DEFAULT NULL,
  `file_extension` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_group_channel_TO_membership_contents_1` (`group_id`),
  CONSTRAINT `FK_group_channel_TO_membership_contents_1` FOREIGN KEY (`group_id`) REFERENCES `group_channel` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membership_contents`
--

LOCK TABLES `membership_contents` WRITE;
/*!40000 ALTER TABLE `membership_contents` DISABLE KEYS */;
/*!40000 ALTER TABLE `membership_contents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membership_pay`
--

DROP TABLE IF EXISTS `membership_pay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `membership_pay` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `expiration_date` varchar(10) DEFAULT '1년',
  `file_path` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_group_channel_TO_membership_pay_1` (`group_id`),
  CONSTRAINT `FK_group_channel_TO_membership_pay_1` FOREIGN KEY (`group_id`) REFERENCES `group_channel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membership_pay`
--

LOCK TABLES `membership_pay` WRITE;
/*!40000 ALTER TABLE `membership_pay` DISABLE KEYS */;
INSERT INTO `membership_pay` VALUES (1,1,'CARAT MEMBERSHIP',4213424,'결제좀','2023-08-02 05:31:48','1년',NULL),(2,NULL,'fdsfdsafdsaf',NULL,NULL,'2023-08-02 07:29:53','1년',NULL),(3,NULL,'fdsfdsafdsaf',NULL,NULL,'2023-08-02 07:32:58','1년',NULL),(4,NULL,'fdsfdsafdsaf',100000000,'fdjskalf;sajkfdjslafjdkls;','2023-08-02 07:47:41','1년',NULL),(5,2,'하하',12321,NULL,'2023-08-16 16:09:36','1년',NULL),(8,18,'ourola 멤버십',22000,'멤버십 가입 안내\n\n[가입 기간]\n상시 판매\n\n[가입 대상]\nourola 채널에 가입한 회원\n\n[가입 방법]\nourola shop 에서 멤버십 구매\n\n[가입 혜택]\n채널 공지사항에서 확인하실 수 있습니다.','2023-08-16 16:43:12','1년','ourola');
/*!40000 ALTER TABLE `membership_pay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `group_id` int DEFAULT NULL,
  `feed_id` int DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `read` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_fan_user_TO_notification_1` (`user_id`),
  KEY `FK_group_channel_TO_notification_1` (`group_id`),
  KEY `FK_feed_TO_notification_1` (`feed_id`),
  CONSTRAINT `FK_fan_user_TO_notification_1` FOREIGN KEY (`user_id`) REFERENCES `fan_user` (`id`),
  CONSTRAINT `FK_feed_TO_notification_1` FOREIGN KEY (`feed_id`) REFERENCES `feed` (`id`),
  CONSTRAINT `FK_group_channel_TO_notification_1` FOREIGN KEY (`group_id`) REFERENCES `group_channel` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `online_concert`
--

DROP TABLE IF EXISTS `online_concert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `online_concert` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `ticketing_time` datetime DEFAULT NULL,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `price` int DEFAULT NULL,
  `file_path` varchar(1000) DEFAULT NULL,
  `file_extension` varchar(10) DEFAULT NULL,
  `session_id` varchar(100) DEFAULT NULL,
  `is_open` tinyint(1) NOT NULL DEFAULT '0',
  `deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_group_channel_TO_online_concert_1` (`group_id`),
  CONSTRAINT `FK_group_channel_TO_online_concert_1` FOREIGN KEY (`group_id`) REFERENCES `group_channel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `online_concert`
--

LOCK TABLES `online_concert` WRITE;
/*!40000 ALTER TABLE `online_concert` DISABLE KEYS */;
INSERT INTO `online_concert` VALUES (1,1,'오쿠냥이상의 마지막 콘서트','신난다!',NULL,NULL,'2023-08-11 07:56:10',3200000,'64338f32dfa7d4a6ca02b8042bd39478690d6ec5e3b632adde4b7d2d4f568af7',NULL,NULL,0,0),(2,1,'창호님의 최애의아이 콘서트','창호님이 열심히 준비했으니 즐기자.','2023-08-17 17:00:00','2023-08-14 13:00:00','2023-08-11 17:13:46',30,'19fba0e995b9794fc2c26217bf3b725c2f0d9eeda16719fe75e3ba23ca73bfc4',NULL,'session1',1,0),(3,1,'창호님의 최애의아이 콘서트 이틀차','창호님이 열심히 준비한 콘서트라고 한다. 열심히 준비해서 두 번 공연한다고 한다.','2023-08-14 13:00:00','2023-08-13 13:00:00','2023-08-11 08:13:55',20,'19fba0e995b9794fc2c26217bf3b725c2f0d9eeda16719fe75e3ba23ca73bfc4',NULL,'session3',0,0),(4,1,'FOLLOW TO SEOUL','FOLLOW TO SEOUL','2023-07-21 19:00:00','2023-07-07 14:00:00','2023-07-07 12:00:00',110000,NULL,NULL,'FTSALL',0,0),(5,1,'ㄴㅇㄹㄴㅇㅁㄹ','ㄴㅁㅇㄹㄴㅁㅇㄹ',NULL,NULL,'2023-08-14 01:43:38',324234234,NULL,NULL,NULL,0,1),(6,1,'BE THE SUN','123213',NULL,NULL,'2023-08-14 01:43:50',13213,NULL,NULL,NULL,0,1),(7,1,'123213','213123',NULL,NULL,'2023-08-14 01:44:01',123123,NULL,NULL,NULL,0,0),(8,1,'423423','21432314',NULL,NULL,'2023-08-14 01:56:04',21342314,NULL,NULL,NULL,0,0),(9,18,'00의 하루 콘서트 ver.','[소개]\n\nucc로 공개된 00의 하루 영상의 온라인 콘서트 버전입니다.\n\n\n[일시]\n\n2023-08-18 00:00 ~ 2023-08-19 00:00\n','2023-08-17 00:00:00','2023-08-18 00:00:00','2023-08-16 16:19:58',10000,'2110aa61ea237af8c6af1e010361e90ad1b85c1c667d597d919193f05f9d14f4',NULL,'ccc111',1,0);
/*!40000 ALTER TABLE `online_concert` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `open_live`
--

DROP TABLE IF EXISTS `open_live`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `open_live` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `content` varchar(5000) DEFAULT NULL,
  `start_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `ticketing_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `file_path` varchar(100) DEFAULT NULL,
  `file_extension` varchar(10) DEFAULT NULL,
  `max_participant` int DEFAULT '0',
  `cur_participant` int DEFAULT '0',
  `ticketing_end_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_group_channel_TO_open_live_ participant_1` (`group_id`),
  CONSTRAINT `FK_group_channel_TO_open_live_ participant_1` FOREIGN KEY (`group_id`) REFERENCES `group_channel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `open_live`
--

LOCK TABLES `open_live` WRITE;
/*!40000 ALTER TABLE `open_live` DISABLE KEYS */;
INSERT INTO `open_live` VALUES (25,1,'인기가요',NULL,'2023-08-15 15:23:00','2023-08-11 15:23:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,12,0,'2023-08-10 15:12:43'),(26,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,3,0,'2023-08-10 15:12:43'),(27,1,'인기가요',NULL,'2023-08-15 15:28:00','2023-08-11 17:21:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,12,0,'2023-08-10 15:12:43'),(28,1,'인기가요',NULL,'2023-08-15 15:31:00','2023-08-12 19:21:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,12,0,'2023-08-10 15:12:43'),(29,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,3,0,'2023-08-10 15:12:43'),(30,NULL,NULL,NULL,'2023-08-10 15:31:58','2023-08-10 15:31:58','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,0,0,'2023-08-10 15:31:58'),(31,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00','93f035595886b34381ca316a75d01952771cbab2c38b36db4467ba1ccda56978',NULL,3,0,'2023-08-10 15:49:42'),(32,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00','93f035595886b34381ca316a75d01952771cbab2c38b36db4467ba1ccda56978',NULL,3,0,'2023-08-10 15:56:33'),(33,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,3,0,'2023-08-10 15:56:39'),(34,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,3,0,'2023-08-10 15:57:21'),(35,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,3,-3,'2023-08-10 15:57:23'),(36,1,'인기가요','헬로우','2023-08-18 15:23:00','2023-08-13 15:23:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,12,0,'2023-08-15 15:23:00'),(37,1,'인기가요','헬로우','2023-08-18 15:23:00','2023-08-10 15:23:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,12,1,'2023-08-15 15:23:00'),(38,1,'인기가요','헬로우','2023-08-18 15:23:00','2023-08-11 15:23:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,12,0,'2023-08-15 15:10:00'),(39,1,'인기가요','헬로우','2023-08-18 15:23:00','2023-08-11 15:23:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,12,1,'2023-08-15 14:10:00'),(40,1,'인기가요','기재 양식 : 이름, 생년월일, 연락처, NEVERLAND 3기 회원 카드 번호 (12자리)\nEx.) 조미연, 97.01.31, 010-0000-0000, IDLE00000000\n\n+ 이름 기재 시 회원 카드에 기재된 정보와 동일하게 띄어쓰기 및 대소문자를 구분하여 주시기 바랍니다.\n+ 회원 카드 번호 기재 시 영문과 숫자를 반드시 확인해 주시기 바랍니다.\nEx.) 영문 O, 숫자 0 / 영문 I, 숫자 1\n+ 반드시 기재된 양식에 맞춰 작성해 주시기 바랍니다.\n\n신청 기간 : 2023년 7월 25일 (화) 7:30PM ~ 8PM (KST)\n+ 7월 25일 (화) 7:30PM (KST) 이후 신청자부터 인정됩니다.\n+ 한 IP당 1회만 제출 가능합니다. (중복 신청 시 명단에서 제외)\n응답 기간 : 2023.07.24(월) - 2023.07.24(월)기재 양식 : 이름, 생년월일, 연락처, NEVERLAND 3기 회원 카드 번호 (12자리)\nEx.) 조미연, 97.01.31, 010-0000-0000, IDLE00000000\n\n+ 이름 기재 시 회원 카드에 기재된 정보와 동일하게 띄어쓰기 및 대소문자를 구분하여 주시기 바랍니다.\n+ 회원 카드 번호 기재 시 영문과 숫자를 반드시 확인해 주시기 바랍니다.\nEx.) 영문 O, 숫자 0 / 영문 I, 숫자 1\n+ 반드시 기재된 양식에 맞춰 작성해 주시기 바랍니다.\n\n신청 기간 : 2023년 7월 25일 (화) 7:30PM ~ 8PM (KST)\n+ 7월 25일 (화) 7:30PM (KST) 이후 신청자부터 인정됩니다.\n+ 한 IP당 1회만 제출 가능합니다. (중복 신청 시 명단에서 제외)\n응답 기간 : 2023.07.24(월) - 2023.07.24(월)기재 양식 : 이름, 생년월일, 연락처, NEVERLAND 3기 회원 카드 번호 (12자리)\nEx.) 조미연, 97.01.31, 010-0000-0000, IDLE00000000\n\n+ 이름 기재 시 회원 카드에 기재된 정보와 동일하게 띄어쓰기 및 대소문자를 구분하여 주시기 바랍니다.\n+ 회원 카드 번호 기재 시 영문과 숫자를 반드시 확인해 주시기 바랍니다.\nEx.) 영문 O, 숫자 0 / 영문 I, 숫자 1\n+ 반드시 기재된 양식에 맞춰 작성해 주시기 바랍니다.\n\n신청 기간 : 2023년 7월 25일 (화) 7:30PM ~ 8PM (KST)\n+ 7월 25일 (화) 7:30PM (KST) 이후 신청자부터 인정됩니다.\n+ 한 IP당 1회만 제출 가능합니다. (중복 신청 시 명단에서 제외)\n응답 기간 : 2023.07.24(월) - 2023.07.24(월)기재 양식 : 이름, 생년월일, 연락처, NEVERLAND 3기 회원 카드 번호 (12자리)\nEx.) 조미연, 97.01.31, 010-0000-0000, IDLE00000000\n\n+ 이름 기재 시 회원 카드에 기재된 정보와 동일하게 띄어쓰기 및 대소문자를 구분하여 주시기 바랍니다.\n+ 회원 카드 번호 기재 시 영문과 숫자를 반드시 확인해 주시기 바랍니다.\nEx.) 영문 O, 숫자 0 / 영문 I, 숫자 1\n+ 반드시 기재된 양식에 맞춰 작성해 주시기 바랍니다.\n\n신청 기간 : 2023년 7월 25일 (화) 7:30PM ~ 8PM (KST)\n+ 7월 25일 (화) 7:30PM (KST) 이후 신청자부터 인정됩니다.\n+ 한 IP당 1회만 제출 가능합니다. (중복 신청 시 명단에서 제외)\n응답 기간 : 2023.07.24(월) - 2023.07.24(월)','2023-08-18 15:28:00','2023-08-10 17:21:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,1,0,'2023-08-18 17:21:00'),(41,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00',NULL,NULL,3,1,'2023-08-11 09:36:10'),(42,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00',NULL,NULL,3,0,'2023-08-11 09:38:07'),(43,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00',NULL,NULL,3,0,'2023-08-11 09:39:34'),(44,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00',NULL,NULL,3,0,'2023-08-11 09:40:27'),(45,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00','d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',NULL,3,0,'2023-08-11 09:40:33'),(46,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00','e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',NULL,3,0,'2023-08-11 09:56:40'),(47,1,'dfsafdsafd','safdfsdaf','2023-08-15 15:23:00','2023-08-15 15:23:00','67dd60de428a8879ad461abdfd1c15deee9a577d290d10c81cfbe9024658a0f9',NULL,3,0,'2023-08-11 09:56:51'),(48,1,'인기가요 공개방송','인기가요 공개방송','2023-08-15 15:23:00','2023-08-15 15:23:00','c06c6c7864c0ec35f3b22ccb2cc6209d26b2db79eb613e208990b24c4792b18c',NULL,3,0,'2023-08-11 10:00:15'),(49,1,'엠카 공개방송','엠카 공개방송','2023-08-15 15:23:00','2023-08-15 15:23:00','bdfad198147bb38dfaca8ab6685daf339f8b56d26ebe2d81eacf2ccdaf821869',NULL,3,0,'2023-08-11 10:14:03'),(50,1,'인기가요','헬로우','2023-08-25 15:23:00','2023-08-18 15:23:00',NULL,NULL,12,0,'2023-08-20 14:10:00'),(51,1,'인기가요','진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진진 과다입니다. 진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진 과다입니다.진','2023-08-25 15:23:00','2023-08-18 15:23:00',NULL,NULL,12,0,'2023-08-20 14:10:00'),(52,1,'인기가요','헬로우','2023-08-18 15:23:00','2023-08-15 15:23:00',NULL,NULL,12,2,'2023-08-16 15:23:00'),(55,1,'230824 Mnet 엠카운트다운','안녕하세요.ourola 그룹 담당자입니다.\n   \n   \n 8월 24일 (목요일) Mnet 엠카운트다운 참여 안내입니다.\n 많은 팬 분들의 신청 부탁드립니다.\n   \n   \n   \n ▶ Mnet 엠카운트다운 사전녹화\n\n - 녹화예정시간 : 2023년 8월 24일(목) 3:35 PM\n - 인원체크장소 : 상암동 CJ ENM 센터 앞\n - 인원체크시간 : 2023년 8월 24일 (목) 1:30 PM ~ 2:30 PM (KST)\n   \n   \n * 해당 공연은 만 15세 이상 부터 참여가 가능합니다.\n   \n * 모든 녹화 현장에는 인원체크 시 배부받은 팔찌를 반드시 지참하셔야 합니다. 훼손, 분실의 경우 입장이 제한됩니다.\n   \n * 당일 공연 좌석은 인원 체크 순서와는 무관하므로 임의로 대기줄 생성하는 행위는 금합니다.\n   \n   \n\n <신청 방법 안내>\n   \n ▶ Mnet 엠카운트다운 신청\n\n - 신청일시 : 2023년 8월 18일(금) 9:00 AM ~ 9:00 PM (KST)\n   \n\n ** 해당 일시에 신청 페이지 새로고침이 필요합니다. 미리 로그인으 해서 접속한 후 신청 시간에 맞춰 참여 신청을 완료해주시기 바랍니다.\n  \n ** 신청 페이지는 서버 시간을 기준으로 합니다.\n ** 신청 인원이 마감된 경우 신청 버튼이 비활성화됩니다.\n ** 신청 마감 후 버튼 좌측 신청 인원수와 함께 신청한 순서(입장 번호)가 표시됩니다.\n   \n ** 신청 취소 시에는 신청 내용(신청 내역 및 입장번호)을 복구해드리지 않습니다.\n   \n  \n\n <주의 사항>\n * 부정한 프로그램을 통한 신청자, 금전 거래를 통해 대리 신청을 하는 신청자, 본인이 아닌 타인(친구, 지인 등)을 통해 신청하는 신청자, 배부받은 번호를 양도하는 신청자 또는 양도받은 신청자 등 부정한 방법이 발견되면, 어떠한 경우에도 배부받은 입장 번호는 인정되지 않으며 해당 공개방송 참여 불가 및 공개방송 불참자와 동일한 불이익이 적용 됩니다.\n  \n  \n\n <공개방송 참여 팬 확인 준비물 안내>\n ** 확인 준비물 중 한 가지라도 없을 시, 당일 공개방송 입장이 불가합니다.\n  \n 1) 신분증 (본인 확인 가능한 사진 필수)\n - 대한민국 국적 : 여권, 주민등록증, 운전면허증, 청소년증(주민센터 발급)\n - 대한민국 국적 외 : 여권, 외국인등록증\n  \n ** 사진, 프린트물, 모바일 화면 캡쳐 등은 인정되지 않습니다.\n ** 신분증에 부착된 사진이 본인 증명사진이 아니거나, 스티커 또는 낙서 등으로 훼손되어 사진 확인이 어려운 경우 해당 신분증으로 본인 확인이 불가합니다.\n ** 현장에서 신분증과 실제 얼굴이 일치하지 않을 경우 추가 확인 요청을 드릴 수 있습니다.\n ** ourola 가입자 정보와 신분증 상의 정보가 상이한 경우 추가 확인 요청을 드릴 수 있습니다.\n  \n ** 모바일 신분증은 캡처 파일을 인정하지 않습니다. 현장에서 모바일 신분증 앱 실행을 요청할 수 있습니다.\n ** 학생증으로는 본인 확인 불가합니다.\n ** 유효기간이 만료된 신분증으로는 본인 확인이 불가합니다.\n ** 영문 외로 가입하여 여권의 영문명으로 확인이 불가할 경우, 현장에서 사진과 영문 외 이름이 기입된 신분증을 추가 확인 요청드릴 수 있습니다. 사전 준비 및 협조 부탁드립니다.\n  \n ** 추가 확인 요청시 협조 부탁드립니다.\n  \n 3) 공식 응원봉\n  \n  \n\n <공개방송 참여 시 주의 사항>\n 1) 공개방송 현장에서의 퇴장은 모든 공연이 끝난 뒤 가능합니다. 중도 퇴장 등 방송국 경호팀과의 마찰이 발생할 경우 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 여러분들의 즐거운 공개방송 참여를 위하여 현장 스태프의 통솔에 따라 주시기 바랍니다.\n  \n 2) 각 방송 프로그램에 따라 입장 연령이나 신청이 제한될 수 있습니다. 신청 전에 반드시 프로그램 정보를 확인해 주십시오.\n  \n 3) 공개방송이 진행되는 스튜디오 내 사진·동영상 촬영 및 녹음은 엄격하게 금지되어 있으며, 촬영 및 녹음이 가능한 장비의 반입 역시 금지되어 있습니다. 공개방송 현장에서 사진, 영상 촬영 및 녹음 적발 시 방송국 경호팀 또는 방송국 스태프의 재량으로 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 공개방송에 참여한 모든 여러분의 안전과 즐거운 공연 관람을 위한 부분으로 양해와 협조 부탁드립니다.\n ** 적발 시 즉시 퇴장 조치 후, 촬영한 사진, 영상, 녹음은 전부 현장에서 삭제 처리됩니다. 퇴장 조치 시 발생하는 기기 파손에 대해 당사에서는 일체 책임을 지지 않습니다.\n ** 촬영 적발 시, 추후 진행되는 공개방송에 참여하실 수 없습니다.\n  \n 4) ourola 공식 응원봉을 제외한 개인 응원도구(플랜카드, 슬로건, 핸드폰 전광판 앱, 인형, 부채 등)의 사용은 금지되어 있습니다.\n  \n 5) ourola 멤버들의 출·퇴근 시 멤버들의 차량으로 달려들거나 하는 등의 행위는 매우 위험합니다. 해당 행동이 발견되는 경우, 해당 회원은 추후 진행되는 공개방송에 참여하실 수 없습니다. 모두의 안전을 위해 서로 배려하여 안전한 공개방송 현장이 될 수 있도록 부탁드립니다.\n  \n 6) 팬클럽석이 지정된 경우, 임의로 자리를 이탈하는 행동은 금지되어 있습니다.\n  \n 7) 공개방송 현장에서 ourola 멤버들에게 편지 전달이 가능합니다. 현장 스태프에게 준비한 편지를 전달해주시면 ourola 멤버들에게 전달합니다.\n ** 편지를 제외한 모든 선물은 전달 불가합니다.\n  \n\n 공개방송에 참여한 모두가 안전하고 즐거운 공연을 관람할 수 있도록 해당 공지를 참여 전 꼼꼼하게 읽어주시길 부탁드립니다.\n 현장 상황에 따라 공지 내용 일부가 수정, 추가될 수 있습니다.\n 공지 미확인으로 인한 불이익은 책임지지 않으니 유의 바랍니다.\n  \n  \n ourola 팬 여러분의 많은 관심과 성원 부탁드립니다.\n   \n 감사합니다.','2023-08-24 15:35:00','2023-08-17 09:00:00','bdfad198147bb38dfaca8ab6685daf339f8b56d26ebe2d81eacf2ccdaf821869',NULL,10,9,'2023-08-18 21:00:00'),(56,18,'SBS 인기가요','안녕하세요.\nourola 그룹 담당자입니다.\n \n \n8월 20일 (일요일) SBS 인기가요 사전녹화 참여 안내입니다.\n많은 팬 분들의 신청 부탁드립니다.\n\n \n \n ▶ SBS 인기가요 사전녹화\n - 일시 : 2023년 8월 20일(일) 9:50 AM\n - 장소 : 등촌동 SBS 공개홀 (서울 강서구 양천로 442)\n - 인원 체크 장소 : 등촌동 SBS 공개홀\n - 인원 체크 시간 : 2023년 8월 20일 (일) 8:40 AM (KST)\n \n\n * 녹화 시간 관련해서 현장에서 수시로 변경될 가능성이 있어, 현장에서 상황에 따라 안내 드릴 예정입니다.\n \n * 해당 공연은 만 15세 이상 부터 참여가 가능합니다.\n \n * 모든 녹화 현장에는 인원체크 시 배부받은 팔찌를 반드시 지참하셔야 합니다. 훼손, 분실의 경우 입장이 제한됩니다.\n \n * 당일 공연 좌석은 인원 체크 순서와는 무관하므로 임의로 대기줄 생성하는 행위는 금합니다.\n \n \n <신청 방법 안내>\n \n ▶ SBS 인기가요 사전녹화 신청\n - 신청일시 : 2023년 8월 18일(금) 9:00 AM ~ 9:00 PM (KST)\n \n ** 해당 일시에 신청 페이지 새로고침이 필요합니다. 미리 로그인 해서 접속한 후 신청 시간에 맞춰 참여 신청을 완료해주시기 바랍니다.\n \n ** 신청 페이지는 서버 시간을 기준으로 합니다.\n ** 신청 인원이 마감된 경우 신청 버튼이 비활성화됩니다.\n ** 신청 마감 후 버튼 좌측 신청 인원수와 함께 신청한 순서(입장 번호)가 표시됩니다.\n \n ** 신청 취소 시에는 신청 내용(신청 내역 및 입장번호)을 복구해드리지 않습니다.\n \n\n <주의 사항>\n\n* 부정한 프로그램을 통한 신청자, 금전 거래를 통해 대리 신청을 하는 신청자, 본인이 아닌 타인(친구, 지인 등)을 통해 신청하는 신청자, 배부받은 번호를 양도하는 신청자 또는 양도받은 신청자 등 부정한 방법이 발견되면, 어떠한 경우에도 배부받은 입장 번호는 인정되지 않으며 해당 공개방송 참여 불가 및 공개방송 불참자와 동일한 불이익이 적용 됩니다.\n \n\n\n<공개방송 참여 팬 확인 준비물 안내>\n\n** 확인 준비물 중 한 가지라도 없을 시, 당일 공개방송 입장이 불가합니다.\n\n\n1) 신분증 (본인 확인 가능한 사진 필수)\n\n- 대한민국 국적 : 여권, 주민등록증, 운전면허증, 청소년증(주민센터 발급)\n- 대한민국 국적 외 : 여권, 외국인등록증\n\n** 사진, 프린트물, 모바일 화면 캡쳐 등은 인정되지 않습니다.\n\n** 신분증에 부착된 사진이 본인 증명사진이 아니거나, 스티커 또는 낙서 등으로 훼손되어 사진 확인이 어려운 경우 해당 신분증으로 본인 확인이 불가합니다.\n\n** 현장에서 신분증과 실제 얼굴이 일치하지 않을 경우 추가 확인 요청을 드릴 수 있습니다.\n\n** ourola 가입자 정보와 신분증 상의 정보가 상이한 경우 추가 확인 요청을 드릴 수 있습니다.\n\n** 모바일 신분증은 캡처 파일을 인정하지 않습니다. 현장에서 모바일 신분증 앱 실행을 요청할 수 있습니다.\n\n** 학생증으로는 본인 확인 불가합니다.\n\n** 유효기간이 만료된 신분증으로는 본인 확인이 불가합니다.\n\n** 영문 외로 가입하여 여권의 영문명으로 확인이 불가할 경우, 현장에서 사진과 영문 외 이름이 기입된 신분증을 추가 확인 요청드릴 수 있습니다. 사전 준비 및 협조 부탁드립니다.\n\n** 추가 확인 요청시 협조 부탁드립니다.\n\n\n2) 공식 응원봉\n\n\n\n<공개방송 참여 시 주의 사항>\n\n1) 공개방송 현장에서의 퇴장은 모든 공연이 끝난 뒤 가능합니다. 중도 퇴장 등 방송국 경호팀과의 마찰이 발생할 경우 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 여러분들의 즐거운 공개방송 참여를 위하여 현장 스태프의 통솔에 따라 주시기 바랍니다.\n\n2) 각 방송 프로그램에 따라 입장 연령이나 신청이 제한될 수 있습니다. 신청 전에 반드시 프로그램 정보를 확인해 주십시오.\n\n3) 공개방송이 진행되는 스튜디오 내 사진·동영상 촬영 및 녹음은 엄격하게 금지되어 있으며, 촬영 및 녹음이 가능한 장비의 반입 역시 금지되어 있습니다. 공개방송 현장에서 사진, 영상 촬영 및 녹음 적발 시 방송국 경호팀 또는 방송국 스태프의 재량으로 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 공개방송에 참여한 모든 여러분의 안전과 즐거운 공연 관람을 위한 부분으로 양해와 협조 부탁드립니다.\n\n** 적발 시 즉시 퇴장 조치 후, 촬영한 사진, 영상, 녹음은 전부 현장에서 삭제 처리됩니다. 퇴장 조치 시 발생하는 기기 파손에 대해 당사에서는 일체 책임을 지지 않습니다.\n\n** 촬영 적발 시, 추후 진행되는 공개방송에 참여하실 수 없습니다.\n\n4) ourola 공식 응원봉을 제외한 개인 응원도구(플랜카드, 슬로건, 핸드폰 전광판 앱, 인형, 부채 등)의 사용은 금지되어 있습니다.\n\n5) ourola 멤버들의 출·퇴근 시 멤버들의 차량으로 달려들거나 하는 등의 행위는 매우 위험합니다. 해당 행동이 발견되는 경우, 해당 회원은 추후 진행되는 공개방송에 참여하실 수 없습니다. 모두의 안전을 위해 서로 배려하여 안전한 공개방송 현장이 될 수 있도록 부탁드립니다.\n\n6) 팬클럽석이 지정된 경우, 임의로 자리를 이탈하는 행동은 금지되어 있습니다.\n\n7) 공개방송 현장에서 ourola 멤버들에게 편지 전달이 가능합니다. 현장 스태프에게 준비한 편지를 전달해주시면 ourola 멤버들에게 전달합니다.\n\n** 편지를 제외한 모든 선물은 전달 불가합니다.\n\n\n\n공개방송에 참여한 모두가 안전하고 즐거운 공연을 관람할 수 있도록 해당 공지를 참여 전 꼼꼼하게 읽어주시길 부탁드립니다.\n\n공지 내용 일부가 수정, 추가될 수 있습니다.\n\n공지 미확인으로 인한 불이익은 책임지지 않으니 유의 바랍니다.\n \n\n\nourola  여러분의 많은 관심과 성원 부탁드립니다.\n \n 감사합니다.','2023-08-20 09:50:00','2023-08-18 09:00:00','18ac3e7343f016890c510e93f935261169d9e3f565436429830faf0934f4f8e4',NULL,10,10,'2023-08-18 21:00:00'),(57,18,'KBS 뮤직뱅크','안녕하세요.\nourola 그룹 담당자입니다.\n \n \n8월 20일 (일요일) KBS 뮤직뱅 사전녹화 참여 안내입니다.\n많은 팬 분들의 신청 부탁드립니다.\n\n \n \n ▶ KBS 뮤직뱅 사전녹화\n - 일시 : 2023년 8월 20일(일) 9:50 AM\n - 장소 : KBS\n - 인원 체크 장소 : KBS\n - 인원 체크 시간 : 2023년 8월 20일 (일) 8:40 AM (KST)\n \n\n * 녹화 시간 관련해서 현장에서 수시로 변경될 가능성이 있어, 현장에서 상황에 따라 안내 드릴 예정입니다.\n \n * 해당 공연은 만 15세 이상 부터 참여가 가능합니다.\n \n * 모든 녹화 현장에는 인원체크 시 배부받은 팔찌를 반드시 지참하셔야 합니다. 훼손, 분실의 경우 입장이 제한됩니다.\n \n * 당일 공연 좌석은 인원 체크 순서와는 무관하므로 임의로 대기줄 생성하는 행위는 금합니다.\n \n \n <신청 방법 안내>\n \n ▶ KBS 뮤직뱅 사전녹화 신청\n - 신청일시 : 2023년 8월 18일(금) 9:00 AM ~ 9:00 PM (KST)\n \n ** 해당 일시에 신청 페이지 새로고침이 필요합니다. 미리 로그인 해서 접속한 후 신청 시간에 맞춰 참여 신청을 완료해주시기 바랍니다.\n \n ** 신청 페이지는 서버 시간을 기준으로 합니다.\n ** 신청 인원이 마감된 경우 신청 버튼이 비활성화됩니다.\n ** 신청 마감 후 버튼 좌측 신청 인원수와 함께 신청한 순서(입장 번호)가 표시됩니다.\n \n ** 신청 취소 시에는 신청 내용(신청 내역 및 입장번호)을 복구해드리지 않습니다.\n \n\n <주의 사항>\n\n* 부정한 프로그램을 통한 신청자, 금전 거래를 통해 대리 신청을 하는 신청자, 본인이 아닌 타인(친구, 지인 등)을 통해 신청하는 신청자, 배부받은 번호를 양도하는 신청자 또는 양도받은 신청자 등 부정한 방법이 발견되면, 어떠한 경우에도 배부받은 입장 번호는 인정되지 않으며 해당 공개방송 참여 불가 및 공개방송 불참자와 동일한 불이익이 적용 됩니다.\n \n\n\n<공개방송 참여 팬 확인 준비물 안내>\n\n** 확인 준비물 중 한 가지라도 없을 시, 당일 공개방송 입장이 불가합니다.\n\n\n1) 신분증 (본인 확인 가능한 사진 필수)\n\n- 대한민국 국적 : 여권, 주민등록증, 운전면허증, 청소년증(주민센터 발급)\n- 대한민국 국적 외 : 여권, 외국인등록증\n\n** 사진, 프린트물, 모바일 화면 캡쳐 등은 인정되지 않습니다.\n\n** 신분증에 부착된 사진이 본인 증명사진이 아니거나, 스티커 또는 낙서 등으로 훼손되어 사진 확인이 어려운 경우 해당 신분증으로 본인 확인이 불가합니다.\n\n** 현장에서 신분증과 실제 얼굴이 일치하지 않을 경우 추가 확인 요청을 드릴 수 있습니다.\n\n** ourola 가입자 정보와 신분증 상의 정보가 상이한 경우 추가 확인 요청을 드릴 수 있습니다.\n\n** 모바일 신분증은 캡처 파일을 인정하지 않습니다. 현장에서 모바일 신분증 앱 실행을 요청할 수 있습니다.\n\n** 학생증으로는 본인 확인 불가합니다.\n\n** 유효기간이 만료된 신분증으로는 본인 확인이 불가합니다.\n\n** 영문 외로 가입하여 여권의 영문명으로 확인이 불가할 경우, 현장에서 사진과 영문 외 이름이 기입된 신분증을 추가 확인 요청드릴 수 있습니다. 사전 준비 및 협조 부탁드립니다.\n\n** 추가 확인 요청시 협조 부탁드립니다.\n\n\n2) 공식 응원봉\n\n\n\n<공개방송 참여 시 주의 사항>\n\n1) 공개방송 현장에서의 퇴장은 모든 공연이 끝난 뒤 가능합니다. 중도 퇴장 등 방송국 경호팀과의 마찰이 발생할 경우 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 여러분들의 즐거운 공개방송 참여를 위하여 현장 스태프의 통솔에 따라 주시기 바랍니다.\n\n2) 각 방송 프로그램에 따라 입장 연령이나 신청이 제한될 수 있습니다. 신청 전에 반드시 프로그램 정보를 확인해 주십시오.\n\n3) 공개방송이 진행되는 스튜디오 내 사진·동영상 촬영 및 녹음은 엄격하게 금지되어 있으며, 촬영 및 녹음이 가능한 장비의 반입 역시 금지되어 있습니다. 공개방송 현장에서 사진, 영상 촬영 및 녹음 적발 시 방송국 경호팀 또는 방송국 스태프의 재량으로 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 공개방송에 참여한 모든 여러분의 안전과 즐거운 공연 관람을 위한 부분으로 양해와 협조 부탁드립니다.\n\n** 적발 시 즉시 퇴장 조치 후, 촬영한 사진, 영상, 녹음은 전부 현장에서 삭제 처리됩니다. 퇴장 조치 시 발생하는 기기 파손에 대해 당사에서는 일체 책임을 지지 않습니다.\n\n** 촬영 적발 시, 추후 진행되는 공개방송에 참여하실 수 없습니다.\n\n4) ourola 공식 응원봉을 제외한 개인 응원도구(플랜카드, 슬로건, 핸드폰 전광판 앱, 인형, 부채 등)의 사용은 금지되어 있습니다.\n\n5) ourola 멤버들의 출·퇴근 시 멤버들의 차량으로 달려들거나 하는 등의 행위는 매우 위험합니다. 해당 행동이 발견되는 경우, 해당 회원은 추후 진행되는 공개방송에 참여하실 수 없습니다. 모두의 안전을 위해 서로 배려하여 안전한 공개방송 현장이 될 수 있도록 부탁드립니다.\n\n6) 팬클럽석이 지정된 경우, 임의로 자리를 이탈하는 행동은 금지되어 있습니다.\n\n7) 공개방송 현장에서 ourola 멤버들에게 편지 전달이 가능합니다. 현장 스태프에게 준비한 편지를 전달해주시면 ourola 멤버들에게 전달합니다.\n\n** 편지를 제외한 모든 선물은 전달 불가합니다.\n\n\n\n공개방송에 참여한 모두가 안전하고 즐거운 공연을 관람할 수 있도록 해당 공지를 참여 전 꼼꼼하게 읽어주시길 부탁드립니다.\n\n공지 내용 일부가 수정, 추가될 수 있습니다.\n\n공지 미확인으로 인한 불이익은 책임지지 않으니 유의 바랍니다.\n \n\n\nourola  여러분의 많은 관심과 성원 부탁드립니다.\n \n 감사합니다.','2023-08-20 09:50:00','2023-08-19 09:00:00','645f22ddaf5300c1aef23de5842b0150e9cdbe8e5095a8f9cef478222cc99775',NULL,10,0,'2023-08-19 21:00:00'),(59,1,'Mnet 엠카운트다운','안녕하세요.ourola 그룹 담당자입니다.\n  \n  \n8월 24일 (목요일) Mnet 엠카운트다운 참여 안내입니다.\n많은 팬 분들의 신청 부탁드립니다.\n  \n  \n  \n▶ Mnet 엠카운트다운 사전녹화\n- 녹화예정시간 : 2023년 8월 24일(목) 3:35 PM\n- 인원체크장소 : 상암동 CJ ENM 센터 앞\n- 인원체크시간 : 2023년 8월 24일 (목) 1:30 PM ~ 2:30 PM (KST)\n  \n  \n* 해당 공연은 만 15세 이상 부터 참여가 가능합니다.\n  \n* 모든 녹화 현장에는 인원체크 시 배부받은 팔찌를 반드시 지참하셔야 합니다. 훼손, 분실의 경우 입장이 제한됩니다.\n  \n* 당일 공연 좌석은 인원 체크 순서와는 무관하므로 임의로 대기줄 생성하는 행위는 금합니다.\n  \n  \n<신청 방법 안내>\n  \n▶ Mnet 엠카운트다운 신청\n- 신청일시 : 2023년 8월 18일(금) 9:00 AM ~ 9:00 PM (KST)\n  \n** 해당 일시에 신청 페이지 새로고침이 필요합니다. 미리 로그인으 해서 접속한 후 신청 시간에 맞춰 참여 신청을 완료해주시기 바랍니다.\n \n** 신청 페이지는 서버 시간을 기준으로 합니다.\n** 신청 인원이 마감된 경우 신청 버튼이 비활성화됩니다.\n** 신청 마감 후 버튼 좌측 신청 인원수와 함께 신청한 순서(입장 번호)가 표시됩니다.\n  \n** 신청 취소 시에는 신청 내용(신청 내역 및 입장번호)을 복구해드리지 않습니다.\n  \n \n<주의 사항>\n* 부정한 프로그램을 통한 신청자, 금전 거래를 통해 대리 신청을 하는 신청자, 본인이 아닌 타인(친구, 지인 등)을 통해 신청하는 신청자, 배부받은 번호를 양도하는 신청자 또는 양도받은 신청자 등 부정한 방법이 발견되면, 어떠한 경우에도 배부받은 입장 번호는 인정되지 않으며 해당 공개방송 참여 불가 및 공개방송 불참자와 동일한 불이익이 적용 됩니다.\n \n \n<공개방송 참여 팬 확인 준비물 안내>\n** 확인 준비물 중 한 가지라도 없을 시, 당일 공개방송 입장이 불가합니다.\n \n1) 신분증 (본인 확인 가능한 사진 필수)\n- 대한민국 국적 : 여권, 주민등록증, 운전면허증, 청소년증(주민센터 발급)\n- 대한민국 국적 외 : 여권, 외국인등록증\n \n** 사진, 프린트물, 모바일 화면 캡쳐 등은 인정되지 않습니다.\n** 신분증에 부착된 사진이 본인 증명사진이 아니거나, 스티커 또는 낙서 등으로 훼손되어 사진 확인이 어려운 경우 해당 신분증으로 본인 확인이 불가합니다.\n** 현장에서 신분증과 실제 얼굴이 일치하지 않을 경우 추가 확인 요청을 드릴 수 있습니다.\n** ourola 가입자 정보와 신분증 상의 정보가 상이한 경우 추가 확인 요청을 드릴 수 있습니다.\n \n** 모바일 신분증은 캡처 파일을 인정하지 않습니다. 현장에서 모바일 신분증 앱 실행을 요청할 수 있습니다.\n** 학생증으로는 본인 확인 불가합니다.\n** 유효기간이 만료된 신분증으로는 본인 확인이 불가합니다.\n** 영문 외로 가입하여 여권의 영문명으로 확인이 불가할 경우, 현장에서 사진과 영문 외 이름이 기입된 신분증을 추가 확인 요청드릴 수 있습니다. 사전 준비 및 협조 부탁드립니다.\n \n** 추가 확인 요청시 협조 부탁드립니다.\n \n3) 공식 응원봉\n \n \n<공개방송 참여 시 주의 사항>\n1) 공개방송 현장에서의 퇴장은 모든 공연이 끝난 뒤 가능합니다. 중도 퇴장 등 방송국 경호팀과의 마찰이 발생할 경우 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 여러분들의 즐거운 공개방송 참여를 위하여 현장 스태프의 통솔에 따라 주시기 바랍니다.\n \n2) 각 방송 프로그램에 따라 입장 연령이나 신청이 제한될 수 있습니다. 신청 전에 반드시 프로그램 정보를 확인해 주십시오.\n \n3) 공개방송이 진행되는 스튜디오 내 사진·동영상 촬영 및 녹음은 엄격하게 금지되어 있으며, 촬영 및 녹음이 가능한 장비의 반입 역시 금지되어 있습니다. 공개방송 현장에서 사진, 영상 촬영 및 녹음 적발 시 방송국 경호팀 또는 방송국 스태프의 재량으로 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 공개방송에 참여한 모든 여러분의 안전과 즐거운 공연 관람을 위한 부분으로 양해와 협조 부탁드립니다.\n** 적발 시 즉시 퇴장 조치 후, 촬영한 사진, 영상, 녹음은 전부 현장에서 삭제 처리됩니다. 퇴장 조치 시 발생하는 기기 파손에 대해 당사에서는 일체 책임을 지지 않습니다.\n** 촬영 적발 시, 추후 진행되는 공개방송에 참여하실 수 없습니다.\n \n4) ourola 공식 응원봉을 제외한 개인 응원도구(플랜카드, 슬로건, 핸드폰 전광판 앱, 인형, 부채 등)의 사용은 금지되어 있습니다.\n \n5) ourola 멤버들의 출·퇴근 시 멤버들의 차량으로 달려들거나 하는 등의 행위는 매우 위험합니다. 해당 행동이 발견되는 경우, 해당 회원은 추후 진행되는 공개방송에 참여하실 수 없습니다. 모두의 안전을 위해 서로 배려하여 안전한 공개방송 현장이 될 수 있도록 부탁드립니다.\n \n6) 팬클럽석이 지정된 경우, 임의로 자리를 이탈하는 행동은 금지되어 있습니다.\n \n7) 공개방송 현장에서 ourola 멤버들에게 편지 전달이 가능합니다. 현장 스태프에게 준비한 편지를 전달해주시면 ourola 멤버들에게 전달합니다.\n** 편지를 제외한 모든 선물은 전달 불가합니다.\n \n공개방송에 참여한 모두가 안전하고 즐거운 공연을 관람할 수 있도록\n해당 공지를 참여 전 꼼꼼하게 읽어주시길 부탁드립니다.\n공지 내용 일부가 수정, 추가될 수 있습니다.\n공지 미확인으로 인한 불이익은 책임지지 않으니 유의 바랍니다.\n \n \nourola  여러분의 많은 관심과 성원 부탁드립니다.\n  \n감사합니다.','2023-08-24 15:35:00','2023-08-17 09:00:00','bdfad198147bb38dfaca8ab6685daf339f8b56d26ebe2d81eacf2ccdaf821869',NULL,10,9,'2023-08-18 21:00:00'),(60,1,'Mnet 엠카운트다운',' 안녕하세요.\n ourola 그룹 담당자입니다.\n  \n  \n 8월 24일 (목요일) Mnet 엠카운트다운 사전녹화 참여 안내입니다.\n 많은 팬 분들의 신청 부탁드립니다.\n \n  \n  \n  ▶ Mnet 엠카운트다운 사전녹화\n  - 일시 : 2023년 8월 24일(목) 3:35 PM\n  - 장소 : 상암동 CJ ENM 센터\n  - 인원 체크 장소 : 상암동 CJ ENM 센터 앞\n  - 인원 체크 시간 : 2023년 8월 24일 (목) 1:30 PM ~ 2:30 PM (KST)\n  \n \n  * 녹화 시간 관련해서 현장에서 수시로 변경될 가능성이 있어, 현장에서 상황에 따라 안내 드릴 예정입니다.\n  \n  * 해당 공연은 만 15세 이상 부터 참여가 가능합니다.\n  \n  * 모든 녹화 현장에는 인원체크 시 배부받은 팔찌를 반드시 지참하셔야 합니다. 훼손, 분실의 경우 입장이 제한됩니다.\n  \n  * 당일 공연 좌석은 인원 체크 순서와는 무관하므로 임의로 대기줄 생성하는 행위는 금합니다.\n  \n  \n  <신청 방법 안내>\n  \n  ▶ Mnet 엠카운트다운 신청\n  - 신청일시 : 2023년 8월 17일(금) 9:00 AM ~ 9:00 PM (KST)\n  \n  ** 해당 일시에 신청 페이지 새로고침이 필요합니다. 미리 로그인 해서 접속한 후 신청 시간에 맞춰 참여 신청을 완료해주시기 바랍니다.\n  \n  ** 신청 페이지는 서버 시간을 기준으로 합니다.\n  ** 신청 인원이 마감된 경우 신청 버튼이 비활성화됩니다.\n  ** 신청 마감 후 버튼 좌측 신청 인원수와 함께 신청한 순서(입장 번호)가 표시됩니다.\n  \n  ** 신청 취소 시에는 신청 내용(신청 내역 및 입장번호)을 복구해드리지 않습니다.\n  \n \n  <주의 사항>\n \n * 부정한 프로그램을 통한 신청자, 금전 거래를 통해 대리 신청을 하는 신청자, 본인이 아닌 타인(친구, 지인 등)을 통해 신청하는 신청자, 배부받은 번호를 양도하는 신청자 또는 양도받은 신청자 등 부정한 방법이 발견되면, 어떠한 경우에도 배부받은 입장 번호는 인정되지 않으며 해당 공개방송 참여 불가 및 공개방송 불참자와 동일한 불이익이 적용 됩니다.\n  \n \n \n <공개방송 참여 팬 확인 준비물 안내>\n \n ** 확인 준비물 중 한 가지라도 없을 시, 당일 공개방송 입장이 불가합니다.\n \n \n 1) 신분증 (본인 확인 가능한 사진 필수)\n \n - 대한민국 국적 : 여권, 주민등록증, 운전면허증, 청소년증(주민센터 발급)\n - 대한민국 국적 외 : 여권, 외국인등록증\n \n ** 사진, 프린트물, 모바일 화면 캡쳐 등은 인정되지 않습니다.\n \n ** 신분증에 부착된 사진이 본인 증명사진이 아니거나, 스티커 또는 낙서 등으로 훼손되어 사진 확인이 어려운 경우 해당 신분증으로 본인 확인이 불가합니다.\n \n ** 현장에서 신분증과 실제 얼굴이 일치하지 않을 경우 추가 확인 요청을 드릴 수 있습니다.\n \n ** ourola 가입자 정보와 신분증 상의 정보가 상이한 경우 추가 확인 요청을 드릴 수 있습니다.\n \n ** 모바일 신분증은 캡처 파일을 인정하지 않습니다. 현장에서 모바일 신분증 앱 실행을 요청할 수 있습니다.\n \n ** 학생증으로는 본인 확인 불가합니다.\n \n ** 유효기간이 만료된 신분증으로는 본인 확인이 불가합니다.\n \n ** 영문 외로 가입하여 여권의 영문명으로 확인이 불가할 경우, 현장에서 사진과 영문 외 이름이 기입된 신분증을 추가 확인 요청드릴 수 있습니다. 사전 준비 및 협조 부탁드립니다.\n \n ** 추가 확인 요청시 협조 부탁드립니다.\n \n \n 2) 공식 응원봉\n \n \n \n <공개방송 참여 시 주의 사항>\n \n 1) 공개방송 현장에서의 퇴장은 모든 공연이 끝난 뒤 가능합니다. 중도 퇴장 등 방송국 경호팀과의 마찰이 발생할 경우 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 여러분들의 즐거운 공개방송 참여를 위하여 현장 스태프의 통솔에 따라 주시기 바랍니다.\n \n 2) 각 방송 프로그램에 따라 입장 연령이나 신청이 제한될 수 있습니다. 신청 전에 반드시 프로그램 정보를 확인해 주십시오.\n \n 3) 공개방송이 진행되는 스튜디오 내 사진·동영상 촬영 및 녹음은 엄격하게 금지되어 있으며, 촬영 및 녹음이 가능한 장비의 반입 역시 금지되어 있습니다. 공개방송 현장에서 사진, 영상 촬영 및 녹음 적발 시 방송국 경호팀 또는 방송국 스태프의 재량으로 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 공개방송에 참여한 모든 여러분의 안전과 즐거운 공연 관람을 위한 부분으로 양해와 협조 부탁드립니다.\n \n ** 적발 시 즉시 퇴장 조치 후, 촬영한 사진, 영상, 녹음은 전부 현장에서 삭제 처리됩니다. 퇴장 조치 시 발생하는 기기 파손에 대해 당사에서는 일체 책임을 지지 않습니다.\n \n ** 촬영 적발 시, 추후 진행되는 공개방송에 참여하실 수 없습니다.\n \n 4) ourola 공식 응원봉을 제외한 개인 응원도구(플랜카드, 슬로건, 핸드폰 전광판 앱, 인형, 부채 등)의 사용은 금지되어 있습니다.\n \n 5) ourola 멤버들의 출·퇴근 시 멤버들의 차량으로 달려들거나 하는 등의 행위는 매우 위험합니다. 해당 행동이 발견되는 경우, 해당 회원은 추후 진행되는 공개방송에 참여하실 수 없습니다. 모두의 안전을 위해 서로 배려하여 안전한 공개방송 현장이 될 수 있도록 부탁드립니다.\n \n 6) 팬클럽석이 지정된 경우, 임의로 자리를 이탈하는 행동은 금지되어 있습니다.\n \n 7) 공개방송 현장에서 ourola 멤버들에게 편지 전달이 가능합니다. 현장 스태프에게 준비한 편지를 전달해주시면 ourola 멤버들에게 전달합니다.\n \n ** 편지를 제외한 모든 선물은 전달 불가합니다.\n \n \n \n 공개방송에 참여한 모두가 안전하고 즐거운 공연을 관람할 수 있도록 해당 공지를 참여 전 꼼꼼하게 읽어주시길 부탁드립니다.\n \n 공지 내용 일부가 수정, 추가될 수 있습니다.\n \n 공지 미확인으로 인한 불이익은 책임지지 않으니 유의 바랍니다.\n  \n \n \n ourola  여러분의 많은 관심과 성원 부탁드립니다.\n  \n  감사합니다.','2023-08-24 15:35:00','2023-08-17 09:00:00','bdfad198147bb38dfaca8ab6685daf339f8b56d26ebe2d81eacf2ccdaf821869',NULL,10,0,'2023-08-18 21:00:00'),(61,18,'Mnet 엠카운트다운','\n안녕하세요.ourola 그룹 담당자입니다.\n\n\n8월 24일 (목요일) Mnet 엠카운트다운 참여 안내입니다.\n많은 팬 분들의 신청 부탁드립니다.\n\n\n\n▶ Mnet 엠카운트다운 사전녹화\n\n- 녹화예정시간 : 2023년 8월 24일(목) 3:35 PM\n- 인원체크장소 : 상암동 CJ ENM 센터 앞\n- 인원체크시간 : 2023년 8월 24일 (목) 1:30 PM ~ 2:30 PM (KST)\n\n\n* 해당 공연은 만 15세 이상 부터 참여가 가능합니다.\n\n* 모든 녹화 현장에는 인원체크 시 배부받은 팔찌를 반드시 지참하셔야 합니다. 훼손, 분실의 경우 입장이 제한됩니다.\n\n* 당일 공연 좌석은 인원 체크 순서와는 무관하므로 임의로 대기줄 생성하는 행위는 금합니다.\n\n\n\n <신청 방법 안내>\n\n▶ Mnet 엠카운트다운 신청\n\n - 신청일시 : 2023년 8월 18일(금) 9:00 AM ~ 9:00 PM (KST)\n\n\n** 해당 일시에 신청 페이지 새로고침이 필요합니다. 미리 로그인으 해서 접속한 후 신청 시간에 맞춰 참여 신청을 완료해주시기 바랍니다.\n\n** 신청 페이지는 서버 시간을 기준으로 합니다.\n** 신청 인원이 마감된 경우 신청 버튼이 비활성화됩니다.\n** 신청 마감 후 버튼 좌측 신청 인원수와 함께 신청한 순서(입장 번호)가 표시됩니다.\n\n** 신청 취소 시에는 신청 내용(신청 내역 및 입장번호)을 복구해드리지 않습니다.\n\n\n\n <주의 사항>\n * 부정한 프로그램을 통한 신청자, 금전 거래를 통해 대리 신청을 하는 신청자, 본인이 아닌 타인(친구, 지인 등)을 통해 신청하는 신청자, 배부받은 번호를 양도하는 신청자 또는 양도받은 신청자 등 부정한 방법이 발견되면, 어떠한 경우에도 배부받은 입장 번호는 인정되지 않으며 해당 공개방송 참여 불가 및 공개방송 불참자와 동일한 불이익이 적용 됩니다.\n\n\n\n <공개방송 참여 팬 확인 준비물 안내>\n ** 확인 준비물 중 한 가지라도 없을 시, 당일 공개방송 입장이 불가합니다.\n\n1) 신분증 (본인 확인 가능한 사진 필수)\n- 대한민국 국적 : 여권, 주민등록증, 운전면허증, 청소년증(주민센터 발급)\n- 대한민국 국적 외 : 여권, 외국인등록증\n\n** 사진, 프린트물, 모바일 화면 캡쳐 등은 인정되지 않습니다.\n** 신분증에 부착된 사진이 본인 증명사진이 아니거나, 스티커 또는 낙서 등으로 훼손되어 사진 확인이 어려운 경우 해당 신분증으로 본인 확인이 불가합니다.\n** 현장에서 신분증과 실제 얼굴이 일치하지 않을 경우 추가 확인 요청을 드릴 수 있습니다.\n** ourola 가입자 정보와 신분증 상의 정보가 상이한 경우 추가 확인 요청을 드릴 수 있습니다.\n\n** 모바일 신분증은 캡처 파일을 인정하지 않습니다. 현장에서 모바일 신분증 앱 실행을 요청할 수 있습니다.\n** 학생증으로는 본인 확인 불가합니다.\n** 유효기간이 만료된 신분증으로는 본인 확인이 불가합니다.\n** 영문 외로 가입하여 여권의 영문명으로 확인이 불가할 경우, 현장에서 사진과 영문 외 이름이 기입된 신분증을 추가 확인 요청드릴 수 있습니다. 사전 준비 및 협조 부탁드립니다.\n\n** 추가 확인 요청시 협조 부탁드립니다.\n\n 3) 공식 응원봉\n\n\n\n<공개방송 참여 시 주의 사항>\n1) 공개방송 현장에서의 퇴장은 모든 공연이 끝난 뒤 가능합니다. 중도 퇴장 등 방송국 경호팀과의 마찰이 발생할 경우 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 여러분들의 즐거운 공개방송 참여를 위하여 현장 스태프의 통솔에 따라 주시기 바랍니다.\n\n2) 각 방송 프로그램에 따라 입장 연령이나 신청이 제한될 수 있습니다. 신청 전에 반드시 프로그램 정보를 확인해 주십시오.\n\n3) 공개방송이 진행되는 스튜디오 내 사진·동영상 촬영 및 녹음은 엄격하게 금지되어 있으며, 촬영 및 녹음이 가능한 장비의 반입 역시 금지되어 있습니다. 공개방송 현장에서 사진, 영상 촬영 및 녹음 적발 시 방송국 경호팀 또는 방송국 스태프의 재량으로 팬클럽석 입장 제한 등의 불이익이 발생할 수 있습니다. 공개방송에 참여한 모든 여러분의 안전과 즐거운 공연 관람을 위한 부분으로 양해와 협조 부탁드립니다.\n** 적발 시 즉시 퇴장 조치 후, 촬영한 사진, 영상, 녹음은 전부 현장에서 삭제 처리됩니다. 퇴장 조치 시 발생하는 기기 파손에 대해 당사에서는 일체 책임을 지지 않습니다.\n** 촬영 적발 시, 추후 진행되는 공개방송에 참여하실 수 없습니다.\n\n4) ourola 공식 응원봉을 제외한 개인 응원도구(플랜카드, 슬로건, 핸드폰 전광판 앱, 인형, 부채 등)의 사용은 금지되어 있습니다.\n\n5) ourola 멤버들의 출·퇴근 시 멤버들의 차량으로 달려들거나 하는 등의 행위는 매우 위험합니다. 해당 행동이 발견되는 경우, 해당 회원은 추후 진행되는 공개방송에 참여하실 수 없습니다. 모두의 안전을 위해 서로 배려하여 안전한 공개방송 현장이 될 수 있도록 부탁드립니다.\n\n6) 팬클럽석이 지정된 경우, 임의로 자리를 이탈하는 행동은 금지되어 있습니다.\n\n7) 공개방송 현장에서 ourola 멤버들에게 편지 전달이 가능합니다. 현장 스태프에게 준비한 편지를 전달해주시면 ourola 멤버들에게 전달합니다.\n** 편지를 제외한 모든 선물은 전달 불가합니다.\n\n\n공개방송에 참여한 모두가 안전하고 즐거운 공연을 관람할 수 있도록 해당 공지를 참여 전 꼼꼼하게 읽어주시길 부탁드립니다.\n현장 상황에 따라 공지 내용 일부가 수정, 추가될 수 있습니다.\n공지 미확인으로 인한 불이익은 책임지지 않으니 유의 바랍니다.\n\n\nourola 팬 여러분의 많은 관심과 성원 부탁드립니다.\n  \n감사합니다.','2023-08-24 15:35:00','2023-08-17 09:00:00','bdfad198147bb38dfaca8ab6685daf339f8b56d26ebe2d81eacf2ccdaf821869',NULL,10,2,'2023-08-18 21:00:00');
/*!40000 ALTER TABLE `open_live` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `open_live_participant`
--

DROP TABLE IF EXISTS `open_live_participant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `open_live_participant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `open_live_id` int DEFAULT NULL,
  `fan_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_open_live_participant_open_live_idx` (`open_live_id`),
  KEY `fk_open_live_participant_fan_user1_idx` (`fan_id`),
  CONSTRAINT `fk_open_live_participant_fan_user1` FOREIGN KEY (`fan_id`) REFERENCES `fan_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_open_live_participant_open_live` FOREIGN KEY (`open_live_id`) REFERENCES `open_live` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `open_live_participant`
--

LOCK TABLES `open_live_participant` WRITE;
/*!40000 ALTER TABLE `open_live_participant` DISABLE KEYS */;
INSERT INTO `open_live_participant` VALUES (6,35,1),(132,41,3),(158,37,3),(159,39,3),(205,52,16),(207,52,1),(216,61,16);
/*!40000 ALTER TABLE `open_live_participant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_file`
--

DROP TABLE IF EXISTS `profile_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_file` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file_path` varchar(100) DEFAULT NULL,
  `file_extension` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_file`
--

LOCK TABLES `profile_file` WRITE;
/*!40000 ALTER TABLE `profile_file` DISABLE KEYS */;
INSERT INTO `profile_file` VALUES (1,'/app/file/profileImg/defaultProfile','jpg'),(2,'/app/file/profileImg/32aed4af44b7331a4aae35d0d4b603961a5cc5560527695bfd4741afc27bb6b8','jpg'),(3,'/app/file/profileImg/32aed4af44b7331a4aae35d0d4b603961a5cc5560527695bfd4741afc27bb6b8','jpg'),(4,'/app/file/profileImg/d5bfcaacd2461ad944582d54efe48de2deade171a311561a09c837af04613c77','jpg'),(5,'/app/file/profileImg/3dcd42efa297d8126cf53865bdbafe3c85ced74a3226572501a9c9dc8a84205c','png'),(6,'/app/file/profileImg/d5bfcaacd2461ad944582d54efe48de2deade171a311561a09c837af04613c77','jpg'),(7,'/app/file/profileImg/3dcd42efa297d8126cf53865bdbafe3c85ced74a3226572501a9c9dc8a84205c','png'),(8,'/app/file/profileImg/d5bfcaacd2461ad944582d54efe48de2deade171a311561a09c837af04613c77','jpg'),(9,'/app/file/profileImg/3dcd42efa297d8126cf53865bdbafe3c85ced74a3226572501a9c9dc8a84205c','png'),(10,'/app/file/profileImg/d5bfcaacd2461ad944582d54efe48de2deade171a311561a09c837af04613c77','jpg'),(11,'/app/file/profileImg/cgy','jpg'),(12,'/app/file/profileImg/jjw','jpg'),(13,'/app/file/profileImg/sjh','jpg'),(14,'/app/file/profileImg/jch','jpg'),(15,'/app/file/profileImg/cyc','jpg'),(16,'/app/file/profileImg/kks','jpg');
/*!40000 ALTER TABLE `profile_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `re_comment`
--

DROP TABLE IF EXISTS `re_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `re_comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  `comment_id` int DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_fan_user_TO_re_comment_1` (`user_id`),
  KEY `FK_artist_user_TO_re_comment_1` (`artist_id`),
  KEY `FK_comment_TO_re_comment_1` (`comment_id`),
  CONSTRAINT `FK_artist_user_TO_re_comment_1` FOREIGN KEY (`artist_id`) REFERENCES `artist_user` (`id`),
  CONSTRAINT `FK_comment_TO_re_comment_1` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_fan_user_TO_re_comment_1` FOREIGN KEY (`user_id`) REFERENCES `fan_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `re_comment`
--

LOCK TABLES `re_comment` WRITE;
/*!40000 ALTER TABLE `re_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `re_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_file`
--

DROP TABLE IF EXISTS `shop_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop_file` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file_path` varchar(255) DEFAULT NULL,
  `membership_pay_id` int DEFAULT NULL,
  `online_concert_id` int DEFAULT NULL,
  `is_main` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_shop_file_membership_pay_idx` (`membership_pay_id`),
  KEY `fk_shop_file_online_concert1_idx` (`online_concert_id`),
  CONSTRAINT `fk_shop_file_membership_pay` FOREIGN KEY (`membership_pay_id`) REFERENCES `membership_pay` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_shop_file_online_concert1` FOREIGN KEY (`online_concert_id`) REFERENCES `online_concert` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_file`
--

LOCK TABLES `shop_file` WRITE;
/*!40000 ALTER TABLE `shop_file` DISABLE KEYS */;
INSERT INTO `shop_file` VALUES (1,'d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',3,NULL,0),(2,'8b10eb5e4507cbd4db300b6ab8102bce72c917a65067367c11cdc2c739088991',3,NULL,0),(3,'93f035595886b34381ca316a75d01952771cbab2c38b36db4467ba1ccda56978',3,NULL,1),(4,'d9d03850b9483b28b5ce45dbb971ec3853401e9d02881bcfd582cd64edcb1365',4,NULL,0),(5,'8b10eb5e4507cbd4db300b6ab8102bce72c917a65067367c11cdc2c739088991',4,NULL,0),(6,'93f035595886b34381ca316a75d01952771cbab2c38b36db4467ba1ccda56978',4,NULL,1),(30,'0a4ca9bc91ee23b25beb7e5cce8e9f06e7f71dfc905a2d468bce88bcd13ee6bd',NULL,3,0),(31,'6a856e02a8c767a7b8aba011aee6566dc5ef3756618d2e3a5248deed19dfd8e6',NULL,9,0);
/*!40000 ALTER TABLE `shop_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_cart`
--

DROP TABLE IF EXISTS `shopping_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `membership_id` int DEFAULT NULL,
  `concert_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_fan_user_TO_shopping_cart_1` (`user_id`),
  KEY `FK_membership_pay_TO_shopping_cart_1` (`membership_id`),
  KEY `FK_online_concert_TO_shopping_cart_1` (`concert_id`),
  CONSTRAINT `FK_fan_user_TO_shopping_cart_1` FOREIGN KEY (`user_id`) REFERENCES `fan_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_membership_pay_TO_shopping_cart_1` FOREIGN KEY (`membership_id`) REFERENCES `membership_pay` (`id`),
  CONSTRAINT `FK_online_concert_TO_shopping_cart_1` FOREIGN KEY (`concert_id`) REFERENCES `online_concert` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_cart`
--

LOCK TABLES `shopping_cart` WRITE;
/*!40000 ALTER TABLE `shopping_cart` DISABLE KEYS */;
INSERT INTO `shopping_cart` VALUES (94,18,8,NULL),(141,17,8,NULL),(142,17,NULL,9);
/*!40000 ALTER TABLE `shopping_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_membership_info`
--

DROP TABLE IF EXISTS `user_membership_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_membership_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `membership_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `expire_date` datetime DEFAULT ((now() + interval 1 year)),
  `group_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_membership_pay_TO_user_membership_info_1` (`membership_id`),
  KEY `FK_fan_user_TO_user_membership_info_1` (`user_id`),
  CONSTRAINT `FK_fan_user_TO_user_membership_info_1` FOREIGN KEY (`user_id`) REFERENCES `fan_user` (`id`),
  CONSTRAINT `FK_membership_pay_TO_user_membership_info_1` FOREIGN KEY (`membership_id`) REFERENCES `membership_pay` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_membership_info`
--

LOCK TABLES `user_membership_info` WRITE;
/*!40000 ALTER TABLE `user_membership_info` DISABLE KEYS */;
INSERT INTO `user_membership_info` VALUES (1,1,17,'2024-08-02 05:32:01','seventeen');
/*!40000 ALTER TABLE `user_membership_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_call`
--

DROP TABLE IF EXISTS `video_call`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video_call` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `start_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `content` varchar(1000) DEFAULT NULL,
  `tag` varchar(200) DEFAULT NULL,
  `session_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_group_channel_TO_video_call_1` (`group_id`),
  KEY `FK_artist_user_TO_video_call_1` (`artist_id`),
  CONSTRAINT `FK_artist_user_TO_video_call_1` FOREIGN KEY (`artist_id`) REFERENCES `artist_user` (`id`),
  CONSTRAINT `FK_group_channel_TO_video_call_1` FOREIGN KEY (`group_id`) REFERENCES `group_channel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_call`
--

LOCK TABLES `video_call` WRITE;
/*!40000 ALTER TABLE `video_call` DISABLE KEYS */;
INSERT INTO `video_call` VALUES (1,1,9,'호시노 창호의 돔공연 팬싸인회','2023-08-14 00:00:00','불세출의 아이돌 호시노 창호의 팬싸인회','','hosinochangho'),(2,1,9,'진용원 옥탑방 사인회','2023-08-14 00:00:00','전세계를 울린 J-POP의 황제, AI같은 노래를 부르는 진용원의 사인회','','rooftopcat');
/*!40000 ALTER TABLE `video_call` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_call_user`
--

DROP TABLE IF EXISTS `video_call_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video_call_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `video_call_id` int NOT NULL,
  `start_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_video_call_user_fan_user_idx` (`user_id`),
  KEY `fk_video_call_user_video_call1_idx` (`video_call_id`),
  CONSTRAINT `fk_video_call_user_fan_user` FOREIGN KEY (`user_id`) REFERENCES `fan_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_video_call_user_video_call1` FOREIGN KEY (`video_call_id`) REFERENCES `video_call` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_call_user`
--

LOCK TABLES `video_call_user` WRITE;
/*!40000 ALTER TABLE `video_call_user` DISABLE KEYS */;
INSERT INTO `video_call_user` VALUES (1,16,1,'2023-08-15 19:00:00'),(2,1,1,'2023-08-15 19:00:00');
/*!40000 ALTER TABLE `video_call_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-17 22:10:40
