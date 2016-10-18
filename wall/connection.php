<?php 
  define('DB_HOST', 'localhost');
  define('DB_USER', 'root');
  define('DB_PASSWORD', 'root');
  define('DB_DATABASE', 'test_wall');

  $connection = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

  if($connection->connect_errno){
    die('failed to connect to database' . $connection->connect_errno);
  }

  function run_mySQL_query($query){
    global $connection;
    $result = $connection->query($query);
    return $connection->insert_id;
  }

  function fetch_record($query){
    global $connection;
    $result = $connection->query($query);
    return mysqli_fetch_array($result);
  }

  function fetch_all($query){
    $data = array();
    global $connection;
    $result = $connection->query($query);
    foreach ($result as $key => $value) {
      $data[] = $value;
    }
    return $data;
  }
 ?>