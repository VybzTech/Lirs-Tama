<?php

require '../tcc.php';

function error422($message){
    $data = [
        'status' => 422,
        'message' => $message
    ];
    header("HTTP/1.0 422 Unprocessable entity");
    echo json_encode($data);
    exit();

}
// C - Create
function storeCompany($companyInput){
    global $conn;
    $companyID = mysqli_real_escape_string($conn, $companyInput['companyID']);
    $companyName = mysqli_real_escape_string($conn, $companyInput['companyName']);
    $companyEmail = mysqli_real_escape_string($conn, $companyInput['companyEmail']);
    $companyNo = mysqli_real_escape_string($conn, $companyInput['companyNo']);
    $companyHistory = mysqli_real_escape_string($conn, $companyInput['companyHistory']);
    // echo
    // if($companyInput){
        echo($companyInput['companyID']);
        echo($companyName);
        // echo($companyInput);
    if(empty(trim($companyID))){
        return error422("Enter company's ID");
    }elseif(empty(trim($companyName))){
        return error422("Enter company's name");
    }elseif(empty(trim($companyEmail))){
        return error422("Enter company's email");
    }elseif(empty(trim($companyNo))){
        return error422("Enter company phone no.");
    }elseif(empty(trim($companyHistory))){
        return error422("Enter company's history");
    }else{
        $query = "INSERT INTO companies (companyID,companyName,companyEmail,companyNo,companyHistory) VALUES ('$companyID','$companyName','$companyEmail','$companyNo','$companyHistory')";
        $result = mysqli_query($conn, $query);
        
        if ($result){
            $data = [
                'status' => 201,
                // 'status' => 200,
                'message' => 'Company added successfully'
            ];
            header("HTTP/1.0 201 Created");
            return json_encode($data);
            
        }else{
            $data = [
                'status' => 500,
                'message' => 'Internal Server Error'
            ];
            header("HTTP/1.0 500 Internal Server Error");
            return json_encode($data);
        }
    }
}

function storeFiles(){
    global $conn;
    $targetDir = "pdf/";
    $targetFile = $targetDir . basename($_FILES["dirCert"]["name"]);
    $fileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
    echo("Target file is : " . $targetFile);
    
    // if ($fileType != "pdf" || $_FILES['dirCert']['size'] > 2000000 ){
    //     echo "Error: Only PDF files less than 2MB are allowed to upload.";
    // } else {
        // if (move_uploaded_file($_FILES['dirCert']['tmp_name'], $targetFile)){
        //     $filename  = $_FILES["dirCert"]["name"];
        //     $folder_path = $targetDir;
        //     $time_stamp = date('Y-m-d H:i:s');      
        //     $query = "INSERT INTO files (fileName,folderPath,timeStamp) 
        //         VALUES ('$filename','$folder_path','$time_stamp')";
        //     $result = mysqli_query($conn, $query);
        //     return;
        //     if ($result){
        //         $data = [ 'status' => 201, 'message' => 'New Files added successfully'];
        //         header("HTTP/1.0 201 Created");
        //         return json_encode($data);

        //     } else {
        //         $data = ['status' => 500, 'message' => 'Internal Server Error'];
        //         header("HTTP/1.0 500 Internal Server Error");
        //         return json_encode($data);
        //     }
        // } else {
        //         echo "Error uploading file.";
        //         return;
        // }
    }
// }
    

// R - Read
function getFiles(){
    
    global $conn;
    // pdf_data == pdfs/$_FILES['pdf']['dirCert']
    // pdf_name == Director Certificate
    // $query = "SELECT `CITN`, `LASSRA`, `Evidence` FROM files" ;
    // $query = "SELECT `id`, `fileName`, `folderPath`, `timeStamp` FROM files" ;
    $query = "SELECT * FROM files" ;
    // $result = mysqli_query($conn, $query);

    $query_run = mysqli_query($conn, $query);
    
    if ($query_run){
        
        if (mysqli_num_rows($query_run) > 0){

            $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
            $data = [
                'status' => 200,
                'message' => 'Files Fetched Successfully',
                'data' => $res
            ];
            header("HTTP/1.0 200 OK");
            // print_r($data->data["CITN"]);
            // $CITN = $data[1]["CITN"];
            // $LASSRA = $data[1]["LASSRA"];
            // $Evidence = $data[1]["Evidence"];
            // Set appropriate headers for PDF download
            // header('Content-Type: application/pdf');
            // header('Content-Disposition: attachment; filename="' . $CITN . '"');
            // header('Content-Length: ' . strlen($pdfData));
            // Output the BLOB data to the HTTP response
            // echo $Evidence;
            // // return json_encode($pdfData);
            return json_encode($data);
            // $files = [];
            // if ($res->num_rows > 0) {
            //     while ($row = $res->fetch_assoc()) {
            //         $files[] = $row;
            //     }
            // }
            // echo json_encode($files);


            // if (count($files) > 0) {
            //     http_response_code(200);
            //     echo json_encode([
            //         'status' => 200,
            //         'message' => 'Files fetched successfully',
            //         'data' => $files
            //     ]);

        }else{
            $data = [
                'status' => 404,
                'message' => 'No files found'
            ];
            header("HTTP/1.0 404 No files found");
            return json_encode($data);
        }
        
    }else{
        $data = [
            'status' => 500,
            'message' => 'Internal Server Error'
        ];
        header("HTTP/1.0 500 Internal Server Error");
        return json_encode($data);
    }          
}

