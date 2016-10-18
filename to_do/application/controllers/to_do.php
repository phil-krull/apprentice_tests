<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class to_do extends CI_Controller {

  public function __construct()
  {
    parent:: __construct();
    $this->load->model('todo');
  }

  public function index() {
    $to_dos = $this->todo->index($this->session->userdata('id'));
    $this->load->view('users/index', array('to_dos' => $to_dos));
  }

  public function create() {
    $this->todo->create($this->session->userdata('id'), $this->input->post());
    $to_dos =  $this->reloadTodo();
    $this->load->view('users/todos', array('to_dos' => $to_dos));
  }

  public function update($id) {
    $this->todo->update($id, $this->input->post());
    $to_dos =  $this->reloadTodo();
    $this->load->view('users/todos', array('to_dos' => $to_dos));
  }

  public function complete($id){
    $this->todo->complete($id);
    $to_dos =  $this->reloadTodo();
    $this->load->view('users/todos', array('to_dos' => $to_dos));
  }

  public function delete($id){
    $this->todo->delete($id);
    $to_dos =  $this->reloadTodo();
    $this->load->view('users/todos', array('to_dos' => $to_dos));
  }

  private function reloadTodo(){
    return $this->todo->index($this->session->userdata('id'));
  }

}