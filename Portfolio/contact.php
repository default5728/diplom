<?php
// Підключення до бази даних MySQL
$host = "localhost";
$user = "root";
$pass = "";
$db   = "portfolio_db";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Помилка підключення: " . $conn->connect_error);
}

// Отримання даних з форми
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Запис повідомлення в БД
    $sql = "INSERT INTO feedback (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Дякуємо! Повідомлення успішно надіслано.'); window.location.href='index.html';</script>";
    } else {
        echo "Помилка запису: " . $conn->error;
    }
}
$conn->close();
?>