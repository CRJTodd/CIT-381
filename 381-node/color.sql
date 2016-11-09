DROP TABLE IF EXISTS `ctodd`.`COLOR`;

CREATE TABLE `ctodd`.`COLOR` (
  `COLOR_ID` INT NOT NULL AUTO_INCREMENT,
  `COLOR_NAME` VARCHAR(45) NOT NULL,
  `COLOR_HEX` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`COLOR_ID`));

INSERT INTO `ctodd`.`COLOR` (`COLOR_NAME`, `COLOR_HEX`) VALUES ('RED', '#FF0000');
INSERT INTO `ctodd`.`COLOR` (`COLOR_NAME`, `COLOR_HEX`) VALUES ('GREEN', '#00FF00');
INSERT INTO `ctodd`.`COLOR` (`COLOR_NAME`, `COLOR_HEX`) VALUES ('BLUE', '#0000FF');