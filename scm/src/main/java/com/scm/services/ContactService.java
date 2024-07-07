package com.scm.services;

import com.scm.models.Contact;

public interface ContactService {

    Contact saveContact(Contact contact);

    boolean existsByEmail(String email);

    boolean existsByPhoneNumber(String phoneNumber);
}
