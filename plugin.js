import './subpage.js'

for (const button of document.querySelectorAll('.copy-code')) {
  button.addEventListener('click', async () => {
    const code = document.getElementById(button.dataset.copyTarget)?.textContent ?? ''
    await navigator.clipboard.writeText(code.trim())
    const zh = document.documentElement.lang.startsWith('zh')
    button.textContent = zh ? '已复制' : 'Copied'
    window.setTimeout(() => { button.textContent = zh ? '复制' : 'Copy' }, 1200)
  })
}
