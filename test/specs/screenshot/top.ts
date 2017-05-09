"use strict";

import env from '../../env';

describe('top', () => {
    it('take screenshot', () => {
        browser
            .url('/')
            .saveDocumentScreenshot(`${env.screenShotPath}top.png`);
    });
});