package br.gov.sp.fatec.opendroid.resource;

import br.gov.sp.fatec.opendroid.model.Achievement;
import br.gov.sp.fatec.opendroid.repository.AchievementRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "Achievements", description = "Achievements end-points")
@RestController
@RequestMapping("/achievement")
public class AchievementResource {

    @Autowired
    private AchievementRepository achievementRepository;

    @Operation(summary = "Retrieve all Achievements", description = "Get all Achievements object. The response is all Achievements object")
    @GetMapping("/findAll")
    public List<Achievement> listarAchievements() {
        return achievementRepository.findAll();
    }

    @Operation(summary = "Retrieve a Achievement by Id", description = "Get a Achievement object by specifying its id. The response is Achievement object")
    @GetMapping("/find/{id}")
    public ResponseEntity<Achievement> buscarAchievementPorId(@PathVariable String id) {
        Optional<Achievement> achievementOptional = achievementRepository.findById(id);
        return achievementOptional.map(achievement -> ResponseEntity.ok().body(achievement)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Insert new Achievement", description = "Insert a Achievement object. The response is Achievement object")
    @PostMapping("/insert")
    public ResponseEntity<Achievement> criarAchievement(@RequestBody Achievement achievement) {
        Achievement novoAchievement = achievementRepository.save(achievement);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoAchievement);
    }

    @Operation(summary = "Update a Achievement by Id", description = "Update a Achievement object by specifying its id. The response is Achievement object")
    @PutMapping("/update/{id}")
    public ResponseEntity<Achievement> atualizarAchievement(@PathVariable String id, @RequestBody Achievement achievement) {
        if (!achievementRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        achievement.setId(id);
        Achievement achievementAtualizado = achievementRepository.save(achievement);
        return ResponseEntity.ok().body(achievementAtualizado);
    }

    @Operation(summary = "Delete a Achievement by Id", description = "Delete a Achievement object by specifying its id. The response is Achievement object")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletarAchievement(@PathVariable String id) {
        if (!achievementRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        achievementRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
