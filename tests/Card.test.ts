import { expect, test } from '@playwright/test'

const path = '/iframe.html?args=&globals=&id=components-card--card-default'

test.beforeEach(async ({ page }) => {
  await page.goto(path)
})

test('компонент определён', async ({ page }) => {
  const componentElement = page.locator('card-component')
  expect(componentElement).toBeDefined()
})

test('карточка содержит заголовок h3', async ({ page }) => {
  const titleElement = page.locator('h3')
  await expect(titleElement).toBeVisible()
})

test('карточка содержит заголовок с текстом Food', async ({ page }) => {
  const titleElementText = await page.locator('h3').innerText()
  expect(titleElementText).toBe('Food')
})

test('карточка содержит параграф с текстом Lorem...', async ({ page }) => {
  // найти элемент и проверить его текст по аналогии с заголовком
})


test('карточка содержит ссылку с текстом Read и ссылкой на ya.ru', async ({ page }) => {
  // найти элемент, проверить его текст по аналогии 
  // с заголовком, проверить атрибут href (можно почитать
  //  документацию либо использовать подсказки редактора)
})

test('в слот image подставлено изображение', async ({ page }) => {
  const cardComponent = page.locator('card-component')

  const imageElement = cardComponent.locator('img[slot="image"]')
  await expect(imageElement).toBeVisible()
  await expect(imageElement).toHaveAttribute('src')
});


test('в слот title подставлен заголовок', async ({ page }) => {
  // по аналогии с тестом выше найти cardComponent,
  // найти в нем элемент, подставленный в слот title,
  // убедиться, что его тип - это h3 и он отображен
});

test('в слот content подставлен параграф ', async ({ page }) => {
  // по аналогии с тестом выше найти cardComponent,
  // найти в нем элемент, подставленный в слот content,
  // убедиться, что его тип - это p и он отображен
});

test('в слот ui подставлена ссылка ', async ({ page }) => {
  // по аналогии с тестом выше найти cardComponent,
  // найти в нем элемент, подставленный в слот ui,
  // убедиться, что его тип - это a и он отображен
});
