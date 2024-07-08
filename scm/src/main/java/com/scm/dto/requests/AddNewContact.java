package com.scm.dto.requests;

import com.scm.models.User;
import jakarta.persistence.ManyToOne;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Getter
@ToString
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddNewContact {

    private String name;
    private String phoneNumber;
    private String email;
    private String address;
    private MultipartFile contactImage;
    private String description;
    private boolean isFav;
    private String websiteLink;
    private String linkedInLink;
    private User user;
}
