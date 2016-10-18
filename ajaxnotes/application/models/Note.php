<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Note extends CI_Model {


  public function index()
  {
    $dbQuery = "SELECT * from notes";
    return $this->db->query($dbQuery)->result_array();
  }

  public function create($post)
  {
    $dbQuery = "INSERT into notes (title, content, created_at, updated_at) VALUES (?,?, NOW(), NOW())";
      $values = array(
          $post['title'],
          $post['content']
        );

      return $this->db->query($dbQuery, $values);
  }

  public function update($id, $post)
  {
    $dbQuery = "UPDATE notes SET content = ?, updated_at = NOW() WHERE id = ?";
    $values = array(
        $post['update_note'],
        $id
      );

    return $this->db->query($dbQuery, $values);
  }

  public function delete($id)
  {
    $dbQuery = "DELETE from notes WHERE id = ?";
    $values = array($id);

    return $this->db->query($dbQuery, $values);
  }


}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */