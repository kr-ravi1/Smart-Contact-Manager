package com.scm.Implementations;

import com.scm.services.ImageService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageServiceImpl implements ImageService {


    @Override
    public String uploadImage(MultipartFile contactImage) {
        return "Image is here";
    }
}
