import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { DocDTO } from '../../models/doc.dto';
import { DocService } from '../../services/doc.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss',
})
export class DocumentsComponent implements OnInit {
  search!: string;
  docs!: DocDTO[];

  constructor(
    private docService: DocService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.docService.findAll().subscribe({
      next: (value) => {
        this.docs = value.body!;
        console.log(this.docs);
      },
    });
    this.filterService.getTermSearch().subscribe((term) => {
      this.search = term;
    });
  }

  openPDF(link: string) {
    window.open(link, '_blank');
  }

  cutTags(tag: string) {
    return tag.split(' ');
  }

  get filteredItens(): DocDTO[] {
    if (!this.search) {
      return this.docs;
    }
    return this.docs.filter((item) =>
      Object.values(item).some(
        (val) =>
          (typeof val === 'string' || val instanceof String) &&
          val.toLowerCase().includes(this.search.toLowerCase())
      )
    );
  }
}
