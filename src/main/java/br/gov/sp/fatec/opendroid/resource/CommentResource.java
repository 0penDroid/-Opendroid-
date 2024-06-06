package br.gov.sp.fatec.opendroid.resource;

import br.gov.sp.fatec.opendroid.model.Comment;
import br.gov.sp.fatec.opendroid.repository.CommentRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "Comments", description = "Comments end-points")
@RestController
@RequestMapping("/comment")
public class CommentResource {

    @Autowired
    private CommentRepository commentRepository;

    @Operation(summary = "Retrieve all Comments", description = "Get all Comments object. The response is all Comments object")
    @GetMapping("/findAll")
    public List<Comment> listarComments() {
        return commentRepository.findAll();
    }

    @Operation(summary = "Retrieve a Comment by Id", description = "Get a Comment object by specifying its id. The response is Comment object")
    @GetMapping("/find/{id}")
    public ResponseEntity<Comment> buscarCommentPorId(@PathVariable String id) {
        Optional<Comment> commentOptional = commentRepository.findById(id);
        return commentOptional.map(comment -> ResponseEntity.ok().body(comment)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Insert a Comment by Id", description = "Insert a Comment object. The response is Comment object")
    @PostMapping("/insert")
    public ResponseEntity<Comment> criarComment(@RequestBody Comment comment) {
        Comment novoComment = commentRepository.save(comment);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoComment);
    }

    @Operation(summary = "Update a Comment by Id", description = "Update a Comment object by specifying its id. The response is Comment object")
    @PutMapping("/update/{id}")
    public ResponseEntity<Comment> atualizarComment(@PathVariable String id, @RequestBody Comment comment) {
        if (!commentRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        comment.setId(id);
        Comment commentAtualizado = commentRepository.save(comment);
        return ResponseEntity.ok().body(commentAtualizado);
    }

    @Operation(summary = "Delete a Comment by Id", description = "Delete a Comment object by specifying its id. The response is Comment object")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletarComment(@PathVariable String id) {
        if (!commentRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        commentRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
