package com.scm.dao;

import com.scm.models.Contact;
import com.scm.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

    Contact findByEmail(String email);

    Contact findByPhoneNumber(String phoneNumber);
}
