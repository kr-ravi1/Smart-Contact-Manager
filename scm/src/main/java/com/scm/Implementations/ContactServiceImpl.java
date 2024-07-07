package com.scm.Implementations;

import com.scm.dao.ContactRepository;
import com.scm.dao.UserRepository;
import com.scm.models.Contact;
import com.scm.models.User;
import com.scm.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
