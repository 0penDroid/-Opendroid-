import { AlertsService } from '../../services/alert.service';
import { CommentDTO } from '../../models/comment.dto';
import { CommentService } from '../../services/comment.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
})
export class ForumComponent implements OnInit {
  comments!: CommentDTO[];
  search!: string;
  cForm!: FormGroup;

  @ViewChild('commentPop', { static: false })
  commentPop!: ElementRef;

  constructor(
    private alert: AlertsService,
    private commentService: CommentService,
    private filterService: FilterService,
    private utils: UtilsService,
    private formBuilder: FormBuilder
  ) {
    this.cForm = this.formBuilder.group({
      title: ['', Validators.required],
      comment: ['', Validators.required],
      tag: ['#', Validators.required],
      date: [new Date(), Validators.required],
    });
  }

  ngOnInit(): void {
    this.commentService.findAll().subscribe({
      next: (value) => {
        this.comments = value.body!;
        this.comments.reverse();
        console.log(this.comments);
      },
    });
    this.filterService.getTermSearch().subscribe((term) => {
      this.search = term;
    });
  }

  insertComment() {
    if (this.cForm.valid) {
      this.commentService.insert(this.cForm.value).subscribe({
        next: (value) => {
          this.ngOnInit();
          this.alert.swalAlert(
            'success',
            'Postagem realizada com sucesso!',
            false,
            5000
          );
        },
      });
    } else {
      this.alert.swalAlert(
        'warning',
        `O Campo ${this.utils.findInvalidControls(this.cForm)} é inválido.`,
        false,
        5000
      );
    }
  }

  showCommentPop() {
    this.alert.swalCustomPop(this.commentPop, true);
  }

  cutTags(tag: string) {
    return tag.split(' ');
  }

  get filteredItens(): CommentDTO[] {
    if (!this.search) {
      return this.comments;
    }
    return this.comments.filter((item) =>
      Object.values(item).some(
        (val) =>
          (typeof val === 'string' || val instanceof String) &&
          val.toLowerCase().includes(this.search.toLowerCase())
      )
    );
  }
}
