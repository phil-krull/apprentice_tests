<?php 
  session_start();
  require('connection.php');


  if(isset($_POST['action']) && $_POST['action'] == 'register'){
    // die('process.php -- register');
    $save = false;
    if(empty($_POST['first_name'])){
      $_SESSION['errors']['first_name_err'] = 'First Name is requied';
    } else {
      $first_name = test_input($_POST['first_name']);
    }
    if(empty($_POST['last_name'])){
      $_SESSION['errors']['last_name_err'] = 'Last Name is requied';
    } else {
      $last_name = test_input($_POST['last_name']);
    }
    if(empty($_POST['email'])){
      $_SESSION['errors']['email_err'] = 'Email is requied';
    } else {
      $email = test_input($_POST['email']);
    }
    if(empty($_POST['password'])){
      $_SESSION['errors']['password_err'] = 'Password is requied';
    } else {
      $password = encrypt_password(test_input($_POST['password']));
    }
    if(empty($_POST['confirm_password'])){
      $_SESSION['errors']['confirm_password_err'] = 'Confirm Password is requied';
    } else {
      $confirm_password = encrypt_password(test_input($_POST['confirm_password']));
    }

    if($password === $confirm_password){
      $save = true;
    } else {
      $_SESSION['errors']['password_match_err'] = 'Passwords must match';
    }

    $dbQuery = "SELECT * from users WHERE email = '{$email}'";
    $user_exists = fetch_record($dbQuery);

    if($user_exists){
      $_SESSION['errors']['user_exists_err'] = 'Email in use';
    }

    if(!isset($_SESSION['errors']) && $save === true){

      $dbQuery = "INSERT into users (first_name, last_name, email, password, created_at, updated_at) VALUES ('{$first_name}', '{$last_name}', '{$email}', '{$password}', NOW(), NOW())";
      run_mySQL_query($dbQuery);

    }

    header('Location: index.php');
    exit();
  }

  if(isset($_POST['action']) && $_POST['action'] == 'login'){

    $email = test_input($_POST['email']);
    $password = encrypt_password(test_input($_POST['password']));

    $dbQuery = "SELECT * from users WHERE email = '{$email}' AND password = '{$password}'";
    $user = fetch_record($dbQuery);
  // var_dump($user);

    if($user){
      $_SESSION['user_id'] = $user['id'];
      $_SESSION['user_name'] = $user['first_name'];
      header('Location: success.php');
      exit();
    } else {
      $_SESSION['errors']['login_err'] = "Invalid email or password";
      header('Location: index.php');
      exit();
    }
  }

  if(isset($_POST['action']) && $_POST['action'] == 'logout'){
    // die('process.php -- logout');
    session_destroy();
    header('Location: index.php');
    exit();
  }

  function test_input($data){
    $data = trim($data);
    $data = htmlspecialchars($data);
    $data = stripcslashes($data);

    return $data;
  }

  function encrypt_password($data){
    return md5($data);
  }

?>