import { Component, OnInit } from "@angular/core";
import { Person } from "src/classes/interfaces";
import { MainService } from "src/app/services/main.service";

@Component({
  selector: "app-list-persons",
  templateUrl: "./list-persons.component.html",
  styleUrls: ["./list-persons.component.css"]
})
export class ListPersonsComponent implements OnInit {
  persons: Person[];
  constructor(public service: MainService) {}

  ngOnInit() {
    this.service.getPersons().subscribe(
      data => {
        this.persons = data;
      },
      errparm => {
        console.log(errparm);
      },
      () => {
        console.log("Uvek!!");
      }
    );
  }

  addNonamePerson() {
    this.service
      .addPerson({
        firstName: "NoName",
        lastName: "",
        gender: "Male"
      })
      .subscribe(
        data => this.persons.push(data),
        e => console.log("Greska!!!", e)
      );
  }

  updateItem(item: Person) {
    item.firstName = "Updated!!!";
    this.service.updatePerson(item).subscribe(
      data => {
        item = data;
      },
      ex => console.log(ex)
    );
  }

  deleteItem(item: Person) {
    this.service.deletePerson(item.id).subscribe(data => {
      const idx = this.persons.findIndex(i => i.id === item.id);
      this.persons.splice(idx, 1);
    });
  }
}
