-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ourola
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ourola
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ourola` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ourola` ;

-- -----------------------------------------------------
-- Table `ourola`.`group_channel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`group_channel` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`profile_file`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`profile_file` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `file_path` VARCHAR(100) NULL DEFAULT NULL,
  `file_extension` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`artist_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`artist_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `group_id` INT NULL DEFAULT NULL,
  `profile_id` INT NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(1000) NULL DEFAULT NULL,
  `name` VARCHAR(20) NULL DEFAULT NULL,
  `age` INT NULL DEFAULT NULL,
  `regist_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `resign` TINYINT(1) NULL DEFAULT '0',
  `is_admin` TINYINT(1) NULL DEFAULT NULL,
  `tel` VARCHAR(15) NULL DEFAULT NULL,
  `refresh_token` VARCHAR(100) NULL DEFAULT NULL,
  `role` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_group_channel_TO_artist_user_1` (`group_id` ASC) VISIBLE,
  INDEX `FK_profile_file_TO_artist_user_1` (`profile_id` ASC) VISIBLE,
  CONSTRAINT `FK_group_channel_TO_artist_user_1`
    FOREIGN KEY (`group_id`)
    REFERENCES `ourola`.`group_channel` (`id`),
  CONSTRAINT `FK_profile_file_TO_artist_user_1`
    FOREIGN KEY (`profile_id`)
    REFERENCES `ourola`.`profile_file` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`announcement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`announcement` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `group_id` INT NULL DEFAULT NULL,
  `artist_id` INT NULL DEFAULT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `content` VARCHAR(1000) NULL DEFAULT NULL,
  `create_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `FK_group_channel_TO_announcement_1` (`group_id` ASC) VISIBLE,
  INDEX `FK_artist_user_TO_announcement_1` (`artist_id` ASC) VISIBLE,
  CONSTRAINT `FK_artist_user_TO_announcement_1`
    FOREIGN KEY (`artist_id`)
    REFERENCES `ourola`.`artist_user` (`id`),
  CONSTRAINT `FK_group_channel_TO_announcement_1`
    FOREIGN KEY (`group_id`)
    REFERENCES `ourola`.`group_channel` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`fan_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`fan_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `profile_id` INT NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(1000) NULL DEFAULT NULL,
  `name` VARCHAR(20) NULL DEFAULT NULL,
  `age` INT NULL DEFAULT NULL,
  `regist_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `resign` TINYINT(1) NULL DEFAULT '0',
  `is_admin` TINYINT(1) NULL DEFAULT '0',
  `refresh_token` VARCHAR(1000) NULL DEFAULT NULL,
  `tel` VARCHAR(15) NULL DEFAULT NULL,
  `role` VARCHAR(30) NULL DEFAULT NULL,
  `nickname` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_profile_file_TO_fan_user_1` (`profile_id` ASC) VISIBLE,
  CONSTRAINT `FK_profile_file_TO_fan_user_1`
    FOREIGN KEY (`profile_id`)
    REFERENCES `ourola`.`profile_file` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`membership_pay`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`membership_pay` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `group_id` INT NULL DEFAULT NULL,
  `title` VARCHAR(45) NULL DEFAULT NULL,
  `price` INT NULL DEFAULT NULL,
  `detail` VARCHAR(100) NULL DEFAULT NULL,
  `create_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `expiration_date` VARCHAR(10) NULL DEFAULT '1년',
  PRIMARY KEY (`id`),
  INDEX `FK_group_channel_TO_membership_pay_1` (`group_id` ASC) VISIBLE,
  CONSTRAINT `FK_group_channel_TO_membership_pay_1`
    FOREIGN KEY (`group_id`)
    REFERENCES `ourola`.`group_channel` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`online_concert`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`online_concert` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `group_id` INT NULL DEFAULT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `content` VARCHAR(1000) NULL DEFAULT NULL,
  `start_time` DATETIME NULL DEFAULT NULL,
  `ticketing_time` DATETIME NULL DEFAULT NULL,
  `create_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `price` INT NULL DEFAULT NULL,
  `file_path` VARCHAR(100) NULL DEFAULT NULL,
  `file_extension` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_group_channel_TO_online_concert_1` (`group_id` ASC) VISIBLE,
  CONSTRAINT `FK_group_channel_TO_online_concert_1`
    FOREIGN KEY (`group_id`)
    REFERENCES `ourola`.`group_channel` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`bill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`bill` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `membership_id` INT NULL DEFAULT NULL,
  `concert_id` INT NULL DEFAULT NULL,
  `payment_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `FK_fan_user_TO_bill_1` (`user_id` ASC) VISIBLE,
  INDEX `FK_membership_pay_TO_bill_1` (`membership_id` ASC) VISIBLE,
  INDEX `FK_online_concert_TO_bill_1` (`concert_id` ASC) VISIBLE,
  CONSTRAINT `FK_fan_user_TO_bill_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_membership_pay_TO_bill_1`
    FOREIGN KEY (`membership_id`)
    REFERENCES `ourola`.`membership_pay` (`id`),
  CONSTRAINT `FK_online_concert_TO_bill_1`
    FOREIGN KEY (`concert_id`)
    REFERENCES `ourola`.`online_concert` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`feed`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`feed` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `group_id` INT NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  `artist_id` INT NULL DEFAULT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `content` VARCHAR(2000) NULL DEFAULT NULL,
  `read_count` INT NULL DEFAULT '0',
  `create_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `like` INT NULL DEFAULT '0',
  `type` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_group_channel_TO_feed_1` (`group_id` ASC) VISIBLE,
  INDEX `FK_fan_user_TO_feed_1` (`user_id` ASC) VISIBLE,
  INDEX `FK_artist_user_TO_feed_1` (`artist_id` ASC) VISIBLE,
  CONSTRAINT `FK_artist_user_TO_feed_1`
    FOREIGN KEY (`artist_id`)
    REFERENCES `ourola`.`artist_user` (`id`),
  CONSTRAINT `FK_fan_user_TO_feed_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_group_channel_TO_feed_1`
    FOREIGN KEY (`group_id`)
    REFERENCES `ourola`.`group_channel` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`bookmark`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`bookmark` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `feed_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_fan_user_TO_bookmark_1` (`user_id` ASC) VISIBLE,
  INDEX `FK_feed_TO_bookmark_1` (`feed_id` ASC) VISIBLE,
  CONSTRAINT `FK_fan_user_TO_bookmark_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_feed_TO_bookmark_1`
    FOREIGN KEY (`feed_id`)
    REFERENCES `ourola`.`feed` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`live`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`live` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `group_id` INT NULL DEFAULT NULL,
  `artist_id` INT NULL DEFAULT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `start_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `membership` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_group_channel_TO_live_1` (`group_id` ASC) VISIBLE,
  INDEX `FK_artist_user_TO_live_1` (`artist_id` ASC) VISIBLE,
  CONSTRAINT `FK_artist_user_TO_live_1`
    FOREIGN KEY (`artist_id`)
    REFERENCES `ourola`.`artist_user` (`id`),
  CONSTRAINT `FK_group_channel_TO_live_1`
    FOREIGN KEY (`group_id`)
    REFERENCES `ourola`.`group_channel` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`chatting`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`chatting` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `live_id` INT NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  `chat_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `content` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_live_TO_chatting_1` (`live_id` ASC) VISIBLE,
  INDEX `FK_fan_user_TO_chatting_1` (`user_id` ASC) VISIBLE,
  CONSTRAINT `FK_fan_user_TO_chatting_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_live_TO_chatting_1`
    FOREIGN KEY (`live_id`)
    REFERENCES `ourola`.`live` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `artist_id` INT NULL DEFAULT NULL,
  `feed_id` INT NULL DEFAULT NULL,
  `content` VARCHAR(1000) NULL DEFAULT NULL,
  `create_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `FK_fan_user_TO_comment_1` (`user_id` ASC) VISIBLE,
  INDEX `FK_artist_user_TO_comment_1` (`artist_id` ASC) VISIBLE,
  INDEX `FK_feed_TO_comment_1` (`feed_id` ASC) VISIBLE,
  CONSTRAINT `FK_artist_user_TO_comment_1`
    FOREIGN KEY (`artist_id`)
    REFERENCES `ourola`.`artist_user` (`id`),
  CONSTRAINT `FK_fan_user_TO_comment_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_feed_TO_comment_1`
    FOREIGN KEY (`feed_id`)
    REFERENCES `ourola`.`feed` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`fan_nickname`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`fan_nickname` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `group_id` INT NULL DEFAULT NULL,
  `nickname` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_fan_user_TO_fan_nickname_1` (`user_id` ASC) VISIBLE,
  INDEX `FK_group_channel_TO_fan_nickname_1` (`group_id` ASC) VISIBLE,
  CONSTRAINT `FK_fan_user_TO_fan_nickname_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_group_channel_TO_fan_nickname_1`
    FOREIGN KEY (`group_id`)
    REFERENCES `ourola`.`group_channel` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`file`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`file` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `feed_id` INT NULL DEFAULT NULL,
  `file_path` VARCHAR(100) NULL DEFAULT NULL,
  `file_extension` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_feed_TO_file_1` (`feed_id` ASC) VISIBLE,
  CONSTRAINT `FK_feed_TO_file_1`
    FOREIGN KEY (`feed_id`)
    REFERENCES `ourola`.`feed` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`group_subscribe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`group_subscribe` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `group_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_fan_user_TO_group_subscribe_1` (`user_id` ASC) VISIBLE,
  INDEX `FK_group_channel_TO_group_subscribe_1` (`group_id` ASC) VISIBLE,
  CONSTRAINT `FK_fan_user_TO_group_subscribe_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_group_channel_TO_group_subscribe_1`
    FOREIGN KEY (`group_id`)
    REFERENCES `ourola`.`group_channel` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`like`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`like` (
  `like_id` INT NOT NULL AUTO_INCREMENT,
  `feed_id` INT NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`like_id`),
  INDEX `FK_feed_TO_like_1` (`feed_id` ASC) VISIBLE,
  INDEX `FK_fan_user_TO_like_1` (`user_id` ASC) VISIBLE,
  CONSTRAINT `FK_fan_user_TO_like_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_feed_TO_like_1`
    FOREIGN KEY (`feed_id`)
    REFERENCES `ourola`.`feed` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`live_like`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`live_like` (
  `like_id` INT NOT NULL AUTO_INCREMENT,
  `live_id` INT NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`like_id`),
  INDEX `FK_live_TO_live_like_1` (`live_id` ASC) VISIBLE,
  INDEX `FK_fan_user_TO_live_like_1` (`user_id` ASC) VISIBLE,
  CONSTRAINT `FK_fan_user_TO_live_like_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_live_TO_live_like_1`
    FOREIGN KEY (`live_id`)
    REFERENCES `ourola`.`live` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`membership_contents`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`membership_contents` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `group_id` INT NULL DEFAULT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `create_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `file_path` VARCHAR(100) NULL DEFAULT NULL,
  `file_extension` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_group_channel_TO_membership_contents_1` (`group_id` ASC) VISIBLE,
  CONSTRAINT `FK_group_channel_TO_membership_contents_1`
    FOREIGN KEY (`group_id`)
    REFERENCES `ourola`.`group_channel` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`notification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`notification` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `group_id` INT NULL DEFAULT NULL,
  `feed_id` INT NULL DEFAULT NULL,
  `content` VARCHAR(1000) NULL DEFAULT NULL,
  `create_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `read` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_fan_user_TO_notification_1` (`user_id` ASC) VISIBLE,
  INDEX `FK_group_channel_TO_notification_1` (`group_id` ASC) VISIBLE,
  INDEX `FK_feed_TO_notification_1` (`feed_id` ASC) VISIBLE,
  CONSTRAINT `FK_fan_user_TO_notification_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_feed_TO_notification_1`
    FOREIGN KEY (`feed_id`)
    REFERENCES `ourola`.`feed` (`id`),
  CONSTRAINT `FK_group_channel_TO_notification_1`
    FOREIGN KEY (`group_id`)
    REFERENCES `ourola`.`group_channel` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`open_live_ participant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`open_live_ participant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `group_id` INT NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `content` VARCHAR(1000) NULL DEFAULT NULL,
  `start_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `file_path` VARCHAR(100) NULL DEFAULT NULL,
  `file_extension` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_group_channel_TO_open_live_ participant_1` (`group_id` ASC) VISIBLE,
  INDEX `FK_fan_user_TO_open_live_ participant_1` (`user_id` ASC) VISIBLE,
  CONSTRAINT `FK_fan_user_TO_open_live_ participant_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_group_channel_TO_open_live_ participant_1`
    FOREIGN KEY (`group_id`)
    REFERENCES `ourola`.`group_channel` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`re_comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`re_comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `artist_id` INT NULL DEFAULT NULL,
  `comment_id` INT NULL DEFAULT NULL,
  `content` VARCHAR(1000) NULL DEFAULT NULL,
  `create_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `FK_fan_user_TO_re_comment_1` (`user_id` ASC) VISIBLE,
  INDEX `FK_artist_user_TO_re_comment_1` (`artist_id` ASC) VISIBLE,
  INDEX `FK_comment_TO_re_comment_1` (`comment_id` ASC) VISIBLE,
  CONSTRAINT `FK_artist_user_TO_re_comment_1`
    FOREIGN KEY (`artist_id`)
    REFERENCES `ourola`.`artist_user` (`id`),
  CONSTRAINT `FK_comment_TO_re_comment_1`
    FOREIGN KEY (`comment_id`)
    REFERENCES `ourola`.`comment` (`id`),
  CONSTRAINT `FK_fan_user_TO_re_comment_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`shopping_cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`shopping_cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `membership_id` INT NULL DEFAULT NULL,
  `concert_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_fan_user_TO_shopping_cart_1` (`user_id` ASC) VISIBLE,
  INDEX `FK_membership_pay_TO_shopping_cart_1` (`membership_id` ASC) VISIBLE,
  INDEX `FK_online_concert_TO_shopping_cart_1` (`concert_id` ASC) VISIBLE,
  CONSTRAINT `FK_fan_user_TO_shopping_cart_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_membership_pay_TO_shopping_cart_1`
    FOREIGN KEY (`membership_id`)
    REFERENCES `ourola`.`membership_pay` (`id`),
  CONSTRAINT `FK_online_concert_TO_shopping_cart_1`
    FOREIGN KEY (`concert_id`)
    REFERENCES `ourola`.`online_concert` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`user_membership_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`user_membership_info` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `membership_id` INT NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  `expire_date` DATETIME NULL DEFAULT (now() + interval 1 year),
  `group_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_membership_pay_TO_user_membership_info_1` (`membership_id` ASC) VISIBLE,
  INDEX `FK_fan_user_TO_user_membership_info_1` (`user_id` ASC) VISIBLE,
  CONSTRAINT `FK_fan_user_TO_user_membership_info_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_membership_pay_TO_user_membership_info_1`
    FOREIGN KEY (`membership_id`)
    REFERENCES `ourola`.`membership_pay` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ourola`.`video_call`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ourola`.`video_call` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `group_id` INT NULL DEFAULT NULL,
  `artist_id` INT NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `start_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `content` VARCHAR(1000) NULL DEFAULT NULL,
  `tag` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_group_channel_TO_video_call_1` (`group_id` ASC) VISIBLE,
  INDEX `FK_artist_user_TO_video_call_1` (`artist_id` ASC) VISIBLE,
  INDEX `FK_fan_user_TO_video_call_1` (`user_id` ASC) VISIBLE,
  CONSTRAINT `FK_artist_user_TO_video_call_1`
    FOREIGN KEY (`artist_id`)
    REFERENCES `ourola`.`artist_user` (`id`),
  CONSTRAINT `FK_fan_user_TO_video_call_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `ourola`.`fan_user` (`id`),
  CONSTRAINT `FK_group_channel_TO_video_call_1`
    FOREIGN KEY (`group_id`)
    REFERENCES `ourola`.`group_channel` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
