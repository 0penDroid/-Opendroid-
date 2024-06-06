package br.gov.sp.fatec.opendroid.resource;

import br.gov.sp.fatec.opendroid.model.Category;
import br.gov.sp.fatec.opendroid.repository.CategoryRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "Categories", description = "Categories end-points")
@RestController
@RequestMapping("/category")
public class CategoryResource {

    @Autowired
    private CategoryRepository categoryRepository;

    @Operation(summary = "Retrieve all Categories", description = "Get all Categories object. The response is all Categories object")
    @GetMapping("/findAll")
    public List<Category> listarCategories() {
        return categoryRepository.findAll();
    }

    @Operation(summary = "Retrieve a Category by Id", description = "Get a Category object by specifying its id. The response is Category object")
    @GetMapping("/find/{id}")
    public ResponseEntity<Category> buscarCategoryPorId(@PathVariable String id) {
        Optional<Category> categoryOptional = categoryRepository.findById(id);
        return categoryOptional.map(category -> ResponseEntity.ok().body(category)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Insert a Category by Id", description = "Insert a Category object. The response is Category object")
    @PostMapping("/insert")
    public ResponseEntity<Category> criarCategory(@RequestBody Category category) {
        Category novoCategory = categoryRepository.save(category);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoCategory);
    }

    @Operation(summary = "Update a Category by Id", description = "Update a Category object by specifying its id. The response is Category object")
    @PutMapping("/update/{id}")
    public ResponseEntity<Category> atualizarCategory(@PathVariable String id, @RequestBody Category category) {
        if (!categoryRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        category.setId(id);
        Category categoryAtualizado = categoryRepository.save(category);
        return ResponseEntity.ok().body(categoryAtualizado);
    }

    @Operation(summary = "Delete a Category by Id", description = "Delete a Category object by specifying its id. The response is Category object")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletarCategory(@PathVariable String id) {
        if (!categoryRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        categoryRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
