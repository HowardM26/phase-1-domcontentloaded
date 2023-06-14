// Your code goes here
document.addEventListener('DOMContentLoaded', () => {
    console.log('After DOM Loaded')
    document.body.innerHTML = document.body.innerHTML.replace('JavaScript is so cool. It lets me add text to my page programmatically.', 'This is really cool!')
})
console.log('Before DOM Loads')