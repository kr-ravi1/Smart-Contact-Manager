package com.scm.services;

import com.scm.models.User;

public interface UserService {

    User saveUser(User user);

    public boolean existsByEmail(String email);

    public User findByEmail(String email);

    public boolean existsByPhoneNumber(String phoneNumber);

    public boolean verifyPassword(String password, Long id);
}
