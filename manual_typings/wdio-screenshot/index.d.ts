declare namespace WebdriverIO {

    export interface Client<T> {
        saveDocumentScreenshot(fileName: string, option?: any): Client<void>;
        saveElementScreenshot(fileName: string, elementSelector: string, option?: any): Client<void>;
        saveViewportScreenshot(fileName: string, option?: any): Client<void>;
    }
}