function getTCCInfo(){

    global $conn;
    $query = "SELECT * FROM tcclist";
    $query_run = mysqli_query($conn, $query);

    if ($query_run){

        if (mysqli_num_rows($query_run) > 0){

            $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
            $data = [
                'status' => 200,
                'message' => 'People List Fetched Successfully',
                'data' => $res
            ];
            header("HTTP/1.0 200 OK");
            return json_encode($data);
             
        }else{
            $data = [
                'status' => 404,
                'message' => 'No people found'
            ];
            header("HTTP/1.0 404 No people found");
            return json_encode($data);
        }

    }else{
        $data = [
            'status' => 500,
            'message' => 'Internal Server Error'
        ];
        header("HTTP/1.0 500 Internal Server Error");
        return json_encode($data);
    }

}

function getCompanies(){

    global $conn;
    $query = "SELECT * FROM companies";
    $query_run = mysqli_query($conn, $query);

    if ($query_run){

        if (mysqli_num_rows($query_run) > 0){

            $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
            $data = [
                'status' => 200,
                'message' => 'Successfully fetched registered companies',
                'data' => $res
            ];
            header("HTTP/1.0 200 OK");
            return json_encode($data);
             
        }else{
            $data = [
                'status' => 404,
                'message' => 'No company found'
            ];
            header("HTTP/1.0 404 No Company found");
            return json_encode($data);
        }

    }else{
        $data = [
            'status' => 500,
            'message' => 'Internal Server Error'
        ];
        header("HTTP/1.0 500 Internal Server Error");
        return json_encode($data);
    }

}

function getSingleCompanies($id){
    global $conn;
    $query = "SELECT * FROM companies WHERE Cid = $id";
    $query_run = mysqli_query($conn, $query);

    if ($query_run){

        if (mysqli_num_rows($query_run) > 0){

            $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
            $data = [
                'status' => 200,
                'message' => 'Successfully fetched requested company',
                'data' => $res
            ];
            header("HTTP/1.0 200 OK");
            return json_encode($data);
             
        }else{
            $data = [
                'status' => 404,
                'message' => 'No company found'
            ];
            header("HTTP/1.0 404 No Company found");
            return json_encode($data);
        }

    }else{
        $data = [
            'status' => 500,
            'message' => 'Internal Server Error'
        ];
        header("HTTP/1.0 500 Internal Server Error");
        return json_encode($data);
    }

}

// U - Update
function updatePerson($inputData,$personParams){
    global $conn;

    if(!isset($personParams['TCC_ID'])){

        return error422("TCC_ID not found");
    }elseif ($personParams['TCC_ID'] == null) {

        return error422("Enter your TCC_ID");
    }

    $tcc_id = mysqli_real_escape_string($conn, $personParams['TCC_ID']);
    $firstName = mysqli_real_escape_string($conn, $personInput['firstName']);
    $lastName = mysqli_real_escape_string($conn, $personInput['lastName']);
    $payerID = mysqli_real_escape_string($conn, $personInput['payerID']);

    if(empty(trim($tcc_id))){

        return error422("Enter TCC_ID");
    }elseif(empty(trim($firstName))){

        return error422("Enter First Name");
    }elseif(empty(trim($lastName))){

        return error422("Enter Last Name");
    }elseif(empty(trim($payerID))){

        return error422("Enter Payer ID");
    }else{
        $query = "UPDATE tcclist SET firstName='$firstName',lastName='$lastName',payerID='$payerID' WHERE TCC_ID ='$tcc_id' LIMIT 1";
        $result = mysqli_query($conn, $query);

        if ($result){

            $data = [
                'status' => 200,
                'message' => 'Person updated successfully'
            ];
            header("HTTP/1.0 200 Success");
            return json_encode($data);

        }else{
        $data = [
            'status' => 500,
            'message' => 'Internal Server Error'
        ];
        header("HTTP/1.0 500 Internal Server Error");
        return json_encode($data);}
    }
}

// D - Delete
function deletePerson($personParams){
    global $conn;

    if(!isset($personParams['TCC_ID'])){

        return error422("TCC_ID not found");
    }elseif ($personParams['TCC_ID'] == null) {

        return error422("Enter your TCC_ID");
    }

    $tcc_id = mysqli_real_escape_string($conn, $personParams['TCC_ID']);

    $query = "DELETE FROM tcclist  WHERE TCC_ID='' LIMIT 1";
    $result = mysqli_query($conn, $query);

    if ($result){
        $data = [
            'status' => 200,
            'message' => 'Person Deleted Successfully'
        ];
        header("HTTP/1.0 200 OK");
        return json_encode($data);}

    else{
        $data = [
            'status' => 404,
            'message' => 'Person Not Found'
        ];
        header("HTTP/1.0 404 Not Found");
        return json_encode($data);
    }
}



?>