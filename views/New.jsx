const React = require('react')

function New(){
    return(
        <div>
            <form action = '/logs' method = 'POST'>
            Title: <input type="text" />
            Entry: <input type="textarea"/>
            Ship is Broken: <input type="checkbox"/>
             <input type="submit" value= "submit"/>
            </form>
        </div>
    )
}

module.exports = New