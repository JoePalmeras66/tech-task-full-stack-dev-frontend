import { Provider } from 'jotai';
import App from './App';
import { Suspense } from 'react';

export const WrapperApp = () => {
    return(
        <>
            <Provider>
                <Suspense fallback={<div>Loading Data</div>}>
                    <App />
                </Suspense>
            </Provider>
        </>
    )
}