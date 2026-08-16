import './landing.css'
import './navigation.css'

const localeButtons = [...document.querySelectorAll('[data-locale]')]
const translatable = [...document.querySelectorAll('[data-zh][data-en]')]

function applyLocale(locale) {
  const english = locale === 'en'
  for (const node of translatable) node.textContent = node.dataset[locale]
  for (const button of localeButtons) button.classList.toggle('active', button.dataset.locale === locale)
  document.documentElement.lang = english ? 'en-US' : 'zh-CN'
  document.title = english
    ? 'DeepSeek Harness developer preview: Everything is a plugin'
    : 'DeepSeek Harness 开发者预览：一切皆插件'
  document.querySelector('meta[name="description"]').content = english
    ? 'DeepSeek Harness developer preview: every agent capability is a plugin that can be swapped or recomposed.'
    : 'DeepSeek Harness 开发者预览：一切皆插件。每项 Agent 能力都可替换、重组与扩展。'
  localStorage.setItem('dsh-landing-locale', locale)
}

for (const button of localeButtons) button.addEventListener('click', () => applyLocale(button.dataset.locale))

const requested = new URLSearchParams(location.search).get('lang')
applyLocale(requested === 'en' || localStorage.getItem('dsh-landing-locale') === 'en' ? 'en' : 'zh')

const commandTabs = [...document.querySelectorAll('.quick-tabs button')]
for (const tab of commandTabs) tab.addEventListener('click', () => {
  commandTabs.forEach(candidate => candidate.classList.toggle('active', candidate === tab))
  document.querySelector('#heroCommand').textContent = tab.dataset.command
})

const designTabs = [...document.querySelectorAll('.design-tabs button')]
for (const tab of designTabs) tab.addEventListener('click', () => {
  designTabs.forEach(candidate => candidate.classList.toggle('active', candidate === tab))
  document.querySelectorAll('.design-panel').forEach(panel => panel.classList.toggle('active', panel.id === tab.dataset.panel))
})

for (const button of document.querySelectorAll('.copy-command')) button.addEventListener('click', async () => {
  const value = document.querySelector(`#${button.dataset.target}`).textContent
  await navigator.clipboard.writeText(value)
  const original = button.textContent
  button.textContent = document.documentElement.lang === 'en-US' ? 'Copied' : '已复制'
  setTimeout(() => { button.textContent = original }, 1200)
})

const header = document.querySelector('.landing-header')
const menuToggle = document.querySelector('.menu-toggle')
const primaryNav = document.querySelector('#primaryNav')
const navGroupButton = document.querySelector('.nav-group > button')

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true'
  menuToggle.setAttribute('aria-expanded', String(open))
  header?.classList.toggle('menu-open', open)
})

navGroupButton?.addEventListener('click', () => {
  const open = navGroupButton.getAttribute('aria-expanded') !== 'true'
  navGroupButton.setAttribute('aria-expanded', String(open))
  navGroupButton.closest('.nav-group')?.classList.toggle('open', open)
})

primaryNav?.addEventListener('click', event => {
  if (event.target.closest('a') && window.matchMedia('(max-width: 900px)').matches) {
    menuToggle?.setAttribute('aria-expanded', 'false')
    header?.classList.remove('menu-open')
  }
})
