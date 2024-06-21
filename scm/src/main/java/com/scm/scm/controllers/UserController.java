package com.scm.scm.controllers;

import com.scm.scm.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {

    @RequestMapping("/")
    public ResponseEntity<String> home() {
        User user = new User("Ravi");
        return new ResponseEntity<>(user.name, HttpStatus.OK);
    }
}
