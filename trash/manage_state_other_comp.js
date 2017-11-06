/** @jsx React.DOM */

// Scenario #1

// You could pass a handler from <List /> to <Filters />, which could then be called on the onChange event to filter the list with the current value.

// the whole code does not work, does not dispaly anything at least...

var Filters = React.createClass({
    handleFilterChange: function() {
        var value = this.refs.filterInput.getDOMNode().value;
        this.props.updateFilter(value);
    },
    render: function() {
        return <input type="text" ref="filterInput" onChange={this.handleFilterChange} placeholder="Filter" />;
    }
});

var List = React.createClass({
    getInitialState: function() {
        return {
            listItems: ['Chicago', 'New York', 'Tokyo', 'London', 'San Francisco', 'Amsterdam', 'Hong Kong'],
            nameFilter: ''
        };
    },
    handleFilterUpdate: function(filterValue) {
        this.setState({
            nameFilter: filterValue
        });
    },
    render: function() {
        var displayedItems = this.state.listItems.filter(function(item) {
            var match = item.toLowerCase().indexOf(this.state.nameFilter.toLowerCase());
            return (match !== -1);
        }.bind(this));

        var content;
        if (displayedItems.length > 0) {
            var items = displayedItems.map(function(item) {
                return <li>{item}</li>;
            });
            content = <ul>{items}</ul>
        } else {
            content = <p>No items matching this filter</p>;
        }

        return (
            <div>
                <Filters updateFilter={this.handleFilterUpdate} />
                <h4>Results</h4>
                {content}
            </div>
        );
    }
});

React.renderComponent(<List />, document.body);