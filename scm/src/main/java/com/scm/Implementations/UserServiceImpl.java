package com.scm.Implementations;

import com.scm.dao.UserRepository;
import com.scm.dto.requests.NewUserRequest;
import com.scm.models.User;
import com.scm.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public boolean existsByEmail(String email) {
        User user = userRepository.findByEmail(email);
        return user != null ? true : false;
    }

    @Override
    public User findByEmail(String email) {
        User user = userRepository.findByEmail(email);
        return user;
    }

    @Override
    public boolean existsByPhoneNumber(String phoneNumber) {
        User user = userRepository.findByPhoneNumber(phoneNumber);
        return user != null ? true : false;
    }

    @Override
    public boolean verifyPassword(String password, Long id) {
        User user = userRepository.findByUserId(id);
        if(password.equals(user.getPassword())) return true;
        return false;
    }


}
