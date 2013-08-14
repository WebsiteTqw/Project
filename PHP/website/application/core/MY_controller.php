<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Render_controller extends CI_Controller {

    public function __construct(){
        parent::__construct();
    }

    public function _render($target, &$data=array()){
        $this->load->view('common/header');
        $this->load->view($target, $data);
        $this->load->view('common/footer');
    }

}


/* End of file */