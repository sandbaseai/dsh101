import './subpage.css'

const buttons = [...document.querySelectorAll('[data-locale]')]
const nodes = [...document.querySelectorAll('[data-zh][data-en]')]

function applyLocale(locale) {
  for (const node of nodes) node.textContent = node.dataset[locale]
  for (const button of buttons) button.classList.toggle('active', button.dataset.locale === locale)
  document.documentElement.lang = locale === 'en' ? 'en-US' : 'zh-CN'
  const title = document.querySelector('h1')?.textContent ?? 'DeepSeek Harness'
  document.title = `${title} · DeepSeek Harness`
  localStorage.setItem('dsh-landing-locale', locale)
}

for (const button of buttons) button.addEventListener('click', () => applyLocale(button.dataset.locale))
const requested = new URLSearchParams(location.search).get('lang')
applyLocale(requested === 'en' || localStorage.getItem('dsh-landing-locale') === 'en' ? 'en' : 'zh')
