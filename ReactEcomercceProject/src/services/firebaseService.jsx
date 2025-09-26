import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export const createOrder = async (orderData) => {
    try {
        const ordersCollection = collection(db, 'orders');
        const orderWithTimestamp = {
            ...orderData,
            date: serverTimestamp()
        };
        const docRef = await addDoc(ordersCollection, orderWithTimestamp);
        return docRef.id;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};
