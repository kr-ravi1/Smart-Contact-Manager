package com.scm.controllers;

import com.scm.dto.requests.ExistingUserRequest;
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

        if (userService.existsByEmail(newUser.getEmail())) {
            messageResponse = new MessageResponse("Email is already registered", MessageType.warning);
            return new ResponseEntity<>(messageResponse, HttpStatus.OK);
        }

        if (userService.existsByPhoneNumber(newUser.getPhoneNumber())) {
            messageResponse = new MessageResponse("Phone Number is already registered", MessageType.warning);
            return new ResponseEntity<>(messageResponse, HttpStatus.OK);
        }

        User user = new User();
        user.setName(newUser.getName());
        user.setPhoneNumber(newUser.getPhoneNumber());
        user.setEmail(newUser.getEmail());
        user.setPassword(newUser.getPassword());

        User savedUser = userService.saveUser(user);

        messageResponse = new MessageResponse("Registration successful", MessageType.success);
        return new ResponseEntity<>(messageResponse, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody ExistingUserRequest existingUserRequest) {
        if(!userService.existsByEmail(existingUserRequest.getEmail())) {
            messageResponse = new MessageResponse("Email does not registered", MessageType.warning);
            return new ResponseEntity<>(messageResponse, HttpStatus.UNAUTHORIZED);
        }

        User user = userService.findByEmail(existingUserRequest.getEmail());

        if(!userService.verifyPassword(existingUserRequest.getPassword(), user.getUserId())) {
            MessageResponse messageResponse = new MessageResponse("Invalid password", MessageType.warning);
            return new ResponseEntity<>(messageResponse, HttpStatus.UNAUTHORIZED);
        }

        messageResponse = new MessageResponse("Login Successful", MessageType.success);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
