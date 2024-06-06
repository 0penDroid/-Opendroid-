package br.gov.sp.fatec.opendroid.resource;

import br.gov.sp.fatec.opendroid.model.Subcategory;
import br.gov.sp.fatec.opendroid.repository.SubcategoryRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "Subcategories", description = "Subcategories end-points")
@RestController
@RequestMapping("/subcategory")
public class SubcategoryResource {

    @Autowired
    private SubcategoryRepository subcategoryRepository;

    @Operation(summary = "Retrieve all Subcategories", description = "Get all Subcategories object. The response is all Subcategories object")
    @GetMapping("/findAll")
    public List<Subcategory> listarSubcategories() {
        return subcategoryRepository.findAll();
    }

    @Operation(summary = "Retrieve a Subcategory by Id", description = "Get a Subcategory object by specifying its id. The response is Subcategory object")
    @GetMapping("/find/{id}")
    public ResponseEntity<Subcategory> buscarSubcategoryPorId(@PathVariable String id) {
        Optional<Subcategory> subcategoryOptional = subcategoryRepository.findById(id);
        return subcategoryOptional.map(subcategory -> ResponseEntity.ok().body(subcategory)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Insert a Subcategory by Id", description = "Insert a Subcategory object. The response is Subcategory object")
    @PostMapping("/insert")
    public ResponseEntity<Subcategory> criarSubcategory(@RequestBody Subcategory subcategory) {
        Subcategory novoSubcategory = subcategoryRepository.save(subcategory);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoSubcategory);
    }

    @Operation(summary = "Update a Subcategory by Id", description = "Update a Subcategory object by specifying its id. The response is Subcategory object")
    @PutMapping("/update/{id}")
    public ResponseEntity<Subcategory> atualizarSubcategory(@PathVariable String id, @RequestBody Subcategory subcategory) {
        if (!subcategoryRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        subcategory.setId(id);
        Subcategory subcategoryAtualizado = subcategoryRepository.save(subcategory);
        return ResponseEntity.ok().body(subcategoryAtualizado);
    }

    @Operation(summary = "Delete a Subcategory by Id", description = "Delete a Subcategory object by specifying its id. The response is Subcategory object")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletarSubcategory(@PathVariable String id) {
        if (!subcategoryRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        subcategoryRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
