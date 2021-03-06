import { Component, OnInit } from "@angular/core";
import { Search } from "../../models/Anime";
import { ResultService } from "../../services/result.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchs: Search[];
  showSpinner: boolean = true;

  constructor(private resultService: ResultService) {}
  //subscribe to the JSON object
  ngOnInit() {
    this.resultService.currentMessage.subscribe(message => {
      this.searchs = message;
      console.log("success", message);
      this.showSpinner = false;
    });
  }
}
