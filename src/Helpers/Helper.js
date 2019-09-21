export const formValid = ({ formErrors, form_input }) => {
        let valid = true;
    
        Object.values(formErrors).forEach(val => {
            val.length > 0 && (valid = false);
        });
    
        Object.values(form_input).forEach(val => {
            val.length === 0 && (valid = false)
        });
        return valid;
    }
    