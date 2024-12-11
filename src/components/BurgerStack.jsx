import Ingredient from './Ingredient'

const BurgerStack = ({ ingredients, removeFromBurger }) => {
  return (
    <ul>
      {ingredients.length ? '' : 'No Ingredients'}
      {ingredients.map((ingredient, index) => (
        <Ingredient
          ingredient={ingredient}
          index={index}
          functionName={removeFromBurger}
          arrow="◄"
        />
      ))}
    </ul>
  )
}

export default BurgerStack
