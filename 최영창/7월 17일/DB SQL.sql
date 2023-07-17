CREATE TABLE `fan_user` (
	`Id`	int	NOT NULL,
	`profile_id`	int	NOT NULL,
	`email`	varchar(45)	NULL,
	`password`	varchar(45)	NULL,
	`name`	varchar(20)	NULL,
	`age`	int	NULL,
	`regist_date`	DATETIME	NULL,
	`resign`	boolean	NULL,
	`is_admin`	boolean	NULL,
	`membership`	boolean	NULL
);

CREATE TABLE `fan_feed` (
	`id`	int	NOT NULL,
	`group_id`	int	NOT NULL,
	`user_Id`	int	NOT NULL,
	`artist_id`	int	NOT NULL,
	`title`	varchar(100)	NULL,
	`content`	varchar(2000)	NULL,
	`read_count`	int	NULL,
	`create_date`	DATETIME	NULL,
	`update_date`	DATETIME	NULL,
	`like`	int	NULL,
	`type`	int	NULL
);

CREATE TABLE `group_channel` (
	`id`	int	NOT NULL,
	`user_id`	int	NOT NULL,
	`name`	varchar(45)	NULL
);

CREATE TABLE `bookmark` (
	`id`	int	NOT NULL,
	`user_Id`	int	NOT NULL,
	`feed_id`	int	NOT NULL
);

CREATE TABLE `notification` (
	`id`	int	NOT NULL,
	`user_Id`	int	NOT NULL,
	`group_id`	int	NOT NULL,
	`content`	varchar(1000)	NULL,
	`create_date`	DATETIME	NULL,
	`read`	boolean	NULL
);

CREATE TABLE `comment` (
	`id`	int	NOT NULL,
	`user_Id`	int	NOT NULL,
	`artist_Id`	int	NOT NULL,
	`feed_id`	int	NOT NULL,
	`content`	varchar(1000)	NULL,
	`create_date`	DATETIME	NULL,
	`update_time`	DATETIME	NULL
);

CREATE TABLE `re_comment` (
	`id`	int	NOT NULL,
	`user_id`	int	NOT NULL,
	`artist_Id`	int	NOT NULL,
	`comment_id`	int	NOT NULL,
	`content`	varchar(1000)	NULL,
	`create_date`	DATETIME	NULL,
	`update_date`	DATETIME	NULL
);

CREATE TABLE `file` (
	`id`	int	NOT NULL,
	`feed_id`	int	NOT NULL,
	`file_path`	varchar(100)	NULL,
	`file_extension`	varchar(10)	NULL
);

CREATE TABLE `profile_file` (
	`id`	int	NOT NULL,
	`file_path`	varchar(100)	NULL,
	`file_extension`	varchar(10)	NULL
);

CREATE TABLE `artist_user` (
	`Id`	int	NOT NULL,
	`group_id`	int	NOT NULL,
	`profile_id`	int	NOT NULL,
	`email`	varchar(45)	NULL,
	`password`	varchar(45)	NULL,
	`name`	varchar(20)	NULL,
	`age`	int	NULL,
	`regist_date`	DATETIME	NULL,
	`resign`	boolean	NULL,
	`is_admin`	boolean	NULL
);

CREATE TABLE `announcement` (
	`id`	int	NOT NULL,
	`group_id`	int	NOT NULL,
	`artist_id`	int	NOT NULL,
	`title`	varchar(100)	NULL,
	`content`	varchar(1000)	NULL,
	`create_time`	DATETIME	NULL
);

CREATE TABLE `bill` (
	`id`	int	NOT NULL,
	`user_Id`	int	NOT NULL,
	`membership_id`	int	NOT NULL,
	`concert_id`	int	NOT NULL,
	`payment_date`	DATETIME	NULL,
	`is_membership`	VARCHAR(255)	NULL
);

CREATE TABLE `membership_pay` (
	`id`	int	NOT NULL,
	`title`	varchar(45)	NULL,
	`price`	int	NULL,
	`detail`	varchar(100)	NULL,
	`create_date`	DATETIME	NULL
);

CREATE TABLE `online_concert` (
	`id`	int	NOT NULL,
	`title`	varchar(100)	NULL,
	`content`	varchar(1000)	NULL,
	`start_time`	DATETIME	NULL,
	`ticketing_time`	DATETIME	NULL,
	`create_date`	DATETIME	NULL,
	`price`	int	NULL,
	`file_path`	varchar(100)	NULL,
	`file_extension`	VARCHAR(255)	NULL
);

CREATE TABLE `like` (
	`like_id`	int	NOT NULL,
	`feed_id`	int	NOT NULL,
	`user_Id`	int	NOT NULL
);

ALTER TABLE `fan_user` ADD CONSTRAINT `PK_FAN_USER` PRIMARY KEY (
	`Id`
);

ALTER TABLE `fan_feed` ADD CONSTRAINT `PK_FAN_FEED` PRIMARY KEY (
	`id`
);

ALTER TABLE `group_channel` ADD CONSTRAINT `PK_GROUP_CHANNEL` PRIMARY KEY (
	`id`
);

ALTER TABLE `bookmark` ADD CONSTRAINT `PK_BOOKMARK` PRIMARY KEY (
	`id`
);

ALTER TABLE `notification` ADD CONSTRAINT `PK_NOTIFICATION` PRIMARY KEY (
	`id`
);

ALTER TABLE `comment` ADD CONSTRAINT `PK_COMMENT` PRIMARY KEY (
	`id`
);

ALTER TABLE `re_comment` ADD CONSTRAINT `PK_RE_COMMENT` PRIMARY KEY (
	`id`
);

ALTER TABLE `file` ADD CONSTRAINT `PK_FILE` PRIMARY KEY (
	`id`
);

ALTER TABLE `profile_file` ADD CONSTRAINT `PK_PROFILE_FILE` PRIMARY KEY (
	`id`
);

ALTER TABLE `artist_user` ADD CONSTRAINT `PK_ARTIST_USER` PRIMARY KEY (
	`Id`
);

ALTER TABLE `announcement` ADD CONSTRAINT `PK_ANNOUNCEMENT` PRIMARY KEY (
	`id`
);

ALTER TABLE `bill` ADD CONSTRAINT `PK_BILL` PRIMARY KEY (
	`id`
);

ALTER TABLE `membership_pay` ADD CONSTRAINT `PK_MEMBERSHIP_PAY` PRIMARY KEY (
	`id`
);

ALTER TABLE `online_concert` ADD CONSTRAINT `PK_ONLINE_CONCERT` PRIMARY KEY (
	`id`
);

ALTER TABLE `like` ADD CONSTRAINT `PK_LIKE` PRIMARY KEY (
	`like_id`
);

