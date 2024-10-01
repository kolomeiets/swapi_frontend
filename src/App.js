import React from "react";
import "./App.css";
import BarChart from './BarChart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
      error: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
    fetch(process.env.REACT_APP_BACKEND_API_URL)
			.then((res) => res.json())
			.then((json) => {
        let s_data = []
        for (let film of json) {
          let known = 0
          let unknown = 0
          for (let starship of film.starships) {
            if (starship.cost_in_credits === 0) {
              unknown += 1
            } else {
              known += starship.cost_in_credits
            }
          }
          
          
          s_data.push({
            "episode": "Episode "+film.episode_id,
            "Credits spent (Millions)": (known / 1000000).toFixed(1),
            "Unknown cost (# of Starships)": unknown,
          })
        }
        
				this.setState({
					items: s_data,
					DataisLoaded: true,
				});
			})
      .catch(error => {
        console.error('Network error:', error);
        this.setState({
					error: true,
				});
      });;
	}
	render() {
		const { DataisLoaded, items, error } = this.state;
    if (error)
			return (
				<div>
					<h3> Ooops, seems like we can't fetch API data. Please check BackEnd connection.... </h3>
				</div>
			);

		if (!DataisLoaded)
			return (
				<div>
					<h1> Please wait some time.... </h1>
				</div>
			);

		return (
			<div className="App">
				
        <div>
        <h2 className="title">Galaxy Spending</h2>
          <p className="Greetings">
            Warm greetings,<br/>
            Below you can find a visual graph of galaxy spending from Star Wars universe. We took starships costs as a foundational entity for our calculations.<br/><br/>
            Key observations:<br/>
            - "Death Star" alone in episode 4 costs 1 Trillion credits, which makes it ~1,000 more than any other starship in the universe<br/><br/>
            Notes:<br/>
            - The light green bar represents the amount of credits spent (in millions)<br/>
            - The light red bar indicates the number of starships for which we can't determine the price<br/>
          </p>
          
          <BarChart data={items} />
				</div>
			</div>
		);
	}
}

export default App;
