import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  mostrarTexto = false;

  color = ''

  tornarTextoVisivel():void {
    this.mostrarTexto = true;
  }

  alunos = [
    { nome: 'João', idade: '20' },
    { nome: 'Maria', idade: '72' },
    { nome: 'Pedro', idade: '19' }
  ]

  title = 'diretivasAngular';
  cor = 'vermelho';
}
