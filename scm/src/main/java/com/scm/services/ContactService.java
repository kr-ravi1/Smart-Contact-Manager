package com.scm.services;

import com.scm.models.Contact;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface ContactService {

    Contact saveContact(Contact contact);

    boolean existsByEmail(String email, Long userId);

    boolean existsByPhoneNumber(String phoneNumber, Long userId);

    Page<Contact> getByUserId(Long id, int page, int size, String sortField, String sortDirection);

    Page<Contact> searchByName(Long id, String nameKeyword, int page, int size, String sortField, String sortDirection);

    Page<Contact> searchByEmail(Long id, String emailKeyword, int page, int size, String sortField, String sortDirection);

    Page<Contact> searchByPhone(Long id, String phoneKeyword, int page, int size, String sortField, String sortDirection);

    Optional<Contact> getContactById(Long id);

    void deleteById(Long id);

    boolean existsById(Long id);

    Contact update(Contact contact);

    public List<Contact> getRecentlyAddedContacts(Long id, int limit);

    public List<Contact> getFavContacts(Long id);

    Optional<Contact> findById(Long id);
}
