package com.scm.dao;

import com.scm.models.Contact;
import com.scm.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

    Contact findByEmail(String email);

    Contact findByPhoneNumber(String phoneNumber);

    // Custom query Method
    @Query("SELECT c FROM Contact c WHERE c.user.id = :id")
    List<Contact> findByUserId(@Param("id") Long id);
}
