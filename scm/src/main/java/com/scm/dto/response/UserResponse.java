package com.scm.dto.response;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserResponse {

    private Long userId;
    private String name;
    private String email;
    private String phoneNumber;
}
