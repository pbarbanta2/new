<?php
// Verificăm dacă s-au primit date prin POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Colectăm datele din formular
    $profilePicture = $_POST['profilePicture']; // Acesta va fi calea către imaginea încărcată
    $username = $_POST['username'];
    $password = $_POST['password'];
    $categories = $_POST['categories']; // Aceasta va fi o matrice cu categoriile selectate

    // Deschidem fișierul în modul de scriere
    $file = fopen("users.txt", "a");

    // Verificăm dacă fișierul a fost deschis cu succes
    if ($file) {
        // Formăm un șir de date pentru a fi scris în fișier
        $userData = "Username: " . $username . ", Password: " . $password . ", Categories: " . implode(", ", $categories) . "\n";

        // Scriem datele în fișier
        fwrite($file, $userData);

        // Închidem fișierul
        fclose($file);

        echo "Datele au fost înregistrate cu succes!";
    } else {
        echo "Eroare la deschiderea fișierului!";
    }
} else {
    echo "Acces nevalid!";
}
?>
