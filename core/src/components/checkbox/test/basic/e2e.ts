import { newE2EPage } from '@stencil/core/testing';

it('checkbox: basic', async () => {
  const page = await newE2EPage({
    url: '/src/components/checkbox/test/basic?ionic:_testing=true'
  });

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});
