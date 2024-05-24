<?php
error_reporting(0);
header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');
header('Access-Control-Allow-Method: GET');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Request-with');

include('function.php');

$requestMethod = $_SERVER["REQUEST_METHOD"];

// echo $requestMethod;

// if($requestMethod == "GET"){

//     $fileList = getFiles();
//     echo $fileList;

// }else{
//     $data = [
//         'status' => 405,
//         'message' => $requestMethod. 'Method Not Allowed.'
//     ];
//     header("HTTP/1.0 405 Method Not Allowed");
//     echo json_encode($data);
// }


if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    // echo $id ;
    
    $stmt = $conn->prepare("SELECT fileName, folderPath, timeStamp FROM files WHERE id = $id");
    // $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->bind_result($fileName, $folderPath, $timeStamp);
    $stmt->fetch();
    $stmt->close();

    if (file_exists($folderPath)) {
        header('Content-Description: File Transfer');
        header('Content-Type: application/pdf');
        header('Content-Disposition: attachment; filename="' . basename($fileName) . '.pdf"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($folderPath));
        readfile($folderPath);
        exit;
    } else {
        echo "File not found.";
    }

}else{
    $data = [
        'status' => 405,
        'message' => $requestMethod. ' Method Not Allowed.'
    ];
    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode($data);
}

?>