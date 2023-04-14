const React = require("react");

function Index({ logs }) {
  return (
    <div>
      <ul>
        {logs.map((log, i) => {
          <li key = {log._id}>
            <a href ={`/logs/${log._id}`}>{log.title}</a>
            {log.entry}
            {log.shipisBroken ? "It is broken" : "ship is good to go"}
            <form method="POST" action={`logs/${log.id}?_method=DELETE`}>
              <input type="submit" value="delete" />
            </form>
          </li>;
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
