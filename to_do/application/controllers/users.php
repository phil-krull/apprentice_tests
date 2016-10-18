<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class users extends CI_Controller {

  public function index() {
    $this->load->view('users/index');
  }

  public function create() {
    $this->load->model('user');
    $this->load->library('form_validation');
    $validation_result = $this->user->validate($this->input->post());
    if($validation_result == TRUE) {
      $this->user->create($this->input->post());
      $this->session->set_flashdata('errors', 'Thank you for registering, please login to continue');
    } else {
      $this->session->set_flashdata('errors', validation_errors());
    }
      redirect('/');
  }
}