package com.scm.controllers;

import com.scm.dto.requests.NewUserRequest;

import com.scm.dto.response.MessageResponse;
import com.scm.dto.response.MessageType;
import com.scm.models.User;
import com.scm.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class PageController {

    @Autowired
    private UserService userService;

    private MessageResponse messageResponse;

    @GetMapping("/signupTest")
    public String test() {
        return "Ravi Kumar";
    }

    @PostMapping("/doRegister")
    public ResponseEntity<?> registerUser(@RequestBody NewUserRequest newUser) {

        // fetch form data
        // validate form data
        // Check if email already exists
        if (userService.existsByEmail(newUser.getEmail())) {
            messageResponse = new MessageResponse("Email is already registered", MessageType.warning);
            return new ResponseEntity<>(messageResponse, HttpStatus.OK);
        }
        // Check if phone number already exists
        if (userService.existsByPhoneNumber(newUser.getPhoneNumber())) {
            messageResponse = new MessageResponse("Phone Number is already registered", MessageType.warning);
            return new ResponseEntity<>(messageResponse, HttpStatus.OK);
        }
        // save to database
        User user = new User();
        user.setName(newUser.getName());
        user.setPhoneNumber(newUser.getPhoneNumber());
        user.setEmail(newUser.getEmail());
        user.setPassword(newUser.getPassword());
//        System.out.println(user);
        User savedUser = userService.saveUser(user);
//        System.out.println(savedUser);
        // message to user "Successful"
        messageResponse = new MessageResponse("Registration successful", MessageType.success);
        return new ResponseEntity<>(messageResponse, HttpStatus.CREATED);
    }

}
