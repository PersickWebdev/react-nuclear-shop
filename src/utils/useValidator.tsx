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
        tooLong: 'Name is too long. No more than 250 characters',
    }
}

const useValidator = () => {
    // const isNotEmpty = ({ orderFormData, key, setOrderFormErrors }: IIsNotEmpty) => {
    //     if (!orderFormData[key]) {
    //         setOrderFormErrors((state: any) => {
    //             return {
    //                 ...state,
    //                 [key]: ErrorMessages.isRequired
    //             }
    //         });
    //         return false;
    //     } else {
    //         setOrderFormErrors((state: any) => {
    //             return {
    //                 ...state,
    //                 [key]: ''
    //             }
    //         });
    //         return false;
    //     }
    // };

    const firstNameValidator = ({ orderFormData, setOrderFormErrors }: IValidator) => {
        if (orderFormData.firstName.length < 2) {
            setOrderFormErrors((state: any) => {
                return {
                    ...state,
                    firstName: ErrorMessages.firstName.tooShort
                }
            });
            return false;
        } else {
            setOrderFormErrors((state: any) => {
                return {
                    ...state,
                    firstName: ''
                }
            });
            return true;
        }
    };

    return { firstNameValidator };
};

export default useValidator;