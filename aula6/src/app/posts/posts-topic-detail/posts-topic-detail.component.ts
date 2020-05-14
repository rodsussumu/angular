import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-topic-detail',
  templateUrl: './posts-topic-detail.component.html',
  styleUrls: ['./posts-topic-detail.component.scss']
})
export class PostsTopicDetailComponent implements OnInit {

  constructor( private route : ActivatedRoute) { }

  ngOnInit() {
    let topicId: string = ""
    topicId = this.route.snapshot.params.topicId
    console.log("topicId", topicId)
  }

}
