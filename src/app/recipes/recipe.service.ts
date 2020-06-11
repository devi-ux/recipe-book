import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoping-list/shopping-list.service';
import * as ShopingListActions from '../shoping-list/store/shoping-list.actions';

@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
    new Recipe(
      'Meat Duck',
      'Super Tasty and Finger Licking Meat!',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261__340.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Lemon', 5)
      ]),
    new Recipe(
      'Salmon Sandwich',
      'What else do you need for the BreakFast?',
      'https://cdn.pixabay.com/photo/2015/07/22/18/27/salmon-sandwich-855911__340.jpg',
      [
        new Ingredient('Eggs', 4),
        new Ingredient('Bread Slices', 2),
        new Ingredient('Tomato', 3)
      ])
  ];

  // private recipes: Recipe[] = [];


  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<{ shopingList: {ingredients: Ingredient[]} }>
  ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();  //using slice() so that  we can use the copy of array, instead of original
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  AddIngredientsToShopList(ingredients: Ingredient[]) {
    this.store.dispatch(new ShopingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
