import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  private year: number;
  private month: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activeRoute.paramMap
      .subscribe( params => {
        this.year = +params.get("year");      
        this.month = +params.get("month");      
      }); 
  }

  private backToHome() : void {
    this.router.navigate(['/']);
  }
}
