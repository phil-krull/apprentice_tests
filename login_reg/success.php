<?php
  session_start();
  require('connection.php');
?>

<html>
<head>
  <title>Login/ Registration</title>
</head>
<body>
  <h1>Welcome <?= $_SESSION['user_name'] ?></h1>

  <form action="process.php" method="post">
    <input type="hidden" name="action" value="logout">
    <button type="submit">Logout</button>
  </form>
</body>
</html>