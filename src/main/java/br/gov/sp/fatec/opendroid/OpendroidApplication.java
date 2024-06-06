package br.gov.sp.fatec.opendroid;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OpendroidApplication {

    public static void main(String[] args) {
        SpringApplication.run(OpendroidApplication.class, args);
        System.out.println("""
                 _____                 ______           _     _\s
                |  _  |                |  _  \\         (_)   | |
                | | | |_ __   ___ _ __ | | | |_ __ ___  _  __| |
                | | | | '_ \\ / _ \\ '_ \\| | | | '__/ _ \\| |/ _` |
                \\ \\_/ / |_) |  __/ | | | |/ /| | | (_) | | (_| |
                 \\___/| .__/ \\___|_| |_|___/ |_|  \\___/|_|\\__,_|
                      | |                                      \s
                      |_|                                      \s
                            Version(1.0.0)
                            """);
    }

}