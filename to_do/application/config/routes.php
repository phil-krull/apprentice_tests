<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$route['default_controller'] = "users";
$route['users/to_do'] = "to_do/index";
$route['users'] = "users/create";
$route['todos/create'] = "to_do/create";
$route['todos/update/(:any)'] = "to_do/update/$1";
$route['todos/complete/(:any)'] = "to_do/complete/$1";
$route['todos/delete/(:any)'] = 'to_do/delete/$1';
$route['sessions'] = "sessions/create";
$route['sessions/destroy'] = "sessions/destroy";
$route['404_override'] = '';


/* End of file routes.php */
/* Location: ./application/config/routes.php */