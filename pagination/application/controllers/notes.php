<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class notes extends CI_Controller {

  public function __construct()
  {
    parent:: __construct();
    $this->load->model('Note');
  }

  public function index()
  {
    $pages = $this->note_count();
    if($this->input->post() == NULL){
      $notes = NULL;
      $this->load->view('notes', array('notes'=>$notes, 'pages'=>$pages));
    } else {
      $notes = $this->pagination_notes($this->input->post()['page']);
      $this->load->view('partials/allnotes', array('notes'=>$notes, 'pages'=>$pages));
    }

  }

  public function create()
  {
    $this->Note->create($this->input->post());
    $pages = $this->note_count();
    $notes = $this->pagination_notes($this->input->post()['current_page']);
    $this->load->view('partials/allnotes', array('notes'=>$notes, 'pages'=>$pages));
  }

  public function update($id)
  {
    $this->Note->update($id, $this->input->post());
    $pages = $this->note_count();
    $notes = $this->pagination_notes($this->input->post()['current_page']);
    $this->load->view('partials/allnotes', array('notes'=>$notes, 'pages'=>$pages));
  }

  public function delete($id)
  {
    $this->Note->delete($id);
    $pages = $this->note_count();
    $notes = $this->pagination_notes($this->input->post()['current_page']);
    $this->load->view('partials/allnotes', array('notes'=>$notes, 'pages'=>$pages));
  }

  public function get_all_notes()
  {
    return $this->Note->index();
  }

    private function note_count()
  {
    $count = $this->Note->note_count();
    return ceil($count['count']/PAGE_LIMIT);
  }

  private function pagination_notes($offset)
  {
    $notes = $this->Note->pagination_notes(intval($offset));
    foreach ($notes as $key => &$value) {
      $value['current_page'] = $offset;
    }
    return $notes;
  }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */