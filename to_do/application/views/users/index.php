<html>
<head>
  <title>Todos</title>
</head>
<body>
  <div>
    <div id="main">
      <?php if($this->session->userdata('is_logged_in')) { require_once('todo.php'); } else { include('logReg.php'); }?>
    </div>
  </div>
</body>
</html>