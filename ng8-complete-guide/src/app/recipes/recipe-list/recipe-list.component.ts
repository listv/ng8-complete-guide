import { Recipe } from "./../recipe.model";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A First Test Recipe",
      "This is a first simple test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"
    ),
    new Recipe(
      "A second Test Recipe",
      "This is a second simple test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"
    )
  ];
  constructor() {}
  @Output() recipeSelected = new EventEmitter<Recipe>();
  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
