package com.scm.controllers;

import com.scm.dto.requests.AddNewContact;
import com.scm.dto.requests.ExistingUserRequest;
import com.scm.dto.response.MessageResponse;
import com.scm.dto.response.MessageType;
import com.scm.models.Contact;
import com.scm.models.User;
import com.scm.services.ContactService;
import com.scm.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/user/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    private MessageResponse messageResponse;

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<?> addContact(@RequestBody AddNewContact addNewContact) {

        if (contactService.existsByEmail(addNewContact.getEmail())) {
            messageResponse = new MessageResponse("Contact with this Email already exists.", MessageType.warning);
            return new ResponseEntity<>(messageResponse, HttpStatus.OK);
        }

        if (contactService.existsByPhoneNumber(addNewContact.getPhoneNumber())) {
            messageResponse = new MessageResponse("Contact with this Phone Number already exists.", MessageType.warning);
            return new ResponseEntity<>(messageResponse, HttpStatus.OK);
        }

        User user = userService.findByEmail(addNewContact.getUser().getEmail());

        // image process code

        Contact contact = new Contact();
        contact.setName(addNewContact.getName());
        contact.setPhoneNumber(addNewContact.getPhoneNumber());
        contact.setEmail(addNewContact.getEmail());
        contact.setAddress(addNewContact.getAddress());
        contact.setDescription(addNewContact.getDescription());
        contact.setFav(addNewContact.isFav());
        contact.setLinkedInLink(addNewContact.getLinkedInLink());
        contact.setWebsiteLink(addNewContact.getWebsiteLink());
        contact.setPicture("https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg");
        contact.setUser(user);

//        System.out.println(addNewContact.isFav()); // getiing always false don't know why.

        contactService.saveContact(contact);

        messageResponse = new MessageResponse("Contact added successfully", MessageType.success);

        return new ResponseEntity<>(messageResponse, HttpStatus.CREATED);
    }

    @GetMapping("/view")
    public ResponseEntity<?> viewContact(@RequestParam("email") String email,
                                         @RequestParam(value="page", defaultValue = "0") int page,
                                         @RequestParam(value ="size", defaultValue = "5") int size,
                                         @RequestParam(value = "sortBy", defaultValue = "name") String sortField,
                                         @RequestParam(value="direction", defaultValue = "asc") String sortDirection) {

        System.out.println(email);
        User user = userService.findByEmail(email);
        Page<Contact> pageContacts = contactService.getByUserId(user.getUserId(), page, size, sortField, sortDirection);
        return new ResponseEntity<>(pageContacts, HttpStatus.OK);
    }
}
