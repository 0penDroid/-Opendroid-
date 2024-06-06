package br.gov.sp.fatec.opendroid.repository;

import br.gov.sp.fatec.opendroid.model.Achievement;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AchievementRepository extends MongoRepository<Achievement, String> {
}