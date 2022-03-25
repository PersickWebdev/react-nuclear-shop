import React, { useState, useEffect } from 'react';
import styles from './Cart.module.scss';
import { useDispatch } from 'react-redux';
import { CartActions } from '../../redux/actionCreators';
import { CartItem, OrderForm } from '../../components';
import { Button } from '../../ui';
import { useValidator } from '../../utils';
import { IProduct, IOrderFormData, IOrderFormErrors } from '../../types';

interface ICart {
    products: IProduct[];
    totalItemsPrice: number;
}

const Cart = ({ products, totalItemsPrice }: ICart) => {
    const dispatch = useDispatch();
    const { firstNameValidator, phoneValidator, emailValidator, addressValidator, commentValidator } = useValidator();
    const [ isOrderFormShown, setIsOrderFormShown ] = useState<boolean>(false);
    const [ orderFormData, setOrderFormData ] = useState<IOrderFormData>({
        firstName: '',
        phone: '',
        email: '',
        address: '',
        comment: '',
    });
    const [ orderFormErrors, setOrderFormErrors ] = useState<IOrderFormErrors>({
        firstName: '',
        phone: '',
        email: '',
        address: '',
        comment: '',
    });

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
            const isFirstNameValid = firstNameValidator({ orderFormData, setOrderFormErrors });
            const isPhoneValid = phoneValidator({ orderFormData, setOrderFormErrors });
            const isEmailValid = emailValidator({ orderFormData, setOrderFormErrors });
            const isAddressValid = addressValidator({ orderFormData, setOrderFormErrors });
            const isCommentValid = commentValidator({ orderFormData, setOrderFormErrors });

            return isFirstNameValid
                && isPhoneValid
                && isEmailValid
                && isAddressValid
                && isCommentValid
        };

        if (!isDataValid()) return;

        const orderData = {
            firstName: orderFormData.firstName,
            phone: orderFormData.phone,
            email: orderFormData.email,
            address: orderFormData.address,
            comment: orderFormData.comment,
        }
        console.log('Cart - orderData: ', orderData);
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
                        setOrderFormData={setOrderFormData}
                        orderFormErrors={orderFormErrors}
                        setOrderFormErrors={setOrderFormErrors}
                        submitHandler={submitHandler}
                        cancelHandler={cancelHandler}
                    />
                </div>
                :
                <></>
            }
        </div>
    );
};

export default Cart;