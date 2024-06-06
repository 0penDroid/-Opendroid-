package br.gov.sp.fatec.opendroid.repository;

import br.gov.sp.fatec.opendroid.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CategoryRepository extends MongoRepository<Category, String> {
}