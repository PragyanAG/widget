import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import UserFeedback from '../UserFeedback';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-screen4',
  templateUrl: './screen4.component.html',
  styleUrls: ['./screen4.component.css']
})
export class Screen4Component implements OnInit {
  name1 = new FormControl('');
  name2 = new FormControl('');
  name3 = new FormControl('');
  
  userFeedbacks: any;
  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
    this.retrieveFeedback();
  }
  retrieveFeedback() {
    this.widgetService.getUserFeedbacks()
      .subscribe(
        data => {
          this.userFeedbacks = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
