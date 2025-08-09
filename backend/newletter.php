<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

require_once("database.php");

$data = json_decode(file_get_contents("php://input"), true);
$email = trim($data["email"] ?? "");

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Adresse email invalide."]);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO newletter (email) VALUES (:email)");
    $stmt->execute(["email" => $email]);
    echo json_encode(["status" => "ok", "message" => "Email enregistré. Merci !"]);
} catch (PDOException $e) {
    if ($e->getCode() == 23000) {
        echo json_encode(["status" => "error", "message" => "Cet email est déjà inscrit."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Erreur serveur."]);
    }
}
