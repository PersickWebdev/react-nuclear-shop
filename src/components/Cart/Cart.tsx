import React, { useState, useEffect } from 'react';
import styles from './Cart.module.scss';
import { useDispatch } from 'react-redux';
import { CartActions } from '../../redux/actionCreators';
import { CartItem, OrderForm } from '../../components';
import { Button, Modal } from '../../ui';
import { useValidator } from '../../utils';
import { IProduct, IOrderFormData, IOrderFormErrors } from '../../types';

interface ICart {
    products: IProduct[];
    totalItemsPrice: number;
}

const Cart = ({ products, totalItemsPrice }: ICart) => {
    const dispatch = useDispatch();
    // @ts-ignore;
    const { firstNameValidator, phoneValidator, emailValidator, addressValidator, commentValidator } = useValidator();
    const [ isOrderFormShown, setIsOrderFormShown ] = useState<boolean>(false);
    const [ formData, setFormData ] = useState<IOrderFormData>({
        firstName: '',
        phone: '',
        email: '',
        address: '',
        comment: '',
    });
    const [ formErrors, setFormErrors ] = useState<IOrderFormErrors>({
        firstName: '',
        phone: '',
        email: '',
        address: '',
        comment: '',
    });
    const [ isModalVisible, setIsModalVisible ] = useState<boolean>(false);

    const cartItems: any = [];

    for (let array in products) {
        // @ts-ignore
        products[array].forEach((item: any) => {
            for (let obj of cartItems) {
                if (item.productId === obj.productId && item.parentId === obj.parentId) {
                    return;
                }
            }
            cartItems.push(item);
        });
    }

    const itemDecreaseHandler = (itemId: number) => {
        dispatch(CartActions.decrease(itemId));
    };

    const itemIncreaseHandler = (itemId: number) => {
        dispatch(CartActions.increase(itemId));
    };

    const itemRemoveHandler = (itemId: number) => {
        dispatch(CartActions.remove(itemId));
    };

    const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const isDataValid = () => {
            const isFirstNameValid = firstNameValidator({ formData, setFormErrors });
            const isPhoneValid = phoneValidator({ formData, setFormErrors });
            const isEmailValid = emailValidator({ formData, setFormErrors });
            const isAddressValid = addressValidator({ formData, setFormErrors });
            const isCommentValid = commentValidator({ formData, setFormErrors });

            return isFirstNameValid
                && isPhoneValid
                && isEmailValid
                && isAddressValid
                && isCommentValid
        };

        if (!isDataValid()) return;

        const orderData = {
            firstName: formData.firstName,
            phone: formData.phone,
            email: formData.email,
            address: formData.address,
            comment: formData.comment,
        }

        console.log('Cart - orderData: ', orderData);

        setIsModalVisible(true);

        dispatch(CartActions.clear());
    };

    const cancelHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsOrderFormShown(false);
    };

    const cartItemElements = cartItems.map((item: any) => {
        return (
            <CartItem
                key={`${item.parentId}_${item.productId}`}
                products={products}
                itemId={item.productId}
                itemName={item.productName}
                itemImage={item.productImage}
                itemDecreaseHandler={itemDecreaseHandler}
                itemIncreaseHandler={itemIncreaseHandler}
                itemRemoveHandler={itemRemoveHandler}
            />
        );
    });

    useEffect(() => {
        if (!cartItemElements.length) {
            setIsOrderFormShown(false);
        }
    }, [cartItemElements])

    return (
        <div className={styles['cart']}>
            <>
                {cartItemElements}
            </>
            <div className={styles['cart__actions']}>
                {!cartItemElements.length
                    ?
                    <p className={styles['cart__message']}>
                        No items
                    </p>
                    :
                    <Button
                        id="button-order"
                        name="button-order"
                        stylesPreset="success"
                        action={() => setIsOrderFormShown(true)}
                    >
                        Order for ${totalItemsPrice}
                    </Button>
                }
            </div>

            {isOrderFormShown
                ?
                <div className={styles['cart__order']}>
                    <h3 className={styles['cart__order-heading']}>
                        Order Checkout
                    </h3>
                    <OrderForm
                        setFormData={setFormData}
                        formErrors={formErrors}
                        setFormErrors={setFormErrors}
                        submitHandler={submitHandler}
                        cancelHandler={cancelHandler}
                    />
                </div>
                :
                <></>
            }
            <Modal
                heading='Your order confirmed!'
                message='Thanks for your order! Our manager will contact you as soon as possible. Have a nice time :)'
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            >
                <></>
            </Modal>
        </div>
    );
};

export default Cart;