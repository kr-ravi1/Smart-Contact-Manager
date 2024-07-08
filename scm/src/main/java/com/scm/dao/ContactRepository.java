package com.scm.dao;

import com.scm.models.Contact;
import com.scm.models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    Page<Contact> findByUserId(@Param("id") Long id, Pageable pageable);

    @Query("SELECT c FROM Contact c JOIN c.user u WHERE u.id = :id AND c.name LIKE %:name%")
    Page<Contact> findByName(@Param("id") Long id, @Param("name") String name, Pageable pageable);

    @Query("SELECT c FROM Contact c JOIN c.user u WHERE u.id = :id AND c.email LIKE %:email%")
    Page<Contact> findByEmail(@Param("id") Long id, @Param("email") String email, Pageable pageable);

    @Query("SELECT c FROM Contact c JOIN c.user u WHERE u.id = :id AND c.phoneNumber LIKE %:phone%")
    Page<Contact> findByPhone(@Param("id") Long id, @Param("phone") String phone, Pageable pageable);
}
