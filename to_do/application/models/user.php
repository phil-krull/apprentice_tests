<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class user extends CI_Model {

  public function create($post) {
    $query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (?,?,?,?,NOW(),NOW())";
    $values = array(
      $post['first_name'],
      $post['last_name'],
      $post['email'],
      password_hash($post['password'],PASSWORD_BCRYPT)
      );

    return $this->db->query($query, $values);
  }

  public function validate() {
    $this->form_validation->set_rules('first_name', 'First Name', 'required');
    $this->form_validation->set_rules('last_name', 'Last Name', 'required');
    $this->form_validation->set_rules('email', 'Email', 'required|valid_email|is_unique[users.email]');
    $this->form_validation->set_rules('password', 'Password', 'required|matches[password_confirmation]|min_length[8]');
    $this->form_validation->set_rules('password_confirmation', 'Confirm Password', 'required');

    return $this->form_validation->run();
  }

  public function login($email) {
    $query = "SELECT * FROM users WHERE email = ?";
    $values = array($email);
    return $this->db->query($query, $values)->row_array();
  }

}