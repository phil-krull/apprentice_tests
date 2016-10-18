<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class notes extends CI_Controller {

  public function __construct()
  {
    parent:: __construct();
    $this->load->model('Note');
  }

  public function index()
  {
    $notes = $this->get_all_notes();
    $this->load->view('notes', array('notes'=>$notes));
  }

  public function create()
  {
    $this->Note->create($this->input->post());
    $notes = $this->get_all_notes();
    $this->load->view('partials/allnotes', array('notes'=>$notes));
  }

  public function update($id)
  {
    $this->Note->update($id, $this->input->post());
    $notes = $this->get_all_notes();
    $this->load->view('partials/allnotes', array('notes'=>$notes));
  }

  public function delete($id)
  {
    $this->Note->delete($id);
    $notes = $this->get_all_notes();
    $this->load->view('partials/allnotes', array('notes'=>$notes));
  }

  public function get_all_notes()
  {
    return $this->Note->index();
  }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */