/**
 * <div id="heading">
 *  <div id="child1">
 *      <h1> I'm a h1 tag</h1>
 *      <h2> I'm a h1 tag</h2>
 *  </div>
 * <div id="child2">
 *      <h1> I'm a h1 tag</h1>
 *      <h2> I'm a h1 tag</h2>
 *  </div>
 * </div>
 */

const heading = React.createElement(
    "div",
    {id:"heading"},
    [
        React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]
    ),
        React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]
    )
    ]
);//heading is a js Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);//render method creates h1 tag and insert it into div which has id "root"
