<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Index extends Render_Controller {

    public function __construct(){
        parent::__construct();
    }

	public function index(){
        $exa = $this->input->get_post('example');   //先获取get变量。获取不到再获取post变量。
        if ($exa){
            redirect('index/example');
        } else {
            $this->_render('index/index');
        }
	}

    public function example(){
        $this->session->set_userdata('key1', 'val1');
        $this->session->set_userdata('key2', 'val2');

        $session['key1'] = $this->session->userdata('key1');
        $session['key2'] = $this->session->userdata('key2');

        $session_all = $this->session->all_userdata();

        $data['sess'] = $session;
        $data['sess_all'] = &$session_all;

        $this->_render('index/example', $data);
    }

}
