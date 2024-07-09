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
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
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

    @GetMapping("/search")
    public ResponseEntity<?> searchHandler(@RequestParam("email") String email,
                                           @RequestParam(value = "field") String field,
                                           @RequestParam(value="page", defaultValue = "0") int page,
                                           @RequestParam(value ="size", defaultValue = "5") int size,
                                           @RequestParam(value = "sortBy", defaultValue = "name") String sortField,
                                           @RequestParam(value="direction", defaultValue = "asc") String sortDirection,
                                           @RequestParam(value = "keyword", required = false) String keyword) {

        User user = userService.findByEmail(email);

        Page<Contact> contactPage = null;
        if(field.equalsIgnoreCase("all")) {
            contactPage = contactService.getByUserId(user.getUserId(), page, size, sortField, sortDirection);
        }
        else if(field.equalsIgnoreCase("name") && keyword != null) {
            contactPage = contactService.searchByName(user.getUserId(), keyword, page, size, sortField, sortDirection);
        }
        else if(field.equalsIgnoreCase("email") && keyword != null) {
            contactPage = contactService.searchByEmail(user.getUserId(), keyword, page, size, sortField, sortDirection);
        }
        else if(field.equalsIgnoreCase("phone") && keyword != null) {
            contactPage = contactService.searchByPhone(user.getUserId(), keyword, page, size, sortField, sortDirection);
        }

        return new ResponseEntity<>(contactPage, HttpStatus.OK);
    }
}
