import React, { useContext} from 'react'
import Layout from '../components/layout.js'
import MobileLayout from '../components/MobileLayout.js'
import VariableContext from '../context/VariableProvider.js';

const Events = () => {
    const { isMobile } = useContext(VariableContext);
    
    if (isMobile) {
        return (
            <MobileLayout>
                <h1>Empty Events Page</h1>
            </MobileLayout>
        )
    }
    return (
        <Layout showBanner={false}>
            <h1>Empty Events Page</h1>
        </Layout>
    );
}

export default Events