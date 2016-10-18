<?php if($notes){ ?>
  <div class="header">
    <div id="id"><h2>Note Id:</h2></div>
    <div id="title"><h2>Title:</h2></div>
    <div id="content"><h2>Content:</h2></div>
    <div id="date"><h2>Date:</h2></div>
    <div id="action"><h2>Action:</h2></div>
  </div>

  <?php foreach ($notes as $key => $value) { ?>
    <div class="data">
      <div id="id"><?= $value['id'] ?></div>
      <div id="title"><?= $value['title'] ?></div>
      <div id="content">
        <form class="updateNote" action="notes/update/<?= $value['id'] ?>"  method="post">
          <div class="editNote"><?= $value['content'] ?></div>
        </form>
      </div>
      <div id="date"><?= date('D m, Y', strtotime($value['created_at'])) ?></div>
      <div id="action">
        <form class="deleteNote" action="notes/delete/<?= $value['id'] ?>" method="post">
          <button type="submit">Delete</button>
        </form>
      </div>
    </div>
  <?php }
} ?>