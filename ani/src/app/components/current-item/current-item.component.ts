import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Current } from "src/app/models/Anime";
import { FaveService, Fave } from "src/app/services/fave.service";

@Component({
  selector: "app-current-item",
  templateUrl: "./current-item.component.html",
  styleUrls: ["./current-item.component.scss"]
})
export class CurrentItemComponent implements OnInit {
  checked: boolean;
  @Input() current: Current;

  constructor(private fave: FaveService) {}

  ngOnInit() {}

  //add anime title to user's favourite's list on firestore
  toggle() {
    if (this.checked == true) {
      const fave = {
        title: this.current.title,
        checked: true
      };
      this.fave.addFave(fave);
    }
  }
}
