-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.6.0-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for procedure company.employeeAddOrEdit
DELIMITER //
CREATE PROCEDURE `employeeAddOrEdit`(IN `_id` INT, IN `_name` VARCHAR(45), IN `_salary` INT)
BEGIN 
    IF _id = 0 THEN 
        INSERT INTO employees(name, salary) 
        VALUES(_name, _salary); 
        
        SET _id = LAST_INSERT_ID(); 
    ELSE 
        UPDATE employees 
        SET 
            name = _name, 
            salary = _salary 
            WHERE id = _id; 
    END IF; 
    SELECT _id AS id;  
END//
DELIMITER ;

-- Dumping structure for table company.employees
CREATE TABLE IF NOT EXISTS `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

-- Dumping data for table company.employees: ~30 rows (approximately)
DELETE FROM `employees`;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` (`id`, `name`, `salary`) VALUES
	(1, 'Ronnica', 970516),
	(2, 'Cynthy', 858322),
	(3, 'Ophelie', 306974),
	(4, 'Janot', 414278),
	(5, 'Rayshell', 362056),
	(6, 'Faunie', 429620),
	(7, 'Mallory', 158048),
	(8, 'Jeno', 933094),
	(9, 'Morgun', 440679),
	(10, 'Bessie', 482390),
	(11, 'Constantino', 775622),
	(12, 'Tersina', 702719),
	(13, 'Janessa', 636190),
	(14, 'Saleem', 726269),
	(15, 'Anita', 137027),
	(16, 'Hetti', 181825),
	(17, 'Edita', 384438),
	(18, 'Aimil', 247814),
	(19, 'Roderick', 112032),
	(20, 'Ange', 301293),
	(21, 'Pieter', 377287),
	(22, 'Heall', 384522),
	(23, 'Enos', 754849),
	(24, 'Mordecai', 472300),
	(25, 'Timothy', 644568),
	(26, 'Ki', 967469),
	(27, 'Evelina', 245136),
	(28, 'Drusi', 326711),
	(29, 'Antoine', 828121),
	(30, 'Adolf', 284085);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
