package br.gov.sp.fatec.opendroid.repository;

import br.gov.sp.fatec.opendroid.model.Subcategory;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SubcategoryRepository extends MongoRepository<Subcategory, String> {
}