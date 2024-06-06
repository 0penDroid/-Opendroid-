package br.gov.sp.fatec.opendroid.resource;

import br.gov.sp.fatec.opendroid.model.Post;
import br.gov.sp.fatec.opendroid.repository.PostRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "Posts", description = "Posts end-points")
@RestController
@RequestMapping("/post")
public class PostResource {

    @Autowired
    private PostRepository postRepository;

    @Operation(summary = "Retrieve all Posts", description = "Get all Posts object. The response is all Posts object")
    @GetMapping("/findAll")
    public List<Post> listarPosts() {
        return postRepository.findAll();
    }

    @Operation(summary = "Retrieve a Post by Id", description = "Get a Post object by specifying its id. The response is Post object")
    @GetMapping("/find/{id}")
    public ResponseEntity<Post> buscarPostPorId(@PathVariable String id) {
        Optional<Post> postOptional = postRepository.findById(id);
        return postOptional.map(post -> ResponseEntity.ok().body(post)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Insert a Post by Id", description = "Insert a Post object. The response is Post object")
    @PostMapping("/insert")
    public ResponseEntity<Post> criarPost(@RequestBody Post post) {
        Post novoPost = postRepository.save(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoPost);
    }

    @Operation(summary = "Update a Post by Id", description = "Update a Post object by specifying its id. The response is Post object")
    @PutMapping("/update/{id}")
    public ResponseEntity<Post> atualizarPost(@PathVariable String id, @RequestBody Post post) {
        if (!postRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        post.setId(id);
        Post postAtualizado = postRepository.save(post);
        return ResponseEntity.ok().body(postAtualizado);
    }

    @Operation(summary = "Delete a Post by Id", description = "Delete a Post object by specifying its id. The response is Post object")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletarPost(@PathVariable String id) {
        if (!postRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        postRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
