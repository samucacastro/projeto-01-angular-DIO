import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../../data-fake/noticias'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

//console.log(dataFake)

export class ContentComponent implements OnInit {
  @Input() contentPhoto: string = '';
  @Input() contentTitle: string = '';
  @Input() contentText: string = '';
  private Id: number = 0;

  constructor( private route:ActivatedRoute){
  }

  ngOnInit(): void {
  		//console.log(dataFake)
	  this.route.paramMap.subscribe( value => 
	  	this.Id = Number(value.get("id"))
	  )
	  this.setValueToContent(this.Id)
	  
  }

  setValueToContent(id:number){
	 const result = dataFake.filter((article)=>{
	 	return article.id === id;
	 })[0];
	 this.contentPhoto = result.photo
	 this.contentTitle = result.title
	 this.contentText = result.content
}

}
