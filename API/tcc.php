<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "testtama";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// //validation
// $sql = "SELECT payerID, firstName, lastName FROM bench";
// $result = $conn->query($sql);

// if ($result->num_rows > 0) {
    
//     while($row = $result->fetch_assoc()) {
//         echo "id: " . $row["payerID"]. " - Name: " . $row["firstName"]. " " . $row["lastName"]. "<br>";
//     }
// } else {
//     echo "0 results";
// }

// insert data into table

// $sql2 = "INSERT INTO bench (TCC_ID, payerID, firstName, lastName) VALUES('090', 'N-200', 'Dangote', 'Aliko')";
// if ($conn->query($sql2) === TRUE) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql2 . "<br>" . $conn->error;
// }
// $conn->close();
?>