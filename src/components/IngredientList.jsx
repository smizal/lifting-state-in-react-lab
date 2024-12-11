import Ingredient from './Ingredient'

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          ingredient={ingredient}
          index={index}
          functionName={addToBurger}
          arrow="►"
        />
      ))}
    </ul>
  )
}

export default IngredientList
