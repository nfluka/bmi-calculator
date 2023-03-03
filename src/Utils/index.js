
const CATEGORY = {
    SevereThinness:   "Severe Thinness",
    ModerateThinness: "Moderate Thinness",
    MildThinness:     "Mild Thinness",
    Normal:           "Normal",
    Overweight:       "Overweight",
    ObeseClassI:      "Obese Class I",
    ObeseClassII:     "Obese Class II",
    ObeseClassIII:    "Obese Class III",
}

function calculateBMI (height, weight) {
    return weight / ((height / 100) ** 2);
}

function BMICategory(bmi) {

    switch (true) {
        case (bmi < 16): 
            return CATEGORY.SevereThinness; 
        case 
            (bmi >= 16   && bmi <= 17): 
                return CATEGORY.ModerateThinness; 
        case 
            (bmi >= 17.1   && bmi <= 18.5): 
                return CATEGORY.MildThinness; 
        case 
            (bmi >= 18.6 && bmi <= 25): 
                return CATEGORY.Normal; 
        case 
            (bmi >= 25.1   && bmi <= 30): 
                return CATEGORY.Overweight; 
        case 
            (bmi >= 30.1   && bmi <= 35): 
                return CATEGORY.ObeseClassI; 
        case 
            (bmi >= 35.1   && bmi <= 40): 
                return CATEGORY.ObeseClassII; 
        case (bmi > 40.1):
                return CATEGORY.ObeseClassIII; 
        default:
            return CATEGORY.Normal;
    }
}

export {
    calculateBMI,
    BMICategory
}