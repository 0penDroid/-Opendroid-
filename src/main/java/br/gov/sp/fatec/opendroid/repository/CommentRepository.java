package br.gov.sp.fatec.opendroid.repository;

import br.gov.sp.fatec.opendroid.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommentRepository extends MongoRepository<Comment, String> {
}