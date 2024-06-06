import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss',
})
export class DocumentsComponent {
  constructor() {}

  openPDF(name: string) {
    if (name == 'CP') {
      window.open('https://student.dei.uc.pt/~ajfer/CP/CP%20Artigo%20-%20Open%20Source%20Software.pdf', '_blank');
    } else if (name == 'SD1') {
      window.open('https://www.inf.ufsc.br/~mauro.roisenberg/ine5377/Cursos-ICA/SD1-09-Memorias.pdf', '_blank');
    }
  }
}
