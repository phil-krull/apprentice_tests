
  <h2>All your todo's</h2>
  <?php if($to_dos) {?>
    <div class="left">
      <h3>Not Completed</h3>
    <?php foreach ($to_dos as $key => $value) { ?>
      <?php if($value['completed'] == 0) {?>
          <div class="data">
            <form class="updateTodo" action="todos/update/<?= $value['id'] ?>"  method="post">
              <div class="editTodo"><?= $value['content'] ?></div>
            </form>
          </div>
          <div class="completed">
            <form class="completeTodo" action="todos/complete/<?= $value['id'] ?>"  method="post">
              <button type="submit">Mark as Complete</button>
            </form>
          </div>
          
      <?php } ?>
    <?php } ?>
    </div>
    <div class="right">
      <h3>Completed Items</h3>
    <?php foreach ($to_dos as $key => $value) { ?>
      <?php if($value['completed'] == 1) {?>
        <div class="data">
            <div class="content"><?= $value['content'] ?></div>
        </div>
        <div class="action">
          <form class="deleteTodo" action="todos/delete/<?= $value['id'] ?>" method="post">
            <button type="submit">Delete</button>
          </form>
        </div>
      <?php } ?>
    <?php } ?>
    </div>
  <?php } ?>
