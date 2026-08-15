import './style.css'
import './style-extra.css'
import { installLocale } from './locales.js'

installLocale()

const root = document.documentElement
const sidebar = document.querySelector('#sidebar')
const overlay = document.querySelector('#overlay')
const dialog = document.querySelector('#searchDialog')
const input = document.querySelector('#searchInput')
const results = document.querySelector('#searchResults')
const progress = document.querySelector('#readingProgress')
const backToTop = document.querySelector('#backToTop')

function toggleMenu(force) {
  const open = force ?? !sidebar.classList.contains('open')
  sidebar.classList.toggle('open', open)
  overlay.classList.toggle('show', open)
  document.body.classList.toggle('locked', open)
}

document.querySelector('#menuButton').addEventListener('click', () => toggleMenu())
document.querySelector('#mobileMenu').addEventListener('click', () => toggleMenu())
overlay.addEventListener('click', () => toggleMenu(false))
sidebar.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(false)))

document.querySelector('#themeButton').addEventListener('click', () => {
  root.classList.toggle('dark')
  localStorage.setItem('dsh-theme', root.classList.contains('dark') ? 'dark' : 'light')
})

function openSearch() {
  dialog.showModal()
  setTimeout(() => input.focus(), 20)
}

document.querySelector('#searchButton').addEventListener('click', openSearch)
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    openSearch()
  }
})

input.addEventListener('input', () => {
  const query = input.value.trim().toLowerCase()
  const english = document.documentElement.lang === 'en'
  if (!query) {
    results.innerHTML = `<p>${english ? 'Type to search this page' : '输入关键词以搜索本页内容'}</p>`
    return
  }
  const matches = [...document.querySelectorAll('.content h2[id], .content h3[id]')]
    .filter(item => item.textContent.toLowerCase().includes(query))
  results.innerHTML = matches.length
    ? matches.map(item => `<a href="#${item.id}"><small>${english ? 'Use the Web UI' : '使用 Web UI'}</small><strong>${item.childNodes[0].textContent}</strong></a>`).join('')
    : `<p>${english ? 'No matching content' : '没有找到相关内容'}</p>`
  results.querySelectorAll('a').forEach(link => link.addEventListener('click', () => dialog.close()))
})

document.querySelectorAll('.copy').forEach(button => button.addEventListener('click', async () => {
  await navigator.clipboard.writeText(button.dataset.copy)
  const english = document.documentElement.lang === 'en'
  button.textContent = english ? 'Copied' : '已复制'
  setTimeout(() => { button.textContent = english ? 'Copy' : '复制' }, 1400)
}))

const headings = [...document.querySelectorAll('.content h2')]
const tocLinks = [...document.querySelectorAll('.toc a')]
const sidebarLinks = [...document.querySelectorAll('.sidebar a[href^="#"]')]
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).at(-1)
  if (!visible) return
  tocLinks.forEach(link => link.classList.toggle('current', link.hash === `#${visible.target.id}`))
  sidebarLinks.forEach(link => {
    const current = link.hash === `#${visible.target.id}`
    link.classList.toggle('selected', current)
    if (current) link.setAttribute('aria-current', 'location')
    else link.removeAttribute('aria-current')
  })
}, { rootMargin: '-90px 0px -72% 0px' })
headings.forEach(heading => observer.observe(heading))

function updateReadingProgress() {
  const article = document.querySelector('.content')
  const start = article.offsetTop
  const distance = article.scrollHeight - innerHeight
  const ratio = distance <= 0 ? 1 : Math.min(1, Math.max(0, (scrollY - start) / distance))
  progress.style.transform = `scaleX(${ratio})`
  backToTop.classList.toggle('visible', scrollY > 700)
}

addEventListener('scroll', updateReadingProgress, { passive: true })
addEventListener('resize', updateReadingProgress)
backToTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }))
updateReadingProgress()
