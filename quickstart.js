import './subpage.js'

for (const button of document.querySelectorAll('.copy-command')) {
  button.addEventListener('click', async () => {
    const command = button.closest('.command')?.querySelector('code')?.textContent ?? ''
    await navigator.clipboard.writeText(command.trim())
    const locale = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en'
    button.textContent = locale === 'zh' ? '已复制' : 'Copied'
    window.setTimeout(() => { button.textContent = locale === 'zh' ? '复制' : 'Copy' }, 1200)
  })
}
