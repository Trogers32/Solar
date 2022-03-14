import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.NumberOfSolarPanels = 0;

        this.HandleSolarSelection = this.HandleSolarSelection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('An order was submitted for solar panels: ' + this.NumberOfSolarPanels);
        event.preventDefault();
    }

    HandleSolarSelection(event) {
        if (event.target.checked) {
            this.NumberOfSolarPanels++;
        } else {
            this.NumberOfSolarPanels--;
        }
        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render () {
    return (
        <div class="centered">
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tr>
                        <td>
                            <input type="checkbox" id="solar_panel1" name="solar_panel1" onClick={this.HandleSolarSelection}/>
                            <label for="solar_panel1"> Solar panel 1</label>
                        </td>
                        <td>
                            <input type="checkbox" id="solar_panel2" name="solar_panel2" onClick={this.HandleSolarSelection}/>
                            <label for="solar_panel2"> Solar panel 2</label>
                        </td>
                    </tr>
                </table>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
    }
}
