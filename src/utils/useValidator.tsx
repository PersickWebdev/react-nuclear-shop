import { RegularExpressions } from '../utils';

interface IValidator {
    formData: any;
    setFormErrors: (state: any) => void;
}

interface IIsNotEmpty {
    formData: any;
    key: string;
    setFormErrors: (state: any) => void;
}

const ErrorMessages = {
    isRequired: 'This field is required',
    firstName: {
        tooShort: 'Name is too short. At least 2 characters',
        noSpecialCharacters: `Special characters allowed: space   .   ,   -   '`,
    },
    phone: 'Wrong format. Example: +380630001122',
    email: 'Wrong format. Example: test@gmail.com',
    comment: 'Too long. No more than 155 characters'
}

const useValidator = () => {
    const isNotEmpty = ({ formData, key, setFormErrors }: IIsNotEmpty) => {
        if (!formData[key]) {
            setFormErrors((state: any) => {
                return {
                    ...state,
                    [key]: ErrorMessages.isRequired
                }
            });
            return false;
        }
        return true;
    };

    const firstNameValidator = ({ formData, setFormErrors }: IValidator) => {
        if (!isNotEmpty({ formData, key: 'firstName', setFormErrors })) return false;

        if (formData.firstName.length < 2) {
            setFormErrors((state: any) => {
                return {
                    ...state,
                    firstName: ErrorMessages.firstName.tooShort
                }
            });
            return false;
        }

        if (!RegularExpressions.name.test(formData.firstName)) {
            setFormErrors((state: any) => {
                return {
                    ...state,
                    firstName: ErrorMessages.firstName.noSpecialCharacters
                }
            });
            return false;
        }

        return true;
    };

    const phoneValidator = ({ formData, setFormErrors }: IValidator) => {
        if (!isNotEmpty({ formData, key: 'phone', setFormErrors })) return false;

        if (!RegularExpressions.phone.test(formData.phone)) {
            setFormErrors((state: any) => {
                return {
                    ...state,
                    phone: ErrorMessages.phone,
                }
            });
            return false;
        }

        return true;
    };

    const emailValidator = ({ formData, setFormErrors }: IValidator) => {
        if (!isNotEmpty({ formData, key: 'email', setFormErrors })) return false;

        if (!RegularExpressions.email.test(formData.email)) {
            setFormErrors((state: any) => {
                return {
                    ...state,
                    email: ErrorMessages.email,
                }
            });
            return false;
        }
        return true;
    };

    const addressValidator = ({ formData, setFormErrors }: IValidator) => {
        if (!isNotEmpty({ formData, key: 'address', setFormErrors })) {
            setFormErrors((state: any) => {
                return {
                    ...state,
                    address: ErrorMessages.isRequired,
                }
            });
            return false;
        }
        return true;
    };

    const commentValidator = ({ formData, setFormErrors }: IValidator) => {
        if (formData.comment.length > 255) {
            setFormErrors((state: any) => {
               return {
                   ...state,
                   comment: ErrorMessages.comment
               }
            });
            return false;
        }
        return true;
    };

    return {
        firstNameValidator,
        phoneValidator,
        emailValidator,
        addressValidator,
        commentValidator
    };
};

export default useValidator;