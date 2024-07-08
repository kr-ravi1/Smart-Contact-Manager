package com.scm.services;

import com.scm.models.Contact;
import com.scm.models.User;

import java.util.List;

public interface ContactService {

    Contact saveContact(Contact contact);

    boolean existsByEmail(String email);

    boolean existsByPhoneNumber(String phoneNumber);

    List<Contact> getByUserId(Long id);
}
