package com.scm.controllers;

import com.scm.dto.requests.AddNewContact;
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
import java.util.Optional;

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

        User user = userService.findByEmail(addNewContact.getUser().getEmail());

        if (contactService.existsByEmail(addNewContact.getEmail(), user.getUserId())) {
            messageResponse = new MessageResponse("Contact with this Email already exists.", MessageType.warning);
            return new ResponseEntity<>(messageResponse, HttpStatus.OK);
        }

        if (contactService.existsByPhoneNumber(addNewContact.getPhoneNumber(), user.getUserId())) {
            messageResponse = new MessageResponse("Contact with this Phone Number already exists.", MessageType.warning);
            return new ResponseEntity<>(messageResponse, HttpStatus.OK);
        }

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
        user.setContactsCounter(user.getContactsCounter()+1);

        System.out.println(addNewContact.isFav());
        userService.saveUser(user);
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

    @GetMapping("/view/{id}")
    public ResponseEntity<?> viewContact(@PathVariable Long id) {

        Optional<Contact> contact = contactService.getContactById(id);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @GetMapping("/view/fav")
    public List<Contact> viewFavContact(@RequestParam Long id) {
        return contactService.getFavContacts(id);
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<?> deleteContact(@PathVariable Long id) {

        if (!contactService.existsById(id)) {
            MessageResponse messageResponse = new MessageResponse("Contact cannot be deleted", MessageType.warning);
            return new ResponseEntity<>(messageResponse, HttpStatus.OK);
        }

        Optional<Contact> contactOpt = contactService.findById(id);
        if (!contactOpt.isPresent()) {
            MessageResponse messageResponse = new MessageResponse("Contact not found", MessageType.warning);
            return new ResponseEntity<>(messageResponse, HttpStatus.OK);
        }

        Contact contact = contactOpt.get();
        User user = userService.findByEmail(contact.getUser().getEmail());

        if (user != null) {
            contactService.deleteById(id);
            if(user.getContactsCounter() > 0) {
                user.setContactsCounter(user.getContactsCounter() - 1);
            }
            userService.saveUser(user);
            MessageResponse messageResponse = new MessageResponse("Contact deleted successfully", MessageType.success);
            return new ResponseEntity<>(messageResponse, HttpStatus.OK);
        } else {
            MessageResponse messageResponse = new MessageResponse("User not found", MessageType.warning);
            return new ResponseEntity<>(messageResponse, HttpStatus.BAD_REQUEST);
        }
    }


    @PostMapping("/update/{id}")
    public ResponseEntity<?> updateContact(@PathVariable Long id, @RequestBody AddNewContact updateContact) {
        Contact contact = new Contact();
        contact.setId(id);
        contact.setName(updateContact.getName());
        contact.setPhoneNumber(updateContact.getPhoneNumber());
        contact.setEmail(updateContact.getEmail());
        contact.setAddress(updateContact.getAddress());
        contact.setDescription(updateContact.getDescription());
        contact.setFav(updateContact.isFav());
        contact.setLinkedInLink(updateContact.getLinkedInLink());
        contact.setWebsiteLink(updateContact.getWebsiteLink());
        contact.setPicture("https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg");

        contactService.update(contact);
        messageResponse = new MessageResponse("Contact Updated Successfully", MessageType.success);
        return new ResponseEntity<>(messageResponse, HttpStatus.OK);
    }

    @GetMapping("/recent_contacts")
    public List<Contact> getRecentlyAddedContacts(@RequestParam(defaultValue = "3") int limit,
                                                          @RequestParam Long id) {

        return contactService.getRecentlyAddedContacts(id, limit);
    }

    @GetMapping("/countContacts")
    public Long getCountOfContacts(@RequestParam String email) {
        return userService.findByEmail(email).getContactsCounter();
    }
}
