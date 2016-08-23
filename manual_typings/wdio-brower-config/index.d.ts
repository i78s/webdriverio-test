declare namespace WebdriverIO {

    export interface Client<T> {
        config: {
            TARGET: string;
            DEVICE: string;
        };
    }
}
