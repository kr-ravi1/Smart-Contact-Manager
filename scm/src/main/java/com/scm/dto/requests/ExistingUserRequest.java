package com.scm.dto.requests;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class ExistingUserRequest {

    private String email;
    private String password;
}
