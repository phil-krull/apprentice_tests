<?php 
  session_start();
 ?>

<html>
<head>
  <title>Login/ Registratin</title>
</head>
<body>
  <fieldset>
    <legend>Register</legend>
    <form action="process.php" method="post">
      <input type="hidden" name="action" value="register">
      <label>First Name:</label>
      <input type="text"  name="first_name">
      <label>Last Name:</label>
      <input type="text"  name="last_name">
      <label>Email:</label>
      <input type="email"  name="email">
      <label>Password:</label>
      <input type="password"  name="password">
      <label>Confirm Password:</label>
      <input type="password"  name="confirm_password">
      <button type="submit">Register</button>
    </form>
  </fieldset>
  <fieldset>
    <legend>Login</legend>
    <form action="process.php" method="post">
      <input type="hidden" name="action" value="login">
      <label>Email:</label>
      <input type="email"  name="email">
      <label>Password:</label>
      <input type="password"  name="password">
      <button type="submit">Login</button>
    </form>
  </fieldset>
  <?php 
    if($_SESSION['errors']){
      foreach ($_SESSION['errors'] as $key => $value) { ?>
        <p><?= $value ?></p>
      <?php }
      session_destroy();
    }
   ?>
</body>
</html>