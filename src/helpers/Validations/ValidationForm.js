const validationForm = (form) => {
    const errors= {};
    
    if (form.name.length < 3 || form.name.length > 140) {
        errors.name = "The name of the activity must have between 3 and 140 characters";
    }
    if (/[0-9$%|<>#@]/g.test(form.name)) {
        errors.name = "The name can't have special characters";
    }
    if (!form.name) {
        errors.name = "The name of the activity is required";
    }
    
    if (!form.difficulty || form.difficulty > 5 || form.difficulty < 1) {
        errors.difficulty = "The difficulty must be a number between 1 and 5"
    }
    if (/[^\d+$]/g.test(form.difficulty)) {
        errors.difficulty = "The difficulty must be a number";
    }
    
    if (!form.duration) {
        errors.duration = "The duration of the activity is required";
    }
    if (/[^\d+$]/g.test(form.duration)) {
        errors.duration = "The duration must be a number";
    }
    
    if (!form.season) {
        errors.season = "Must select 1 season";
    }
    
    if (!form.countries.length) {
        errors.countries = "You must add at least 1 country"
    }

    return errors;
};

export default validationForm;