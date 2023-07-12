import React, { createContext,useState } from "react";
export const MealsContext = createContext();

const todaysMeals = [
    { id: 1, name: 'Baked Beans' },
    { id: 2, name: 'Baked Sweet Potatoes' },
    { id: 3, name: 'Baked Potatoes' },
]

const MealsProvider = (props) => {
    const [meals, setMeals] = useState(todaysMeals);

    const tickMeal = (id) => {
        setMeals(meals.map(e=>e.id===id?{...e,ticked:!e.ticked}:e))
    }

    return (
     <MealsContext.Provider value={{meals,tickMeal}}>
        {props.children}
     </MealsContext.Provider>
        
    )
};

export default MealsProvider;