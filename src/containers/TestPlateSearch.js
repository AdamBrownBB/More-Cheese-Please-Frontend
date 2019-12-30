state = {
    flavor: "all",
    mildCheese: null,
    mediumCheese: null,
    boldCheese: null,
    bleuCheese: null,
    selectedDrinks: [],
    plates: []
}


addPlate = (newPlate) => {
    this.setState({
        plates: [...this.state.plates, newPlate]
    })
}

addCheese = (cheese) => {
    if (cheese.flavor === 'mild') {
        this.setState({ mildCheese: cheese, selectedDrinks: [...selectedDrinks, this.state.mildCheese.drinks] })
        
                this.setState({ selectedDrinks: this.state.mildCheese.drinks })
            } else {
                let drinkState = this.handleDrinks(this.state.mildCheese)
                this.setState({ selectedDrinks: drinkState })
            }
        })
    } else if
        (cheese.flavor === 'medium') {
        this.setState({ mediumCheese: cheese }, () => {
            if (this.state.selectedDrinks.length < 1) {
                this.setState({ selectedDrinks: this.state.mediumCheese.drinks })
            } else {
                let drinkState = this.handleDrinks(this.state.mediumCheese)
                this.setState({ selectedDrinks: drinkState })
            }
        })
    } else if
        (cheese.flavor === 'bold') {
        this.setState({ boldCheese: cheese }, () => {
            if (this.state.selectedDrinks.length < 1) {
                this.setState({ selectedDrinks: this.state.boldCheese.drinks })
            } else {
                let drinkState = this.handleDrinks(this.state.boldCheese)
                this.setState({ selectedDrinks: drinkState })
            }
        })
    } else if
        (cheese.flavor === 'bleu') {
        this.setState({ bleuCheese: cheese }, () => {
            if (this.state.selectedDrinks.length < 1) {
                this.setState({ selectedDrinks: this.state.bleuCheese.drinks })
            } else {
                this.state.bleuCheese.drinks.forEach(drink => {
                    selectedDrinks.push(drink)
                })

                let drinkState = this.handleDrinks(this.state.bleuCheese)
                this.setState({ selectedDrinks: drinkState })
            }
        })
    }
}

handleDrinks = (cheese) => {
    // console.log("second cheese selected drinks", cheese.drinks)
    // console.log("previous selected", this.state.selectedDrinks)
    let finalDrinks = [];

    this.state.selectedDrinks.forEach(drink => {
        if (cheese.drinks.find(cheesedrink => cheesedrink.id === drink.id)) {
            finalDrinks.push(drink);
        }
    })
        ;
    return finalDrinks
}