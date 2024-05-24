<?php
error_reporting(0);

// header('Access-Control-Allow-Origin: http://localhost:5173');
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Accept');
// header('Access-Control-Allow-Credentials: true');

include('function.php');    

$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod === 'OPTIONS') {
    header("Access-Control-Allow-Origin: http://localhost:5173"); // Change this to match your frontend origin
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Accept");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin"); // Include 'access-control-allow-origin' in the list
    // header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Max-Age: 86400"); // Cache preflight response for 24 hours
    exit(0);
}
// Set CORS headers for actual request
header("Access-Control-Allow-Origin: http://localhost:5173"); // Change this to match your frontend origin
header("Content-Type: application/json"); // Set appropriate Content-Type header

if ($requestMethod === 'POST'){

    $data = json_decode(file_get_contents("php://input"), true);
    // Process $data and return response
    echo json_encode(["message" => "Request received successfully"]);
    
    // echo($data);
    
    $storePerson = storeCompany($data);
    
    // if (empty($data)){
    //     $storePerson = storeCompany($_POST);

    // }else{
    //     $storePerson = storeCompany($data);
    // }
    echo $storePerson; 



}else{
    $data = [
        'status' => 405,
        'message' => $requestMethod. ' Method Not Allowed.'
    ];
    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode($data);
}

?>


<!-- 

error_reporting(0);
header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Request-with');

include('function.php');

$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod == 'POST'){

    $data = json_decode(file_get_contents("php://input "), true);

    if (empty($data)){
        $storePerson = storePerson($_POST);

    }else{
        $storePerson = storePerson($data);
    }
    echo $storePerson; 



}else{
    $data = [
        'status' => 405,
        'message' => $requestMethod. ' Method Not Allowed.'
    ];
    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode($data);
}


 -->