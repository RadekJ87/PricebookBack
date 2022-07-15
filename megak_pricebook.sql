-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 11 Lip 2022, 19:38
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `megak_pricebook`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `products`
--

CREATE TABLE `products` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `drawingNumber` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revision` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `itemNumber` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `moq` smallint(6) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `offerNumber` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `products`
--

INSERT INTO `products` (`id`, `description`, `drawingNumber`, `revision`, `itemNumber`, `moq`, `price`, `offerNumber`) VALUES
('1', 'Komoda', '25673', '1', '1234324', 12, '213.00', ''),
('1d109c57-8704-42d0-87d9-feaf4b3a1dc6', 'Auto', '111', '1', '23', 12, '23.00', '1233123'),
('2', 'Biurko', '456', '0', '12345', 10, '6.00', '123'),
('2d816d96-e922-4f63-b69d-42c2ba16cefe', 'sdf', '666', '66', '666', 666, '666.00', ''),
('3', 'Rower', '789', '55', '122', 5, '1.00', '2323'),
('4', 'Miks', '123213', '2', '', 4, '65.23', ''),
('4419293e-9bd3-4e01-b863-f156fc6b81fb', 'Welded table', '000456', '0', '', 5, '123.99', ''),
('5', 'Krzesło', '1245255645', '12', '564654', 1, '234.00', ''),
('5401a259-4ddc-4471-9800-f34ec2b8b25f', 'Welded table', '000456', '0', '', 5, '123.99', ''),
('58912500-10a0-4715-bc9d-7e69e057b4fc', 'Welded table', '000456', '0', '', 5, '123.99', ''),
('6c1aa3cd-b7c9-4859-8649-dc7826033598', 'Welded table', '000456', '0', '', 5, '123.99', ''),
('a1d43242-c595-408e-b82a-8ca97109ea24', 'Welded table', '000456', '0', '', 5, '123.99', ''),
('d5eceae3-cf4b-4c3e-8c60-b0f5b813e339', 'Misiek', '123', '32', '324', 1, '11.00', ''),
('f827ebd2-5334-4811-ba6d-dabf841d1121', 'Welded table', '000456', '0', '', 5, '123.99', '');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
