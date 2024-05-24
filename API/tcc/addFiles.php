<?php
error_reporting(0);

include('function.php');    

$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod === 'OPTIONS') {
    header("Access-Control-Allow-Origin: http://localhost:5173"); // Change this to match your frontend origin
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Accept");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin"); // Include 'access-control-allow-origin' in the list
    // ");
    header("Access-Control-Max-Age: 864000"); // Cache preflight response for 24 hours
    exit(0);
}
// Set CORS headers for actual request
// header('Access-Control-Allow-Method: POST');
header("Content-Type: multipart/form-data"); // Set appropriate Content-Type header
header("Access-Control-Allow-Origin: http://localhost:5173"); // Change this to match your frontend origin
// header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Request-with');
if ($requestMethod === 'POST'){

    
    if (!empty($_FILES["dirCert"])) {

        $uploadDir = "pdf/";
        $file = $_FILES["dirCert"]["name"];
        $temp_file = $_FILES["dirCert"]["tmp_name"];
        $data = $_POST; // Assuming other form fields are sent via POST
        // Handle file upload and form data processing here
        echo 'file = ', $file, "\n", $temp_file, " data = " , json_encode($data["pdfName"]);
    } else {
        echo 'File upload not found. ';
    }
    
    
    $file = $_FILES["dirCert"]["name"];
    $data = json_decode(file_get_contents("php://input"), true);
    
    echo "\n", 'File count = ', count($_FILES),"\n", "|", $file, "|", $data["pdfName"], ".";
    // $data = json_decode(file_get_contents("php://input"), true);
    // echo($file);
    // Process $data and return response
    // echo json_encode(["message" => "Request received successfully"]);
    
    // $storedFiles = storeFiles();
    // $storedFiles = storeFiles($data);
    // echo($storedFiles);
   
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