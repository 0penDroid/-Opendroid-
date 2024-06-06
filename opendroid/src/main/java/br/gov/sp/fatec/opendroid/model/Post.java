package br.gov.sp.fatec.opendroid.model;

import jakarta.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.Objects;

@Document(collection = "posts")
public class Post {

    @Id
    private String id;

    private String titulo;

    private String descricao;

    private Date dataLancamento;

    private String especificacoes;

    private String instrucoes;

    public Post() {
    }

    public Post(String id, String titulo, String descricao, Date dataLancamento, String especificacoes, String instrucoes) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataLancamento = dataLancamento;
        this.especificacoes = especificacoes;
        this.instrucoes = instrucoes;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Date getDataLancamento() {
        return dataLancamento;
    }

    public void setDataLancamento(Date dataLancamento) {
        this.dataLancamento = dataLancamento;
    }

    public String getEspecificacoes() {
        return especificacoes;
    }

    public void setEspecificacoes(String especificacoes) {
        this.especificacoes = especificacoes;
    }

    public String getInstrucoes() {
        return instrucoes;
    }

    public void setInstrucoes(String instrucoes) {
        this.instrucoes = instrucoes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return Objects.equals(id, post.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Post{" + "id='" + id + '\'' + ", titulo='" + titulo + '\'' + ", descricao='" + descricao + '\'' + ", dataLancamento=" + dataLancamento + ", especificacoes='" + especificacoes + '\'' + ", instrucoes='" + instrucoes + '\'' + '}';
    }
}
