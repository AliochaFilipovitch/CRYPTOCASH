<?php
$data = print_r(file_get_contents('php://input'), true);
file_put_contents("post_json.json", $data);
