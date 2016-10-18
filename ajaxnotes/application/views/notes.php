<html>
<head>
  <title>Ajax Notes</title>
  <link rel="stylesheet" type="text/css" href="<?php echo base_url('/assets/style/notes.css') ?>">
  <script type="text/javascript" src="<?php echo base_url('/assets/js/jquery-1.12.4.js') ?>"></script>
  <script type="text/javascript" src="<?php echo base_url('/assets/js/notes.js') ?>"></script>
</head>
<body>
  <div id="container">
    <div id="addNote">
      <h1>Add a Note</h1>
      <form action="notes/create" method="post">
        <label>Title:</label>
        <input type="text" name="title">
        <label>Note:</label>
        <textarea name="content"></textarea>
        <button class="create" type="submit">Add Note</button>
      </form>
    </div>
    <div id="allNotes">
      <?php require('partials/allnotes.php') ?>
    </div>
  </div>
</body>
</html>