package br.gov.sp.fatec.opendroid.model;

import jakarta.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Document(collection = "achievements")
public class Achievement {

    @Id
    private String id;

    private String achievement;

    private String description;

    public Achievement() {
    }

    public Achievement(String id, String achievement, String description) {
        this.id = id;
        this.achievement = achievement;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAchievement() {
        return achievement;
    }

    public void setAchievement(String achievement) {
        this.achievement = achievement;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Achievement that = (Achievement) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Achievement{" + "id=" + id + ", achievement='" + achievement + '\'' + ", description='" + description + '\'' + '}';
    }
}
