package com.scm.services;

import com.scm.models.Contact;
import com.scm.models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ContactService {

    Contact saveContact(Contact contact);

    boolean existsByEmail(String email);

    boolean existsByPhoneNumber(String phoneNumber);

    Page<Contact> getByUserId(Long id, int page, int size, String sortField, String sortDirection);
}
