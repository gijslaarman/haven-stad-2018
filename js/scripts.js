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

function renderData(dataset) {
    console.log(dataset)
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
        let section = this.parentNode.querySelector('.statistics') ? this.parentNode : this.parentNode.parentNode
        section.classList.toggle('openend')
        
        if (!statistics.getAttribute('class').includes('openend')) {
            // Remove the data if the statistics pane is closed. Maybe wait half a second to do this?
            return
        }

        // Grabbing the id of the section to match with the right data set for rendering the data.
        renderData(statistics.parentNode.getAttribute('id'))
    })
})