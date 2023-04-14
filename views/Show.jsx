const React = require('react')

function Show({log}){
    return (
        <div>
            {log.title}
            {log.entry}
            {log.shipIsBroken ? "Fix the ship" : "Lets finish the course"}
        </div>
    )
}

module.exports = Show