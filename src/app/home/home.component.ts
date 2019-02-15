import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(params => console.log('home detail id parameter', params['id']));
  }

  ngOnInit() {
  }

  navigate(path: string) {
    // By Url
    //this.router.navigateByUrl(`/home/${path}`);

    // Only default (primary) outlet
    this.router.navigate([path], { relativeTo: this.route });

    // Multiple outlets
    // this.router.navigate([
    //   {
    //     outlets: {
    //       primary: path,
    //     //  sidemenu: path
    //     }
    //   }
    // ],
    //   {
    //     relativeTo: this.route
    //   }
    // );
  }
}
