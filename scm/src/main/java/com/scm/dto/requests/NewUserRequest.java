package com.scm.dto.requests;

import com.scm.models.Providers;
import com.scm.models.User;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class NewUserRequest {
    private String name;
    private String password;
    private String email;
    private String phoneNumber;
}
