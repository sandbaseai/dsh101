import './subpage.js'

for (const button of document.querySelectorAll('.copy-code')) {
  button.addEventListener('click', async () => {
    const code = document.getElementById(button.dataset.copyTarget)?.textContent ?? ''
    const zh = document.documentElement.lang.startsWith('zh')
    button.setAttribute('aria-live', 'polite')
    try {
      await navigator.clipboard.writeText(code.trim())
      button.textContent = zh ? '已复制' : 'Copied'
    } catch {
      button.textContent = zh ? '复制失败' : 'Copy failed'
    }
    window.setTimeout(() => { button.textContent = zh ? '复制' : 'Copy' }, 1200)
  })
}
