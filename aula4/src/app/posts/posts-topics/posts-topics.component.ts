import { Component, OnInit } from '@angular/core';
import { PostsTopicsService } from 'src/app/services/posts-topics.service';

@Component({
  selector: 'app-posts-topics',
  templateUrl: './posts-topics.component.html',
  styleUrls: ['./posts-topics.component.scss']
})
export class PostsTopicsComponent implements OnInit {

  public topics : any [] = []

  constructor(
    private postsTopicsService: PostsTopicsService
  ) { }

  ngOnInit() {
    this.postsTopicsService.getList().subscribe(
      sucessRes => {
        console.log("sucessRes", sucessRes)
        this.topics = sucessRes.data
      },
      errorRes => {
        console.log("errorRes", errorRes)
      }
    )
  }

}
