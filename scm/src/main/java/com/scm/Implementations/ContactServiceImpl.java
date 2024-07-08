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

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Override
    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public boolean existsByEmail(String email) {
        Contact contact = contactRepository.findByEmail(email);
        return contact != null ? true : false;
    }

    @Override
    public boolean existsByPhoneNumber(String phoneNumber) {
        Contact contact = contactRepository.findByPhoneNumber(phoneNumber);
        return contact != null ? true : false;
    }

    @Override
    public Page<Contact> getByUserId(Long id, int page, int size, String sortBy, String direction) {

        Sort sort = direction.equals("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        var pageable = PageRequest.of(page, size, sort);
        return contactRepository.findByUserId(id, pageable);
    }
}
