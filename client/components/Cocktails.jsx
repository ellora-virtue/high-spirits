import React from 'react'

class Cocktails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      drinks: props.drinks,
      cocktail: props.cocktail
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.drinks !== this.props.drinks ||
      prevProps.cocktail !== this.props.cocktail) {
      this.setState({ cocktail: this.props.cocktail, drinks: this.props.drinks })
    }
  }

  render () {
    if (!this.state.drinks || !this.state.cocktail) {
      return null
    } else {
      // const drinks = this.state.drinks
      const x = this.state.cocktail
      const { strDrink: name, strInstructions: instructions, strDrinkThumb: image } = x
      const ingredients = [
        [x.strIngredient1, x.strMeasure1],
        [x.strIngredient2, x.strMeasure2],
        [x.strIngredient3, x.strMeasure3],
        [x.strIngredient4, x.strMeasure4],
        [x.strIngredient5, x.strMeasure5],
        [x.strIngredient6, x.strMeasure6],
        [x.strIngredient7, x.strMeasure7],
        [x.strIngredient8, x.strMeasure8],
        [x.strIngredient9, x.strMeasure9],
        [x.strIngredient10, x.strMeasure10],
        [x.strIngredient11, x.strMeasure11],
        [x.strIngredient12, x.strMeasure12],
        [x.strIngredient13, x.strMeasure13],
        [x.strIngredient14, x.strMeasure14],
        [x.strIngredient15, x.strMeasure15]]
      return (
      <>
        <div><h1>{name}</h1></div>
        <div className='container'>
          <div className='image'>
            <img src={image} alt={`image of a ${name}`} />
          </div>
          <div className='innerCont'>
            <div className='ingredients'>
              <span id='title'>Ingredients: </span>
              <ul>
                {ingredients.map((ingredient, idx) => {
                  if (ingredient[0] !== null || ingredient[1] !== null) {
                    return (
                      <li key={idx}>
                        <p>{ingredient[1]} {' '} {' '} {ingredient[0]}</p>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
            <div className='instructions'>
              <span id='title'>Instructions: </span>
              <div className='inner'>{instructions}</div>
            </div>
          </div>
        </div>
      </>
      )
    }
  }
}

export default Cocktails
