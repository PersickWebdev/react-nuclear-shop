import { RegularExpressions } from '../utils';

interface IValidator {
    orderFormData: any;
    setOrderFormErrors: (state: any) => void;
}

interface IIsNotEmpty {
    orderFormData: any;
    key: string;
    setOrderFormErrors: (state: any) => void;
}

const ErrorMessages = {
    isRequired: 'This field is required',
    firstName: {
        tooShort: 'Name is too short. At least 2 characters',
        noSpecialCharacters: `Special characters allowed: space   .   ,   -   '`,
    },
    phone: 'Wrong format. Example: +380630001122',
    email: 'Wrong format. Example: test@gmail.com',
    comment: {
        tooLong: 'Too long. No more than 255 characters'
    }
}

const useValidator = () => {
    const isNotEmpty = ({ orderFormData, key, setOrderFormErrors }: IIsNotEmpty) => {
        if (!orderFormData[key]) {
            setOrderFormErrors((state: any) => {
                return {
                    ...state,
                    [key]: ErrorMessages.isRequired
                }
            });
            return false;
        }
        return true;
    };

    const firstNameValidator = ({ orderFormData, setOrderFormErrors }: IValidator) => {
        if (!isNotEmpty({ orderFormData, key: 'firstName', setOrderFormErrors })) return false;

        if (orderFormData.firstName.length < 2) {
            setOrderFormErrors((state: any) => {
                return {
                    ...state,
                    firstName: ErrorMessages.firstName.tooShort
                }
            });
            return false;
        }

        if (!RegularExpressions.name.test(orderFormData.firstName)) {
            setOrderFormErrors((state: any) => {
                return {
                    ...state,
                    firstName: ErrorMessages.firstName.noSpecialCharacters
                }
            });
            return false;
        }

        return true;
    };

    const phoneValidator = ({ orderFormData, setOrderFormErrors }: IValidator) => {
        if (!isNotEmpty({ orderFormData, key: 'phone', setOrderFormErrors })) return false;

        if (!RegularExpressions.phone.test(orderFormData.phone)) {
            setOrderFormErrors((state: any) => {
                return {
                    ...state,
                    phone: ErrorMessages.phone,
                }
            });
            return false;
        }

        return true;
    };

    const emailValidator = ({ orderFormData, setOrderFormErrors }: IValidator) => {
        if (!isNotEmpty({ orderFormData, key: 'email', setOrderFormErrors })) return false;

        if (!RegularExpressions.email.test(orderFormData.email)) {
            setOrderFormErrors((state: any) => {
                return {
                    ...state,
                    email: ErrorMessages.email,
                }
            });
            return false;
        }
        return true;
    };

    const addressValidator = ({ orderFormData, setOrderFormErrors }: IValidator) => {
        if (!isNotEmpty({ orderFormData, key: 'address', setOrderFormErrors })) {
            setOrderFormErrors((state: any) => {
                return {
                    ...state,
                    address: ErrorMessages.isRequired,
                }
            });
            return false;
        }
        return true;
    };

    const commentValidator = ({ orderFormData, setOrderFormErrors }: IValidator) => {
        if (orderFormData.comment.length > 255) {
            setOrderFormErrors((state: any) => {
               return {
                   ...state,
                   comment: ErrorMessages.comment.tooLong
               }
            });
            return false;
        }
        return true;
    };

    return { firstNameValidator, phoneValidator, emailValidator, addressValidator, commentValidator };
};

export default useValidator;