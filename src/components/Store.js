import React, { useContext} from 'react';

// Components
import Product from './shared/Product';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            {
                products.map(product => <Product 
                                            key={product.id} 
                                            productData={product}
                                            id={product.id} 
                                        />)
            }
        </div>
    );
};

export default Store;