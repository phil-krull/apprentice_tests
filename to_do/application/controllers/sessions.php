<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class sessions extends CI_Controller {

  public function create() {
    $this->load->model("user");
    $user = $this->user->login($this->input->post('email'));

    if ($user && password_verify($this->input->post('password'), $user['password'])) {
      $user_info = array(
        'id' => $user['id'],
        'name' => $user['first_name'],
        'is_logged_in' => TRUE
      );
      $this->session->set_userdata($user_info);
      redirect('/users/to_do');
    } else { 
      $this->session->set_flashdata('errors', 'Invalid email or password');
      redirect('/');
    }
  }

  public function destroy() {
    $this->session->sess_destroy();
    $this->load->view('users/index');
  }
}