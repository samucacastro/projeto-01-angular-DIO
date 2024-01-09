import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})

export class BigCardComponent {
	@Input() image: string = 'https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg'
	@Input() date: string = ''
	@Input() title: string = 'Titulo da noticia'
	@Input() content: string = 'Conteudo da noticio'
	@Input() author: string = 'Anônimo'
	@Input() id: string = '0';
}
