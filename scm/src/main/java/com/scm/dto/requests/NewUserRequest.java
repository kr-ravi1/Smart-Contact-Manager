package com.scm.dto.requests;

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
