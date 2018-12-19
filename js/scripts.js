function scrollTo(node, direction) {
    let nodeList = document.querySelectorAll(`.${node.parentNode.getAttribute('class')}`)
    let scrollIndex = Array.prototype.indexOf.call(nodeList, node.parentNode)

    if (direction === 'up') {
        scrollIndex = scrollIndex - 1
    }
    if (direction === 'down') {
        scrollIndex = scrollIndex + 1
    }

    document.querySelector('.scroll-wrapper').scrollTo({
        behavior: 'smooth',
        top: nodeList[scrollIndex].offsetTop
    })
}

document.querySelectorAll('.scrollDown').forEach(button => {
    button.addEventListener('click', function() {
        scrollTo(this, 'down')
    })
})

document.querySelectorAll('.scrollUp').forEach(button => {
    button.addEventListener('click', function() {
        scrollTo(this, 'up')
    })
})

document.querySelectorAll('.statBtn').forEach(button => {
    button.addEventListener('click', function() {
        this.parentNode.querySelector('.statistics') ? this.parentNode.querySelector('.statistics').classList.toggle('openend') : this.parentNode.parentNode.querySelector('.statistics').classList.toggle('openend')
    })
})