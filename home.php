<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Connexion BDD (adapter tes identifiants)
require_once("database.php");

$data = json_decode(file_get_contents("php://input"), true);
$email = trim($data["email"] ?? "");

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Requête préparée pour éviter l'injection SQL
    $stmt = $pdo->prepare("INSERT INTO newletter (email) VALUES (:email)");
    $stmt->execute(["email" => $email]);

    echo json_encode(["status" => "ok", "message" => "Email ajouté avec succès"]);
} else {
    echo json_encode(["status" => "error", "message" => "Adresse e-mail invalide"]);
}