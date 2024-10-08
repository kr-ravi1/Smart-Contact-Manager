package com.scm.Implementations;

import com.scm.dao.ContactRepository;
import com.scm.models.Contact;
import com.scm.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Override
    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public boolean existsByEmail(String email, Long userId) {
        Contact contact = contactRepository.findByEmail(email, userId);
        return contact != null ? true : false;
    }

    @Override
    public boolean existsByPhoneNumber(String phoneNumber, Long userId) {
        Contact contact = contactRepository.findByPhoneNumber(phoneNumber, userId);
        return contact != null ? true : false;
    }

    @Override
    public Page<Contact> getByUserId(Long id, int page, int size, String sortBy, String direction) {

        Sort sort = direction.equals("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        var pageable = PageRequest.of(page, size, sort);
        return contactRepository.findByUserId(id, pageable);
    }

    @Override
    public Page<Contact> searchByName(Long id, String nameKeyword, int page, int size, String sortBy, String direction) {
        Sort sort = direction.equals("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        var pageable = PageRequest.of(page, size, sort);
        return contactRepository.findByName(id, nameKeyword, pageable);
    }

    @Override
    public Page<Contact> searchByEmail(Long id, String emailKeyword, int page, int size, String sortBy, String direction) {
        Sort sort = direction.equals("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        var pageable = PageRequest.of(page, size, sort);
        return contactRepository.findByEmail(id, emailKeyword, pageable);
    }

    @Override
    public Page<Contact> searchByPhone(Long id, String phoneKeyword, int page, int size, String sortBy, String direction) {
        Sort sort = direction.equals("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        var pageable = PageRequest.of(page, size, sort);
        return contactRepository.findByPhone(id, phoneKeyword, pageable);
    }

    @Override
    public Optional<Contact> getContactById(Long id) {
        return contactRepository.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        contactRepository.deleteById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return contactRepository.existsById(id);
    }

    @Override
    public Contact update(Contact contact) {

        var oldContact = contactRepository.findById(contact.getId()).orElseThrow();
        oldContact.setId(contact.getId());
        oldContact.setName(contact.getName());
        oldContact.setPhoneNumber(contact.getPhoneNumber());
        oldContact.setEmail(contact.getEmail());
        oldContact.setAddress(contact.getAddress());
        oldContact.setDescription(contact.getDescription());
        oldContact.setFav(contact.isFav());
        oldContact.setLinkedInLink(contact.getLinkedInLink());
        oldContact.setWebsiteLink(contact.getWebsiteLink());
        oldContact.setPicture("https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg");

        return contactRepository.save(oldContact);
    }

    @Override
    public List<Contact> getRecentlyAddedContacts(Long id, int limit) {
        return contactRepository.findRecentlyAddedContacts(id, PageRequest.of(0, limit));
    }

    @Override
    public List<Contact> getFavContacts(Long id) {
        return contactRepository.findFavContacts(id);
    }

    @Override
    public Optional<Contact> findById(Long id) {
        Optional<Contact> contact = contactRepository.findById(id);
        return contact;
    }

}
