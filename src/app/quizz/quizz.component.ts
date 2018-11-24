import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  myAngularxQrCode: string = null;

  constructor() {
  }

  generate(index: number) {
    this.myAngularxQrCode = '/' + index;

  }

  ngOnInit() {
  }

}
