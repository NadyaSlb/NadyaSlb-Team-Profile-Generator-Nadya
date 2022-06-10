//add manager

const generateManager = (manager) => {
    `return
    <div>
    <div>
    <h2>${manager.name}</h2>`
    
}

const generateHTML = (manager) => {
    return`
    ${generateManager(manager)}`
}

module.exports = generateHTML;