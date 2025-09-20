import { collection, getDocs, query, where, doc, getDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export const getProducts = async () => {
    try {
        const productsCollection = collection(db, 'products');
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error getting products:', error);
        throw error;
    }
};

export const getProductsByCategory = async (category) => {
    try {
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where('categoria', '==', category));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error getting products by category:', error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const productDoc = doc(db, 'products', id);
        const snapshot = await getDoc(productDoc);
        if (snapshot.exists()) {
            return { id: snapshot.id, ...snapshot.data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error getting product by id:', error);
        throw error;
    }
};

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
