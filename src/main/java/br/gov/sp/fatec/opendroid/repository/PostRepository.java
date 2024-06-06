package br.gov.sp.fatec.opendroid.repository;

import br.gov.sp.fatec.opendroid.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {
}