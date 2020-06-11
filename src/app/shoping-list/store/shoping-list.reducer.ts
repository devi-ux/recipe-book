
import { Ingredient } from '../../shared/ingredient.model';
import * as ShopingListActions from './shoping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Apple', 5),
    new Ingredient('Banana', 10)
  ]
}

export function ShopingListReducer(state = initialState, action: ShopingListActions.ShopingListActions) {
  switch (action.type) {
    case ShopingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
      case ShopingListActions.ADD_INGREDIENTS:
        return {
          ...state,
          ingredients: [...state.ingredients, ...action.payload]
        };
        case ShopingListActions.UPDATE_INGREDIENT:
          const ingredient = state.ingredients[action.payload.index];
          const updateIngredient = {
            ...ingredient,
            ...action.payload.ingredient
          };
          const updateIngredients = [...state.ingredients];
          updateIngredients[action.payload.index] = updateIngredient;

          return {
            ...state,
            ingredients: updateIngredients
          }
        case ShopingListActions.DELETE_INGREDIENT:
          return {
            ...state,
            ingredients: state.ingredients.filter((ig, igIndex) => {
              return igIndex !== action.payload;
            })
          };
    default:
      return state;
  }
}
