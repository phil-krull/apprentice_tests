<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class todo extends CI_Model {

  public function index($user_id){
    $query = "SELECT * from to_do WHERE user_id = ?";
    $values = array(
        $user_id
      );

    return $this->db->query($query, $values)->result_array();
  }

  public function create($user_id, $post){
    $query = "INSERT INTO to_do (user_id, content, completed, created_at, updated_at) VALUES (?,?,?,NOW(),NOW())";
    $values = array(
        $user_id,
        $post['content'],
        FALSE
      );
    return $this->db->query($query, $values);
  }

  public function update($id, $post){
    $dbQuery = "UPDATE to_do SET content = ?, updated_at = NOW() WHERE id = ?";
    $values = array(
        $post['update_todo'],
        $id
      );

    return $this->db->query($dbQuery, $values);
  }

  public function complete($id){
    $query = "UPDATE to_do SET completed = ?, updated_at = NOW() WHERE id = ?";
    $values = array(
        TRUE,
        $id
      );

    return $this->db->query($query, $values);
  }

  public function delete($id){
    $query = "DELETE from to_do WHERE id = ?";
    $values = array($id);

    return $this->db->query($query, $values);
  }

}