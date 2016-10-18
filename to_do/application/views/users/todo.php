<link rel="stylesheet" type="text/css" href="<?php echo base_url('/assets/style/to_do.css') ?>">
<script type="text/javascript" src="<?php echo base_url('/assets/js/jquery.js') ?>"></script>
<script type="text/javascript" src="<?php echo base_url('/assets/js/to_dos.js') ?>"></script>
<body>
  <h1>Welcome to <?= $this->session->userdata('name') ?>'s to do list</h1>
  <form id="logout" action="/sessions/destroy" method="post">
    <input type="submit" value="Logout">
  </form>
  <h2>Add a new item</h2>
  <div >
    <form id="addTodo" action="/todos/create" method="post">
      <table>
        <tr>
          <td>Task:</td>
          <td><textarea name="content" cols="50" rows="10"></textarea></td>
        </tr>
        <tr>
          <td></td>
          <td><button type="submit">Create</button></td>
        </tr>
      </table>
    </form>
  </div>
  <div id="to_dos">
    <?php require_once('todos.php'); ?>
  </div>
</body>
