<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

require_once("database.php");

// Récupération de la donnée envoyée par Angular
$data = json_decode(file_get_contents("php://input"), true);
$email = trim($data["email"] ?? "");

// Vérification du format email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "status" => "error",
        "message" => "Adresse email invalide."
    ]);
    exit;
}

try {
    // Insertion dans la table newsletter
    $stmt = $pdo->prepare("INSERT INTO newsletter (email) VALUES (:email)");
    $stmt->execute(["email" => $email]);

    echo json_encode([
        "status" => "ok",
        "message" => "Email enregistré. Merci !"
    ]);

} catch (PDOException $e) {
    if ($e->getCode() == 23000) { // Doublon
        echo json_encode([
            "status" => "error",
            "message" => "Cet email est déjà inscrit."
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Erreur serveur."
        ]);
    }
}
?>
