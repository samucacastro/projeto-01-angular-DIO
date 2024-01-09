import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
	@Input() image: string = 'https://cdn.vectorstock.com/i/1000x1000/50/94/greece-economy-down-financial-crisis-debt-default-vector-8335094.webp';
	@Input() title: string = 'Titulo';
	@Input() content: string = 'Conteudo resumo';
	@Input() date: string = '11/11/2011';
	@Input() id: string = '0';
}
