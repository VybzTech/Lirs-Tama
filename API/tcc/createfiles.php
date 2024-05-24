<?php
error_reporting(0);

// header('Access-Control-Allow-Origin: http://localhost:5173');
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Accept');
// header('Access-Control-Allow-Credentials: true');

include('function.php');    

$requestMethod = $_SERVER["REQUEST_METHOD"];
// echo "This is our request method: ", $requestMethod, "\n";

if ($requestMethod === 'OPTIONS') {
    header("Access-Control-Allow-Origin: http://localhost:5173"); // Change this to match your frontend origin
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Accept");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin"); // Include 'access-control-allow-origin' in the list
    // header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Max-Age: 86400"); // Cache preflight response for 24 hours
    exit(0);
}
header("Access-Control-Allow-Origin: http://localhost:5173"); // Change this to match your frontend origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Authorization, X-Requested-With"); // Include 'access-control-allow-origin' in the list
// header("Content-Type: multipart/form-data"); // Set appropriate Content-Type header
// Set CORS headers for actual request
// header("Content-Type: application/json"); // Set appropriate Content-Type header

if ($requestMethod === 'POST'){

    // $pdfName = $_POST['pdfName'];
    // $pdfFile = $_FILES['dirCert'];

    $uploadDir = 'pdfs/';
    $uploadFilePath = $uploadDir . basename($pdfFile['name']);
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $pdfName = isset($_POST['pdfName']) ? $_POST['pdfName'] : '';
    $pdfFile = isset($_FILES['dirCert']) ? $_FILES['dirCert'] : null;

    // Check if the file was uploaded
    if ($pdfFile) {
        $uploadFilePath = $uploadDir . basename($pdfFile['name']);
        echo "This is the file upload path: ", $uploadFilePath, "\n";

    // if (isset($_FILES["dirCert"])) {
        // $file = $pdfFile["name"];
        $temp_file = $_FILES["dirCert"]["tmp_name"];
        // $filespace = $_FILES["dirCert"];
        // $data = $_POST;
         // Assuming other form fields are sent via POST
// 
        // Debugging output
        // echo 'file = ', $file, "\n",'file = ', $filespace, "\n", 'temp_file = ', $temp_file, "\n", 'data = ', json_encode($data["pdfName"]), "\n";
        // echo move_uploaded_file($temp_file, $uploadFilePath),"\n";
        // Move the uploaded file to the desired directory
        // if (move_uploaded_file($temp_file, $uploadFilePath)) {
    if (move_uploaded_file($temp_file, $uploadFilePath)) {
    // echo "Move value", move_uploaded_file($pdfFile['tmp_name'], $uploadFilePath), "FBDFJV", "\n"; 
        $time_stamp = date('H:i:s d-m-Y'); 
        $query = "INSERT INTO files (fileName, folderPath, timeStamp) 
            VALUES ('$pdfName','$uploadFilePath','$time_stamp')";
            $result = mysqli_query($conn, $query);
            // return;
            if ($result){
                $data = [ 'status' => 201, 'message' => 'New Files added successfully'];
                header("HTTP/1.0 201 Created");
                return json_encode($data);

            } else {
                $data = ['status' => 500, 'message' => 'Internal Server Error'];
                header("HTTP/1.0 500 Internal Server Error");
                return json_encode($data);
            }    
        
        // // Prepare and bind the SQL statement
            // $stmt = $conn->prepare("INSERT INTO files (fileName,folderPath,timeStamp) VALUES ('$pdfName','$uploadFilePath','$time_stamp')");
            // $stmt->bind_param("ss", $pdfName, $uploadFilePath, $time_stamp);

            // // // Execute the statement and check for success
            // if ($stmt->execute()) {
            //     echo json_encode(["message" => "File uploaded and saved successfully"]);
            // } else {
            //     echo json_encode(["error" => "Error saving file details to database"]);
            // }

            // // // Close the statement
            // $stmt->close();
        } else {
            echo json_encode(["error" => "Error moving uploaded file"]);
        }
    } else {
        echo json_encode(["error" => "File upload not found"]);
    }
// } else {
//     echo json_encode(["error" => "Invalid request method"]);
// }

    // if (!empty($_FILES["dirCert"])) {

    //     $uploadDir = "pdf/";
    //     $file = $_FILES["dirCert"]["name"];
    //     $temp_file = $_FILES["dirCert"]["tmp_name"];
    //     $data = $_POST; // Assuming other form fields are sent via POST
    //     // Handle file upload and form data processing here
    //     echo 'file = ', $file, "\n", $temp_file, " data = " , json_encode($data["pdfName"]);
    // } else {
    //     echo 'File upload not found. ';
    // }
    
    
    // $file = $_FILES["dirCert"]["name"];
    // $data = json_decode(file_get_contents("php://input"), true);
    
    // echo "\n", 'File count = ', count($_FILES),"\n", "|", $file, "|", $data["pdfName"], ".";
    // *************************************

    // $data = json_decode(file_get_contents("php://input"), true);
    // Process $data and return response
    // echo json_encode(["message" => "Request received successfully"]);
    
    // echo($data);
    
    // $storePerson = storeCompany($data);
    
    // if (empty($data)){
    //     $storePerson = storeCompany($_POST);

    // }else{
    //     $storePerson = storeCompany($data);
    // }
    // echo $storePerson; 



}else{
    $data = [
        'status' => 405,
        'message' => $requestMethod. ' Method Not Allowed.'
    ];
    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode($data);
}

?>

