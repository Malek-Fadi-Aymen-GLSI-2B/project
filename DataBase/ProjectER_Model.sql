-- MySQL Script generated by MySQL Workbench
-- Wed Feb 17 19:20:34 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Administration`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Administration` (
  `idAdministration` INT NULL,
  `idAdmin` VARCHAR(20) NULL,
  `idChannel` VARCHAR(20) NULL,
  PRIMARY KEY (`idAdministration`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Channels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Channels` (
  `idChannel` INT NULL,
  `Channel_Name` VARCHAR(20) NULL,
  `Channel_genre` VARCHAR(20) NULL,
  `Administration_idAdministration` INT NOT NULL,
  PRIMARY KEY (`idChannel`, `Administration_idAdministration`),
  INDEX `fk_Channel_Administration1_idx` (`Administration_idAdministration` ASC) VISIBLE,
  CONSTRAINT `fk_Channel_Administration1`
    FOREIGN KEY (`Administration_idAdministration`)
    REFERENCES `mydb`.`Administration` (`idAdministration`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Admin` (
  `idAdmin` INT NULL,
  `Admin_Name` VARCHAR(20) NULL,
  `Admin_Password` VARCHAR(20) NULL,
  `Administration_idAdministration` INT NOT NULL,
  PRIMARY KEY (`idAdmin`, `Administration_idAdministration`),
  INDEX `fk_Admin_Administration1_idx` (`Administration_idAdministration` ASC) VISIBLE,
  CONSTRAINT `fk_Admin_Administration1`
    FOREIGN KEY (`Administration_idAdministration`)
    REFERENCES `mydb`.`Administration` (`idAdministration`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Favoris`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Favoris` (
  `idFavoris` INT NULL,
  `idChannel` INT NULL,
  `idKnown_User` INT NULL,
  `Channels_idChannel` INT NOT NULL,
  `Channels_Administration_idAdministration` INT NOT NULL,
  PRIMARY KEY (`idFavoris`, `Channels_idChannel`, `Channels_Administration_idAdministration`),
  INDEX `fk_Favoris_Channels1_idx` (`Channels_idChannel` ASC, `Channels_Administration_idAdministration` ASC) VISIBLE,
  CONSTRAINT `fk_Favoris_Channels1`
    FOREIGN KEY (`Channels_idChannel` , `Channels_Administration_idAdministration`)
    REFERENCES `mydb`.`Channels` (`idChannel` , `Administration_idAdministration`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Known_User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Known_User` (
  `idKnown_User` INT NULL,
  `KU_Name` VARCHAR(20) NULL,
  `KUser_Password` VARCHAR(20) NULL,
  `Date_de_Naissance` DATE NULL,
  `E-mail` VARCHAR(30) NULL,
  `Favoris_idFavoris` INT NOT NULL,
  `KU_Prenoml` VARCHAR(20) NULL,
  PRIMARY KEY (`idKnown_User`, `Favoris_idFavoris`),
  INDEX `fk_Known_User_Favoris1_idx` (`Favoris_idFavoris` ASC) VISIBLE,
  CONSTRAINT `fk_Known_User_Favoris1`
    FOREIGN KEY (`Favoris_idFavoris`)
    REFERENCES `mydb`.`Favoris` (`idFavoris`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`UnKown_User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`UnKown_User` (
  `idUnKown_User` INT NULL,
  `UK_Username` VARCHAR(20) NULL,
  PRIMARY KEY (`idUnKown_User`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Channel_has_UnKown_User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Channel_has_UnKown_User` (
  `Channel_idChannel` INT NOT NULL,
  `UnKown_User_idUnKown_User` INT NOT NULL,
  PRIMARY KEY (`Channel_idChannel`, `UnKown_User_idUnKown_User`),
  INDEX `fk_Channel_has_UnKown_User_UnKown_User1_idx` (`UnKown_User_idUnKown_User` ASC) VISIBLE,
  INDEX `fk_Channel_has_UnKown_User_Channel1_idx` (`Channel_idChannel` ASC) VISIBLE,
  CONSTRAINT `fk_Channel_has_UnKown_User_Channel1`
    FOREIGN KEY (`Channel_idChannel`)
    REFERENCES `mydb`.`Channels` (`idChannel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Channel_has_UnKown_User_UnKown_User1`
    FOREIGN KEY (`UnKown_User_idUnKown_User`)
    REFERENCES `mydb`.`UnKown_User` (`idUnKown_User`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Known_User_has_Channel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Known_User_has_Channel` (
  `Known_User_idKnown_User` INT NOT NULL,
  `Known_User_Favoris_idFavoris` INT NOT NULL,
  `Channel_idChannel` INT NOT NULL,
  PRIMARY KEY (`Known_User_idKnown_User`, `Known_User_Favoris_idFavoris`, `Channel_idChannel`),
  INDEX `fk_Known_User_has_Channel_Channel1_idx` (`Channel_idChannel` ASC) VISIBLE,
  INDEX `fk_Known_User_has_Channel_Known_User1_idx` (`Known_User_idKnown_User` ASC, `Known_User_Favoris_idFavoris` ASC) VISIBLE,
  CONSTRAINT `fk_Known_User_has_Channel_Known_User1`
    FOREIGN KEY (`Known_User_idKnown_User` , `Known_User_Favoris_idFavoris`)
    REFERENCES `mydb`.`Known_User` (`idKnown_User` , `Favoris_idFavoris`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Known_User_has_Channel_Channel1`
    FOREIGN KEY (`Channel_idChannel`)
    REFERENCES `mydb`.`Channels` (`idChannel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
