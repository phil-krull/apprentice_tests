<?php
  session_start();
  require('connection.php');

  $commentQuery = "SELECT users.first_name, comments.id AS comment_id, comments.content, comments.created_at AS created_at from comments JOIN users ON users.id = comments.user_id";
  $comments = fetch_all($commentQuery);

  $postQuery = "SELECT users.first_name, posts.comment_id AS comment_id, posts.content, posts.created_at AS created_at from posts JOIN users ON users.id = posts.user_id";
  $posts = fetch_all($postQuery);
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

  <form action="process.php" method="post">
    <input type="hidden" name="action" value="addComment">
    <label>Add Comment:</label>
    <textarea name="content"></textarea>
    <button type="submit">Add Comment</button>
  </form>
  <hr>

  <?php
    if($comments){
      foreach ($comments as $key => $value) { ?>
        <blockquote> <?= $value['first_name'] ?> said: <?= $value['content'] ?> on <?= $value['created_at'] ?> </blockquote>

        <?php if($posts){
          foreach ($posts as $key => $value2){
            if($value['comment_id'] == $value2['comment_id']) { ?>
              <ul><blockquote><?= $value2['first_name'] ?> said: <?= $value2['content'] ?> on <?= $value2['created_at'] ?></blockquote></ul>
            <?php }
          }
        
        } ?>

        <form action="process.php" method="post">
          <input type="hidden" name="action" value="addPost">
          <input type="hidden" name="comment_id" value=" <?= $value['comment_id'] ?> ">
          <label>Add Post:</label>
          <textarea name="content"></textarea>
          <button type="submit">Add Post</button>
        </form>

        <hr>
      <?php }
    }
  ?>


</body>
</html>