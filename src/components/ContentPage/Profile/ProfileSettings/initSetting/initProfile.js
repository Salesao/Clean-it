


    const initProfile = [
        {naming:"name",
    patternValue:/^[a-zA-Z][a-zA-Z-_]{0,31}$/,
    patterMessage:"Only string"},
        {naming:"surname",
    patternValue:/^[a-zA-Z][a-zA-Z-_]{0,31}$/,
    patterMessage:"Only string"},
        {naming:"email",
    patternValue:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    patterMessage:"Invalid email format"},
        {naming:"phone",
    patternValue:/^\+?\d{10,15}$/,
    patterMessage:"invalid phone format"},
    
    ]



export default initProfile